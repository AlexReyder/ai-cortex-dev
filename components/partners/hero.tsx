"use client"

import { Cloud, Server, Building2, Users, Briefcase, ArrowRight, Layers } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const trustBadges = [
  "Интеграторы",
  "Cloud / Private Cloud",
  "ЦОД",
  "Внедрение",
  "Enterprise-сделки",
]

export function PartnersHeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(76,110,245,0.08),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-5 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Users className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-primary">Партнерам</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-foreground leading-[1.15] tracking-tight mb-4 text-balance">
              Партнерская модель для внедрения и развития Cortex ToDo
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-foreground-secondary leading-relaxed mb-4 text-pretty">
              Развиваем партнерскую сеть для внедрения, размещения и масштабирования российской платформы управления задачами, процессами и корпоративным контуром.
            </p>

            {/* Supporting text */}
            <p className="text-sm text-foreground-muted leading-relaxed mb-8">
              ToDo Enterprise подходит для совместных проектов с интеграторами, облачными провайдерами, ЦОД и партнерами, которые работают с enterprise-клиентами и задачами импортозамещения.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
              <CTAButton
                variant="primary"
                size="lg"
                modalType="partner"
              >
                <span className="flex items-center gap-2">
                  Обсудить партнерство
                  <ArrowRight className="w-4 h-4" />
                </span>
              </CTAButton>
              <CTAButton
                variant="secondary"
                size="lg"
                modalType="partner"
              >
                Стать партнером
              </CTAButton>
            </div>

            {/* Secondary CTA */}
            <div className="mb-8">
              <CTAButton
                variant="ghost"
                size="sm"
                modalType="partner"
              >
                Запросить партнерскую презентацию
              </CTAButton>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {trustBadges.map((badge, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-card/50 border border-border text-xs text-foreground-muted"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Ecosystem Visual */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Ambient glow */}
              <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl scale-95" />

              {/* Ecosystem diagram container */}
              <div className="relative bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 lg:p-12">
                {/* Center: Cortex ToDo */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl" />
                    <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 text-center">
                      <Layers className="w-8 h-8 text-white mx-auto mb-2" />
                      <span className="text-white font-semibold text-lg">Cortex ToDo</span>
                      <p className="text-white/70 text-xs mt-1">Enterprise Platform</p>
                    </div>
                  </div>
                </div>

                {/* Partner nodes */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { icon: Building2, label: "Интеграторы", desc: "Внедрение" },
                    { icon: Cloud, label: "Cloud / Private Cloud", desc: "Размещение" },
                    { icon: Server, label: "ЦОД", desc: "Инфраструктура" },
                    { icon: Users, label: "Консалтинг", desc: "Трансформация" },
                    { icon: Briefcase, label: "Enterprise", desc: "Клиенты" },
                    { icon: Layers, label: "Tech Partners", desc: "Интеграции" },
                  ].map((partner, index) => (
                    <div
                      key={index}
                      className="bg-card/50 border border-border rounded-xl p-4 text-center hover:bg-card/70 hover:border-primary/30 transition-all duration-300"
                    >
                      <partner.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                      <span className="text-sm font-medium text-foreground block">{partner.label}</span>
                      <span className="text-xs text-foreground-muted">{partner.desc}</span>
                    </div>
                  ))}
                </div>

                {/* Connection lines visual hint */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-dashed border-primary/20 rounded-full pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-dashed border-primary/10 rounded-full pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
