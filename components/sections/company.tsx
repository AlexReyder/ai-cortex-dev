"use client"

import { Target, Wrench, Layers } from "lucide-react"

const pillars = [
  {
    icon: Target,
    title: "Продуктовая стратегия",
    description: "Два продукта, единая платформа. SMB speed и enterprise depth. Двусторонний growth path для клиентов любого масштаба.",
  },
  {
    icon: Wrench,
    title: "Инженерная экспертиза",
    description: "Корпоративный уровень разработки. Безопасность, масштабируемость, надежность. Enterprise-grade архитектура.",
  },
  {
    icon: Layers,
    title: "Платформенный подход",
    description: "Долгосрочная экосистема. AI + Task Management + Integrations. Технологическая основа для российского бизнеса.",
  },
]

export function CompanySection() {
  return (
    <section id="company" className="py-24 bg-background-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground-dark">
            Современная технологическая компания с фокусом на рынок РФ
          </h2>
          <p className="mt-4 text-lg text-foreground-dark-secondary max-w-3xl mx-auto">
            Строим отечественную платформу нового поколения. Объединяем AI и управление исполнением. 
            Работаем на стыке SMB speed и enterprise depth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="text-center p-8 rounded-2xl border border-border-light bg-white premium-card"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <pillar.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                {pillar.title}
              </h3>

              <p className="text-foreground-dark-secondary">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Investor-ready statement */}
        <div className="mt-16 text-center">
          <div className="inline-block rounded-2xl border border-border-light bg-white p-8 max-w-2xl">
            <p className="text-lg text-foreground-dark leading-relaxed">
              Развиваем платформенный подход и долгосрочную экосистему. 
              Диверсифицированная бизнес-модель: от быстрых AI-пилотов до крупных enterprise-контрактов.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
