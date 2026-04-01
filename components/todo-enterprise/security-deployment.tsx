import { Server, Cloud, Building2, Lock, Unplug, ShieldCheck } from "lucide-react"

const securityCards = [
  {
    icon: Server,
    title: "Сервер клиента",
    description: "Полный контроль над данными и инфраструктурой на собственных мощностях.",
  },
  {
    icon: Cloud,
    title: "Private cloud",
    description: "Изолированное облачное окружение с выделенными ресурсами и контролем доступа.",
  },
  {
    icon: Building2,
    title: "Российский ЦОД",
    description: "Размещение в сертифицированных дата-центрах на территории РФ.",
  },
  {
    icon: Lock,
    title: "Разграничение доступа",
    description: "Гибкая система ролей, прав и политик безопасности для enterprise.",
  },
  {
    icon: Unplug,
    title: "Независимость от внешних поставщиков",
    description: "Отсутствие зависимости от зарубежных сервисов и инфраструктуры.",
  },
  {
    icon: ShieldCheck,
    title: "Контур корпоративной безопасности",
    description: "Соответствие требованиям информационной безопасности enterprise-клиентов.",
  },
]

export function SecurityDeploymentSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
            Безопасность и варианты размещения
          </h2>
          <p className="text-base text-foreground-secondary leading-relaxed">
            Данные могут находиться на сервере клиента или в облаке российского ЦОД, что снижает риски утечки конфиденциальной информации и позволяет соблюдать корпоративные требования к безопасности.
          </p>
        </div>

        {/* Security cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {securityCards.map((card, index) => (
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

        {/* Deployment diagram */}
        <div className="relative p-8 rounded-2xl bg-background-secondary border border-border">
          <div className="grid md:grid-cols-3 gap-6">
            {/* On-Premise */}
            <div className="text-center p-6 rounded-xl bg-card border border-card-border">
              <Server className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="text-sm font-semibold text-foreground mb-2">On-Premise</h4>
              <p className="text-xs text-foreground-muted">Сервер клиента</p>
            </div>
            
            {/* Private Cloud */}
            <div className="text-center p-6 rounded-xl bg-card border border-primary/30">
              <Cloud className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="text-sm font-semibold text-foreground mb-2">Private Cloud</h4>
              <p className="text-xs text-foreground-muted">Изолированное облако</p>
            </div>
            
            {/* Russian DC */}
            <div className="text-center p-6 rounded-xl bg-card border border-card-border">
              <Building2 className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="text-sm font-semibold text-foreground mb-2">Российский ЦОД</h4>
              <p className="text-xs text-foreground-muted">Облако на территории РФ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
