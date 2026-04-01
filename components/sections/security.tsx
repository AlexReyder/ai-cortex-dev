"use client"

import { Cloud, Server, HardDrive, Building2, MapPin, Users, Shield, Lock, Key, Eye } from "lucide-react"

const deploymentOptions = [
  {
    icon: Cloud,
    title: "Облако",
    description: "Быстрый старт в защищенном облаке с российской локализацией данных.",
    features: ["Российские ЦОД", "Автомасштабирование", "SLA 99.9%"],
  },
  {
    icon: Server,
    title: "Private Cloud",
    description: "Изолированная облачная среда с расширенным контролем и кастомизацией.",
    features: ["Выделенные ресурсы", "Кастомная конфигурация", "VPN-доступ"],
  },
  {
    icon: HardDrive,
    title: "On-prem",
    description: "Полное развертывание на инфраструктуре клиента с максимальным контролем.",
    features: ["Полный контроль", "Air-gapped среды", "Локальное управление"],
  },
  {
    icon: Building2,
    title: "Контур клиента",
    description: "Гибкие варианты размещения в периметре безопасности заказчика.",
    features: ["Ваш периметр", "Интеграция с SIEM", "Compliance ready"],
  },
]

const securityFeatures = [
  {
    icon: MapPin,
    title: "Российские ЦОД",
    description: "Данные хранятся в сертифицированных дата-центрах на территории РФ",
  },
  {
    icon: Lock,
    title: "Шифрование данных",
    description: "End-to-end шифрование в покое и при передаче по стандартам ГОСТ",
  },
  {
    icon: Users,
    title: "Разграничение доступа",
    description: "Гибкая ролевая модель и политики доступа на уровне организации",
  },
  {
    icon: Key,
    title: "Управление ключами",
    description: "Возможность использования собственных ключей шифрования (BYOK)",
  },
  {
    icon: Shield,
    title: "Аудит и логирование",
    description: "Полный журнал действий для соответствия требованиям безопасности",
  },
  {
    icon: Eye,
    title: "Мониторинг угроз",
    description: "Проактивное обнаружение и реагирование на инциденты безопасности",
  },
]

export function SecuritySection() {
  return (
    <section id="security" className="py-24 bg-background-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Безопасность и варианты развертывания
          </h2>
          <p className="mt-4 text-lg text-foreground-secondary max-w-2xl mx-auto text-pretty">
            Корпоративный уровень защиты данных с гибкими вариантами размещения под требования вашего бизнеса
          </p>
        </div>

        {/* Deployment Options - Equal height cards with strict alignment */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {deploymentOptions.map((option) => (
            <div
              key={option.title}
              className="flex flex-col rounded-2xl border border-card-border bg-card p-6 premium-card h-full"
            >
              {/* Icon - aligned to same top grid */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                <option.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title - consistent spacing */}
              <h3 className="text-lg font-semibold text-foreground mb-2 shrink-0">
                {option.title}
              </h3>

              {/* Description - fixed min height for alignment */}
              <p className="text-sm text-foreground-secondary mb-4 shrink-0 min-h-[48px]">
                {option.description}
              </p>

              {/* Features list - flex-1 to push to consistent spacing */}
              <ul className="space-y-2 mt-auto">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Security Features */}
        <div className="rounded-2xl border border-card-border bg-card p-8">
          <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
            Корпоративная безопасность
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">{feature.title}</h4>
                  <p className="text-sm text-foreground-muted">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
