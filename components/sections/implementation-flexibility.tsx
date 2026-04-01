"use client"

import { ArrowRight, Workflow, Server, Users, Palette, Quote } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const flexibilityCards = [
  {
    icon: Workflow,
    title: "Кастомизация workflow",
    description:
      "Адаптация статусов, сценариев работы, маршрутов согласования и логики движения задач под реальные процессы компании.",
  },
  {
    icon: Server,
    title: "Интеграции и контур",
    description:
      "Подключение нужных систем, работа в private cloud / on-prem и настройка архитектуры под требования корпоративной ИТ-среды.",
  },
  {
    icon: Users,
    title: "Роли, права, структура",
    description:
      "Настройка модели доступа, организационной логики, командных контуров и процессов взаимодействия между подразделениями.",
  },
  {
    icon: Palette,
    title: "Интерфейс под клиента",
    description:
      "При необходимости возможна адаптация отдельных визуальных элементов и UX-сценариев под корпоративные требования заказчика.",
  },
]

export function ImplementationFlexibilitySection() {
  return (
    <section id="flexibility" className="py-24 lg:py-32 bg-background-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium tracking-wide uppercase mb-6">
            Гибкость внедрения
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-foreground mb-6 leading-tight text-balance">
            Платформа, которую можно адаптировать под ваш бизнес
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-foreground-secondary mb-4 leading-relaxed">
            Для enterprise-клиентов ToDo может быть не только внедрен, но и адаптирован под реальные процессы, требования безопасности, оргструктуру и сценарии работы команды.
          </p>

          {/* Body copy */}
          <p className="text-base text-foreground-muted leading-relaxed">
            В отличие от крупных массовых платформ, Cortex ToDo позволяет работать ближе к задачам конкретного заказчика. Мы можем адаптировать рабочие сценарии, роли, логику процессов, интеграции и даже отдельные элементы интерфейса под требования клиента.
          </p>
        </div>

        {/* Premium benefit cards - Equal height grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {flexibilityCards.map((card) => (
            <div
              key={card.title}
              className="group relative flex flex-col rounded-2xl border border-card-border bg-card p-6 h-full premium-card overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/5 to-transparent" />

              <div className="relative flex flex-col h-full">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 shrink-0">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-3 shrink-0">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground-secondary leading-relaxed flex-1">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted callout */}
        <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background p-8 mb-12 overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="relative flex items-start gap-4">
            <div className="hidden sm:flex w-10 h-10 rounded-full bg-primary/10 items-center justify-center shrink-0">
              <Quote className="w-5 h-5 text-primary" />
            </div>
            <p className="text-lg sm:text-xl text-foreground leading-relaxed font-medium">
              Для крупных клиентов ToDo может стать не просто внедренной системой, а платформой, адаптированной под их собственный способ работы.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <CTAButton
            variant="primary"
            size="lg"
            modalType="customization"
          >
            <span className="flex items-center gap-2">
              Обсудить кастомизацию
              <ArrowRight className="w-4 h-4" />
            </span>
          </CTAButton>
          <CTAButton
            variant="secondary"
            size="lg"
            modalType="todo-stand"
          >
            Запросить enterprise-демо
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
