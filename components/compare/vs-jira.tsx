"use client"

import { Workflow, Server, RefreshCw, Settings, ArrowRight } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const comparisons = [
  {
    icon: Workflow,
    title: "Привычный workflow",
    text: "ToDo Enterprise понятен командам, которые уже работали в Jira. Знакомая логика досок, спринтов и задач.",
  },
  {
    icon: Server,
    title: "Контроль размещения",
    text: "On-prem, private cloud или российский ЦОД вместо зависимости от зарубежного облака.",
  },
  {
    icon: RefreshCw,
    title: "Путь миграции",
    text: "Демо-стенд, пилот и controlled rollout позволяют перейти без потери процессов.",
  },
  {
    icon: Settings,
    title: "Адаптация для enterprise",
    text: "Workflow, роли, интеграции и UX могут быть настроены под требования крупного клиента.",
  },
]

export function VsJira() {
  return (
    <section id="vs-jira" className="py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4 text-balance">
            ToDo Enterprise vs Jira
          </h2>
          <p className="text-base text-foreground-secondary max-w-2xl mx-auto">
            Для команд, привыкших к Jira, ToDo Enterprise предлагает понятную логику, безопасный локальный контур и более гибкий сценарий внедрения для российских клиентов.
          </p>
        </div>

        {/* Comparison cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {comparisons.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-card border border-border rounded-xl p-6 h-full hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2 flex-shrink-0">
                {item.title}
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed flex-1">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <CTAButton
            variant="primary"
            size="md"
            modalType="migration"
          >
            <span className="flex items-center gap-2">
              Обсудить миграцию с Jira
              <ArrowRight className="w-4 h-4" />
            </span>
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
