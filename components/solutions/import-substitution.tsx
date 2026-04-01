"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const migrationSteps = [
  {
    step: "01",
    title: "Текущее состояние",
    description: "Jira, Trello, Asana или другие зарубежные инструменты",
    color: "bg-foreground-muted/20",
  },
  {
    step: "02",
    title: "Пилот / Миграция",
    description: "Demo-стенд, настройка, перенос данных и обучение команды",
    color: "bg-primary/20",
  },
  {
    step: "03",
    title: "ToDo Enterprise",
    description: "Контролируемый запуск в защищенном периметре клиента",
    color: "bg-primary/30",
  },
]

const benefits = [
  "Привычный сценарий для пользователей",
  "Demo-стенд / пилот перед rollout",
  "Локальный контур размещения",
  "Меньше зависимости от внешних ограничений",
]

export function ImportSubstitution() {
  return (
    <section id="import-substitution" className="py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight tracking-tight text-balance">
            Российская платформа для сценариев импортозамещения
          </h2>
        </div>

        <div className="text-center mb-14">
          <p className="text-base lg:text-lg text-foreground-secondary leading-relaxed max-w-3xl mx-auto">
            ToDo Enterprise помогает перейти на локальное решение без потери привычной логики и контроля работы.
          </p>
        </div>

        {/* Migration flow visualization */}
        <div className="relative mb-12">
          <div className="grid md:grid-cols-3 gap-4">
            {migrationSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`p-6 rounded-xl ${step.color} border border-border h-full`}>
                  <div className="text-xs font-semibold text-primary mb-2">{step.step}</div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-foreground-secondary">{step.description}</p>
                </div>
                
                {/* Arrow connector */}
                {index < migrationSteps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border"
            >
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm text-foreground-secondary">{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <CTAButton
            variant="primary"
            size="lg"
            modalType="migration"
          >
            Обсудить миграцию
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
