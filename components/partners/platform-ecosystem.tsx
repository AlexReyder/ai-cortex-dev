"use client"

import { Kanban, Building2, FileText, Sparkles, ArrowRight } from "lucide-react"

const products = [
  {
    icon: Kanban,
    name: "ToDo",
    description: "Task management",
    status: "Live",
    statusColor: "bg-green-500/20 text-green-400",
  },
  {
    icon: Building2,
    name: "ToDo.corp",
    description: "Corporate collaboration",
    status: "Roadmap",
    statusColor: "bg-yellow-500/20 text-yellow-400",
  },
  {
    icon: FileText,
    name: "ToDo.doc",
    description: "Knowledge management",
    status: "Roadmap",
    statusColor: "bg-yellow-500/20 text-yellow-400",
  },
]

export function PlatformEcosystemSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground leading-tight mb-4">
            Партнерство не с одним продуктом, а с платформой
          </h2>
        </div>

        {/* Platform visual */}
        <div className="relative">
          {/* AI Layer */}
          <div className="relative bg-gradient-to-r from-accent-red/10 via-accent-red/5 to-accent-red/10 rounded-2xl border border-accent-red/20 p-6 mb-6">
            <div className="flex items-center justify-center gap-3">
              <Sparkles className="w-5 h-5 text-accent-red" />
              <span className="text-sm font-medium text-foreground">Cortex AI Layer</span>
              <span className="px-2 py-0.5 rounded-full bg-accent-red/20 text-xs text-accent-red">Future</span>
            </div>
          </div>

          {/* Product cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="relative bg-card/50 rounded-xl border border-border p-6 hover:bg-card hover:border-primary/30 transition-all duration-300"
              >
                {/* Status badge */}
                <span className={`absolute top-4 right-4 px-2 py-0.5 rounded-full text-xs font-medium ${product.statusColor}`}>
                  {product.status}
                </span>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <product.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg font-semibold text-foreground">{product.name}</span>
                </div>
                <p className="text-sm text-foreground-secondary">{product.description}</p>
              </div>
            ))}
          </div>

          {/* Flow arrows */}
          <div className="flex justify-center gap-4 mb-8">
            <ArrowRight className="w-5 h-5 text-foreground-muted rotate-90" />
          </div>

          {/* Foundation */}
          <div className="bg-card/30 rounded-2xl border border-border p-6 text-center">
            <p className="text-sm text-foreground-secondary leading-relaxed max-w-3xl mx-auto">
              Партнерская модель строится вокруг более широкой платформенной логики: задачи, корпоративное взаимодействие, знания и дальнейшее развитие цифрового контура клиента.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
