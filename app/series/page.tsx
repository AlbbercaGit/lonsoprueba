"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import PageTransition from "@/components/page-transition"

export default function SeriesPage() {
  // Función para construir la URL de GitHub para las imágenes
  const getGitHubImageUrl = (path: string) => {
    return `https://raw.githubusercontent.com/AlbbercaGit/lonsoprueba/refs/heads/main/public${path}`
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
            SERIES
          </motion.h2>

          <div className="grid grid-cols-1 gap-24">
            {photoSeries.map((series, index) => (
              <motion.div
                key={series.id}
                className="mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-light tracking-wider mb-2">{series.title}</h3>
                  <p className="text-neutral-600 mb-4">{series.description}</p>
                  <div className="text-sm text-neutral-500">
                    {series.year} • {series.count} photographs
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <motion.div
                    className="relative aspect-[3/2] w-full"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={getGitHubImageUrl(series.featuredImage) || "/placeholder.svg"}
                      alt={`Featured image from ${series.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                  <div className="grid grid-cols-2 gap-4">
                    {series.previewImages.map((image, index) => (
                      <motion.div
                        key={index}
                        className="relative aspect-square w-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={getGitHubImageUrl(image) || "/placeholder.svg"}
                          alt={`Preview image ${index + 1} from ${series.title}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={`/series/${series.id}`}
                    className="inline-block border border-black px-6 py-2 text-sm tracking-wider hover:bg-black hover:text-white transition-colors"
                  >
                    VIEW FULL SERIES
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </PageTransition>
  )
}

const photoSeries = [
  {
    id: "shadows-and-light",
    title: "SHADOWS & LIGHT",
    description: "A study of contrast and form through architectural elements and natural light.",
    year: "2023",
    count: 24,
    featuredImage: "/shadow2.jpg",
    previewImages: ["/shadow3.jpg", "/shadow4.jpg", "/shadow5.jpg", "/shadow6.jpg"],
  },
  {
    id: "analog-memories",
    title: "ANALOG MEMORIES",
    description: "Shot entirely on 35mm film, this series explores nostalgia through vintage techniques and subjects.",
    year: "2022",
    count: 18,
    featuredImage: "/a.jpg",
    previewImages: ["/a2.jpg", "/a3.jpg", "/a4.jpg", "/a5.jpg"],
  },
  {
    id: "urban-textures",
    title: "URBAN TEXTURES",
    description: "Documenting the layers of history and human interaction in city environments.",
    year: "2021",
    count: 32,
    featuredImage: "/c.jpg",
    previewImages: ["/c5.jpg", "/c4.jpg", "/c3.jpg", "/c2.jpg"],
  },
]

