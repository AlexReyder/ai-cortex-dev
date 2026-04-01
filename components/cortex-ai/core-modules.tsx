"use client"

import { Video, MessageSquare, FileText, Bot, BarChart3, Bell } from "lucide-react"

const modules = [
  {
    icon: Video,
    title: "Встречи и протоколы",
    description: "Запись или загрузка записи. Транскрипция. Summary с ключевыми решениями. Автоматическое выделение задач и ответственных.",
  },
  {
    icon: MessageSquare,
    title: "Переписки и summary",
    description: "Контекст обсуждения. Что было решено. Какие действия нужны. Превращение договоренностей в задачи.",
  },
  {
    icon: FileText,
    title: "Документы и согласование",
    description: "Извлечение ключевых данных. Заполнение шаблонов. Передача в workflow согласования. Статус и напоминания.",
  },
  {
    icon: Bot,
    title: "AI-ассистент",
    description: "Рабочий чат для быстрых задач: найти информацию, подготовить черновик, сделать выжимку, сформировать отчет.",
  },
  {
    icon: BarChart3,
    title: "Дашборды и рекомендации",
    description: "Загрузка команды. Риски по срокам. Встречи без follow-up. Сигналы, которые требуют внимания руководителя.",
  },
  {
    icon: Bell,
    title: "Follow-up и контроль",
    description: "Автоматическое отслеживание договоренностей. Напоминания. Статусы исполнения. Контроль без микроменеджмента.",
  },
]

export function CoreModules() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Модули Cortex AI
            </h2>
            <p className="mt-5 text-lg text-foreground-secondary max-w-2xl mx-auto">
              Каждый модуль решает конкретную задачу в ежедневной работе команды
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((module, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <module.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {module.title}
                </h3>
                <p className="text-sm text-foreground-secondary/90 leading-relaxed">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}
