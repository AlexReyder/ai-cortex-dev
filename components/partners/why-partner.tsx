"use client"

import { TrendingUp, Settings, Server, Layers } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Растущий enterprise-сценарий",
    description: "ToDo Enterprise решает задачи импортозамещения, миграции и безопасного размещения для клиентов, которым нужен контролируемый рабочий контур.",
  },
  {
    icon: Settings,
    title: "Гибкость внедрения",
    description: "Платформа может быть адаптирована под процессы, интеграции, роли и инфраструктурные требования заказчика.",
  },
  {
    icon: Server,
    title: "Инфраструктурная совместимость",
    description: "ToDo Enterprise естественно встраивается в private cloud, on-prem и сценарии размещения в российском ЦОД.",
  },
  {
    icon: Layers,
    title: "Долгосрочная экосистема",
    description: "Партнер работает не с единичным инструментом, а с платформой и экосистемой развития вокруг задач, взаимодействия и корпоративных знаний.",
  },
]

export function WhyPartnerSection() {
  return (
    <section className="py-20 bg-background-light">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground-dark leading-tight mb-4">
            Почему партнерам выгодно работать с Cortex ToDo
          </h2>
        </div>

        {/* Benefits grid - equal height cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col h-full bg-white rounded-xl border border-border-light p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                <benefit.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-foreground-dark mb-2 shrink-0">
                {benefit.title}
              </h3>

              {/* Description - fills remaining space */}
              <p className="text-sm text-foreground-dark-secondary leading-relaxed flex-1">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
