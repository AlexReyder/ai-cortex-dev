"use client"

import { TrendingUp, Layers, Shield } from "lucide-react"

const synthesisColumns = [
  {
    icon: TrendingUp,
    title: "Сильный рынок и timing",
    text: "Локальный спрос на импортозамещение и безопасное размещение создает окно возможностей.",
  },
  {
    icon: Layers,
    title: "Понятный core product + expansion logic",
    text: "ToDo Enterprise как wedge с ясной траекторией расширения в экосистему.",
  },
  {
    icon: Shield,
    title: "Enterprise moat",
    text: "Deployment, migration и customization создают defensibility в enterprise сегменте.",
  },
]

export function WhyInvestable() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight mb-4 text-balance">
            Почему это инвестируемая история
          </h2>
        </div>

        {/* 3 synthesis columns */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {synthesisColumns.map((col, index) => (
            <div
              key={index}
              className="flex flex-col p-6 rounded-xl bg-card border border-card-border hover:border-primary/20 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                <col.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {col.title}
              </h3>
              <p className="text-sm text-foreground-secondary leading-relaxed flex-1">
                {col.text}
              </p>
            </div>
          ))}
        </div>

        {/* Highlighted statement */}
        <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
          <p className="text-base text-foreground leading-relaxed text-center max-w-3xl mx-auto">
            <span className="font-medium">Cortex ToDo интересен как инвестиция</span> не потому, что это еще один task manager, а потому, что это платформа с локальным market fit, сильным wedge и понятной траекторией расширения.
          </p>
        </div>
      </div>
    </section>
  )
}
