"use client"

import { PlayButton } from "./PlayButton.jsx"
import { useTheme } from "../contexts/ThemeContext.jsx"

export function HeroSection() {
  const { isDark } = useTheme()
  return (
    <section className="container mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-24 md:py-32 lg:py-48 flex flex-col lg:flex-row items-center gap-8 sm:gap-12 relative z-10">
      <div className="flex-1 space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left">
        {/* Main title with staggered animation */}
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight animate-in slide-in-from-left duration-1000">
            <span className={`${isDark ? "text-white" : "text-gray-800"}`}>Tecnologia</span>{" "}
            <span className="text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text">a favor</span>
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight animate-in slide-in-from-left duration-1000 delay-200">
            <span className="text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text">
              da inclusão.
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="space-y-1 sm:space-y-2">
          <h2
            className={`text-sm sm:text-base md:text-lg lg:text-xl font-semibold ${isDark ? "text-white" : "text-gray-800"}`}
          >
            Nosso projeto, feito para tornar o
          </h2>
          <h2
            className={`text-sm sm:text-base md:text-lg lg:text-xl font-semibold ${isDark ? "text-white" : "text-gray-800"}`}
          >
            Braille acessível a todos.
          </h2>
        </div>

        {/* Description */}
        <p
          className={`text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0 ${isDark ? "text-gray-300" : "text-gray-700"}`}
        >
          Criamos uma ferramenta acessível que aproxima cegos da leitura em Braille, unindo educação, inclusão e
          inovação.
        </p>
      </div>

      {/* Play button */}
      <div className="flex-1 flex justify-center lg:justify-end animate-in slide-in-from-right duration-1000 delay-300 w-full lg:w-auto">
        <PlayButton />
      </div>
    </section>
  )
}
