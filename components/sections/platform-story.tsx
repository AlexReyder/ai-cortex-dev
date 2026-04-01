"use client"

import { Zap, TrendingUp, ArrowUpRight, ArrowRight, Building2, Bot, Layers } from "lucide-react"

const strategicCards = [
  {
    icon: Bot,
    title: "SMB → Cortex AI",
    description: "AI-агенты как точка входа. Быстрый пилот, автоматизация встреч, документов и коммуникаций с первого дня.",
  },
  {
    icon: Building2,
    title: "Mid-market → ToDo Enterprise",
    description: "Защищенное управление задачами и проектами. Прозрачность исполнения, контроль и масштабирование.",
  },
  {
    icon: Layers,
    title: "Enterprise → ToDo + Cortex AI",
    description: "Совместное внедрение двух продуктов как единой платформы. Private cloud, кастомизация и интеграции.",
  },
]

export function PlatformStorySection() {
  return (
    <section className="py-24 bg-background-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Одна платформа. Два уровня управления операционной работой.
          </h2>
          <p className="mt-4 text-lg text-foreground-secondary max-w-3xl mx-auto">
            ToDo Enterprise отвечает за структуру исполнения: задачи, проекты, роли, сроки и контроль.
            Cortex AI Agents отвечает за AI-слой: встречи, summary, документы, коммуникации и рекомендации.
            Продукты можно внедрять отдельно или использовать вместе.
          </p>
        </div>

        {/* Flywheel Diagram */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="relative rounded-2xl border border-card-border bg-card p-8 lg:p-12">
            {/* Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center z-10">
              <Layers className="w-10 h-10 text-primary" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Left Side - SMB Flow */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-red/20 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-accent-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">SMB → Enterprise</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent-red/10 flex items-center justify-center text-sm font-medium text-accent-red shrink-0">1</div>
                    <div>
                      <div className="font-medium text-foreground">Cortex AI Agents</div>
                      <div className="text-sm text-foreground-muted">Быстрый пилот для SMB</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-foreground-muted" />
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent-red/10 flex items-center justify-center text-sm font-medium text-accent-red shrink-0">2</div>
                    <div>
                      <div className="font-medium text-foreground">Операционная эффективность</div>
                      <div className="text-sm text-foreground-muted">Автоматизация рутины, рост прозрачности</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-foreground-muted" />
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary shrink-0">3</div>
                    <div>
                      <div className="font-medium text-foreground">ToDo Enterprise</div>
                      <div className="text-sm text-foreground-muted">Переход на полноценное управление</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Enterprise Flow */}
              <div className="space-y-6 lg:text-right">
                <div className="flex items-center gap-3 mb-4 lg:flex-row-reverse">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Enterprise → AI</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 lg:flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary shrink-0">1</div>
                    <div>
                      <div className="font-medium text-foreground">ToDo Enterprise</div>
                      <div className="text-sm text-foreground-muted">Защищенное развертывание, миграция</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-foreground-muted lg:rotate-180" />
                  </div>
                  <div className="flex items-start gap-3 lg:flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary shrink-0">2</div>
                    <div>
                      <div className="font-medium text-foreground">Доверие и контроль</div>
                      <div className="text-sm text-foreground-muted">Данные в контуре, проверенная платформа</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-foreground-muted lg:rotate-180" />
                  </div>
                  <div className="flex items-start gap-3 lg:flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-accent-red/10 flex items-center justify-center text-sm font-medium text-accent-red shrink-0">3</div>
                    <div>
                      <div className="font-medium text-foreground">Private AI Agents</div>
                      <div className="text-sm text-foreground-muted">AI-автоматизация внутри периметра</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {strategicCards.map((card) => (
            <div
              key={card.title}
              className="p-6 rounded-xl border border-card-border bg-card premium-card"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
              <p className="text-foreground-secondary text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
