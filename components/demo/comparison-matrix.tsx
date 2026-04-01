"use client"

import { Monitor, Server, Rocket, CheckCircle } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const comparisonData = [
  {
    icon: Monitor,
    title: "Демо",
    features: [
      "Быстрый показ продукта",
      "Релевантные сценарии",
      "Подходит для первичной оценки",
    ],
    cta: "Запросить демо",
    modalType: "todo-demo" as const,
    highlight: false,
  },
  {
    icon: Server,
    title: "Демо-стенд",
    features: [
      "Среда для самостоятельного просмотра",
      "Оценка интерфейса и workflow",
      "Удобно для внутреннего обсуждения",
    ],
    cta: "Запросить демо-стенд",
    modalType: "todo-stand" as const,
    highlight: false,
  },
  {
    icon: Rocket,
    title: "Пилот",
    features: [
      "Проверка продукта на реальном процессе",
      "Обсуждение deployment / migration / adaptation",
      "Лучше всего для enterprise decision-making",
    ],
    cta: "Обсудить пилот",
    modalType: "pilot" as const,
    highlight: true,
  },
]

export function ComparisonMatrix() {
  return (
    <section className="py-20 lg:py-28 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Чем отличаются демо, демо-стенд и пилот
          </h2>
        </div>

        {/* Comparison grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {comparisonData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col h-full p-6 rounded-xl border ${
                item.highlight
                  ? "bg-primary/5 border-primary/30"
                  : "bg-card border-card-border"
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  item.highlight ? "bg-primary/20" : "bg-primary/10"
                }`}>
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                {item.highlight && (
                  <span className="ml-auto text-[10px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    Рекомендуем
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-6">
                {item.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-auto">
                <CTAButton
                  variant={item.highlight ? "primary" : "secondary"}
                  size="md"
                  modalType={item.modalType}
                  className="w-full"
                >
                  {item.cta}
                </CTAButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
