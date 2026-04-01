"use client"

import { Server, Cloud, Building2, ArrowRight } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const deploymentOptions = [
  {
    icon: Server,
    title: "Сервер клиента",
    description: "Полный контроль над данными и инфраструктурой",
  },
  {
    icon: Cloud,
    title: "Private cloud",
    description: "Изолированная среда в облачной инфраструктуре",
  },
  {
    icon: Building2,
    title: "Российский ЦОД",
    description: "Размещение в сертифицированном российском дата-центре",
  },
]

export function SecurityBlock() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Если важны безопасность и контур размещения
          </h2>
          <p className="text-foreground-secondary max-w-3xl mx-auto">
            ToDo Enterprise может быть обсужден с точки зрения сервера клиента, private cloud, российского ЦОД и модели доступа уже до старта внедрения.
          </p>
        </div>

        {/* Deployment options */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {deploymentOptions.map((option, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-card-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <option.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {option.title}
              </h3>
              <p className="text-sm text-foreground-muted">
                {option.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust line */}
        <p className="text-center text-sm text-foreground-muted mb-8">
          Пилот и демо-стенд помогают оценить продукт до принятия инфраструктурного решения.
        </p>

        {/* CTA */}
        <div className="text-center">
          <CTAButton
            variant="primary"
            size="lg"
            modalType="architecture"
          >
            <span className="flex items-center gap-2">
              Обсудить архитектуру
              <ArrowRight className="w-4 h-4" />
            </span>
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
