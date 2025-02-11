"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Award } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const stats = [
  { icon: Users, value: "5000+", label: "Learners" },
  { icon: Briefcase, value: "92%", label: "Placement Rate" },
  { icon: Award, value: "150+", label: "Industry Experts" },
];

const companies = [
  { name: "Amazon", logo: "https://img.logo.dev/amazon.com" },
  { name: "Freshworks", logo: "https://img.logo.dev/freshworks.com" },
  { name: "Chargebee", logo: "https://img.logo.dev/chargebee.com" },
  { name: "Zoho", logo: "https://img.logo.dev/zoho.com" },
  { name: "Browserstack", logo: "https://img.logo.dev/browserstack.com" },
  { name: "Postman", logo: "https://img.logo.dev/postman.com" },
  { name: "Hasura", logo: "https://img.logo.dev/hasura.io" },
  { name: "Innovaccer", logo: "https://img.logo.dev/innovaccer.com" },
  { name: "Clevertap", logo: "https://img.logo.dev/clevertap.com" },
  { name: "Druva", logo: "https://img.logo.dev/druva.com" },
  { name: "Gupshup", logo: "https://img.logo.dev/gupshup.io" },
  { name: "Mindtickle", logo: "https://img.logo.dev/mindtickle.com" },
  { name: "Whatfix", logo: "https://img.logo.dev/whatfix.com" },
  { name: "Kissflow", logo: "https://img.logo.dev/kissflow.com" },
  { name: "Amagi", logo: "https://img.logo.dev/amagi.com" },
  { name: "Zenoti", logo: "https://img.logo.dev/zenoti.com" },
  { name: "Darwinbox", logo: "https://img.logo.dev/darwinbox.com" },
  { name: "Facilio", logo: "https://img.logo.dev/facilio.com" },
  { name: "Hiver", logo: "https://img.logo.dev/hiverhq.com" },
  { name: "Yellow.ai", logo: "https://img.logo.dev/yellow.ai" },
  { name: "Zinier", logo: "https://img.logo.dev/zinier.com" },
  { name: "Rippling", logo: "https://img.logo.dev/rippling.com" },
  { name: "Apna", logo: "https://img.logo.dev/apna.co" },
  { name: "Khatabook", logo: "https://img.logo.dev/khatabook.com" },
  { name: "Dukaan", logo: "https://img.logo.dev/mydukaan.io" },
  { name: "Polygon", logo: "https://img.logo.dev/polygon.technology" },
  { name: "Mfine", logo: "https://img.logo.dev/mfine.in" },
  { name: "Zetwerk", logo: "https://img.logo.dev/zetwerk.com" },
  { name: "Groww", logo: "https://img.logo.dev/groww.in" },
  { name: "Upstox", logo: "https://img.logo.dev/upstox.com" },
  { name: "Urban Company", logo: "https://img.logo.dev/urbancompany.com" },
  { name: "CoinDCX", logo: "https://img.logo.dev/coindcx.com" },
];

const CompanyLogo = ({ company }: { company: (typeof companies)[0] }) => {
  const [imageError, setImageError] = useState(false);
  const logoUrl = `${company.logo}?token=pk_WMAMe2_zSEGPmLxKYFr-gA&theme=dark&background=transparent`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-22 lg:h-22 rounded-xl border border-gray-200 hover:border-gray-400 flex items-center justify-center mb-2 sm:mb-3 p-2 sm:p-3 md:p-4 transition-all duration-300 group hover:shadow-sm">
        {imageError ? (
          <div className="text-xs sm:text-sm md:text-base font-semibold text-gray-600">
            {company.name}
          </div>
        ) : (
          <Image
            src={logoUrl}
            alt={company.name}
            width={80}
            height={80}
            className="object-contain transition-transform duration-300 group-hover:scale-110"
            onError={() => setImageError(true)}
            unoptimized
          />
        )}
      </div>
      <p className="text-xs sm:text-sm text-gray-600 text-center font-medium group-hover:text-gray-900 transition-colors duration-300 line-clamp-1">
        {company.name}
      </p>
    </motion.div>
  );
};

export default function Stats() {
  return (
    <section className="py-24 bg-[#F8F9FA] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-[#002E2C]">
            500+ Success Stories
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            and growing stronger with each passing day
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-16">
          {companies.map((company, index) => (
            <CompanyLogo key={company.name} company={company} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-12 h-12 text-[#002E2C]" />
              </div>
              <h3 className="text-3xl font-bold text-[#002E2C] mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-[#002E2C] hover:bg-[#004D4A] text-white text-lg px-8 py-3 rounded-full">
            Explore Programs
          </Button>
        </div>
      </div>
    </section>
  );
}
