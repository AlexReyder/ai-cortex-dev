"use client"

import { Workflow, Users, Plug, Palette, Quote } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const customizationOptions = [
  {
    icon: Workflow,
    title: "Кастомизация workflow",
    description: "Настройка стадий, переходов и автоматизаций под процессы клиента",
  },
  {
    icon: Users,
    title: "Роли и модель доступа",
    description: "Гибкая система ролей и прав под организационную структуру",
  },
  {
    icon: Plug,
    title: "Интеграции под среду клиента",
    description: "Подключение к корпоративным системам и сервисам",
  },
  {
    icon: Palette,
    title: "UX / interface adaptation",
    description: "Адаптация интерфейса под требования и привычки команды",
  },
]

export function CustomizationCase() {
  return (
    <section id="customization-case" className="py-20 lg:py-28 bg-background-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground-dark mb-4">
            Кейс: платформа под процессы конкретного клиента
          </h2>
          <p className="text-base text-foreground-dark-secondary max-w-3xl mx-auto">
            Для крупных заказчиков ToDo Enterprise может быть адаптирован под workflow, роли, доступы, интеграции и даже отдельные элементы интерфейса.
          </p>
        </div>

        {/* Customization options grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {customizationOptions.map((option, index) => (
            <div
              key={index}
              className="flex flex-col h-full p-6 rounded-xl bg-white border border-border-light"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                <option.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground-dark mb-2">{option.title}</h3>
              <p className="text-sm text-foreground-dark-secondary leading-relaxed">{option.description}</p>
            </div>
          ))}
        </div>

        {/* Highlighted callout */}
        <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
              <Quote className="w-5 h-5 text-primary" />
            </div>
            <p className="text-base text-foreground-dark leading-relaxed">
              Это особенно важно для компаний, которым недостаточно типового SaaS-сценария и нужен продукт, встроенный в реальную корпоративную среду.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton
            variant="primary"
            size="md"
            modalType="customization"
          >
            Обсудить кастомизацию
          </CTAButton>
          <CTAButton
            variant="secondary"
            size="md"
            modalType="todo-stand"
          >
            Запросить enterprise-демо
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
