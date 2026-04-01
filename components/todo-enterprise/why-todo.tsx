import { Workflow, Shield, Layers, Rocket } from "lucide-react"

const valueCards = [
  {
    icon: Workflow,
    title: "Привычная логика работы",
    description: "Интерфейс и сценарии работы, понятные командам, привыкшим к Jira, Trello и другим западным системам.",
  },
  {
    icon: Shield,
    title: "Контроль данных",
    description: "Размещение на сервере клиента или в российском ЦОД. Контроль доступа и снижение рисков утечки.",
  },
  {
    icon: Layers,
    title: "Поддержка реальных процессов",
    description: "Kanban, Scrum, timeline, версии, комментарии, вложения, сроки, уведомления и рабочие сценарии уровня enterprise.",
  },
  {
    icon: Rocket,
    title: "Готовность к внедрению",
    description: "Демо-стенд, пилот, внедрение и дальнейшее развитие под требования конкретного клиента.",
  },
]

export function WhyTodoSection() {
  return (
    <section className="py-20 md:py-28 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
            Почему enterprise-команды выбирают ToDo
          </h2>
        </div>

        {/* Value cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col h-full p-6 rounded-xl bg-card border border-card-border hover:border-primary/20 transition-colors"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                <card.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-foreground mb-3 shrink-0">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-foreground-muted leading-relaxed flex-1">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
