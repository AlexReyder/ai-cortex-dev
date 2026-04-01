import Image from "next/image"
import {
  Kanban,
  Map,
  FolderKanban,
  Clock,
  Users,
  MessageSquare,
  Paperclip,
  Bell,
  BarChart3,
  GitBranch,
  Package,
  Smartphone,
  Globe,
  Server,
} from "lucide-react"

const capabilities = [
  { icon: Kanban, text: "Kanban / Scrum boards" },
  { icon: Map, text: "Timeline / roadmap boards" },
  { icon: FolderKanban, text: "Проекты и коллекции" },
  { icon: Clock, text: "Сроки выполнения" },
  { icon: Users, text: "Один или несколько исполнителей" },
  { icon: MessageSquare, text: "Комментарии" },
  { icon: Paperclip, text: "Вложения" },
  { icon: Bell, text: "Уведомления в реальном времени" },
  { icon: BarChart3, text: "Оценка эффективности" },
  { icon: GitBranch, text: "Управление версиями" },
  { icon: Package, text: "Управление релизами" },
  { icon: Smartphone, text: "Mobile apps" },
  { icon: Globe, text: "Web interface" },
  { icon: Server, text: "Server architecture" },
]

export function CapabilitiesSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
            Все ключевые инструменты в единой системе
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left column - Capabilities grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              {capabilities.map((cap, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-background-secondary border border-border hover:border-primary/20 transition-colors"
                >
                  <cap.icon className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground-secondary">{cap.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Product image */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Ambient glow */}
              <div className="absolute -inset-6 bg-primary/5 rounded-2xl blur-2xl" />
              
              {/* Image container */}
              <div className="relative rounded-xl overflow-hidden shadow-xl shadow-black/15 border border-white/5">
                <Image
                  src="/images/kanban.png"
                  alt="ToDo Enterprise интерфейс с Kanban-доской и трекером задач"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
