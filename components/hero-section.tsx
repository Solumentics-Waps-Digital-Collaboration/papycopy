import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-[85vh] flex items-end justify-center pb-20 md:pb-32">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/elegant-luxury-african-fashion-store-interior-with.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif font-black text-5xl md:text-7xl lg:text-8xl uppercase text-white tracking-tight text-balance">
          L'Élégance et la Mafia
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          Depuis 1985. Le prêt-à-porter pour ceux qui dirigent. Alliant style, autorité et fiabilité.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black bg-transparent min-w-[220px]"
            asChild
          >
            <a href="#couture">Découvrir la Collection</a>
          </Button>
          <Button size="lg" className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white gap-2 min-w-[220px]" asChild>
            <a href="https://wa.me/237675232316" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Commander sur WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
