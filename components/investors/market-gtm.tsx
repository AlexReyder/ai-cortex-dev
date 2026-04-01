"use client"

import { Target, AlertTriangle, ArrowRightLeft, Users } from "lucide-react"

const gtmCards = [
  {
    icon: Target,
    title: "Точка входа в спрос",
    text: "Существующие пользователи Atlassian / Trello-like systems.",
  },
  {
    icon: AlertTriangle,
    title: "Очевидный pain",
    text: "Безопасность, доступность, размещение и предсказуемость вендора.",
  },
  {
    icon: ArrowRightLeft,
    title: "GTM через migration story",
    text: "Привычная логика и пилотный сценарий снижают барьер внедрения.",
  },
  {
    icon: Users,
    title: "Партнерский канал",
    text: "Интеграторы, облака, ЦОД и enterprise ecosystem players усиливают дистрибуцию.",
  },
]

export function MarketGTM() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight mb-4 text-balance">
            Рынок и go-to-market логика
          </h2>
          <p className="text-base text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
            Фокус — рынок РФ и компании, которым нужен контролируемый переход с западных решений.
          </p>
        </div>

        {/* 4 GTM cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gtmCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col p-6 rounded-xl bg-card border border-card-border hover:border-primary/20 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                <card.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-foreground-secondary leading-relaxed flex-1">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
