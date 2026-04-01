"use client"

import { FileInput, Sparkles, ListTodo, CheckCircle, BarChart3 } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: FileInput,
    title: "Вход",
    description: "Встреча, переписка или документ",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI-анализ",
    description: "Выделение ключевого",
  },
  {
    number: "03",
    icon: ListTodo,
    title: "Структура",
    description: "Summary и задачи",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Действие",
    description: "Исполнение и контроль",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Результат",
    description: "Прозрачность и follow-up",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Как это работает
            </h2>
            <p className="mt-5 text-lg text-foreground-secondary max-w-xl mx-auto">
              От входящего потока до контроля исполнения
            </p>
          </div>

          {/* Desktop Flow - Centered 5-column grid */}
          <div className="hidden lg:block">
            <div className="relative max-w-4xl mx-auto">
              {/* Connection line */}
              <div className="absolute top-10 left-[12%] right-[12%] h-px bg-border" />
              
              <div className="grid grid-cols-5 gap-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center text-center relative">
                    <div className="relative mb-4 z-10">
                      <div className="w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center shadow-lg shadow-black/20">
                        <step.icon className="w-8 h-8 text-accent-red" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent-red flex items-center justify-center shadow-lg">
                        <span className="text-[11px] font-bold text-white">{step.number}</span>
                      </div>
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-foreground-secondary/90 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-3 max-w-md mx-auto">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-background-secondary border border-border flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-accent-red" />
                  </div>
                  <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-accent-red flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white">{step.number}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground-secondary/90">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}
