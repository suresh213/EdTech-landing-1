'use client'

import Image from "next/image";
import amazon from './assets/amazon.jpeg'
import bajaj from "./assets/bajaj.jpeg";
import accenture from "./assets/accenture.jpeg";
import ame from "./assets/ame_express.jpeg";
import hcl from "./assets/hcl.jpeg"
import mahendra from "./assets/mahindra.jpeg"
import paytm from './assets/paytm.jpeg'
import swiggy from './assets/swiggy.jpeg'
import tata from './assets/tata.jpeg'
import infosys from './assets/infosys.jpeg'
import piyaau from './assets/piyaau.jpeg'
import jindal from './assets/jindal.jpeg'
import conduent from './assets/conduent.jpeg'

export default function HiringPartners() {
  const partners = [
    amazon,
    jindal,
    hcl,
    conduent,
    mahendra,
    ame,
    accenture,
    paytm,
    swiggy,
    tata,
    infosys,
    piyaau,
    bajaj,
  ];

  return (
    <section className="py-16 px-4 bg-gray-50 overflow-hidden">
      <div className="container mx-auto space-y-8">
        <h2 className="text-4xl font-bold text-center text-black">
          Our Hiring{" "}
          <span className="text-red-600 underline decoration-red-600">
            Partners
          </span>
        </h2>

        {/* Rows Wrapper */}
        <div className="space-y-4">
          {/* First Row (Left -> Right) */}
          <Marquee images={partners} speed={30} direction="left" />

          {/* Middle Row (Right -> Left) */}
          <Marquee images={partners} speed={25} direction="right" />

          {/* Last Row (Left -> Right) */}
          <Marquee images={partners} speed={30} direction="left" />
        </div>
      </div>
    </section>
  );
}

// Marquee Component (Handles the scrolling animation)
const Marquee = ({
  images,
  direction,
  speed,
}: {
  images: string[];
  direction: "left" | "right";
  speed: number;
}) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex space-x-8 ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {images.concat(images).map(
          (
            src,
            i // Duplicate images for seamless loop
          ) => (
            <div
              key={i}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm min-w-[150px]"
            >
              <Image
                src={src}
                alt={`Partner ${i + 1}`}
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
          )
        )}
      </div>

      {/* Tailwind Custom Animations */}
      <style jsx>{`
        @keyframes marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marquee-left linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marquee-right linear infinite;
        }
      `}</style>
    </div>
  );
};
