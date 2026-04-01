"use client"

import { Layers, Building2, Shield, TrendingUp, ArrowRight } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const comparisons = [
  {
    icon: Layers,
    title: "Больше, чем доски",
    text: "ToDo Enterprise покрывает timeline, roadmap, релизы и версии — не только канбан.",
  },
  {
    icon: Building2,
    title: "Enterprise depth",
    text: "Роли, права, workflow и интеграции для корпоративных сценариев работы.",
  },
  {
    icon: Shield,
    title: "Безопасное размещение",
    text: "On-prem, private cloud или российский ЦОД вместо внешнего SaaS.",
  },
  {
    icon: TrendingUp,
    title: "Развитие в платформу",
    text: "ToDo — часть экосистемы Cortex: ToDo.corp, ToDo.doc и AI-слой в развитии.",
  },
]

export function VsTrello() {
  return (
    <section id="vs-trello" className="py-20 lg:py-28 bg-background-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground-dark mb-4 text-balance">
            ToDo Enterprise vs Trello
          </h2>
          <p className="text-base text-foreground-dark-secondary max-w-2xl mx-auto">
            ToDo Enterprise покрывает не только канбан-доски, но и более широкий enterprise-сценарий: timeline, роли, версии, релизы, безопасное размещение и развитие в экосистему.
          </p>
        </div>

        {/* Comparison cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {comparisons.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-white border border-border-light rounded-xl p-6 h-full hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground-dark mb-2 flex-shrink-0">
                {item.title}
              </h3>
              <p className="text-sm text-foreground-dark-secondary leading-relaxed flex-1">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <CTAButton
            variant="primary"
            size="md"
            modalType="todo-demo"
          >
            <span className="flex items-center gap-2">
              Попробовать ToDo Enterprise
              <ArrowRight className="w-4 h-4" />
            </span>
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
