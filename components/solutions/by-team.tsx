"use client"

import { Code, Briefcase, Cog, Globe, Building2 } from "lucide-react"

const teams = [
  {
    icon: Code,
    title: "IT и продуктовые команды",
    description: "Kanban, Scrum, backlog, roadmap, releases, контроль задач и взаимодействие между разработкой, продуктом и дизайном.",
  },
  {
    icon: Briefcase,
    title: "PMO и проектные офисы",
    description: "Централизованное управление проектами, контроль сроков, статусов, зависимостей и распределения ресурсов.",
  },
  {
    icon: Cog,
    title: "Операционные команды",
    description: "Контроль поручений, прозрачность задач, меньше потерь контекста и единый рабочий контур.",
  },
  {
    icon: Globe,
    title: "Распределенные команды",
    description: "Понятный интерфейс, прозрачность статусов, единые правила работы и контроль исполнения в нескольких подразделениях.",
  },
  {
    icon: Building2,
    title: "Крупные корпоративные подразделения",
    description: "Разграничение ролей, интеграции, инфраструктурный контроль и адаптация под внутренние процессы.",
  },
]

export function SolutionsByTeam() {
  return (
    <section id="teams" className="py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight tracking-tight text-balance">
            Для каких команд подходит Cortex ToDo
          </h2>
        </div>

        {/* Cards grid - 5 cards in 2 rows */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.slice(0, 3).map((team, index) => (
            <div
              key={index}
              className="flex flex-col h-full p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <team.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Title */}
              <h3 className="flex-shrink-0 text-base font-semibold text-foreground mb-3 leading-snug">
                {team.title}
              </h3>

              {/* Description */}
              <p className="flex-1 text-sm text-foreground-secondary leading-relaxed">
                {team.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second row - 2 cards centered */}
        <div className="grid sm:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto lg:max-w-none lg:grid-cols-2 lg:px-[16.67%]">
          {teams.slice(3).map((team, index) => (
            <div
              key={index + 3}
              className="flex flex-col h-full p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <team.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Title */}
              <h3 className="flex-shrink-0 text-base font-semibold text-foreground mb-3 leading-snug">
                {team.title}
              </h3>

              {/* Description */}
              <p className="flex-1 text-sm text-foreground-secondary leading-relaxed">
                {team.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
