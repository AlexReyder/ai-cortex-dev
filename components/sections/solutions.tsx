"use client"

import { Building, Building2, Factory, Handshake, ArrowRight } from "lucide-react"
import { CTAButton, useCTAModal, type ModalType } from "@/components/cta-modals"

const segments: Array<{
  icon: typeof Building
  title: string
  subtitle: string
  description: string
  bullets: string[]
  cta: string
  modalType: ModalType
  accent: "accent-red" | "primary"
}> = [
  {
    icon: Building,
    title: "SMB",
    subtitle: "Малый бизнес",
    description: "Быстрый старт с AI-автоматизацией встреч, документов и коммуникаций.",
    bullets: [
      "AI-summary встреч и переписок",
      "Автоматическое выделение задач",
      "Быстрый пилот без долгого внедрения",
      "Рост прозрачности с первого дня",
    ],
    cta: "Заказать демо AI",
    modalType: "ai-demo",
    accent: "accent-red",
  },
  {
    icon: Building2,
    title: "Mid-market",
    subtitle: "Средний бизнес",
    description: "Прозрачность команды, AI + слой исполнения задач, контроль и рекомендации.",
    bullets: [
      "AI-автоматизация + управление задачами",
      "Контроль исполнения и загрузки",
      "Рекомендации руководителю",
      "Единая платформа для всех команд",
    ],
    cta: "Заказать демо",
    modalType: "ai-demo",
    accent: "primary",
  },
  {
    icon: Factory,
    title: "Enterprise",
    subtitle: "Крупный бизнес",
    description: "Защищенное развертывание, кастомизация и гибкая комбинация продуктов.",
    bullets: [
      "Private cloud / on-prem",
      "Кастомные workflow и интеграции",
      "Совместное внедрение ToDo + Cortex AI",
      "Корпоративная безопасность и governance",
    ],
    cta: "Попробовать ToDo",
    modalType: "todo-demo",
    accent: "primary",
  },
  {
    icon: Handshake,
    title: "Партнеры",
    subtitle: "Интеграторы",
    description: "Партнерское внедрение, расширение продуктового портфеля, кастомизация.",
    bullets: [
      "Партнерская модель внедрения",
      "Расширение продуктового портфеля",
      "Возможности кастомизации",
      "Техническая поддержка и обучение",
    ],
    cta: "Стать партнером",
    modalType: "partner",
    accent: "primary",
  },
]

export function SolutionsSection() {
  const { openModal } = useCTAModal()

  return (
    <section id="solutions" className="py-24 bg-background-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground-dark text-balance">
            Решения для вашего сегмента
          </h2>
          <p className="mt-4 text-lg text-foreground-dark-secondary max-w-2xl mx-auto text-pretty">
            Выберите путь развития, соответствующий масштабу и задачам вашего бизнеса
          </p>
        </div>

        {/* Equal height card grid with strict alignment */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment) => (
            <div
              key={segment.title}
              className="group flex flex-col rounded-2xl border border-border-light bg-background-light-secondary p-6 premium-card hover:bg-white h-full"
            >
              {/* Icon - aligned to same top grid */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 shrink-0 ${
                segment.accent === "accent-red" 
                  ? "bg-accent-red/10" 
                  : "bg-primary/10"
              }`}>
                <segment.icon className={`w-6 h-6 ${
                  segment.accent === "accent-red" ? "text-accent-red" : "text-primary"
                }`} />
              </div>

              {/* Title block - consistent spacing */}
              <div className="mb-3 shrink-0">
                <h3 className="text-xl font-bold text-foreground-dark">{segment.title}</h3>
                <span className="text-sm text-foreground-dark-secondary">{segment.subtitle}</span>
              </div>

              {/* Description - fixed min height for alignment */}
              <p className="text-sm text-foreground-dark-secondary mb-4 shrink-0 min-h-[40px]">
                {segment.description}
              </p>

              {/* Bullets - flex-1 to push button to bottom */}
              <ul className="space-y-2 mb-6 flex-1">
                {segment.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-foreground-dark-secondary">
                    <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                      segment.accent === "accent-red" ? "bg-accent-red" : "bg-primary"
                    }`} />
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* CTA Button - always at bottom with consistent height */}
              <div className="mt-auto pt-2">
                <button
                  onClick={() => openModal(segment.modalType)}
                  className={`w-full h-11 rounded-lg border border-foreground-dark/20 text-foreground-dark text-sm font-medium flex items-center justify-center gap-2 transition-all ${
                    segment.accent === "accent-red" 
                      ? "hover:bg-accent-red hover:border-accent-red hover:text-primary-foreground" 
                      : "hover:bg-primary hover:border-primary hover:text-primary-foreground"
                  }`}
                >
                  {segment.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
