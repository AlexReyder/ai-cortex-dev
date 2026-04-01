"use client"

import { useState, createContext, useContext, type ReactNode } from "react"
import { X, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

// Modal types
export type ModalType = 
  | "todo-demo"
  | "todo-stand"
  | "ai-demo"
  | "implementation"
  | "architecture"
  | "migration"
  | "customization"
  | "partner"
  | "contact"
  | "investor"
  | "investor-materials"
  | "pilot"
  | null

// Context for global modal state
interface CTAModalContextType {
  openModal: (type: ModalType) => void
  closeModal: () => void
  currentModal: ModalType
}

const CTAModalContext = createContext<CTAModalContextType | null>(null)

export function useCTAModal() {
  const context = useContext(CTAModalContext)
  if (!context) {
    throw new Error("useCTAModal must be used within CTAModalProvider")
  }
  return context
}

// Modal configurations
const modalConfigs: Record<Exclude<ModalType, null>, {
  title: string
  subtitle?: string
  fields: Array<{
    name: string
    label: string
    type: "text" | "email" | "tel" | "textarea" | "select"
    placeholder?: string
    options?: string[]
    required?: boolean
  }>
  submitText: string
  successMessage: string
  accent: "primary" | "accent-red"
}> = {
  "todo-demo": {
    title: "Запросить доступ к ToDo Enterprise",
    subtitle: "Защищенная система управления задачами для enterprise",
    fields: [
      { name: "name", label: "Имя", type: "text", placeholder: "Ваше имя", required: true },
      { name: "company", label: "Компания", type: "text", placeholder: "Название компании", required: true },
      { name: "position", label: "Должность", type: "text", placeholder: "Ваша должность" },
      { name: "email", label: "Email", type: "email", placeholder: "email@company.ru", required: true },
      { name: "phone", label: "Телефон", type: "tel", placeholder: "+7 (___) ___-__-__" },
      { name: "test_scope", label: "Что хотите протестировать?", type: "textarea", placeholder: "Опишите ваши задачи..." },
      { name: "interest", label: "Интересует", type: "select", options: ["Демо", "Демо-стенд", "Пилот", "Внедрение"] },
    ],
    submitText: "Отправить запрос",
    successMessage: "Спасибо, запрос на ToDo Enterprise отправлен.",
    accent: "primary",
  },
  "todo-stand": {
    title: "Запросить демо-стенд ToDo Enterprise",
    subtitle: "Полнофункциональный стенд для тестирования",
    fields: [
      { name: "name", label: "Имя", type: "text", placeholder: "Ваше имя", required: true },
      { name: "company", label: "Компания", type: "text", placeholder: "Название компании", required: true },
      { name: "role", label: "Роль в компании", type: "text", placeholder: "Ваша роль" },
      { name: "email", label: "Email", type: "email", placeholder: "email@company.ru", required: true },
      { name: "phone", label: "Телефон", type: "tel", placeholder: "+7 (___) ___-__-__" },
      { name: "team_size", label: "Размер команды", type: "select", options: ["до 10", "10-50", "50-200", "200-1000", "1000+"] },
      { name: "pilot_scope", label: "Что хотите проверить в пилоте?", type: "textarea", placeholder: "Опишите сценарии использования..." },
      { name: "deployment", label: "Требуется ли on-prem / private cloud?", type: "select", options: ["Нет, облако", "Да, on-prem", "Да, private cloud", "Требуется обсуждение"] },
    ],
    submitText: "Запросить демо-стенд",
    successMessage: "Спасибо, запрос на демо-стенд отправлен.",
    accent: "primary",
  },
  "ai-demo": {
    title: "Заказать демо Cortex AI Agents",
    subtitle: "AI-агенты для автоматизации бизнес-операций",
    fields: [
      { name: "name", label: "Имя", type: "text", placeholder: "Ваше имя", required: true },
      { name: "company", label: "Компания", type: "text", placeholder: "Название компании", required: true },
      { name: "position", label: "Должность", type: "text", placeholder: "Ваша должность" },
      { name: "email", label: "Email", type: "email", placeholder: "email@company.ru", required: true },
      { name: "phone", label: "Телефон", type: "tel", placeholder: "+7 (___) ___-__-__" },
      { name: "automation_scope", label: "Что хотите автоматизировать?", type: "textarea", placeholder: "Опишите рутинные процессы..." },
      { name: "employees", label: "Количество сотрудников", type: "select", options: ["до 10", "10-50", "50-200", "200+"] },
      { name: "scenario", label: "Интересующий сценарий", type: "select", options: ["Задачи", "Совещания", "Коммуникации", "Отчетность", "AI-ассистент", "Все сценарии"] },
    ],
    submitText: "Заказать демо",
    successMessage: "Спасибо, запрос на демо AI отправлен.",
    accent: "accent-red",
  },
   "pilot": {
    title: "Заказать демо Cortex AI Agents",
    subtitle: "AI-агенты для автоматизации бизнес-операций",
    fields: [
      { name: "name", label: "Имя", type: "text", placeholder: "Ваше имя", required: true },
      { name: "company", label: "Компания", type: "text", placeholder: "Название компании", required: true },
      { name: "position", label: "Должность", type: "text", placeholder: "Ваша должность" },
      { name: "email", label: "Email", type: "email", placeholder: "email@company.ru", required: true },
      { name: "phone", label: "Телефон", type: "tel", placeholder: "+7 (___) ___-__-__" },
      { name: "automation_scope", label: "Что хотите автоматизировать?", type: "textarea", placeholder: "Опишите рутинные процессы..." },
      { name: "employees", label: "Количество сотрудников", type: "select", options: ["до 10", "10-50", "50-200", "200+"] },
      { name: "scenario", label: "Интересующий сценарий", type: "select", options: ["Задачи", "Совещания", "Коммуникации", "Отчетность", "AI-ассистент", "Все сценарии"] },
    ],
    submitText: "Заказать демо",
    successMessage: "Спасибо, запрос на демо AI отправлен.",
    accent: "accent-red",
  },
  "implementation": {
    title: "Обсудить внедрение ToDo Enterprise",
    subtitle: "Консультация по развертыванию и интеграции",
    fields: [
      { name: "name", label: "Имя", type: "text", placeholder: "Ваше имя", required: true },
      { name: "company", label: "Компания", type: "text", placeholder: "Название компании", required: true },
      { name: "email", label: "Email", type: "email", placeholder: "email@company.ru", required: true },
      { name: "phone", label: "Телефон", type: "tel", placeholder: "+7 (___) ___-__-__" },
      { name: "deployment", label: "Где планируете развертывание?", type: "select", options: ["Сервер клиента", "Private cloud", "Российский ЦОД"] },
      { name: "processes", label: "Какие процессы хотите перенести?", type: "textarea", placeholder: "Опишите текущие процессы..." },
      { name: "customization", label: "Нужна ли адаптация под ваши процессы?", type: "select", options: ["Да, нужна кастомизация", "Возможно, требуется обсуждение", "Нет, стандартная версия"] },
    ],
    submitText: "Обсудить внедрение",
    successMessage: "Спасибо, мы свяжемся с вами для обсуждения внедрения.",
    accent: "primary",
  },
  "architecture": {
    title: "Обсудить архитектуру и размещение",
    subtitle: "Консультация по безопасности и инфраструктуре",
    fields: [
      { name: "name", label: "Имя", type: "text", placeholder: "Ваше имя", required: true },
      { name: "company", label: "Компания", type: "text", placeholder: "Название компании", required: true },
      { name: "email", label: "Email", type: "email", placeholder: "email@company.ru", required: true },
      { name: "phone", label: "Телефон", type: "tel", placeholder: "+7 (___) ___-__-__" },
      { name: "deployment_scenario", label: "Интересующий сценарий размещения", type: "select", options: ["On-prem", "Private cloud", "Российский ЦОД", "Гибридный вариант"] },
      { name: "security_requirements", label: "Требования по безопасности", type: "textarea", placeholder: "Опишите требования..." },
      { name: "integrations", label: "Нужны ли интеграции?", type: "select", options: ["Да, с текущими системами", "Да, с корпорати��ными сервисами", "Нет", "Требуется обсуждение"] },
    ],
    submitText: "Обсудить архитектуру",
    successMessage: "Спасибо, мы свяжемся с вами для обсуждения архитектуры.",
    accent: "primary",
  },
  "migration": {
    title: "Обсудить миграцию в ToDo Enterprise",
    subtitle: "Переход с зарубежных систем без потери данных",
    fields: [
      { name: "name", label: "Имя", type: "text", placeholder: "Ваше имя", required: true },
      { name: "company", label: "Компания", type: "text", placeholder: "Название компании", required: true },
      { name: "email", label: "Email", type: "email", placeholder: "email@company.ru", required: true },
      { name: "phone", label: "Телефон", type: "tel", placeholder: "+7 (___) ___-__-__" },
      { name: "current_system", label: "С какой системы переходите?", type: "select", options: ["Jira", "Trello", "Asana", "Monday", "Notion", "Другая система"] },
      { name: "preserve", label: "Что важно сохранить?", type: "textarea", placeholder: "Данные, структуры, интеграции..." },
      { name: "pilot", label: "Нужен ли пилот / демо-стенд?", type: "select", options: ["Да, сначала пилот", "Да, нужен демо-стенд", "Нет, готовы к внедрению"] },
    ],
    submitText: "Обсудить миграцию",
    successMessage: "Спасибо, мы свяжемся с вами для обсуждения миграции.",
    accent: "primary",
  },
  "customization": {
    title: "Обсудить кастомизацию ToDo Enterprise",
    subtitle: "Адаптация платформы под ваши процессы",
    fields: [
      { name: "name", label: "Имя", type: "text", placeholder: "Ваше имя", required: true },
      { name: "company", label: "Компания", type: "text", placeholder: "Название компании", required: true },
      { name: "email", label: "Email", type: "email", placeholder: "email@company.ru", required: true },
      { name: "phone", label: "Телефон", type: "tel", placeholder: "+7 (___) ___-__-__" },
      { name: "customization_scope", label: "Какие доработки вас интересуют?", type: "textarea", placeholder: "Опишите требования к кастомизации..." },
      { name: "workflow", label: "Нужна ли адаптация workflow?", type: "select", options: ["Да", "Нет", "Требуется обсуждение"] },
      { name: "integrations", label: "Нужны ли интеграции?", type: "select", options: ["Да, с корпоративными системами", "Да, с внешними сервисами", "Нет"] },
      { name: "interface", label: "Нужна ли адаптация интерфейса?", type: "select", options: ["Да, брендирование", "Да, кастомные поля", "Нет"] },
    ],
    submitText: "Обсудить кастомизацию",
    successMessage: "Спасибо, мы свяжемся с вами для обсуждения кастомизации.",
    accent: "primary",
  },
  "partner": {
    title: "Партнерский запрос",
    subtitle: "Совместные проекты и интеграции",
    fields: [
      { name: "name", label: "Имя", type: "text", placeholder: "Ваше имя", required: true },
      { name: "company", label: "Компания", type: "text", placeholder: "Название компании", required: true },
      { name: "email", label: "Email", type: "email", placeholder: "email@company.ru", required: true },
      { name: "phone", label: "Телефон", type: "tel", placeholder: "+7 (___) ___-__-__" },
      { name: "partnership_type", label: "Тип партнерства", type: "select", options: ["Интегратор", "Облако / ЦОД", "Реселлер", "Технологический партнер", "Консалтинг"] },
      { name: "comment", label: "Комментарий", type: "textarea", placeholder: "Расскажите о предложении..." },
    ],
    submitText: "Отправить партнерский запрос",
    successMessage: "Спасибо, партнерский запрос отправлен.",
    accent: "primary",
  },
  "contact": {
    title: "Связаться с нами",
    subtitle: "Общие вопросы и предложения",
    fields: [
      { name: "name", label: "Имя", type: "text", placeholder: "Ваше имя", required: true },
      { name: "company", label: "Компания", type: "text", placeholder: "Название компании" },
      { name: "email", label: "Email", type: "email", placeholder: "email@company.ru", required: true },
      { name: "phone", label: "Телефон", type: "tel", placeholder: "+7 (___) ___-__-__" },
      { name: "message", label: "Сообщение", type: "textarea", placeholder: "Ваше сообщение...", required: true },
    ],
    submitText: "Отправить сообщение",
    successMessage: "Спасибо, мы свяжемся с вами в ближайшее время.",
    accent: "primary",
  },
  "investor": {
    title: "Инвестиционный диалог",
    subtitle: "Обсудить инвестиционный тезис Cortex ToDo",
    fields: [
      { name: "name", label: "Имя", type: "text", placeholder: "Ваше имя", required: true },
      { name: "company", label: "Компания / Фонд", type: "text", placeholder: "Название организации", required: true },
      { name: "email", label: "Email", type: "email", placeholder: "email@company.com", required: true },
      { name: "phone", label: "Телефон", type: "tel", placeholder: "+7 (___) ___-__-__" },
      { name: "investor_type", label: "Тип инвестора", type: "select", options: ["Angel investor", "VC fund", "Strategic investor", "Family office", "Другое"] },
      { name: "message", label: "Сообщение", type: "textarea", placeholder: "Расскажите о вашем интересе к проекту..." },
    ],
    submitText: "Связаться с командой",
    successMessage: "Спасибо за интерес. Мы свяжемся с вами для обсуждения.",
    accent: "primary",
  },
  "investor-materials": {
    title: "Запросить инвестиционные материалы",
    subtitle: "Presentation deck и дополнительная информация",
    fields: [
      { name: "name", label: "Имя", type: "text", placeholder: "Ваше имя", required: true },
      { name: "company", label: "Компания / Фонд", type: "text", placeholder: "Название организации", required: true },
      { name: "email", label: "Email", type: "email", placeholder: "email@company.com", required: true },
      { name: "phone", label: "Телефон", type: "tel", placeholder: "+7 (___) ___-__-__" },
      { name: "materials", label: "Какие материалы интересуют?", type: "select", options: ["Presentation deck", "Financial summary", "Product roadmap", "Все материалы"] },
      { name: "comment", label: "Комментарий", type: "textarea", placeholder: "Дополнительные вопросы или комментарии..." },
    ],
    submitText: "Запросить материалы",
    successMessage: "Спасибо. Материалы будут направлены на указанный email.",
    accent: "primary",
  },
}

// Modal Provider Component
export function CTAModalProvider({ children }: { children: ReactNode }) {
  const [currentModal, setCurrentModal] = useState<ModalType>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState<Record<string, string>>({})

  const openModal = (type: ModalType) => {
    setCurrentModal(type)
    setIsSuccess(false)
    setFormData({})
  }

  const closeModal = () => {
    setCurrentModal(null)
    setIsSuccess(false)
    setFormData({})
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const config = currentModal ? modalConfigs[currentModal] : null

  return (
    <CTAModalContext.Provider value={{ openModal, closeModal, currentModal }}>
      {children}
      
      {/* Modal Overlay */}
      {currentModal && config && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          
          {/* Modal */}
          <div 
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-background-secondary border border-white/10 rounded-2xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 text-foreground-muted hover:text-foreground transition-colors z-10"
              aria-label="Закрыть"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              /* Success State */
              <div className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {config.successMessage}
                </h3>
                <p className="text-foreground-secondary mb-6">
                  Наш менеджер свяжется с вами в ближайшее время.
                </p>
                <Button
                  onClick={closeModal}
                  className="bg-primary hover:bg-primary-hover text-primary-foreground h-11 px-6"
                >
                  Закрыть
                </Button>
              </div>
            ) : (
              /* Form State */
              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="mb-6 pr-8">
                  <h2 className="text-xl font-semibold text-foreground mb-1">
                    {config.title}
                  </h2>
                  {config.subtitle && (
                    <p className="text-sm text-foreground-secondary">
                      {config.subtitle}
                    </p>
                  )}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {config.fields.map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-medium text-foreground-secondary mb-1.5">
                        {field.label}
                        {field.required && <span className="text-accent-red ml-1">*</span>}
                      </label>
                      
                      {field.type === "textarea" ? (
                        <textarea
                          name={field.name}
                          placeholder={field.placeholder}
                          required={field.required}
                          value={formData[field.name] || ""}
                          onChange={e => handleInputChange(field.name, e.target.value)}
                          className="w-full h-24 px-4 py-3 bg-background border border-white/10 rounded-lg text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 resize-none transition-all"
                        />
                      ) : field.type === "select" ? (
                        <select
                          name={field.name}
                          required={field.required}
                          value={formData[field.name] || ""}
                          onChange={e => handleInputChange(field.name, e.target.value)}
                          className="w-full h-11 px-4 bg-background border border-white/10 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Выберите...</option>
                          {field.options?.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          required={field.required}
                          value={formData[field.name] || ""}
                          onChange={e => handleInputChange(field.name, e.target.value)}
                          className="w-full h-11 px-4 bg-background border border-white/10 rounded-lg text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                        />
                      )}
                    </div>
                  ))}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full h-12 text-base font-medium mt-6 ${
                      config.accent === "accent-red"
                        ? "bg-accent-red hover:bg-accent-red-muted"
                        : "bg-primary hover:bg-primary-hover"
                    } text-primary-foreground disabled:opacity-50 transition-all`}
                  >
                    {isSubmitting ? "Отправка..." : config.submitText}
                  </Button>
                </form>

                {/* Privacy note */}
                <p className="text-xs text-foreground-muted text-center mt-4">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </CTAModalContext.Provider>
  )
}

// CTA Button Component with modal integration
interface CTAButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "accent-red"
  size?: "sm" | "md" | "lg"
  modalType?: ModalType
  href?: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function CTAButton({
  variant = "primary",
  size = "md",
  modalType,
  href,
  children,
  className = "",
  onClick,
}: CTAButtonProps) {
  const { openModal } = useCTAModal()

  const handleClick = () => {
    if (modalType) {
      openModal(modalType)
    } else if (href?.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else if (onClick) {
      onClick()
    }
  }

  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200"
  
  const sizeStyles = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-sm",
    lg: "h-12 px-8 text-base",
  }

  const variantStyles = {
    primary: "bg-primary hover:bg-primary-hover text-primary-foreground",
    secondary: "border border-white/20 text-foreground hover:bg-white/5 hover:border-white/30",
    ghost: "text-foreground-secondary hover:text-foreground hover:bg-white/5",
    "accent-red": "bg-accent-red hover:bg-accent-red-muted text-primary-foreground",
  }

  // If it's a real navigation link (not modal, not anchor)
  if (href && !href.startsWith("#") && !modalType) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
