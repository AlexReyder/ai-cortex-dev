"use client"

import { Monitor, Server, Settings, ArrowRight } from "lucide-react"
import { CTAButton, ModalType } from "@/components/cta-modals"

const ctaCards = [
  {
    icon: Monitor,
    title: "Запросить демо",
    description: "Покажем ToDo Enterprise на релевантных для вас сценариях.",
    cta: "Запросить демо",
    modalType: "todo-demo" as ModalType,
  },
  {
    icon: Server,
    title: "Запросить демо-стенд",
    description: "Дадим среду для проверки продукта и процессов.",
    cta: "Запросить демо-стенд",
    modalType: "todo-stand" as ModalType,
  },
  {
    icon: Settings,
    title: "Обсудить внедрение",
    description: "Разберем архитектуру, миграцию и кастомизацию.",
    cta: "Обсудить внедрение",
    modalType: "architecture" as ModalType,
  },
]

export function ContactsFinalCTA() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Готовы обсудить ваш сценарий?
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {ctaCards.map((card, index) => (
            <div
              key={index}
              className="group relative flex flex-col h-full p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 premium-card"
            >
              {/* Icon */}
              <div className="flex-shrink-0 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* CTA - always at bottom */}
              <div className="mt-auto">
                <CTAButton
                  variant="primary"
                  size="md"
                  modalType={card.modalType}
                  className="w-full"
                >
                  <span className="flex items-center justify-center gap-2">
                    {card.cta}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </CTAButton>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting line */}
        <p className="text-center text-foreground-muted text-sm max-w-2xl mx-auto">
          Если вам нужен безопасный, управляемый и привычный переход на российскую платформу управления задачами и проектами — начнем с короткого разговора.
        </p>
      </div>
    </section>
  )
}
