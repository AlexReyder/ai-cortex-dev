"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Shield, Cloud, Zap, RefreshCw, Lock, Settings } from "lucide-react"
import { CTAButton, useCTAModal } from "@/components/cta-modals"

const trustBullets = [
  { icon: Shield, text: "Российская инфраструктура" },
  { icon: Cloud, text: "Cloud / private cloud / on-prem" },
  { icon: Zap, text: "Быстрый пилот" },
  { icon: RefreshCw, text: "Импортозамещение" },
  { icon: Lock, text: "Enterprise-grade безопасность" },
  { icon: Settings, text: "Адаптация под процессы клиента" },
]

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-[calc(100vh-80px)] flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* Background - Clean dark gradient */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #0a0a0f 0%, #0d0d14 50%, #0a0a0f 100%)"
          }}
        />
        {/* Very subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
        {/* Restrained blue accent glow */}
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full">
        {/* Desktop: 44-46% text / 54-56% visual balance */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Text Block - Left Side (5 cols = ~42%) */}
          <div className="lg:col-span-5 text-center lg:text-left order-2 lg:order-1">
            
            {/* Eyebrow */}
            <div className="animate-on-scroll opacity-0">
              <span className="text-sm font-medium tracking-wide text-primary uppercase">
                Cortex ToDo
              </span>
            </div>

            {/* Headline - Cleaner, slightly smaller, better line breaks */}
            <h1 className="animate-on-scroll opacity-0 stagger-1 mt-4 text-[2.5rem] sm:text-[2.75rem] lg:text-[2.875rem] xl:text-[3.125rem] font-bold tracking-tight leading-[1.12]">
              <span className="text-foreground">Российская </span>
              <span className="gradient-text">AI-native</span>
              <span className="text-foreground"> платформа</span>
              <br className="hidden sm:block" />
              <span className="text-foreground">для управления операционной работой</span>
            </h1>

            {/* Subheadline */}
            <p className="animate-on-scroll opacity-0 stagger-2 mt-6 text-base sm:text-lg text-foreground-secondary leading-relaxed">
              Два продукта в одном технологическом контуре: Cortex AI Agents для AI-автоматизации встреч, коммуникаций, документов и рекомендаций, и ToDo Enterprise для защищенного управления задачами и проектами.
            </p>

            {/* Supporting text */}
            <p className="animate-on-scroll opacity-0 stagger-2 mt-3 text-sm text-foreground-muted leading-relaxed">
              Подходит для SMB, mid-market и компаний, которым нужна прозрачность исполнения, контроль процессов и быстрый переход от обсуждений к действиям.
            </p>

            {/* CTAs - Clean, equal height, aligned */}
            <div className="animate-on-scroll opacity-0 stagger-3 mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <CTAButton
                variant="accent-red"
                size="lg"
                modalType="ai-demo"
              >
                Заказать демо AI
              </CTAButton>
              <CTAButton
                variant="primary"
                size="lg"
                modalType="todo-demo"
              >
                Попробовать ToDo
              </CTAButton>
            </div>

            {/* Secondary CTA */}
            <div className="animate-on-scroll opacity-0 stagger-3 mt-3">
              <CTAButton
                variant="ghost"
                size="sm"
                modalType="implementation"
              >
                Обсудить внедрение
              </CTAButton>
            </div>

            {/* Trust Bullets */}
            <div className="animate-on-scroll opacity-0 stagger-4 mt-10 flex flex-wrap gap-x-4 gap-y-2 justify-center lg:justify-start">
              {trustBullets.map((bullet) => (
                <div
                  key={bullet.text}
                  className="flex items-center gap-1.5 text-xs text-foreground-muted"
                >
                  <bullet.icon className="w-3.5 h-3.5 text-primary/70 shrink-0" />
                  <span>{bullet.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Block - Right Side (7 cols = ~58%) */}
          <div className="lg:col-span-7 relative order-1 lg:order-2">
            
            {/* Subtle integrated glow behind visual - very restrained */}
            <div className="absolute inset-0 -m-8 lg:-m-12">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-primary/6 rounded-full blur-[80px]" />
            </div>
            
            {/* Product Visual Container - Premium framed presentation */}
            <div className="animate-on-scroll opacity-0 relative">
              
              {/* Premium rounded container / frame */}
              <div 
                className="relative rounded-3xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(248, 250, 252, 0.95) 0%, rgba(241, 245, 249, 0.92) 100%)",
                  boxShadow: `
                    0 0 0 1px rgba(0, 0, 0, 0.04),
                    0 4px 6px rgba(0, 0, 0, 0.04),
                    0 12px 24px rgba(0, 0, 0, 0.08),
                    0 32px 64px rgba(0, 0, 0, 0.12)
                  `,
                  padding: "20px 20px 16px 20px"
                }}
              >
                {/* Subtle inner border highlight */}
                <div 
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 0 0 1px rgba(255, 255, 255, 0.4)"
                  }}
                />
                
                {/* Product Screenshot - embedded neatly */}
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/images/kanban.png"
                    alt="Cortex ToDo - современный интерфейс управления задачами с Kanban-доской, трекером проектов и мобильным приложением"
                    width={800}
                    height={560}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>

              {/* Micro-badges - Grouped in one coherent vertical cluster (Option A) */}
              <div className="absolute -left-2 lg:-left-4 top-8 z-20 hidden sm:flex flex-col gap-2">
                <div className="px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-md border border-white/[0.08] shadow-lg">
                  <span className="text-[11px] font-medium text-foreground-secondary">Русский интерфейс</span>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-md border border-white/[0.08] shadow-lg">
                  <span className="text-[11px] font-medium text-foreground-secondary">Kanban / Scrum / Roadmap</span>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-md border border-primary/20 shadow-lg">
                  <span className="text-[11px] font-medium text-primary/90">On-prem / Private Cloud</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
