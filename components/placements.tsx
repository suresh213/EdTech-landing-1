import { Button } from "@/components/ui/button"

export default function Placements() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold">
          Industry Leading <span className="text-red-600 underline decoration-red-600">Placements</span>
        </h2>

        <p className="max-w-3xl mx-auto text-gray-400">
          Kick start your Web Development career today with our flagship program in collaboration with E&ICT IIT
          Guwahati. Learn Web Development with top engineers. Challenge yourself by building real time projects.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-2">
            <p className="text-4xl font-bold">30,000+</p>
            <p className="text-gray-400">Students</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold">40 LPA</p>
            <p className="text-gray-400">Highest Salary</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold">15 LPA</p>
            <p className="text-gray-400">Average Salary</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold">700+</p>
            <p className="text-gray-400">Hiring Partners</p>
          </div>
        </div>

        <Button className="bg-red-600 hover:bg-red-700">Download Placement Report</Button>
      </div>
    </section>
  )
}

