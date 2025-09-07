"use client"

import { Link } from "react-router-dom"
import { useTheme } from "../contexts/ThemeContext"
import { Sun, Moon, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const { isDark, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header
        className={`w-full px-4 sm:px-6 md:px-9 py-3 md:py-4 flex items-center justify-between fixed top-0 left-0 z-30 bg-transparent`}
      >
        <div className="md:hidden">
          <button onClick={toggleMenu} className="flex flex-col gap-1 cursor-pointer group" aria-label="Toggle menu">
            <div
              className={`w-6 h-0.5 transition-all group-hover:bg-orange-500 ${isDark ? "bg-white" : "bg-gray-800"}`}
            ></div>
            <div
              className={`w-6 h-0.5 transition-all group-hover:bg-orange-500 ${isDark ? "bg-white" : "bg-gray-800"}`}
            ></div>
            <div
              className={`w-6 h-0.5 transition-all group-hover:bg-orange-500 ${isDark ? "bg-white" : "bg-gray-800"}`}
            ></div>
          </button>
        </div>

        <div className="hidden md:block">
          <Link
            to="/"
            className={`text-xl font-bold hover:text-orange-500 transition-colors ${isDark ? "text-white" : "text-gray-800"}`}
          >
            BrailleTech
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
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

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 hover:bg-orange-500 ${
              isDark ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className={`border hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 bg-transparent px-3 md:px-4 py-1.5 md:py-2 rounded text-sm ${
              isDark ? "border-white text-white" : "border-gray-800 text-gray-800"
            }`}
          >
            Download
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={closeMenu}>
          <div
            className={`fixed top-0 left-0 w-64 h-full shadow-lg transform transition-transform duration-300 ${
              isDark ? "bg-gray-900" : "bg-white"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-800"}`}>BrailleTech</h2>
              <button
                onClick={closeMenu}
                className={`p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 ${isDark ? "text-white" : "text-gray-800"}`}
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col p-4 space-y-4">
              <Link
                to="/"
                onClick={closeMenu}
                className={`py-2 px-3 rounded hover:bg-orange-500 hover:text-white transition-colors font-medium ${isDark ? "text-white" : "text-gray-800"}`}
              >
                Home
              </Link>
              <Link
                to="/produtos"
                onClick={closeMenu}
                className={`py-2 px-3 rounded hover:bg-orange-500 hover:text-white transition-colors font-medium ${isDark ? "text-white" : "text-gray-800"}`}
              >
                Produto
              </Link>
              <Link
                to="/game"
                onClick={closeMenu}
                className={`py-2 px-3 rounded hover:bg-orange-500 hover:text-white transition-colors font-medium ${isDark ? "text-white" : "text-gray-800"}`}
              >
                Game
              </Link>
              <Link
                to="/refer"
                onClick={closeMenu}
                className={`py-2 px-3 rounded hover:bg-orange-500 hover:text-white transition-colors font-medium ${isDark ? "text-white" : "text-gray-800"}`}
              >
                Referências
              </Link>
              <Link
                to="/sobre"
                onClick={closeMenu}
                className={`py-2 px-3 rounded hover:bg-orange-500 hover:text-white transition-colors font-medium ${isDark ? "text-white" : "text-gray-800"}`}
              >
                Sobre
              </Link>
              <Link
                to="/tutorial"
                onClick={closeMenu}
                className={`py-2 px-3 rounded hover:bg-orange-500 hover:text-white transition-colors font-medium ${isDark ? "text-white" : "text-gray-800"}`}
              >
                Tutorial
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
