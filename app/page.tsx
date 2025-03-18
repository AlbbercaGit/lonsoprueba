"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import PageTransition from "@/components/page-transition"

export default function Home() {
  // Función para construir la URL de GitHub para las imágenes
  const getGitHubImageUrl = (path: string) => {
    return `https://raw.githubusercontent.com/AlbbercaGit/lonsoprueba/refs/heads/main/public${path}`
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 flex flex-col">
          <section className="relative h-[90vh] w-full">
            <Image
              src={getGitHubImageUrl("/lonso3.jpg") || "/placeholder.svg"}
              alt="Featured photograph"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <div className="text-center p-6 text-white">
                <motion.h2
                  className="text-3xl md:text-5xl font-light tracking-widest mb-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  TIMELESS MOMENTS
                </motion.h2>
                <motion.p
                  className="text-sm md:text-base max-w-md mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  Capturing the essence of nostalgia with a modern perspective
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
                <ChevronDown className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
          </section>

          <section className="py-16 px-6 md:px-12">
            <motion.h2
              className="text-2xl font-light tracking-wider text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              FEATURED COLLECTIONS
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {featuredCollections.map((collection) => (
                <motion.div key={collection.slug} variants={itemVariants}>
                  <Link href={`/series/${collection.slug}`} className="group">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={getGitHubImageUrl(collection.coverImage) || "/placeholder.svg"}
                        alt={collection.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="border border-white text-white px-4 py-2 text-sm tracking-wider">
                          VIEW SERIES
                        </div>
                      </div>
                    </div>
                    <h3 className="mt-4 text-lg font-light tracking-wider">{collection.title}</h3>
                    <p className="text-sm text-neutral-600">{collection.description}</p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </main>
      </div>
    </PageTransition>
  )
}

const featuredCollections = [
  {
    title: "SHADOWS & LIGHT",
    description: "A study of contrast and form through architectural elements and natural light",
    slug: "shadows-and-light",
    coverImage: "/lonso7.jpg",
  },
  {
    title: "ANALOG MEMORIES",
    description: "Shot entirely on 35mm film, this series explores nostalgia through vintage techniques",
    slug: "analog-memories",
    coverImage: "/lonso6.jpg",
  },
  {
    title: "URBAN TEXTURES",
    description: "Documenting the layers of history and human interaction in city environments",
    slug: "urban-textures",
    coverImage: "/lonso4.jpg",
  },
]

