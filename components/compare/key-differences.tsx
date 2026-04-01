"use client"

import { Workflow, Server, RefreshCw, Settings, MapPin } from "lucide-react"

const differences = [
  {
    icon: Workflow,
    title: "Привычный сценарий работы",
    text: "ToDo Enterprise понятен командам, которые уже работали в Jira / Trello-like системах.",
  },
  {
    icon: Server,
    title: "Безопасное размещение",
    text: "Сервер клиента, private cloud или российский ЦОД в зависимости от требований компании.",
  },
  {
    icon: RefreshCw,
    title: "Миграция без хаоса",
    text: "Демо-стенд, пилот и controlled rollout снижают риск проблем при переходе.",
  },
  {
    icon: Settings,
    title: "Гибкость под клиента",
    text: "Workflow, роли, интеграции и даже интерфейсные элементы могут быть адаптированы.",
  },
  {
    icon: MapPin,
    title: "Российский вендор",
    text: "Локальный фокус, российский контур и развитие продукта под реалии рынка РФ.",
  },
]

export function KeyDifferences() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4 text-balance">
            Ключевое отличие ToDo Enterprise
          </h2>
        </div>

        {/* Cards grid - 5 cards in responsive layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {differences.map((diff, index) => (
            <div
              key={index}
              className="flex flex-col bg-card border border-border rounded-xl p-6 h-full hover:border-primary/30 transition-colors duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 flex-shrink-0">
                <diff.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-foreground mb-2 flex-shrink-0">
                {diff.title}
              </h3>

              {/* Text */}
              <p className="text-sm text-foreground-muted leading-relaxed flex-1">
                {diff.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
