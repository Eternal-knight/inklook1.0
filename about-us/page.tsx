import Image from "next/image"

export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg text-gray-700 mb-6">
            At InkLook Merchandise, we're passionate about bringing unique, high-quality designs to life through our
            diverse range of products. Our journey began with a simple idea: to create merchandise that truly resonates
            with our customers' personalities and interests.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            We collaborate with talented artists and designers to offer exclusive, limited-edition collections that you
            won't find anywhere else. From trendy graphic tees to cozy hoodies, and from stylish accessories to
            eye-catching home decor, we've got something for everyone.
          </p>
          <p className="text-lg text-gray-700">
            Our commitment to quality means we use only the best materials and printing techniques to ensure that each
            item not only looks great but stands the test of time. We believe in sustainable practices and strive to
            minimize our environmental impact in every step of our production process.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Our team at work"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
          <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Our products"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
          <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Our store"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
          <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Customer wearing our merchandise"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

