"use client"

import { MessageSquare, Monitor, Rocket } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const implementationSteps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Архитектурная встреча",
    description: "Обсуждаем требования по безопасности и контуру",
  },
  {
    number: "02",
    icon: Monitor,
    title: "Демо-стенд / пилот",
    description: "Показываем продукт на релевантных сценариях",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Внедрение и адаптация",
    description: "Согласуем развертывание, миграцию и возможные доработки",
  },
]

export function ImplementationPath() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight tracking-tight mb-4 text-balance">
            Как начинается внедрение
          </h2>
        </div>

        {/* Steps - equal height */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {implementationSteps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col h-full bg-background-secondary/60 rounded-xl border border-white/[0.06] p-6 hover:border-primary/20 transition-colors"
            >
              {/* Number badge */}
              <div className="absolute -top-3 left-6 px-3 py-1 bg-primary rounded-full">
                <span className="text-xs font-bold text-primary-foreground">{step.number}</span>
              </div>

              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 mb-5 mt-2">
                <step.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="flex-shrink-0 text-lg font-semibold text-foreground mb-3">
                {step.title}
              </h3>

              {/* Description - flex-1 to fill space */}
              <p className="flex-1 text-sm text-foreground-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton
            variant="primary"
            size="md"
            modalType="architecture"
          >
            Обсудить архитектуру
          </CTAButton>
          <CTAButton
            variant="secondary"
            size="md"
            modalType="todo-stand"
          >
            Запросить демо-стенд
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
