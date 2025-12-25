"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactFooter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <footer id="contact" className="bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div>
            <h3 className="font-serif font-bold text-2xl mb-6">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Nom complet"
                className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <Input
                type="email"
                placeholder="Email"
                className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <Select onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                <SelectTrigger className="bg-zinc-900 border-zinc-800 text-white">
                  <SelectValue placeholder="Sujet" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-zinc-800">
                  <SelectItem value="commande">Commande</SelectItem>
                  <SelectItem value="immobilier">Immobilier</SelectItem>
                  <SelectItem value="info">Information Générale</SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Votre message..."
                rows={5}
                className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500 resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <Button type="submit" className="w-full bg-[#D32F2F] hover:bg-[#B71C1C] text-white">
                Envoyer le message
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-[#D32F2F] mt-1 shrink-0" />
                <p className="text-zinc-300">Yaoundé - Montée Jacko Elig-Essono, collée à Jully Voyage</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-[#D32F2F] shrink-0" />
                <p className="text-zinc-300">675 23 23 16 / 699 16 86 48</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-[#D32F2F] shrink-0" />
                <p className="text-zinc-300">contact@papycoty.com</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 rounded-lg overflow-hidden bg-zinc-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.8065454066183!2d11.516389!3d3.8480556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf0a0a0a0a0a%3A0x0!2sYaounde%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1635959999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PAPYCOTY Store Location"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-500">© 2025 PAPYCOTY Store. Tous droits réservés.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-zinc-400 hover:text-[#D32F2F] transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-[#D32F2F] transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-[#D32F2F] transition-colors" aria-label="TikTok">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
