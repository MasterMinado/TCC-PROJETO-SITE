"use client"

import { useTheme } from "../contexts/ThemeContext"
import { CheckCircle, Circle } from "lucide-react"

export function TutorialSteps() {
  const { isDark } = useTheme()

  const steps = [
    {
      title: "Passo 1",
      description: "Simples! Conecte o dispositivo via Bluetooth ao seu smartphone ou tablet",
    },
    {
      title: "Passo 2",
      description: "Abra o aplicativo e selecione o modo de digitação no CMD",
    },
    {
      title: "Passo 3",
      description: "Apos a certificação de tudo ocorreu bem e você esta conectado. Digite as letras do alfabeto",
    },
    {
      title: "Passo 4",
      description: "Agora é só ver as peças se movimentando e colocando o dedo para sentir as letras.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className={isDark ? "text-white" : "text-gray-900"}>Modo de uso</span>
            <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent ml-2">
              BLUETOOTH
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Siga os passos abaixo
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
              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
