"use client"

import { Kanban, Monitor, MessageSquare, ArrowRight } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const ctaCards = [
  {
    icon: Kanban,
    title: "Попробовать ToDo",
    description: "Начните с быстрого знакомства с продуктом и его возможностями.",
    modalType: "todo-demo" as const,
    cta: "Попробовать ToDo",
    variant: "primary" as const,
  },
  {
    icon: Monitor,
    title: "Запросить демо-стенд",
    description: "Получите доступ к тестовому окружению для глубокой оценки.",
    modalType: "todo-stand" as const,
    cta: "Запросить демо-стенд",
    variant: "primary" as const,
  },
  {
    icon: MessageSquare,
    title: "Обсудить сценарий внедрения",
    description: "Поговорим о вашем конкретном кейсе, требованиях и модели работы.",
    modalType: "implementation" as const,
    cta: "Обсудить внедрение",
    variant: "secondary" as const,
  },
]

export function SolutionsFinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight tracking-tight text-balance mb-4">
            Найдите свой сценарий работы с Cortex ToDo
          </h2>
        </div>

        {/* CTA cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {ctaCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col h-full p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <card.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="flex-shrink-0 text-lg font-semibold text-foreground mb-2">
                {card.title}
              </h3>

              {/* Description */}
              <p className="flex-1 text-sm text-foreground-secondary leading-relaxed mb-6">
                {card.description}
              </p>

              {/* CTA - mt-auto for bottom alignment */}
              <div className="mt-auto">
                <CTAButton
                  variant={card.variant}
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
        <div className="text-center">
          <p className="text-sm text-foreground-secondary leading-relaxed max-w-2xl mx-auto">
            Если вам нужна российская платформа для проектов, процессов и распределенных команд — обсудим подходящий вариант внедрения.
          </p>
        </div>
      </div>
    </section>
  )
}
