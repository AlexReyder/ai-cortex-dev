"use client"

import { ArrowRight, CheckCircle2, RefreshCw, Shield, Workflow, Eye, Settings } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const migrationBenefits = [
  {
    icon: Workflow,
    title: "Знакомая логика работы",
    description: "Привычные workflow и сценарии. Минимальное время адаптации команды.",
  },
  {
    icon: Settings,
    title: "Контролируемое внедрение",
    description: "Демо-стенд, sandbox, пилотный проект. Поэтапный переход без рисков.",
  },
  {
    icon: RefreshCw,
    title: "Migration path",
    description: "Перенос данных и процессов из legacy-систем. Сохранение истории задач.",
  },
  {
    icon: Eye,
    title: "Прозрачность процессов",
    description: "Сохранение видимости и контроля на каждом этапе перехода.",
  },
]

export function MigrationSection() {
  return (
    <section id="migration" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Migration Flow */}
              <div className="rounded-2xl border border-card-border bg-card p-8">
                <div className="flex items-center justify-between gap-4">
                  {/* Before */}
                  <div className="flex-1 text-center">
                    <div className="w-16 h-16 rounded-xl bg-foreground-muted/10 flex items-center justify-center mx-auto mb-3">
                      <div className="text-2xl font-bold text-foreground-muted">?</div>
                    </div>
                    <div className="text-sm font-medium text-foreground mb-1">Legacy система</div>
                    <div className="text-xs text-foreground-muted">Jira / Trello / etc.</div>
                  </div>

                  {/* Arrow */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-24 h-px bg-gradient-to-r from-foreground-muted/30 via-primary to-primary" />
                    <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary">
                      Миграция
                    </div>
                  </div>

                  {/* After */}
                  <div className="flex-1 text-center">
                    <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3 relative">
                      <Shield className="w-8 h-8 text-primary" />
                      <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="text-sm font-medium text-foreground mb-1">Cortex ToDo</div>
                    <div className="text-xs text-primary">Защищено</div>
                  </div>
                </div>

                {/* Process steps */}
                <div className="mt-8 pt-6 border-t border-card-border">
                  <div className="grid grid-cols-4 gap-2 text-center">
                    {["Аудит", "Планирование", "Миграция", "Запуск"].map((step, index) => (
                      <div key={step}>
                        <div className={`w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center text-xs font-medium ${
                          index < 3 ? "bg-primary text-primary-foreground" : "bg-primary/20 text-primary"
                        }`}>
                          {index + 1}
                        </div>
                        <div className="text-xs text-foreground-muted">{step}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Переход без потери управляемости
            </h2>

            <p className="text-lg text-foreground-secondary mb-8">
              Контролируемый переход с западных систем с сохранением привычных workflow и прозрачности процессов. Мы обеспечиваем continuity без хаоса.
            </p>

            <div className="space-y-4 mb-8">
              {migrationBenefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4 p-4 rounded-xl bg-background-secondary border border-card-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-sm text-foreground-muted">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs - Consistent height and alignment */}
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton
                variant="primary"
                size="lg"
                modalType="todo-demo"
                className="min-w-[200px]"
              >
                <span className="flex items-center gap-2">
                  Попробовать ToDo
                  <ArrowRight className="w-4 h-4" />
                </span>
              </CTAButton>
              <CTAButton
                variant="secondary"
                size="lg"
                modalType="migration"
                className="min-w-[200px]"
              >
                Обсудить миграцию
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
