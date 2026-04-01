"use client"

import { Search, Monitor, Rocket, ArrowRight, CheckCircle } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const migrationSteps = [
  {
    icon: Search,
    step: "1",
    title: "Анализ текущего сценария",
    description: "Понимание вашего workflow и требований",
  },
  {
    icon: Monitor,
    step: "2",
    title: "Демо / демо-стенд / пилот",
    description: "Проверка ToDo Enterprise на ваших задачах",
  },
  {
    icon: Rocket,
    step: "3",
    title: "Controlled rollout",
    description: "Управляемое внедрение без лишних рисков",
  },
]

const benefits = [
  "Familiar workflow logic",
  "Lower user resistance",
  "Local Russian deployment path",
  "Discussion before full launch",
]

export function MigrationBlock() {
  return (
    <section className="py-20 lg:py-28 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Если вы переходите с Jira / Trello / Asana-like tools
          </h2>
          <p className="text-foreground-secondary max-w-3xl mx-auto">
            ToDo Enterprise создавался с учетом привычных сценариев работы, чтобы снизить барьер перехода и сохранить управляемость.
          </p>
        </div>

        {/* Migration steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {migrationSteps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center p-6 rounded-xl bg-card border border-card-border"
            >
              {/* Step number */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">{step.step}</span>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mt-2">
                <step.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-base font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-foreground-muted">
                {step.description}
              </p>

              {/* Connector arrow */}
              {index < migrationSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 z-10">
                  <ArrowRight className="w-6 h-6 text-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-card-border"
            >
              <CheckCircle className="w-4 h-4 text-primary" />
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
            <span className="flex items-center gap-2">
              Обсудить миграцию
              <ArrowRight className="w-4 h-4" />
            </span>
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
