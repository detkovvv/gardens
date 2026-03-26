"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Философия", href: "#philosophy" },
  { label: "Инфраструктура", href: "#infrastructure" },
  { label: "Калькулятор", href: "#calculator" },
  { label: "Галерея", href: "#gallery" },
  { label: "Контакты", href: "#contacts" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-sand">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="font-serif text-2xl tracking-wide text-green-deep">
          {'ОГОРОДЫ'}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-graphite transition-colors hover:text-green-deep"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#calculator"
          className="hidden rounded-lg bg-green-deep px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-green-deep/90 md:inline-flex"
        >
          Стать членом клуба
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-graphite md:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-sand bg-cream px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-graphite transition-colors hover:text-green-deep"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#calculator"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-lg bg-green-deep px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-green-deep/90"
            >
              Стать членом клуба
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
