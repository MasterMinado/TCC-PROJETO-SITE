import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { Produtos } from "../pages/Produtos"
import { Game } from "../pages/Game"
import { Sobre } from "../pages/Sobre"
import { Perfil } from "../pages/Perfil"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produto" element={<Produtos />} />
      <Route path="/game" element={<Game />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  )
}
