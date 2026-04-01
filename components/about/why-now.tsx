"use client"

import { RefreshCw, Shield, ArrowRightLeft, Layers } from "lucide-react"

const marketCards = [
  {
    icon: RefreshCw,
    title: "Импортозамещение",
    description: "Рынок требует привычных и надежных рабочих инструментов, которые можно использовать внутри российского контура.",
  },
  {
    icon: Shield,
    title: "Безопасность данных",
    description: "Крупным и средним компаниям нужен больший контроль над хранением данных, доступами и инфраструктурой.",
  },
  {
    icon: ArrowRightLeft,
    title: "Переход с западных решений",
    description: "Пользователям нужны платформы с понятной логикой, минимальным барьером перехода и сохранением управляемости процессов.",
  },
  {
    icon: Layers,
    title: "Платформенный спрос",
    description: "Компании ищут не отдельные разрозненные инструменты, а экосистему, которая может закрывать несколько контуров работы.",
  },
]

export function WhyNowSection() {
  return (
    <section className="py-20 md:py-28 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 text-balance">
            Почему этот рынок требует локального игрока
          </h2>
          <p className="text-base text-foreground-secondary leading-relaxed">
            Для российских компаний вопрос выбора рабочей платформы — это уже не только удобство, но и импортозамещение, безопасность, контроль данных и независимость от внешних поставщиков.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col h-full bg-card border border-card-border rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2 shrink-0">
                {card.title}
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed flex-1">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
