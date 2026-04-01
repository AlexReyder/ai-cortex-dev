"use client"

import Image from "next/image"
import { Bot, Video, MessageSquare, FileText, BarChart3, ArrowRight, Play } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const heroBullets = [
  { icon: Video, text: "Встречи: transcript, summary, задачи" },
  { icon: MessageSquare, text: "Переписки: контекст, summary, действия" },
  { icon: FileText, text: "Документы: извлечение, workflow, согласование" },
  { icon: BarChart3, text: "Управление: загрузка, риски, follow-up" },
]

export function CortexHero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background-secondary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-red/8 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left column - Text content */}
          <div className="lg:col-span-5 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-red/10 border border-accent-red/20 mb-6">
              <Bot className="w-4 h-4 text-accent-red" />
              <span className="text-xs font-medium text-accent-red tracking-wide">Cortex AI Agents</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-foreground leading-[1.15] tracking-tight mb-5 text-balance">
              <span className="gradient-text">Операционный AI</span>
              <span className="text-foreground"> для встреч, документов и коммуникаций</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-foreground-secondary leading-relaxed mb-4 text-pretty max-w-xl mx-auto lg:mx-0">
              Ежедневная рабочая среда: задачи, встречи, документы и AI в одном экране. Операционная работа без потери контекста.
            </p>

            {/* Supporting text */}
            <p className="text-sm text-foreground-muted leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Транскрипция и summary встреч, извлечение задач из переписок, обработка документов и рекомендации по загрузке команды.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
              <CTAButton
                variant="accent-red"
                size="lg"
                modalType="ai-demo"
              >
                <span className="flex items-center gap-2">
                  Заказать демо
                  <ArrowRight className="w-4 h-4" />
                </span>
              </CTAButton>
              <CTAButton
                variant="secondary"
                size="lg"
                modalType="todo-stand"
              >
                <span className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Посмотреть интерфейс
                </span>
              </CTAButton>
            </div>

            {/* Secondary CTA */}
            <div className="flex justify-center lg:justify-start">
              <CTAButton
                variant="ghost"
                size="sm"
                modalType="implementation"
              >
                {"Обсудить внедрение →"}
              </CTAButton>
            </div>

            {/* Trust bullets */}
            <div className="mt-10 pt-8 border-t border-border">
              <div className="grid grid-cols-2 gap-4">
                {heroBullets.map((bullet, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <bullet.icon className="w-4 h-4 text-accent-red shrink-0" />
                    <span className="text-xs text-foreground-muted">{bullet.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Product visual */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Ambient glow */}
              <div className="absolute -inset-8 bg-accent-red/5 rounded-3xl blur-3xl" />
              
              {/* Product image - clean, no fake browser chrome */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-border/50">
                <Image
                  src="/images/hero.png"
                  alt="Cortex AI - Главная рабочая панель с задачами, встречами и AI-ассистентом"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
