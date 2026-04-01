"use client"

import { RefreshCw, Shield, CreditCard, Settings } from "lucide-react"

const reasons = [
  {
    icon: RefreshCw,
    title: "Импортозамещение",
    text: "Для российского рынка выбор платформы — это уже не только функциональность, но и независимость от зарубежных ограничений.",
  },
  {
    icon: Shield,
    title: "Контроль данных",
    text: "Многим компаниям нужен сервер клиента, private cloud или российский ЦОД вместо внешнего SaaS-контура.",
  },
  {
    icon: CreditCard,
    title: "Сложность продления и оплаты",
    text: "Западные решения создают для части клиентов риски доступности, оплаты и предсказуемости поставщика.",
  },
  {
    icon: Settings,
    title: "Нужна адаптация под процессы",
    text: "Массовые платформы часто сложно встроить под конкретный корпоративный контур без компромиссов.",
  },
]

export function WhySwitch() {
  return (
    <section className="py-20 lg:py-28 bg-background-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground-dark mb-4 text-balance">
            Почему компании вообще смотрят на альтернативы
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col bg-white border border-border-light rounded-xl p-6 h-full hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 flex-shrink-0">
                <reason.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-foreground-dark mb-2 flex-shrink-0">
                {reason.title}
              </h3>

              {/* Text */}
              <p className="text-sm text-foreground-dark-secondary leading-relaxed flex-1">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
