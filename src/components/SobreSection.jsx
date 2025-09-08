"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"

export function SobreSection() {
  const { isDark } = useTheme()
  const teamMembers = [
    {
      name: "Ana Juh",
      role: "Criatividade e Organização do Grupo",
      description: "Responsável por manter o grupo alinhado e produtivo, trouxe criatividade para as ideias e participou ativamente na elaboração dos projetos.",
    },
    {
      name: "Antony Novaes",
      role: "Desenvolvedor do Jogo",
      description: "Criador do jogo do time, também se destacou por estar sempre disposto a colaborar em todas as áreas, garantindo que o projeto avançasse em conjunto.",
    },
    {
      name: "Gustavo Henrique",
      role: "Programação e Parte Física",
      description: "Foi quem programou o site e cuidou da parte física do projeto, tornando as ideias possíveis na prática.",
    },
    {
      name: "Lucas Soares",
      role: "Design e Desenvolvimento do Site",
      description: "Responsável pelo design e pela construção do site, também deu suporte em diferentes etapas, contribuindo para a união e qualidade do trabalho.",
    },
  ]

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12 lg:mb-16">
        <h1
          className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-800"}`}
        >
          Nosso
          <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent ml-2">
              Time
            </span>

        </h1>
        <p className={`text-base sm:text-lg ${isDark ? "text-gray-400" : "text-gray-700"}`}>Pessoas da Equipe.</p>
      </div>

      {/* Team Grid */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-20`}>
        {teamMembers.map((member, index) => (
          <div key={index} className="flex items-start gap-4">
            {/* Profile Image */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-full overflow-hidden bg-gray-200">
              <img
                src={`/images/team-member-${index + 1}.jpeg`}
                alt={member.name}
                className="w-full h-full object-cover"
                
              />
            </div>

            {/* Member Info */}
            <div className="flex-1 min-w-0">
              <h3 className={`text-lg sm:text-xl font-semibold mb-1 ${isDark ? "text-white" : "text-black"}`}>
                {member.name}
              </h3>
              <p className={`text-xs sm:text-sm mb-2 ${isDark ? "text-gray-400" : "text-gray-800"}`}>{member.role}</p>
              <p className={`text-xs sm:text-sm mb-3 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                {member.description}
              </p>


            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12`}>
        {/* Contact Info */}
        <div>
          <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Entre em contato
          </h2>
          <p className={`mb-6 sm:mb-8 text-sm sm:text-base ${isDark ? "text-gray-400" : "text-gray-900"}`}>
            Estamos aqui para ajudar! Entre em contato conosco através do formulário ou pelos canais abaixo.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className={`w-4 h-4 sm:w-5 sm:h-5 ${isDark ? "text-gray-400" : "text-gray-900"}`} />
              <span className={`text-sm sm:text-base ${isDark ? "text-gray-400" : "text-gray-900"}`}>
                BrailleTech@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className={`w-4 h-4 sm:w-5 sm:h-5 ${isDark ? "text-gray-400" : "text-gray-900"}`} />
              <span className={`text-sm sm:text-base ${isDark ? "text-gray-400" : "text-gray-900"}`}>
                São Paulo, SP - Brasil
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
