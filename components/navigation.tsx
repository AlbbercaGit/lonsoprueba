"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const links = [
    { href: "/portfolio", label: "Portfolio" },
    { href: "/series", label: "Series" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="h-[10vh] py-6 px-6 md:px-12 flex justify-between items-center  top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <div>
        <h1 className="text-xl md:text-2xl font-light tracking-widest uppercase">
          <Link href="/">Lonso.jpg</Link>
        </h1>
      </div>

      <nav className="hidden md:flex space-x-8 relative">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm tracking-wider hover:text-neutral-500 transition-colors relative py-1"
          >
            {link.label}
            {pathname === link.href && (
              <motion.div
                className="absolute bottom-0 left-0 h-[1px] bg-black"
                layoutId="underline"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </nav>

      <button className="md:hidden flex flex-col space-y-2" onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
        <div className="w-6 h-[1px] bg-black"></div>
        <div className="w-6 h-[1px] bg-black"></div>
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 flex flex-col p-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-12">
              <h1 className="text-xl font-light tracking-widest uppercase">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  Lonso.jpg
                </Link>
              </h1>
              <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-2xl tracking-wider hover:text-neutral-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      className="h-[1px] bg-black mt-1"
                      layoutId="underlineMobile"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                    />
                  )}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

