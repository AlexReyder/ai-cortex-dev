"use client"

import { Kanban, Monitor, MessageSquare, ArrowRight } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const ctaCards = [
  {
    icon: Kanban,
    title: "Попробовать ToDo",
    description: "Начните с пилотного проекта и оцените платформу на реальных задачах.",
    modalType: "todo-demo" as const,
    ctaText: "Попробовать ToDo",
    accent: "primary",
  },
  {
    icon: Monitor,
    title: "Запросить демо-стенд",
    description: "Получите доступ к демо-стенду для изучения возможностей платформы.",
    modalType: "todo-stand" as const,
    ctaText: "Запросить демо-стенд",
    accent: "primary",
  },
  {
    icon: MessageSquare,
    title: "Обсудить сценарий внедрения",
    description: "Обсудим ваш конкретный use case, миграцию и кастомизацию.",
    modalType: "contact" as const,
    ctaText: "Обсудить сценарий",
    accent: "primary",
  },
]

export function CasesFinalCta() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
            Найдите свой сценарий работы с ToDo Enterprise
          </h2>
          <p className="text-base text-foreground-secondary max-w-2xl mx-auto">
            Если вам нужен безопасный, управляемый и привычный рабочий контур для проектов, команд и enterprise-процессов — обсудим подходящий use case.
          </p>
        </div>

        {/* CTA cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {ctaCards.map((card, index) => (
            <div
              key={index}
              className="group flex flex-col h-full p-6 rounded-xl bg-card border border-card-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 shrink-0 group-hover:bg-primary/20 transition-colors">
                <card.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-foreground-secondary leading-relaxed mb-6 flex-1">
                  {card.description}
                </p>

                {/* CTA button */}
                <div className="mt-auto">
                  <CTAButton
                    variant="primary"
                    size="md"
                    modalType={card.modalType}
                    className="w-full"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {card.ctaText}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </CTAButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
