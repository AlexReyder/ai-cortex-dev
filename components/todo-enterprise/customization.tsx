import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Workflow, Plug, Users, Palette, ArrowRight } from "lucide-react"

const customizationCards = [
  {
    icon: Workflow,
    title: "Кастомизация workflow",
    description: "Статусы, маршруты согласования, этапы и логика движения задач под реальные процессы компании.",
  },
  {
    icon: Plug,
    title: "Интеграции и контур",
    description: "Интеграция с корпоративными системами, архитектурная адаптация и настройка под private / on-prem deployment.",
  },
  {
    icon: Users,
    title: "Роли, права, структура",
    description: "Настройка доступа, оргструктуры, распределения ролей и правил взаимодействия между командами.",
  },
  {
    icon: Palette,
    title: "Интерфейс под клиента",
    description: "При необходимости возможна адаптация отдельных UX-сценариев и визуальных элементов под требования заказчика.",
  },
]

export function CustomizationSection() {
  return (
    <section className="py-20 md:py-28 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex justify-center mb-4">
          <span className="text-xs font-medium text-primary tracking-wide uppercase">
            Гибкость внедрения
          </span>
        </div>

        {/* Section header */}
        <div className="text-center mb-6 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight text-balance">
            Не просто замена Jira — платформа, которую можно адаптировать под ваш бизнес
          </h2>
          <p className="text-base text-foreground-secondary leading-relaxed mb-4">
            Для enterprise-клиентов ToDo может быть внедрен и доработан под реальные процессы, требования безопасности, интеграции, организационную структуру и даже отдельные элементы интерфейса.
          </p>
          <p className="text-sm text-foreground-muted leading-relaxed">
            В отличие от жестких массовых платформ, ToDo Enterprise позволяет работать ближе к задачам конкретного заказчика. Мы можем адаптировать workflow, роли, модель доступа, интеграции и логику процессов под корпоративную среду клиента.
          </p>
        </div>

        {/* Customization cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {customizationCards.map((card, index) => (
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

        {/* Highlighted callout */}
        <div className="mb-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
          <p className="text-sm text-foreground text-center leading-relaxed font-medium">
            &quot;Для крупных клиентов ToDo Enterprise может стать не просто внедренной системой, а платформой, адаптированной под их собственный способ работы.&quot;
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground h-12 px-6 text-sm font-medium"
            asChild
          >
            <Link href="#contact" className="flex items-center gap-2">
              Обсудить кастомизацию
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary/50 h-12 px-6 text-sm font-medium"
            asChild
          >
            <Link href="#demo">Запросить enterprise-демо</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
