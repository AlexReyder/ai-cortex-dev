"use client"

import { Database, Shield, Building2, Users } from "lucide-react"

const principles = [
  {
    icon: Database,
    title: "Контроль данных",
    description: "Данные могут размещаться на сервере клиента или в облаке российского ЦОД, что снижает риски утечки конфиденциальной информации.",
  },
  {
    icon: Shield,
    title: "Независимость от внешних вендоров",
    description: "ToDo Enterprise может использоваться как полностью отечественное решение без зависимости от зарубежных поставщиков инфраструктуры и ПО.",
  },
  {
    icon: Building2,
    title: "Корпоративный контур",
    description: "Размещение и доступ могут быть организованы в рамках требований корпоративной ИТ- и ИБ-среды заказчика.",
  },
  {
    icon: Users,
    title: "Управляемый доступ",
    description: "Разграничение ролей, прав и сценариев взаимодействия позволяет встроить систему в реальную оргструктуру клиента.",
  },
]

export function SecurityPrinciples() {
  return (
    <section className="py-20 lg:py-28 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight tracking-tight mb-4 text-balance">
            Что дает enterprise-клиенту контроль над размещением
          </h2>
        </div>

        {/* Cards grid - equal height */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="flex flex-col h-full bg-background/60 rounded-xl border border-white/[0.06] p-6 hover:border-primary/20 transition-colors"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 mb-4">
                <principle.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Title */}
              <h3 className="flex-shrink-0 text-base font-semibold text-foreground mb-3">
                {principle.title}
              </h3>

              {/* Description - flex-1 to fill space */}
              <p className="flex-1 text-sm text-foreground-muted leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
