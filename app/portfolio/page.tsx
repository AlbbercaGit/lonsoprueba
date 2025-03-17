import Image from "next/image"
import Link from "next/link"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6 px-6 md:px-12 flex justify-between items-center">
        <div>
          <h1 className="text-xl md:text-2xl font-light tracking-widest uppercase">
            <Link href="/">Lonso.jpg</Link>
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/portfolio"
            className="text-sm tracking-wider hover:text-neutral-500 transition-colors border-b border-black pb-1"
          >
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

      <main className="flex-1 py-12 px-6 md:px-12">
        <h2 className="text-3xl font-light tracking-wider text-center mb-16">PORTFOLIO</h2>

        <div className="grid grid-cols-1 gap-24">
          {categories.map((category) => (
            <div key={category.id} className="scroll-mt-24" id={category.id}>
              <div className="relative aspect-[21/9] w-full mb-8">
                <Image
                  src={category.image || "/placeholder.svg"}
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.photos.map((photo, index) => (
                  <div key={index} className="group">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={photo.src || "/placeholder.svg"}
                        alt={photo.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <p className="mt-2 text-sm text-neutral-600">{photo.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
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

