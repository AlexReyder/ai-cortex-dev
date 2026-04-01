"use client"

import { CreditCard, Building2, Layers, ArrowRight, RefreshCw } from "lucide-react"

const revenueCards = [
  {
    icon: CreditCard,
    title: "Подписка и продуктовая выручка",
    text: "Базовая продуктовая монетизация по пользователям и сценариям внедрения.",
  },
  {
    icon: Building2,
    title: "Enterprise uplift",
    text: "Развертывание, пилоты, миграция и адаптация под клиента увеличивают средний чек.",
  },
  {
    icon: Layers,
    title: "Расширение экосистемы",
    text: "Новые продуктовые слои повышают долю кошелька и долгосрочную ценность клиента.",
  },
]

export function RevenueEngine() {
  return (
    <section className="py-20 lg:py-28 bg-background-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground-dark leading-tight mb-4 text-balance">
            Как может масштабироваться выручка
          </h2>
        </div>

        {/* 3 revenue cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {revenueCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col p-6 rounded-xl bg-white border border-border-light hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                <card.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground-dark mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-foreground-dark-secondary leading-relaxed flex-1">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Flywheel visual */}
        <div className="p-6 rounded-xl bg-white border border-border-light">
          <div className="flex items-center justify-center mb-4">
            <RefreshCw className="w-6 h-6 text-primary mr-2" />
            <span className="text-sm font-medium text-foreground-dark">Revenue Flywheel</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium">Adoption</span>
            <ArrowRight className="w-4 h-4 text-foreground-dark-secondary hidden sm:block" />
            <span className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium">Deployment trust</span>
            <ArrowRight className="w-4 h-4 text-foreground-dark-secondary hidden sm:block" />
            <span className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium">Customization</span>
            <ArrowRight className="w-4 h-4 text-foreground-dark-secondary hidden sm:block" />
            <span className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium">Ecosystem expansion</span>
            <ArrowRight className="w-4 h-4 text-foreground-dark-secondary hidden sm:block" />
            <span className="px-3 py-1.5 rounded-lg bg-green-500/10 text-green-600 text-sm font-medium">Higher retention / revenue depth</span>
          </div>
        </div>
      </div>
    </section>
  )
}
