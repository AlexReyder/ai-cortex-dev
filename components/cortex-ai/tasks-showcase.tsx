import Image from "next/image"
import { CheckSquare, Clock, AlertCircle, Sparkles } from "lucide-react"

const features = [
  { icon: CheckSquare, text: "Задачи из встреч и переписок" },
  { icon: Clock, text: "Контроль сроков и приоритетов" },
  { icon: AlertCircle, text: "Сигналы о просроченных задачах" },
  { icon: Sparkles, text: "AI-рекомендации по фокусу" },
]

export function TasksShowcase() {
  return (
    <section className="py-20 md:py-28 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              От обсуждения — к исполнению
            </h2>
            <p className="mt-5 text-lg text-foreground-secondary leading-relaxed">
              Cortex AI помогает превращать результаты встреч, переписок и документов в понятные задачи, контролировать сроки и возвращать работу в рабочий ритм без микроменеджмента.
            </p>
            
            {/* Feature list */}
            <div className="mt-8 space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-foreground/90">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Screenshot */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-2xl shadow-black/30">
              <Image
                src="/images/tasks-showcase.png"
                alt="Cortex AI - Задачи: приоритеты, сроки, AI-рекомендации"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
