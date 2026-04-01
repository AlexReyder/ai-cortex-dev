"use client"

import { Users, FileText, Mail, ArrowRight } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const ctaCards = [
  {
    icon: Users,
    title: "Обсудить партнерство",
    description: "Расскажите о вашем интересе и сценарии сотрудничества.",
    modalType: "partner" as const,
    cta: "Обсудить партнерство",
    accent: "primary",
  },
  {
    icon: FileText,
    title: "Запросить партнерскую презентацию",
    description: "Получите материалы о продукте, партнерской модели и кейсах.",
    modalType: "partner" as const,
    cta: "Запросить презентацию",
    accent: "primary",
  },
  {
    icon: Mail,
    title: "Связаться с нами",
    description: "Задайте вопросы или обсудите конкретный проект.",
    modalType: "contact" as const,
    cta: "Связаться",
    accent: "primary",
  },
]

export function PartnerFinalCTASection() {
  return (
    <section className="py-20 bg-background-light">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground-dark leading-tight mb-4 max-w-3xl mx-auto text-balance">
            Давайте обсудим, как Cortex ToDo может усилить ваш enterprise-портфель
          </h2>
        </div>

        {/* CTA cards - equal height */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {ctaCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col h-full bg-white rounded-xl border border-border-light p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                <card.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground-dark mb-2 shrink-0">
                {card.title}
              </h3>

              {/* Description - fills remaining space */}
              <p className="text-sm text-foreground-dark-secondary leading-relaxed flex-1 mb-6">
                {card.description}
              </p>

              {/* CTA - always at bottom */}
              <div className="mt-auto">
                <CTAButton
                  variant="primary"
                  size="md"
                  modalType={card.modalType}
                  className="w-full"
                >
                  <span className="flex items-center justify-center gap-2">
                    {card.cta}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </CTAButton>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting line */}
        <div className="text-center">
          <p className="text-sm text-foreground-dark-secondary leading-relaxed max-w-3xl mx-auto">
            Если вы работаете с enterprise-клиентами, внедрением, облачной инфраструктурой или проектами импортозамещения, Cortex ToDo может стать сильной частью вашего предложения.
          </p>
        </div>
      </div>
    </section>
  )
}
