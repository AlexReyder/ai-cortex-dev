"use client"

import { AlertTriangle, CheckCircle2, TrendingUp } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const challenges = [
  "Разрозненные статусы",
  "Непрозрачность сроков",
  "Слабый контроль поручений",
  "Сложность координации нескольких проектов",
]

const capabilities = [
  "Timeline / roadmap",
  "Статусы и сроки",
  "Несколько исполнителей",
  "Комментарии и вложения",
  "Уведомления и контроль задач",
]

const effects = [
  "Выше прозрачность",
  "Проще контроль портфеля проектов",
  "Понятнее нагрузка команд",
  "Меньше ручной координации",
]

export function PmoCase() {
  return (
    <section id="pmo-case" className="py-20 lg:py-28 bg-background-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground-dark mb-4">
            Кейс: единый контур для проектного офиса
          </h2>
          <p className="text-base text-foreground-dark-secondary max-w-3xl mx-auto">
            ToDo Enterprise помогает проектным офисам видеть статусы, дедлайны, роли, зависимости и проблемные зоны в единой системе.
          </p>
        </div>

        {/* 3-column case structure */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Challenges */}
          <div className="p-6 rounded-xl bg-white border border-border-light">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent-red/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-accent-red" />
              </div>
              <h3 className="text-lg font-semibold text-foreground-dark">Вызовы</h3>
            </div>
            <ul className="space-y-3">
              {challenges.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-foreground-dark-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-red mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ToDo capabilities */}
          <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground-dark">Возможности ToDo</h3>
            </div>
            <ul className="space-y-3">
              {capabilities.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-foreground-dark-secondary">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Effect */}
          <div className="p-6 rounded-xl bg-white border border-border-light">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-foreground-dark">Эффект для руководства</h3>
            </div>
            <ul className="space-y-3">
              {effects.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-foreground-dark-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton
            variant="primary"
            size="md"
            modalType="ai-demo"
          >
            Запросить демо
          </CTAButton>
          <CTAButton
            variant="secondary"
            size="md"
            modalType="contact"
          >
            Обсудить внедрение
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
