"use client"

import { Kanban, MessageSquare, FileText, Sparkles } from "lucide-react"

const ecosystemProducts = [
  {
    icon: Kanban,
    title: "ToDo",
    subtitle: "Task & Project Management",
    text: "Программа для управления проектами и согласованной командной работы.",
    status: "Live",
    statusColor: "bg-green-500",
  },
  {
    icon: MessageSquare,
    title: "ToDo.corp",
    subtitle: "Enterprise Interaction",
    text: "Система управления проблемами и взаимодействием для средних и крупных предприятий.",
    status: "Roadmap",
    statusColor: "bg-primary",
  },
  {
    icon: FileText,
    title: "ToDo.doc",
    subtitle: "Knowledge Base",
    text: "Система хранения и организации корпоративных знаний и информационных ресурсов.",
    status: "Roadmap",
    statusColor: "bg-primary",
  },
]

export function EcosystemExpansion() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight mb-4 text-balance">
            Почему это не один продукт
          </h2>
        </div>

        {/* 3 primary product cards + 1 future card */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {ecosystemProducts.map((product, index) => (
            <div
              key={index}
              className="flex flex-col p-6 rounded-xl bg-card border border-card-border hover:border-primary/20 transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <product.icon className="w-5 h-5 text-primary" />
                </div>
                <span className={`px-2 py-1 rounded-full text-[10px] font-medium text-white ${product.statusColor}`}>
                  {product.status}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {product.title}
              </h3>
              <p className="text-xs text-primary mb-3">{product.subtitle}</p>
              <p className="text-sm text-foreground-secondary leading-relaxed flex-1">
                {product.text}
              </p>
            </div>
          ))}

          {/* Future AI layer card - muted */}
          <div className="flex flex-col p-6 rounded-xl bg-card/50 border border-dashed border-card-border opacity-70">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary/50" />
              </div>
              <span className="px-2 py-1 rounded-full text-[10px] font-medium text-foreground-muted bg-muted">
                Future
              </span>
            </div>
            <h3 className="text-lg font-semibold text-foreground/70 mb-1">
              AI-native layer
            </h3>
            <p className="text-xs text-primary/50 mb-3">Operational Intelligence</p>
            <p className="text-sm text-foreground-muted leading-relaxed flex-1">
              Дальнейшее развитие operational intelligence поверх экосистемы.
            </p>
          </div>
        </div>

        {/* Supporting text */}
        <div className="text-center">
          <p className="text-sm text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
            Экосистема строится как последовательное расширение рабочего контура: задачи → взаимодействие → знания.
          </p>
        </div>
      </div>
    </section>
  )
}
