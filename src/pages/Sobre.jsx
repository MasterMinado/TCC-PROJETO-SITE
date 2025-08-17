import { Header } from "../components/Header";
import { AnimatedBackground } from "../components/AnimatedBackground";
import { SobreSection } from "../components/SobreSection";

export function Sobre() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <SobreSection />
    </div>
  )
}