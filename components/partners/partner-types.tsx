"use client"

import { Building2, Cloud, Server, Lightbulb, ShoppingBag, Puzzle } from "lucide-react"

const partnerTypes = [
  {
    icon: Building2,
    title: "Системные интеграторы",
    description: "Совместные внедрения, настройка контуров, миграция и адаптация продукта под enterprise-клиента.",
  },
  {
    icon: Cloud,
    title: "Облачные провайдеры",
    description: "Размещение продукта в партнерском облаке как часть локального enterprise-решения.",
  },
  {
    icon: Server,
    title: "Дата-центры / ЦОД",
    description: "Bundled offering для компаний, которым нужны локальные и безопасные сценарии размещения.",
  },
  {
    icon: Lightbulb,
    title: "Консалтинг и цифровая трансформация",
    description: "Использование Cortex ToDo как платформенного слоя в проектах организационной цифровизации.",
  },
  {
    icon: ShoppingBag,
    title: "Реселлеры / channel sales",
    description: "Продажа enterprise-ready решения клиентам, которые ищут российскую альтернативу западным системам.",
  },
  {
    icon: Puzzle,
    title: "Технологические партнеры",
    description: "Интеграции, расширения и развитие общего технологического контура.",
  },
]

export function PartnerTypesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground leading-tight mb-4">
            С кем мы хотим строить партнерства
          </h2>
        </div>

        {/* Partner types grid - equal height cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerTypes.map((type, index) => (
            <div
              key={index}
              className="flex flex-col h-full bg-card/50 rounded-xl border border-border p-6 hover:bg-card hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                <type.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-foreground mb-2 shrink-0">
                {type.title}
              </h3>

              {/* Description - fills remaining space */}
              <p className="text-sm text-foreground-secondary leading-relaxed flex-1">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
