"use client"

import { Kanban, Monitor, RefreshCw, ArrowRight } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const ctaCards = [
  {
    icon: Kanban,
    title: "Попробовать ToDo",
    description: "Начните с демо или пилота на ваших сценариях.",
    cta: "Попробовать ToDo",
    modalType: "todo-demo" as const,
  },
  {
    icon: Monitor,
    title: "Запросить демо-стенд",
    description: "Получите тестовую среду для оценки продукта.",
    cta: "Запросить демо-стенд",
    modalType: "todo-stand" as const,
  },
  {
    icon: RefreshCw,
    title: "Обсудить миграцию",
    description: "Поговорим о переходе с вашего текущего инструмента.",
    cta: "Обсудить миграцию",
    modalType: "migration" as const,
  },
]

export function CompareFinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-background-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground-dark mb-4 text-balance">
            Сравним ToDo Enterprise с вашим текущим инструментом
          </h2>
          <p className="text-base text-foreground-dark-secondary max-w-2xl mx-auto">
            Если вы оцениваете Jira, Trello, Asana или Tracker и хотите понять, подойдет ли ToDo Enterprise именно вашему контуру — обсудим это на ваших сценариях.
          </p>
        </div>

        {/* CTA cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {ctaCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col bg-white border border-border-light rounded-xl p-6 h-full hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 flex-shrink-0">
                <card.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground-dark mb-2 flex-shrink-0">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-foreground-dark-secondary leading-relaxed mb-6 flex-1">
                {card.description}
              </p>

              {/* CTA */}
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
      </div>
    </section>
  )
}
