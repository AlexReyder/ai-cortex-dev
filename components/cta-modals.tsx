'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import { X } from 'lucide-react'

import { PayloadFormRenderer } from '@/cms/payload-form-renderer'

export type ModalType =
  | 'todo-demo'
  | 'todo-stand'
  | 'ai-demo'
  | 'implementation'
  | 'architecture'
  | 'migration'
  | 'customization'
  | 'partner'
  | 'contact'
  | 'investor'
  | 'investor-materials'
  | 'pilot'
  | null

interface CTAModalContextType {
  openModal: (type: ModalType) => void
  closeModal: () => void
  currentModal: ModalType
}

const CTAModalContext = createContext<CTAModalContextType | null>(null)

export function useCTAModal() {
  const context = useContext(CTAModalContext)

  if (!context) {
    throw new Error('useCTAModal must be used within CTAModalProvider')
  }

  return context
}

type ModalConfig = {
  title: string
  subtitle?: string
  formSlug: string
  successMessage: string
  successDescription?: string
  accent: 'primary' | 'accent-red'
  product?: string
  intent?: string
}

const modalConfigs: Record<Exclude<ModalType, null>, ModalConfig> = {
  'todo-demo': {
    title: 'Запросить доступ к ToDo Enterprise',
    subtitle: 'Защищенная система управления задачами для enterprise',
    formSlug: 'cta-todo-demo',
    successMessage: 'Спасибо, запрос на ToDo Enterprise отправлен.',
    successDescription: 'Наш менеджер свяжется с вами в ближайшее время.',
    accent: 'primary',
    product: 'todo-enterprise',
    intent: 'todo-demo',
  },

  'todo-stand': {
    title: 'Запросить демо-стенд ToDo Enterprise',
    subtitle: 'Полнофункциональный стенд для тестирования',
    formSlug: 'cta-todo-stand',
    successMessage: 'Спасибо, запрос на демо-стенд отправлен.',
    successDescription: 'Наш менеджер свяжется с вами в ближайшее время.',
    accent: 'primary',
    product: 'todo-enterprise',
    intent: 'todo-stand',
  },

  'ai-demo': {
    title: 'Заказать демо Cortex AI Agents',
    subtitle: 'AI-агенты для автоматизации бизнес-операций',
    formSlug: 'cta-ai-demo',
    successMessage: 'Спасибо, запрос на демо AI отправлен.',
    successDescription: 'Наш менеджер свяжется с вами в ближайшее время.',
    accent: 'accent-red',
    product: 'cortex-ai',
    intent: 'ai-demo',
  },

  pilot: {
    title: 'Заказать демо Cortex AI Agents',
    subtitle: 'AI-агенты для автоматизации бизнес-операций',
    formSlug: 'cta-pilot',
    successMessage: 'Спасибо, запрос на демо AI отправлен.',
    successDescription: 'Наш менеджер свяжется с вами в ближайшее время.',
    accent: 'accent-red',
    product: 'cortex-ai',
    intent: 'pilot',
  },

  implementation: {
    title: 'Обсудить внедрение ToDo Enterprise',
    subtitle: 'Консультация по развертыванию и интеграции',
    formSlug: 'cta-implementation',
    successMessage: 'Спасибо, мы свяжемся с вами для обсуждения внедрения.',
    successDescription: 'Наш менеджер свяжется с вами в ближайшее время.',
    accent: 'primary',
    product: 'todo-enterprise',
    intent: 'implementation',
  },

  architecture: {
    title: 'Обсудить архитектуру и размещение',
    subtitle: 'Консультация по безопасности и инфраструктуре',
    formSlug: 'cta-architecture',
    successMessage: 'Спасибо, мы свяжемся с вами для обсуждения архитектуры.',
    successDescription: 'Наш менеджер свяжется с вами в ближайшее время.',
    accent: 'primary',
    product: 'todo-enterprise',
    intent: 'architecture',
  },

  migration: {
    title: 'Обсудить миграцию в ToDo Enterprise',
    subtitle: 'Переход с зарубежных систем без потери данных',
    formSlug: 'cta-migration',
    successMessage: 'Спасибо, мы свяжемся с вами для обсуждения миграции.',
    successDescription: 'Наш менеджер свяжется с вами в ближайшее время.',
    accent: 'primary',
    product: 'todo-enterprise',
    intent: 'migration',
  },

  customization: {
    title: 'Обсудить кастомизацию ToDo Enterprise',
    subtitle: 'Адаптация платформы под ваши процессы',
    formSlug: 'cta-customization',
    successMessage: 'Спасибо, мы свяжемся с вами для обсуждения кастомизации.',
    successDescription: 'Наш менеджер свяжется с вами в ближайшее время.',
    accent: 'primary',
    product: 'todo-enterprise',
    intent: 'customization',
  },

  partner: {
    title: 'Партнерский запрос',
    subtitle: 'Совместные проекты и интеграции',
    formSlug: 'cta-partner',
    successMessage: 'Спасибо, партнерский запрос отправлен.',
    successDescription: 'Наш менеджер свяжется с вами в ближайшее время.',
    accent: 'primary',
    product: 'partnership',
    intent: 'partner',
  },

  contact: {
    title: 'Связаться с нами',
    subtitle: 'Общие вопросы и предложения',
    formSlug: 'cta-contact',
    successMessage: 'Спасибо, мы свяжемся с вами в ближайшее время.',
    successDescription: 'Наш менеджер свяжется с вами в ближайшее время.',
    accent: 'primary',
    product: 'contact',
    intent: 'contact',
  },

  investor: {
    title: 'Инвестиционный диалог',
    subtitle: 'Обсудить инвестиционный тезис Cortex ToDo',
    formSlug: 'cta-investor',
    successMessage: 'Спасибо за интерес. Мы свяжемся с вами для обсуждения.',
    successDescription: 'Наш менеджер свяжется с вами в ближайшее время.',
    accent: 'primary',
    product: 'investment',
    intent: 'investor',
  },

  'investor-materials': {
    title: 'Запросить инвестиционные материалы',
    subtitle: 'Presentation deck и дополнительная информация',
    formSlug: 'cta-investor-materials',
    successMessage: 'Спасибо. Материалы будут направлены на указанный email.',
    successDescription: 'Наш менеджер свяжется с вами в ближайшее время.',
    accent: 'primary',
    product: 'investment-materials',
    intent: 'investor-materials',
  },
}

