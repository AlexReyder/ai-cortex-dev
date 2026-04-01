"use client"

import { ArrowRight, Shield, Server, TestTube, Settings } from "lucide-react"

const trustPoints = [
  {
    icon: ArrowRight,
    title: "Привычная логика перехода",
    description: "Миграция с западных инструментов без потери productivity.",
  },
  {
    icon: Server,
    title: "Безопасное размещение",
    description: "On-prem, private cloud, российский ЦОД — на выбор.",
  },
  {
    icon: TestTube,
    title: "Демо и пилот перед rollout",
    description: "Проверяем продукт на ваших сценариях до запуска.",
  },
  {
    icon: Settings,
    title: "Возможность адаптации под клиента",
    description: "Кастомизация под процессы, роли и интеграции.",
  },
]

export function EnterpriseTrust() {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Почему enterprise-команды выходят на контакт с нами
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="flex flex-col h-full p-6 rounded-xl bg-card border border-border"
            >
              {/* Icon */}
              <div className="flex-shrink-0 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-base font-semibold text-foreground mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Supporting text */}
        <p className="text-center text-foreground-secondary max-w-2xl mx-auto">
          ToDo Enterprise подходит компаниям, которым нужен не только российский продукт, но и понятный путь к его внедрению.
        </p>
      </div>
    </section>
  )
}
