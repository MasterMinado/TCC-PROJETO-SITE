
"use client"

import { Routes, Route } from "react-router-dom"
import {Header} from "../components/Header"
import {Home} from "../pages/Home"
import {Game} from "../pages/Game"
import {Sobre} from "../pages/Sobre"
import {Produtos} from "../pages/Produtos"
import {Refer} from "../pages/Refer"
import Tutorial from "../pages/tutorial"

export function AppRoutes() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/game" element={<Game />} />
        <Route path="/refer" element={<Refer />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/tutorial" element={<Tutorial />} />
      </Routes>
    </div>
  )
}
