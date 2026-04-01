"use client"

import { CheckCircle2, Minus, Circle } from "lucide-react"

type FeatureStatus = "full" | "partial" | "no" | "limited"

interface Feature {
  name: string
  todo: FeatureStatus
  jira: FeatureStatus
  trello: FeatureStatus
  asana: FeatureStatus
  tracker: FeatureStatus
}

const features: Feature[] = [
  { name: "Kanban / Scrum boards", todo: "full", jira: "full", trello: "full", asana: "full", tracker: "full" },
  { name: "Timeline / roadmap", todo: "full", jira: "full", trello: "partial", asana: "full", tracker: "partial" },
  { name: "Управление проектами", todo: "full", jira: "full", trello: "partial", asana: "full", tracker: "full" },
  { name: "Сроки и исполнители", todo: "full", jira: "full", trello: "full", asana: "full", tracker: "full" },
  { name: "Комментарии и вложения", todo: "full", jira: "full", trello: "full", asana: "full", tracker: "full" },
  { name: "Web + mobile", todo: "full", jira: "full", trello: "full", asana: "full", tracker: "full" },
  { name: "Server / on-prem", todo: "full", jira: "partial", trello: "no", asana: "no", tracker: "no" },
  { name: "Private cloud", todo: "full", jira: "partial", trello: "no", asana: "no", tracker: "partial" },
  { name: "Российский контур размещения", todo: "full", jira: "no", trello: "no", asana: "no", tracker: "full" },
  { name: "Migration-friendly adoption", todo: "full", jira: "partial", trello: "limited", asana: "limited", tracker: "partial" },
  { name: "Адаптация под требования клиента", todo: "full", jira: "partial", trello: "no", asana: "no", tracker: "partial" },
  { name: "Workflow customization", todo: "full", jira: "full", trello: "partial", asana: "partial", tracker: "partial" },
  { name: "Release / version management", todo: "full", jira: "full", trello: "no", asana: "partial", tracker: "partial" },
  { name: "Distributed team support", todo: "full", jira: "full", trello: "full", asana: "full", tracker: "full" },
]

function StatusIcon({ status }: { status: FeatureStatus }) {
  switch (status) {
    case "full":
      return <CheckCircle2 className="w-5 h-5 text-emerald-500" />
    case "partial":
      return <Circle className="w-5 h-5 text-amber-500" />
    case "limited":
      return <Circle className="w-5 h-5 text-foreground-muted" />
    case "no":
      return <Minus className="w-5 h-5 text-foreground-muted/50" />
  }
}

export function FeatureTable() {
  return (
    <section className="py-20 lg:py-28 bg-background-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground-dark mb-4 text-balance">
            Сравнение возможностей
          </h2>
        </div>

        {/* Table container with horizontal scroll on mobile */}
        <div className="overflow-x-auto rounded-xl border border-border-light bg-white">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-border-light">
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground-dark">
                  Возможность
                </th>
                <th className="py-4 px-4 text-center">
                  <div className="inline-flex flex-col items-center">
                    <span className="text-sm font-semibold text-primary">ToDo Enterprise</span>
                    <span className="text-xs text-primary/70 mt-0.5">Рекомендуем</span>
                  </div>
                </th>
                <th className="py-4 px-4 text-center text-sm font-medium text-foreground-dark-secondary">Jira</th>
                <th className="py-4 px-4 text-center text-sm font-medium text-foreground-dark-secondary">Trello</th>
                <th className="py-4 px-4 text-center text-sm font-medium text-foreground-dark-secondary">Asana</th>
                <th className="py-4 px-4 text-center text-sm font-medium text-foreground-dark-secondary">Tracker</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className={`border-b border-border-light/50 last:border-0 ${
                    index % 2 === 0 ? "bg-white" : "bg-background-light-secondary/30"
                  }`}
                >
                  <td className="py-4 px-6 text-sm text-foreground-dark">
                    {feature.name}
                  </td>
                  <td className="py-4 px-4 text-center bg-primary/[0.03]">
                    <div className="flex justify-center">
                      <StatusIcon status={feature.todo} />
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex justify-center">
                      <StatusIcon status={feature.jira} />
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex justify-center">
                      <StatusIcon status={feature.trello} />
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex justify-center">
                      <StatusIcon status={feature.asana} />
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex justify-center">
                      <StatusIcon status={feature.tracker} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span className="text-xs text-foreground-dark-secondary">Полная поддержка</span>
          </div>
          <div className="flex items-center gap-2">
            <Circle className="w-4 h-4 text-amber-500" />
            <span className="text-xs text-foreground-dark-secondary">Частичная поддержка</span>
          </div>
          <div className="flex items-center gap-2">
            <Minus className="w-4 h-4 text-foreground-muted/50" />
            <span className="text-xs text-foreground-dark-secondary">Не поддерживается</span>
          </div>
        </div>
      </div>
    </section>
  )
}
