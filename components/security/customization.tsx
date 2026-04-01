"use client"

import { Workflow, Plug, Users, Layout } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const customizationCards = [
  {
    icon: Workflow,
    title: "Адаптация workflow",
    description: "Настройка рабочих процессов под специфику команд и проектов клиента.",
  },
  {
    icon: Plug,
    title: "Интеграции под среду клиента",
    description: "Подключение к корпоративным системам, SSO, уведомлениям и другим сервисам.",
  },
  {
    icon: Users,
    title: "Роли и права доступа",
    description: "Гибкая модель разграничения прав в соответствии с оргструктурой.",
  },
  {
    icon: Layout,
    title: "Настройка интерфейсных сценариев",
    description: "Адаптация представлений, полей и логики работы под требования пользователей.",
  },
]

export function CustomizationSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight tracking-tight mb-4 text-balance">
            Адаптация под корпоративный контур
          </h2>
          <p className="text-base text-foreground-secondary leading-relaxed max-w-3xl mx-auto text-pretty">
            ToDo Enterprise может быть внедрен и доработан под требования конкретного заказчика: архитектуру, роли, процессы, интеграции и модель доступа.
          </p>
        </div>

        {/* Customization cards - equal height */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {customizationCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col h-full bg-background-secondary/60 rounded-xl border border-white/[0.06] p-6 hover:border-primary/20 transition-colors"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 mb-4">
                <card.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Title */}
              <h3 className="flex-shrink-0 text-base font-semibold text-foreground mb-2">
                {card.title}
              </h3>

              {/* Description - flex-1 to fill space */}
              <p className="flex-1 text-sm text-foreground-muted leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="bg-primary/5 rounded-xl border border-primary/10 p-8 mb-10">
          <p className="text-base text-foreground leading-relaxed text-center max-w-3xl mx-auto">
            <span className="text-primary font-medium">&ldquo;</span>
            Для крупных клиентов ToDo Enterprise может быть не просто развернут, а встроен в реальную корпоративную среду.
            <span className="text-primary font-medium">&rdquo;</span>
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <CTAButton
            variant="primary"
            size="md"
            modalType="customization"
          >
            Обсудить кастомизацию
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
