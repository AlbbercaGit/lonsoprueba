"use client"

import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import PageTransition from "@/components/page-transition"

interface SeriesPageProps {
  params: {
    id: string
  }
}

export default function SeriesDetailPage({ params }: SeriesPageProps) {
  // Find the series by ID
  const series = photoSeries.find((s) => s.id === params.id)

  // If series not found, show 404
  if (!series) {
    notFound()
  }

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
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/series" className="text-sm text-neutral-600 hover:text-black transition-colors">
              ← Back to Series
            </Link>
          </motion.div>

          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-light tracking-wider mb-4">{series.title}</h2>
            <p className="text-neutral-600 max-w-3xl mb-4">{series.description}</p>
            <div className="text-sm text-neutral-500">
              {series.year} • {series.count} photographs
            </div>
          </motion.div>

          <motion.div
            className="relative aspect-[21/9] w-full mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image
              src={getGitHubImageUrl(series.featuredImage) || "/placeholder.svg"}
              alt={`Featured image from ${series.title}`}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>

          <div className="mb-16">
            <motion.p
              className="text-neutral-700 max-w-3xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {series.fullDescription}
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {series.images.map((image, index) => (
                <motion.div key={index} className="group" variants={itemVariants}>
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={getGitHubImageUrl(image.src) || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <p className="mt-2 text-sm text-neutral-600">{image.caption}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="border-t border-neutral-200 pt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-light tracking-wider mb-8">OTHER SERIES</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {photoSeries
                .filter((s) => s.id !== params.id)
                .slice(0, 3)
                .map((otherSeries) => (
                  <motion.div key={otherSeries.id} whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                    <Link href={`/series/${otherSeries.id}`} className="group">
                      <div className="relative aspect-[4/3] overflow-hidden mb-4">
                        <Image
                          src={getGitHubImageUrl(otherSeries.featuredImage) || "/placeholder.svg"}
                          alt={otherSeries.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                        />
                      </div>
                      <h4 className="text-lg font-light tracking-wider">{otherSeries.title}</h4>
                      <p className="text-sm text-neutral-600">{otherSeries.year}</p>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </main>
      </div>
    </PageTransition>
  )
}

// This data would typically come from a CMS or API
const photoSeries = [
  {
    id: "shadows-and-light",
    title: "SHADOWS & LIGHT",
    description: "A study of contrast and form through architectural elements and natural light.",
    fullDescription:
      "This series explores the interplay between light and shadow in architectural spaces. Shot over the course of six months in various cities, these images capture how natural light transforms structures throughout the day. The high contrast black and white treatment emphasizes form, texture, and the geometric patterns created by light passing through different architectural elements.",
    year: "2023",
    count: 24,
    featuredImage: "/shadow2.jpg",
    previewImages: ["/shadow3.jpg", "/shadow4.jpg", "/shadow5.jpg", "/shadow6.jpg"],
    images: [
      {
        src: "/shadow.jpg",
        alt: "Architectural shadows 1",
        caption: "Morning light, Museum of Modern Art",
      },
      {
        src: "/shadow3.jpg",
        alt: "Architectural shadows 2",
        caption: "Stairwell patterns, Downtown",
      },
      {
        src: "/shadow4.jpg",
        alt: "Architectural shadows 3",
        caption: "Window reflections, Financial District",
      },
      {
        src: "/shadow5.jpg",
        alt: "Architectural shadows 4",
        caption: "Concrete and light, Brutalist Library",
      },
      {
        src: "/shadow6.jpg",
        alt: "Architectural shadows 5",
        caption: "Skylight patterns, Central Station",
      },
      {
        src: "/shadow7.jpg",
        alt: "Architectural shadows 6",
        caption: "Facade details, Historic Quarter",
      },
      {
        src: "/shadow8.jpg",
        alt: "Architectural shadows 7",
        caption: "Column shadows, National Gallery",
      },
      {
        src: "/lonso7.jpg",
        alt: "Architectural shadows 8",
        caption: "Sunset angles, Glass Tower",
      },
      {
        src: "/lonso3.jpg",
        alt: "Architectural shadows 9",
        caption: "Light wells, Underground Passage",
      },
    ],
  },
  {
    id: "analog-memories",
    title: "ANALOG MEMORIES",
    description: "Shot entirely on 35mm film, this series explores nostalgia through vintage techniques and subjects.",
    fullDescription:
      "Analog Memories is a deeply personal project shot entirely on vintage film cameras using expired film stock. The chemical imperfections, light leaks, and grain are embraced as essential elements that contribute to the nostalgic quality of these images. Each photograph captures everyday moments with a timeless quality that feels both familiar and distant.",
    year: "2022",
    count: 18,
    featuredImage: "/a.jpg",
    previewImages: ["/a2.jpg", "/a3.jpg", "/a4.jpg", "/a5.jpg"],
    images: [
      {
        src: "/a7.jpg",
        alt: "Analog photo 1",
        caption: "Summer afternoon, Kodak Portra 400",
      },
      { src: "/a2.jpg", alt: "Analog photo 2", caption: "Corner store, Ilford HP5" },
      { src: "/a3.jpg", alt: "Analog photo 3", caption: "Vintage car, Fuji Superia 400" },
      { src: "/a4.jpg", alt: "Analog photo 4", caption: "Diner counter, Kodak Tri-X" },
      { src: "/a5.jpg", alt: "Analog photo 5", caption: "Record store, Lomography 800" },
      { src: "/a6.jpg", alt: "Analog photo 6", caption: "Neon signs, CineStill 800T" },
      { src: "/a1.jpg", alt: "Analog photo 7", caption: "Polaroid memories, SX-70 film" },
      {
        src: "/a8.jpg",
        alt: "Analog photo 8",
        caption: "Childhood bedroom, Kodak Gold 200",
      },
      {
        src: "/a9.jpg",
        alt: "Analog photo 9",
        caption: "Drive-in theater, Expired Ektachrome",
      },
    ],
  },
  {
    id: "urban-textures",
    title: "URBAN TEXTURES",
    description: "Documenting the layers of history and human interaction in city environments.",
    fullDescription:
      "Urban Textures examines the physical surfaces of the city as a record of time and human activity. From weathered walls and peeling posters to the patina of well-worn public spaces, these photographs document how urban environments are constantly transformed by both natural elements and human intervention. The series reveals beauty in decay and celebrates the unintentional artistry created by layers of history.",
    year: "2021",
    count: 32,
    featuredImage: "/c.jpg",
    previewImages: ["/c5.jpg", "/c4.jpg", "/c3.jpg", "/c2.jpg"],
    images: [
      { src: "/c2.jpg", alt: "Urban texture 1", caption: "Weathered brick, East Side" },
      {
        src: "/c5.jpg",
        alt: "Urban texture 2",
        caption: "Peeling posters, Theater District",
      },
      {
        src: "/c3.jpg",
        alt: "Urban texture 3",
        caption: "Rust patterns, Industrial Zone",
      },
      { src: "/c4.jpg", alt: "Urban texture 4", caption: "Graffiti layers, Underpass" },
      { src: "/c6.jpg", alt: "Urban texture 5", caption: "Cracked pavement, Downtown" },
      { src: "/c7.jpg", alt: "Urban texture 6", caption: "Metal patina, Harbor Area" },
      {
        src: "/c8.jpg",
        alt: "Urban texture 7",
        caption: "Worn doorway, Historic District",
      },
      { src: "/c1.jpg", alt: "Urban texture 8", caption: "Subway tiles, Metro Station" },
      { src: "/c.jpg", alt: "Urban texture 9", caption: "Painted signage, Old Market" },
    ],
  },
]

