"use client";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function CarrierComponentTwo() {
  return (
    <div className=" bg-[#111111] text-white p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Container */}
        <div className="relative">
          {/* Number Indicator */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute -left-12 -top-2 w-12 h-12 rounded-full bg-[#E31E24] flex items-center justify-center text-white font-bold text-xl"
          >
            2
          </motion.div>

          {/* Curriculum Section */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold text-white/90 ml-4"
            >
              Enormayu Curriculum
            </motion.h2>

            <div className="grid md:grid-cols-[2fr,1fr] gap-6">
              {/* Left Column - Curriculum Items */}
              <div className="space-y-4">
                {[
                  {
                    id: "01",
                    title: "Business Communication",
                    description: "Add-On : Optimizing Business Emails with AI",
                  },
                  {
                    id: "02",
                    title: "Profile and Resume Building",
                    description:
                      "Add-On : AI-Driven Resume Optimization Techniques",
                  },
                  {
                    id: "03",
                    title: "Interview Prep & Mock Interviews",
                    description:
                      'Add-On : Interview preparation assistance with our own AI tool "WiseChat"',
                  },
                  {
                    id: "04",
                    title: "Coding & Technical Revision",
                    description: "Add-On : Automated Coding Challenges with AI",
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
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-red-500 text-sm">
                            {item.id}
                          </span>
                          <h3 className="text-lg font-semibold text-white/90">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-sm text-white/60 mt-1">
                          {item.description}
                        </p>
                      </div>
                      <ChevronRight className="text-zinc-400 group-hover:text-white transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right Column - Topics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className={cn(
                  "bg-[#1A1F2C]/40 backdrop-blur-sm",
                  "border border-white/5",
                  "rounded-xl p-6",
                  "transform transition-all duration-300",
                  "hover:bg-[#1A1F2C]/60 hover:scale-[1.02]"
                )}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-white/90">Topic</h3>
                  <span className="text-sm text-white/60">
                    Duration: <span className="text-red-500">15 Days</span>
                  </span>
                </div>
                <ul className="space-y-3 text-sm text-white/60">
                  {[
                    "Build ATS Complaint Resumes and Cover Letters",
                    "Build your LinkedIn Profile",
                    "Build your GitHub Portfolio",
                    "Build your own website",
                    "Review of your portfolio",
                  ].map((topic, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Explore Button */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-end mt-8"
            >
              <button
                className={cn(
                  "bg-[#E31E24] hover:bg-[#E31E24]/90",
                  "text-white px-6 py-2 rounded-lg",
                  "transition-colors transform",
                  "hover:scale-105"
                )}
              >
                Explore Curriculum
              </button>
            </motion.div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
