"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { X } from "lucide-react"

const images = Array.from({ length: 30 }, (_, i) => `/papy-${i + 1}.jpg`)

export function FashionShowcase() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="couture" className="py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-black">Nos Collections Couture</h2>
          <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
            L'excellence du sur-mesure pour l'homme moderne. Découvrez l'intégralité de notre savoir-faire à travers 30 pièces d'exception.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((src, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div 
                  className="relative group overflow-hidden rounded-lg cursor-zoom-in break-inside-avoid"
                  onClick={() => setSelectedImage(src)}
                >
                  <Image
                    src={src}
                    alt={`PAPYCOTY Collection ${index + 1}`}
                    width={400}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none flex items-center justify-center">
                <DialogTitle className="sr-only">Aperçu de la collection PAPYCOTY</DialogTitle>
                <DialogDescription className="sr-only">Vue détaillée de la pièce numéro {index + 1}</DialogDescription>
                <div className="relative w-full max-h-[90vh] flex items-center justify-center">
                   <Image
                    src={src}
                    alt={`PAPYCOTY Collection ${index + 1}`}
                    width={1200}
                    height={1600}
                    className="max-w-full max-h-[90vh] object-contain rounded-lg"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
