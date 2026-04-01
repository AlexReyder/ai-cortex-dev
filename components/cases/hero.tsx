"use client"

import Image from "next/image"
import { Shield, Cloud, RefreshCw, Settings, Kanban } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const trustBadges = [
  { icon: Kanban, text: "Kanban / Scrum / Roadmap" },
  { icon: Cloud, text: "Private Cloud / On-Prem" },
  { icon: RefreshCw, text: "Migration-friendly" },
  { icon: Settings, text: "Кастомизация под клиента" },
  { icon: Shield, text: "Enterprise-ready" },
]

const scenarioChips = [
  "Импортозамещение",
  "PMO",
  "Distributed teams",
  "Secure deployment",
  "Workflow customization",
]

export function CasesHero() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-5 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-xs font-medium text-primary tracking-wide uppercase">
                Кейсы / Сценарии использования
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-foreground leading-[1.15] tracking-tight mb-4 text-balance">
              ToDo Enterprise в реальных сценариях бизнеса
            </h1>

            {/* Subheadline */}
            <p className="text-base lg:text-lg text-foreground-secondary leading-relaxed mb-4 text-pretty max-w-xl mx-auto lg:mx-0">
              От импортозамещения и проектных офисов до распределенных команд и отраслевых сценариев — ToDo Enterprise помогает выстроить управляемый рабочий контур.
            </p>

            {/* Supporting text */}
            <p className="text-sm text-foreground-muted leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Узнайте, где продукт особенно уместен, какие задачи закрывает и какой следующий шаг доступен для каждого сценария.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
              <CTAButton
                variant="primary"
                size="lg"
                modalType="todo-demo"
              >
                Попробовать ToDo
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
                modalType="contact"
              >
                Обсудить сценарий
              </CTAButton>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-card/50 border border-card-border text-xs text-foreground-muted"
                >
                  <badge.icon className="w-3 h-3 text-primary/70" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="lg:col-span-7 relative">
            {/* Background glow */}
            <div className="absolute inset-0 -inset-x-8 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl blur-3xl" />
            
            {/* Image container */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-background-light/5 to-background-light/10 border border-card-border shadow-2xl">
              <Image
                src="/images/demo.png"
                alt="Cortex ToDo Enterprise - интерфейс на разных устройствах"
                width={800}
                height={550}
                className="w-full h-auto"
                priority
              />
              
              {/* Scenario chips overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {scenarioChips.map((chip, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm border border-card-border text-xs text-foreground-secondary"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
