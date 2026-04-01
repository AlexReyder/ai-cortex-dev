"use client"

import { Monitor, Server, RefreshCw, Cloud, Settings, Handshake, ArrowRight } from "lucide-react"
import { CTAButton, ModalType } from "@/components/cta-modals"

const contactPaths = [
  {
    icon: Monitor,
    title: "Демо ToDo Enterprise",
    description: "Покажем продукт на релевантных для вас сценариях.",
    cta: "Запросить демо",
    modalType: "todo-demo" as ModalType,
  },
  {
    icon: Server,
    title: "Демо-стенд / пилот",
    description: "Дадим среду для проверки продукта, процессов и применимости.",
    cta: "Запросить демо-стенд",
    modalType: "todo-stand" as ModalType,
  },
  {
    icon: RefreshCw,
    title: "Миграция",
    description: "Обсудим переход с Jira / Trello / Asana-like workflows.",
    cta: "Обсудить миграцию",
    modalType: "migration" as ModalType,
  },
  {
    icon: Cloud,
    title: "Архитектура и размещение",
    description: "Разберем private cloud, on-prem, сервер клиента или российский ЦОД.",
    cta: "Обсудить архитектуру",
    modalType: "architecture" as ModalType,
  },
  {
    icon: Settings,
    title: "Кастомизация",
    description: "Обсудим адаптацию ToDo Enterprise под ваши процессы, роли, интеграции и интерфейс.",
    cta: "Обсудить кастомизацию",
    modalType: "customization" as ModalType,
  },
  {
    icon: Handshake,
    title: "Партнерство",
    description: "Для интеграторов, облаков, ЦОД, реселлеров и консалтинга.",
    cta: "Стать партнером",
    modalType: "partner" as ModalType,
  },
]

export function ContactPathSelector() {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Выберите нужный сценарий
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactPaths.map((path, index) => (
            <div
              key={index}
              className="group relative flex flex-col h-full p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 premium-card"
            >
              {/* Icon */}
              <div className="flex-shrink-0 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <path.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {path.title}
                </h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {path.description}
                </p>
              </div>

              {/* CTA - always at bottom */}
              <div className="mt-auto">
                <CTAButton
                  variant="ghost"
                  size="sm"
                  modalType={path.modalType}
                  className="w-full justify-between group-hover:bg-primary/5"
                >
                  <span>{path.cta}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </CTAButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
