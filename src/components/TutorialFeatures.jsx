"use client"

import { useTheme } from "../contexts/ThemeContext"
import { Brain, Target, Trophy, Users, Clock, Zap } from "lucide-react"

export function TutorialFeatures() {
  const { isDark } = useTheme()

  const features = [
    {
      icon: Brain,
      title: "Passo 1",
      description: "Aperte o botão de iniciar o comando de voz",
    },
    {
      icon: Target,
      title: "Passo 2",
      description: "Certifique que sua voz esta clara e audível",
    },
    {
      icon: Trophy,
      title: "Passo 3",
      description: "Fale as letras do alfabeto para que o sistema reconheça",
    },
    {
      icon: Users,
      title: "Passo 4",
      description: "Se tudo der certo, o sistema ira processar e enviar para o dispositivo",
    },
    {
      icon: Clock,
      title: "Passo 5",
      description: "Aprenda no seu tempo, quando e onde quiser",
    },
    {
      icon: Zap,
      title: "Passo 6",
      description: "Veja progresso real em apenas algumas semanas",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className={isDark ? "text-white" : "text-gray-900"}>Modo de uso </span>
            <span className="bg-gradient-to-r from-orange-400 via-orange-900 to-orange-600 bg-clip-text text-transparent">
              Módulo de voz
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Desenvolvido para facilitar o aprendizado do Braille de forma intuitiva e eficaz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                isDark
                  ? "bg-gray-900/50 border-gray-800 hover:border-gray-700"
                  : "bg-white border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-900 to-orange-600 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                  {feature.title}
                </h3>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
