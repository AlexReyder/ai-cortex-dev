"use client"

import Link from "next/link"
import { ArrowRight, Kanban, Monitor, Mail } from "lucide-react"
import { CTAButton, useCTAModal, type ModalType } from "@/components/cta-modals"

const ctaCards: Array<{
  icon: typeof Kanban
  title: string
  description: string
  cta: string
  href?: string
  modalType?: ModalType
}> = [
  {
    icon: Kanban,
    title: "Посмотреть ToDo Enterprise",
    description: "Узнайте больше о возможностях системы управления задачами для enterprise.",
    cta: "ToDo Enterprise",
    href: "/todo-enterprise",
  },
  {
    icon: Monitor,
    title: "Запросить демо-стенд",
    description: "Получите доступ к демонстрационной версии платформы.",
    cta: "Запросить демо",
    modalType: "todo-stand",
  },
  {
    icon: Mail,
    title: "Связаться с нами",
    description: "Обсудите ваш сценарий внедрения с нашей командой.",
    cta: "Написать нам",
    modalType: "contact",
  },
]

export function FinalCTASection() {
  const { openModal } = useCTAModal()

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 text-balance">
            Обсудим ваш сценарий работы с Cortex ToDo
          </h2>
        </div>

        {/* CTA cards grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {ctaCards.map((card, index) => {
            const content = (
              <>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2 shrink-0">
                  {card.title}
                </h3>
                <p className="text-sm text-foreground-muted leading-relaxed flex-1 mb-6">
                  {card.description}
                </p>
                <div className="mt-auto">
                  <span className="w-full h-11 border border-primary/30 text-foreground group-hover:bg-primary/10 group-hover:border-primary/50 text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-all">
                    {card.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </>
            )

            if (card.href) {
              return (
                <Link
                  key={index}
                  href={card.href}
                  className="flex flex-col h-full bg-card border border-card-border rounded-xl p-6 hover:border-primary/30 transition-colors group"
                >
                  {content}
                </Link>
              )
            }

            return (
              <button
                key={index}
                onClick={() => card.modalType && openModal(card.modalType)}
                className="flex flex-col h-full bg-card border border-card-border rounded-xl p-6 hover:border-primary/30 transition-colors group text-left cursor-pointer"
              >
                {content}
              </button>
            )
          })}
        </div>

        {/* Supporting line */}
        <div className="text-center mb-16">
          <p className="text-sm text-foreground-secondary leading-relaxed max-w-xl mx-auto">
            Если вам нужна российская платформа для управления задачами, взаимодействием и корпоративным контуром — обсудим подходящий сценарий.
          </p>
        </div>

        {/* Main CTA */}
        <div className="max-w-xl mx-auto text-center">
          <div className="bg-card border border-card-border rounded-xl p-8">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Готовы обсудить сотрудничество?
            </h3>
            <p className="text-sm text-foreground-muted mb-6">
              Оставьте заявку и мы свяжемся с вами в ближайшее время
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
