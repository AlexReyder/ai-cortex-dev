"use client"

import { Building, Cpu, ShoppingCart, Factory, HeartPulse, Briefcase, ArrowRight } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const industries = [
  {
    icon: Building,
    title: "Банки и финтех",
    pain: "Высокие требования к безопасности, сложные процессы согласования",
    fit: "Secure deployment, контроль доступа, audit trail",
    modalType: "architecture" as const,
    ctaText: "Обсудить secure deployment",
  },
  {
    icon: Cpu,
    title: "IT и телеком",
    pain: "Много команд, сложные продуктовые процессы, привычка к Jira-like tools",
    fit: "Kanban/Scrum, roadmap, знакомый workflow",
    modalType: "todo-demo" as const,
    ctaText: "Попробовать ToDo",
  },
  {
    icon: ShoppingCart,
    title: "Ритейл",
    pain: "Распределенные команды, операционный контроль, много задач",
    fit: "Единый контур для управления операциями и проектами",
    modalType: "contact" as const,
    ctaText: "Обсудить сценарий",
  },
  {
    icon: Factory,
    title: "Производство",
    pain: "Координация между отделами, контроль сроков, документооборот",
    fit: "Timeline, статусы, вложения, уведомления",
    modalType: "ai-demo" as const,
    ctaText: "Запросить демо",
  },
  {
    icon: HeartPulse,
    title: "Здравоохранение",
    pain: "Строгие требования к данным, локальное размещение",
    fit: "Private cloud / on-prem, контроль данных",
    modalType: "architecture" as const,
    ctaText: "Обсудить контур",
  },
  {
    icon: Briefcase,
    title: "Крупные сервисные компании",
    pain: "Много проектов, клиентов, команд — нужна прозрачность",
    fit: "PMO-сценарий, roadmap, контроль портфеля",
    modalType: "todo-stand" as const,
    ctaText: "Запросить пилот",
  },
]

export function IndustryUseCases() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
            Отрасли, где ToDo Enterprise особенно уместен
          </h2>
        </div>

        {/* Industry cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group flex flex-col h-full p-6 rounded-xl bg-card border border-card-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 shrink-0 group-hover:bg-primary/20 transition-colors">
                <industry.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-foreground mb-3">{industry.title}</h3>
                
                <div className="space-y-3 mb-4 flex-1">
                  <div>
                    <span className="text-xs font-medium text-foreground-muted uppercase tracking-wide">Где боль</span>
                    <p className="text-sm text-foreground-secondary mt-1">{industry.pain}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-foreground-muted uppercase tracking-wide">Почему ToDo</span>
                    <p className="text-sm text-foreground-secondary mt-1">{industry.fit}</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-auto pt-4">
                  <CTAButton
                    variant="ghost"
                    size="sm"
                    modalType={industry.modalType}
                    className="w-full justify-center"
                  >
                    <span className="flex items-center gap-2">
                      {industry.ctaText}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </CTAButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
