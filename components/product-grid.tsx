import Image from "next/image"

const products = [
  { id: 1, name: "T-Shirt", price: 24.99 },
  { id: 2, name: "Hoodie", price: 49.99 },
  { id: 3, name: "Mug", price: 14.99 },
  { id: 4, name: "Cap", price: 19.99 },
  { id: 5, name: "Poster", price: 9.99 },
  { id: 6, name: "Sticker Pack", price: 4.99 },
]

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={`/placeholder.svg?height=300&width=400`}
            alt={product.name}
            width={400}
            height={300}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-indigo-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

