'use client'

import { useMemo, useState } from 'react'

import { PayloadFormRenderer } from '@/cms/payload-form-renderer'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type FormIntent =
  | 'demo'
  | 'stand'
  | 'pilot'
  | 'migration'
  | 'architecture'
  | 'customization'

const intentOptions: { value: FormIntent; label: string }[] = [
  { value: 'demo', label: 'Интересует демо' },
  { value: 'stand', label: 'Интересует демо-стенд' },
  { value: 'pilot', label: 'Интересует пилот' },
  { value: 'migration', label: 'Интересует миграция' },
  { value: 'architecture', label: 'Интересует архитектура' },
  { value: 'customization', label: 'Интересует кастомизация' },
]

const intentConfig: Record<
  FormIntent,
  {
    slug: string
    title: string
    intent: string
  }
> = {
  demo: {
    slug: 'demo-main-demo',
    title: 'Запрос демо ToDo Enterprise',
    intent: 'demo',
  },
  stand: {
    slug: 'demo-main-stand',
    title: 'Запрос демо-стенда ToDo Enterprise',
    intent: 'stand',
  },
  pilot: {
    slug: 'demo-main-pilot',
    title: 'Обсудить пилот ToDo Enterprise',
    intent: 'pilot',
  },
  migration: {
    slug: 'demo-main-migration',
    title: 'Обсудить миграцию на ToDo Enterprise',
    intent: 'migration',
  },
  architecture: {
    slug: 'demo-main-architecture',
    title: 'Обсудить архитектуру размещения',
    intent: 'architecture',
  },
  customization: {
    slug: 'demo-main-customization',
    title: 'Обсудить кастомизацию ToDo Enterprise',
    intent: 'customization',
  },
}

export function MainForm() {
  const [intent, setIntent] = useState<FormIntent>('demo')

  const currentForm = useMemo(() => intentConfig[intent], [intent])

  return (
    <section id="main-form" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Оставьте запрос
          </h2>
        </div>

        <div className="p-8 rounded-2xl bg-card border border-card-border">
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
            {currentForm.title}
          </h3>

          <div className="mb-5">
            <label className="block text-sm font-medium text-foreground-secondary mb-2">
              Что вас интересует?
            </label>
            <Select value={intent} onValueChange={(value) => setIntent(value as FormIntent)}>
              <SelectTrigger className="w-full h-11 bg-background border-card-border text-foreground">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-card border-card-border">
                {intentOptions.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="text-foreground hover:bg-card-hover"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <PayloadFormRenderer
            formSlug={currentForm.slug}
            themeVariant="dark"
            submitVariant="primary"
            withCard={false}
            sourcePage="demo"
            sourceSection="main-form"
            product="todo-enterprise"
            intent={currentForm.intent}
            successTitle="Спасибо за запрос"
            successDescription="Мы свяжемся с вами в ближайшее время."
          />
        </div>
      </div>
    </section>
  )
}