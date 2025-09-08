"use client"

import { useTheme } from "../contexts/ThemeContext"

export function TutorialHero() {
  const { isDark } = useTheme()

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-orange-900 to-orange-600 bg-clip-text text-transparent">
              Tutorial
            </span>
            <br />
            <span className={isDark ? "text-white" : "text-gray-900"}>Projeto físico</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl sm:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Aprenda como mexer no projeto físico e manusear o dispositivo de forma eficaz
          </p>

        </div>
      </div>
    </section>
  )
}
