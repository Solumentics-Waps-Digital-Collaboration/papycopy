import { Star, ShieldCheck, Truck } from "lucide-react"

const values = [
  {
    icon: Star,
    title: "Qualité Premium",
    description: "Matériaux nobles et finitions exceptionnelles",
  },
  {
    icon: ShieldCheck,
    title: "Service Fiable",
    description: "40 ans de confiance et d'engagement",
  },
  {
    icon: Truck,
    title: "Livraison Nationale",
    description: "Partout au Cameroun, en toute sécurité",
  },
]

export function ValueProposition() {
  return (
    <section className="bg-black text-white py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center text-center py-8 md:py-0 md:px-8">
              <value.icon className="h-10 w-10 text-[#D32F2F] mb-4" />
              <h3 className="font-serif font-bold text-xl mb-2">{value.title}</h3>
              <p className="text-zinc-400 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
