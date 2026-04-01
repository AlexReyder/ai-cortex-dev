"use client"

import { CheckCircle2, Shield, Rocket, Settings } from "lucide-react"

const reasons = [
  {
    icon: CheckCircle2,
    title: "Привычная логика работы",
    description: "Пользователи узнают знакомые паттерны из Jira, Trello, Asana и быстро адаптируются к интерфейсу.",
  },
  {
    icon: Shield,
    title: "Безопасное размещение",
    description: "On-prem, private cloud или российский ЦОД — размещение под требования вашей компании.",
  },
  {
    icon: Rocket,
    title: "Готовность к пилоту",
    description: "Быстрый старт с demo-стендом, пилотным проектом или ограниченным rollout перед внедрением.",
  },
  {
    icon: Settings,
    title: "Адаптация под бизнес",
    description: "Возможность настроить workflow, роли и интеграции под конкретные процессы организации.",
  },
]

export function WhyChoose() {
  return (
    <section className="py-20 lg:py-28 bg-background-light">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground-dark leading-tight tracking-tight text-balance">
            Почему этот сценарий работает
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col h-full p-6 rounded-xl bg-white border border-border-light shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <reason.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Title */}
              <h3 className="flex-shrink-0 text-base font-semibold text-foreground-dark mb-3 leading-snug">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="flex-1 text-sm text-foreground-dark-secondary leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Supporting line */}
        <div className="text-center">
          <p className="text-sm text-foreground-dark-secondary leading-relaxed max-w-2xl mx-auto">
            ToDo Enterprise подходит компаниям, которым важны не только функции, но и реальный путь к внедрению.
          </p>
        </div>
      </div>
    </section>
  )
}
