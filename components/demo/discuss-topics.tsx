"use client"

import { Users, RefreshCw, Shield, Server, Settings, Layers, ArrowRight } from "lucide-react"
import { useCTAModal, type ModalType } from "@/components/cta-modals"

const topics = [
  {
    icon: Users,
    title: "Сценарии команды",
    modalType: "todo-demo" as ModalType,
  },
  {
    icon: RefreshCw,
    title: "Миграция",
    modalType: "migration" as ModalType,
  },
  {
    icon: Shield,
    title: "Безопасность",
    modalType: "architecture" as ModalType,
  },
  {
    icon: Server,
    title: "Размещение",
    modalType: "architecture" as ModalType,
  },
  {
    icon: Settings,
    title: "Кастомизация",
    modalType: "customization" as ModalType,
  },
  {
    icon: Layers,
    title: "Этапы внедрения",
    modalType: "pilot" as ModalType,
  },
]

export function DiscussTopics() {
  const { openModal } = useCTAModal()

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Что можно обсудить уже на первом этапе
          </h2>
        </div>

        {/* Topics grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {topics.map((topic, index) => (
            <button
              key={index}
              onClick={() => openModal(topic.modalType)}
              className="group flex flex-col items-center text-center p-5 rounded-xl bg-card border border-card-border hover:border-primary/30 hover:bg-card-hover cursor-pointer transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <topic.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {topic.title}
              </span>
              <ArrowRight className="w-4 h-4 text-foreground-muted mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
