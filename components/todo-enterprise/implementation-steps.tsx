import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, Server, Rocket, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Play,
    title: "Демо",
    description: "Показываем продукт на ваших сценариях. Обсуждаем применимость и ключевые требования.",
  },
  {
    number: "02",
    icon: Server,
    title: "Пилот / демо-стенд",
    description: "Даем среду для проверки применимости. Тестируете систему на реальных задачах.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Внедрение и адаптация",
    description: "Обсуждаем архитектуру, безопасность, миграцию и доработки под ваш контур.",
  },
]

export function ImplementationStepsSection() {
  return (
    <section id="implementation" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
            Как начать работу
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col h-full p-6 rounded-xl bg-card border border-card-border hover:border-primary/20 transition-colors"
            >
              {/* Step number */}
              <div className="absolute top-4 right-4">
                <span className="text-2xl font-bold text-primary/20">{step.number}</span>
              </div>

              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 shrink-0">
                {step.title}
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed flex-1">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground h-12 px-6 text-sm font-medium"
            asChild
          >
            <Link href="#contact" className="flex items-center gap-2">
              Запросить демо-стенд
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary/50 h-12 px-6 text-sm font-medium"
            asChild
          >
            <Link href="#contact">Обсудить внедрение</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
