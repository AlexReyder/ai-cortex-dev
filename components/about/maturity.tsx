"use client"

const timelineSteps = [
  { phase: "Discovery & R&D", description: "Исследование рынка и проработка архитектуры" },
  { phase: "MVP Web / Mobile", description: "Запуск первых версий web и mobile приложений" },
  { phase: "Server Part", description: "Разработка серверной инфраструктуры" },
  { phase: "Локализация для РФ", description: "Адаптация под российские требования" },
  { phase: "Market Readiness", description: "Готовность к выходу на рынок" },
  { phase: "ToDo.corp", description: "Enterprise-версия платформы" },
  { phase: "ToDo.doc", description: "Система корпоративных знаний" },
  { phase: "Ecosystem Expansion", description: "Расширение экосистемы продуктов" },
]

export function MaturitySection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 text-balance">
            Годы разработки и зрелость продукта
          </h2>
          <p className="text-base text-foreground-secondary leading-relaxed">
            ToDo создавался как серьезный продуктовый контур, а не как временный лендинг под импортозамещение. За продуктом — многолетняя разработка, web/mobile/server составляющая и roadmap расширения экосистемы.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden md:block" />
          
          <div className="space-y-6 md:space-y-0">
            {timelineSteps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="bg-card border border-card-border rounded-xl p-4 inline-block hover:border-primary/30 transition-colors">
                    <h3 className="text-sm font-semibold text-foreground mb-1">
                      {step.phase}
                    </h3>
                    <p className="text-xs text-foreground-muted">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="relative z-10 w-4 h-4 rounded-full bg-primary border-4 border-background shrink-0 hidden md:block" />

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>

          {/* Mobile timeline */}
          <div className="md:hidden">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-primary/20" />
            <div className="space-y-4 pl-10">
              {timelineSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-10 top-4 w-3 h-3 rounded-full bg-primary border-4 border-background" />
                  <div className="bg-card border border-card-border rounded-xl p-4">
                    <h3 className="text-sm font-semibold text-foreground mb-1">
                      {step.phase}
                    </h3>
                    <p className="text-xs text-foreground-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
