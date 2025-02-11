import Image from "next/image"

export default function HiringPartners() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto space-y-8">
        <h2 className="text-4xl font-bold text-center text-black">
          Our Hiring <span className="text-red-600 underline decoration-red-600">Partners</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <Image
                src="/placeholder.svg"
                alt={`Partner ${i + 1}`}
                width={120}
                height={40}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

