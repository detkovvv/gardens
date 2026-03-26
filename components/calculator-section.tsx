"use client"

import { useState, useMemo } from "react"
import {
  ChevronRight,
  ChevronLeft,
  Ruler,
  Settings,
  Headphones,
  Check,
  Armchair,
  Archive,
  Tent,
  Users,
  Footprints,
  Fence,
  CloudSun,
  Sprout,
  HandHelping,
  Package,
  Truck,
} from "lucide-react"

/* ---------- data ---------- */

type PlotSize = "3" | "5" | "7" | "individual"

const plotLabels: Record<PlotSize, string> = {
  "3": "3 сотки",
  "5": "5 соток",
  "7": "7 соток",
  individual: "Индивидуально",
}

const equipmentOptions = [
  { id: "rest-zone", label: "Зона отдыха 20 м\u00b2", icon: Armchair },
  { id: "storage", label: "Шкаф для инвентаря", icon: Archive },
  { id: "tent", label: "Палатка / шатёр", icon: Tent },
  { id: "gazebo", label: "Беседка 4/6 чел.", icon: Users },
  { id: "paths", label: "Антискользящие дорожки", icon: Footprints },
  { id: "fence", label: "Ограждение из ДПК", icon: Fence },
  { id: "shade-net", label: "Затемняющая сетка", icon: CloudSun },
]

const serviceOptions = [
  { id: "agronomist", label: "Консультация агронома", icon: Sprout },
  { id: "planting-help", label: "Помощь в посадке", icon: HandHelping },
  { id: "maintenance", label: "Уход в отсутствие", icon: HandHelping },
  { id: "tool-storage", label: "Хранение инвентаря", icon: Package },
  { id: "delivery", label: "Доставка урожая", icon: Truck },
]

function getMembershipLevel(equipCount: number, serviceCount: number): string {
  const total = equipCount + serviceCount
  if (total <= 1) return "Green Member"
  if (total <= 4) return "Club Member"
  return "Private Reserve"
}

function getMembershipColor(level: string) {
  switch (level) {
    case "Green Member":
      return "bg-green-deep/10 text-green-deep border-green-deep/20"
    case "Club Member":
      return "bg-earth/10 text-earth border-earth/20"
    case "Private Reserve":
      return "bg-terra/10 text-terra border-terra/20"
    default:
      return "bg-sand text-graphite border-sand"
  }
}

/* ---------- component ---------- */

