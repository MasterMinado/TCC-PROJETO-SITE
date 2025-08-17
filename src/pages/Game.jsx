import { Header } from "../components/Header"
import { AnimatedBackground } from "../components/AnimatedBackground"
import { GameSection } from "../components/GameSection"

export function Game() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <GameSection />
      </div>
    </div>
  )
}
