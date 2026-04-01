"use client"

import { Video, FileText, MessageSquare, Clock, BarChart3, Users } from "lucide-react"

const trustPoints = [
  {
    icon: Video,
    title: "Summary и задачи после встреч",
    description: "Автоматическое выделение договоренностей",
  },
  {
    icon: FileText,
    title: "AI по документам и согласованиям",
    description: "Извлечение данных и подготовка",
  },
  {
    icon: MessageSquare,
    title: "Коммуникации и быстрые резюме",
    description: "Понимание контекста переписок",
  },
  {
    icon: Clock,
    title: "Контроль сроков и follow-up",
    description: "Отслеживание договоренностей",
  },
  {
    icon: BarChart3,
    title: "Рекомендации для руководителя",
    description: "AI-аналитика по загрузке и рискам",
  },
  {
    icon: Users,
    title: "Единая платформа для команды",
    description: "Задачи, проекты и коммуникации",
  },
]

export function TrustBarSection() {
  return (
    <section className="py-16 bg-background-secondary border-y border-card-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
          {trustPoints.map((point, index) => (
            <div
              key={point.title}
              className="group flex flex-col items-center text-center p-4 rounded-xl hover:bg-card-hover transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-medium text-foreground mb-1">
                {point.title}
              </h3>
              <p className="text-xs text-foreground-muted">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
