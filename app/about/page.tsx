"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import PageTransition from "@/components/page-transition"

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 py-12 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl font-light tracking-wider text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              ABOUT
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                className="relative aspect-[3/4] w-full"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image
                  src="https://raw.githubusercontent.com/AlbbercaGit/lonsoprueba/refs/heads/main/public/me.jpg"
                  alt="Photographer portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
              <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
                <motion.h3 className="text-2xl font-light tracking-wider" variants={itemVariants}>
                  THE PHOTOGRAPHER
                </motion.h3>
                <motion.p className="text-neutral-700 leading-relaxed" variants={itemVariants}>
                  With over 15 years of experience capturing moments through a vintage lens, I blend retro aesthetics
                  with modern techniques to create timeless imagery that tells stories across generations.
                </motion.p>
                <motion.p className="text-neutral-700 leading-relaxed" variants={itemVariants}>
                  My work is heavily influenced by analog photography, film grain textures, and the rich tonal qualities
                  of vintage cameras. While embracing digital technology, I maintain a connection to photography's
                  roots.
                </motion.p>
                <motion.p className="text-neutral-700 leading-relaxed" variants={itemVariants}>
                  Each project is approached with meticulous attention to detail, from composition to post-processing,
                  ensuring that every image carries both emotional depth and technical excellence.
                </motion.p>
              </motion.div>
            </div>

            <motion.div
              className="mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-light tracking-wider mb-8 text-center">APPROACH & PHILOSOPHY</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  className="text-center p-6 border border-neutral-200"
                  whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-lg font-light tracking-wider mb-4">AUTHENTICITY</h4>
                  <p className="text-sm text-neutral-700">
                    Capturing genuine moments and emotions rather than manufacturing them.
                  </p>
                </motion.div>
                <motion.div
                  className="text-center p-6 border border-neutral-200"
                  whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-lg font-light tracking-wider mb-4">NOSTALGIA</h4>
                  <p className="text-sm text-neutral-700">
                    Creating images that evoke emotional connections to the past while remaining relevant.
                  </p>
                </motion.div>
                <motion.div
                  className="text-center p-6 border border-neutral-200"
                  whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-lg font-light tracking-wider mb-4">CRAFTSMANSHIP</h4>
                  <p className="text-sm text-neutral-700">
                    Treating photography as both an art and a craft that requires dedication to master.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
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
            </motion.div>
          </div>
        </main>
      </div>
    </PageTransition>
  )
}

