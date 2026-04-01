"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Где могут храниться данные?",
    answer: "Данные могут храниться на сервере клиента, в частном облаке (private cloud) или в российском дата-центре. Выбор зависит от требований ИБ и IT-архитектуры заказчика.",
  },
  {
    question: "Можно ли развернуть систему в контуре клиента?",
    answer: "Да, ToDo Enterprise поддерживает on-premise развертывание. Система может быть полностью размещена в инфраструктуре клиента с контролем всех компонентов.",
  },
  {
    question: "Подходит ли ToDo для private cloud сценария?",
    answer: "Да, ToDo Enterprise может быть развернут в частном облаке с контролируемой архитектурой, обеспечивая баланс между гибкостью облака и требованиями безопасности.",
  },
  {
    question: "Как проходит миграция с привычных систем?",
    answer: "Миграция проходит поэтапно: анализ текущего контура, демо-стенд, настройка сценариев и ролей, контролируемый запуск. Привычная логика интерфейса помогает сократить время адаптации команды.",
  },
  {
    question: "Можно ли адаптировать систему под корпоративные требования?",
    answer: "Да, для крупных клиентов ToDo Enterprise может быть адаптирован под корпоративные процессы: workflow, интеграции, роли и права доступа, интерфейсные сценарии.",
  },
  {
    question: "Можно ли сначала протестировать продукт на демо-стенде?",
    answer: "Да, мы предоставляем демо-стенд для тестирования продукта на релевантных сценариях перед принятием решения о внедрении. Это позволяет проверить применимость без обязательств.",
  },
]

export function SecurityFAQ() {
  return (
    <section className="py-20 lg:py-28 bg-background-secondary">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight tracking-tight mb-4 text-balance">
            Частые вопросы enterprise-клиентов
          </h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background/60 rounded-xl border border-white/[0.06] px-6 data-[state=open]:border-primary/20"
            >
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-primary py-5 [&[data-state=open]]:text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-foreground-muted leading-relaxed pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
