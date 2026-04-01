"use client"

import { FolderKanban, RefreshCw, Shield, Settings } from "lucide-react"

const solutions = [
  {
    icon: FolderKanban,
    title: "Управление проектами и командами",
    description: "Единый контур для задач, проектов, сроков, исполнителей, комментариев, вложений и контроля исполнения.",
  },
  {
    icon: RefreshCw,
    title: "Импортозамещение и переход",
    description: "Понятный сценарий для компаний, которые переходят с Jira, Trello, Asana-like workflows и хотят сохранить управляемость.",
  },
  {
    icon: Shield,
    title: "Безопасный контур",
    description: "Размещение на сервере клиента, в private cloud или российском ЦОД в зависимости от требований компании.",
  },
  {
    icon: Settings,
    title: "Адаптация под процессы",
    description: "Возможность настройки workflow, ролей, интеграций и отдельных сценариев работы под конкретного enterprise-заказчика.",
  },
]

export function SolutionsOverview() {
  return (
    <section className="py-20 lg:py-28 bg-background-light">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground-dark leading-tight tracking-tight text-balance">
            Какие задачи решает ToDo Enterprise
          </h2>
        </div>

        {/* Cards grid - equal height */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="flex flex-col h-full p-6 rounded-xl bg-white border border-border-light shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <solution.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Title */}
              <h3 className="flex-shrink-0 text-base font-semibold text-foreground-dark mb-3 leading-snug">
                {solution.title}
              </h3>

              {/* Description - flex-1 to fill space */}
              <p className="flex-1 text-sm text-foreground-dark-secondary leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
