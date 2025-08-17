import { useTheme } from "../contexts/ThemeContext"

export function AnimatedBackground() {
  const { isDark } = useTheme()

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          isDark
            ? "from-zinc-900 via-zinc-950 to-black" // fundo dark
            : "from-zinc-100 via-zinc-200 to-white" // fundo claro
        }`}
      ></div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full opacity-20 animate-pulse ${
            isDark ? "bg-orange-500" : "bg-black" }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
