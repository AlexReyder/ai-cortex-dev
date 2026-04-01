"use client"

import { MessageSquare, Monitor, RefreshCw, ArrowRight } from "lucide-react"
import { CTAButton, useCTAModal, type ModalType } from "@/components/cta-modals"

const ctaCards: Array<{
  icon: typeof MessageSquare
  title: string
  description: string
  cta: string
  modalType: ModalType
}> = [
  {
    icon: MessageSquare,
    title: "Обсудить архитектуру",
    description: "Разберем требования по безопасности, размещению и интеграциям.",
    cta: "Обсудить архитектуру",
    modalType: "architecture",
  },
  {
    icon: Monitor,
    title: "Запросить демо-стенд",
    description: "Покажем продукт на релевантных сценариях вашей команды.",
    cta: "Запросить демо-стенд",
    modalType: "todo-stand",
  },
  {
    icon: RefreshCw,
    title: "Обсудить миграцию",
    description: "Спланируем переход с текущей системы без потери процессов.",
    cta: "Обсудить миграцию",
    modalType: "migration",
  },
]

export function SecurityFinalCTA() {
  const { openModal } = useCTAModal()

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight tracking-tight mb-4 text-balance">
            Обсудим безопасный сценарий внедрения
          </h2>
          <p className="text-base text-foreground-secondary leading-relaxed max-w-3xl mx-auto text-pretty">
            ToDo Enterprise подходит компаниям, которым нужен контролируемый, безопасный и понятный переход на российскую платформу управления задачами и проектами.
          </p>
        </div>

        {/* CTA cards - equal height */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {ctaCards.map((card, index) => (
            <button
              key={index}
              onClick={() => openModal(card.modalType)}
              className="flex flex-col h-full bg-background/60 rounded-xl border border-white/[0.06] p-6 hover:border-primary/20 transition-colors text-left cursor-pointer group"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 mb-5">
                <card.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="flex-shrink-0 text-lg font-semibold text-foreground mb-2">
                {card.title}
              </h3>

              {/* Description - flex-1 to fill space */}
              <p className="flex-1 text-sm text-foreground-muted leading-relaxed mb-5">
                {card.description}
              </p>

              {/* CTA visual - mt-auto for bottom alignment */}
              <div className="mt-auto">
                <span className="w-full h-10 text-sm font-medium border border-primary/30 text-foreground group-hover:bg-primary/5 group-hover:border-primary/50 rounded-lg flex items-center justify-center gap-2 transition-colors">
                  {card.cta}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Main CTA */}
        <div className="max-w-xl mx-auto text-center">
          <div className="bg-background/60 rounded-xl border border-white/[0.06] p-8">
            <h3 className="text-lg font-semibold text-foreground text-center mb-2">
              Не нашли нужный сценарий?
            </h3>
            <p className="text-sm text-foreground-muted text-center mb-6">
              Свяжитесь с нами и мы обсудим ваш вариант
            </p>

            <CTAButton
              variant="primary"
              size="lg"
              modalType="contact"
              className="w-full"
            >
              Связаться с нами
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
