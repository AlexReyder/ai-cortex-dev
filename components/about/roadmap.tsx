"use client"

import { CheckSquare, MessageSquare, BookOpen, Sparkles } from "lucide-react"

const roadmapLayers = [
  {
    icon: CheckSquare,
    layer: "Уровень 1",
    title: "Управление задачами и проектами",
    description: "Kanban, Scrum, roadmap, контроль исполнения, командная работа.",
    status: "Доступно",
  },
  {
    icon: MessageSquare,
    layer: "Уровень 2",
    title: "Корпоративное взаимодействие",
    description: "Enterprise collaboration, потоки работы, интеграции с корпоративными системами.",
    status: "В разработке",
  },
  {
    icon: BookOpen,
    layer: "Уровень 3",
    title: "База знаний",
    description: "Хранение, организация и поиск корпоративных знаний и документации.",
    status: "Roadmap",
  },
  {
    icon: Sparkles,
    layer: "Уровень 4",
    title: "AI-native надстройка",
    description: "Автоматизация, AI-агенты, умные подсказки, генерация контента.",
    status: "Roadmap",
  },
]

export function RoadmapSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 text-balance">
            Куда развивается Cortex ToDo
          </h2>
          <p className="text-base text-foreground-secondary leading-relaxed">
            Мы рассматриваем платформу как долгосрочный технологический контур, который будет расширяться вокруг задач, взаимодействия, знаний и AI-native сценариев.
          </p>
        </div>

        {/* Roadmap layers */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden lg:block" />
          
          <div className="space-y-6">
            {roadmapLayers.map((layer, index) => (
              <div
                key={index}
                className="relative flex items-start gap-6"
              >
                {/* Icon with dot */}
                <div className="relative z-10 shrink-0 hidden lg:block">
                  <div className="w-16 h-16 rounded-xl bg-card border border-card-border flex items-center justify-center">
                    <layer.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 bg-card border border-card-border rounded-xl p-6 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="lg:hidden w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <layer.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">
                          {layer.layer}
                        </span>
                        <h3 className="text-base font-semibold text-foreground">
                          {layer.title}
                        </h3>
                      </div>
                    </div>
                    <span className={`text-[10px] font-medium uppercase tracking-wider px-3 py-1 rounded-full shrink-0 ${
                      layer.status === "Доступно" 
                        ? "bg-green-500/10 text-green-400"
                        : layer.status === "В разработке"
                        ? "bg-primary/10 text-primary"
                        : "bg-foreground-muted/10 text-foreground-muted"
                    }`}>
                      {layer.status}
                    </span>
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
