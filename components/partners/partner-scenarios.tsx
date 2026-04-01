"use client"

import { Users, Server, RefreshCw, Settings } from "lucide-react"

const scenarios = [
  {
    icon: Users,
    title: "Совместное внедрение",
    description: "Партнер приводит enterprise-клиента, участвует в discovery, пилоте и rollout проекта.",
  },
  {
    icon: Server,
    title: "Инфраструктурное размещение",
    description: "Продукт размещается в контуре партнера как часть облачного или private deployment-решения.",
  },
  {
    icon: RefreshCw,
    title: "Импортозамещение для enterprise",
    description: "Партнер использует Cortex ToDo в проектах замены западных task/project management систем.",
  },
  {
    icon: Settings,
    title: "Адаптация под клиента",
    description: "Партнер совместно с Cortex ToDo участвует в настройке workflow, интеграций и сценариев работы заказчика.",
  },
]

export function PartnerScenariosSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground leading-tight mb-4">
            Типовые сценарии партнерства
          </h2>
        </div>

        {/* Scenarios grid - equal height cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className="flex flex-col h-full bg-card/50 rounded-xl border border-border p-6 hover:bg-card hover:border-primary/30 transition-all duration-300"
            >
              {/* Number badge */}
              <div className="flex items-center gap-3 mb-4 shrink-0">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">{index + 1}</span>
                </div>
                <scenario.icon className="w-5 h-5 text-foreground-muted" />
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-foreground mb-2 shrink-0">
                {scenario.title}
              </h3>

              {/* Description - fills remaining space */}
              <p className="text-sm text-foreground-secondary leading-relaxed flex-1">
                {scenario.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
