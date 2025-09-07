"use client"

import { ProdutoSection } from "../components/ProdutoSection"
import { AnimatedBackground } from "../components/AnimatedBackground"
import { useTheme } from "../contexts/ThemeContext"

export function Produtos() {
  const { isDark } = useTheme()

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <AnimatedBackground />
      <div className="relative z-10">
        <ProdutoSection />
      </div>
    </div>
  )
}
