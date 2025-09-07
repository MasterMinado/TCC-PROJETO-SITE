"use client"

import { User, Target } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"

export function HomeContent() {
  const { isDark } = useTheme()
  return (
    <div className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 max-w-6xl mx-auto">
      {/* Cards numerados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-20">
        <div className="bg-zinc-800 p-6 sm:p-8 rounded-lg text-center">
          <div className="text-3xl sm:text-4xl font-bold text-zinc-400 mb-3 sm:mb-4">01</div>
          <p className="text-sm sm:text-base text-zinc-300">
            Identificação das necessidades específicas dos usuários cegos
          </p>
        </div>
        <div className="bg-orange-600 p-6 sm:p-8 rounded-lg text-center">
          <div className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">02</div>
          <p className="text-sm sm:text-base text-white">Desenvolvimento de tecnologia assistiva inovadora</p>
        </div>
        <div className="bg-zinc-800 p-6 sm:p-8 rounded-lg text-center sm:col-span-2 lg:col-span-1">
          <div className="text-3xl sm:text-4xl font-bold text-zinc-400 mb-3 sm:mb-4">03</div>
          <p className="text-sm sm:text-base text-zinc-300">Implementação e teste com a comunidade</p>
        </div>
      </div>

      {/* Seção Nosso Diferencial */}
      <div className="text-center mb-12 sm:mb-16">
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 ${isDark ? "text-white" : "text-gray-800"}`}
        >
          Nosso Diferencial.
        </h2>
        <p
          className={`text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-4 ${isDark ? "text-gray-400" : "text-gray-700"}`}
        >
          Desenvolvemos uma solução inovadora que combina tecnologia avançada com design inclusivo, criando uma
          experiência única para o aprendizado do Braille. Nossa abordagem integra hardware e software de forma
          intuitiva, tornando o processo de alfabetização mais eficiente e acessível.
        </p>
      </div>

      {/* Cards informativos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
        <div className="bg-zinc-800 p-6 sm:p-8 rounded-lg">
          <div className="flex items-center mb-3 sm:mb-4">
            <User className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mr-2 sm:mr-3 flex-shrink-0" />
            <h3 className={`text-xl sm:text-2xl font-bold text-white`}>Público alvo</h3>
          </div>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Pessoas cegas ou com baixa visão que desejam aprender Braille, educadores especializados, instituições de
            ensino inclusivo e familiares que apoiam o processo de aprendizagem.
          </p>
        </div>
        <div className="bg-zinc-800 p-6 sm:p-8 rounded-lg">
          <div className="flex items-center mb-3 sm:mb-4">
            <Target className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mr-2 sm:mr-3 flex-shrink-0" />
            <h3 className={`text-xl sm:text-2xl font-bold text-white`}>Objetivo</h3>
          </div>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Democratizar o acesso ao sistema Braille através de uma solução tecnológica inovadora, promovendo autonomia,
            inclusão social e igualdade de oportunidades educacionais.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
          Vamos Começar! →
        </button>
      </div>
    </div>
  )
}
