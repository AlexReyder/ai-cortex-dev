"use client"

import Link from "next/link"
import { Layers, Database, FileText, Sparkles, Globe, Shield, Server, TrendingUp, CheckCircle2 } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const trustBadges = [
  { icon: Globe, text: "Российский рынок" },
  { icon: Shield, text: "Enterprise-ready" },
  { icon: Server, text: "Secure deployment" },
  { icon: TrendingUp, text: "Ecosystem expansion" },
  { icon: CheckCircle2, text: "Product maturity" },
]

export function InvestorsHero() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-background overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Text */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
              Инвесторам
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-[1.15] tracking-tight mb-6 text-balance">
              Cortex ToDo: инвестиционный тезис российской{" "}
              <span className="gradient-text">platform company</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-foreground-secondary leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0">
              Cortex ToDo строит российскую экосистему управления задачами, корпоративного взаимодействия и дальнейших AI-native сценариев для компаний, которым нужны локальный контур, управляемость и независимость от зарубежных вендоров.
            </p>

            {/* Supporting text */}
            <p className="text-sm text-foreground-muted leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Это история не про очередной task manager, а про локальную platform play: familiar workflow, secure deployment, ecosystem expansion и long-term product moat.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
              <CTAButton
                variant="primary"
                size="lg"
                modalType="investor"
              >
                Связаться с нами
              </CTAButton>
              <CTAButton
                variant="secondary"
                size="lg"
                modalType="investor-materials"
              >
                Запросить инвестиционные материалы
              </CTAButton>
            </div>

            {/* Secondary CTA */}
            <div>
              <Link
                href="/todo-enterprise"
                className="inline-flex text-sm text-foreground-muted hover:text-primary transition-colors duration-200"
              >
                Посмотреть ToDo Enterprise
              </Link>
            </div>
          </div>

          {/* Right column - Platform visual */}
          <div className="relative">
            {/* Platform diagram */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-card to-card-hover border border-card-border">
              {/* Center - Cortex ToDo */}
              <div className="flex justify-center mb-8">
                <div className="px-6 py-4 rounded-xl bg-primary/10 border border-primary/30">
                  <span className="text-lg font-semibold text-foreground">Cortex ToDo</span>
                  <p className="text-xs text-foreground-muted mt-1">Platform core</p>
                </div>
              </div>

              {/* Product pillars */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-background/50 border border-card-border text-center">
                  <Database className="w-6 h-6 text-primary mx-auto mb-2" />
                  <span className="text-sm font-medium text-foreground block">ToDo Enterprise</span>
                  <span className="text-xs text-foreground-muted">Task & Project</span>
                </div>
                <div className="p-4 rounded-lg bg-background/50 border border-card-border text-center">
                  <Layers className="w-6 h-6 text-primary mx-auto mb-2" />
                  <span className="text-sm font-medium text-foreground block">ToDo.corp</span>
                  <span className="text-xs text-foreground-muted">Enterprise Interaction</span>
                </div>
                <div className="p-4 rounded-lg bg-background/50 border border-card-border text-center">
                  <FileText className="w-6 h-6 text-primary mx-auto mb-2" />
                  <span className="text-sm font-medium text-foreground block">ToDo.doc</span>
                  <span className="text-xs text-foreground-muted">Knowledge Base</span>
                </div>
                <div className="p-4 rounded-lg bg-background/30 border border-dashed border-card-border text-center opacity-60">
                  <Sparkles className="w-6 h-6 text-primary/60 mx-auto mb-2" />
                  <span className="text-sm font-medium text-foreground/60 block">AI Layer</span>
                  <span className="text-xs text-foreground-muted/60">Future expansion</span>
                </div>
              </div>

              {/* Expansion arrows */}
              <div className="flex justify-center">
                <div className="px-4 py-2 rounded-lg bg-primary/5 border border-primary/10">
                  <span className="text-xs text-foreground-muted">Ecosystem expansion path</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-12 pt-8 border-t border-card-border">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-foreground-muted">
                <badge.icon className="w-4 h-4 text-primary/70" />
                <span className="text-sm">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
