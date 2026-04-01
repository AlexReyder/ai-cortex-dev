import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Workflow, ArrowRightLeft, PlayCircle, Flag, ArrowRight, ChevronRight } from "lucide-react"

const migrationCards = [
  {
    icon: Workflow,
    title: "Привычный пользовательский сценарий",
    description: "Интерфейс и логика работы, знакомые командам с опытом в западных task-менеджерах.",
  },
  {
    icon: ArrowRightLeft,
    title: "Переход без хаоса",
    description: "Поэтапная миграция с сохранением рабочих процессов и минимальным обучением.",
  },
  {
    icon: PlayCircle,
    title: "Поддержка пилота и демо-стенда",
    description: "Возможность протестировать систему на реальных сценариях до полного внедрения.",
  },
  {
    icon: Flag,
    title: "Российская альтернатива",
    description: "Для команд, привыкших к Atlassian / Trello / Asana-like workflows.",
  },
]

const migrationSteps = [
  { label: "Текущая система", sublabel: "Jira / Trello / Asana" },
  { label: "Пилот / миграция", sublabel: "Тестирование ToDo" },
  { label: "Контролируемый запуск", sublabel: "ToDo Enterprise" },
]

export function MigrationSection() {
  return (
    <section className="py-20 md:py-28 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
            Переход с привычных систем без потери управляемости
          </h2>
          <p className="text-base text-foreground-secondary leading-relaxed">
            ToDo Enterprise помогает решить задачу импортозамещения без ущерба функционалу, удобству работы и корпоративной безопасности.
          </p>
        </div>

        {/* Migration cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {migrationCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col h-full p-6 rounded-xl bg-card border border-card-border hover:border-primary/20 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                <card.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-3 shrink-0">
                {card.title}
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed flex-1">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Migration flow visualization */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {migrationSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center text-center px-6 py-4 rounded-xl bg-card border border-card-border min-w-[180px]">
                  <span className="text-sm font-medium text-foreground mb-1">{step.label}</span>
                  <span className="text-xs text-foreground-muted">{step.sublabel}</span>
                </div>
                {index < migrationSteps.length - 1 && (
                  <ChevronRight className="w-5 h-5 text-primary mx-3 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground h-12 px-6 text-sm font-medium"
            asChild
          >
            <Link href="#contact" className="flex items-center gap-2">
              Обсудить миграцию
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
