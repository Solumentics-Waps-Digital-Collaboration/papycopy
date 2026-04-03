import { Scissors, Ruler, Paintbrush, CheckCircle2 } from "lucide-react"

const steps = [
  {
    icon: Ruler,
    title: "Mesure de Précision",
    description: "Un relevé exhaustif de votre morphologie pour un tombé parfait.",
  },
  {
    icon: Paintbrush,
    title: "Choix des Étoffes",
    description: "Sélection parmi les plus beaux Bazins, tissus anglais et italiens.",
  },
  {
    icon: Scissors,
    title: "Coupe Artisanale",
    description: "Chaque pièce est tracée et coupée à la main par nos maîtres tailleurs.",
  },
  {
    icon: CheckCircle2,
    title: "Finition Main",
    description: "Des détails minutieux qui font la différence du luxe véritable.",
  },
]

export function ExperienceSection() {
  return (
    <section className="py-24 bg-zinc-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#D32F2F] font-bold text-sm tracking-widest uppercase">L'Art du Tailleur</span>
            <h2 className="mt-4 font-serif font-bold text-4xl md:text-5xl leading-tight">
              Le Savoir-Faire <br /> PAPYCOTY
            </h2>
            <p className="mt-6 text-zinc-400 text-lg leading-relaxed max-w-xl">
              Depuis 1985, nous perpétuons la tradition de la grande mesure. Chaque costume est le fruit d'un dialogue entre le client et l'artisan, une œuvre unique qui sublime votre autorité naturelle.
            </p>
            
            <div className="mt-12 space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-[#D32F2F]">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl">{step.title}</h3>
                    <p className="mt-2 text-zinc-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-800">
              <img 
                src="/papy-9.jpg" 
                alt="Atelier PAPYCOTY" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#D32F2F] p-8 rounded-xl shadow-2xl hidden md:block">
              <p className="text-4xl font-serif font-bold italic">40</p>
              <p className="text-xs uppercase tracking-widest">Ans de Passion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
