"use client"

import { HeroSection } from "../components/HeroSection"
import { AnimatedBackground } from "../components/AnimatedBackground"
import { HomeContent } from "../components/HomeContent"
import { useTheme } from "../contexts/ThemeContext"

export function Home() {
  const { isDark } = useTheme()

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-colors duration-300 `}
    >
      <AnimatedBackground />
      <div className="relative z-10">
        <HeroSection />
        <HomeContent />
      </div>
    </div>
  )
}
