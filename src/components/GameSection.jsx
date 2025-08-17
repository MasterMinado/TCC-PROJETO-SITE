import { useTheme } from "../contexts/ThemeContext"

export function GameSection() {
  const { isDark } = useTheme()
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="text-orange-500">Game</span> Braille
        </h1>
        <p className={`text-gray-300 text-lg ${isDark ? "text-gray-400" : "text-gray-800"}`}>Embarque nessa jornada e venha conhecer nosso jogo</p>
      </div>

      {/* História do Jogo */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">História do jogo</h2>
        <div className="max-w-4xl mx-auto">
          <p className={`text-gray-300 leading-relaxed text-justify ${isDark ? "text-gray-400" : "text-gray-800"}`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      {/* Game Demo */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="text-orange-500">Game</span> Demo
        </h2>
        <div className="flex justify-center">
          <div className="bg-zinc-800 rounded-lg p-8 w-full max-w-md aspect-video flex items-center justify-center border border-zinc-700">
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 rounded-full p-4">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Pronto para começar sua jornada?</h2>
        <p className={`text-gray-300 mb-8 max-w-md mx-auto ${isDark ? "text-gray-400" : "text-gray-800"}`}>
          Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
        </p>
        <button className={`bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 flex items-center gap-2 mx-auto`}>
          <span className={`text-orange-500`}>▶</span>
          Jogue no Gdevelop
          <svg className={`w-4 h-4 "text-gray-400"`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
