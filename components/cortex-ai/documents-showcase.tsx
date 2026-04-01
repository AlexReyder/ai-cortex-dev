import Image from "next/image"
import { FileText, Database, GitBranch, CheckCircle } from "lucide-react"

const features = [
  { icon: FileText, text: "Загрузка и хранение документов" },
  { icon: Database, text: "Автоматическое извлечение данных" },
  { icon: GitBranch, text: "Передача в workflow согласования" },
  { icon: CheckCircle, text: "Контроль следующего шага" },
]

export function DocumentsShowcase() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Screenshot - left on desktop */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-2xl shadow-black/30">
              <Image
                src="/images/documents-showcase.png"
                alt="Cortex AI - Документы: извлечение данных, статусы, согласование"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Text content - right on desktop */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Документы, которые включаются в рабочий процесс
            </h2>
            <p className="mt-5 text-lg text-foreground-secondary leading-relaxed">
              Извлечение ключевых данных, работа с шаблонами, передача в workflow согласования и контроль следующего шага без ручной рутины.
            </p>
            
            {/* Feature list */}
            <div className="mt-8 space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-red/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 text-accent-red" />
                  </div>
                  <span className="text-sm text-foreground/90">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
