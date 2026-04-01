"use client"

import { Kanban, Server, Settings, ArrowRight } from "lucide-react"
import { CTAButton, useCTAModal, type ModalType } from "@/components/cta-modals"

const ctaCards: Array<{
  icon: typeof Kanban
  title: string
  description: string
  cta: string
  modalType: ModalType
}> = [
  {
    icon: Kanban,
    title: "Попробовать ToDo",
    description: "Демо-стенд или пилотный проект для вашей команды.",
    cta: "Попробовать",
    modalType: "todo-demo",
  },
  {
    icon: Server,
    title: "Запросить демо-стенд",
    description: "Получите доступ к тестовой среде для проверки применимости.",
    cta: "Запросить демо",
    modalType: "todo-stand",
  },
  {
    icon: Settings,
    title: "Обсудить кастомизацию",
    description: "Адаптация платформы под ваши процессы и требования.",
    cta: "Обсудить",
    modalType: "customization",
  },
]

export function FinalCTASection() {
  const { openModal } = useCTAModal()

  return (
    <section id="contact" className="py-20 md:py-28 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
            Обсудим ваш enterprise-сценарий
          </h2>
          <p className="text-base text-foreground-secondary leading-relaxed">
            ToDo Enterprise подходит компаниям, которым нужен безопасный, привычный и управляемый переход на российскую платформу управления задачами и проектами.
          </p>
        </div>

        {/* CTA cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {ctaCards.map((card, index) => (
            <button
              key={index}
              onClick={() => openModal(card.modalType)}
              className="flex flex-col h-full p-6 rounded-xl bg-card border border-card-border hover:border-primary/20 transition-colors text-left cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                <card.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-3 shrink-0">
                {card.title}
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed flex-1 mb-4">
                {card.description}
              </p>
              <div className="mt-auto">
                <span className="w-full h-10 rounded-lg border border-primary/30 text-foreground group-hover:bg-primary/5 group-hover:border-primary/50 flex items-center justify-center gap-2 text-sm transition-colors">
                  {card.cta}
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Main CTA */}
        <div className="max-w-xl mx-auto text-center">
          <div className="p-8 rounded-2xl bg-card border border-card-border">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Готовы обсудить внедрение?
            </h3>
            <p className="text-sm text-foreground-muted mb-6">
              Оставьте заявку и мы свяжемся с вами в ближайшее время
            </p>
            <CTAButton
              variant="primary"
              size="lg"
              modalType="implementation"
              className="w-full"
            >
              Обсудить внедрение
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
