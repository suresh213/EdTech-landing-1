import { Button } from "@/components/ui/button";

export default function Placements() {
  return (
    <section className="w-full pt-36 pb-28 flex items-center justify-center py-16 px-6 md:px-12 lg:px-20 bg-white">
      <div className="container mx-auto text-center space-y-10">
        <h2 className="text-6xl md:text-4xl text-black font-bold leading-tight">
          Industry Leading{" "}
          <span className="text-red-600 underline decoration-red-600">
            Placements
          </span>
        </h2>

        <p className="mx-auto text-gray-500 text-xl leading-relaxed">
          Kick start your Web Development career today with our flagship program
          in collaboration with E&ICT IIT Guwahati. Learn Web Development with
          top engineers. Challenge yourself by building real-time projects.
        </p>

        {/* Stats Section with Vertical Separators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-black">
          {[
            { value: "30,000+", label: "Students" },
            { value: "40 LPA", label: "Highest Salary" },
            { value: "15 LPA", label: "Average Salary" },
            { value: "700+", label: "Hiring Partners" },
          ].map((item, index) => (
            <div
              key={index}
              className={`space-y-2 flex flex-col items-center ${
                index !== 0 ? "border-l border-gray-300 pl-6" : ""
              }`}
            >
              <p className="text-3xl md:text-4xl font-bold">{item.value}</p>
              <p className="text-gray-500 text-sm md:text-base">{item.label}</p>
            </div>
          ))}
        </div>

        {/* <Button className="bg-red-600 hover:bg-red-700 px-8 py-6 text-base font-semibold rounded-md shadow-md transition-all">
          Download Placement Report
        </Button> */}
      </div>
    </section>
  );
}
