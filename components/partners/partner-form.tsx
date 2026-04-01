"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, FileText } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

const partnerTypes = [
  { value: "integrator", label: "Интегратор" },
  { value: "cloud", label: "Облако / ЦОД" },
  { value: "reseller", label: "Реселлер" },
  { value: "tech", label: "Технологический партнер" },
  { value: "consulting", label: "Консалтинг" },
]

export function PartnerFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    partnerType: "",
    comment: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="partner-form" className="py-20 bg-background">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-card/50 rounded-2xl border border-border p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Запрос отправлен
            </h3>
            <p className="text-foreground-secondary mb-6">
              Мы свяжемся с вами в ближайшее время для обсуждения партнерства.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  name: "",
                  company: "",
                  email: "",
                  phone: "",
                  partnerType: "",
                  comment: "",
                })
              }}
            >
              Отправить ещё
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="partner-form" className="py-20 bg-background">
      <div className="max-w-2xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground leading-tight mb-4">
            Оставьте партнерский запрос
          </h2>
        </div>

        {/* Form */}
        <div className="bg-card/50 rounded-2xl border border-border p-8">
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
            Партнерский запрос
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground-secondary">
                  Имя *
                </label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ваше имя"
                  className="h-11 bg-background border-border"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground-secondary">
                  Компания *
                </label>
                <Input
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Название компании"
                  className="h-11 bg-background border-border"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground-secondary">
                  Email *
                </label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@company.com"
                  className="h-11 bg-background border-border"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground-secondary">
                  Телефон
                </label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 (XXX) XXX-XX-XX"
                  className="h-11 bg-background border-border"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground-secondary">
                Тип партнерства *
              </label>
              <select
                required
                value={formData.partnerType}
                onChange={(e) => setFormData({ ...formData, partnerType: e.target.value })}
                className="w-full h-11 px-3 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Выберите тип</option>
                {partnerTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground-secondary">
                Комментарий
              </label>
              <textarea
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                placeholder="Расскажите о вашем интересе к партнерству..."
                rows={4}
                className="w-full px-3 py-3 rounded-lg bg-background border border-border text-foreground text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full h-12 bg-primary hover:bg-primary-hover text-primary-foreground"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Отправка...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Отправить партнерский запрос
                </span>
              )}
            </Button>
          </form>

          {/* Alternative CTA */}
          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="text-sm text-foreground-muted mb-3">или</p>
            <CTAButton
              variant="ghost"
              size="sm"
              modalType="partner"
            >
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Запросить партнерскую презентацию
              </span>
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
