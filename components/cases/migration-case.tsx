"use client"

import { AlertTriangle, CheckCircle2, TrendingUp } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const problems = [
  "Риск зависимости от внешних поставщиков",
  "Сложность оплаты и продления",
  "Опасения по хранению данных",
  "Сопротивление команды при переходе",
]

const solutions = [
  "Знакомый сценарий работы",
  "Demo stand / pilot",
  "Migration-friendly логика",
  "Безопасное размещение",
  "Controlled rollout",
]

const results = [
  "Ниже барьер перехода",
  "Меньше хаоса",
  "Выше управляемость",
  "Локальный контур и предсказуемый вендор",
]

export function MigrationCase() {
  return (
    <section id="migration-case" className="py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
            Кейс: переход с западной системы без потери управляемости
          </h2>
          <p className="text-base text-foreground-secondary max-w-3xl mx-auto">
            ToDo Enterprise подходит для компаний, которым нужен controlled migration path с привычной логикой интерфейса и локальным контуром размещения.
          </p>
        </div>

        {/* 3-column case structure */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Problem */}
          <div className="p-6 rounded-xl bg-card border border-card-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent-red/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-accent-red" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Проблема</h3>
            </div>
            <ul className="space-y-3">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-foreground-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-red mt-1.5 shrink-0" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How ToDo helps */}
          <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Как помогает ToDo</h3>
            </div>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-foreground-secondary">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Result */}
          <div className="p-6 rounded-xl bg-card border border-card-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Результат</h3>
            </div>
            <ul className="space-y-3">
              {results.map((result, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-foreground-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                  <span>{result}</span>
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
