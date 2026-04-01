"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Loader2 } from "lucide-react"

type FormIntent = "demo" | "stand" | "pilot" | "migration" | "architecture" | "customization"

const intentOptions: { value: FormIntent; label: string }[] = [
  { value: "demo", label: "Интересует демо" },
  { value: "stand", label: "Интересует демо-стенд" },
  { value: "pilot", label: "Интересует пилот" },
  { value: "migration", label: "Интересует миграция" },
  { value: "architecture", label: "Интересует архитектура" },
  { value: "customization", label: "Интересует кастомизация" },
]

const intentTitles: Record<FormIntent, string> = {
  demo: "Запрос демо ToDo Enterprise",
  stand: "Запрос демо-стенда ToDo Enterprise",
  pilot: "Обсудить пилот ToDo Enterprise",
  migration: "Обсудить миграцию на ToDo Enterprise",
  architecture: "Обсудить архитектуру размещения",
  customization: "Обсудить кастомизацию ToDo Enterprise",
}

const intentFieldLabels: Record<FormIntent, string> = {
  demo: "Что хотите посмотреть?",
  stand: "Что хотите оценить самостоятельно?",
  pilot: "Какой процесс хотите проверить на пилоте?",
  migration: "С какой системы переходите?",
  architecture: "Где планируете размещение?",
  customization: "Какие доработки вас интересуют?",
}

const submitButtonLabels: Record<FormIntent, string> = {
  demo: "Запросить демо",
  stand: "Запросить демо-стенд",
  pilot: "Обсудить пилот",
  migration: "Обсудить миграцию",
  architecture: "Обсудить архитектуру",
  customization: "Обсудить кастомизацию",
}

const deploymentOptions = [
  { value: "onprem", label: "Сервер клиента" },
  { value: "private-cloud", label: "Private cloud" },
  { value: "russian-dc", label: "Российский ЦОД" },
]

export function MainForm() {
  const [intent, setIntent] = useState<FormIntent>("demo")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    position: "",
    email: "",
    phone: "",
    comment: "",
    intentField: "",
    deployment: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <section id="main-form" className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <div className="text-center p-12 rounded-2xl bg-card border border-card-border">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
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
    <section id="main-form" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Оставьте запрос
          </h2>
        </div>

        {/* Form card */}
        <div className="p-8 rounded-2xl bg-card border border-card-border">
          {/* Dynamic title */}
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
            {intentTitles[intent]}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Intent selector */}
            <div>
              <label className="block text-sm font-medium text-foreground-secondary mb-2">
                Что вас интересует?
              </label>
              <Select value={intent} onValueChange={(value) => setIntent(value as FormIntent)}>
                <SelectTrigger className="w-full h-11 bg-background border-card-border text-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card border-card-border">
                  {intentOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value} className="text-foreground hover:bg-card-hover">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Base fields */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground-secondary mb-2">
                  Имя *
                </label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Ваше имя"
                  className="h-11 bg-background border-card-border text-foreground placeholder:text-foreground-muted"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground-secondary mb-2">
                  Компания *
                </label>
                <Input
                  required
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="Название компании"
                  className="h-11 bg-background border-card-border text-foreground placeholder:text-foreground-muted"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground-secondary mb-2">
                  Должность
                </label>
                <Input
                  value={formData.position}
                  onChange={(e) => handleInputChange("position", e.target.value)}
                  placeholder="Ваша должность"
                  className="h-11 bg-background border-card-border text-foreground placeholder:text-foreground-muted"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground-secondary mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="email@company.ru"
                  className="h-11 bg-background border-card-border text-foreground placeholder:text-foreground-muted"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground-secondary mb-2">
                Телефон
              </label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+7 (___) ___-__-__"
                className="h-11 bg-background border-card-border text-foreground placeholder:text-foreground-muted"
              />
            </div>

            {/* Dynamic field based on intent */}
            {intent === "architecture" ? (
              <div>
                <label className="block text-sm font-medium text-foreground-secondary mb-2">
                  {intentFieldLabels[intent]}
                </label>
                <Select value={formData.deployment} onValueChange={(value) => handleInputChange("deployment", value)}>
                  <SelectTrigger className="w-full h-11 bg-background border-card-border text-foreground">
                    <SelectValue placeholder="Выберите вариант" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-card-border">
                    {deploymentOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value} className="text-foreground hover:bg-card-hover">
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-foreground-secondary mb-2">
                  {intentFieldLabels[intent]}
                </label>
                <Input
                  value={formData.intentField}
                  onChange={(e) => handleInputChange("intentField", e.target.value)}
                  placeholder="Опишите кратко"
                  className="h-11 bg-background border-card-border text-foreground placeholder:text-foreground-muted"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-foreground-secondary mb-2">
                Комментарий
              </label>
              <Textarea
                value={formData.comment}
                onChange={(e) => handleInputChange("comment", e.target.value)}
                placeholder="Дополнительная информация"
                rows={3}
                className="bg-background border-card-border text-foreground placeholder:text-foreground-muted resize-none"
              />
            </div>

            {/* Submit button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-primary hover:bg-primary-hover text-primary-foreground font-medium text-base"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Отправка...
                </span>
              ) : (
                submitButtonLabels[intent]
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
