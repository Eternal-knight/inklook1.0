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
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <header className="bg-white bg-opacity-80 backdrop-blur-md fixed w-full z-10 transition-all duration-300 ease-in-out">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <Link
                href="/"
                className="text-2xl font-bold text-gray-900 transition-colors duration-300 hover:text-indigo-600"
              >
                InkLook
              </Link>
              <div className="flex space-x-8">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium"
                >
                  Products
                </Link>
                <Link
                  href="/about-us"
                  className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

