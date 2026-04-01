"use client"

import { Building2, Wifi, ShoppingCart, Heart, Factory, Users } from "lucide-react"

const segments = [
  { icon: Building2, title: "Банки, финансы, страхование" },
  { icon: Wifi, title: "IT и телеком" },
  { icon: ShoppingCart, title: "Ритейл" },
  { icon: Heart, title: "Здравоохранение" },
  { icon: Factory, title: "Производство" },
  { icon: Users, title: "Крупные распределенные команды" },
]

export function AudienceSection() {
  return (
    <section className="py-20 md:py-28 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 text-balance">
            Для кого мы строим платформу
          </h2>
        </div>

        {/* Segments grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-card border border-card-border rounded-xl p-5 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <segment.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                {segment.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Supporting line */}
        <div className="text-center">
          <p className="text-sm text-foreground-secondary leading-relaxed max-w-2xl mx-auto">
            Мы ориентируемся на компании, которым важны управляемость, локальный контур, удобство внедрения и развитие собственной цифровой среды.
          </p>
        </div>
      </div>
    </section>
  )
}
