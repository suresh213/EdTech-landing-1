import {
  Briefcase,
  FileText,
  Users,
  Package,
  CheckCircle,
  Trophy,
} from "lucide-react";

const features = [
  {
    icon: <Briefcase className="w-8 h-8 text-red-500" />,
    title: "Placement Support",
    description:
      "Complete support from our dedicated placement team until you get a job",
  },
  {
    icon: <FileText className="w-8 h-8 text-red-500" />,
    title: "Resume Building",
    description: "Resume sharing in our network of 700+ hiring partners",
  },
  {
    icon: <Users className="w-8 h-8 text-red-500" />,
    title: "Mock Interviews",
    description: "Professional mock interviews assistance",
  },
  {
    icon: <Package className="w-8 h-8 text-red-500" />,
    title: "Capstone Projects",
    description:
      "Undertake industry certified Capstone Projects from companies like Zomato & BookMyShow",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-red-500" />,
    title: "100% Job Assurance",
    description: "Get all the support to crack your dream tech job",
  },
  {
    icon: <Trophy className="w-8 h-8 text-red-500" />,
    title: "Growth Champion",
    description:
      "Know learning strategies and get mentorship from our top Alumni",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            Why Choose{" "}
            <span className="text-red-500 underline decoration-red-500">
              AlmaBetter
            </span>
            ?
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto">
            AlmaBetter offers extensive list of services to help you become Job
            ready.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 text-center space-y-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex justify-center items-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
