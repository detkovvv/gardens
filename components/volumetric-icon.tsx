import type { LucideIcon } from "lucide-react"

type IconVariant = "green" | "terra" | "earth" | "cream"

const variantStyles: Record<
  IconVariant,
  { bg: string; shadow: string; iconColor: string; ring: string }
> = {
  green: {
    bg: "bg-gradient-to-br from-[#0e7a4a] to-[#064d2b]",
    shadow:
      "shadow-[0_6px_20px_rgba(11,95,58,0.35),inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(0,0,0,0.12)]",
    iconColor: "text-[#c6f0d8]",
    ring: "ring-1 ring-[#0e7a4a]/30",
  },
  terra: {
    bg: "bg-gradient-to-br from-[#d8734f] to-[#a84a2a]",
    shadow:
      "shadow-[0_6px_20px_rgba(198,93,59,0.35),inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.12)]",
    iconColor: "text-[#fde4d8]",
    ring: "ring-1 ring-[#d8734f]/30",
  },
  earth: {
    bg: "bg-gradient-to-br from-[#8a6550] to-[#563827]",
    shadow:
      "shadow-[0_6px_20px_rgba(107,76,59,0.35),inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(0,0,0,0.12)]",
    iconColor: "text-[#f0ddd0]",
    ring: "ring-1 ring-[#8a6550]/30",
  },
  cream: {
    bg: "bg-gradient-to-br from-[#f8f3ec] to-[#e6d8c3]",
    shadow:
      "shadow-[0_6px_20px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.04)]",
    iconColor: "text-[#0B5F3A]",
    ring: "ring-1 ring-[#e6d8c3]/60",
  },
}

interface VolumetricIconProps {
  icon: LucideIcon
  variant?: IconVariant
  size?: "sm" | "md" | "lg"
}

const sizeStyles = {
  sm: { wrapper: "h-10 w-10 rounded-xl", icon: "h-[18px] w-[18px]" },
  md: { wrapper: "h-12 w-12 rounded-xl", icon: "h-5 w-5" },
  lg: { wrapper: "h-14 w-14 rounded-2xl", icon: "h-6 w-6" },
}

export function VolumetricIcon({
  icon: Icon,
  variant = "green",
  size = "md",
}: VolumetricIconProps) {
  const style = variantStyles[variant]
  const dim = sizeStyles[size]

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center ${dim.wrapper} ${style.bg} ${style.shadow} ${style.ring}`}
    >
      {/* top shine */}
      <div className="pointer-events-none absolute inset-x-[15%] top-[6%] h-[35%] rounded-full bg-gradient-to-b from-white/25 to-transparent" />
      <Icon className={`relative ${dim.icon} ${style.iconColor} drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]`} />
    </div>
  )
}
