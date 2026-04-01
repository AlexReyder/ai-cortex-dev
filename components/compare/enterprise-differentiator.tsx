"use client"

import { Workflow, Users, Plug, Server, ArrowRight, Quote } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const capabilities = [
  {
    icon: Workflow,
    title: "Workflow customization",
    text: "Адаптация процессов под специфику команды и бизнеса.",
  },
  {
    icon: Users,
    title: "Роли и права",
    text: "Гибкая модель прав доступа под корпоративную структуру.",
  },
  {
    icon: Plug,
    title: "Интеграции",
    text: "Подключение к корпоративным системам и сервисам.",
  },
  {
    icon: Server,
    title: "Размещение в периметре клиента",
    text: "On-prem, private cloud или российский ЦОД.",
  },
]

export function EnterpriseDifferentiator() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4 text-balance">
            Не просто альтернатива, а платформа под ваш контур
          </h2>
          <p className="text-base text-foreground-secondary max-w-2xl mx-auto">
            ToDo Enterprise можно не только внедрить, но и адаптировать под реальные процессы, требования безопасности, интеграции и корпоративную структуру клиента.
          </p>
        </div>

        {/* Capability cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-card border border-border rounded-xl p-6 h-full hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2 flex-shrink-0">
                {item.title}
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed flex-1">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Highlighted callout */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-10">
          <div className="flex items-start gap-4">
            <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <p className="text-base text-foreground leading-relaxed">
              Для крупных клиентов ToDo Enterprise — это не просто замена западного инструмента, а платформа, встроенная в их собственный способ работы.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <CTAButton
            variant="primary"
            size="md"
            modalType="customization"
          >
            <span className="flex items-center gap-2">
              Обсудить кастомизацию
              <ArrowRight className="w-4 h-4" />
            </span>
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
