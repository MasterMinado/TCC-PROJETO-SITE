import PlayButton from "./PlayButton.jsx"

export default function HeroSection() {
  return (
    <section className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12 relative z-10">
      <div className="flex-1 space-y-8">
        {/* Main title with staggered animation */}
        <div className="space-y-4">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-in slide-in-from-left duration-1000">
            <span className="text-white">Tecnologia</span>{" "}
            <span className="text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text">a favor</span>
          </h1>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-in slide-in-from-left duration-1000 delay-200">
            <span className="text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text">
              da inclusão.
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="space-y-4 animate-in slide-in-from-left duration-1000 delay-500">
          <h2 className="text-2xl lg:text-3xl font-semibold text-white">Nosso projeto, feito para tornar o</h2>
          <h2 className="text-2xl lg:text-3xl font-semibold text-white">Braille acessível a todos.</h2>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-lg max-w-2xl leading-relaxed animate-in slide-in-from-left duration-1000 delay-700">
          Criamos uma ferramenta acessível que aproxima cegos da leitura em Braille, unindo educação, inclusão e
          inovação.
        </p>
      </div>

      {/* Play button */}
      <div className="flex-1 flex justify-center lg:justify-end animate-in slide-in-from-right duration-1000 delay-300">
        <PlayButton />
      </div>
    </section>
  )
}
