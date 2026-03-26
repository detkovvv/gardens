import { ShieldCheck, Sparkles, Apple } from "lucide-react"

export function QualitySection() {
  return (
    <section className="bg-green-deep py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sand/70">
            Вкус и качество
          </p>
          <h2 className="mt-4 font-serif text-3xl text-cream md:text-5xl text-balance">
            Настоящий вкус с собственной грядки
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-2xl border border-cream/10 bg-cream/5 p-8 backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-terra/20">
              <ShieldCheck className="h-6 w-6 text-terra" />
            </div>
            <h3 className="mt-6 font-serif text-xl text-cream">
              Без химии
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-sand/80">
              {'"Вы можете быть уверены, что они выращены без химических удобрений, пестицидов и ГМО."'}
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-cream/10 bg-cream/5 p-8 backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-terra/20">
              <Sparkles className="h-6 w-6 text-terra" />
            </div>
            <h3 className="mt-6 font-serif text-xl text-cream">
              Насыщенный вкус
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-sand/80">
              {'"Свежие овощи с собственного огорода обладают насыщенным вкусом и ароматом."'}
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-cream/10 bg-cream/5 p-8 backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-terra/20">
              <Apple className="h-6 w-6 text-terra" />
            </div>
            <h3 className="mt-6 font-serif text-xl text-cream">
              Свежесть урожая
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-sand/80">
              Овощи, собранные прямо с грядки, сохраняют максимум витаминов и полезных веществ для вашей семьи.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
