"use client"

import { MapPin, LayoutGrid, Shield, Settings } from "lucide-react"

const differentiators = [
  {
    icon: MapPin,
    title: "Локальный фокус",
    description: "Продукт и развитие ориентированы на требования российского рынка, инфраструктуры и клиентов.",
  },
  {
    icon: LayoutGrid,
    title: "Привычная логика",
    description: "Сценарии работы понятны пользователям, которые раньше работали в Jira, Trello и похожих системах.",
  },
  {
    icon: Shield,
    title: "Контроль и безопасность",
    description: "Развертывание возможно в контуре клиента, private cloud или российском ЦОД.",
  },
  {
    icon: Settings,
    title: "Гибкость внедрения",
    description: "Для enterprise-клиентов платформа может быть адаптирована под процессы, роли, интеграции и требования конкретного заказчика.",
  },
]

export function DifferentiatorsSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 text-balance">
            Чем Cortex ToDo отличается от массовых платформ
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((card, index) => (
            <div
              key={index}
              className="flex flex-col h-full bg-card border border-card-border rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2 shrink-0">
                {card.title}
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed flex-1">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
