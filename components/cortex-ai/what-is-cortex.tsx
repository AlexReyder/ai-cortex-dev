"use client"

import { CheckCircle } from "lucide-react"

const statements = [
  "Transcript и summary по итогам встреч с выделением задач",
  "Анализ переписок и превращение договоренностей в действия",
  "Обработка документов и запуск workflow согласования",
  "Рекомендации по загрузке, рискам и follow-up для руководителя",
]

export function WhatIsCortex() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Cortex AI — операционная AI-платформа
              </h2>
              <p className="mt-5 text-lg text-foreground-secondary max-w-2xl mx-auto">
                Не чат-бот. Не мессенджер. Не CRM. Рабочий инструмент, который встраивается в ваши процессы и помогает доводить работу до результата.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {statements.map((statement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-accent-red" />
                  </div>
                  <p className="text-foreground/90 font-medium leading-relaxed">
                    {statement}
                  </p>
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  )
}
