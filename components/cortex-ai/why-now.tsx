"use client"

import { TrendingUp, Eye, Bot, Target } from "lucide-react"

const reasons = [
  {
    icon: TrendingUp,
    title: "Растет объем встреч и переписок — ручной контроль не справляется",
  },
  {
    icon: Eye,
    title: "Нужна прозрачность, а не набор разрозненных отчетов",
  },
  {
    icon: Bot,
    title: "AI должен работать внутри процессов, а не рядом с ними",
  },
  {
    icon: Target,
    title: "Операционная эффективность — задача руководителя, а не IT",
  },
]

export function WhyNow() {
  return (
    <section className="py-20 md:py-28 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Почему сейчас
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-accent-red/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-red/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-5 h-5 text-accent-red" />
                  </div>
                  <span className="text-foreground/90 font-medium leading-relaxed">
                    {reason.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  )
}