export function CalculatorSection() {
  const [step, setStep] = useState(0)
  const [plotSize, setPlotSize] = useState<PlotSize>("3")
  const [equipment, setEquipment] = useState<Set<string>>(new Set())
  const [services, setServices] = useState<Set<string>>(new Set())

  const toggleSet = (
    set: Set<string>,
    setter: React.Dispatch<React.SetStateAction<Set<string>>>,
    id: string
  ) => {
    const next = new Set(set)
    if (next.has(id)) next.delete(id)
    else next.add(id)
    setter(next)
  }

  const membershipLevel = useMemo(
    () => getMembershipLevel(equipment.size, services.size),
    [equipment.size, services.size]
  )

  const steps = [
    { label: "Участок", icon: Ruler },
    { label: "Оснащение", icon: Settings },
    { label: "Сервис", icon: Headphones },
    { label: "Итог", icon: Check },
  ]

  const canNext = step < 3
  const canPrev = step > 0

  return (
    <section id="calculator" className="bg-sand/40 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-terra">
            Калькулятор
          </p>
          <h2 className="mt-4 font-serif text-3xl text-graphite md:text-5xl text-balance">
            Рассчитайте формат участия
          </h2>
        </div>

        {/* Progress bar */}
        <div className="mt-12 flex items-center justify-between">
          {steps.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setStep(i)}
              className="flex flex-col items-center gap-2"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors ${
                  i <= step
                    ? "border-green-deep bg-green-deep text-primary-foreground"
                    : "border-sand bg-card text-muted-foreground"
                }`}
              >
                <s.icon className="h-4 w-4" />
              </div>
              <span
                className={`text-xs font-medium transition-colors ${
                  i <= step ? "text-green-deep" : "text-muted-foreground"
                }`}
              >
                {s.label}
              </span>
            </button>
          ))}
        </div>

        {/* Step connector line */}
        <div className="relative mx-auto mt-[-36px] mb-8 h-0.5 bg-sand" style={{ width: "75%", zIndex: 0 }}>
          <div
            className="absolute left-0 top-0 h-full bg-green-deep transition-all"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* Step content */}
        <div className="mt-8 rounded-2xl border border-sand bg-card p-8">
          {/* Step 0: Plot size */}
          {step === 0 && (
            <div>
              <h3 className="font-serif text-xl text-graphite">Выберите размер участка</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Определите площадь, которая подойдёт для ваших целей.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {(Object.keys(plotLabels) as PlotSize[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setPlotSize(key)}
                    className={`rounded-xl border-2 p-4 text-left transition-all ${
                      plotSize === key
                        ? "border-green-deep bg-green-deep/5"
                        : "border-sand bg-cream/50 hover:border-green-deep/30"
                    }`}
                  >
                    <span
                      className={`text-sm font-semibold ${
                        plotSize === key ? "text-green-deep" : "text-graphite"
                      }`}
                    >
                      {plotLabels[key]}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 1: Equipment */}
          {step === 1 && (
            <div>
              <h3 className="font-serif text-xl text-graphite">Оснащение участка</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Базовое оснащение включено. Выберите дополнительные опции.
              </p>
              <div className="mt-2 mb-4 inline-flex items-center gap-2 rounded-lg bg-green-deep/10 px-3 py-1.5 text-xs font-medium text-green-deep">
                <Check className="h-3.5 w-3.5" />
                Базовое оснащение включено
              </div>
              <div className="flex flex-col gap-3">
                {equipmentOptions.map((opt) => {
                  const selected = equipment.has(opt.id)
                  return (
                    <button
                      key={opt.id}
                      onClick={() => toggleSet(equipment, setEquipment, opt.id)}
                      className={`flex items-center gap-4 rounded-xl border-2 p-4 text-left transition-all ${
                        selected
                          ? "border-green-deep bg-green-deep/5"
                          : "border-sand bg-cream/50 hover:border-green-deep/30"
                      }`}
                    >
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
                          selected ? "bg-green-deep/15" : "bg-sand/60"
                        }`}
                      >
                        <opt.icon className={`h-4 w-4 ${selected ? "text-green-deep" : "text-muted-foreground"}`} />
                      </div>
                      <span className={`text-sm font-medium ${selected ? "text-green-deep" : "text-graphite"}`}>
                        {opt.label}
                      </span>
                      {selected && <Check className="ml-auto h-4 w-4 text-green-deep" />}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Step 2: Services */}
          {step === 2 && (
            <div>
              <h3 className="font-serif text-xl text-graphite">Сервисные услуги</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Выберите дополнительные услуги агро-сервиса клуба.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                {serviceOptions.map((opt) => {
                  const selected = services.has(opt.id)
                  return (
                    <button
                      key={opt.id}
                      onClick={() => toggleSet(services, setServices, opt.id)}
                      className={`flex items-center gap-4 rounded-xl border-2 p-4 text-left transition-all ${
                        selected
                          ? "border-green-deep bg-green-deep/5"
                          : "border-sand bg-cream/50 hover:border-green-deep/30"
                      }`}
                    >
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
                          selected ? "bg-green-deep/15" : "bg-sand/60"
                        }`}
                      >
                        <opt.icon className={`h-4 w-4 ${selected ? "text-green-deep" : "text-muted-foreground"}`} />
                      </div>
                      <span className={`text-sm font-medium ${selected ? "text-green-deep" : "text-graphite"}`}>
                        {opt.label}
                      </span>
                      {selected && <Check className="ml-auto h-4 w-4 text-green-deep" />}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Step 3: Summary */}
          {step === 3 && (
            <div>
              <h3 className="font-serif text-xl text-graphite">Ваш формат участия</h3>

              {/* Membership badge */}
              <div className="mt-6 flex items-center gap-3">
                <span
                  className={`inline-flex rounded-full border px-4 py-1.5 text-sm font-semibold ${getMembershipColor(
                    membershipLevel
                  )}`}
                >
                  {membershipLevel}
                </span>
              </div>

              {/* Summary */}
              <div className="mt-6 flex flex-col gap-4">
                <div className="rounded-xl bg-cream/70 p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Участок</p>
                  <p className="mt-1 text-sm font-semibold text-graphite">{plotLabels[plotSize]}</p>
                </div>

                {equipment.size > 0 && (
                  <div className="rounded-xl bg-cream/70 p-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Оснащение</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {equipmentOptions
                        .filter((o) => equipment.has(o.id))
                        .map((o) => (
                          <span
                            key={o.id}
                            className="inline-flex rounded-full bg-green-deep/10 px-3 py-1 text-xs font-medium text-green-deep"
                          >
                            {o.label}
                          </span>
                        ))}
                    </div>
                  </div>
                )}

                {services.size > 0 && (
                  <div className="rounded-xl bg-cream/70 p-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Сервис</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {serviceOptions
                        .filter((o) => services.has(o.id))
                        .map((o) => (
                          <span
                            key={o.id}
                            className="inline-flex rounded-full bg-terra/10 px-3 py-1 text-xs font-medium text-terra"
                          >
                            {o.label}
                          </span>
                        ))}
                    </div>
                  </div>
                )}

                <p className="text-xs text-muted-foreground">
                  Стоимость рассчитывается индивидуально. Оставьте заявку, и мы подготовим для вас персональное предложение.
                </p>
              </div>

              <a
                href="#application"
                className="mt-8 flex w-full items-center justify-center rounded-xl bg-terra px-6 py-4 text-sm font-semibold text-accent-foreground transition-colors hover:bg-terra/90"
              >
                Отправить заявку
              </a>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={() => canPrev && setStep(step - 1)}
            disabled={!canPrev}
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-graphite transition-colors hover:bg-sand/60 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-4 w-4" />
            Назад
          </button>
          {canNext && (
            <button
              onClick={() => setStep(step + 1)}
              className="flex items-center gap-2 rounded-lg bg-green-deep px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-green-deep/90"
            >
              Далее
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
