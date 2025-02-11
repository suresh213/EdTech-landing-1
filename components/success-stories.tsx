import Image from "next/image"
import { ArrowRight, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

const stories = [
  {
    name: "Rohan Mote",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/section3-xvP7DNwGxTZRmFBBJcdl3fCe5p4irf.jpeg",
    before: "Fresher",
    after: "Web Developer",
    company: "ZEDD ARK",
    quote: "If you want to turn your skills into a professional experience, AlmaBetter is the place you can trust.",
  },
  {
    name: "Sri Srinivasan",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/section3-xvP7DNwGxTZRmFBBJcdl3fCe5p4irf.jpeg",
    before: "Fresher",
    after: "Junior Developer",
    company: "MATDUN",
    quote:
      "AlmaBetter provides incredible features like one-on-one mentorship sessions and multiple coding problems to prepare you to appear in interviews with big companies.",
  },
  {
    name: "Vaibhav Thorat",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/section3-xvP7DNwGxTZRmFBBJcdl3fCe5p4irf.jpeg",
    before: "Fresher",
    after: "Software Developer",
    company: "BONDSINDIA",
    quote: "This shows what I have learned at AlmaBetter is at par with the current industry standards.",
  },
]

export default function SuccessStories() {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="container mx-auto space-y-8">
        <h2 className="text-4xl font-bold text-center">
          Success <span className="text-red-600 underline decoration-red-600">Stories</span>
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto">
          Meet our graduates who have not only secured new and better jobs but have also experienced significant salary
          hikes.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-red-600 rounded-lg overflow-hidden">
              {index === 0 && (
                <div className="bg-white text-red-600 w-fit px-3 py-1 rounded-full text-sm m-4">110% Hike</div>
              )}
              <div className="aspect-[4/3] relative">
                <Image src={story.image || "/placeholder.svg"} alt={story.name} fill className="object-cover" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">{story.before}</span>
                  <ArrowRight className="w-4 h-4" />
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">{story.after}</span>
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{story.name}</h3>
                  <Button size="icon" variant="ghost" className="hover:bg-white/10">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </div>

                <p className="text-sm text-gray-200">{story.quote}</p>

                <Button variant="link" className="text-white p-0">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

