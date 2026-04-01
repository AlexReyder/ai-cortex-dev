import { CheckSquare, Building, FileText, ArrowRight } from "lucide-react"

const ecosystemProducts = [
  {
    icon: CheckSquare,
    title: "ToDo",
    description: "Базовая система управления задачами для команд любого размера.",
    status: "Доступно",
  },
  {
    icon: Building,
    title: "ToDo.corp",
    description: "Enterprise-версия с расширенными возможностями безопасности и интеграций.",
    status: "Доступно",
  },
  {
    icon: FileText,
    title: "ToDo.doc",
    description: "Управление корпоративной документацией и базой знаний.",
    status: "В разработке",
  },
]

export function EcosystemSection() {
  return (
    <section className="py-20 md:py-28 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
            ToDo как часть более широкой платформы
          </h2>
          <p className="text-base text-foreground-secondary leading-relaxed">
            ToDo Enterprise — часть развивающейся экосистемы управления задачами, взаимодействием и корпоративными знаниями.
          </p>
        </div>

        {/* Ecosystem diagram */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {ecosystemProducts.map((product, index) => (
            <div
              key={index}
              className="relative flex flex-col h-full p-6 rounded-xl bg-card border border-card-border hover:border-primary/20 transition-colors"
            >
              {/* Status badge */}
              <div className="absolute top-4 right-4">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  product.status === "Доступно" 
                    ? "bg-green-500/10 text-green-400" 
                    : "bg-yellow-500/10 text-yellow-400"
                }`}>
                  {product.status}
                </span>
              </div>

              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                <product.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 shrink-0">
                {product.title}
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed flex-1">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        {/* Platform connection visual */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card border border-card-border">
            <span className="text-xs text-foreground-muted">Единая платформа</span>
            <ArrowRight className="w-3 h-3 text-primary" />
            <span className="text-xs text-foreground">Cortex ToDo</span>
          </div>
        </div>
      </div>
    </section>
  )
}
