"use client"

import { Check } from "lucide-react"

const features = [
  "Рабочая панель с задачами и событиями",
  "Задачи: создание, назначение, контроль",
  "Встречи: календарь и планирование",
  "Запись встречи или загрузка файла",
  "Summary, transcript и задачи по встрече",
  "AI-ассистент для быстрых задач",
  "Переписки и командные чаты",
  "Документы и согласование",
  "Дашборды и отчеты для руководителя",
  "Управление пользователями и доступами",
]

export function FirstVersion() {
  return (
    <section className="py-20 md:py-28 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Что входит в рабочую версию
              </h2>
              <p className="mt-5 text-lg text-foreground-secondary max-w-xl mx-auto">
                Готовый продукт для пилота и внедрения
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-background-secondary border border-border"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}
