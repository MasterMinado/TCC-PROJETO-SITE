"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"

const componentes = [
  {
    id: 1,
    nome: "Servo Motor MG995",
    preco: "R$ 30,00",
    descricao:
      "Utilizamos o componente Servo Motor MG995 para levantar os pinos do leitor de braille, pois ele oferece alto torque, durabilidade e engrenagens metálicas que suportam esforços repetitivos, garantindo confiabilidade ao sistema.",
    imagem: "/images/servo.png",
  },
  {
    id: 2,
    nome: "Módulo de Reconhecimento de Voz com Microfone VR3",
    preco: "R$ 227,00",
    descricao:
      "Interpretar comandos de voz e acionar automaticamente os mecanismos do protótipo, proporcionando uma experiência de usuário mais intuitiva e acessível.",
    imagem: "/images/microfone.png",
  },
  {
    id: 3,
    nome: "ESP32",
    preco: "R$ 59,90",
    descricao:
      "O ESP32 foi escolhido por ser um microcontrolador de alto desempenho, com conectividade Wi-Fi e Bluetooth integradas, suporte a protocolos de comunicação diversos (UART, SPI, I2C, PWM), baixo consumo de energia e ampla compatibilidade com bibliotecas, o que garante flexibilidade e eficiência no desenvolvimento do projeto.",
    imagem: "/images/esp32.webp",
  },
  {
    id: 4,
    nome: "Módulo MP3 -  DFPlayer Mini",
    preco: "R$ 18,90",
    descricao:
      "O DFPlayer Mini foi escolhido por ser um módulo compacto e econômico capaz de reproduzir arquivos MP3 a partir de cartão microSD, possuindo saída direta para alto-falante e funcionamento independente, o que simplifica bastante o projeto.",
    imagem: "/images/4MDA2_5.jpg",
  },
  {
    id: 5,
    nome: "Mini Alto-Falante",
    preco: "R$ 11,90",
    descricao:
      "O mini alto-falante foi escolhido por ser leve, compacto e capaz de reproduzir áudio com boa eficiência em baixas potências, sendo ideal para projetos embarcados e dispositivos portáteis.",
    imagem: "/images/download.webp",
  },
  {
    id: 6,
    nome: "Fonte Ajustável para Protoboard",
    preco: "R$ 7,12",
    descricao:
      "A fonte ajustável para protoboard foi escolhida por fornecer tensões de 3,3 V e 5 V, facilitando a alimentação de circuitos eletrônicos de forma prática, estável e segura durante os testes e prototipagem.",
    imagem: "/images/fonte.webp",
  },
  {
    id: 7,
    nome: "Protoboard",
    preco: "R$ 10,00",
    descricao: "Protoboard permite montar e testar circuitos de forma prática e sem solda.",
    imagem: "/images/protoboard.webp",
  },
  {
    id: 8,
    nome: "Filamento PLA Branco Velvet High Speed Premium - 1Kg",
    preco: "R$ 90,42",
    descricao: "Filamento PLA branco oferece boa qualidade de impressão e acabamento adequado para prototipagem.",
    imagem: "/images/filamento.webp",
  },
  {
    id: 9,
    nome: "Fios",
    preco: "R$ 9,90",
    descricao:
      "Utilizamos para conectar componentes eletrônicos em protoboards e módulos, permitindo montagem rápida e testes de circuitos sem solda.",
    imagem: "/images/jumpers.webp",
  },
]

export function ProdutoSection() {
  const { isDark } = useTheme()
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-8 sm:pb-12 lg:pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Área da imagem com navegação */}
        <div className="relative order-2 lg:order-1">
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
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 sm:p-3 rounded-full transition-all duration-200 hover:scale-110"
              disabled={isAnimating}
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={proximoComponente}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 sm:p-3 rounded-full transition-all duration-200 hover:scale-110"
              disabled={isAnimating}
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
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
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-200 ${
                  index === componenteAtual ? "bg-orange-500 w-8 sm:w-10" : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Informações do produto */}
        <div className="order-1 lg:order-2 space-y-4 sm:space-y-6">
          <h1
            className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold transition-all duration-300 ${
              isAnimating ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
            } ${isDark ? "text-gray-200" : "text-gray-800"}`}
          >
            {componente.nome}
          </h1>

          <p
            className={`text-xl sm:text-2xl lg:text-3xl text-orange-500 font-semibold transition-all duration-300 delay-75 ${
              isAnimating ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
            }`}
          >
            {componente.preco}
          </p>

          <p
            className={`text-base sm:text-lg lg:text-xl leading-relaxed transition-all duration-300 delay-150 ${
              isAnimating ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
            } ${isDark ? "text-gray-300" : "text-gray-700"}`}
          >
            {componente.descricao}
          </p>

          {/* Contador de componentes */}
          <div className={`text-sm sm:text-base ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            {componenteAtual + 1} de {componentes.length} componentes
          </div>
        </div>
      </div>
    </div>
  )
}
