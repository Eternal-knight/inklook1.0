import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import "./globals.css"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "InkLook Merchandise",
  description: "Quality merchandise for InkLook fans",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <Link
                href="/"
                className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-80 transition-opacity"
              >
                InkLook
              </Link>
              <div className="flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
                  Home
                </Link>
                <Link href="/products" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
                  Products
                </Link>
                <Link href="/about-us" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
                  About Us
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

