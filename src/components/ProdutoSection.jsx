"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const componentes = [
  {
    id: 1,
    nome: "Componente Alpha",
    preco: "R$ 25,00",
    descricao:
      "Utilizamos o componente Alpha para [função], pois ele oferece [benefício principal], tornando o protótipo mais eficiente e acessível.",
    imagem: "/componente-alpha.png",
  },
  {
    id: 2,
    nome: "Componente Beta",
    preco: "R$ 35,00",
    descricao:
      "Utilizamos o componente Beta para [função], pois ele oferece [benefício principal], tornando o protótipo mais eficiente e acessível.",
    imagem: "/componente-beta.png",
  },
  {
    id: 3,
    nome: "Componente Gamma",
    preco: "R$ 45,00",
    descricao:
      "Utilizamos o componente Gamma para [função], pois ele oferece [benefício principal], tornando o protótipo mais eficiente e acessível.",
    imagem: "/componente-gamma.png",
  },
  {
    id: 4,
    nome: "Componente Delta",
    preco: "R$ 30,00",
    descricao:
      "Utilizamos o componente Delta para [função], pois ele oferece [benefício principal], tornando o protótipo mais eficiente e acessível.",
    imagem: "/componente-delta.png",
  },
  {
    id: 5,
    nome: "Componente Epsilon",
    preco: "R$ 40,00",
    descricao:
      "Utilizamos o componente Epsilon para [função], pois ele oferece [benefício principal], tornando o protótipo mais eficiente e acessível.",
    imagem: "/componente-epsilon.png",
  },
  {
    id: 6,
    nome: "Componente Zeta",
    preco: "R$ 50,00",
    descricao:
      "Utilizamos o componente Zeta para [função], pois ele oferece [benefício principal], tornando o protótipo mais eficiente e acessível.",
    imagem: "/componente-zeta.png",
  },
  {
    id: 7,
    nome: "Componente Eta",
    preco: "R$ 28,00",
    descricao:
      "Utilizamos o componente Eta para [função], pois ele oferece [benefício principal], tornando o protótipo mais eficiente e acessível.",
    imagem: "/componente-eta.png",
  },
  {
    id: 8,
    nome: "Componente Theta",
    preco: "R$ 55,00",
    descricao:
      "Utilizamos o componente Theta para [função], pois ele oferece [benefício principal], tornando o protótipo mais eficiente e acessível.",
    imagem: "/componente-theta.png",
  },
  {
    id: 9,
    nome: "Componente Iota",
    preco: "R$ 38,00",
    descricao:
      "Utilizamos o componente Iota para [função], pois ele oferece [benefício principal], tornando o protótipo mais eficiente e acessível.",
    imagem: "/componente-iota.png",
  },
]

export function ProdutoSection() {
  const [componenteAtual, setComponenteAtual] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const proximoComponente = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setComponenteAtual((prev) => (prev + 1) % componentes.length)
      setIsAnimating(false)
    }, 150)
  }

  const componenteAnterior = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setComponenteAtual((prev) => (prev - 1 + componentes.length) % componentes.length)
      setIsAnimating(false)
    }, 150)
  }

  const componente = componentes[componenteAtual]

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Área da imagem com navegação */}
        <div className="relative">
          <div className="bg-gray-800 rounded-lg aspect-square flex items-center justify-center relative overflow-hidden">
            <img
              src={componente.imagem || "/placeholder.svg"}
              alt={componente.nome}
              className={`w-full h-full object-cover transition-all duration-300 ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            />

            {/* Botões de navegação */}
            <button
              onClick={componenteAnterior}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
              disabled={isAnimating}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={proximoComponente}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
              disabled={isAnimating}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Indicadores de página */}
          <div className="flex justify-center mt-4 space-x-2">
            {componentes.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true)
                    setTimeout(() => {
                      setComponenteAtual(index)
                      setIsAnimating(false)
                    }, 150)
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === componenteAtual ? "bg-orange-500 w-6" : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Informações do produto */}
        <div className="text-white">
          <h1
            className={`text-4xl font-bold mb-4 transition-all duration-300 ${
              isAnimating ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
            }`}
          >
            {componente.nome}
          </h1>

          <p
            className={`text-2xl text-orange-500 font-semibold mb-6 transition-all duration-300 delay-75 ${
              isAnimating ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
            }`}
          >
            {componente.preco}
          </p>

          <p
            className={`text-gray-300 text-lg leading-relaxed transition-all duration-300 delay-150 ${
              isAnimating ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
            }`}
          >
            {componente.descricao}
          </p>

          {/* Contador de componentes */}
          <div className="mt-8 text-sm text-gray-500">
            {componenteAtual + 1} de {componentes.length} componentes
          </div>
        </div>
      </div>
    </div>
  )
}
