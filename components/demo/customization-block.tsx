"use client"

import { Workflow, Users, Plug, Layout, ArrowRight } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const customizationOptions = [
  {
    icon: Workflow,
    title: "Workflow customization",
    description: "Адаптация процессов под ваши методологии",
  },
  {
    icon: Users,
    title: "Роли и права",
    description: "Настройка модели доступа под корпоративную структуру",
  },
  {
    icon: Plug,
    title: "Интеграции",
    description: "Подключение к корпоративным системам и API",
  },
  {
    icon: Layout,
    title: "Интерфейсные сценарии",
    description: "Адаптация UI под специфику работы команд",
  },
]

export function CustomizationBlock() {
  return (
    <section className="py-20 lg:py-28 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Если нужен не просто продукт, а платформа под ваши процессы
          </h2>
          <p className="text-foreground-secondary max-w-3xl mx-auto">
            На этапе демо или пилота можно заранее обсудить workflow, роли, интеграции и необходимую адаптацию ToDo Enterprise под корпоративный контур.
          </p>
        </div>

        {/* Customization options */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {customizationOptions.map((option, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-card-border"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <option.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {option.title}
              </h3>
              <p className="text-sm text-foreground-muted">
                {option.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <CTAButton
            variant="primary"
            size="lg"
            modalType="customization"
          >
            <span className="flex items-center gap-2">
              Обсудить кастомизацию
              <ArrowRight className="w-4 h-4" />
            </span>
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
