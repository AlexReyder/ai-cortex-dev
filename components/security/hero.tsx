"use client"

import { Server, Cloud, Database, RefreshCw, Users, Shield, Lock, Layers } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const trustBullets = [
  { icon: Server, text: "Сервер клиента" },
  { icon: Cloud, text: "Private Cloud" },
  { icon: Database, text: "Российский ЦОД" },
  { icon: RefreshCw, text: "Migration-friendly логика" },
  { icon: Users, text: "Контроль доступа и ролей" },
]

export function SecurityHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background-secondary" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="lg:col-span-5 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Shield className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-primary tracking-wide">
                Безопасность / Развертывание / Миграция
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-foreground leading-[1.15] tracking-tight mb-5 text-balance">
              Безопасное внедрение ToDo Enterprise в контуре клиента
            </h1>

            {/* Subheadline */}
            <p className="text-base lg:text-lg text-foreground-secondary leading-relaxed mb-4 text-pretty max-w-xl mx-auto lg:mx-0">
              ToDo Enterprise позволяет размещать систему в безопасной корпоративной среде, контролировать хранение данных и переходить с привычных зарубежных решений без ущерба для процессов.
            </p>

            {/* Supporting line */}
            <p className="text-sm text-foreground-muted leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Сервер клиента, private cloud, российский ЦОД, migration-friendly логика и управляемое внедрение для enterprise-команд.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <CTAButton
                variant="primary"
                size="md"
                modalType="architecture"
              >
                Обсудить архитектуру
              </CTAButton>
              <CTAButton
                variant="secondary"
                size="md"
                modalType="todo-stand"
              >
                Запросить демо-стенд
              </CTAButton>
            </div>

            {/* Secondary CTA */}
            <div className="flex justify-center lg:justify-start">
              <CTAButton
                variant="ghost"
                size="sm"
                modalType="migration"
              >
                Обсудить миграцию →
              </CTAButton>
            </div>
          </div>

          {/* Right: Infrastructure visual */}
          <div className="lg:col-span-7 relative">
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-3xl blur-3xl scale-110 opacity-60" />
            
            {/* Architecture diagram container */}
            <div className="relative bg-gradient-to-br from-background-secondary/80 to-background-tertiary/60 rounded-2xl border border-white/[0.06] p-8 lg:p-10">
              {/* Deployment architecture visualization */}
              <div className="space-y-6">
                {/* Top layer: Users */}
                <div className="flex justify-center">
                  <div className="flex items-center gap-3 px-5 py-3 bg-background/60 rounded-xl border border-white/[0.08]">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">Пользователи</span>
                  </div>
                </div>

                {/* Arrow down */}
                <div className="flex justify-center">
                  <div className="w-px h-8 bg-gradient-to-b from-primary/40 to-primary/20" />
                </div>

                {/* Access control layer */}
                <div className="flex justify-center">
                  <div className="flex items-center gap-3 px-5 py-3 bg-primary/10 rounded-xl border border-primary/20">
                    <Lock className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-primary">Контроль доступа</span>
                  </div>
                </div>

                {/* Arrow down */}
                <div className="flex justify-center">
                  <div className="w-px h-8 bg-gradient-to-b from-primary/40 to-primary/20" />
                </div>

                {/* ToDo Enterprise layer */}
                <div className="flex justify-center">
                  <div className="flex items-center gap-3 px-6 py-4 bg-primary/20 rounded-xl border border-primary/30">
                    <Layers className="w-6 h-6 text-primary" />
                    <span className="text-base font-semibold text-foreground">ToDo Enterprise</span>
                  </div>
                </div>

                {/* Arrows to storage options */}
                <div className="flex justify-center gap-16">
                  <div className="w-px h-8 bg-gradient-to-b from-primary/40 to-primary/20 -rotate-45 origin-top" />
                  <div className="w-px h-8 bg-gradient-to-b from-primary/40 to-primary/20" />
                  <div className="w-px h-8 bg-gradient-to-b from-primary/40 to-primary/20 rotate-45 origin-top" />
                </div>

                {/* Storage layer */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center gap-2 p-4 bg-background/40 rounded-xl border border-white/[0.06]">
                    <Server className="w-5 h-5 text-foreground-secondary" />
                    <span className="text-xs text-center text-foreground-muted">Сервер клиента</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 bg-background/40 rounded-xl border border-white/[0.06]">
                    <Cloud className="w-5 h-5 text-foreground-secondary" />
                    <span className="text-xs text-center text-foreground-muted">Private Cloud</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 bg-background/40 rounded-xl border border-white/[0.06]">
                    <Database className="w-5 h-5 text-foreground-secondary" />
                    <span className="text-xs text-center text-foreground-muted">Российский ЦОД</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust bullets */}
        <div className="mt-16 pt-8 border-t border-white/[0.06]">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {trustBullets.map((bullet, index) => (
              <div key={index} className="flex items-center gap-2">
                <bullet.icon className="w-4 h-4 text-primary/70" />
                <span className="text-sm text-foreground-muted">{bullet.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
