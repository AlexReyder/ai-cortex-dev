"use client"

import { Mail, Phone, User } from "lucide-react"

export function DirectContact() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Прямой контакт
          </h2>
          <p className="text-foreground-secondary max-w-xl mx-auto">
            Для enterprise-запросов, партнерских обсуждений и стратегических вопросов
          </p>
        </div>

        {/* Contact card */}
        <div className="max-w-md mx-auto p-8 rounded-2xl bg-card border border-border text-center">
          {/* Avatar placeholder */}
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <User className="w-10 h-10 text-primary" />
          </div>

          {/* Name */}
          <h3 className="text-xl font-semibold text-foreground mb-1">
            Вячеслав Бабиенко
          </h3>
          <p className="text-sm text-foreground-muted mb-6">
            Основатель Cortex ToDo
          </p>

          {/* Contact details */}
          <div className="space-y-3">
            <a
              href="mailto:slava.babienko@gmail.com"
              className="flex items-center justify-center gap-2 text-foreground-secondary hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">slava.babienko@gmail.com</span>
            </a>
            <a
              href="tel:+375296778833"
              className="flex items-center justify-center gap-2 text-foreground-secondary hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+375 (29) 677 88 33</span>
            </a>
          </div>

          {/* Context note */}
          <p className="mt-6 text-xs text-foreground-muted">
            Enterprise-запросы, партнерство, стратегические обсуждения
          </p>
        </div>
      </div>
    </section>
  )
}
