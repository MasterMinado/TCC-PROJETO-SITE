import { Header } from "../components/Header"
import { HeroSection } from "../components/HeroSection"
import { AnimatedBackground } from "../components/AnimatedBackground"
import { HomeContent } from "../components/HomeContent"

export function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <HomeContent />
      </div>
    </div>
  )
}
