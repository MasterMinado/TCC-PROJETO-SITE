"use client"

import { useState } from "react"

export function PlayButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative">
      <button
        className="w-32 h-32 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-2"></div>
      </button>

      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-30 animate-ping"></div>
    </div>
  )
}
