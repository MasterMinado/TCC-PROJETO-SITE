"use client"

import {ReferenciasSection} from "../components/ReferenciasSection"
import { AnimatedBackground } from "../components/AnimatedBackground"
import { useTheme } from "../contexts/ThemeContext"

export function Refer() {
  const { isDark } = useTheme()

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <AnimatedBackground />
      <div className="relative z-10">
        <ReferenciasSection />
      </div>
    </div>
  )
}