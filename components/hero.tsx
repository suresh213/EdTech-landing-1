import Image from "next/image"
import { Star, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">4.6</span>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-gray-400">1467 Reviews</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Certification in Full Stack Web Development</h1>

          <div className="inline-flex items-center space-x-2 bg-red-600/10 text-red-600 px-4 py-2 rounded-full">
            <span className="text-sm">Next Cohort Starting On 21st February</span>
          </div>

          <div className="space-y-4">
            <p className="text-gray-400">In collaboration with:</p>
            <div className="flex items-center space-x-4">
              <Image
                src="/placeholder.svg"
                alt="E&ICT Academy IIT Guwahati"
                width={120}
                height={40}
                className="object-contain"
              />
              <Image src="/placeholder.svg" alt="Microsoft" width={120} height={40} className="object-contain" />
            </div>
          </div>

          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-teal-400 rounded-full" />
              <span>Advanced Certification from E&ICT Academy, IIT Guwahati</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-teal-400 rounded-full" />
              <span>6 months part-time program with online classes</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-teal-400 rounded-full" />
              <span>Revised curriculum for post Chat-GPT era</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-teal-400 rounded-full" />
              <span>No coding experience required</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-teal-400 rounded-full" />
              <span>Suitable for final years, graduates and early professionals</span>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            <Button className="bg-red-600 hover:bg-red-700">Explore Program</Button>
            <Button variant="outline">Enrol Now</Button>
          </div>
        </div>

        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/section1-bz7vGJeXftV9EBydMdATcuoWjtVRov.jpeg"
            alt="IIT Guwahati Campus"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <Button size="icon" className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30">
              <Play className="w-8 h-8 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

