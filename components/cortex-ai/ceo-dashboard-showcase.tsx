"use client"

import Image from "next/image"
import { BarChart3, Users, AlertTriangle, Sparkles } from "lucide-react"

const highlights = [
  {
    icon: BarChart3,
    title: "Единая картина компании",
    description: "Статус задач, встреч, документов и команд в одном дашборде",
  },
  {
    icon: Users,
    title: "Загрузка команд",
    description: "Кто перегружен, где узкие места, какие команды под давлением",
  },
  {
    icon: AlertTriangle,
    title: "Риски и follow-up",
    description: "Просроченные задачи, встречи без итогов, документы в ожидании",
  },
  {
    icon: Sparkles,
    title: "AI-рекомендации",
    description: "Предложения по перераспределению задач и ускорению процессов",
  },
]

export function CEODashboardShowcase() {
  return (
    <section className="py-20 md:py-28 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left column - Content */}
          <div className="lg:col-span-5">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-primary tracking-wide">CEO Dashboard</span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-[2rem] font-semibold text-foreground leading-[1.2] tracking-tight mb-4 text-balance">
              Прозрачность для руководителя без микроменеджмента
            </h2>
            
            <p className="text-base text-foreground-secondary leading-relaxed mb-6 text-pretty max-w-lg">
              Единая картина компании: загрузка команд, риски и follow-up. AI-рекомендации, которые помогают принимать решения на основе данных, а не интуиции.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-card border border-border"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                    <p className="text-xs text-foreground-secondary mt-0.5 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Screenshot (larger) */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Ambient glow */}
              <div className="absolute -inset-8 bg-primary/5 rounded-3xl blur-3xl" />
              
              {/* Product image - clean, no fake browser chrome */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-border/50">
                <Image
                  src="/images/ceo-dashboard-showcase.png"
                  alt="Cortex AI - CEO Dashboard с общей картиной компании и AI-рекомендациями"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
