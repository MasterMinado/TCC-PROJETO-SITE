"use client"

import { Link } from "react-router-dom"
import { useTheme } from "../contexts/ThemeContext"
import { Sun, Moon } from "lucide-react"

export function Header() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <header className={`w-full px-9 py-4 flex items-center justify-between fixed top-0 left-0 z-30 bg-transparent`}
>
      {/* Menu hamburger */}
      <div className="flex flex-col gap-1 cursor-pointer group">
        <div
          className={`w-6 h-0.5 transition-all group-hover:bg-orange-500 ${isDark ? "bg-white" : "bg-gray-800"}`}
        ></div>
        <div
          className={`w-6 h-0.5 transition-all group-hover:bg-orange-500 ${isDark ? "bg-white" : "bg-gray-800"}`}
        ></div>
        <div
          className={`w-6 h-0.5 transition-all group-hover:bg-orange-500 ${isDark ? "bg-white" : "bg-gray-800"}`}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <Link
          to="/"
          className={`hover:text-orange-500 transition-colors font-medium ${isDark ? "text-white" : "text-gray-800"}`}
        >
          Home
        </Link>
        <Link
          to="/produtos"
          className={`hover:text-orange-500 transition-colors font-medium ${isDark ? "text-white" : "text-gray-800"}`}
        >
          Produto
        </Link>
        <Link
          to="/game"
          className={`hover:text-orange-500 transition-colors font-medium ${isDark ? "text-white" : "text-gray-800"}`}
        >
          Game
        </Link>
        <Link
          to="/refer"
          className={`hover:text-orange-500 transition-colors font-medium ${isDark ? "text-white" : "text-gray-800"}`}
        >
          Referências
        </Link>
        <Link
          to="/sobre"
          className={`hover:text-orange-500 transition-colors font-medium ${isDark ? "text-white" : "text-gray-800"}`}
        >
          Sobre
        </Link>
        <Link
          to="/tutorial"
          className={`hover:text-orange-500 transition-colors font-medium ${isDark ? "text-white" : "text-gray-800"}`}
        >
          Tutorial
        </Link>
      </nav>

      {/* Theme toggle and Download button */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-all duration-300 hover:bg-orange-500 ${
            isDark ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
          }`}
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button
          className={`border hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 bg-transparent px-4 py-2 rounded ${
            isDark ? "border-white text-white" : "border-gray-800 text-gray-800"
          }`}
        >
          Download
        </button>
      </div>
    </header>
  )
}
