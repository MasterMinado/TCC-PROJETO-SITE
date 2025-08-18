import { User, Target } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"

export function HomeContent() {
  const { isDark, toggleTheme } = useTheme()
  return (
    <div className="px-4 py-16 max-w-6xl mx-auto">
      {/* Cards numerados */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div className="bg-zinc-800 p-8 rounded-lg text-center">
          <div className="text-4xl font-bold text-zinc-400 mb-4">01</div>
          <p className="text-zinc-300">Identificação das necessidades específicas dos usuários cegos</p>
        </div>
        <div className="bg-orange-600 p-8 rounded-lg text-center">
          <div className="text-4xl font-bold text-white mb-4">02</div>
          <p className="text-white">Desenvolvimento de tecnologia assistiva inovadora</p>
        </div>
        <div className="bg-zinc-800 p-8 rounded-lg text-center">
          <div className="text-4xl font-bold text-zinc-400 mb-4">03</div>
          <p className="text-zinc-300">Implementação e teste com a comunidade</p>
        </div>
      </div>

      {/* Seção Nosso Diferencial */}
      <div className="text-center mb-16">
        <h2 className={`text-4xl font-bold mb-6 ${ isDark ? "text-white" : "text-gray-800"}`}>Nosso Diferencial.</h2>
        <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${ isDark ? "text-gray-400" : "text-gray-700"}`}>
          Desenvolvemos uma solução inovadora que combina tecnologia avançada com design inclusivo, criando uma
          experiência única para o aprendizado do Braille. Nossa abordagem integra hardware e software de forma
          intuitiva, tornando o processo de alfabetização mais eficiente e acessível.
        </p>
      </div>

      {/* Cards informativos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-zinc-800 p-8 rounded-lg">
          <div className="flex items-center mb-4">
            <User className="w-8 h-8 text-orange-500 mr-3" />
            <h3 className={`text-2xl font-bold text-white`}>Público alvo</h3>
          </div>
          <p className="text-zinc-300 leading-relaxed">
            Pessoas cegas ou com baixa visão que desejam aprender Braille, educadores especializados, instituições de
            ensino inclusivo e familiares que apoiam o processo de aprendizagem.
          </p>
        </div>
        <div className="bg-zinc-800 p-8 rounded-lg">
          <div className="flex items-center mb-4">
            <Target className="w-8 h-8 text-orange-500 mr-3" />
            <h3 className={`text-2xl font-bold text-white`}>Objetivo</h3>
          </div>
          <p className="text-zinc-300 leading-relaxed">
            Democratizar o acesso ao sistema Braille através de uma solução tecnológica inovadora, promovendo autonomia,
            inclusão social e igualdade de oportunidades educacionais.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 transform hover:scale-105">
          Vamos Começar! →
        </button>
      </div>
    </div>
  )
}
