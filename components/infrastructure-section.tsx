import {
  Shield,
  Droplets,
  Zap,
  Lightbulb,
  Car,
  Tent,
  Wifi,
  Wrench,
  Users,
  Sprout,
  HandHelping,
  Package,
} from "lucide-react"

const infraServices = [
  { icon: Shield, label: "Охрана территории", description: "Круглосуточная охрана и видеонаблюдение" },
  { icon: Droplets, label: "Система полива", description: "Точки полива на каждом участке" },
  { icon: Zap, label: "Электроснабжение", description: "Подключение к электросети" },
  { icon: Lightbulb, label: "Освещение", description: "Освещение общих зон и дорожек" },
  { icon: Car, label: "Парковка", description: "Удобная парковка для членов клуба" },
  { icon: Tent, label: "Беседки", description: "Зоны отдыха с беседками" },
  { icon: Wifi, label: "Wi-Fi", description: "Беспроводной интернет на территории" },
  { icon: Wrench, label: "Базовый инвентарь", description: "Необходимые инструменты в доступе" },
]

const agroServices = [
  { icon: Sprout, label: "Помощь в старте", description: "Сопровождение при первой посадке и обустройстве участка" },
  { icon: Users, label: "Консультация агронома", description: "Профессиональные рекомендации по выращиванию" },
  { icon: HandHelping, label: "Уход в отсутствие", description: "Обслуживание участка, когда вы не можете приехать" },
  { icon: Package, label: "Хранение инвентаря", description: "Безопасное хранение ваших инструментов на территории" },
]

export function InfrastructureSection() {
  return (
    <section id="infrastructure" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-terra">
            Инфраструктура
          </p>
          <h2 className="mt-4 font-serif text-3xl text-graphite md:text-5xl text-balance">
            Всё продумано за вас
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Полноценная инфраструктура для комфортного огородничества. Приезжайте и занимайтесь только тем, что приносит удовольствие.
          </p>
        </div>

        {/* Infrastructure grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {infraServices.map((service) => (
            <div
              key={service.label}
              className="group flex flex-col items-center rounded-xl border border-sand bg-card p-6 text-center transition-all hover:border-green-deep/20 hover:shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-deep/10 transition-colors group-hover:bg-green-deep/15">
                <service.icon className="h-5 w-5 text-green-deep" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-graphite">{service.label}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Agro-service block */}
        <div className="mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-terra">
              Агро-сервис клуба
            </p>
            <h3 className="mt-4 font-serif text-2xl text-graphite md:text-3xl">
              Дополнительные услуги
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Опциональные сервисы для тех, кто хочет получить максимум от своего участка.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {agroServices.map((service) => (
              <div
                key={service.label}
                className="flex items-start gap-4 rounded-xl border border-sand bg-card p-6 transition-all hover:border-green-deep/20 hover:shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-terra/10">
                  <service.icon className="h-5 w-5 text-terra" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-graphite">{service.label}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
