"use client"

import { Globe, Link2, Rocket, TrendingUp } from "lucide-react"

const points = [
  {
    icon: Globe,
    title: "Web-интерфейс для быстрого запуска",
  },
  {
    icon: Link2,
    title: "Интеграции с календарями, почтой и мессенджерами",
  },
  {
    icon: Rocket,
    title: "Быстрый пилот без сложного внедрения",
  },
  {
    icon: TrendingUp,
    title: "Масштабирование до enterprise без переделки",
  },
]

export function IntegrationLogic() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Cortex AI встраивается в ваши процессы
              </h2>
              <p className="mt-5 text-lg text-foreground-secondary max-w-2xl mx-auto">
                Не заменяет существующие системы. Работает поверх них как операционный слой.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground/90 font-medium">
                    {point.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  )
}
