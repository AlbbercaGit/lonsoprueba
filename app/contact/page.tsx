import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
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
          <Link href="/about" className="text-sm tracking-wider hover:text-neutral-500 transition-colors">
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm tracking-wider hover:text-neutral-500 transition-colors border-b border-black pb-1"
          >
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
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light tracking-wider text-center mb-16">CONTACT</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-xl font-light tracking-wider mb-6">GET IN TOUCH</h3>
              <p className="text-neutral-700 mb-8">
                Interested in working together? Fill out the form with some info about your project and I will get back
                to you as soon as I can.
              </p>

              <div className="space-y-4 text-neutral-700">
                <p>
                  <strong className="font-medium">Email:</strong>
                  <br />
                  <a href="mailto:hello@retrolens.studio" className="hover:text-black transition-colors">
                    hello@retrolens.studio
                  </a>
                </p>
                <p>
                  <strong className="font-medium">Studio:</strong>
                  <br />
                  123 Vintage Street
                  <br />
                  Photography District
                  <br />
                  City, 10001
                </p>
                <p>
                  <strong className="font-medium">Hours:</strong>
                  <br />
                  Monday–Friday: 9am–6pm
                  <br />
                  Saturday: By appointment
                </p>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-light">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="border-neutral-300 focus:border-neutral-900 focus:ring-0"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-light">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="border-neutral-300 focus:border-neutral-900 focus:ring-0"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-light">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Subject"
                    className="border-neutral-300 focus:border-neutral-900 focus:ring-0"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-light">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    rows={6}
                    className="border-neutral-300 focus:border-neutral-900 focus:ring-0"
                  />
                </div>

                <Button type="submit" className="w-full bg-black hover:bg-neutral-800 text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* <div className="text-center">
            <h3 className="text-xl font-light tracking-wider mb-6">FOLLOW</h3>
            <div className="flex justify-center space-x-8">
              <Link href="#" className="text-neutral-600 hover:text-black transition-colors">
                Instagram
              </Link>
              <Link href="#" className="text-neutral-600 hover:text-black transition-colors">
                Twitter
              </Link>
              <Link href="#" className="text-neutral-600 hover:text-black transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="text-neutral-600 hover:text-black transition-colors">
                Behance
              </Link>
            </div>
          </div> */}
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

