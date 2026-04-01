"use client"

import { Video, MessageSquare, FileText, BarChart3, Users, Rocket } from "lucide-react"

const useCases = [
  {
    icon: Video,
    title: "После встречи",
    description: "Транскрипт готов. Summary с ключевыми решениями. Задачи созданы и назначены ответственным.",
    accent: "accent-red",
  },
  {
    icon: MessageSquare,
    title: "После переписки",
    description: "AI выделяет договоренности. Показывает, что требует действия. Создает задачи одним кликом.",
    accent: "primary",
  },
  {
    icon: FileText,
    title: "После загрузки документа",
    description: "Данные извлечены. Документ отправлен на согласование. Статус виден в дашборде.",
    accent: "primary",
  },
  {
    icon: BarChart3,
    title: "Для руководителя",
    description: "Кто перегружен. Какие задачи под риском. Где нужен follow-up. Все в одном месте.",
    accent: "accent-red",
  },
  {
    icon: Users,
    title: "Для команды",
    description: "Задачи, встречи, переписки и документы в едином рабочем контуре. Без переключений.",
    accent: "primary",
  },
  {
    icon: Rocket,
    title: "Быстрый старт",
    description: "Пилот без тяжелого внедрения. Результат виден в первые недели использования.",
    accent: "primary",
  },
]

export function RealUseCases() {
  return (
    <section className="py-20 md:py-28 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Как Cortex AI работает на практике
            </h2>
            <p className="mt-5 text-lg text-foreground-secondary max-w-2xl mx-auto">
              Конкретные сценарии использования в ежедневной работе
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((useCase, index) => {
              const isRed = useCase.accent === "accent-red"
              return (
                <div
                  key={index}
                  className={`group p-6 rounded-2xl bg-card border transition-all duration-300 ${
                    isRed 
                      ? "border-accent-red/20 hover:border-accent-red/40" 
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    isRed 
                      ? "bg-accent-red/10 group-hover:bg-accent-red/20" 
                      : "bg-primary/10 group-hover:bg-primary/20"
                  }`}>
                    <useCase.icon className={`w-6 h-6 ${isRed ? "text-accent-red" : "text-primary"}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-foreground-secondary/90 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              )
            })}
          </div>
      </div>
    </section>
  )
}
