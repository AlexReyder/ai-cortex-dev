"use client"

import { Landmark, Wifi, ShoppingCart, Factory, HeartPulse, Building } from "lucide-react"

const industries = [
  {
    icon: Landmark,
    title: "Банки и финтех",
    description: "Для команд, которым важны контур безопасности, контроль доступа, прозрачность процессов и локальное размещение.",
  },
  {
    icon: Wifi,
    title: "IT и телеком",
    description: "Для разработки, продуктовых команд, сервисных подразделений и крупных распределенных рабочих контуров.",
  },
  {
    icon: ShoppingCart,
    title: "Ритейл",
    description: "Для управления внутренними проектами, открытием направлений, маркетингом, операционными задачами и взаимодействием офисов.",
  },
  {
    icon: Factory,
    title: "Производство",
    description: "Для проектных задач, межфункционального взаимодействия, контроля сроков и управляемости процессов.",
  },
  {
    icon: HeartPulse,
    title: "Здравоохранение",
    description: "Для организаций, где особенно важны безопасность, понятная роль доступа и управляемый цифровой контур.",
  },
  {
    icon: Building,
    title: "Крупные сервисные компании",
    description: "Для команд с большим количеством параллельных задач, согласований, клиентов и внутреннего взаимодействия.",
  },
]

export function IndustriesSection() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-background-light">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground-dark leading-tight tracking-tight text-balance">
            Отрасли, где ToDo Enterprise особенно уместен
          </h2>
        </div>

        {/* Cards grid - 6 cards in 2 rows of 3 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex flex-col h-full p-6 rounded-xl bg-white border border-border-light shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <industry.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Title */}
              <h3 className="flex-shrink-0 text-base font-semibold text-foreground-dark mb-3 leading-snug">
                {industry.title}
              </h3>

              {/* Description */}
              <p className="flex-1 text-sm text-foreground-dark-secondary leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
