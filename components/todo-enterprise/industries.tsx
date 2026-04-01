import { Building2, Cpu, ShoppingCart, Factory, Heart, Users } from "lucide-react"

const industries = [
  {
    icon: Building2,
    title: "Банки и финтех",
    description: "Управление проектами и задачами в регулируемой среде с высокими требованиями к безопасности.",
  },
  {
    icon: Cpu,
    title: "IT и телеком",
    description: "Agile-процессы, управление релизами и командная работа для технологических компаний.",
  },
  {
    icon: ShoppingCart,
    title: "Ритейл",
    description: "Координация проектов, операционный контроль и управление распределенными командами.",
  },
  {
    icon: Factory,
    title: "Производство",
    description: "Контроль сроков, этапов и исполнителей в сложных производственных процессах.",
  },
  {
    icon: Heart,
    title: "Здравоохранение",
    description: "Управление проектами в чувствительной к данным среде с особыми требованиями.",
  },
  {
    icon: Users,
    title: "Крупные распределенные команды",
    description: "Единая система для координации работы территориально распределенных подразделений.",
  },
]

export function IndustriesSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
            Кому подходит ToDo Enterprise
          </h2>
          <p className="text-base text-foreground-secondary leading-relaxed">
            Платформа подходит для компаний, которым важны управляемость, локальный контур, адаптация процессов и отказ от зависимости от зарубежных вендоров.
          </p>
        </div>

        {/* Industry cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex flex-col h-full p-6 rounded-xl bg-card border border-card-border hover:border-primary/20 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                <industry.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-3 shrink-0">
                {industry.title}
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed flex-1">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
