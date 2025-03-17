import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface SeriesPageProps {
  params: {
    id: string
  }
}

// Esta función se llama para generar las rutas estáticas durante la compilación
export async function generateStaticParams() {
  // Utilizas la misma data estática que ya tienes, puedes adaptarlo si quieres obtener los datos desde una API
  return photoSeries.map((series) => ({
    id: series.id, // El id debe coincidir con el parámetro dinámico en la ruta
  }))
}

export default function SeriesDetailPage({ params }: SeriesPageProps) {
  // Find the series by ID
  const series = photoSeries.find((s) => s.id === params.id)

  // If series not found, show 404
  if (!series) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6 px-6 md:px-12 flex justify-between items-center">
        <div>
          <h1 className="text-xl md:text-2xl font-light tracking-widest uppercase">
            <Link href="/">Lonso.jpg</Link>
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="/portfolio" className="text-sm tracking-wider hover:text-neutral-500 transition-colors">
            Portfolio
          </Link>
          <Link
            href="/series"
            className="text-sm tracking-wider hover:text-neutral-500 transition-colors border-b border-black pb-1"
          >
            Series
          </Link>
          <Link href="/about" className="text-sm tracking-wider hover:text-neutral-500 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm tracking-wider hover:text-neutral-500 transition-colors">
            Contact
          </Link>
        </nav>
        <button className="md:hidden">
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
        </button>
      </header>

      <main className="flex-1 py-12 px-6 md:px-12">
        <div className="mb-12">
          <Link href="/series" className="text-sm text-neutral-600 hover:text-black transition-colors">
            ← Back to Series
          </Link>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-light tracking-wider mb-4">{series.title}</h2>
          <p className="text-neutral-600 max-w-3xl mb-4">{series.description}</p>
          <div className="text-sm text-neutral-500">
            {series.year} • {series.count} photographs
          </div>
        </div>

        <div className="relative aspect-[21/9] w-full mb-16">
          <Image
            src={series.featuredImage || "/placeholder.svg"}
            alt={`Featured image from ${series.title}`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="mb-16">
          <p className="text-neutral-700 max-w-3xl mb-8">{series.fullDescription}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {series.images.map((image, index) => (
              <div key={index} className="group">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <p className="mt-2 text-sm text-neutral-600">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-12">
          <h3 className="text-xl font-light tracking-wider mb-8">OTHER SERIES</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {photoSeries
              .filter((s) => s.id !== params.id)
              .slice(0, 3)
              .map((otherSeries) => (
                <Link href={`/series/${otherSeries.id}`} key={otherSeries.id} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden mb-4">
                    <Image
                      src={otherSeries.featuredImage || "/placeholder.svg"}
                      alt={otherSeries.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    />
                  </div>
                  <h4 className="text-lg font-light tracking-wider">{otherSeries.title}</h4>
                  <p className="text-sm text-neutral-600">{otherSeries.year}</p>
                </Link>
              ))}
          </div>
        </div>
      </main>

      <footer className="py-12 px-6 md:px-12 border-t border-neutral-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-light tracking-widest">Lonso.jpg</h2>
          </div>
          <div className="flex space-x-6">
            <Link href="https://www.instagram.com/lonso.jpg/" className="text-sm text-neutral-600 hover:text-black transition-colors">
              Instagram
            </Link>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="text-xs text-neutral-500">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
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
    featuredImage: "/shadow2.jpg ",
    previewImages: [
      "/shadow3.jpg",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
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
        caption: "Interplay of lines, City Hall",
      },
    ],
  },
]
