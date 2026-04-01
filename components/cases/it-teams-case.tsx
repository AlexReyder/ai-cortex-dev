"use client"

import Image from "next/image"
import { Kanban, Map, GitBranch, MessageSquare, Layers, Clock, ArrowRight } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const capabilities = [
  { icon: Layers, text: "Backlog" },
  { icon: Kanban, text: "Kanban / Scrum" },
  { icon: Map, text: "Roadmap" },
  { icon: Clock, text: "Sprint-like workflow" },
  { icon: GitBranch, text: "Versions / releases" },
  { icon: MessageSquare, text: "Task discussions" },
]

const outcomes = [
  "Быстрее coordination",
  "Меньше потери контекста",
  "Понятный интерфейс для команд, привыкших к Jira/Trello-like logic",
]

export function ItTeamsCase() {
  return (
    <section id="it-case" className="py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
            Кейс: работа IT- и продуктовых команд
          </h2>
          <p className="text-base text-foreground-secondary max-w-3xl mx-auto">
            ToDo Enterprise подходит для команд разработки, продукта, дизайна и тестирования, которым нужен привычный workflow с Kanban / Scrum и roadmap.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left: Capabilities */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Ключевые возможности</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {capabilities.map((cap, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-card border border-card-border"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <cap.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{cap.text}</span>
                </div>
              ))}
            </div>

            {/* Outcomes */}
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <h4 className="text-sm font-semibold text-foreground mb-4">Результат для команды</h4>
              <ul className="space-y-2">
                {outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-foreground-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="absolute inset-0 -inset-x-4 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl blur-2xl" />
            <div className="relative rounded-xl overflow-hidden border border-card-border shadow-xl">
              <Image
                src="/images/kanban.png"
                alt="Cortex ToDo - интерфейс для IT команд"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton
            variant="primary"
            size="md"
            modalType="todo-demo"
          >
            <span className="flex items-center gap-2">
              Попробовать ToDo
              <ArrowRight className="w-4 h-4" />
            </span>
          </CTAButton>
          <CTAButton
            variant="secondary"
            size="md"
            href="/todo-enterprise"
          >
            Открыть ToDo Enterprise
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
