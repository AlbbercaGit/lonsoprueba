import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
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
          <Link href="/series" className="text-sm tracking-wider hover:text-neutral-500 transition-colors">
            Series
          </Link>
          <Link
            href="/about"
            className="text-sm tracking-wider hover:text-neutral-500 transition-colors border-b border-black pb-1"
          >
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light tracking-wider text-center mb-16">ABOUT</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/me.jpg"
                alt="Photographer portrait"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-light tracking-wider">THE PHOTOGRAPHER</h3>
              <p className="text-neutral-700 leading-relaxed">
                With over 15 years of experience capturing moments through a vintage lens, I blend retro aesthetics with
                modern techniques to create timeless imagery that tells stories across generations.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                My work is heavily influenced by analog photography, film grain textures, and the rich tonal qualities
                of vintage cameras. While embracing digital technology, I maintain a connection to photography's roots.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Each project is approached with meticulous attention to detail, from composition to post-processing,
                ensuring that every image carries both emotional depth and technical excellence.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-light tracking-wider mb-8 text-center">APPROACH & PHILOSOPHY</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 border border-neutral-200">
                <h4 className="text-lg font-light tracking-wider mb-4">AUTHENTICITY</h4>
                <p className="text-sm text-neutral-700">
                  Capturing genuine moments and emotions rather than manufacturing them.
                </p>
              </div>
              <div className="text-center p-6 border border-neutral-200">
                <h4 className="text-lg font-light tracking-wider mb-4">NOSTALGIA</h4>
                <p className="text-sm text-neutral-700">
                  Creating images that evoke emotional connections to the past while remaining relevant.
                </p>
              </div>
              <div className="text-center p-6 border border-neutral-200">
                <h4 className="text-lg font-light tracking-wider mb-4">CRAFTSMANSHIP</h4>
                <p className="text-sm text-neutral-700">
                  Treating photography as both an art and a craft that requires dedication to master.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-light tracking-wider mb-8 text-center">EQUIPMENT</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-light tracking-wider mb-4">DIGITAL</h4>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Sony Alpha A7III</li>
                  <li>• Canon EOS R5</li>
                  <li>• Various prime lenses (24mm, 35mm, 50mm, 85mm)</li>
                  <li>• Profoto lighting equipment</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-light tracking-wider mb-4">ANALOG</h4>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Hasselblad 500C/M (Medium Format)</li>
                  <li>• Leica M6 (35mm)</li>
                  <li>• Pentax K1000 (35mm)</li>
                  <li>• Collection of vintage lenses</li>
                </ul>
              </div>
            </div>
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

