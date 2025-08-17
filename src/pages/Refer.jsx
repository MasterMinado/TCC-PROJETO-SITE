"use client"

import {Header} from "../components/Header"
import {ReferenciasSection} from "../components/ReferenciasSection"
import { useTheme } from "../contexts/ThemeContext"

export function Refer() {
  const { isDark } = useTheme()

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <ReferenciasSection />
    </div>
  )
}