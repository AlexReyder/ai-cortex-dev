'use client'

import { FileText, MessageSquare } from 'lucide-react'

import { PayloadFormRenderer } from '@/cms/payload-form-renderer'
import { CTAButton } from '@/components/cta-modals'

export function InvestorContact() {
  return (
    <section className="py-20 lg:py-28 bg-background-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground-dark leading-tight mb-4 text-balance">
            Для инвестиционного диалога
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="p-6 rounded-xl bg-white border border-border-light">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground-dark mb-2">
                Инвестиционные материалы
              </h3>
              <p className="text-sm text-foreground-dark-secondary mb-4">
                Запросите presentation deck и дополнительную информацию.
              </p>
              <CTAButton
                variant="secondary"
                size="sm"
                modalType="investor-materials"
                className="w-full"
              >
                Запросить материалы
              </CTAButton>
            </div>

            <div className="p-6 rounded-xl bg-white border border-border-light">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground-dark mb-2">
                Прямой контакт
              </h3>
              <p className="text-sm text-foreground-dark-secondary mb-4">
                Для стратегических и инвестиционных вопросов.
              </p>
              <p className="text-sm text-foreground-dark">
                <span className="font-medium">Вячеслав Бабиенко</span>
                <br />
                <a href="mailto:invest@cortextodo.ru" className="text-primary hover:underline">
                  invest@cortextodo.ru
                </a>
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="p-6 rounded-xl bg-white border border-border-light">
              <h3 className="text-lg font-semibold text-foreground-dark mb-6">
                Обсудить инвестиционный тезис
              </h3>

              <PayloadFormRenderer
                formSlug="investor-contact"
                themeVariant="light"
                submitVariant="primary"
                withCard={false}
                sourcePage="investors"
                sourceSection="investor-contact"
                product="investment"
                intent="investor-dialogue"
                successTitle="Спасибо за интерес"
                successDescription="Мы свяжемся с вами в ближайшее время для обсуждения инвестиционного тезиса."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}