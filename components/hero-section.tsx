import { ArrowDown } from "lucide-react"

const HERO_IMAGE =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260225_223448_090-4cn6tQSja2X1tslLuyECKwXSQILl0H.jpg"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt={"Ухоженные грядки клуба Огороды с подсолнечниками и зеленью"}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 via-graphite/40 to-graphite/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 md:pb-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-cream/20 bg-graphite/60 px-4 py-1.5 text-sm font-medium tracking-wide text-cream backdrop-blur-md">
            {"10 \u043A\u043C \u043E\u0442 \u041A\u0440\u0430\u0441\u043D\u043E\u0434\u0430\u0440\u0430"}
          </span>
          <h1 className="mt-6 font-serif text-5xl leading-tight text-cream md:text-7xl md:leading-tight">
            {"\u041E\u0433\u043E\u0440\u043E\u0434\u044B"}
          </h1>
          <p className="mt-6 inline-block max-w-lg rounded-xl border border-cream/10 bg-graphite/50 px-5 py-3 text-lg leading-relaxed text-cream/95 backdrop-blur-md">
            {"\u0412\u0430\u0448 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0443\u0447\u0430\u0441\u0442\u043E\u043A \u0441 \u043F\u043E\u043B\u043D\u043E\u0439 \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u043E\u0439 \u0438 \u0437\u0430\u0431\u043E\u0442\u043B\u0438\u0432\u044B\u043C \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u043C."}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#calculator"
              className="inline-flex items-center justify-center rounded-lg bg-terra px-8 py-4 text-base font-medium text-accent-foreground transition-colors hover:bg-terra/90"
            >
              {"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0444\u043E\u0440\u043C\u0430\u0442 \u0443\u0447\u0430\u0441\u0442\u0438\u044F"}
            </a>
            <a
              href="#philosophy"
              className="inline-flex items-center justify-center rounded-lg border border-cream/30 bg-cream/10 px-8 py-4 text-base font-medium text-cream backdrop-blur-sm transition-colors hover:bg-cream/20"
            >
              {"\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435"}
            </a>
          </div>
        </div>

        <div className="mt-16 flex justify-center md:mt-20">
          <a
            href="#philosophy"
            className="animate-bounce text-cream/50 transition-colors hover:text-cream"
            aria-label={"\u041F\u0440\u043E\u043A\u0440\u0443\u0442\u0438\u0442\u044C \u0432\u043D\u0438\u0437"}
          >
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
