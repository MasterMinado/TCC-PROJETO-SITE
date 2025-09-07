"use client"

import { AnimatedBackground } from "../components/AnimatedBackground"
import { TutorialHero } from "../components/TutorialHero"
import { TutorialSteps } from "../components/TutorialSteps"
import { TutorialFeatures } from "../components/TutorialFeatures"
import { useTheme } from "../contexts/ThemeContext"

export default function Tutorial() {
  const { isDark } = useTheme()

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-zinc-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <AnimatedBackground />
      <div className="relative z-10">
        <TutorialHero />
        <TutorialSteps />
        <TutorialFeatures />
      </div>
    </div>
  )
}
