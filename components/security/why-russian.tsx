"use client"

import { RefreshCw, Server, Shield } from "lucide-react"

const strategicCards = [
  {
    icon: RefreshCw,
    title: "Импортозамещение без потери процессов",
    description: "Переход на российскую платформу с сохранением привычных workflow и логики работы команд.",
  },
  {
    icon: Server,
    title: "Локальный контур хранения и работы",
    description: "Данные и система могут находиться полностью в российской юрисдикции и инфраструктуре.",
  },
  {
    icon: Shield,
    title: "Снижение зависимости от внешних ограничений",
    description: "Отсутствие рисков, связанных с санкциями, отключением сервисов или изменением политики зарубежных поставщиков.",
  },
]

export function WhyRussianEnterprise() {
  return (
    <section className="py-20 lg:py-28 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight tracking-tight mb-4 text-balance">
            Почему это важно для российского рынка
          </h2>
          <p className="text-base text-foreground-secondary leading-relaxed max-w-3xl mx-auto text-pretty">
            Для многих компаний вопрос выбора task management platform — это не только функциональность, но и контроль данных, предсказуемость поставщика и соответствие требованиям локального рынка.
          </p>
        </div>

        {/* Strategic cards - equal height */}
        <div className="grid md:grid-cols-3 gap-6">
          {strategicCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col h-full bg-background/60 rounded-xl border border-white/[0.06] p-6 hover:border-primary/20 transition-colors"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 mb-5">
                <card.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="flex-shrink-0 text-lg font-semibold text-foreground mb-3">
                {card.title}
              </h3>

              {/* Description - flex-1 to fill space */}
              <p className="flex-1 text-sm text-foreground-muted leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
