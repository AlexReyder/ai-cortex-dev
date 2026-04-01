"use client"

import { Shield, Server, RefreshCw, Settings, CheckCircle2 } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const trustBadges = [
  { icon: Shield, text: "Российский вендор" },
  { icon: Server, text: "On-prem / Private Cloud" },
  { icon: RefreshCw, text: "Migration-friendly" },
  { icon: Settings, text: "Адаптация под клиента" },
]

const comparisonPoints = [
  "Привычная логика работы",
  "Безопасное размещение",
  "Контролируемое внедрение",
  "Гибкость под enterprise",
]

export function CompareHero() {
  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-background relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-xs font-medium text-primary tracking-wide uppercase">Сравнение</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight tracking-tight mb-4 text-balance">
              <span className="block">ToDo Enterprise vs</span>
              <span className="block text-foreground-secondary">Jira / Trello / Asana / Tracker</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-foreground-secondary leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0">
              ToDo Enterprise сочетает привычную логику работы, российскую инфраструктуру, безопасное размещение и возможность адаптации под enterprise-клиента.
            </p>

            {/* Supporting text */}
            <p className="text-sm text-foreground-muted leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Для компаний, которым нужен не просто task manager, а управляемая платформа для перехода, внедрения и дальнейшего развития.
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
            <div>
              <CTAButton
                variant="ghost"
                size="sm"
                modalType="migration"
              >
                Обсудить миграцию
              </CTAButton>
            </div>
          </div>

          {/* Right: Comparison visual */}
          <div className="relative">
            {/* ToDo Enterprise highlighted card */}
            <div className="bg-card border border-primary/30 rounded-2xl p-6 mb-4 relative">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                Рекомендуем
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">ToDo Enterprise</h3>
              <ul className="space-y-3">
                {comparisonPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground-secondary">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Competitor cards - muted */}
            <div className="grid grid-cols-2 gap-3">
              {["Jira", "Trello", "Asana", "Tracker"].map((competitor) => (
                <div
                  key={competitor}
                  className="bg-card/50 border border-border rounded-xl p-4 opacity-60"
                >
                  <span className="text-sm font-medium text-foreground-muted">{competitor}</span>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mt-6 justify-center lg:justify-start">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-card/50 border border-border rounded-full"
                >
                  <badge.icon className="w-3.5 h-3.5 text-foreground-muted" />
                  <span className="text-xs text-foreground-muted">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
