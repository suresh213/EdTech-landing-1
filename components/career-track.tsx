const requirements = [
  {
    icon: "👨‍🎓",
    title: "Graduation Degree",
    description: "Must be a graduate at the time of AlmaX enrollment.",
  },
  {
    icon: "✅",
    title: "Completed the Foundation Track",
    description: "Completed the foundation track of the course.",
  },
  {
    icon: "📝",
    title: "AlmaBetter Comprehensibility Assessment Test (AB-CAT)",
    description: "Take entrance exam for AlmaX",
  },
]

export default function CareerTrack() {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="container mx-auto space-y-8">
        <h2 className="text-4xl font-bold text-center">
          100% Job Assurance with <span className="text-red-600 underline decoration-red-600">AlmaX Career Track</span>
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto">
          We have designed a dedicated career track along with career support services to help you become industry ready
          and make sure you land your dream job!
        </p>

        <div className="relative">
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-red-600" />

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold">AlmaX Eligibility Requirements</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6 ml-8">
              {requirements.map((req, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 rounded-lg p-6 text-center space-y-4 hover:bg-gray-900/70 transition-colors"
                >
                  <div className="text-4xl">{req.icon}</div>
                  <h4 className="font-semibold">{req.title}</h4>
                  <p className="text-gray-400 text-sm">{req.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

