"use client"

import { Server, Rocket, ShieldCheck, Building2 } from "lucide-react"

const credibilityPillars = [
  {
    icon: Server,
    title: "Enterprise architecture & high-load systems",
    description: "Опыт проектирования и разработки высоконагруженных enterprise-систем.",
  },
  {
    icon: Rocket,
    title: "Product and go-to-market experience",
    description: "Опыт вывода B2B-продуктов на рынок и масштабирования продаж.",
  },
  {
    icon: ShieldCheck,
    title: "Security-minded development",
    description: "Практика разработки с фокусом на безопасность и compliance.",
  },
  {
    icon: Building2,
    title: "Large-scale B2B contexts",
    description: "Опыт работы с крупными корпоративными заказчиками и сложными проектами.",
  },
]

export function TeamSection() {
  return (
    <section className="py-20 md:py-28 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 text-balance">
            Команда с опытом сложных технологических продуктов
          </h2>
          <p className="text-base text-foreground-secondary leading-relaxed">
            За платформой стоит команда с опытом в высоконагруженных системах, enterprise-разработке, финтехе, e-commerce и выводе B2B-продуктов на рынок.
          </p>
        </div>

        {/* Credibility pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {credibilityPillars.map((pillar, index) => (
            <div
              key={index}
              className="flex flex-col h-full bg-card border border-card-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 shrink-0">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2 shrink-0">
                {pillar.title}
              </h3>
              <p className="text-xs text-foreground-muted leading-relaxed flex-1">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Executive team placeholder */}
        <div className="bg-card border border-card-border rounded-xl p-8">
          <div className="text-center mb-8">
            <span className="text-xs font-medium tracking-widest text-foreground-muted uppercase">
              Руководство
            </span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-card-border mx-auto mb-4 flex items-center justify-center">
                  <span className="text-lg font-semibold text-foreground-muted">
                    {["СЕО", "CTO", "CPO"][i - 1]}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-1">
                  {["Основатель и CEO", "Технический директор", "Директор по продукту"][i - 1]}
                </h4>
                <p className="text-xs text-foreground-muted">
                  {["Enterprise & B2B", "High-load systems", "Product strategy"][i - 1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
