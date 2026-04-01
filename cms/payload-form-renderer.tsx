'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircle2, Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

type ThemeVariant = 'dark' | 'light'
type SubmitVariant = 'primary' | 'accent-red'

type FormOption = {
  label: string
  value: string
}

type SupportedFieldBlock =
  | 'text'
  | 'email'
  | 'number'
  | 'textarea'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'message'

type PayloadFormField = {
  id?: string
  blockType: SupportedFieldBlock | string
  name?: string
  label?: string
  required?: boolean
  width?: number
  placeholder?: string
  defaultValue?: string | number | boolean | string[]
  options?: FormOption[]
  message?: unknown
}

type PayloadFormDocument = {
  id: number | string
  title?: string
  fields?: PayloadFormField[]
  submitButtonLabel?: string
  confirmationType?: 'message' | 'redirect'
  confirmationMessage?: unknown
  redirect?: {
    url?: string
  } | null
}

type FormStateValue = string | number | boolean | string[]

type SubmitMetadata = {
  sourcePage?: string
  sourceSection?: string
  modalType?: string
  product?: string
  intent?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
}

interface PayloadFormRendererProps extends SubmitMetadata {
  formSlug: string
  themeVariant?: ThemeVariant
  submitVariant?: SubmitVariant
  className?: string
  cardClassName?: string
  showFormTitle?: boolean
  withCard?: boolean
  emptyStateTitle?: string
  emptyStateDescription?: string
  successTitle?: string
  successDescription?: string
}

