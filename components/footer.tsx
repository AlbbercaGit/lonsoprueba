import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12  ">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-light tracking-widest">Lonso.jpg</h2>
        </div>
        <div className="flex space-x-6">
          <Link
            href="https://www.instagram.com/lonso.jpg/"
            className="text-sm text-neutral-600 hover:text-black transition-colors"
          >
            Instagram
          </Link>
        </div>
        <div className="mt-6 md:mt-0">
          <p className="text-xs text-neutral-500">© {new Date().getFullYear()} Design by Min.</p>
        </div>
      </div>
    </footer>
  )
}

