import { Button } from "@/components/ui/button"
import { PlayCircle, Clock, Archive, HelpCircle } from "lucide-react"

const faqs = [
  {
    icon: <PlayCircle className="w-12 h-12 text-red-600" />,
    question: "What if I miss a class?",
    answer:
      "In case you miss a class, you can watch the recording later. If you miss multiple classes, you can switch to another Cohort.",
  },
  {
    icon: <Clock className="w-12 h-12 text-red-600" />,
    question: "What if I am not able to manage my job or schedule with the class timings?",
    answer:
      "You can complete the web development online course or program at your own pace through lecture recordings and learning materials.",
  },
  {
    icon: <Archive className="w-12 h-12 text-red-600" />,
    question: "Do I get lifetime access?",
    answer:
      "You will have lifetime access to the entire web development course content, including recordings, materials, assessments, and projects.",
  },
  {
    icon: <HelpCircle className="w-12 h-12 text-red-600" />,
    question: "How will I resolve my doubts?",
    answer: "You can get your doubts resolved by connecting with our subject matter experts over text or video call!",
  },
]

export default function FlexibleProgram() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto space-y-8">
        <h2 className="text-4xl font-bold text-center">
          A Flexible Program Created <span className="text-red-600 underline decoration-red-600">Just For You!</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg p-6 flex gap-4">
              <div className="shrink-0">{faq.icon}</div>
              <div className="space-y-2">
                <h3 className="font-semibold text-black">{faq.question}</h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-red-600 hover:bg-red-700">Download Brochure</Button>
          <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white">
            Download Placement Report
          </Button>
        </div>
      </div>
    </section>
  )
}

