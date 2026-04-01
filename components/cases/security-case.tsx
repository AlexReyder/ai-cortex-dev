"use client"

import Link from "next/link"
import { Server, Cloud, Building2, Shield, Lock, Eye, CheckCircle2, ArrowRight } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const scenarioPoints = [
  "Enterprise client with security constraints",
  "Need for local hosting",
  "Controlled access model",
  "Reduced dependency on foreign SaaS",
]

const deploymentOptions = [
  {
    icon: Server,
    title: "Сервер клиента",
    description: "Полный контроль над инфраструктурой и данными",
  },
  {
    icon: Cloud,
    title: "Private cloud",
    description: "Изолированная облачная среда с гарантиями безопасности",
  },
  {
    icon: Building2,
    title: "Российский ЦОД",
    description: "Размещение в сертифицированных российских дата-центрах",
  },
]

const effects = [
  { icon: Shield, text: "Контроль данных" },
  { icon: Lock, text: "Меньше рисков" },
  { icon: CheckCircle2, text: "Соответствие внутренним требованиям" },
  { icon: Eye, text: "Доверие со стороны enterprise stakeholders" },
]

export function SecurityCase() {
  return (
    <section id="security-case" className="py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
            Кейс: безопасное размещение в контуре клиента
          </h2>
          <p className="text-base text-foreground-secondary max-w-3xl mx-auto">
            ToDo Enterprise подходит компаниям, для которых важны данные в РФ, private cloud, сервер клиента и корпоративная безопасность.
          </p>
        </div>

        {/* Scenario description */}
        <div className="p-6 rounded-xl bg-card border border-card-border mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">Типичный сценарий</h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {scenarioPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-foreground-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Deployment options */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {deploymentOptions.map((option, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-primary/5 border border-primary/20 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <option.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-base font-semibold text-foreground mb-2">{option.title}</h4>
              <p className="text-sm text-foreground-secondary">{option.description}</p>
            </div>
          ))}
        </div>

        {/* Effects */}
        <div className="p-6 rounded-xl bg-card border border-card-border mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-4">Эффект</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {effects.map((effect, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-background"
              >
                <effect.icon className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground">{effect.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton
            variant="primary"
            size="md"
            modalType="architecture"
          >
            Обсудить архитектуру
          </CTAButton>
          <CTAButton
            variant="secondary"
            size="md"
            href="/security"
          >
            <span className="flex items-center gap-2">
              Открыть страницу безопасности
              <ArrowRight className="w-4 h-4" />
            </span>
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
