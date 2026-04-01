'use client'

import { useMemo, useState } from 'react'

import { PayloadFormRenderer } from '@/cms/payload-form-renderer'

type FormIntent =
  | 'demo'
  | 'stand'
  | 'migration'
  | 'architecture'
  | 'customization'
  | 'partner'

const intentOptions: { value: FormIntent; label: string }[] = [
  { value: 'demo', label: 'Интересует демо' },
  { value: 'stand', label: 'Интересует демо-стенд' },
  { value: 'migration', label: 'Интересует миграция' },
  { value: 'architecture', label: 'Интересует архитектура' },
  { value: 'customization', label: 'Интересует кастомизация' },
  { value: 'partner', label: 'Интересует партнерство' },
]

const intentConfig: Record<
  FormIntent,
  {
    slug: string
    intent: string
    product: string
  }
> = {
  demo: {
    slug: 'contacts-demo',
    intent: 'demo',
    product: 'todo-enterprise',
  },
  stand: {
    slug: 'contacts-stand',
    intent: 'stand',
    product: 'todo-enterprise',
  },
  migration: {
    slug: 'contacts-migration',
    intent: 'migration',
    product: 'todo-enterprise',
  },
  architecture: {
    slug: 'contacts-architecture',
    intent: 'architecture',
    product: 'todo-enterprise',
  },
  customization: {
    slug: 'contacts-customization',
    intent: 'customization',
    product: 'todo-enterprise',
  },
  partner: {
    slug: 'contacts-partner',
    intent: 'partner',
    product: 'partnership',
  },
}

export function ContactForm() {
  const [intent, setIntent] = useState<FormIntent>('demo')

  const currentForm = useMemo(() => intentConfig[intent], [intent])

  return (
    <section id="form" className="py-20 bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Оставьте запрос
          </h2>
        </div>

        <div className="p-8 rounded-2xl bg-card border border-border">
          <div className="mb-8">
            <label className="block text-sm font-medium text-foreground mb-3">
              Что вас интересует?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {intentOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setIntent(option.value)}
                  className={`px-3 py-2 text-sm rounded-lg border transition-all duration-200 ${
                    intent === option.value
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background border-border text-foreground-secondary hover:border-primary/40 hover:text-foreground'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <PayloadFormRenderer
            formSlug={currentForm.slug}
            themeVariant="dark"
            submitVariant="primary"
            withCard={false}
            sourcePage="contacts"
            sourceSection="contact-form"
            product={currentForm.product}
            intent={currentForm.intent}
            successTitle="Спасибо за запрос"
            successDescription="Мы свяжемся с вами в ближайшее время."
          />
        </div>
      </div>
    </section>
  )
}