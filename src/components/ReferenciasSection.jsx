"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"

const referencias = [
  {
    id: 1,
    logo: "/celsul-logo.png",
    citacao:
      "O processo de alfabetização de crianças cegas em braile",
    relevancia: "Este trabalho analisa o processo de alfabetização de crianças cegas em braile com vistas a duas abordagens teóricas da compreensão da linguagem",
    link: "https://www.academia.edu/1282202/O_processo_de_alfabetização_de_crianças_cegas_em_braile",
  },
  {
    id: 2,
    logo: "/usp-logo.png",
    citacao:
      "Conversor Braile: Um Aporte ao Processo de Alfabetização de Pessoas com Deficiência Visual",
    relevancia: "Este artigo descreve o desenvolvimento de um artefato tecnológico de baixo custo e fácil utilização destinado a servir como suporte ao ensino e aprendizagem do sistema Braile",
    link: "http://senid.upf.br/2016/images/pdf/151429.pdf",
  },
  {
    id: 3,
    logo: "/unicamp-logo.png",
    citacao:
      "BRAILER, CONVERSOR DE TEXTOS PARA BRAILLE NO ARDUINO.",
      relevancia: "O presente artigo tem por objetivo apresentar um protótipo para contribuir ao acesso digital dos portadores de deficiência visual através da demonstração de como criar um dispositivo que faça a conversão de textos para o formato braille.",
    link: "https://painel.passofundo.ifsul.edu.br/uploads/arq/201603031847071559681307.pdf",
  },
  {
    id: 4,
    logo: "/ufsc-logo.png",
    citacao:
      "O USO DO BRAILE ELETRÔNICO PARA A ALFABETIZAÇÃO DE CEGOS",
    relevancia: "A partir da criação de uma ferramenta computacional chamada de braile eletrônico, ue tem por objetivo dinamizar o processo de escrita em braile, iniciou-se o processo de alfabetização de uma aluna cega em escola pública.",
    link: "https://www.academia.edu/1282201/O_USO_DO_BRAILE_ELETRÔNICO_PARA_A_ALFABETIZAÇÃO_DE_CEGOS",
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
    <div className="min-h-screen flex flex-col justify-center px-4 sm:px-6 py-16 sm:py-20">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="text-orange-500">Refer</span>
          <span className={`${isDark ? "text-white" : "text-gray-800"}`}>ências</span>
        </h1>
        <div className="flex justify-center space-x-1 text-orange-500 text-sm sm:text-base lg:text-lg">
          <span>⠠⠗⠑⠋⠑⠗⠮⠝⠉⠊⠁⠎</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="flex items-center justify-center space-x-2 sm:space-x-4 lg:space-x-8">
          {/* Seta Esquerda */}
          <button
            onClick={prevReferencia}
            disabled={isAnimating}
            className={`p-2 sm:p-3 lg:p-4 hover:text-orange-500 transition-colors duration-200 disabled:opacity-50 flex-shrink-0 ${isDark ? "text-white" : "text-gray-800"}`}
          >
            <ChevronLeft size={24} className="sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
          </button>

          <div className="flex-1 max-w-4xl">
            <div
              className={`bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 transition-all duration-300 ${
                isAnimating ? "opacity-0 transform scale-95" : "opacity-100 transform scale-100"
              }`}
            >
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 sm:mb-6 gap-4">
                

                  <div className="hidden text-white text-xs font-bold">LOGO</div>
               

                <button
                  onClick={() => window.open(currentReferencia.link, "_blank")}
                  className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-colors duration-200 text-xs sm:text-sm"
                >
                  <ExternalLink size={12} className="sm:w-4 sm:h-4" />
                  <span>Ver Artigo</span>
                </button>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {currentReferencia.citacao}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm lg:text-base font-medium">
                  {currentReferencia.relevancia}
                </p>
              </div>
            </div>
          </div>

          {/* Seta Direita */}
          <button
            onClick={nextReferencia}
            disabled={isAnimating}
            className={`p-2 sm:p-3 lg:p-4 hover:text-orange-500 transition-colors duration-200 disabled:opacity-50 flex-shrink-0 ${isDark ? "text-white" : "text-gray-800"}`}
          >
            <ChevronRight size={24} className="sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
          </button>
        </div>

        <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
          {referencias.map((_, index) => (
            <button
              key={index}
              onClick={() => goToReferencia(index)}
              disabled={isAnimating}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                index === currentIndex ? "bg-orange-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
