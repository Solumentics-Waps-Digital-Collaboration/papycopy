import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Livrez-vous partout au Cameroun ?",
    answer:
      "Oui, nous assurons une livraison nationale sécurisée. Que vous soyez à Yaoundé, Douala, Bafoussam ou dans toute autre ville du Cameroun, nous nous engageons à vous livrer dans les meilleurs délais.",
  },
  {
    question: "Comment sécuriser un achat de terrain ?",
    answer:
      "Notre expertise de 40 ans et notre service de suivi garantissent vos investissements. Nous proposons uniquement des terrains titrés et vous accompagnons dans toutes les démarches administratives jusqu'à l'obtention de votre titre foncier.",
  },
  {
    question: "Quels sont les délais pour une tenue sur mesure ?",
    answer:
      "Les délais varient selon la complexité de la commande. Comptez généralement entre 2 et 4 semaines pour une tenue sur mesure. Pour les commandes urgentes, contactez-nous directement via WhatsApp.",
  },
  {
    question: "Proposez-vous des facilités de paiement ?",
    answer:
      "Oui, nous offrons des facilités de paiement adaptées à vos besoins, notamment pour les achats de terrains et les commandes importantes. Discutons ensemble de la meilleure option pour vous.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 px-4 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-4xl text-black">Questions Fréquentes</h2>
          <p className="mt-4 text-zinc-600">Tout ce que vous devez savoir sur nos services.</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-zinc-200">
              <AccordionTrigger className="text-left font-medium text-black hover:text-[#D32F2F] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-600">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
