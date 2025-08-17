"use client"

import { GameSection } from "../components/GameSection"
import { AnimatedBackground } from "../components/AnimatedBackground"
import { useTheme } from "../contexts/ThemeContext"

export function Game() {
  const { isDark } = useTheme()

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-zinc-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <AnimatedBackground />
      <div className="relative z-10">
        <GameSection />
      </div>
    </div>
  )
}