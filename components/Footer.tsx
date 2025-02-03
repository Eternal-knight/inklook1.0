import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Contact Us
            </h3>
            <p>Email: info@inklook.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Address
            </h3>
            <p>123 Merchandise Ave</p>
            <p>Inkville, IN 12345</p>
            <p>United States</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Quick Links
            </h3>
            <ul>
              <li>
                <Link href="/" className="hover-underline-animation">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover-underline-animation">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover-underline-animation">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover-underline-animation">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p>&copy; 2024 InkLook Merchandise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

