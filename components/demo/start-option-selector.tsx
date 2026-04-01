"use client"

import { Monitor, Server, Rocket, Shield, ArrowRight } from "lucide-react"
import { CTAButton, useCTAModal } from "@/components/cta-modals"

const startOptions = [
  {
    icon: Monitor,
    title: "Демо",
    description: "Для знакомства с продуктом и проверки основных сценариев.",
    cta: "Выбрать демо",
    modalType: "todo-demo" as const,
  },
  {
    icon: Server,
    title: "Демо-стенд",
    description: "Для самостоятельной оценки интерфейса, workflow и применимости продукта.",
    cta: "Выбрать демо-стенд",
    modalType: "todo-stand" as const,
  },
  {
    icon: Rocket,
    title: "Пилот",
    description: "Для controlled проверки ToDo Enterprise на реальных процессах команды.",
    cta: "Обсудить пилот",
    modalType: "pilot" as const,
  },
  {
    icon: Shield,
    title: "Архитектурная консультация",
    description: "Для компаний, которым важно заранее обсудить on-prem, private cloud, миграцию и безопасность.",
    cta: "Обсудить архитектуру",
    modalType: "architecture" as const,
  },
]

export function StartOptionSelector() {
  const { openModal } = useCTAModal()

  return (
    <section className="py-20 lg:py-28 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            С чего лучше начать
          </h2>
          <p className="text-foreground-secondary max-w-2xl mx-auto">
            Выберите подходящий вариант для вашей компании
          </p>
        </div>

        {/* Options grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {startOptions.map((option, index) => (
            <div
              key={index}
              onClick={() => openModal(option.modalType)}
              className="group relative flex flex-col h-full p-6 rounded-xl bg-card border border-card-border hover:border-primary/30 hover:bg-card-hover cursor-pointer transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors shrink-0">
                <option.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {option.title}
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed flex-1 mb-4">
                {option.description}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:text-primary-hover transition-colors mt-auto">
                <span>{option.cta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
