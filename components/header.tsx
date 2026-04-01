"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { CTAButton, useCTAModal } from "@/components/cta-modals"

const navigation = [
  {
    name: "Продукты",
    href: "#products",
    dropdown: [
      { name: "Cortex AI Agents", href: "/cortex-ai" },
      { name: "ToDo Enterprise", href: "/todo-enterprise" },
    ],
  },
  {
    name: "Решения",
    href: "/solutions",
    dropdown: [
      { name: "По командам", href: "/solutions#teams" },
      { name: "По отраслям", href: "/solutions#industries" },
      { name: "Импортозамещение", href: "/solutions#import-substitution" },
    ],
  },
  { name: "Демо", href: "/demo" },
  { name: "Кейсы", href: "/cases" },
  { name: "Сравнение", href: "/compare" },
  { name: "Безопасность", href: "/security" },
  { name: "Компания", href: "/about" },
  { name: "Контакты", href: "/contacts" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-white/[0.04]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - 40% larger for stronger brand presence */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/cortex-todo-logo.svg"
              alt="Cortex ToDo"
              width={220}
              height={56}
              className="h-[38px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - compact spacing to fit all items */}
          <nav className="hidden lg:flex items-center">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-2.5 py-1.5 text-[13px] text-foreground-muted hover:text-foreground transition-colors duration-150 whitespace-nowrap"
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className="w-3 h-3 opacity-40" />
                  )}
                </Link>

                {/* Dropdown */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                    <div className="bg-background/95 backdrop-blur-xl rounded-lg border border-white/[0.06] p-1.5 min-w-[180px] shadow-xl shadow-black/20">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-2 text-[13px] text-foreground-secondary hover:text-foreground hover:bg-white/[0.04] rounded-md transition-colors duration-150"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side - light secondary link + primary CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <Link
              href="/todo-enterprise"
              className="text-[13px] text-foreground-muted hover:text-foreground transition-colors duration-150 whitespace-nowrap"
            >
              Попробовать ToDo
            </Link>
            <CTAButton
              variant="accent-red"
              size="sm"
              modalType="ai-demo"
              className="h-7 px-3.5 text-[12px]"
            >
              Заказать демо AI
            </CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-1.5 text-foreground-secondary hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - premium dark overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-white/[0.04]">
          <div className="mx-auto max-w-6xl px-6 py-4">
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2.5 text-[15px] text-foreground-secondary hover:text-foreground transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-3 border-l border-white/[0.06] pl-3">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-2 text-[13px] text-foreground-muted hover:text-foreground transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/[0.04]">
              <CTAButton
                variant="secondary"
                size="md"
                modalType="todo-demo"
                className="w-full h-10 text-[13px]"
              >
                Попробовать ToDo
              </CTAButton>
              <CTAButton
                variant="accent-red"
                size="md"
                modalType="ai-demo"
                className="w-full h-10 text-[13px]"
              >
                Заказать демо AI
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
