"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import PageTransition from "@/components/page-transition"

export default function ContactPage() {
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
          <div className="max-w-3xl mx-auto">
            <motion.h2
              className="text-3xl font-light tracking-wider text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              CONTACT
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <motion.div variants={containerVariants} initial="hidden" animate="visible">
                <motion.h3 className="text-xl font-light tracking-wider mb-6" variants={itemVariants}>
                  GET IN TOUCH
                </motion.h3>
                <motion.p className="text-neutral-700 mb-8" variants={itemVariants}>
                  Interested in working together? Fill out the form with some info about your project and I will get
                  back to you as soon as I can.
                </motion.p>

                <motion.div className="space-y-4 text-neutral-700" variants={containerVariants}>
                  <motion.p variants={itemVariants}>
                    <strong className="font-medium">Email:</strong>
                    <br />
                    <a href="mailto:hello@retrolens.studio" className="hover:text-black transition-colors">
                      hello@retrolens.studio
                    </a>
                  </motion.p>
                  <motion.p variants={itemVariants}>
                    <strong className="font-medium">Studio:</strong>
                    <br />
                    123 Vintage Street
                    <br />
                    Photography District
                    <br />
                    City, 10001
                  </motion.p>
                  <motion.p variants={itemVariants}>
                    <strong className="font-medium">Hours:</strong>
                    <br />
                    Monday–Friday: 9am–6pm
                    <br />
                    Saturday: By appointment
                  </motion.p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
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

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" className="w-full bg-black hover:bg-neutral-800 text-white">
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </PageTransition>
  )
}

