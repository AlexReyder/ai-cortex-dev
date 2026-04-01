"use client"

import { MessageSquare, Search, Monitor, Rocket, ArrowRight } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Партнерский контакт",
    description: "Обсуждаем сценарий клиента и возможности совместной работы.",
  },
  {
    icon: Search,
    number: "02",
    title: "Совместный discovery",
    description: "Определяем модель размещения и согласуем роли партнера и вендора.",
  },
  {
    icon: Monitor,
    number: "03",
    title: "Пилот / демо-стенд",
    description: "Разворачиваем пилотный проект или демонстрационный стенд для клиента.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Внедрение и развитие",
    description: "Запускаем внедрение и обеспечиваем дальнейшее развитие решения.",
  },
]

export function ImplementationModelSection() {
  return (
    <section className="py-20 bg-background-light">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground-dark leading-tight mb-4">
            Как строится совместная работа
          </h2>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col h-full bg-white rounded-xl border border-border-light p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              {/* Number */}
              <span className="absolute top-4 right-4 text-3xl font-bold text-primary/10">
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                <step.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-foreground-dark mb-2 shrink-0">
                {step.title}
              </h3>

              {/* Description - fills remaining space */}
              <p className="text-sm text-foreground-dark-secondary leading-relaxed flex-1">
                {step.description}
              </p>

              {/* Arrow indicator (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <CTAButton
            variant="primary"
            size="lg"
            modalType="partner"
          >
            <span className="flex items-center gap-2">
              Обсудить партнерство
              <ArrowRight className="w-4 h-4" />
            </span>
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
