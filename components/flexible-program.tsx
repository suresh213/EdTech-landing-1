"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const faqs = [
  {
    iconUrl: "https://cdn-icons-png.flaticon.com/512/9961/9961909.png",
    question: "What if I miss a class?",
    answer:
      "In case you miss a class, you can watch the recording later. If you miss multiple classes, you can switch to another Cohort.",
  },
  {
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2972/2972531.png",
    question:
      "What if I am not able to manage my job or schedule with the class timings?",
    answer:
      "You can complete the web development online course or program at your own pace through lecture recordings and learning materials.",
  },
  {
    iconUrl: "https://cdn-icons-png.flaticon.com/512/1903/1903162.png",
    question: "Do I get lifetime access?",
    answer:
      "You will have lifetime access to the entire web development course content, including recordings, materials, assessments, and projects.",
  },
  {
    iconUrl: "https://cdn-icons-png.flaticon.com/512/5726/5726532.png",
    question: "How will I resolve my doubts?",
    answer:
      "You can get your doubts resolved by connecting with our subject matter experts over text or video call!",
  },
];

export default function FlexibleProgram() {
  return (
    <div className="w-full bg-white">
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl text-black md:text-3xl font-medium text-center">
            A Flexible Program Created{" "}
            <span className="text-red-600 underline decoration-2 decoration-red-600">
              Just For You!
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm flex gap-6 items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="shrink-0 bg-red-100 rounded-full p-2 w-16 h-16 flex items-center justify-center">
                  <img
                    src={faq.iconUrl || "/placeholder.svg"}
                    alt=""
                    className="w-10 h-10 object-contain"
                    style={{
                      filter:
                        "invert(23%) sepia(100%) saturate(5000%) hue-rotate(337deg) brightness(90%) contrast(100%)",
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-lg text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* <div className="flex flex-wrap justify-center gap-4">
            <Button
              className="bg-red-600 hover:bg-red-700 rounded-full px-6"
              size="lg"
            >
              Download Brochure
            </Button>
            <Button
              variant="outline"
              className="text-red-600 border-red-600 hover:bg-red-50 hover:text-red-600 rounded-full px-6"
              size="lg"
            >
              Download Placement Report
            </Button>
          </div> */}
        </motion.div>
      </section>
    </div>
  );
}
