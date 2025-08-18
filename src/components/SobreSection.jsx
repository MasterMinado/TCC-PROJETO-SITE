import { Mail, Phone, MapPin } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"

export function SobreSection() {
  const { isDark } = useTheme()
  const teamMembers = [
    {
      name: "Ana Juh",
      role: "Gerente do Projeto / Designer",
      description: "Ela ajuda nas partes administrativas, e foi quem pediu as peças do protótipo.",
    },
    {
      name: "Antony Novaes",
      role: "Desenvolver / Helper / Game",
      description: "Fez o jogo, faz parte do time, mas não faz nada.",
    },
    {
      name: "Gustavo Henrique",
      role: "Developer / Helper / Mecanical",
      description: "Desenvolveu o site juntamente com Lucas Soares e Antony Novaes, e mexe no protótipo físico.",
    },
    {
      name: "Lucas Soares",
      role: "Designer / Developer / Writer / Ajudante",
      description: "Ele é o cara que ajudou no site, mexe no protótipo e é designer do figma.",
    },
  ]

  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-800"}`}>Nosso Time</h1>
        <p className={`text-gray-400 text-lg ${isDark ? "text-white" : "text-gray-700"}`}>Pessoas da Equipe.</p>
      </div>

      {/* Team Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-9 mb-20`}>
        {teamMembers.map((member, index) => (
          <div key={index} className="flex items-start gap-4">
            {/* Profile Image */}
            <div className="w-20 h-20 bg-gray-400 rounded-full flex-shrink-0"></div>

            {/* Member Info */}
            <div className="flex-1">
              <h3 className={`text-xl font-semibold mb-1 ${isDark ? "text-white" : "text-black"}`   }>{member.name}</h3>
              <p className={`text-sm mb-2 ${isDark ? "text-gray-400" : "text-gray-800"}` }>{member.role}</p>
              <p className={`text-sm mb-3 ${isDark ? "text-gray-300" : "text-grat-600"}` }>{member.description}</p>

              {/* Social Icons */}
              <div className="flex gap-2">
                <div className={`w-5 h-5 hover:text-white cursor-pointer transition-colors flex items-center justify-center text-xs font-bold ${isDark ? "text-gray-400" : "text-grat-600"}`}>
                  @
                </div>
                <div className={`w-5 h-5 hover:text-white cursor-pointer transition-colors flex items-center justify-center text-xs font-bold ${isDark ? "text-gray-400" : "text-grat-600"}`}>
                  in
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12`}>
        {/* Contact Info */}
        <div>
          <h2 className={`text-2xl font-bold mb-4 ${ isDark ? "text-white" : "text-black"}`}>Entre em contato</h2>
          <p className={`mb-8 ${ isDark ? "text-gray-400" : "text-gray-900"}`}>
            Estamos aqui para ajudar! Entre em contato conosco através do formulário ou pelos canais abaixo.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className={`w-5 h-5 ${isDark ? "text-gray-400" : "text-gray-900"}`} />
              <span className={`${isDark ? "text-gray-400" : "text=gray-900"}`}>BrailleTech@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className={`w-5 h-5 ${isDark ? "text-gray-400" : "text-gray-900"}`} />
              <span className={`${ isDark ? "text-gray-400" : "text-gray-900"}`}>(11) 99999-9999</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className={`w-5 h-5 ${isDark ? "text-gray-400" : "text-gray-900"}`} />
              <span className={`${isDark ? "text-gray-400" : "text-gray-900"}`}>São Paulo, SP - Brasil</span>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  )
}
