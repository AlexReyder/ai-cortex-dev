"use client"

import Image from "next/image"
import { Eye, Clock, MessageSquare } from "lucide-react"

const benefits = [
  {
    icon: Eye,
    title: "Единая видимость статусов",
    description: "Прозрачность для всех участников независимо от локации и подразделения.",
  },
  {
    icon: Clock,
    title: "Контроль поручений и дедлайнов",
    description: "Четкое понимание сроков, ответственных и приоритетов по всем задачам.",
  },
  {
    icon: MessageSquare,
    title: "Меньше потерь контекста",
    description: "Единый рабочий контур сокращает ручную координацию между командами.",
  },
]

export function DistributedTeams() {
  return (
    <section id="distributed" className="py-20 lg:py-28 bg-background-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            {/* Section header */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground-dark leading-tight tracking-tight mb-5 text-balance">
              Для распределенных команд и сложных организационных контуров
            </h2>

            <p className="text-base text-foreground-dark-secondary leading-relaxed mb-10">
              ToDo Enterprise особенно полезен там, где задачи, согласования и взаимодействие размазаны между несколькими командами, офисами или подразделениями.
            </p>

            {/* Benefits */}
            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground-dark mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-foreground-dark-secondary leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden bg-white border border-border-light shadow-xl">
              <Image
                src="/images/kanban.png"
                alt="Cortex ToDo - единый интерфейс для распределенных команд"
                width={600}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
