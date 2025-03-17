"use client"

import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-light tracking-widest">MENU</h2>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-6 mt-12">
            <Link
              href="/"
              className="text-xl tracking-wider py-2 border-b border-neutral-200"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className="text-xl tracking-wider py-2 border-b border-neutral-200"
              onClick={() => setOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/series"
              className="text-xl tracking-wider py-2 border-b border-neutral-200"
              onClick={() => setOpen(false)}
            >
              Series
            </Link>
            <Link
              href="/about"
              className="text-xl tracking-wider py-2 border-b border-neutral-200"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-xl tracking-wider py-2 border-b border-neutral-200"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </nav>
          <div className="mt-auto pt-6">
            <div className="flex justify-center space-x-6">
              <Link href="#" className="text-neutral-600 hover:text-black transition-colors">
                Instagram
              </Link>
              <Link href="#" className="text-neutral-600 hover:text-black transition-colors">
                Twitter
              </Link>
              <Link href="#" className="text-neutral-600 hover:text-black transition-colors">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

