import Image from "next/image";
import { Star, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import herosvg from "./assets/about-banner.png";

export default function Hero() {
  return (
    <section className="pt-24 md:pt-11 px-4 bg-black">
      <div className="container mx-auto max-w-[1900px] px-4 md:px-8 lg:px-12 xl:px-20 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Content */}
        <div className="space-y-6 md:space-y-8">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Master <span className="text-red-600">In-Demand Skills</span> with
            Our Expert-Led Courses
          </h1>

          {/* Key Features List */}
          <ul className="space-y-4 text-base sm:text-lg text-gray-400">
            <li className="flex items-center space-x-3">
              <span className="w-3 h-3 bg-teal-400 rounded-full flex-shrink-0" />
              <span>6 months part-time program with online classes</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-3 h-3 bg-teal-400 rounded-full flex-shrink-0" />
              <span>Revised curriculum for post Chat-GPT era</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-3 h-3 bg-teal-400 rounded-full flex-shrink-0" />
              <span>No coding experience required</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-3 h-3 bg-teal-400 rounded-full flex-shrink-0" />
              <span>
                Suitable for final years, graduates, and early professionals
              </span>
            </li>
          </ul>

          {/* Call-to-Action Buttons */}
          {/* <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button className="bg-red-600 hover:bg-red-700 text-lg px-6 py-4 sm:px-8 sm:py-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full sm:w-auto">
              Explore Program
            </Button>
            <Button
              variant="outline"
              className="text-lg px-6 py-4 sm:px-8 sm:py-6 rounded-lg border-gray-700 text-white hover:bg-gray-800 hover:border-gray-800 transition-transform transform hover:scale-105 w-full sm:w-auto"
            >
              Enrol Now
            </Button>
          </div> */}
        </div>

        {/* Right Column - Image */}
        <div className="relative h-[400px] md:h-[600px] lg:h-[700px] rounded-lg overflow-hidden shadow-2xl border border-gray-800 mt-8 md:mt-0">
          <Image
            src={herosvg}
            alt="Expert-Led Courses"
            fill
            className="object-cover"
            priority
          />
          {/* Play Button Overlay (Optional) */}
          {/* <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <Button
              size="icon"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm"
            >
              <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
