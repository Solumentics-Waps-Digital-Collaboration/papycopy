import Image from "next/image"

export function AuthoritySection() {
  return (
    <section id="about" className="bg-zinc-50 py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-xl shadow-2xl overflow-hidden aspect-[4/5]">
              <Image src="/african-businessman-in-elegant-suit-shaking-hands-.jpg" alt="Le PDG avec Samuel Eto'o" fill className="object-cover" />
            </div>
            <p className="mt-4 text-sm text-zinc-600 text-center italic">Le PDG avec Samuel Eto'o</p>
          </div>

          {/* Right - Content */}
          <div className="lg:pl-8">
            <span className="text-[#D32F2F] font-bold text-sm tracking-wider uppercase">Since 1985</span>
            <h2 className="mt-4 font-serif font-bold text-4xl md:text-5xl text-black leading-tight text-balance">
              Validé par les Légendes.
            </h2>
            <p className="mt-6 text-lg text-zinc-700 leading-relaxed">
              Plus qu'une marque, un cercle de confiance. Une poignée de main qui scelle 40 ans de fiabilité. Chez
              PAPYCOTY, nous habillons les leaders et sécurisons vos investissements.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="text-center lg:text-left">
                <p className="font-serif font-bold text-3xl md:text-4xl text-[#D32F2F]">40+</p>
                <p className="mt-1 text-sm text-zinc-600">Ans d'expérience</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-serif font-bold text-3xl md:text-4xl text-[#D32F2F]">100%</p>
                <p className="mt-1 text-sm text-zinc-600">Fiabilité</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-serif font-bold text-3xl md:text-4xl text-[#D32F2F]">#1</p>
                <p className="mt-1 text-sm text-zinc-600">Leader National</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
