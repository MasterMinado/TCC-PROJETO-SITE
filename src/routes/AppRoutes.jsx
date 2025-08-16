import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import { Produtos } from "../pages/Produtos"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/game" element={<div>Página Game</div>} />
      <Route path="/sobre" element={<div>Página Sobre</div>} />
      <Route path="/perfil" element={<div>Página Perfil</div>} />
    </Routes>
  )
}
