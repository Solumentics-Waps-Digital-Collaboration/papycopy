import { Map, FileCheck, Car, Shirt, Scissors, Crown } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const businessServices = [
  {
    icon: Map,
    title: "Gestion Immobilière & Foncière",
    description: "Expertise en acquisition de terrains titrés. Nous sécurisons vos investissements immobiliers avec une rigueur absolue au Cameroun.",
  },
  {
    icon: FileCheck,
    title: "Expertise Administrative",
    description: "Simplifiez vos démarches. Nous assurons le suivi complet de vos dossiers fonciers, de l'obtention du titre foncier à la mutation.",
  },
  {
    icon: Car,
    title: "Solutions Mobilité Premium",
    description: "Importation et vente de véhicules de prestige. Une sélection rigoureuse pour garantir fiabilité, confort et standing.",
  },
]

const fashionServices = [
  {
    icon: Scissors,
    title: "Grande Mesure Traditionnelle",
    description: "Le sommet de l'élégance. Chaque pièce est conçue pour refléter votre stature et votre personnalité unique.",
  },
  {
    icon: Shirt,
    title: "Ligne Prêt-à-Porter",
    description: "Une collection d'exception pour l'homme d'affaires pressé qui ne transige jamais sur la qualité.",
  },
  {
    icon: Crown,
    title: "Événements & Cérémonies",
    description: "Sublimez vos moments forts. Mariages et réceptions officielles avec des tenues qui marquent les esprits.",
  },
]

export function BusinessServices() {
  return (
    <section id="business" className="py-24 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="fashion" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-zinc-100 p-1">
              <TabsTrigger
                value="fashion"
                className="px-8 py-3 data-[state=active]:bg-[#D32F2F] data-[state=active]:text-white"
              >
                MODE & STYLE
              </TabsTrigger>
              <TabsTrigger
                value="business"
                className="px-8 py-3 data-[state=active]:bg-[#D32F2F] data-[state=active]:text-white"
              >
                SOLUTIONS D'AFFAIRES
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="fashion" className="mt-0">
            <div className="grid md:grid-cols-3 gap-6">
              {fashionServices.map((service, index) => (
                <Card key={index} className="border-zinc-200 hover:border-[#D32F2F] transition-colors bg-white">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-[#D32F2F]/10 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-[#D32F2F]" />
                    </div>
                    <CardTitle className="font-serif text-xl text-black">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="business" className="mt-0">
            <div className="grid md:grid-cols-3 gap-6">
              {businessServices.map((service, index) => (
                <Card key={index} className="border-zinc-200 hover:border-[#D32F2F] transition-colors bg-white">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-[#D32F2F]/10 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-[#D32F2F]" />
                    </div>
                    <CardTitle className="font-serif text-xl text-black">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
