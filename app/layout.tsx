import Image from "next/image"
import Link from "next/link"

const products = [
  { id: 1, name: "Classic T-Shirt", price: 29.99, image: "/placeholder.svg?height=400&width=400" },
  { id: 2, name: "Hoodie", price: 49.99, image: "/placeholder.svg?height=400&width=400" },
  { id: 3, name: "Cap", price: 19.99, image: "/placeholder.svg?height=400&width=400" },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in-down">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">InkLook</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up max-w-2xl mx-auto text-gray-200">
            Discover our unique collection of high-quality merchandise for true fans.
          </p>
          <Link
            href="#products"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-medium 
                     hover:bg-opacity-90 transition duration-300 transform hover:scale-105"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center mb-12">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Featured</span>{" "}
            Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`,
                  opacity: 0,
                  animation: "fadeInUp 0.5s ease-out forwards",
                }}
              >
                <div className="relative h-64">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                  <button
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-lg
                                   hover:from-purple-600 hover:to-pink-600 transition duration-300 transform hover:scale-105"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

