"use client"

import { useEffect, useState } from "react"

export function ScrollToTopTomato() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Наверх"
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full transition-all duration-500 ease-out hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-terra ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
      style={{
        filter: "drop-shadow(0 6px 16px rgba(198,93,59,0.45)) drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
      }}
    >
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        <defs>
          {/* Main body gradient */}
          <radialGradient id="tomatoBody" cx="0.4" cy="0.35" r="0.65">
            <stop offset="0%" stopColor="#FF5C3A" />
            <stop offset="45%" stopColor="#E8412A" />
            <stop offset="100%" stopColor="#B22A18" />
          </radialGradient>
          {/* Shine */}
          <radialGradient id="tomatoShine" cx="0.35" cy="0.25" r="0.35">
            <stop offset="0%" stopColor="white" stopOpacity="0.55" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          {/* Bottom shadow */}
          <radialGradient id="tomatoShadow" cx="0.5" cy="0.85" r="0.4">
            <stop offset="0%" stopColor="#7A1A0D" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#7A1A0D" stopOpacity="0" />
          </radialGradient>
          {/* Stem gradient */}
          <linearGradient id="stemGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3D8B37" />
            <stop offset="100%" stopColor="#2B6B25" />
          </linearGradient>
          {/* Leaf gradient */}
          <linearGradient id="leafGrad" x1="0.2" y1="0" x2="0.8" y2="1">
            <stop offset="0%" stopColor="#5DBF4C" />
            <stop offset="50%" stopColor="#3D9B35" />
            <stop offset="100%" stopColor="#2A7A22" />
          </linearGradient>
        </defs>

        {/* Body */}
        <ellipse cx="26" cy="29" rx="19" ry="17.5" fill="url(#tomatoBody)" />
        {/* Segments - subtle lines */}
        <path d="M26 11.5 C26 11.5 20 20 19.5 29 C19 38 22 46.5 26 46.5" stroke="#C33020" strokeWidth="0.6" opacity="0.3" fill="none" />
        <path d="M26 11.5 C26 11.5 32 20 32.5 29 C33 38 30 46.5 26 46.5" stroke="#C33020" strokeWidth="0.6" opacity="0.3" fill="none" />
        <path d="M10 27 C10 27 16 23 26 23 C36 23 42 27 42 27" stroke="#C33020" strokeWidth="0.5" opacity="0.2" fill="none" />
        {/* Bottom shadow */}
        <ellipse cx="26" cy="38" rx="14" ry="7" fill="url(#tomatoShadow)" />
        {/* Top shine */}
        <ellipse cx="21" cy="22" rx="9" ry="8" fill="url(#tomatoShine)" />

        {/* Leaves */}
        <path
          d="M26 14 C22 10 16 9 14 11 C16 11.5 20 12 23 14 Z"
          fill="url(#leafGrad)"
        />
        <path
          d="M26 14 C30 10 36 9 38 11 C36 11.5 32 12 29 14 Z"
          fill="url(#leafGrad)"
        />
        <path
          d="M26 13.5 C23 8 18 6.5 16.5 8 C18 9 22 11 25 13 Z"
          fill="url(#leafGrad)"
          opacity="0.7"
        />
        <path
          d="M26 13.5 C29 8 34 6.5 35.5 8 C34 9 30 11 27 13 Z"
          fill="url(#leafGrad)"
          opacity="0.7"
        />

        {/* Stem */}
        <rect x="24.5" y="7" width="3" height="7" rx="1.5" fill="url(#stemGrad)" />
        {/* Stem shine */}
        <rect x="25" y="7.5" width="1" height="5" rx="0.5" fill="white" opacity="0.15" />

        {/* Arrow up inside the tomato */}
        <path
          d="M26 24 L21 31 L24 31 L24 35 L28 35 L28 31 L31 31 Z"
          fill="white"
          opacity="0.85"
        />
      </svg>
    </button>
  )
}
