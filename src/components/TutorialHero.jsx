"use client"

import { useTheme } from "../contexts/ThemeContext"
import { ArrowRight, Play, BookOpen } from "lucide-react"

export function TutorialHero() {
  const { isDark } = useTheme()

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-orange-900 to-orange-600 bg-clip-text text-transparent">
              Aprenda Braille
            </span>
            <br />
            <span className={isDark ? "text-white" : "text-gray-900"}>Passo a Passo</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl sm:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Domine o sistema Braille com nosso tutorial interativo e progressivo. Aprenda no seu ritmo com exercícios
            práticos e feedback em tempo real.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">12</div>
              <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Lições Interativas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">95%</div>
              <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Taxa de Sucesso</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold mb-2 ${ isDark ? "text-gray-200" : "text-gray-800"}`}>2.5k+</div>
              <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Alunos Ativos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
