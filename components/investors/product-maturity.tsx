"use client"

import { Clock, CheckCircle2, Code2, Sparkles, ArrowRight } from "lucide-react"

const maturityCards = [
  {
    icon: Clock,
    title: "Долгая разработка",
    text: "Продукт развивался несколько лет и включает web/mobile/server contour.",
  },
  {
    icon: CheckCircle2,
    title: "Product readiness",
    text: "Готовность к рынку РФ, локализация и демо/pilot readiness.",
  },
  {
    icon: Code2,
    title: "Engineering depth",
    text: "Опыт в high-load systems, enterprise software, e-commerce и fintech contexts.",
  },
  {
    icon: Sparkles,
    title: "AI-capable ecosystem",
    text: "Команда и партнерский контур поддерживают дальнейшее развитие AI-native сценариев.",
  },
]

const timelineSteps = [
  { year: "2018", label: "R&D start" },
  { year: "2020", label: "MVP web/mobile" },
  { year: "2022", label: "Server edition" },
  { year: "2024", label: "RF localization" },
  { year: "2025", label: "Ecosystem rollout" },
]

export function ProductMaturity() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight mb-4 text-balance">
            Почему команда может это реализовать
          </h2>
          <p className="text-base text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
            За проектом стоит не только идея, но и многолетняя разработка, продуктовая история и инженерная база.
          </p>
        </div>

        {/* 4 credibility cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {maturityCards.map((card, index) => (
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

        {/* Timeline visual */}
        <div className="p-6 rounded-xl bg-card border border-card-border">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            {timelineSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm font-semibold text-primary">{step.year}</span>
                  <span className="text-xs text-foreground-muted">{step.label}</span>
                </div>
                {index < timelineSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-foreground-muted mx-2 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
