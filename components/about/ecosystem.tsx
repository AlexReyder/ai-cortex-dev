"use client"

import { Layers, Database, FileText, ArrowRight } from "lucide-react"

const ecosystemProducts = [
  {
    icon: Layers,
    title: "ToDo",
    description: "Программа для управления проектами и согласованной командной работы небольших групп.",
    status: "Доступно",
  },
  {
    icon: Database,
    title: "ToDo.corp",
    description: "Система управления проблемами и взаимодействием для средних и крупных предприятий.",
    status: "В разработке",
  },
  {
    icon: FileText,
    title: "ToDo.doc",
    description: "Система для хранения и организации корпоративных знаний и информационных ресурсов в рамках проектов.",
    status: "Roadmap",
  },
]

export function EcosystemSection() {
  return (
    <section className="py-20 md:py-28 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 text-balance">
            Экосистема продуктов
          </h2>
        </div>

        {/* Ecosystem grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {ecosystemProducts.map((product, index) => (
            <div
              key={index}
              className="flex flex-col h-full bg-card border border-card-border rounded-xl p-6 hover:border-primary/30 transition-colors group"
            >
              {/* Status badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <product.icon className="w-6 h-6 text-primary" />
                </div>
                <span className={`text-[10px] font-medium uppercase tracking-wider px-2 py-1 rounded-full ${
                  product.status === "Доступно" 
                    ? "bg-green-500/10 text-green-400"
                    : product.status === "В разработке"
                    ? "bg-primary/10 text-primary"
                    : "bg-foreground-muted/10 text-foreground-muted"
                }`}>
                  {product.status}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2 shrink-0">
                {product.title}
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed flex-1">
                {product.description}
              </p>

              {/* Arrow indicator */}
              <div className="mt-4 pt-4 border-t border-card-border">
                <ArrowRight className="w-4 h-4 text-foreground-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* Supporting line */}
        <div className="text-center">
          <p className="text-sm text-foreground-secondary leading-relaxed max-w-xl mx-auto">
            Мы рассматриваем ToDo Enterprise как основу более широкой платформенной экосистемы.
          </p>
        </div>

        {/* Platform flow diagram */}
        <div className="mt-12 bg-card/50 border border-card-border rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-2">
                <Layers className="w-8 h-8 text-primary" />
              </div>
              <span className="text-xs text-foreground-muted">ToDo</span>
            </div>
            
            <div className="hidden md:block w-16 h-px bg-gradient-to-r from-primary/50 to-primary/20" />
            <div className="md:hidden h-8 w-px bg-gradient-to-b from-primary/50 to-primary/20" />
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-2">
                <Database className="w-8 h-8 text-primary" />
              </div>
              <span className="text-xs text-foreground-muted">ToDo.corp</span>
            </div>
            
            <div className="hidden md:block w-16 h-px bg-gradient-to-r from-primary/20 to-primary/10" />
            <div className="md:hidden h-8 w-px bg-gradient-to-b from-primary/20 to-primary/10" />
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-2">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <span className="text-xs text-foreground-muted">ToDo.doc</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
