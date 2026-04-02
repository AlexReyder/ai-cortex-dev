"use client"

import { ArrowRight, Play, MessageSquare } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const ctaCards = [
  {
    title: "Заказать демо",
    description: "Посмотрите продукт в действии с нашей командой",
    buttonText: "Заказать демо",
    buttonIcon: ArrowRight,
    iconPosition: "after" as const,
    variant: "accent-red" as const,
    modalType: "ai-demo" as const,
    highlighted: true,
  },
  {
    title: "Посмотреть интерфейс",
    description: "Изучите продукт самостоятельно на демо-стенде",
    buttonText: "Открыть демо-стенд",
    buttonIcon: Play,
    iconPosition: "before" as const,
    variant: "secondary" as const,
    modalType: "todo-stand" as const,
    highlighted: false,
  },
  {
    title: "Обсудить внедрение",
    description: "Обсудим сценарий под вашу компанию",
    buttonText: "Связаться",
    buttonIcon: MessageSquare,
    iconPosition: "before" as const,
    variant: "secondary" as const,
    modalType: "implementation" as const,
    highlighted: false,
  },
]

export function CortexFinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Начните с демо или пилота
          </h2>
          <p className="mt-4 text-lg text-foreground-secondary max-w-xl mx-auto">
            Посмотрите продукт в действии и оцените, как он решает ваши задачи.
          </p>
        </div>

        {/* CTA Cards - balanced grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-5">
            {ctaCards.map((card) => (
              <div
                key={card.title}
                className={`flex flex-col p-6 rounded-2xl transition-all duration-300 ${
                  card.highlighted
                    ? "bg-accent-red/5 border border-accent-red/20 hover:border-accent-red/40"
                    : "bg-card border border-border hover:border-primary/30"
                }`}
              >
                {/* Card content - fixed height structure */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-base font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground-secondary/90 flex-1">
                    {card.description}
                  </p>
                </div>
                
                {/* Button - always at bottom */}
                <div className="mt-5">
                  <CTAButton
                    variant={card.variant}
                    size="md"
                    modalType={card.modalType}
                    className="w-full"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {card.iconPosition === "before" && <card.buttonIcon className="w-4 h-4" />}
                      {card.buttonText}
                      {card.iconPosition === "after" && <card.buttonIcon className="w-4 h-4" />}
                    </span>
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting text */}
        <div className="mt-12 text-center">
          <p className="text-sm text-foreground-muted">
            Cortex AI — часть платформы Cortex ToDo. 
            <a href="/todo-enterprise" className="text-primary hover:underline ml-1">
              Узнать про ToDo Enterprise
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
