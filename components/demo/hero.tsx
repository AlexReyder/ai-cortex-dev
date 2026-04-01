"use client"

import Image from "next/image"
import { Monitor, Cloud, RefreshCw, Settings, Shield, ArrowRight, CheckCircle } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const trustBullets = [
  { icon: Monitor, text: "Web + Mobile + Server" },
  { icon: Cloud, text: "Private Cloud / On-Prem" },
  { icon: RefreshCw, text: "Migration-friendly логика" },
  { icon: Settings, text: "Адаптация под процессы" },
  { icon: Shield, text: "Enterprise-ready" },
]

const processSteps = [
  { step: "1", label: "Демо" },
  { step: "2", label: "Пилот" },
  { step: "3", label: "Внедрение" },
]

export function DemoHero() {
  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-background overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-5 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                Демо / Пилот
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-foreground leading-[1.15] tracking-tight mb-5 text-balance">
              Проверьте ToDo Enterprise на вашем сценарии
            </h1>

            {/* Subheadline */}
            <p className="text-base lg:text-lg text-foreground-secondary leading-relaxed mb-4 text-pretty">
              Покажем ToDo Enterprise на релевантных для вас сценариях, обсудим миграцию, безопасность, архитектуру размещения и возможную адаптацию под процессы компании.
            </p>

            {/* Supporting text */}
            <p className="text-sm text-foreground-muted leading-relaxed mb-8">
              Для компаний, которым нужен безопасный и управляемый переход на российскую платформу управления задачами и проектами.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-4">
              <CTAButton
                variant="primary"
                size="lg"
                modalType="todo-demo"
              >
                <span className="flex items-center gap-2">
                  Запросить демо
                  <ArrowRight className="w-4 h-4" />
                </span>
              </CTAButton>
              <CTAButton
                variant="secondary"
                size="lg"
                modalType="todo-stand"
              >
                Запросить демо-стенд
              </CTAButton>
            </div>

            {/* Secondary CTA */}
            <div className="mb-8">
              <CTAButton
                variant="ghost"
                size="sm"
                modalType="pilot"
              >
                Обсудить пилот
              </CTAButton>
            </div>

            {/* Trust bullets */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {trustBullets.map((bullet, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-card/60 border border-card-border text-xs text-foreground-secondary"
                >
                  <bullet.icon className="w-3.5 h-3.5 text-primary/70" />
                  <span>{bullet.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Visual */}
          <div className="lg:col-span-7 relative">
            {/* Process flow mini-visual */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:-top-2 lg:right-8 z-20 flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 border border-card-border">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-primary">{step.step}</span>
                    </div>
                    <span className="text-xs text-foreground-secondary">{step.label}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-foreground-muted" />
                  )}
                </div>
              ))}
            </div>

            {/* Product image container */}
            <div className="relative">
              {/* Ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl blur-3xl scale-110" />
              
              {/* Image frame */}
              <div className="relative bg-gradient-to-br from-[#f8f9fb] to-[#f0f2f5] rounded-2xl p-2 shadow-2xl border border-white/20">
                <Image
                  src="/images/demo.png"
                  alt="Cortex ToDo Enterprise - интерфейс управления задачами на всех устройствах"
                  width={800}
                  height={550}
                  className="relative z-10 w-full h-auto rounded-xl"
                  priority
                />
              </div>

              {/* Trust chip */}
              <div className="absolute -bottom-3 left-4 z-20 flex items-center gap-1.5 bg-background/95 backdrop-blur-sm rounded-full px-3 py-1.5 border border-card-border">
                <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                <span className="text-xs text-foreground-secondary">Российская платформа</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
