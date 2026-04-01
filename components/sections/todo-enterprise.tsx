"use client"

import Image from "next/image"
import {
  Kanban,
  FolderKanban,
  Calendar,
  Paperclip,
  Map,
  Globe,
  Smartphone,
  Server,
  RefreshCw,
  Shield,
  Settings,
  ArrowRight,
} from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const capabilities = [
  { icon: Kanban, text: "Kanban / Scrum boards" },
  { icon: FolderKanban, text: "Проекты и коллекции" },
  { icon: Calendar, text: "Сроки, исполнители, комментарии" },
  { icon: Paperclip, text: "Вложения и документы" },
  { icon: Map, text: "Roadmap / releases / tracking" },
  { icon: Globe, text: "Web-интерфейс" },
  { icon: Smartphone, text: "Мобильные приложения" },
  { icon: Server, text: "Server / on-prem" },
  { icon: RefreshCw, text: "Migration-friendly логика" },
  { icon: Shield, text: "Security-first подход" },
  { icon: Settings, text: "Адаптация под требования enterprise-клиента" },
]

export function TodoEnterpriseSection() {
  return (
    <section id="todo-enterprise" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content - 5 columns (~42%) */}
          <div className="lg:col-span-5">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium tracking-wide uppercase mb-6">
              <Shield className="w-3.5 h-3.5" />
              ToDo Enterprise
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight text-balance">
              Российская система управления задачами и проектами
            </h2>

            {/* Subheadline */}
            <p className="text-base lg:text-lg text-foreground-secondary mb-4 leading-relaxed">
              Привычный сценарий работы для команд, которым нужен надежный переход с западных систем без потери управляемости.
            </p>

            {/* Supporting text */}
            <p className="text-sm text-foreground-muted mb-4 leading-relaxed">
              Kanban, roadmap, контроль задач, сроков и командной работы — в единой системе с современным интерфейсом, знакомой логикой и готовностью к безопасному внедрению.
            </p>

            {/* Enterprise customization message */}
            <p className="text-sm text-primary/90 mb-8 leading-relaxed font-medium">
              Для крупных заказчиков платформа может быть адаптирована под корпоративные процессы, требования безопасности, интеграционный контур и модель работы команд.
            </p>

            {/* Feature Grid - 2 columns */}
            <div className="grid grid-cols-2 gap-2.5 mb-8">
              {capabilities.map((cap) => (
                <div
                  key={cap.text}
                  className="flex items-center gap-2.5 p-2.5 rounded-lg bg-background-secondary/50 border border-card-border hover:border-primary/20 transition-colors"
                >
                  <cap.icon className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="text-xs text-foreground-secondary">{cap.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <CTAButton
                variant="primary"
                size="md"
                modalType="todo-demo"
              >
                <span className="flex items-center gap-2">
                  Попробовать ToDo
                  <ArrowRight className="w-4 h-4" />
                </span>
              </CTAButton>
              <CTAButton
                variant="secondary"
                size="md"
                modalType="todo-stand"
              >
                Запросить демо-стенд
              </CTAButton>
            </div>
          </div>

          {/* Visual - 7 columns (~58%) */}
          <div className="lg:col-span-7 relative">
            {/* Ambient glow */}
            <div className="absolute inset-0 -m-8 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-3xl blur-3xl opacity-50" />
            
            {/* Product image container */}
            <div className="relative">
              {/* Premium rounded container with subtle styling */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-background-secondary/80 to-background-tertiary/60 p-1">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/demo.png"
                    alt="Cortex ToDo - интерфейс управления задачами и проектами на десктопе, ноутбуке и мобильном устройстве с Kanban-доской, таймлайном и трекером задач"
                    width={900}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>

              {/* Subtle micro-badges - grouped, outside critical UI area */}
              <div className="absolute -left-3 bottom-8 flex flex-col gap-2">
                <div className="px-2.5 py-1 rounded-full bg-background-secondary/90 backdrop-blur-sm border border-white/10 text-[10px] text-foreground-secondary font-medium shadow-lg">
                  Web + Mobile
                </div>
                <div className="px-2.5 py-1 rounded-full bg-background-secondary/90 backdrop-blur-sm border border-white/10 text-[10px] text-foreground-secondary font-medium shadow-lg">
                  Kanban / Roadmap
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
