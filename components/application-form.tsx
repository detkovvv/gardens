"use client"

import { FormEvent, useState } from "react"
import { Send, CheckCircle } from "lucide-react"

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="application" className="bg-graphite py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-terra">
            Заявка
          </p>
          <h2 className="mt-4 font-serif text-3xl text-cream md:text-5xl text-balance">
            Начните просто
          </h2>
          <p className="mt-4 text-base leading-relaxed text-sand/70">
            Оставьте заявку, и мы свяжемся с вами для обсуждения деталей.
          </p>
        </div>

        {submitted ? (
          <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-cream/10 bg-cream/5 p-12 text-center">
            <CheckCircle className="h-12 w-12 text-green-deep" />
            <h3 className="font-serif text-xl text-cream">Заявка отправлена</h3>
            <p className="text-sm text-sand/70">
              Мы свяжемся с вами в ближайшее время.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-medium uppercase tracking-wider text-sand/60">
                  Имя
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Ваше имя"
                  className="rounded-xl border border-cream/10 bg-cream/5 px-4 py-3 text-sm text-cream placeholder:text-sand/40 focus:border-green-deep focus:outline-none focus:ring-1 focus:ring-green-deep"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-xs font-medium uppercase tracking-wider text-sand/60">
                  Телефон
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+7 (___) ___-__-__"
                  className="rounded-xl border border-cream/10 bg-cream/5 px-4 py-3 text-sm text-cream placeholder:text-sand/40 focus:border-green-deep focus:outline-none focus:ring-1 focus:ring-green-deep"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-sand/60">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                className="rounded-xl border border-cream/10 bg-cream/5 px-4 py-3 text-sm text-cream placeholder:text-sand/40 focus:border-green-deep focus:outline-none focus:ring-1 focus:ring-green-deep"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="plot-size" className="text-xs font-medium uppercase tracking-wider text-sand/60">
                Предпочитаемый размер участка
              </label>
              <select
                id="plot-size"
                name="plotSize"
                className="rounded-xl border border-cream/10 bg-cream/5 px-4 py-3 text-sm text-cream focus:border-green-deep focus:outline-none focus:ring-1 focus:ring-green-deep"
              >
                <option value="" className="text-graphite">Выберите размер</option>
                <option value="3" className="text-graphite">3 сотки</option>
                <option value="5" className="text-graphite">5 соток</option>
                <option value="7" className="text-graphite">7 соток</option>
                <option value="individual" className="text-graphite">Индивидуально</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="comment" className="text-xs font-medium uppercase tracking-wider text-sand/60">
                Комментарий
              </label>
              <textarea
                id="comment"
                name="comment"
                rows={4}
                placeholder="Расскажите о ваших пожеланиях..."
                className="rounded-xl border border-cream/10 bg-cream/5 px-4 py-3 text-sm text-cream placeholder:text-sand/40 focus:border-green-deep focus:outline-none focus:ring-1 focus:ring-green-deep resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-terra px-8 py-4 text-sm font-semibold text-accent-foreground transition-colors hover:bg-terra/90"
            >
              <Send className="h-4 w-4" />
              Отправить заявку
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
