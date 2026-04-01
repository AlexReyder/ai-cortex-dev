"use client"

import { ArrowRight, Kanban, Bot, Handshake, Settings } from "lucide-react"
import { CTAButton, useCTAModal, type ModalType } from "@/components/cta-modals"

const ctaCards: Array<{
  icon: typeof Kanban
  title: string
  description: string
  cta: string
  modalType: ModalType
  accent: "primary" | "accent-red"
}> = [
  {
    icon: Bot,
    title: "Заказать демо Cortex AI",
    description: "AI-автоматизация встреч, коммуникаций, документов и рекомендаций. Быстрый старт.",
    cta: "Заказать демо Cortex AI",
    modalType: "ai-demo",
    accent: "accent-red",
  },
  {
    icon: Kanban,
    title: "Попробовать ToDo",
    description: "Защищенное управление задачами и проектами. Демо-стенд или пилотный проект.",
    cta: "Попробовать ToDo",
    modalType: "todo-demo",
    accent: "primary",
  },
  {
    icon: Settings,
    title: "Обсудить внедрение",
    description: "Совместное внедрение ToDo + Cortex AI как единой платформы. Кастомизация под ваши процессы.",
    cta: "Обсудить внедрение",
    modalType: "implementation",
    accent: "primary",
  },
]

export function FinalCTASection() {
  const { openModal } = useCTAModal()

  return (
    <section id="contacts" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Выберите свой контур внедрения
          </h2>
          <p className="mt-4 text-lg text-foreground-secondary max-w-2xl mx-auto text-pretty">
            Можно начать с Cortex AI, с ToDo Enterprise или внедрять оба продукта как единую платформу.
          </p>
        </div>

        {/* Equal height card grid with strict alignment - 3 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ctaCards.map((card) => (
            <button
              key={card.title}
              onClick={() => openModal(card.modalType)}
              className="group relative flex flex-col rounded-2xl border border-card-border bg-card p-8 premium-card text-center overflow-hidden h-full cursor-pointer text-left transition-all duration-300 hover:border-primary/30"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                card.accent === "accent-red" 
                  ? "bg-gradient-to-br from-accent-red/5 to-transparent" 
                  : "bg-gradient-to-br from-primary/5 to-transparent"
              }`} />

              <div className="relative flex flex-col h-full text-center">
                {/* Icon - aligned to same top grid */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shrink-0 ${
                  card.accent === "accent-red" 
                    ? "bg-accent-red/10" 
                    : "bg-primary/10"
                }`}>
                  <card.icon className={`w-8 h-8 ${
                    card.accent === "accent-red" ? "text-accent-red" : "text-primary"
                  }`} />
                </div>

                {/* Title - consistent spacing */}
                <h3 className="text-xl font-semibold text-foreground mb-3 shrink-0">
                  {card.title}
                </h3>

                {/* Description - flex-1 to fill space */}
                <p className="text-foreground-secondary mb-6 flex-1 min-h-[48px]">
                  {card.description}
                </p>

                {/* CTA Button visual - always at bottom with consistent height */}
                <div className="mt-auto pt-2">
                  <span className={`w-full h-12 text-base font-medium inline-flex items-center justify-center gap-2 rounded-lg transition-all ${
                    card.accent === "accent-red"
                      ? "bg-accent-red group-hover:bg-accent-red-muted text-primary-foreground"
                      : "bg-primary group-hover:bg-primary-hover text-primary-foreground"
                  }`}>
                    {card.cta}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
