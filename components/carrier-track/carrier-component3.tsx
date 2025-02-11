"use client";
import {
  Phone,
  FileText,
  Smartphone,
  MessageSquare,
  Users,
  Monitor,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}
const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className={cn(
        "relative p-6 rounded-xl",
        "bg-[#1A1F2C]/40 backdrop-blur-sm",
        "border border-white/5",
        "transform transition-all duration-300",
        "hover:bg-[#1A1F2C]/60 hover:scale-[1.02]",
        "group cursor-pointer"
      )}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-3 rounded-full bg-white/5 text-white/90 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white/90">{title}</h3>
        <p className="text-sm text-white/60 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};
const CarrierComponentThree = () => {
  const services = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Placement Support",
      description:
        "Complete support from our dedicated placement team until you get a job",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Resume Building",
      description: "Resume sharing in our network of 700+ hiring partners",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Enormayu Job Application",
      description:
        "End to end application tracking of multiple interview rounds",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Mock Interviews",
      description: "Professional mock interviews assistance",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dedicated Career Coach",
      description: "Expert career coaches to guide you throughout the program",
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Growth Champion",
      description:
        "Know learning strategies and get mentorship from our top Alumni's",
    },
  ];
  return (
    <div className=" bg-[#111111] p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute -left-12 -top-2 w-12 h-12 rounded-full bg-[#E31E24] flex items-center justify-center text-white font-bold text-xl"
          >
            3
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-white/90 ml-4"
          >
            Enormayu Career Services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CarrierComponentThree;
