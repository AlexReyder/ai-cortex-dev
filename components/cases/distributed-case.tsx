"use client"

import { Building2, MapPin, Users, Lock, Eye, Calendar, Target, CheckCircle2 } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const scenarios = [
  { icon: Building2, text: "Несколько отделов" },
  { icon: MapPin, text: "Несколько офисов" },
  { icon: Users, text: "Внешние и внутренние участники" },
  { icon: Lock, text: "Разные роли и уровни доступа" },
]

const businessValue = [
  { icon: Eye, text: "Единая видимость задач" },
  { icon: Calendar, text: "Прозрачность дедлайнов" },
  { icon: Target, text: "Меньше ручных согласований" },
  { icon: CheckCircle2, text: "Выше дисциплина исполнения" },
]

export function DistributedCase() {
  return (
    <section id="distributed-case" className="py-20 lg:py-28 bg-background-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground-dark mb-4">
            Кейс: распределенные команды и несколько контуров работы
          </h2>
          <p className="text-base text-foreground-dark-secondary max-w-3xl mx-auto">
            ToDo Enterprise особенно полезен там, где несколько подразделений, направлений или офисов должны работать в едином управляемом контуре.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Scenarios */}
          <div className="p-6 rounded-xl bg-white border border-border-light">
            <h3 className="text-lg font-semibold text-foreground-dark mb-6">Типичные сценарии</h3>
            <div className="space-y-4">
              {scenarios.map((scenario, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-background-light-secondary"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <scenario.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground-dark">{scenario.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business value */}
          <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h3 className="text-lg font-semibold text-foreground-dark mb-6">Бизнес-ценность</h3>
            <div className="space-y-4">
              {businessValue.map((value, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-white/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground-dark">{value.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton
            variant="primary"
            size="md"
            modalType="contact"
          >
            Обсудить сценарий
          </CTAButton>
          <CTAButton
            variant="secondary"
            size="md"
            modalType="todo-stand"
          >
            Запросить демо-стенд
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
