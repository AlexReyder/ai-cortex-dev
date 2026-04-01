"use client"

import { Brain, Shield, Settings, Rocket, Quote } from "lucide-react"

const reasons = [
  {
    icon: Brain,
    title: "Привычная логика для пользователей западных систем",
  },
  {
    icon: Shield,
    title: "Безопасное размещение в нужном контуре",
  },
  {
    icon: Settings,
    title: "Возможность кастомизации под заказчика",
  },
  {
    icon: Rocket,
    title: "Готовность к пилоту, демо-стенду и постепенному запуску",
  },
]

export function EnterpriseDealsSection() {
  return (
    <section className="py-20 bg-background-light">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground-dark leading-tight mb-4">
            Почему Cortex ToDo удобно продавать enterprise-клиентам
          </h2>
        </div>

        {/* Reasons grid - equal height cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col h-full bg-white rounded-xl border border-border-light p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                <reason.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Title - fills remaining space */}
              <h3 className="text-sm font-semibold text-foreground-dark leading-relaxed flex-1">
                {reason.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Highlighted callout */}
        <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20 p-8">
          <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/30" />
          <blockquote className="relative z-10 text-center">
            <p className="text-lg sm:text-xl text-foreground-dark font-medium leading-relaxed max-w-3xl mx-auto">
              &laquo;Для партнеров Cortex ToDo — это не просто лицензия, а продукт, вокруг которого можно строить полноценный enterprise-проект.&raquo;
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
