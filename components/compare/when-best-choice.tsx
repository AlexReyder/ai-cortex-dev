"use client"

import { MapPin, RefreshCw, Settings, Monitor } from "lucide-react"

const scenarios = [
  {
    icon: MapPin,
    title: "Нужен российский контур",
    text: "Если важны данные в РФ, private cloud или сервер клиента.",
  },
  {
    icon: RefreshCw,
    title: "Нужен переход с западной системы",
    text: "Если команда уже привыкла к Jira / Trello-like logic и не хочет ломать процессы.",
  },
  {
    icon: Settings,
    title: "Нужна адаптация под заказчика",
    text: "Если типовой SaaS не подходит и нужны кастомные workflow, роли, интеграции и UX-сценарии.",
  },
  {
    icon: Monitor,
    title: "Нужен пилот перед rollout",
    text: "Если важно проверить продукт на реальных сценариях до полноценного внедрения.",
  },
]

export function WhenBestChoice() {
  return (
    <section className="py-20 lg:py-28 bg-background-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground-dark mb-4 text-balance">
            Когда ToDo Enterprise особенно выигрывает
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className="flex flex-col bg-white border border-border-light rounded-xl p-6 h-full hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 flex-shrink-0">
                <scenario.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-foreground-dark mb-2 flex-shrink-0">
                {scenario.title}
              </h3>

              {/* Text */}
              <p className="text-sm text-foreground-dark-secondary leading-relaxed flex-1">
                {scenario.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
