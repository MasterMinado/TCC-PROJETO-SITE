import { Link } from "react-router-dom"

export function Header() {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between relative z-20">
      {/* Menu hamburger */}
      <div className="flex flex-col gap-1 cursor-pointer group">
        <div className="w-6 h-0.5 bg-white transition-all group-hover:bg-orange-500"></div>
        <div className="w-6 h-0.5 bg-white transition-all group-hover:bg-orange-500"></div>
        <div className="w-6 h-0.5 bg-white transition-all group-hover:bg-orange-500"></div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <Link to="/" className="text-white hover:text-orange-500 transition-colors font-medium">
          Home
        </Link>
        <Link to="/produto" className="text-white hover:text-orange-500 transition-colors font-medium">
          Produto
        </Link>
        <Link to="/game" className="text-white hover:text-orange-500 transition-colors font-medium">
          Game
        </Link>
        <Link to="/sobre" className="text-white hover:text-orange-500 transition-colors font-medium">
          Sobre nós
        </Link>
        <Link to="/perfil" className="text-white hover:text-orange-500 transition-colors font-medium">
          Perfil
        </Link>
      </nav>

      {/* Download button */}
      <button className="border border-white text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 bg-transparent px-4 py-2 rounded">
        Download
      </button>
    </header>
  )
}
