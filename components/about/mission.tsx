"use client"

export function MissionSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 text-balance">
            Наша стратегическая задача
          </h2>
          <p className="text-base md:text-lg text-foreground-secondary leading-relaxed max-w-2xl mx-auto">
            Мы строим не просто аналог одного продукта, а отечественную экосистему, способную закрывать контур управления задачами, взаимодействия между командами и корпоративных знаний.
          </p>
        </div>

        {/* Premium highlighted callout */}
        <div className="relative">
          {/* Subtle glow */}
          <div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-2xl" />
          
          <div className="relative bg-gradient-to-br from-card via-card to-card/80 border border-primary/20 rounded-2xl p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="w-1 h-full min-h-[60px] bg-primary rounded-full shrink-0" />
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
                Cortex ToDo — это платформа, которая должна дать российскому рынку привычный, безопасный и развиваемый рабочий контур вместо зависимости от зарубежных решений.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
