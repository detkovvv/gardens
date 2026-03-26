import { Leaf, Heart, Sun } from "lucide-react"

export function PhilosophySection() {
  return (
    <section id="philosophy" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-terra">
            Философия
          </p>
          <h2 className="mt-4 font-serif text-3xl text-graphite md:text-5xl text-balance">
            Для души и для стола
          </h2>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260225_223544_960-D1iHZcrnS8HpPXpH5TIuJgIzMyEQkk.jpg"
              alt="Ухоженные клубные грядки с живой изгородью"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-8">
            <blockquote className="border-l-4 border-green-deep pl-6">
              <p className="text-lg leading-relaxed text-graphite">
                {'"В условиях городской жизни всё больше людей стремятся к природе и здоровому образу жизни. Огороды — это прекрасное современное хобби, которое объединяет пользу для здоровья, удовольствие от процесса и возможность проводить время на свежем воздухе."'}
              </p>
            </blockquote>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-deep/10">
                  <Leaf className="h-5 w-5 text-green-deep" />
                </div>
                <div>
                  <h3 className="font-medium text-graphite">Связь с природой</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Возможность проводить время на свежем воздухе, вдали от городской суеты.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-deep/10">
                  <Heart className="h-5 w-5 text-green-deep" />
                </div>
                <div>
                  <h3 className="font-medium text-graphite">Здоровый образ жизни</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Физическая активность на свежем воздухе и собственные экологически чистые продукты.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-deep/10">
                  <Sun className="h-5 w-5 text-green-deep" />
                </div>
                <div>
                  <h3 className="font-medium text-graphite">Семейное хобби</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Совместное времяпрепровождение, которое объединяет семью вокруг общего дела.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
