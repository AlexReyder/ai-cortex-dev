"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Bot, Kanban, Send, CheckCircle2 } from "lucide-react"

type FormType = "ai" | "todo"

interface FormData {
  name: string
  company: string
  role: string
  email: string
  phone: string
  message: string
}

export function LeadFormsSection() {
  const [formType, setFormType] = useState<FormType>("ai")
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    role: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        company: "",
        role: "",
        email: "",
        phone: "",
        message: "",
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="demo-ai" className="py-24 bg-background-secondary">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Оставить заявку
          </h2>
          <p className="mt-4 text-lg text-foreground-secondary">
            Выберите интересующий продукт и заполните форму. Мы свяжемся в течение рабочего дня.
          </p>
        </div>

        {/* Form Type Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-xl border border-card-border bg-card p-1">
            <button
              onClick={() => setFormType("ai")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                formType === "ai"
                  ? "bg-accent-red text-primary-foreground"
                  : "text-foreground-secondary hover:text-foreground"
              }`}
            >
              <Bot className="w-4 h-4" />
              Интересует AI
            </button>
            <button
              onClick={() => setFormType("todo")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                formType === "todo"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground-secondary hover:text-foreground"
              }`}
            >
              <Kanban className="w-4 h-4" />
              Интересует ToDo
            </button>
          </div>
        </div>

        {/* Form */}
        <div id="try-todo" className="rounded-2xl border border-card-border bg-card p-8">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Заявка отправлена!
              </h3>
              <p className="text-foreground-secondary">
                Мы свяжемся с вами в ближайшее время.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-card-border bg-background-tertiary text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Компания *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-card-border bg-background-tertiary text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Название компании"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-foreground mb-2">
                    {formType === "ai" ? "Должность" : "Роль в компании"}
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-card-border bg-background-tertiary text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder={formType === "ai" ? "Ваша должность" : "Ваша роль"}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-card-border bg-background-tertiary text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="email@company.ru"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-card-border bg-background-tertiary text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {formType === "ai" ? "Что хотите автоматизировать?" : "Что хотите заменить / внедрить?"}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-card-border bg-background-tertiary text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                    placeholder={
                      formType === "ai"
                        ? "Опишите процессы, которые хотите автоматизировать..."
                        : "Опишите текущую систему и задачи..."
                    }
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className={`w-full h-14 text-base font-medium ${
                  formType === "ai"
                    ? "bg-accent-red hover:bg-accent-red-muted"
                    : "bg-primary hover:bg-primary-hover"
                } text-primary-foreground disabled:opacity-50`}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Отправка...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Отправить заявку
                    <Send className="w-4 h-4" />
                  </span>
                )}
              </Button>

              <p className="text-xs text-foreground-muted text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
