import { ChevronRight } from "lucide-react"

const modules = [
  {
    number: "01",
    title: "Introduction to Computer Programming",
    subtitle: "Add-On : Pro Programming using GitHub AI CoPilot",
    duration: "month",
  },
  {
    number: "02",
    title: "Design and Analysis of Algorithms",
    subtitle: "Add-On : Coding mastery with ChatGPT",
  },
  {
    number: "03",
    title: "Front-end Development",
    subtitle: "Add-On : Creating Intelligent Frontend Solutions with AI Technologies",
  },
  {
    number: "04",
    title: "Backend Development",
    subtitle: "Add-On : Developing applications with LangChain.js",
  },
  {
    number: "05",
    title: "Practical Software Engineering and Cloud Computing with Microsoft Azure",
    subtitle: "Add-On : Automate CI/CD processes using ChatGPT",
  },
]

const topics = [
  "Getting Started with Programming",
  "Introduction to JavaScript",
  "JavaScript Operators",
  "JavaScript Decision Statements",
  "JavaScript Loops & Control Statements",
  "JavaScript Arrays and Strings",
  "JavaScript Objects and JSON",
  "Functions in JavaScript - Basics",
  "Functions in JavaScript - Advanced",
]

export default function Curriculum() {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="container mx-auto space-y-8">
        <h2 className="text-4xl font-bold text-center">
          Curriculum and <span className="text-red-600 underline decoration-red-600">Learning Track</span>
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto">
          We have designed our curriculum and learning pedagogy based on what top tech companies expect when you join
          them after you graduate. The curriculum focuses on learning by doing including solving real world problems and
          working on real industry level projects.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {modules.map((module, index) => (
              <div key={index} className="p-4 border border-gray-800 rounded-lg hover:bg-gray-900/50 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="text-red-600 font-mono">{module.number}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold">{module.title}</h3>
                    <p className="text-sm text-gray-400">{module.subtitle}</p>
                  </div>
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Topic</h3>
            <div className="space-y-3">
              {topics.map((topic, index) => (
                <p key={index} className="text-gray-300">
                  {topic}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

