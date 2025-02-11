import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Certification() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto space-y-8">
        <h2 className="text-4xl font-bold text-center">
          Unlock your Web Development <span className="text-red-600 underline decoration-red-600">Certification</span>
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto">
          Elevate your career with our esteemed certification. Unlock new opportunities and demonstrate your mastery in
          web development.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-8">
              <span className="text-xl font-semibold">E&ICT, IIT Guwahati</span>
              <span className="text-xl font-semibold">Microsoft</span>
              <span className="text-xl font-semibold text-red-600">AlmaBetter</span>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Image src="/placeholder.svg" alt="Certificate Icon" width={48} height={48} className="mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Industry Recognised Certification</h3>
                  <p className="text-gray-400">
                    AlmaBetter gives you Industry Recognised Certification as per ISO 27001 with verifiable credentials.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Image src="/placeholder.svg" alt="Share Icon" width={48} height={48} className="mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Credible & Shareable</h3>
                  <p className="text-gray-400">
                    You can add the AlmaBetter Certificate on your LinkedIn profile, resume and even share it over
                    Whatsapp or any other social channels.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button className="bg-red-600 hover:bg-red-700">Explore Program</Button>
              <Button variant="outline">Download Brochure</Button>
            </div>
          </div>

          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/section5-X8AibWGIr5kS4QSwhEnPZiGkwS0JsY.jpeg"
              alt="Sample Certificate"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

