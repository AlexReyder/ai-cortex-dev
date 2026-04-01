"use client"

import Link from "next/link"
import { ArrowRight, RefreshCw, FolderKanban, Code, Users, Shield, Settings } from "lucide-react"

const scenarios = [
  {
    icon: RefreshCw,
    title: "Импортозамещение Jira / Trello-like workflows",
    description: "Для компаний, которым нужен безопасный и привычный переход на российскую платформу.",
    href: "#migration-case",
  },
  {
    icon: FolderKanban,
    title: "Проектный офис / PMO",
    description: "Для централизованного управления проектами, сроками, зависимостями и статусами.",
    href: "#pmo-case",
  },
  {
    icon: Code,
    title: "IT и продуктовые команды",
    description: "Для backlog, Kanban / Scrum, roadmap, релизов и взаимодействия между командами.",
    href: "#it-case",
  },
  {
    icon: Users,
    title: "Распределенные команды",
    description: "Для компаний с несколькими командами, офисами или подразделениями.",
    href: "#distributed-case",
  },
  {
    icon: Shield,
    title: "Безопасный корпоративный контур",
    description: "Для клиентов, которым важны on-prem, private cloud и локальный контроль данных.",
    href: "#security-case",
  },
  {
    icon: Settings,
    title: "Платформа под процессы клиента",
    description: "Для компаний, которым нужен не просто продукт, а настройка под их workflow и структуру.",
    href: "#customization-case",
  },
]

export function ScenarioSelector() {
  return (
    <section className="py-20 lg:py-28 bg-background-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground-dark mb-4">
            Выберите свой сценарий
          </h2>
        </div>

        {/* Scenario cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((scenario, index) => (
            <Link
              key={index}
              href={scenario.href}
              className="group flex flex-col h-full p-6 rounded-xl bg-white border border-border-light hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 shrink-0 group-hover:bg-primary/20 transition-colors">
                <scenario.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-foreground-dark mb-2 group-hover:text-primary transition-colors">
                  {scenario.title}
                </h3>
                <p className="text-sm text-foreground-dark-secondary leading-relaxed mb-4 flex-1">
                  {scenario.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                  <span>Открыть сценарий</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
