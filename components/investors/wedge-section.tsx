"use client"

import Link from "next/link"
import { Kanban, Server, ArrowRightLeft, Settings, ArrowRight, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const wedgeCards = [
  {
    icon: Kanban,
    title: "Familiar logic",
    text: "Знакомые Kanban, Scrum, roadmap сценарии для команд.",
  },
  {
    icon: Server,
    title: "Secure deployment",
    text: "Сервер клиента, private cloud, российский ЦОД.",
  },
  {
    icon: ArrowRightLeft,
    title: "Migration path",
    text: "Понятный переход с западных решений без ломки процессов.",
  },
  {
    icon: Settings,
    title: "Enterprise customization",
    text: "Адаптация под роли, интеграции и корпоративный контур.",
  },
]

export function WedgeSection() {
  return (
    <section className="py-20 lg:py-28 bg-background-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground-dark leading-tight mb-4 text-balance">
            ToDo Enterprise как точка входа в рынок
          </h2>
          <p className="text-base text-foreground-dark-secondary max-w-3xl mx-auto leading-relaxed mb-4">
            Сильный продуктовый wedge — enterprise task & project management с familiar workflow, secure deployment и migration-friendly adoption.
          </p>
          <p className="text-sm text-foreground-dark-secondary max-w-3xl mx-auto leading-relaxed">
            Именно ToDo Enterprise решает самый понятный и срочный pain: замена Jira / Trello / Asana-like workflows на российскую платформу с контролем размещения и сохранением управляемости.
          </p>
        </div>

        {/* 4 wedge cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {wedgeCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col p-6 rounded-xl bg-white border border-border-light hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                <card.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground-dark mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-foreground-dark-secondary leading-relaxed flex-1">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Adoption flow diagram */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 p-6 rounded-xl bg-white border border-border-light">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-red/10 text-accent-red">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">Urgent market need</span>
          </div>
          <ArrowRight className="w-5 h-5 text-foreground-dark-secondary hidden sm:block" />
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary">
            <Kanban className="w-4 h-4" />
            <span className="text-sm font-medium">ToDo Enterprise adoption</span>
          </div>
          <ArrowRight className="w-5 h-5 text-foreground-dark-secondary hidden sm:block" />
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary">
            <Settings className="w-4 h-4" />
            <span className="text-sm font-medium">Broader ecosystem expansion</span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            className="bg-primary hover:bg-primary-hover text-primary-foreground h-11 px-6 text-sm font-medium"
            asChild
          >
            <Link href="/todo-enterprise">Открыть ToDo Enterprise</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
