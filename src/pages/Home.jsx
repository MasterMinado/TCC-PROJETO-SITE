"use client"

import { HeroSection } from "../components/HeroSection"
import { AnimatedBackground } from "../components/AnimatedBackground"
import { HomeContent } from "../components/HomeContent"
import { useTheme } from "../contexts/ThemeContext"

export function Home() {
  const { isDark } = useTheme()

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-zinc-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <AnimatedBackground />
      <div className="relative z-10">
        <HeroSection />
        <HomeContent />
      </div>
    </div>
  )
}
