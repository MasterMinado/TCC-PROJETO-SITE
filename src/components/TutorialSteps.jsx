"use client"

import { useTheme } from "../contexts/ThemeContext"
import { CheckCircle, Circle } from "lucide-react"

export function TutorialSteps() {
  const { isDark } = useTheme()

  const steps = [
    {
      title: "Fundamentos do Braille",
      description: "Aprenda a história e os princípios básicos do sistema Braille",
      completed: true,
    },
    {
      title: "Alfabeto e Números",
      description: "Domine todas as letras e números em Braille",
      completed: true,
    },
    {
      title: "Pontuação e Símbolos",
      description: "Aprenda pontuação, acentos e símbolos especiais",
      completed: false,
    },
    {
      title: "Leitura Avançada",
      description: "Pratique com textos complexos e contrações",
      completed: false,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className={isDark ? "text-white" : "text-gray-900"}>Seu Caminho de</span>
            <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent ml-2">
              Aprendizado
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Siga nosso programa estruturado e progressivo
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-start gap-6 p-6 rounded-2xl border transition-all duration-300 ${
                step.completed
                  ? isDark
                    ? "bg-orange-900/20 border-orange-800"
                    : "bg-orange-50 border-orange-200"
                  : isDark
                    ? "bg-gray-900/50 border-gray-800"
                    : "bg-white border-gray-200"
              }`}
            >
              <div className="flex-shrink-0">
                {step.completed ? (
                  <CheckCircle className="w-8 h-8 text-orange-500" />
                ) : (
                  <Circle className={`w-8 h-8 ${isDark ? "text-gray-400" : "text-gray-300"}`} />
                )}
              </div>
              <div className="flex-1">
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    step.completed ? "text-orange-500" : isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {step.title}
                </h3>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>{step.description}</p>
              </div>
              <div className="flex-shrink-0">
                <span
                  className={`text-sm font-medium px-3 py-1 rounded-full ${
                    step.completed
                      ? "bg-orange-500 text-white"
                      : isDark
                        ? "bg-gray-800 text-gray-400"
                        : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {step.completed ? "Concluído" : "Pendente"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
