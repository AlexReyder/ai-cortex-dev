"use client"

import { ShieldCheck, RefreshCw, Server, Settings } from "lucide-react"

const reasons = [
  {
    icon: ShieldCheck,
    title: "Проверка без лишнего риска",
    description: "До полномасштабного внедрения можно оценить продукт на ваших реальных сценариях.",
  },
  {
    icon: RefreshCw,
    title: "Понимание migration path",
    description: "Вы заранее видите, как ToDo Enterprise может заменить привычные Jira / Trello-like workflows.",
  },
  {
    icon: Server,
    title: "Оценка безопасности и размещения",
    description: "Можно заранее обсудить сервер клиента, private cloud, российский ЦОД и модель доступа.",
  },
  {
    icon: Settings,
    title: "Проверка кастомизации",
    description: "Если у вашей компании нестандартные процессы, пилот помогает понять глубину необходимой адаптации.",
  },
]

export function WhyStartSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Зачем начинать с демо или пилота
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col h-full p-6 rounded-xl bg-card border border-card-border"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                <reason.icon className="w-6 h-6 text-primary" />
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
