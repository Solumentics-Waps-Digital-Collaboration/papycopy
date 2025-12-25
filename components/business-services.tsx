import { Map, FileCheck, Car, Shirt, Scissors, Crown } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const businessServices = [
  {
    icon: Map,
    title: "Immobilier & Lotissement",
    description: "Vente de terrains titrés et lotissement sécurisé.",
  },
  {
    icon: FileCheck,
    title: "Suivi Administratif",
    description: "Accompagnement complet pour vos dossiers fonciers.",
  },
  {
    icon: Car,
    title: "Vente Véhicules",
    description: "Importation et vente de véhicules garantis.",
  },
]

const fashionServices = [
  {
    icon: Scissors,
    title: "Couture Sur Mesure",
    description: "Création de pièces uniques adaptées à votre morphologie.",
  },
  {
    icon: Shirt,
    title: "Prêt-à-Porter Premium",
    description: "Collections exclusives pour hommes et femmes d'exception.",
  },
  {
    icon: Crown,
    title: "Tenues de Cérémonie",
    description: "Mariages, baptêmes et événements spéciaux.",
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
