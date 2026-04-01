"use client"

import { Crown, Users, UserCheck, Building } from "lucide-react"

const audiences = [
  {
    icon: Crown,
    title: "Руководители и CEO",
    description: "Загрузка команды. Риски по задачам. Follow-up по встречам. Прозрачность без ежедневных статус-митингов.",
  },
  {
    icon: Users,
    title: "Тимлиды",
    description: "Контроль исполнения без микроменеджмента. Summary по встречам и переписки в одном месте.",
  },
  {
    icon: UserCheck,
    title: "Сотрудники",
    description: "Меньше рутины. AI помогает с документами, встречами и задачами. Больше времени на работу.",
  },
  {
    icon: Building,
    title: "SMB и mid-market",
    description: "Быстрый старт. Пилот за недели. Результат с первого месяца использования.",
  },
]

export function WhoItIsFor() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Для кого
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <audience.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {audience.title}
                </h3>
                <p className="text-sm text-foreground-secondary/90 leading-relaxed">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}
