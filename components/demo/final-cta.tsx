"use client"

import { Monitor, Server, Rocket, ArrowRight } from "lucide-react"
import { CTAButton, useCTAModal } from "@/components/cta-modals"

const ctaCards = [
  {
    icon: Monitor,
    title: "Запросить демо",
    description: "Покажем ToDo Enterprise на ваших сценариях",
    cta: "Запросить демо",
    modalType: "todo-demo" as const,
  },
  {
    icon: Server,
    title: "Запросить демо-стенд",
    description: "Получите доступ к среде для самостоятельной оценки",
    cta: "Запросить демо-стенд",
    modalType: "todo-stand" as const,
  },
  {
    icon: Rocket,
    title: "Обсудить пилот",
    description: "Проверьте ToDo Enterprise на реальных процессах команды",
    cta: "Обсудить пилот",
    modalType: "pilot" as const,
  },
]

export function DemoFinalCTA() {
  const { openModal } = useCTAModal()

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Готовы проверить ToDo Enterprise на ваших сценариях?
          </h2>
        </div>

        {/* CTA cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {ctaCards.map((card, index) => (
            <div
              key={index}
              onClick={() => openModal(card.modalType)}
              className="group flex flex-col h-full p-6 rounded-xl bg-card border border-card-border hover:border-primary/30 hover:bg-card-hover cursor-pointer transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors shrink-0">
                <card.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed flex-1 mb-4">
                {card.description}
              </p>

              {/* CTA Button */}
              <div className="mt-auto">
                <CTAButton
                  variant="primary"
                  size="md"
                  modalType={card.modalType}
                  className="w-full"
                >
                  <span className="flex items-center justify-center gap-2">
                    {card.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </CTAButton>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting line */}
        <p className="text-center text-sm text-foreground-muted max-w-3xl mx-auto">
          ToDo Enterprise подходит компаниям, которым нужен безопасный, управляемый и привычный путь к переходу на российскую платформу управления задачами и проектами.
        </p>
      </div>
    </section>
  )
}