type FormsResponse = {
  docs?: PayloadFormDocument[]
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function extractPlainText(value: unknown): string {
  if (typeof value === 'string') return value
  if (Array.isArray(value)) return value.map(extractPlainText).join(' ').trim()

  if (!isRecord(value)) return ''

  const directText = typeof value.text === 'string' ? value.text : ''
  const directMessage = typeof value.message === 'string' ? value.message : ''
  const childrenText = Array.isArray(value.children)
    ? value.children.map(extractPlainText).join(' ')
    : ''

  return [directText, directMessage, childrenText].filter(Boolean).join(' ').trim()
}

function buildInitialState(fields: PayloadFormField[]): Record<string, FormStateValue> {
  return fields.reduce<Record<string, FormStateValue>>((acc, field) => {
    if (!field.name) return acc

    if (field.blockType === 'checkbox' && field.options?.length) {
      acc[field.name] = Array.isArray(field.defaultValue) ? field.defaultValue : []
      return acc
    }

    if (field.blockType === 'checkbox') {
      acc[field.name] = typeof field.defaultValue === 'boolean' ? field.defaultValue : false
      return acc
    }

    if (field.blockType === 'number') {
      acc[field.name] =
        typeof field.defaultValue === 'number'
          ? field.defaultValue
          : typeof field.defaultValue === 'string'
            ? field.defaultValue
            : ''
      return acc
    }

    acc[field.name] =
      typeof field.defaultValue === 'string' || typeof field.defaultValue === 'number'
        ? field.defaultValue
        : ''

    return acc
  }, {})
}

export function PayloadFormRenderer({
  formSlug,
  themeVariant = 'dark',
  submitVariant = 'primary',
  className,
  cardClassName,
  showFormTitle = false,
  withCard = true,
  emptyStateTitle = 'Форма не найдена',
  emptyStateDescription = 'Форма с указанным slug пока не создана в Payload CMS.',
  successTitle = 'Спасибо за заявку',
  successDescription = 'Мы свяжемся с вами в ближайшее время.',
  sourcePage,
  sourceSection,
  modalType,
  product,
  intent,
  utmSource,
  utmMedium,
  utmCampaign,
}: PayloadFormRendererProps) {
  const router = useRouter()

  const [form, setForm] = useState<PayloadFormDocument | null>(null)
  const [values, setValues] = useState<Record<string, FormStateValue>>({})
  const [isLoading, setIsLoading] = useState(true)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    const loadForm = async () => {
      try {
        setIsLoading(true)
        setLoadError(null)
        setSubmitError(null)
        setIsSubmitted(false)

        const params = new URLSearchParams()
        params.set('where[slug][equals]', formSlug)
        params.set('limit', '1')
        params.set('depth', '1')

        const response = await fetch(`/api/forms?${params.toString()}`, {
          method: 'GET',
          cache: 'no-store',
        })

        if (!response.ok) {
          throw new Error(`Failed to load form: ${response.status}`)
        }

        const data = (await response.json()) as FormsResponse
        const loadedForm = data.docs?.[0] ?? null

        if (!isMounted) return

        setForm(loadedForm)

        if (loadedForm?.fields) {
          setValues(buildInitialState(loadedForm.fields))
        } else {
          setValues({})
        }
      } catch (error) {
        if (!isMounted) return
        setLoadError(error instanceof Error ? error.message : 'Не удалось загрузить форму')
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    void loadForm()

    return () => {
      isMounted = false
    }
  }, [formSlug])

  const styles = useMemo(() => {
    if (themeVariant === 'light') {
      return {
        card: 'bg-white border-border-light',
        title: 'text-foreground-dark',
        text: 'text-foreground-dark-secondary',
        label: 'text-foreground-dark',
        input:
          'bg-background-light-secondary border-border-light text-foreground-dark placeholder:text-foreground-dark-secondary',
        note: 'text-foreground-dark-secondary',
        successCard: 'bg-white border-border-light',
      }
    }

    return {
      card: 'bg-card border-card-border',
      title: 'text-foreground',
      text: 'text-foreground-secondary',
      label: 'text-foreground',
      input:
        'bg-background border-card-border text-foreground placeholder:text-foreground-muted',
      note: 'text-foreground-muted',
      successCard: 'bg-card border-card-border',
    }
  }, [themeVariant])

  const submitButtonClasses =
    submitVariant === 'accent-red'
      ? 'bg-accent-red hover:bg-accent-red-muted text-primary-foreground'
      : 'bg-primary hover:bg-primary-hover text-primary-foreground'

  const containerClasses = withCard
    ? cn('rounded-2xl border p-8', styles.card, className, cardClassName)
    : cn(className)

  const handleChange = (name: string, value: FormStateValue) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxGroupChange = (name: string, optionValue: string, checked: boolean) => {
    const current = Array.isArray(values[name]) ? values[name] : []

    const next = checked
      ? [...current, optionValue]
      : current.filter((item) => item !== optionValue)

    handleChange(name, next)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!form?.id || !form.fields?.length) return

    try {
      setIsSubmitting(true)
      setSubmitError(null)

      const submissionData = form.fields
        .filter((field) => field.name && field.blockType !== 'message')
        .map((field) => ({
          field: field.name as string,
          value: values[field.name as string],
        }))

      const response = await fetch('/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form: form.id,
          submissionData,
          sourcePage,
          sourceSection,
          modalType,
          product,
          intent,
          utmSource,
          utmMedium,
          utmCampaign,
        }),
      })

      if (!response.ok) {
        const errorPayload = await response.json().catch(() => null)
        const message =
          isRecord(errorPayload) && typeof errorPayload.errors === 'string'
            ? errorPayload.errors
            : 'Не удалось отправить форму'

        throw new Error(message)
      }

      if (form.confirmationType === 'redirect' && form.redirect?.url) {
        router.push(form.redirect.url)
        return
      }

      setIsSubmitted(true)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Ошибка отправки формы')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <div className={containerClasses}>
        <div className="flex items-center justify-center gap-2 py-6">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span className={styles.text}>Загрузка формы...</span>
        </div>
      </div>
    )
  }

  if (loadError) {
    return (
      <div className={containerClasses}>
        <h3 className={cn('text-lg font-semibold mb-2 text-center', styles.title)}>
          Ошибка загрузки формы
        </h3>
        <p className={cn('text-center', styles.text)}>{loadError}</p>
      </div>
    )
  }

  if (!form) {
    return (
      <div className={containerClasses}>
        <h3 className={cn('text-lg font-semibold mb-2 text-center', styles.title)}>
          {emptyStateTitle}
        </h3>
        <p className={cn('text-center', styles.text)}>{emptyStateDescription}</p>
      </div>
    )
  }

  if (isSubmitted) {
    const confirmationMessage = extractPlainText(form.confirmationMessage)

    return (
      <div className={containerClasses}>
        <div className="text-center py-4">
          <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-500" />
          </div>
          <h3 className={cn('text-xl font-semibold mb-2', styles.title)}>{successTitle}</h3>
          <p className={styles.text}>{confirmationMessage || successDescription}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={containerClasses}>
      {showFormTitle && form.title ? (
        <h3 className={cn('text-lg font-semibold mb-6 text-center', styles.title)}>{form.title}</h3>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-5">
        {form.fields?.map((field, index) => {
          const key = field.id || `${field.blockType}-${field.name || index}`

          if (field.blockType === 'message') {
            const messageText = extractPlainText(field.message)
            if (!messageText) return null

            return (
              <div key={key} className={cn('text-sm leading-6', styles.text)}>
                {messageText}
              </div>
            )
          }

          if (!field.name) return null

          const value = values[field.name]

          if (field.blockType === 'textarea') {
            return (
              <div key={key}>
                <label className={cn('block text-sm font-medium mb-2', styles.label)}>
                  {field.label || field.name}
                  {field.required ? <span className="text-accent-red ml-1">*</span> : null}
                </label>
                <Textarea
                  required={field.required}
                  value={typeof value === 'string' ? value : ''}
                  onChange={(e) => handleChange(field.name as string, e.target.value)}
                  placeholder={field.placeholder}
                  rows={4}
                  className={cn('resize-none', styles.input)}
                />
              </div>
            )
          }

          if (field.blockType === 'select') {
            return (
              <div key={key}>
                <label className={cn('block text-sm font-medium mb-2', styles.label)}>
                  {field.label || field.name}
                  {field.required ? <span className="text-accent-red ml-1">*</span> : null}
                </label>
                <select
                  required={field.required}
                  value={typeof value === 'string' || typeof value === 'number' ? String(value) : ''}
                  onChange={(e) => handleChange(field.name as string, e.target.value)}
                  className={cn(
                    'w-full h-11 px-3 rounded-md border outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50',
                    styles.input,
                  )}
                >
                  <option value="">{field.placeholder || 'Выберите вариант'}</option>
                  {field.options?.map((option) => (
                    <option key={`${field.name}-${option.value}`} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            )
          }

          if (field.blockType === 'radio') {
            return (
              <div key={key}>
                <span className={cn('block text-sm font-medium mb-3', styles.label)}>
                  {field.label || field.name}
                  {field.required ? <span className="text-accent-red ml-1">*</span> : null}
                </span>
                <div className="space-y-2">
                  {field.options?.map((option) => (
                    <label
                      key={`${field.name}-${option.value}`}
                      className={cn('flex items-center gap-2 text-sm', styles.text)}
                    >
                      <input
                        type="radio"
                        name={field.name}
                        value={option.value}
                        checked={value === option.value}
                        onChange={() => handleChange(field.name as string, option.value)}
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )
          }

          if (field.blockType === 'checkbox' && field.options?.length) {
            const currentValues = Array.isArray(value) ? value : []

            return (
              <div key={key}>
                <span className={cn('block text-sm font-medium mb-3', styles.label)}>
                  {field.label || field.name}
                  {field.required ? <span className="text-accent-red ml-1">*</span> : null}
                </span>
                <div className="space-y-2">
                  {field.options.map((option) => (
                    <label
                      key={`${field.name}-${option.value}`}
                      className={cn('flex items-center gap-2 text-sm', styles.text)}
                    >
                      <input
                        type="checkbox"
                        checked={currentValues.includes(option.value)}
                        onChange={(e) =>
                          handleCheckboxGroupChange(
                            field.name as string,
                            option.value,
                            e.target.checked,
                          )
                        }
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )
          }

          if (field.blockType === 'checkbox') {
            return (
              <label key={key} className={cn('flex items-center gap-3 text-sm', styles.text)}>
                <input
                  type="checkbox"
                  checked={Boolean(value)}
                  onChange={(e) => handleChange(field.name as string, e.target.checked)}
                />
                <span>
                  {field.label || field.name}
                  {field.required ? <span className="text-accent-red ml-1">*</span> : null}
                </span>
              </label>
            )
          }

          const inputType =
            field.blockType === 'email'
              ? 'email'
              : field.blockType === 'number'
                ? 'number'
                : 'text'

          return (
            <div key={key}>
              <label className={cn('block text-sm font-medium mb-2', styles.label)}>
                {field.label || field.name}
                {field.required ? <span className="text-accent-red ml-1">*</span> : null}
              </label>
              <Input
                type={inputType}
                required={field.required}
                value={typeof value === 'string' || typeof value === 'number' ? String(value) : ''}
                onChange={(e) => handleChange(field.name as string, e.target.value)}
                placeholder={field.placeholder}
                className={styles.input}
              />
            </div>
          )
        })}

        {submitError ? <p className="text-sm text-red-500">{submitError}</p> : null}

        <Button
          type="submit"
          disabled={isSubmitting}
          className={cn('w-full h-12 text-base font-medium', submitButtonClasses)}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Отправка...
            </span>
          ) : (
            form.submitButtonLabel || 'Отправить'
          )}
        </Button>

        <p className={cn('text-xs text-center', styles.note)}>
          Нажимая кнопку, вы соглашаетесь на обработку персональных данных
        </p>
      </form>
    </div>
  )
}