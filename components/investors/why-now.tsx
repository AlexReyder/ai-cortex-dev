"use client"

import { RefreshCw, Shield, ArrowRightLeft, Building2 } from "lucide-react"

const whyNowCards = [
  {
    icon: RefreshCw,
    title: "Импортозамещение",
    text: "Компании ищут локальные решения, которые не ломают привычные процессы.",
  },
  {
    icon: Shield,
    title: "Безопасность и контур",
    text: "Для enterprise клиентов критичны сервер клиента, private cloud и российская инфраструктура.",
  },
  {
    icon: ArrowRightLeft,
    title: "Миграция без боли",
    text: "На рынке есть спрос на продукты с familiar logic для команд, привыкших к Atlassian / Trello-like workflows.",
  },
  {
    icon: Building2,
    title: "Потребность в platform vendor",
    text: "Покупателям нужен не просто point solution, а долгосрочный локальный поставщик экосистемы.",
  },
]

export function WhyNow() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight mb-4 text-balance">
            Почему сейчас
          </h2>
          <p className="text-base text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
            Рынок РФ оказался в ситуации, когда привычные зарубежные инструменты перестали быть надежной основой для долгосрочной работы.
          </p>
        </div>

        {/* 4 strategic cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyNowCards.map((card, index) => (
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
