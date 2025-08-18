"use client"

import { useTheme } from "../contexts/ThemeContext"

export function TutorialSteps() {
  const { isDark } = useTheme()

  const steps = [
    { id: 1, title: "Fundamentos do Braille", description: "Aprenda a estrutura básica do sistema Braille e como os pontos formam as letras.", completed: true },
    { id: 2, title: "Alfabeto e Números", description: "Domine todas as letras do alfabeto e os números em Braille.", completed: true },
    { id: 3, title: "Pontuação e Símbolos", description: "Aprenda os sinais de pontuação e símbolos especiais.", completed: false },
    { id: 4, title: "Palavras e Frases", description: "Pratique a leitura de palavras completas e frases simples.", completed: false },
    { id: 5, title: "Leitura Avançada", description: "Desenvolva fluência na leitura de textos mais complexos.", completed: false },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className={isDark ? "text-white" : "text-gray-900"}>Seu Caminho de</span>
            <span className="bg-gradient-to-r from-orange-600 to-orange-900 bg-clip-text text-transparent ml-2">
              Aprendizado
            </span>
          </h2>
          <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Siga nosso programa estruturado para dominar o Braille
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`relative p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                isDark
                  ? "bg-gray-900/50 border-gray-800 hover:border-gray-700"
                  : "bg-white border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Step Icon */}
                <div className="flex-shrink-0 mt-1">
                  
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      
                    >
                      {step.title}
                    </h3>
                    <span
                      className={`text-sm px-3 py-1 rounded-full ${
                        isDark ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {step.duration}
                    </span>
                  </div>
                  <p className={`mb-0 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{step.description}</p>
                </div>
              </div>

              {/* Progress Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-9 top-16 w-0.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
