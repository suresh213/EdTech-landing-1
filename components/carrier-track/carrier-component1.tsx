"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function CareerComponentOne() {
  return (
    <div className=" bg-[#111111] text-white p-8 md:p-16">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Requirements Section */}
        <div className="relative flex">
          {/* Number Indicator with Vertical Line */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute -left-12 -top-2 w-12 h-12 rounded-full bg-[#E31E24] flex items-center justify-center text-white font-bold text-xl"
          >
            1
          </motion.div>

          <div className="space-y-4 w-full pl-10">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold text-white/90"
            >
              <span className="">
                Enormayu Eligibility Requirements
              </span>
            </motion.h2>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  id: 1,
                  title: "Graduation Degree",
                  description:
                    "Must be a graduate at the time of Enormayu enrollment.",
                  image:
                    "https://www.almabetter.com/_next/image?url=https%3A%2F%2Falmablog-media.s3.ap-south-1.amazonaws.com%2FUntitled_design_1_e3f85c0570.png&w=256&q=75",
                },
                {
                  id: 2,
                  title: "Completed the Foundation Track",
                  description: "Completed the foundation track of the course.",
                  image:
                    "https://www.almabetter.com/_next/image?url=https%3A%2F%2Falmablog-media.s3.ap-south-1.amazonaws.com%2Fim_2_9ad97692d0.png&w=256&q=75",
                },
                {
                  id: 3,
                  title:
                    "AlmaBetter Comprehensibility Assessment Test (AB-CAT)",
                  description: "Take entrance exam for Enormayu.",
                  image:
                    "https://www.almabetter.com/_next/image?url=https%3A%2F%2Falmablog-media.s3.ap-south-1.amazonaws.com%2Fim3_6498bef35e.png&w=256&q=75",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "p-6 rounded-xl",
                    "bg-[#1A1F2C]/40 backdrop-blur-sm",
                    "border border-white/5",
                    "transform transition-all duration-300",
                    "hover:bg-[#1A1F2C]/60 hover:scale-[1.02]",
                    "group cursor-pointer"
                  )}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Icon */}
                    <div className="p-3 rounded-full bg-white/5 text-white/90 transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={40}
                        height={40}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-white/90">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
