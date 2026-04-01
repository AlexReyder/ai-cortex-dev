"use client"

import { Shield, RefreshCw, Cloud, Settings, Handshake } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const trustBadges = [
  { icon: Shield, text: "ToDo Enterprise" },
  { icon: RefreshCw, text: "Migration-friendly" },
  { icon: Cloud, text: "Private Cloud / On-Prem" },
  { icon: Settings, text: "Enterprise customization" },
  { icon: Handshake, text: "Партнерские сценарии" },
]

export function ContactsHero() {
  return (
    <section className="relative pt-32 pb-16 bg-background overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              Контакты
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
            Обсудим ваш сценарий работы с Cortex ToDo
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-foreground-secondary mb-4 leading-relaxed text-pretty max-w-2xl mx-auto">
            Выберите подходящий сценарий: демо ToDo Enterprise, пилотный стенд, миграция, архитектура развертывания, кастомизация или партнерский запрос.
          </p>

          {/* Supporting text */}
          <p className="text-sm text-foreground-muted mb-8 leading-relaxed max-w-xl mx-auto">
            Cortex ToDo работает с компаниями, которым нужен безопасный, управляемый и привычный переход на российскую платформу управления задачами и проектами.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <CTAButton
              variant="primary"
              size="lg"
              modalType="todo-demo"
            >
              Запросить демо
            </CTAButton>
            <CTAButton
              variant="secondary"
              size="lg"
              modalType="todo-stand"
            >
              Запросить демо-стенд
            </CTAButton>
            <CTAButton
              variant="ghost"
              size="lg"
              modalType="contact"
            >
              Связаться с нами
            </CTAButton>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border text-xs text-foreground-secondary"
              >
                <badge.icon className="w-3.5 h-3.5 text-primary" />
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
