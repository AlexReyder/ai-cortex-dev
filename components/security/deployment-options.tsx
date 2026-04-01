"use client"

import { Server, Cloud, Database, Users, Lock, Layers, HardDrive, ArrowRight } from "lucide-react"

const deploymentOptions = [
  {
    icon: Server,
    title: "Сервер клиента",
    description: "Подходит компаниям, которым важно держать систему и данные внутри собственного контура.",
    fits: "Для компаний с жесткими требованиями ИБ",
    logic: "Полный контроль инфраструктуры",
    value: "Максимальная изоляция данных",
  },
  {
    icon: Cloud,
    title: "Private Cloud",
    description: "Гибкий сценарий для компаний, которым нужен частный контур с контролируемой архитектурой.",
    fits: "Для компаний с гибридной IT-стратегией",
    logic: "Баланс контроля и масштабируемости",
    value: "Управляемая облачная среда",
  },
  {
    icon: Database,
    title: "Российский ЦОД",
    description: "Размещение в облаке российского дата-центра для компаний, которым нужен баланс скорости запуска и локального хранения данных.",
    fits: "Для быстрого старта с локализацией",
    logic: "Минимальные затраты на инфраструктуру",
    value: "Российская юрисдикция данных",
  },
]

export function DeploymentOptions() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight tracking-tight mb-4 text-balance">
            Варианты развертывания
          </h2>
        </div>

        {/* Deployment cards - equal height */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {deploymentOptions.map((option, index) => (
            <div
              key={index}
              className="flex flex-col h-full bg-background-secondary/60 rounded-xl border border-white/[0.06] p-6 hover:border-primary/20 transition-colors"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 mb-5">
                <option.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="flex-shrink-0 text-lg font-semibold text-foreground mb-3">
                {option.title}
              </h3>

              {/* Description */}
              <p className="flex-1 text-sm text-foreground-muted leading-relaxed mb-5">
                {option.description}
              </p>

              {/* Details */}
              <div className="flex-shrink-0 space-y-2 pt-4 border-t border-white/[0.06]">
                <div className="flex items-start gap-2">
                  <span className="text-xs text-primary font-medium">Подходит:</span>
                  <span className="text-xs text-foreground-muted">{option.fits}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs text-primary font-medium">Логика:</span>
                  <span className="text-xs text-foreground-muted">{option.logic}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs text-primary font-medium">Ценность:</span>
                  <span className="text-xs text-foreground-muted">{option.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture flow diagram */}
        <div className="bg-background-secondary/40 rounded-2xl border border-white/[0.06] p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6">
            {/* Users */}
            <div className="flex items-center gap-2 px-5 py-3 bg-background/60 rounded-xl border border-white/[0.08]">
              <Users className="w-5 h-5 text-foreground-secondary" />
              <span className="text-sm font-medium text-foreground">Пользователи</span>
            </div>

            <ArrowRight className="w-5 h-5 text-primary/50 rotate-90 lg:rotate-0" />

            {/* Access control */}
            <div className="flex items-center gap-2 px-5 py-3 bg-primary/10 rounded-xl border border-primary/20">
              <Lock className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Контроль доступа</span>
            </div>

            <ArrowRight className="w-5 h-5 text-primary/50 rotate-90 lg:rotate-0" />

            {/* ToDo Enterprise */}
            <div className="flex items-center gap-2 px-5 py-3 bg-primary/20 rounded-xl border border-primary/30">
              <Layers className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">ToDo Enterprise</span>
            </div>

            <ArrowRight className="w-5 h-5 text-primary/50 rotate-90 lg:rotate-0" />

            {/* Data storage */}
            <div className="flex items-center gap-2 px-5 py-3 bg-background/60 rounded-xl border border-white/[0.08]">
              <HardDrive className="w-5 h-5 text-foreground-secondary" />
              <span className="text-sm font-medium text-foreground">Хранение данных</span>
            </div>
          </div>

          <p className="text-center text-xs text-foreground-muted mt-6">
            Архитектурный поток: от пользователя до хранения данных
          </p>
        </div>
      </div>
    </section>
  )
}
