"use client"

import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  products: {
    title: "Продукты",
    links: [
      { name: "Cortex AI Agents", href: "#ai-agents" },
      { name: "ToDo Enterprise", href: "/todo-enterprise" },
    ],
  },
  solutions: {
    title: "Решения",
    links: [
      { name: "По командам", href: "/solutions#teams" },
      { name: "По отраслям", href: "/solutions#industries" },
      { name: "Импортозамещение", href: "/solutions#import-substitution" },
      { name: "Кастомизация", href: "/solutions#customization" },
    ],
  },
  demo: {
    title: "Демо / Пилот",
    links: [
      { name: "Запросить демо", href: "/demo" },
      { name: "Демо-стенд", href: "/demo" },
      { name: "Обсудить пилот", href: "/demo" },
      { name: "Миграция", href: "/demo" },
    ],
  },
  cases: {
    title: "Кейсы",
    links: [
      { name: "Импортозамещение", href: "/cases#migration-case" },
      { name: "Проектный офис", href: "/cases#pmo-case" },
      { name: "IT команды", href: "/cases#it-case" },
      { name: "Безопасность", href: "/cases#security-case" },
    ],
  },
  compare: {
    title: "Сравнение",
    links: [
      { name: "ToDo vs Jira", href: "/compare#vs-jira" },
      { name: "ToDo vs Trello", href: "/compare#vs-trello" },
      { name: "ToDo vs Asana", href: "/compare#vs-asana" },
      { name: "Таблица сравнения", href: "/compare" },
    ],
  },
  security: {
    title: "Безопасность",
    links: [
      { name: "Варианты развертывания", href: "/security" },
      { name: "Соответствие требованиям", href: "/security" },
      { name: "Защита данных", href: "/security" },
    ],
  },
  partners: {
    title: "Партнерам",
    links: [
      { name: "Партнерская программа", href: "/partners" },
      { name: "Интеграторам", href: "/partners" },
      { name: "Консультантам", href: "/partners" },
    ],
  },
  company: {
    title: "О компании",
    links: [
      { name: "О нас", href: "/about" },
      { name: "Карьера", href: "#" },
      { name: "Новости", href: "#" },
    ],
  },
  investors: {
    title: "Инвесторам",
    links: [
      { name: "Investment Thesis", href: "/investors" },
      { name: "Связаться", href: "/investors" },
    ],
  },
  contacts: {
    title: "Контакты",
    links: [
      { name: "Связаться", href: "/contacts" },
      { name: "Поддержка", href: "/contacts" },
    ],
  },
}

export function Footer() {
  return (
    <footer id="contacts" className="bg-background border-t border-card-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-foreground mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-foreground-secondary hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-card-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Image
                src="/cortex-todo-logo.svg"
                alt="Cortex ToDo"
                width={140}
                height={40}
                className="h-7 w-auto"
              />
            </div>

            <p className="text-sm text-foreground-muted text-center md:text-left">
              Cortex ToDo — российская AI-native платформа для управления бизнесом
            </p>

            <div className="flex items-center gap-4 text-sm text-foreground-muted">
              <Link href="#" className="hover:text-foreground transition-colors">
                Политика конфиденциальности
              </Link>
              <span className="hidden md:inline">·</span>
              <span>© 2026</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
