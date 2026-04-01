"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Layers, Database, FileText, Sparkles } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background-secondary" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text column */}
          <div className="lg:col-span-6 text-center lg:text-left">
            {/* Eyebrow */}
            <span className="inline-block text-xs font-medium tracking-widest text-primary uppercase mb-4">
              О компании
            </span>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-foreground leading-[1.15] tracking-tight mb-6 text-balance">
              Cortex ToDo — российская технологическая платформа для управления работой и развития enterprise-экосистемы
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-foreground-secondary leading-relaxed mb-4 text-pretty max-w-xl mx-auto lg:mx-0">
              Мы развиваем отечественную экосистему продуктов для компаний, которым нужны привычные, безопасные и управляемые инструменты вместо западных решений.
            </p>

            {/* Supporting text */}
            <p className="text-sm text-foreground-muted leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Cortex ToDo объединяет task management, корпоративное взаимодействие, базу знаний и дальнейшее развитие AI-native сценариев в одном платформенном векторе.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-hover text-primary-foreground h-11 px-6 text-sm font-medium"
                asChild
              >
                <Link href="#contact" className="flex items-center justify-center gap-2">
                  Запросить демо
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-card h-11 px-6 text-sm font-medium"
                asChild
              >
                <Link href="#contact">Связаться с нами</Link>
              </Button>
              <Button
                variant="ghost"
                className="text-foreground-secondary hover:text-foreground h-11 px-4 text-sm"
                asChild
              >
                <Link href="/todo-enterprise">Посмотреть продукты</Link>
              </Button>
            </div>
          </div>

          {/* Platform diagram column */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Subtle glow */}
              <div className="absolute -inset-8 bg-primary/5 rounded-3xl blur-3xl" />
              
              {/* Platform diagram */}
              <div className="relative bg-card/50 backdrop-blur-sm border border-card-border rounded-2xl p-8">
                {/* Cortex Platform label */}
                <div className="text-center mb-8">
                  <span className="text-xs font-medium tracking-widest text-primary uppercase">
                    Платформа Cortex
                  </span>
                </div>

                {/* Product ecosystem grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {/* ToDo */}
                  <div className="bg-background/60 border border-card-border rounded-xl p-4 text-center hover:border-primary/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Layers className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">ToDo</h3>
                    <p className="text-[10px] text-foreground-muted leading-tight">
                      Управление проектами
                    </p>
                  </div>

                  {/* ToDo.corp */}
                  <div className="bg-background/60 border border-card-border rounded-xl p-4 text-center hover:border-primary/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Database className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">ToDo.corp</h3>
                    <p className="text-[10px] text-foreground-muted leading-tight">
                      Enterprise взаимодействие
                    </p>
                  </div>

                  {/* ToDo.doc */}
                  <div className="bg-background/60 border border-card-border rounded-xl p-4 text-center hover:border-primary/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">ToDo.doc</h3>
                    <p className="text-[10px] text-foreground-muted leading-tight">
                      База знаний
                    </p>
                  </div>
                </div>

                {/* AI layer hint */}
                <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20 rounded-lg p-3 flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-xs text-foreground-secondary">
                    Cortex AI Layer
                  </span>
                </div>

                {/* Connecting lines */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-dashed border-card-border rounded-full opacity-30 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
