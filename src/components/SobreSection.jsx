import { Mail, Phone, MapPin } from "lucide-react"

export function SobreSection() {
  const teamMembers = [
    {
      name: "Ana Juh",
      role: "CEO / Founder / Designer / Developer / Writer",
      description: "Unica mulher do time, ela é a CEO e fundadora da Atech. Ana é designer, desenvolvedora e escritora.",
    },
    {
      name: "Antony Novaes",
      role: "Bofe escroto",
      description: "Ele é o bofe escroto do time, Antony é o cara que faz tudo acontecer. Ele é o desenvolvedor principal e o responsável por manter a equipe unida.",
    },
    {
      name: "Gustavo Henrique",
      role: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet. Et modi aliquid et tenetur dolore.",
    },
    {
      name: "Lucas Soares",
      role: "Designer / Developer / Writer / Ajudante",
      description: "Lucas é o designer do time, ele é responsável por criar as interfaces e a identidade visual da Atech. Ele também é desenvolvedor e escritor.",
    },
  ]

  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nosso Time</h1>
        <p className="text-gray-400 text-lg">Lorem ipsum dolor sit amet.</p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex items-start gap-4">
            {/* Profile Image */}
            <div className="w-20 h-20 bg-gray-400 rounded-full flex-shrink-0"></div>

            {/* Member Info */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
              <p className="text-gray-400 text-sm mb-2">{member.role}</p>
              <p className="text-gray-300 text-sm mb-3">{member.description}</p>

              {/* Social Icons */}
              <div className="flex gap-2">
                <div className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors flex items-center justify-center text-xs font-bold">
                  @
                </div>
                <div className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors flex items-center justify-center text-xs font-bold">
                  in
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Entre em contato</h2>
          <p className="text-gray-400 mb-8">
            Estamos aqui para ajudar! Entre em contato conosco através do formulário ou pelos canais abaixo.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300">AtechTeam@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300">(11) 99999-9999</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300">São Paulo, SP - Brasil</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Envie uma mensagem</h2>
          <p className="text-gray-400 mb-6">Preencha o formulário abaixo e entraremos em contato em breve.</p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 text-sm mb-2">Nome</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-orange-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-orange-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">Assunto</label>
              <input
                type="text"
                className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">Mensagem</label>
              <textarea
                rows="4"
                className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-orange-500 focus:outline-none resize-none"
                placeholder="Digite sua mensagem aqui..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
