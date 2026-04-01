"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, MessageSquare, FileText } from "lucide-react"
import { CTAButton } from "@/components/cta-modals"

export function InvestorContact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section className="py-20 lg:py-28 bg-background-light">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
            <Send className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-2xl font-semibold text-foreground-dark mb-4">
            Спасибо за интерес
          </h2>
          <p className="text-foreground-dark-secondary mb-6">
            Мы свяжемся с вами в ближайшее время для обсуждения инвестиционного тезиса.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 lg:py-28 bg-background-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground-dark leading-tight mb-4 text-balance">
            Для инвестиционного диалога
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left - CTA cards */}
          <div className="lg:col-span-2 space-y-4">
            <div className="p-6 rounded-xl bg-white border border-border-light">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground-dark mb-2">
                Инвестиционные материалы
              </h3>
              <p className="text-sm text-foreground-dark-secondary mb-4">
                Запросите presentation deck и дополнительную информацию.
              </p>
              <CTAButton
                variant="secondary"
                size="sm"
                modalType="investor-materials"
                className="w-full"
              >
                Запросить материалы
              </CTAButton>
            </div>

            <div className="p-6 rounded-xl bg-white border border-border-light">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground-dark mb-2">
                Прямой контакт
              </h3>
              <p className="text-sm text-foreground-dark-secondary mb-4">
                Для стратегических и инвестиционных вопросов.
              </p>
              <p className="text-sm text-foreground-dark">
                <span className="font-medium">Вячеслав Бабиенко</span><br />
                <a href="mailto:invest@cortextodo.ru" className="text-primary hover:underline">
                  invest@cortextodo.ru
                </a>
              </p>
            </div>
          </div>

          {/* Right - Contact form */}
          <div className="lg:col-span-3">
            <div className="p-6 rounded-xl bg-white border border-border-light">
              <h3 className="text-lg font-semibold text-foreground-dark mb-6">
                Обсудить инвестиционный тезис
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground-dark">
                      Имя
                    </Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background-light-secondary border-border-light text-foreground-dark"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground-dark">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background-light-secondary border-border-light text-foreground-dark"
                      placeholder="email@company.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground-dark">
                    Компания / Фонд
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-background-light-secondary border-border-light text-foreground-dark"
                    placeholder="Название организации"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground-dark">
                    Сообщение
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background-light-secondary border-border-light text-foreground-dark resize-none"
                    placeholder="Расскажите о вашем интересе к проекту..."
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 bg-primary hover:bg-primary-hover text-primary-foreground font-medium"
                >
                  {isSubmitting ? "Отправка..." : "Связаться с командой"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
