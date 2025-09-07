"use client"

import { useTheme } from "../contexts/ThemeContext"

export function GameSection() {
  const { isDark } = useTheme()
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Hero Section */}
      <div className="text-center mb-12 sm:mb-16 pt-16 sm:pt-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
          <span className="text-orange-500">Game</span> Braille
        </h1>
        <p className={`text-base sm:text-lg px-4 ${isDark ? "text-gray-400" : "text-gray-800"}`}>
          Embarque nessa jornada e venha conhecer nosso jogo
        </p>
      </div>

      {/* História do Jogo */}
      <div className="mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">História do jogo</h2>
        <div className="max-w-4xl mx-auto px-4">
          <p
            className={`text-sm sm:text-base leading-relaxed text-justify ${isDark ? "text-gray-400" : "text-gray-800"}`}
          >
Quatro personagens cegos embarcam em uma jornada única para aprender Braille. Pelo caminho, eles enfrentam inimigos e obstáculos, enquanto juntam letras e formam palavras que os levam cada vez mais longe. A grande missão é chegar até o protótipo, símbolo da conquista do conhecimento e da superação.
          </p>
        </div>
      </div>

      {/* Game Demo */}
      <div className="mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
          <span className="text-orange-500">Game</span> Demo
        </h2>
        <div className="flex justify-center px-4">
          <div className="bg-zinc-800 rounded-lg p-6 sm:p-8 w-full max-w-sm sm:max-w-md aspect-video flex items-center justify-center border border-zinc-700">
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 rounded-full p-3 sm:p-4">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-0.5 sm:ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Pronto para começar sua jornada?</h2>
        <p
          className={`mb-6 sm:mb-8 max-w-md mx-auto text-sm sm:text-base ${isDark ? "text-gray-400" : "text-gray-800"}`}
        >
  Entre nesse desafio e ajude os quatro personagens a vencer inimigos, juntar palavras em Braille e conquistar o protótipo. 
        </p>
        <button
          className={`bg-white text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 flex items-center gap-2 mx-auto text-sm sm:text-base`}
        >
          <span className={`text-orange-500`}>▶</span>
          Jogue no Gdevelop
          <svg className={`w-3 h-3 sm:w-4 sm:h-4 text-gray-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
