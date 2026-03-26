const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260225_223448_090-4cn6tQSja2X1tslLuyECKwXSQILl0H.jpg",
    alt: "Грядки клуба с подсолнечниками и ухоженной зеленью",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260225_223544_960-D1iHZcrnS8HpPXpH5TIuJgIzMyEQkk.jpg",
    alt: "Панорама клубных участков с живой изгородью и беседками",
  },
]

export function GallerySection() {
  return (
    <section id="gallery" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-terra">
            Галерея
          </p>
          <h2 className="mt-4 font-serif text-3xl text-graphite md:text-5xl text-balance">
            Территория клуба
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {images.map((img, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
