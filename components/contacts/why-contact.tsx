"use client"

import { TestTube, RefreshCw, Shield, Settings } from "lucide-react"

const reasons = [
  {
    icon: TestTube,
    title: "Нужен пилот перед внедрением",
    description: "Если важно проверить продукт на реальных сценариях до запуска.",
  },
  {
    icon: RefreshCw,
    title: "Планируете импортозамещение",
    description: "Если ищете российскую альтернативу западным task/project tools.",
  },
  {
    icon: Shield,
    title: "Нужен безопасный контур",
    description: "Если критичны private cloud, on-prem и контроль данных.",
  },
  {
    icon: Settings,
    title: "Нужна адаптация под бизнес",
    description: "Если нужен не только продукт, но и настройка под ваши процессы.",
  },
]

export function WhyContactUs() {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Когда стоит обращаться в Cortex ToDo
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col h-full p-6 rounded-xl bg-card border border-border"
            >
              {/* Icon */}
              <div className="flex-shrink-0 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-base font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
