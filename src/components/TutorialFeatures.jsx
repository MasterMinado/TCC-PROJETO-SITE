"use client"

import { useTheme } from "../contexts/ThemeContext"
import { Brain, Target, Trophy, Users, Clock, Zap } from "lucide-react"

export function TutorialFeatures() {
  const { isDark } = useTheme()

  const features = [
    {
      icon: Brain,
      title: "Aprendizado Adaptativo",
      description: "O sistema se adapta ao seu ritmo e estilo de aprendizado",
    },
    {
      icon: Target,
      title: "Exercícios Práticos",
      description: "Pratique com exercícios interativos e receba feedback imediato",
    },
    {
      icon: Trophy,
      title: "Sistema de Conquistas",
      description: "Ganhe badges e acompanhe seu progresso",
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description: "Conecte-se com outros estudantes e compartilhe experiências",
    },
    {
      icon: Clock,
      title: "Flexibilidade Total",
      description: "Aprenda no seu tempo, quando e onde quiser",
    },
    {
      icon: Zap,
      title: "Resultados Rápidos",
      description: "Veja progresso real em apenas algumas semanas",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className={isDark ? "text-white" : "text-gray-900"}>Por que Escolher Nosso</span>
            <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent ml-2">
              Tutorial?
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Desenvolvido com as melhores práticas pedagógicas e tecnologia de ponta
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

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div
            className={`p-8 rounded-2xl border ${
              isDark
                ? "bg-gradient-to-r from-gray-900/80 to-gray-800/80 border-gray-700"
                : "bg-gradient-to-r from-gray-50 to-white border-gray-200"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className={isDark ? "text-white" : "text-gray-900"}>Pronto para Começar?</span>
            </h3>
            <p className={`text-lg mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Junte-se a milhares de pessoas que já dominaram o Braille
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              Iniciar Tutorial Gratuito
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
