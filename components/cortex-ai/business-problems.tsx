"use client"

import { Video, MessageSquare, FileText, Eye, Clock, AlertCircle } from "lucide-react"

const painPoints = [
  {
    icon: Video,
    title: "Договоренности теряются после встреч",
    description: "Никто не фиксирует задачи, summary не делается, follow-up забывается",
  },
  {
    icon: MessageSquare,
    title: "Переписки остаются без действий",
    description: "Важное решили в чате, но задачу не создали и не проконтролировали",
  },
  {
    icon: FileText,
    title: "Документы зависают в согласованиях",
    description: "Руководитель не знает, где застряло и кто тормозит процесс",
  },
  {
    icon: Eye,
    title: "Нет прозрачности по команде",
    description: "Кто перегружен, где риски, что требует внимания — непонятно",
  },
  {
    icon: Clock,
    title: "Слишком много ручной координации",
    description: "Сотрудники тратят время на статус-апдейты вместо работы",
  },
  {
    icon: AlertCircle,
    title: "Follow-up держится на памяти",
    description: "Напоминания и контроль — в голове, а не в системе",
  },
]

export function BusinessProblems() {
  return (
    <section className="py-20 md:py-28 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Почему договоренности не превращаются в результат
            </h2>
            <p className="mt-5 text-lg text-foreground-secondary max-w-2xl mx-auto">
              Cortex AI закрывает разрыв между обсуждением и действием.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-accent-red/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-red/10 flex items-center justify-center mb-4 group-hover:bg-accent-red/20 transition-colors">
                  <point.icon className="w-6 h-6 text-accent-red" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-foreground-secondary/90 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}
