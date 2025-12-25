"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, MessageCircle, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#couture", label: "Couture" },
  { href: "#business", label: "Business" },
  { href: "#about", label: "À Propos" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="h-8 bg-black text-white flex items-center justify-center">
        <p className="text-xs tracking-wide">Livraison nationale disponible 🇨🇲 | Service Client 24/7</p>
      </div>

      {/* Main Navbar */}
      <nav className="h-20 bg-white shadow-sm flex items-center px-4 lg:px-8">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-[#D32F2F] flex items-center justify-center bg-zinc-100">
              <span className="text-[#D32F2F] font-serif font-bold text-lg">P</span>
            </div>
            <span className="font-serif font-bold text-xl tracking-tight text-black">PAPYCOTY STORE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-black hover:text-[#D32F2F] relative group transition-colors"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D32F2F] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-black hover:text-[#D32F2F]">
              <Search className="h-5 w-5" />
              <span className="sr-only">Rechercher</span>
            </Button>

            <Button className="hidden sm:flex bg-[#D32F2F] hover:bg-[#B71C1C] text-white gap-2" asChild>
              <a href="https://wa.me/237675232316" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white">
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-black hover:text-[#D32F2F] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white gap-2 mt-4" asChild>
                    <a href="https://wa.me/237675232316" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}
