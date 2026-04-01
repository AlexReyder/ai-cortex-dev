"use client"

import Image from "next/image"
import { Bot, Sparkles, MessageSquare, ListTodo } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "История чатов",
    description: "Все диалоги с AI сохраняются и доступны для поиска",
  },
  {
    icon: Sparkles,
    title: "Summary и действия",
    description: "AI анализирует контекст и предлагает конкретные шаги",
  },
  {
    icon: ListTodo,
    title: "Быстрые действия",
    description: "Создание задач, подготовка документов, открытие отчетов",
  },
]

export function AIAssistantShowcase() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left column - Screenshot (larger) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative">
              {/* Ambient glow */}
              <div className="absolute -inset-8 bg-accent-red/5 rounded-3xl blur-3xl" />
              
              {/* Product image - clean, no fake browser chrome */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-border/50">
                <Image
                  src="/images/ai-assistant-showcas.png"
                  alt="Cortex AI - Личный AI-ассистент с историей чатов и быстрыми действиями"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Right column - Content */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-red/10 border border-accent-red/20 mb-6">
              <Bot className="w-4 h-4 text-accent-red" />
              <span className="text-xs font-medium text-accent-red tracking-wide">AI-ассистент</span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-[2rem] font-semibold text-foreground leading-[1.2] tracking-tight mb-4 text-balance">
              Рабочий AI вместо абстрактного чата
            </h2>
            
            <p className="text-base text-foreground-secondary leading-relaxed mb-6 text-pretty max-w-lg">
              AI-помощь по задачам, встречам, документам и коммуникациям. Summary и действия по итогам. Рекомендации, которые учитывают контекст вашей работы.
            </p>

            {/* Feature list */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent-red/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 text-accent-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{feature.title}</h3>
                    <p className="text-sm text-foreground-secondary mt-0.5">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
