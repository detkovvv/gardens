import { MapPin, Phone, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer id="contacts" className="bg-graphite py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl tracking-wide text-cream">
              {'ОГОРОДЫ'}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand/60">
              Клуб загородного огородничества в 10 км от Краснодара. Для души и для стола.
            </p>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-sand/50">
              Контакты
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-terra" />
                <span className="text-sm text-sand/80">10 км от Краснодара</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-terra" />
                <span className="text-sm text-sand/80">По запросу</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-terra" />
                <span className="text-sm text-sand/80">По запросу</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-sand/50">
              Навигация
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a href="#philosophy" className="text-sm text-sand/80 transition-colors hover:text-cream">
                  Философия
                </a>
              </li>
              <li>
                <a href="#infrastructure" className="text-sm text-sand/80 transition-colors hover:text-cream">
                  Инфраструктура
                </a>
              </li>
              <li>
                <a href="#calculator" className="text-sm text-sand/80 transition-colors hover:text-cream">
                  Калькулятор
                </a>
              </li>
              <li>
                <a href="#application" className="text-sm text-sand/80 transition-colors hover:text-cream">
                  Заявка
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-8 text-center">
          <p className="text-xs text-sand/40">
            {"\u00a9 2026 \u041E\u0433\u043E\u0440\u043E\u0434\u044B. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B."}
          </p>
        </div>
      </div>
    </footer>
  )
}