export function CTAModalProvider({ children }: { children: ReactNode }) {
  const [currentModal, setCurrentModal] = useState<ModalType>(null)

  const openModal = (type: ModalType) => {
    setCurrentModal(type)
  }

  const closeModal = () => {
    setCurrentModal(null)
  }

  const config = currentModal ? modalConfigs[currentModal] : null

  return (
    <CTAModalContext.Provider value={{ openModal, closeModal, currentModal }}>
      {children}

      {currentModal && config && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <div
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-background-secondary border border-white/10 rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 text-foreground-muted hover:text-foreground transition-colors z-10"
              aria-label="Закрыть"
            >
              <X className="w-5 h-5" />
            </button>

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
                sourcePage="cta-modal"
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
          </div>
        </div>
      )}
    </CTAModalContext.Provider>
  )
}

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent-red'
  size?: 'sm' | 'md' | 'lg'
  modalType?: ModalType
  href?: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function CTAButton({
  variant = 'primary',
  size = 'md',
  modalType,
  href,
  children,
  className = '',
  onClick,
}: CTAButtonProps) {
  const { openModal } = useCTAModal()

  const handleClick = () => {
    if (modalType) {
      openModal(modalType)
    } else if (href?.startsWith('#')) {
      const element = document.querySelector(href)

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (onClick) {
      onClick()
    }
  }

  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200'

  const sizeStyles = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-sm',
    lg: 'h-12 px-8 text-base',
  }

  const variantStyles = {
    primary: 'bg-primary hover:bg-primary-hover text-primary-foreground',
    secondary: 'border border-white/20 text-foreground hover:bg-white/5 hover:border-white/30',
    ghost: 'text-foreground-secondary hover:text-foreground hover:bg-white/5',
    'accent-red': 'bg-accent-red hover:bg-accent-red-muted text-primary-foreground',
  }

  if (href && !href.startsWith('#') && !modalType) {
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