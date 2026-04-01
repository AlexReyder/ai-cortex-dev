"use client"

import Image from "next/image"
import { Shield, Cloud, Settings, FolderKanban, Users } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const trustBadges = [
  { icon: Shield, text: "Импортозамещение" },
  { icon: Cloud, text: "Private Cloud / On-Prem" },
  { icon: Settings, text: "Кастомизация под клиента" },
  { icon: FolderKanban, text: "Управление проектами" },
  { icon: Users, text: "Distributed teams" },
]

export function SolutionsHero() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-background overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content - 5 columns */}
          <div className="lg:col-span-5 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-xs font-medium text-primary tracking-wide uppercase">Решения</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-foreground leading-[1.15] tracking-tight mb-5 text-balance">
              Cortex ToDo для команд, которым нужна управляемая российская платформа
            </h1>

            {/* Subheadline */}
            <p className="text-base lg:text-lg text-foreground-secondary leading-relaxed mb-4 text-pretty">
              ToDo Enterprise подходит компаниям, которым важны контроль задач и проектов, привычная логика работы, безопасное размещение и возможность адаптации под реальные процессы.
            </p>

            {/* Supporting text */}
            <p className="text-sm text-foreground-muted leading-relaxed mb-8">
              От импортозамещения и миграции до управления распределенными командами, проектными офисами и корпоративными workflow.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-4">
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
                modalType="implementation"
              >
                Обсудить сценарий внедрения
              </CTAButton>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-card/60 border border-border text-xs text-foreground-secondary"
                >
                  <badge.icon className="w-3 h-3 text-foreground-muted" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual - 7 columns */}
          <div className="lg:col-span-7 relative">
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-primary/4 to-transparent rounded-3xl blur-3xl scale-110" />
            
            {/* Image container */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-background-secondary to-background-tertiary border border-border shadow-2xl">
              <Image
                src="/images/demo.png"
                alt="Cortex ToDo - управление проектами и задачами для enterprise команд"
                width={800}
                height={550}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Micro badges */}
            <div className="absolute -left-2 top-1/4 flex flex-col gap-2">
              <span className="px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm border border-border text-[10px] text-foreground-secondary font-medium shadow-lg">
                IT / PMO / Operations
              </span>
              <span className="px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm border border-border text-[10px] text-foreground-secondary font-medium shadow-lg">
                Enterprise-ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
