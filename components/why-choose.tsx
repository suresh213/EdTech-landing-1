import { Briefcase, FileText, Users, Package, CheckCircle, Trophy } from "lucide-react"

const features = [
  {
    icon: <Briefcase className="w-8 h-8 text-red-600" />,
    title: "Placement Support",
    description: "Complete support from our dedicated placement team until you get a job",
  },
  {
    icon: <FileText className="w-8 h-8 text-red-600" />,
    title: "Resume Building",
    description: "Resume sharing in our network of 700+ hiring partners",
  },
  {
    icon: <Users className="w-8 h-8 text-red-600" />,
    title: "Mock Interviews",
    description: "Professional mock interviews assistance",
  },
  {
    icon: <Package className="w-8 h-8 text-red-600" />,
    title: "Capstone Projects",
    description: "Undertake industry certified Capstone Projects from companies like Zomato & BookMyShow",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-red-600" />,
    title: "100% Job Assurance",
    description: "Get all the support to crack your dream tech job",
  },
  {
    icon: <Trophy className="w-8 h-8 text-red-600" />,
    title: "Growth Champion",
    description: "Know learning strategies and get mentorship from our top Alumni",
  },
]

export default function WhyChoose() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto space-y-8">
        <h2 className="text-4xl font-bold text-center">
          Why Choose <span className="text-red-600 underline decoration-red-600">AlmaBetter</span>?
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto">
          AlmaBetter offers extensive list of services to help you become Job ready.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-lg p-6 text-center space-y-4 hover:bg-white/10 transition-colors"
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

