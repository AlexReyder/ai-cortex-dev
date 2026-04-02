"use client"

import { useState, createContext, useContext, type ReactNode } from "react"
import { X, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PayloadFormRenderer } from '@/cms/payload-form-renderer'

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
type LegacyField = {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
  required?: boolean
}

type BaseModalConfig = {
  title: string
  subtitle?: string
  submitText: string
  successMessage: string
  successDescription?: string
  accent: 'primary' | 'accent-red'
}

type CMSModalConfig = BaseModalConfig & {
  kind: 'cms'
  formSlug: string
  product?: string
  intent?: string
}

type LegacyModalConfig = BaseModalConfig & {
  kind: 'legacy'
  fields: LegacyField[]
}

const modalConfigs: Record<Exclude<ModalType, null>, CMSModalConfig | LegacyModalConfig> = {
  'todo-demo': {
    kind: 'cms',
    title: 'Запросить доступ к ToDo Enterprise',
    subtitle: 'Защищенная система управления задачами для enterprise',
    formSlug: 'cta-todo-demo',
    submitText: 'Отправить запрос',
    successMessage: 'Спасибо, запрос на ToDo Enterprise отправлен.',
    successDescription: 'Наш менеджер свяжется с вами в ближайшее время.',
    accent: 'primary',
    product: 'todo-enterprise',
    intent: 'todo-demo',
  },

  'todo-stand': {
    kind: 'cms',
    title: 'Запросить демо-стенд ToDo Enterprise',
    subtitle: 'Полнофункциональный стенд для тестирования',
    formSlug: 'cta-todo-stand',
    submitText: 'Запросить демо-стенд',
    successMessage: 'Спасибо, запрос на демо-стенд отправлен.',
    successDescription: 'Наш менеджер свяжется с вами в ближайшее время.',
    accent: 'primary',
    product: 'todo-enterprise',
    intent: 'todo-stand',
  },

  'ai-demo': {
    kind: 'cms',
    title: 'Заказать демо Cortex AI Agents',
    subtitle: 'AI-агенты для автоматизации бизнес-операций',
    formSlug: 'cta-ai-demo',
    submitText: 'Заказать демо',
    successMessage: 'Спасибо, запрос на демо AI отправлен.',
    successDescription: 'Наш менеджер свяжется с вами в ближайшее время.',
    accent: 'accent-red',
    product: 'cortex-ai',
    intent: 'ai-demo',
  },

  pilot: {
    kind: 'cms',
    title: 'Заказать демо Cortex AI Agents',
    subtitle: 'AI-агенты для автоматизации бизнес-операций',
    formSlug: 'cta-pilot',
    submitText: 'Заказать демо',
    successMessage: 'Спасибо, запрос на демо AI отправлен.',
    successDescription: 'Наш менеджер свяжется с вами в ближайшее время.',
    accent: 'accent-red',
    product: 'cortex-ai',
    intent: 'pilot',
  },

implementation: {
  kind: 'cms',
  title: 'Обсудить внедрение ToDo Enterprise',
  subtitle: 'Консультация по развертыванию и интеграции',
  formSlug: 'cta-implementation',
  submitText: 'Обсудить внедрение',
  successMessage: 'Спасибо, мы свяжемся с вами для обсуждения внедрения.',
  successDescription: 'Наш менеджер свяжется с вами в ближайшее время.',
  accent: 'primary',
  product: 'todo-enterprise',
  intent: 'implementation',
},

architecture: {
  kind: 'cms',
  title: 'Обсудить архитектуру и размещение',
  subtitle: 'Консультация по безопасности и инфраструктуре',
  formSlug: 'cta-architecture',
  submitText: 'Обсудить архитектуру',
  successMessage: 'Спасибо, мы свяжемся с вами для обсуждения архитектуры.',
  successDescription: 'Наш менеджер свяжется с вами в ближайшее время.',
  accent: 'primary',
  product: 'todo-enterprise',
  intent: 'architecture',
},

migration: {
  kind: 'cms',
  title: 'Обсудить миграцию в ToDo Enterprise',
  subtitle: 'Переход с зарубежных систем без потери данных',
  formSlug: 'cta-migration',
  submitText: 'Обсудить миграцию',
  successMessage: 'Спасибо, мы свяжемся с вами для обсуждения миграции.',
  successDescription: 'Наш менеджер свяжется с вами в ближайшее время.',
  accent: 'primary',
  product: 'todo-enterprise',
  intent: 'migration',
},

customization: {
  kind: 'cms',
  title: 'Обсудить кастомизацию ToDo Enterprise',
  subtitle: 'Адаптация платформы под ваши процессы',
  formSlug: 'cta-customization',
  submitText: 'Обсудить кастомизацию',
  successMessage: 'Спасибо, мы свяжемся с вами для обсуждения кастомизации.',
  successDescription: 'Наш менеджер свяжется с вами в ближайшее время.',
  accent: 'primary',
  product: 'todo-enterprise',
  intent: 'customization',
},

partner: {
  kind: 'cms',
  title: 'Партнерский запрос',
  subtitle: 'Совместные проекты и интеграции',
  formSlug: 'cta-partner',
  submitText: 'Отправить партнерский запрос',
  successMessage: 'Спасибо, партнерский запрос отправлен.',
  successDescription: 'Наш менеджер свяжется с вами в ближайшее время.',
  accent: 'primary',
  product: 'partnership',
  intent: 'partner',
},

contact: {
  kind: 'cms',
  title: 'Связаться с нами',
  subtitle: 'Общие вопросы и предложения',
  formSlug: 'cta-contact',
  submitText: 'Отправить сообщение',
  successMessage: 'Спасибо, мы свяжемся с вами в ближайшее время.',
  successDescription: 'Наш менеджер свяжется с вами в ближайшее время.',
  accent: 'primary',
  product: 'contact',
  intent: 'contact',
},

investor: {
  kind: 'cms',
  title: 'Инвестиционный диалог',
  subtitle: 'Обсудить инвестиционный тезис Cortex ToDo',
  formSlug: 'cta-investor',
  submitText: 'Связаться с командой',
  successMessage: 'Спасибо за интерес. Мы свяжемся с вами для обсуждения.',
  successDescription: 'Наш менеджер свяжется с вами в ближайшее время.',
  accent: 'primary',
  product: 'investment',
  intent: 'investor',
},

'investor-materials': {
  kind: 'cms',
  title: 'Запросить инвестиционные материалы',
  subtitle: 'Presentation deck и дополнительная информация',
  formSlug: 'cta-investor-materials',
  submitText: 'Запросить материалы',
  successMessage: 'Спасибо. Материалы будут направлены на указанный email.',
  successDescription: 'Наш менеджер свяжется с вами в ближайшее время.',
  accent: 'primary',
  product: 'investment-materials',
  intent: 'investor-materials',
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

            {config.kind === 'cms' ? (
  <div className="p-6 sm:p-8">
    <div className="mb-6 pr-8">
      <h2 className="text-xl font-semibold text-foreground mb-1">{config.title}</h2>
      {config.subtitle && (
        <p className="text-sm text-foreground-secondary">{config.subtitle}</p>
      )}
    </div>

    <PayloadFormRenderer
      formSlug={config.formSlug}
      themeVariant="dark"
      submitVariant={config.accent === 'accent-red' ? 'accent-red' : 'primary'}
      withCard={false}
      sourceSection="cta-modal"
      modalType={currentModal}
      product={config.product}
      intent={config.intent}
      successTitle={config.successMessage}
      successDescription={
        config.successDescription || 'Наш менеджер свяжется с вами в ближайшее время.'
      }
    />
  </div>
) : isSuccess ? (
  <div className="p-8 text-center">
    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
      <CheckCircle2 className="w-8 h-8 text-green-500" />
    </div>
    <h3 className="text-xl font-semibold text-foreground mb-2">{config.successMessage}</h3>
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
  <div className="p-6 sm:p-8">
    <div className="mb-6 pr-8">
      <h2 className="text-xl font-semibold text-foreground mb-1">{config.title}</h2>
      {config.subtitle && (
        <p className="text-sm text-foreground-secondary">{config.subtitle}</p>
      )}
    </div>

    <form onSubmit={handleSubmit} className="space-y-4">
      {config.fields.map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-medium text-foreground-secondary mb-1.5">
            {field.label}
            {field.required && <span className="text-accent-red ml-1">*</span>}
          </label>

          {field.type === 'textarea' ? (
            <textarea
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              value={formData[field.name] || ''}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              className="w-full h-24 px-4 py-3 bg-background border border-white/10 rounded-lg text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 resize-none transition-all"
            />
          ) : field.type === 'select' ? (
            <select
              name={field.name}
              required={field.required}
              value={formData[field.name] || ''}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              className="w-full h-11 px-4 bg-background border border-white/10 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all appearance-none cursor-pointer"
            >
              <option value="">Выберите...</option>
              {field.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              value={formData[field.name] || ''}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              className="w-full h-11 px-4 bg-background border border-white/10 rounded-lg text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
            />
          )}
        </div>
      ))}

      <Button
        type="submit"
        disabled={isSubmitting}
        className={`w-full h-12 text-base font-medium mt-6 ${
          config.accent === 'accent-red'
            ? 'bg-accent-red hover:bg-accent-red-muted'
            : 'bg-primary hover:bg-primary-hover'
        } text-primary-foreground disabled:opacity-50 transition-all`}
      >
        {isSubmitting ? 'Отправка...' : config.submitText}
      </Button>
    </form>

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
