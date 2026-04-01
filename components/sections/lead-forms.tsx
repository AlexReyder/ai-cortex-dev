'use client'

import { useMemo, useState } from 'react'
import { Bot, Kanban } from 'lucide-react'

import { PayloadFormRenderer } from '@/cms/payload-form-renderer'

type FormType = 'ai' | 'todo'

export function LeadFormsSection() {
  const [formType, setFormType] = useState<FormType>('ai')

  const formConfig = useMemo(() => {
    if (formType === 'ai') {
      return {
        slug: 'home-ai-lead',
        product: 'cortex-ai',
        intent: 'ai',
        submitVariant: 'accent-red' as const,
      }
    }

    return {
      slug: 'home-todo-lead',
      product: 'todo-enterprise',
      intent: 'todo',
      submitVariant: 'primary' as const,
    }
  }, [formType])

  return (
    <section id="demo-ai" className="py-24 bg-background-secondary">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Оставить заявку
          </h2>
          <p className="mt-4 text-lg text-foreground-secondary">
            Выберите интересующий продукт и заполните форму. Мы свяжемся в течение рабочего дня.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-xl border border-card-border bg-card p-1">
            <button
              type="button"
              onClick={() => setFormType('ai')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                formType === 'ai'
                  ? 'bg-accent-red text-primary-foreground'
                  : 'text-foreground-secondary hover:text-foreground'
              }`}
            >
              <Bot className="w-4 h-4" />
              Интересует AI
            </button>

            <button
              type="button"
              onClick={() => setFormType('todo')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                formType === 'todo'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground-secondary hover:text-foreground'
              }`}
            >
              <Kanban className="w-4 h-4" />
              Интересует ToDo
            </button>
          </div>
        </div>

        <div id="try-todo" className="rounded-2xl border border-card-border bg-card p-8">
          <PayloadFormRenderer
            formSlug={formConfig.slug}
            themeVariant="dark"
            submitVariant={formConfig.submitVariant}
            withCard={false}
            sourcePage="home"
            sourceSection="lead-forms"
            product={formConfig.product}
            intent={formConfig.intent}
            successTitle="Заявка отправлена!"
            successDescription="Мы свяжемся с вами в ближайшее время."
          />
        </div>
      </div>
    </section>
  )
}