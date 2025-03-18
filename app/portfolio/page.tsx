"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import PageTransition from "@/components/page-transition"

export default function PortfolioPage() {
  // Función para construir la URL de GitHub para las imágenes
  const getGitHubImageUrl = (path: string) => {
    return `https://raw.githubusercontent.com/AlbbercaGit/lonsoprueba/refs/heads/main/public${path}`
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 py-12 px-6 md:px-12">
          <motion.h2
            className="text-3xl font-light tracking-wider text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            PORTFOLIO
          </motion.h2>

          <div className="grid grid-cols-1 gap-24">
            {categories.map((category) => (
              <div key={category.id} className="scroll-mt-24" id={category.id}>
                <motion.div
                  className="relative aspect-[21/9] w-full mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Image
                    src={getGitHubImageUrl(category.image) || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="border border-white px-8 py-3 text-white tracking-widest bg-black/30 backdrop-blur-sm">
                      {category.title}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {category.photos.map((photo, index) => (
                    <motion.div key={index} className="group" variants={itemVariants}>
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={getGitHubImageUrl(photo.src) || "/placeholder.svg"}
                          alt={photo.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <p className="mt-2 text-sm text-neutral-600">{photo.caption}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </PageTransition>
  )
}

const categories = [
  {
    id: "street",
    title: "SHADOWS & LIGHT",
    image: "/shadow2.jpg",
    photos: [
      { src: "/shadow.jpg", alt: "Architectural shadows 1", caption: "Morning light, Museum of Modern Art" },
      { src: "/shadow3.jpg", alt: "Architectural shadows 2", caption: "Stairwell patterns, Downtown" },
      { src: "/shadow4.jpg", alt: "Architectural shadows 3", caption: "Window reflections, Financial District" },
      { src: "/shadow5.jpg", alt: "Architectural shadows 4", caption: "Concrete and light, Brutalist Library" },
      { src: "/shadow6.jpg", alt: "Architectural shadows 5", caption: "Skylight patterns, Central Station" },
      { src: "/shadow7.jpg", alt: "Architectural shadows 6", caption: "Facade details, Historic Quarter" },
    ],
  },
  {
    id: "portrait",
    title: "ANALOG MEMORIES",
    image: "/a.jpg",
    photos: [
      { src: "/a7.jpg", alt: "Analog photo 1", caption: "Summer afternoon, Kodak Portra 400" },
      { src: "/a2.jpg", alt: "Analog photo 2", caption: "Corner store, Ilford HP5" },
      { src: "/a3.jpg", alt: "Analog photo 3", caption: "Vintage car, Fuji Superia 400" },
      { src: "/a4.jpg", alt: "Analog photo 4", caption: "Diner counter, Kodak Tri-X" },
      { src: "/a5.jpg", alt: "Analog photo 5", caption: "Record store, Lomography 800" },
      { src: "/a6.jpg", alt: "Analog photo 6", caption: "Neon signs, CineStill 800T" },
    ],
  },
  {
    id: "nature",
    title: "URBAN TEXTURES",
    image: "/c.jpg",
    photos: [
      { src: "/c2.jpg", alt: "Urban texture 1", caption: "Weathered brick, East Side" },
      { src: "/c5.jpg", alt: "Urban texture 2", caption: "Peeling posters, Theater District" },
      { src: "/c3.jpg", alt: "Urban texture 3", caption: "Rust patterns, Industrial Zone" },
      { src: "/c4.jpg", alt: "Urban texture 4", caption: "Graffiti layers, Underpass" },
      { src: "/c6.jpg", alt: "Urban texture 5", caption: "Cracked pavement, Downtown" },
      { src: "/c7.jpg", alt: "Urban texture 6", caption: "Metal patina, Harbor Area" },
    ],
  },
]

