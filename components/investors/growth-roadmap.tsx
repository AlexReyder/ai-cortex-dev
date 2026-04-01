"use client"

import { Target, Layers, Sparkles } from "lucide-react"

const roadmapStages = [
  {
    stage: "Stage 1",
    icon: Target,
    title: "ToDo Enterprise wedge",
    text: "Захват спроса на локальную secure task/project platform.",
    status: "Current",
    statusColor: "bg-green-500",
  },
  {
    stage: "Stage 2",
    icon: Layers,
    title: "Ecosystem expansion",
    text: "ToDo.corp и ToDo.doc расширяют платформу в enterprise interaction and knowledge layers.",
    status: "Roadmap",
    statusColor: "bg-primary",
  },
  {
    stage: "Stage 3",
    icon: Sparkles,
    title: "Operational intelligence layer",
    text: "Поверх платформы возможно дальнейшее развитие AI-native operational scenarios.",
    status: "Future",
    statusColor: "bg-foreground-muted",
  },
]

export function GrowthRoadmap() {
  return (
    <section className="py-20 lg:py-28 bg-background-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground-dark leading-tight mb-4 text-balance">
            Как выглядит траектория роста
          </h2>
        </div>

        {/* 3 stage cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {roadmapStages.map((stage, index) => (
            <div
              key={index}
              className="flex flex-col p-6 rounded-xl bg-white border border-border-light hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-foreground-dark-secondary uppercase tracking-wider">
                  {stage.stage}
                </span>
                <span className={`px-2 py-1 rounded-full text-[10px] font-medium text-white ${stage.statusColor}`}>
                  {stage.status}
                </span>
              </div>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                <stage.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground-dark mb-2">
                {stage.title}
              </h3>
              <p className="text-sm text-foreground-dark-secondary leading-relaxed flex-1">
                {stage.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
