"use client"

import {
  ListTodo,
  Video,
  MessageSquare,
  Bot,
  PieChart,
  ArrowRight,
  Mic,
  FileText,
  Bell,
  CheckCircle,
} from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const useCases = [
  {
    icon: Video,
    title: "Встречи и протоколы",
    description: "Запись, транскрипция, резюме встречи и автоматическое выделение задач по итогам обсуждения.",
    visual: [
      { icon: Video, text: "Совещание" },
      { icon: FileText, text: "Резюме" },
      { icon: ListTodo, text: "Задачи" },
    ],
  },
  {
    icon: MessageSquare,
    title: "Коммуникации и summary",
    description: "AI помогает быстро понять, что было в переписке, выделяет договоренности и превращает их в действия.",
    visual: [
      { icon: MessageSquare, text: "Переписка" },
      { icon: Bot, text: "Анализ" },
      { icon: CheckCircle, text: "Действия" },
    ],
  },
  {
    icon: FileText,
    title: "Документы и согласование",
    description: "Извлечение ключевых данных, работа с шаблонами, подготовка черновиков и передача документов в workflow согласования.",
    visual: [
      { icon: FileText, text: "Документ" },
      { icon: Bot, text: "Обработка" },
      { icon: CheckCircle, text: "Согласование" },
    ],
  },
  {
    icon: PieChart,
    title: "Рекомендации руководителю",
    description: "AI показывает зоны риска, перегрузку команды, встречи без follow-up и действия, которые требуют внимания.",
    visual: [
      { icon: PieChart, text: "Данные" },
      { icon: Bot, text: "Анализ" },
      { icon: Bell, text: "Рекомендации" },
    ],
  },
  {
    icon: Bell,
    title: "Follow-up и контроль исполнения",
    description: "Автоматическое отслеживание договоренностей по итогам встреч и переписок. Напоминания и статусы.",
    visual: [
      { icon: ListTodo, text: "Задача" },
      { icon: Bot, text: "Контроль" },
      { icon: CheckCircle, text: "Выполнено" },
    ],
  },
  {
    icon: Bot,
    title: "Единый AI-слой поверх работы команды",
    description: "Cortex AI встраивается в ежедневные процессы: совещания, документы, переписки и управленческий контроль.",
    visual: [
      { icon: MessageSquare, text: "Процессы" },
      { icon: Bot, text: "AI" },
      { icon: CheckCircle, text: "Результат" },
    ],
  },
]

export function AIUseCasesSection() {
  return (
    <section id="ai-agents" className="py-24 bg-background-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-red/10 border border-accent-red/20 text-accent-red text-sm font-medium mb-4">
            <Bot className="w-4 h-4" />
            Cortex AI Agents
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Cortex AI для ежедневной операционной работы
          </h2>
          <p className="mt-4 text-lg text-foreground-secondary max-w-3xl mx-auto text-pretty">
            Не отдельный чат-бот, а AI-слой внутри встреч, документов, коммуникаций и управленческого контроля.
          </p>
        </div>

        {/* Equal height card grid - 3 columns on lg, 2 on md */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="group flex flex-col rounded-2xl border border-card-border bg-card p-6 premium-card h-full"
            >
              {/* Icon - aligned to same top grid */}
              <div className="w-12 h-12 rounded-xl bg-accent-red/10 flex items-center justify-center mb-4 group-hover:bg-accent-red/20 transition-colors shrink-0">
                <useCase.icon className="w-6 h-6 text-accent-red" />
              </div>

              {/* Title - consistent spacing */}
              <h3 className="text-lg font-semibold text-foreground mb-2 shrink-0">
                {useCase.title}
              </h3>

              {/* Description - flex-1 to fill available space */}
              <p className="text-sm text-foreground-secondary mb-4 flex-1 min-h-[60px]">
                {useCase.description}
              </p>

              {/* Visual flow - always at bottom */}
              <div className="flex items-center justify-between pt-4 border-t border-card-border mt-auto">
                {useCase.visual.map((step, index) => (
                  <div key={step.text} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-lg bg-background-tertiary flex items-center justify-center">
                        <step.icon className="w-4 h-4 text-foreground-muted" />
                      </div>
                      <span className="text-[10px] text-foreground-muted mt-1 text-center w-16 truncate">{step.text}</span>
                    </div>
                    {index < useCase.visual.length - 1 && (
                      <ArrowRight className="w-3 h-3 text-foreground-muted mx-1" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button - consistent with other sections */}
        <div className="text-center">
          <CTAButton
            variant="accent-red"
            size="lg"
            modalType="ai-demo"
            className="h-12 px-8"
          >
            <span className="flex items-center gap-2">
              Посмотреть демо AI
              <ArrowRight className="w-4 h-4" />
            </span>
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
