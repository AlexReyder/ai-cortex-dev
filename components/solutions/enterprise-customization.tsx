"use client"

import { Workflow, Users, Plug, Layout, Quote } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const customizations = [
  {
    icon: Workflow,
    title: "Workflow под компанию",
    description: "Настройка процессов, статусов, переходов и автоматизаций под реальные сценарии работы.",
  },
  {
    icon: Users,
    title: "Роли и права доступа",
    description: "Гибкая система разграничения доступа под корпоративную структуру и требования безопасности.",
  },
  {
    icon: Plug,
    title: "Интеграции и архитектура",
    description: "Подключение к внутренним системам, API, корпоративной инфраструктуре и внешним сервисам.",
  },
  {
    icon: Layout,
    title: "Интерфейс под контур клиента",
    description: "Адаптация интерфейсных элементов под корпоративный стиль и специфику использования.",
  },
]

export function EnterpriseCustomization() {
  return (
    <section id="customization" className="py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight tracking-tight text-balance">
            Когда нужен не просто продукт, а платформа под ваши процессы
          </h2>
        </div>

        <div className="text-center mb-14">
          <p className="text-base lg:text-lg text-foreground-secondary leading-relaxed max-w-3xl mx-auto">
            ToDo Enterprise может быть адаптирован под сценарии конкретного клиента: workflow, роли, права, интеграции и даже отдельные интерфейсные элементы.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {customizations.map((item, index) => (
            <div
              key={index}
              className="flex flex-col h-full p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Title */}
              <h3 className="flex-shrink-0 text-base font-semibold text-foreground mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="flex-1 text-sm text-foreground-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Callout quote */}
        <div className="relative p-6 lg:p-8 rounded-xl bg-primary/5 border border-primary/20 mb-10">
          <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/20" />
          <p className="text-base lg:text-lg text-foreground leading-relaxed text-center italic pl-8">
            "Для крупных клиентов ToDo Enterprise может быть встроен в реальный рабочий контур, а не просто развернут как типовой SaaS-инструмент."
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <CTAButton
            variant="primary"
            size="lg"
            modalType="customization"
          >
            Обсудить кастомизацию
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
