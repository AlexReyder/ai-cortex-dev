"use client"

import { Search, Monitor, Settings, Rocket, ArrowRight } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const migrationSteps = [
  {
    number: "01",
    icon: Search,
    title: "Анализ текущего контура",
    description: "Оценка существующих процессов, интеграций и данных",
  },
  {
    number: "02",
    icon: Monitor,
    title: "Демо / пилот / демо-стенд",
    description: "Проверка применимости на релевантных сценариях",
  },
  {
    number: "03",
    icon: Settings,
    title: "Настройка сценариев и ролей",
    description: "Адаптация системы под требования команды",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Контролируемый запуск",
    description: "Поэтапное внедрение с поддержкой",
  },
]

export function MigrationSection() {
  return (
    <section id="migration" className="py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight tracking-tight mb-4 text-balance">
            Переход с привычных систем без хаоса
          </h2>
          <p className="text-base text-foreground-secondary leading-relaxed max-w-3xl mx-auto mb-4 text-pretty">
            ToDo Enterprise рассчитан на команды, которым нужен понятный и управляемый сценарий перехода с Jira / Trello / Asana-like workflows.
          </p>
          <p className="text-sm text-foreground-muted leading-relaxed max-w-2xl mx-auto text-pretty">
            Привычная логика интерфейса и рабочих сценариев помогает сократить сопротивление пользователей, а демо-стенд и пилот позволяют проверить применимость продукта до полномасштабного внедрения.
          </p>
        </div>

        {/* Migration steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {migrationSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col h-full bg-background-secondary/60 rounded-xl border border-white/[0.06] p-6 hover:border-primary/20 transition-colors"
            >
              {/* Number and icon */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold text-primary/30">{step.number}</span>
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Title */}
              <h3 className="flex-shrink-0 text-base font-semibold text-foreground mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="flex-1 text-sm text-foreground-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Migration flow visual */}
        <div className="bg-background-secondary/40 rounded-2xl border border-white/[0.06] p-8 mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6">
            <div className="px-5 py-3 bg-foreground-muted/10 rounded-xl border border-white/[0.08]">
              <span className="text-sm text-foreground-muted">Текущая система</span>
            </div>
            <ArrowRight className="w-5 h-5 text-primary/50 rotate-90 lg:rotate-0" />
            <div className="px-5 py-3 bg-primary/10 rounded-xl border border-primary/20">
              <span className="text-sm text-primary">Пилот / настройка</span>
            </div>
            <ArrowRight className="w-5 h-5 text-primary/50 rotate-90 lg:rotate-0" />
            <div className="px-5 py-3 bg-primary/15 rounded-xl border border-primary/25">
              <span className="text-sm text-primary">Миграция данных / workflow</span>
            </div>
            <ArrowRight className="w-5 h-5 text-primary/50 rotate-90 lg:rotate-0" />
            <div className="px-5 py-3 bg-primary/20 rounded-xl border border-primary/30">
              <span className="text-sm font-medium text-foreground">Go-live</span>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton
            variant="primary"
            size="md"
            modalType="migration"
          >
            Обсудить миграцию
          </CTAButton>
          <CTAButton
            variant="secondary"
            size="md"
            modalType="todo-stand"
          >
            Запросить демо-стенд
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
