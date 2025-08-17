"use client"

import {Header} from "../components/Header"
import {SobreSection} from "../components/SobreSection"
import { useTheme } from "../contexts/ThemeContext"

export function Sobre() {
  const { isDark } = useTheme()

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <SobreSection />
    </div>
  )
}
