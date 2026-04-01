"use client"

import { Target, Layers, MapPin, Building2, TrendingUp } from "lucide-react"

const thesisCards = [
  {
    icon: Target,
    title: "Понятный wedge",
    text: "ToDo Enterprise решает насущную задачу импортозамещения и безопасной замены привычных task/project systems.",
  },
  {
    icon: Layers,
    title: "Платформенная логика",
    text: "Бизнес строится не вокруг одного инструмента, а вокруг расширяемой экосистемы продуктов.",
  },
  {
    icon: MapPin,
    title: "Рынок с локальным окном возможностей",
    text: "Российским компаниям нужны понятные, безопасные и локально развиваемые альтернативы западным решениям.",
  },
  {
    icon: Building2,
    title: "Enterprise-differentiation",
    text: "Secure deployment, migration-friendly onboarding и адаптация под клиента создают сильный enterprise fit.",
  },
  {
    icon: TrendingUp,
    title: "Несколько векторов роста",
    text: "Помимо core-продукта, у платформы есть логика расширения в corp/doc и дальше в AI-native operational layer.",
  },
]

export function ThesisSummary() {
  return (
    <section className="py-20 lg:py-28 bg-background-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground-dark leading-tight mb-4 text-balance">
            Кратко: почему этот проект может стать сильным игроком
          </h2>
        </div>

        {/* 5 thesis cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {thesisCards.map((card, index) => (
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
      </div>
    </section>
  )
}
