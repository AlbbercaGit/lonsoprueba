import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Lonso.jpg | Photography Portfolio",
  description: "Portfolio of Alonso Rosello",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
     
        <link rel="icon" href="https://raw.githubusercontent.com/AlbbercaGit/lonsoprueba/refs/heads/main/public/favicon.ico" />
  
      <body className={`${inter.className} antialiased `}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
import { Head } from "react-day-picker"
