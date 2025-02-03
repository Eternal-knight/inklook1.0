import ProductGrid from "../components/product-grid"

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Our Products</h1>
      <ProductGrid />
    </div>
  )
}

