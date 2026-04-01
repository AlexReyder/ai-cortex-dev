"use client"

import { CheckCircle2, Users, Building2 } from "lucide-react"

const clientValue = [
  "Российская альтернатива Jira / Trello-like workflows",
  "Migration-friendly интерфейс",
  "On-prem / private cloud / ЦОД",
  "Адаптация под процессы",
  "Безопасность данных",
  "Управляемый пилот",
]

const partnerValue = [
  "Новый enterprise-продукт в портфеле",
  "Возможность услуг внедрения и адаптации",
  "Инфраструктурная выручка",
  "Интеграционная выручка",
  "Долгосрочное сопровождение клиента",
  "Upsell в экосистему",
]

export function PartnerValueSection() {
  return (
    <section className="py-20 bg-background-light">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground-dark leading-tight mb-4">
            Что партнер может предложить клиенту вместе с Cortex ToDo
          </h2>
          <p className="text-base text-foreground-dark-secondary max-w-3xl mx-auto">
            Платформа подходит не только для продажи лицензии, но и для полного решения: от пилота до внедрения в корпоративный контур.
          </p>
        </div>

        {/* Value matrix */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Client value */}
          <div className="bg-white rounded-xl border border-border-light p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground-dark">Для клиента</h3>
            </div>
            <ul className="space-y-3">
              {clientValue.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground-dark-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner value */}
          <div className="bg-white rounded-xl border border-border-light p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground-dark">Для партнера</h3>
            </div>
            <ul className="space-y-3">
              {partnerValue.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground-dark-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
