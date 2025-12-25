import Image from "next/image"

const collections = [
  {
    title: "Dentelles de Luxe",
    image: "/african-luxury-lace-fabric-dress-elegant-couture.jpg",
  },
  {
    title: "Cérémonie",
    image: "/african-ceremonial-traditional-attire-elegant-embr.jpg",
  },
  {
    title: "Business Suits",
    image: "/african-businessman-tailored-suit-professional-ele.jpg",
  },
  {
    title: "Bazin Riche",
    image: "/african-bazin-riche-fabric-traditional-luxury-clot.jpg",
  },
  {
    title: "Haute Couture",
    image: "/african-haute-couture-fashion-elegant-dress-modern.jpg",
  },
  {
    title: "Accessoires",
    image: "/african-luxury-fashion-accessories-jewelry-elegant.jpg",
  },
]

export function FashionShowcase() {
  return (
    <section id="couture" className="py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-black">Nos Collections Couture</h2>
          <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
            Des pièces uniques créées avec passion et expertise depuis plus de 40 ans.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {collections.map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg break-inside-avoid">
              <div className="relative aspect-auto">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-serif font-bold text-xl">Voir Détails</span>
                </div>
              </div>
              {/* Category Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-medium">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
