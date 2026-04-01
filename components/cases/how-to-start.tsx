"use client"

import { Search, Monitor, Rocket } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Выбираем релевантный use case",
    description: "Короткий discovery — определяем ваш сценарий, команду и ключевые требования",
  },
  {
    icon: Monitor,
    number: "02",
    title: "Показываем продукт на ваших сценариях",
    description: "Демо или demo stand — смотрим, как ToDo Enterprise работает в вашем контексте",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Запускаем пилот / внедрение / адаптацию",
    description: "Обсуждаем миграцию, безопасность и кастомизацию при необходимости",
  },
]

export function HowToStart() {
  return (
    <section className="py-20 lg:py-28 bg-background-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground-dark mb-4">
            Как начать с вашего сценария
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl bg-white border border-border-light"
            >
              {/* Step number */}
              <div className="absolute top-4 right-4 text-4xl font-bold text-primary/10">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-base font-semibold text-foreground-dark mb-2">{step.title}</h3>
              <p className="text-sm text-foreground-dark-secondary leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton
            variant="primary"
            size="md"
            modalType="todo-stand"
          >
            Запросить демо-стенд
          </CTAButton>
          <CTAButton
            variant="secondary"
            size="md"
            href="/contacts"
          >
            Связаться с нами
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
