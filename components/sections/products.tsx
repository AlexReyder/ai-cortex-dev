"use client"

import {
  Bot,
  MessageSquare,
  BarChart3,
  CheckCircle2,
  Users,
  Kanban,
  RefreshCw,
  Cloud,
  Lock,
  Shield,
  ArrowRight,
  Sparkles,
  FolderKanban,
} from "lucide-react"
import { CTAButton, useCTAModal } from "@/components/cta-modals"

const aiAgentsFeatures = [
  { icon: MessageSquare, text: "Summary и задачи по итогам встреч" },
  { icon: Bot, text: "AI-обработка переписок и голосовых" },
  { icon: FolderKanban, text: "Документы, согласование и извлечение данных" },
  { icon: CheckCircle2, text: "Follow-up и контроль договоренностей" },
  { icon: BarChart3, text: "AI-рекомендации для руководителя" },
  { icon: RefreshCw, text: "Интеграции с клиентскими системами" },
]

const todoEnterpriseFeatures = [
  { icon: FolderKanban, text: "Задачи и проекты" },
  { icon: Kanban, text: "Kanban / Scrum / Roadmap" },
  { icon: Users, text: "Контроль сроков и исполнителей" },
  { icon: Lock, text: "Роли, права доступа и администрирование" },
  { icon: Cloud, text: "Private cloud / on-prem" },
  { icon: Shield, text: "Кастомизация под клиента" },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Два продукта. Одна платформа.
          </h2>
          <p className="mt-4 text-lg text-foreground-secondary max-w-2xl mx-auto text-pretty">
            Выберите точку входа, соответствующую масштабу и задачам вашего бизнеса
          </p>
        </div>

        {/* Equal height card grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* AI Agents Card */}
          <div className="group relative flex flex-col rounded-2xl border border-card-border bg-card p-8 premium-card overflow-hidden h-full">
            {/* Accent gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-red/60 via-primary to-primary/60" />
            
            {/* Icon - aligned to same top grid */}
            <div className="w-12 h-12 rounded-xl bg-accent-red/10 flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-accent-red" />
            </div>

            {/* Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-red/10 border border-accent-red/20 text-accent-red text-sm font-medium mb-4 self-start">
              Для малого и среднего бизнеса
            </div>

            {/* Title - consistent spacing */}
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Cortex AI Agents
            </h3>

            {/* Description - fixed height area */}
            <p className="text-foreground-secondary mb-6 min-h-[72px]">
              AI-слой для ежедневной операционной работы компании. Cortex AI помогает не терять договоренности, превращать встречи и переписки в задачи, ускорять работу с документами и давать руководителю понятные рекомендации по загрузке и рискам.
            </p>

            {/* Features list */}
            <ul className="space-y-3 mb-8 flex-1">
              {aiAgentsFeatures.map((feature) => (
                <li key={feature.text} className="flex items-center gap-3 text-foreground-secondary">
                  <div className="w-8 h-8 rounded-lg bg-accent-red/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-4 h-4 text-accent-red" />
                  </div>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button - always at bottom with mt-auto */}
            <div className="mt-auto pt-4">
              <CTAButton
                variant="accent-red"
                size="lg"
                modalType="ai-demo"
                className="w-full h-12"
              >
                <span className="flex items-center gap-2">
                  Открыть Cortex AI
                  <ArrowRight className="w-4 h-4" />
                </span>
              </CTAButton>
            </div>

            {/* Visual Elements */}
            <div className="absolute bottom-0 right-0 w-48 h-48 opacity-5 pointer-events-none">
              <Bot className="w-full h-full" />
            </div>
          </div>

          {/* ToDo Enterprise Card */}
          <div className="group relative flex flex-col rounded-2xl border border-card-border bg-card p-8 premium-card overflow-hidden h-full">
            {/* Accent gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
            
            {/* Icon - aligned to same top grid */}
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-primary" />
            </div>

            {/* Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4 self-start">
              Для средних и крупных компаний
            </div>

            {/* Title - consistent spacing */}
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ToDo Enterprise
            </h3>

            {/* Description - fixed height area */}
            <p className="text-foreground-secondary mb-6 min-h-[72px]">
              Защищенная российская система управления задачами и проектами для команд, которым нужна прозрачность исполнения, привычный workflow и возможность внедрения private cloud / on-prem.
            </p>

            {/* Features list */}
            <ul className="space-y-3 mb-8 flex-1">
              {todoEnterpriseFeatures.map((feature) => (
                <li key={feature.text} className="flex items-center gap-3 text-foreground-secondary">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button - always at bottom with mt-auto */}
            <div className="mt-auto pt-4">
              <CTAButton
                variant="primary"
                size="lg"
                modalType="todo-demo"
                className="w-full h-12"
              >
                <span className="flex items-center gap-2">
                  Открыть ToDo
                  <ArrowRight className="w-4 h-4" />
                </span>
              </CTAButton>
            </div>

            {/* Visual Elements */}
            <div className="absolute bottom-0 right-0 w-48 h-48 opacity-5 pointer-events-none">
              <Kanban className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
