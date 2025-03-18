import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function Home() {
  // Función para construir la URL de GitHub para las imágenes
  const getGitHubImageUrl = (path: string) => {
    return `https://raw.githubusercontent.com/AlbbercaGit/lonsoprueba/refs/heads/main/public${path}`
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="h-[10vh] py-6 px-6 md:px-12 flex justify-between items-center">
        <div>
          <h1 className="text-xl md:text-2xl font-light tracking-widest uppercase">
            <Link href="/">Lonso.jpg</Link>
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="/portfolio" className="text-sm tracking-wider hover:text-neutral-500 transition-colors">
            Portfolio
          </Link>
          <Link href="/series" className="text-sm tracking-wider hover:text-neutral-500 transition-colors">
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
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-6 text-white">
              <h2 className="text-3xl md:text-5xl font-light tracking-widest mb-4">TIMELESS MOMENTS</h2>
              <p className="text-sm md:text-base max-w-md mx-auto">
                Capturing the essence of nostalgia with a modern perspective
              </p>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white" />
          </div>
        </section>

        <section className="py-16 px-6 md:px-12">
          <h2 className="text-2xl font-light tracking-wider text-center mb-12">FEATURED COLLECTIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCollections.map((collection) => (
              <Link href={`/series/${collection.slug}`} key={collection.slug} className="group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={getGitHubImageUrl(collection.coverImage) || "/placeholder.svg"}
                    alt={collection.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="border border-white text-white px-4 py-2 text-sm tracking-wider">VIEW SERIES</div>
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-light tracking-wider">{collection.title}</h3>
                <p className="text-sm text-neutral-600">{collection.description}</p>
              </Link>
            ))}
          </div>
        </section>
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

