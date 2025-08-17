"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"

const referencias = [
  {
    id: 1,
    logo: "/celsul-logo.png",
    citacao:
      "Karnal, A. R. (2010). O uso do Braille eletrônico para a alfabetização de cegos. Anais do IX Encontro do CELSUL, Palhoça, SC. Universidade do Sul de Santa Catarina.",
    relevancia: "Relevância para o projeto: Inovação em alfabetização acessível.",
    link: "https://example.com/artigo1",
  },
  {
    id: 2,
    logo: "/usp-logo.png",
    citacao:
      "Silva, M. C. (2018). Tecnologias assistivas no ensino de Braille: uma abordagem inclusiva. Revista Brasileira de Educação Especial, 24(2), 245-260.",
    relevancia: "Relevância para o projeto: Metodologias de ensino inclusivo com tecnologia.",
    link: "https://example.com/artigo2",
  },
  {
    id: 3,
    logo: "/unicamp-logo.png",
    citacao:
      "Santos, J. P. (2019). Dispositivos táteis para aprendizagem do sistema Braille. Dissertação de Mestrado, UNICAMP, Campinas, SP.",
    relevancia: "Relevância para o projeto: Desenvolvimento de interfaces táteis inovadoras.",
    link: "https://example.com/artigo3",
  },
  {
    id: 4,
    logo: "/ufsc-logo.png",
    citacao:
      "Oliveira, L. F. (2021). Gamificação no ensino de Braille: estratégias digitais para inclusão. Anais do Congresso Brasileiro de Informática na Educação, Florianópolis, SC.",
    relevancia: "Relevância para o projeto: Aplicação de gamificação em educação inclusiva.",
    link: "https://example.com/artigo4",
  },
]

export function ReferenciasSection() {
  const { isDark } = useTheme()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextReferencia = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % referencias.length)
      setIsAnimating(false)
    }, 150)
  }

  const prevReferencia = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + referencias.length) % referencias.length)
      setIsAnimating(false)
    }, 150)
  }

  const goToReferencia = (index) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsAnimating(false)
    }, 150)
  }

  const currentReferencia = referencias[currentIndex]

  return (
    <div className="min-h-screen bg-gray-1000 flex flex-col justify-center px-4">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold text-white mb-4">
          <span className="text-orange-500">Refer</span><span className={`${isDark ? "bg-white-500 text-white" : "bg-black-900 text-gray-800"}`}>ências</span> 
        </h1>
        <div className="flex justify-center space-x-1 text-orange-500 text-lg">
          <span>⠠⠗⠑⠋⠑⠗⠮⠝⠉⠊⠁⠎</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center justify-center space-x-8">
          {/* Seta Esquerda */}
          <button
            onClick={prevReferencia}
            disabled={isAnimating}
            className={`p-4 text-white hover:text-orange-500 transition-colors duration-200 disabled:opacity-50 flex-shrink-0`}
          >
            <ChevronLeft size={40} />
          </button>

          <div className="flex-1 max-w-4xl">
            <div
              className={`bg-gray-800 rounded-2xl p-8 transition-all duration-300 ${
                isAnimating ? "opacity-0 transform scale-95" : "opacity-100 transform scale-100"
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img
                    src={currentReferencia.logo || "/placeholder.svg"}
                    alt="Logo da instituição"
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      e.target.style.display = "none"
                      e.target.nextSibling.style.display = "block"
                    }}
                  />
                  <div className="hidden text-white text-xs font-bold">LOGO</div>
                </div>

                <button
                  onClick={() => window.open(currentReferencia.link, "_blank")}
                  className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm"
                >
                  <ExternalLink size={14} />
                  <span>Ver Artigo</span>
                </button>
              </div>

              <div className="space-y-6">
                <p className="text-gray-300 text-base leading-relaxed">{currentReferencia.citacao}</p>
                <p className="text-gray-400 text-sm font-medium">{currentReferencia.relevancia}</p>
              </div>
            </div>
          </div>

          {/* Seta Direita */}
          <button
            onClick={nextReferencia}
            disabled={isAnimating}
            className="p-4 text-white hover:text-orange-500 transition-colors duration-200 disabled:opacity-50 flex-shrink-0"
          >
            <ChevronRight size={40} />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-3">
          {referencias.map((_, index) => (
            <button
              key={index}
              onClick={() => goToReferencia(index)}
              disabled={isAnimating}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex ? "bg-orange-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
