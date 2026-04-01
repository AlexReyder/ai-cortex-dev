"use client"

import { Bot, MessageSquare, BarChart3, Sparkles, CheckSquare, FolderKanban, Workflow, Kanban, Target, BookOpen, Building2, Users, Link2, Server, Cloud, HardDrive, Lock } from "lucide-react"

const layers = [
  {
    title: "Cortex AI — AI-слой",
    color: "accent-red",
    items: [
      { icon: MessageSquare, text: "Summary встреч" },
      { icon: CheckSquare, text: "Извлечение задач" },
      { icon: Sparkles, text: "AI по документам" },
      { icon: Bot, text: "Коммуникации и резюме" },
      { icon: BarChart3, text: "Рекомендации AI" },
    ],
  },
  {
    title: "ToDo Enterprise — Исполнение",
    color: "primary",
    items: [
      { icon: FolderKanban, text: "Задачи и проекты" },
      { icon: Kanban, text: "Kanban / Scrum" },
      { icon: Target, text: "Командная загрузка" },
      { icon: Users, text: "Роли и доступы" },
      { icon: Workflow, text: "Контроль исполнения" },
    ],
  },
  {
    title: "Инфраструктура",
    color: "primary",
    items: [
      { icon: Server, text: "Private cloud / on-prem" },
      { icon: Link2, text: "Интеграции с клиентскими системами" },
      { icon: Lock, text: "Безопасное хранение данных" },
      { icon: Building2, text: "Кастомизация под клиента" },
    ],
  },
]

const deploymentOptions = [
  { icon: Cloud, title: "Cloud", description: "Быстрый старт в облаке" },
  { icon: Cloud, title: "Private Cloud", description: "Изолированная среда" },
  { icon: HardDrive, title: "On-prem", description: "Полный контроль" },
  { icon: Lock, title: "Контур клиента", description: "Ваша инфраструктура" },
]

export function ArchitectureSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Технологический контур платформы
          </h2>
          <p className="mt-4 text-lg text-foreground-secondary max-w-3xl mx-auto text-pretty">
            Платформа строится как рабочий контур поверх ежедневных процессов компании: встречи, задачи, документы, коммуникации и управленческий контроль.
          </p>
        </div>

        {/* Architecture Layers */}
        <div className="relative max-w-5xl mx-auto mb-16">
          {/* Connection lines */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-red via-primary to-primary opacity-30" />
          
          <div className="space-y-6">
            {layers.map((layer, index) => (
              <div key={layer.title} className="relative">
                {/* Layer connector */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-background border-2 border-card-border flex items-center justify-center z-10">
                  <div className={`w-2 h-2 rounded-full ${layer.color === "accent-red" ? "bg-accent-red" : "bg-primary"}`} />
                </div>
                
                <div className="rounded-2xl border border-card-border bg-card overflow-hidden">
                  {/* Layer header */}
                  <div className={`px-6 py-4 border-b border-card-border ${
                    layer.color === "accent-red" 
                      ? "bg-accent-red/5" 
                      : "bg-primary/5"
                  }`}>
                    <div className="flex items-center justify-between">
                      <h3 className={`font-semibold ${
                        layer.color === "accent-red" ? "text-accent-red" : "text-primary"
                      }`}>
                        {layer.title}
                      </h3>
                      <span className="text-xs text-foreground-muted">Layer {index + 1}</span>
                    </div>
                  </div>
                  
                  {/* Layer items */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-3">
                      {layer.items.map((item) => (
                        <div
                          key={item.text}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                            layer.color === "accent-red"
                              ? "bg-accent-red/5 border-accent-red/20"
                              : "bg-primary/5 border-primary/20"
                          }`}
                        >
                          <item.icon className={`w-4 h-4 ${
                            layer.color === "accent-red" ? "text-accent-red" : "text-primary"
                          }`} />
                          <span className="text-sm text-foreground">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deployment Options - Equal height cards */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center text-lg font-semibold text-foreground mb-6">
            Варианты развертывания
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {deploymentOptions.map((option) => (
              <div
                key={option.title}
                className="flex flex-col items-center p-4 rounded-xl border border-card-border bg-card text-center premium-card h-full"
              >
                {/* Icon - consistent sizing */}
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 shrink-0">
                  <option.icon className="w-5 h-5 text-primary" />
                </div>
                {/* Title */}
                <h4 className="font-medium text-foreground text-sm mb-1 shrink-0">{option.title}</h4>
                {/* Description */}
                <p className="text-xs text-foreground-muted mt-auto">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
