"use client"

import { NavLink } from "react-router-dom"
import { useTheme } from "../contexts/ThemeContext"
import { Sun, Moon, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const { isDark, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(v => !v)
  const closeMenu = () => setIsMenuOpen(false)

  const desktopItemClass = (isActive) =>
    `font-medium transition-colors ${isActive ? "text-orange-500" : isDark ? "text-white" : "text-gray-800"}`
  const mobileItemClass = (isActive) =>
    `py-2 px-3 rounded font-medium transition-colors ${isActive ? "text-orange-500 bg-orange-100" : isDark ? "text-white" : "text-gray-800"} hover:text-orange-500`

  return (
    <>
      <header className={`w-full px-4 sm:px-6 md:px-9 py-3 md:py-4 flex items-center justify-between fixed top-0 left-0 z-40 bg-transparent`}>
        {/* HAMBURGER (aparece em < md) */}
        <div className="md:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
            className="md:hidden z-50 flex flex-col gap-1 cursor-pointer group p-1"
          >
            <span className={`block w-6 h-0.5 transition-all ${isDark ? "bg-white" : "bg-gray-800"} group-hover:bg-orange-500`} />
            <span className={`block w-6 h-0.5 transition-all ${isDark ? "bg-white" : "bg-gray-800"} group-hover:bg-orange-500`} />
            <span className={`block w-6 h-0.5 transition-all ${isDark ? "bg-white" : "bg-gray-800"} group-hover:bg-orange-500`} />
          </button>
        </div>

        {/* LOGO (desktop) */}
        <div className="hidden md:block">
          <NavLink to="/" className={({ isActive }) => `text-xl font-bold transition-colors ${isActive ? "text-orange-500" : isDark ? "text-white" : "text-gray-800"}`}>
            BrailleTech
          </NavLink>
        </div>

        {/* NAV (desktop) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <NavLink to="/" className={({ isActive }) => desktopItemClass(isActive)}>
            Home
          </NavLink>
          <NavLink to="/tutorial" className={({ isActive }) => desktopItemClass(isActive)}>
            Tutorial
          </NavLink>
          <NavLink to="/produtos" className={({ isActive }) => desktopItemClass(isActive)}>
            Produtos
          </NavLink>
          <NavLink to="/game" className={({ isActive }) => desktopItemClass(isActive)}>
            Game
          </NavLink>
          <NavLink to="/refer" className={({ isActive }) => desktopItemClass(isActive)}>
            Referências
          </NavLink>
          <NavLink to="/sobre" className={({ isActive }) => desktopItemClass(isActive)}>
            Nosso Time
          </NavLink>
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 hover:bg-orange-500 ${isDark ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"}`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY + SLIDE PANEL */}
      <div className={`md:hidden fixed inset-0 z-40 pointer-events-none ${isMenuOpen ? "pointer-events-auto" : ""}`}>
        {/* backdrop */}
        <div
          onClick={closeMenu}
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
        />

        {/* panel */}
        <aside
          className={`fixed top-0 left-0 w-64 h-full transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} ${isDark ? "bg-gray-900" : "bg-white"} shadow-lg`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <NavLink to="/" onClick={closeMenu} className={({ isActive }) => `text-lg font-bold ${isActive ? "text-orange-500" : isDark ? "text-white" : "text-gray-800"}`}>
              BrailleTech
            </NavLink>
            <button onClick={closeMenu} className={`p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 ${isDark ? "text-white" : "text-gray-800"}`}>
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col p-4 space-y-4">
            <NavLink to="/" onClick={closeMenu} className={({ isActive }) => mobileItemClass(isActive)}>
              Home
            </NavLink>
            <NavLink to="/produtos" onClick={closeMenu} className={({ isActive }) => mobileItemClass(isActive)}>
              Produto
            </NavLink>
            <NavLink to="/game" onClick={closeMenu} className={({ isActive }) => mobileItemClass(isActive)}>
              Game
            </NavLink>
            <NavLink to="/refer" onClick={closeMenu} className={({ isActive }) => mobileItemClass(isActive)}>
              Referências
            </NavLink>
            <NavLink to="/sobre" onClick={closeMenu} className={({ isActive }) => mobileItemClass(isActive)}>
              Nosso Time
            </NavLink>
            <NavLink to="/tutorial" onClick={closeMenu} className={({ isActive }) => mobileItemClass(isActive)}>
              Tutorial
            </NavLink>
          </nav>
        </aside>
      </div>
    </>
  )
}
