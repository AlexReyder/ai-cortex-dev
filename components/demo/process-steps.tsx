"use client"

import { MessageSquare, Monitor, Workflow, Rocket } from "lucide-react"

const processSteps = [
  {
    icon: MessageSquare,
    step: "1",
    title: "Короткий discovery",
    description: "Быстро определяем ваш контекст",
  },
  {
    icon: Monitor,
    step: "2",
    title: "Показ или доступ к среде",
    description: "Показываем продукт на нужных сценариях",
  },
  {
    icon: Workflow,
    step: "3",
    title: "Обсуждение релевантного сценария",
    description: "Обсуждаем миграцию, безопасность и архитектуру при необходимости",
  },
  {
    icon: Rocket,
    step: "4",
    title: "Следующий шаг",
    description: "Фиксируем пилот / внедрение / адаптацию",
  },
]

export function ProcessSteps() {
  return (
    <section className="py-20 lg:py-28 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Как проходит следующий шаг
          </h2>
        </div>

        {/* Process steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center p-6 rounded-xl bg-card border border-card-border"
            >
              {/* Step number */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">{step.step}</span>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mt-2">
                <step.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-base font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-foreground-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
