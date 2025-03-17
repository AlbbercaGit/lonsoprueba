import Image from "next/image"
import Link from "next/link"

export default function SeriesPage() {
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
        <h2 className="text-3xl font-light tracking-wider text-center mb-16">SERIES</h2>

        <div className="grid grid-cols-1 gap-24">
          {photoSeries.map((series) => (
            <div key={series.id} className="mb-16">
              <div className="mb-8">
                <h3 className="text-2xl font-light tracking-wider mb-2">{series.title}</h3>
                <p className="text-neutral-600 mb-4">{series.description}</p>
                <div className="text-sm text-neutral-500">
                  {series.year} • {series.count} photographs
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="relative aspect-[3/2] w-full ">
                  <Image
                    src={series.featuredImage || "/placeholder.svg"}
                    alt={`Featured image from ${series.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {series.previewImages.map((image, index) => (
                    <div key={index} className="relative aspect-square w-full">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Preview image ${index + 1} from ${series.title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={`/series/${series.id}`}
                className="inline-block border border-black px-6 py-2 text-sm tracking-wider hover:bg-black hover:text-white transition-colors"
              >
                VIEW FULL SERIES
              </Link>
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

const photoSeries = [
  {
    id: "shadows-and-light",
    title: "SHADOWS & LIGHT",
    description: "A study of contrast and form through architectural elements and natural light.",
    year: "2023",
    count: 24,
    featuredImage: "/shadow.jpg",
    previewImages: [
      "/shadow1.jpg",
      "/shadow2.jpg",
      "/shadow3.jpg",
      "/shadow4.jpg",
    ],
  },
  {
    id: "analog-memories",
    title: "ANALOG MEMORIES",
    description: "Shot entirely on 35mm film, this series explores nostalgia through vintage techniques and subjects.",
    year: "2022",
    count: 18,
    featuredImage: "/a.jpg",
    previewImages: [
      "/a1.jpg",
      "/a2.jpg",
      "/a3.jpg",
      "/a4.jpg",
    ],
  },
  {
    id: "urban-textures",
    title: "URBAN TEXTURES",
    description: "Documenting the layers of history and human interaction in city environments.",
    year: "2021",
    count: 32,
    featuredImage: "/b.jpg",
    previewImages: [
      "/b2.jpg",
      "/b3.jpg",
      "/b5.jpg",
      "/b4.jpg",
    ],
  },
]

