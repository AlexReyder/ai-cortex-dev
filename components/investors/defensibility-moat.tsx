"use client"

import { MapPin, Server, ArrowRightLeft, Settings, Layers } from "lucide-react"

const moatCards = [
  {
    icon: MapPin,
    title: "Локальный vendor fit",
    text: "Развитие под реальные требования рынка РФ.",
  },
  {
    icon: Server,
    title: "Secure deployment",
    text: "Сервер клиента, private cloud, российский ЦОД.",
  },
  {
    icon: ArrowRightLeft,
    title: "Migration-friendly product",
    text: "Низкий барьер перехода для привычных команд.",
  },
  {
    icon: Settings,
    title: "Enterprise adaptation",
    text: "Возможность доработки под процессы, роли, интеграции и корпоративный контур.",
  },
  {
    icon: Layers,
    title: "Platform expansion",
    text: "Рост в экосистему усиливает stickiness и стратегическую глубину продукта.",
  },
]

export function DefensibilityMoat() {
  return (
    <section className="py-20 lg:py-28 bg-background-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground-dark leading-tight mb-4 text-balance">
            Что может стать moat
          </h2>
        </div>

        {/* 5 moat cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {moatCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col p-6 rounded-xl bg-white border border-border-light hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                <card.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground-dark mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-foreground-dark-secondary leading-relaxed flex-1">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
