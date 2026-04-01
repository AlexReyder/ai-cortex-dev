"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Loader2 } from "lucide-react"

type FormIntent = "demo" | "stand" | "migration" | "architecture" | "customization" | "partner"

const intentOptions: { value: FormIntent; label: string }[] = [
  { value: "demo", label: "Интересует демо" },
  { value: "stand", label: "Интересует демо-стенд" },
  { value: "migration", label: "Интересует миграция" },
  { value: "architecture", label: "Интересует архитектура" },
  { value: "customization", label: "Интересует кастомизация" },
  { value: "partner", label: "Интересует партнерство" },
]

const submitButtonText: Record<FormIntent, string> = {
  demo: "Запросить демо",
  stand: "Запросить демо-стенд",
  migration: "Обсудить миграцию",
  architecture: "Обсудить архитектуру",
  customization: "Обсудить кастомизацию",
  partner: "Отправить партнерский запрос",
}

const deploymentOptions = [
  "Сервер клиента",
  "Private cloud",
  "Российский ЦОД",
]

const partnerTypes = [
  "Интегратор",
  "Облако / ЦОД",
  "Реселлер",
  "Консалтинг",
  "Технологический партнер",
]

export function ContactForm() {
  const [intent, setIntent] = useState<FormIntent>("demo")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    position: "",
    email: "",
    phone: "",
    comment: "",
    // Contextual fields
    whatToShow: "",
    whatToTest: "",
    migrationFrom: "",
    deploymentLocation: "",
    customizationNeeds: "",
    partnerType: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  if (isSuccess) {
    return (
      <section id="form" className="py-20 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center p-12 rounded-2xl bg-card border border-border">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Спасибо за запрос
            </h3>
            <p className="text-foreground-secondary">
              Мы свяжемся с вами в ближайшее время.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="form" className="py-20 bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Оставьте запрос
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card border border-border">
          {/* Intent selector */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-foreground mb-3">
              Что вас интересует?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {intentOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setIntent(option.value)}
                  className={`px-3 py-2 text-sm rounded-lg border transition-all duration-200 ${
                    intent === option.value
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background border-border text-foreground-secondary hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Base fields */}
          <div className="space-y-4 mb-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                  Имя <span className="text-accent-red">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ваше имя"
                  className="h-11 bg-background border-border"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">
                  Компания <span className="text-accent-red">*</span>
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="Название компании"
                  className="h-11 bg-background border-border"
                />
              </div>
            </div>

            <div>
              <label htmlFor="position" className="block text-sm font-medium text-foreground mb-1.5">
                Должность
              </label>
              <Input
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="Ваша должность"
                className="h-11 bg-background border-border"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                  Email <span className="text-accent-red">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="email@company.ru"
                  className="h-11 bg-background border-border"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                  Телефон
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (___) ___-__-__"
                  className="h-11 bg-background border-border"
                />
              </div>
            </div>
          </div>

          {/* Contextual fields based on intent */}
          <div className="space-y-4 mb-6">
            {intent === "demo" && (
              <div>
                <label htmlFor="whatToShow" className="block text-sm font-medium text-foreground mb-1.5">
                  Что хотите посмотреть?
                </label>
                <Input
                  id="whatToShow"
                  name="whatToShow"
                  value={formData.whatToShow}
                  onChange={handleChange}
                  placeholder="Какие сценарии вас интересуют?"
                  className="h-11 bg-background border-border"
                />
              </div>
            )}

            {intent === "stand" && (
              <div>
                <label htmlFor="whatToTest" className="block text-sm font-medium text-foreground mb-1.5">
                  Что хотите проверить в пилоте?
                </label>
                <Input
                  id="whatToTest"
                  name="whatToTest"
                  value={formData.whatToTest}
                  onChange={handleChange}
                  placeholder="Какие процессы планируете протестировать?"
                  className="h-11 bg-background border-border"
                />
              </div>
            )}

            {intent === "migration" && (
              <div>
                <label htmlFor="migrationFrom" className="block text-sm font-medium text-foreground mb-1.5">
                  С какой системы переходите?
                </label>
                <Input
                  id="migrationFrom"
                  name="migrationFrom"
                  value={formData.migrationFrom}
                  onChange={handleChange}
                  placeholder="Jira, Trello, Asana, другая..."
                  className="h-11 bg-background border-border"
                />
              </div>
            )}

            {intent === "architecture" && (
              <div>
                <label htmlFor="deploymentLocation" className="block text-sm font-medium text-foreground mb-1.5">
                  Где планируете размещение?
                </label>
                <select
                  id="deploymentLocation"
                  name="deploymentLocation"
                  value={formData.deploymentLocation}
                  onChange={handleChange}
                  className="w-full h-11 px-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Выберите вариант</option>
                  {deploymentOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {intent === "customization" && (
              <div>
                <label htmlFor="customizationNeeds" className="block text-sm font-medium text-foreground mb-1.5">
                  Какие доработки вас интересуют?
                </label>
                <Textarea
                  id="customizationNeeds"
                  name="customizationNeeds"
                  value={formData.customizationNeeds}
                  onChange={handleChange}
                  placeholder="Опишите, что нужно адаптировать..."
                  rows={3}
                  className="bg-background border-border resize-none"
                />
              </div>
            )}

            {intent === "partner" && (
              <div>
                <label htmlFor="partnerType" className="block text-sm font-medium text-foreground mb-1.5">
                  Тип партнерства
                </label>
                <select
                  id="partnerType"
                  name="partnerType"
                  value={formData.partnerType}
                  onChange={handleChange}
                  className="w-full h-11 px-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Выберите тип</option>
                  {partnerTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Comment field */}
          <div className="mb-8">
            <label htmlFor="comment" className="block text-sm font-medium text-foreground mb-1.5">
              Комментарий
            </label>
            <Textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Дополнительная информация..."
              rows={4}
              className="bg-background border-border resize-none"
            />
          </div>

          {/* Submit button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 bg-primary hover:bg-primary-hover text-primary-foreground text-base font-medium disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Отправка...
              </span>
            ) : (
              submitButtonText[intent]
            )}
          </Button>

          {/* Privacy note */}
          <p className="mt-4 text-xs text-foreground-muted text-center">
            Нажимая кнопку, вы соглашаетесь на обработку персональных данных
          </p>
        </form>
      </div>
    </section>
  )
}
