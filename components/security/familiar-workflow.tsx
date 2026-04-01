"use client"

import { Kanban, Calendar, MessageSquare, Paperclip, Bell, FolderKanban, GitBranch, Rocket } from "lucide-react"

const capabilities = [
  { icon: Kanban, text: "Kanban / Scrum" },
  { icon: Calendar, text: "Timeline / roadmap" },
  { icon: Bell, text: "Сроки и исполнители" },
  { icon: MessageSquare, text: "Комментарии и вложения" },
  { icon: Paperclip, text: "Уведомления" },
  { icon: FolderKanban, text: "Проекты и коллекции" },
  { icon: GitBranch, text: "Управление версиями" },
  { icon: Rocket, text: "Управление релизами" },
]

export function FamiliarWorkflow() {
  return (
    <section className="py-20 lg:py-28 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight tracking-tight mb-4 text-balance">
            Привычный сценарий для команд, которые уже работали с западными системами
          </h2>
          <p className="text-base text-foreground-secondary leading-relaxed max-w-3xl mx-auto text-pretty">
            ToDo Enterprise ориентирован на быстрый вход для пользователей, привыкших к Atlassian-, Trello- и Asana-подобной логике работы.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-background/60 rounded-xl border border-white/[0.06] hover:border-primary/20 transition-colors"
            >
              <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-primary/10">
                <capability.icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{capability.text}</span>
            </div>
          ))}
        </div>

        {/* Visual note */}
        <div className="bg-primary/5 rounded-xl border border-primary/10 p-6 text-center">
          <p className="text-sm text-primary font-medium">
            Привычность интерфейса снижает барьер перехода и ускоряет внедрение
          </p>
        </div>
      </div>
    </section>
  )
}
