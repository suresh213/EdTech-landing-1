import Image from "next/image";
import { ArrowRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import storyImage from "./assets/story-image.png";
import amazon from "./assets/amazon.jpeg";
import bajaj from "./assets/bajaj.jpeg";
import accenture from "./assets/accenture.jpeg";

const stories = [
  {
    name: "Rohan Mote",
    image: storyImage,
    before: "Fresher",
    after: "Web Developer",
    graduate: "Graduate",
    company: {
      name: "amazon",
      logo: amazon,
    },
    quote:
      "If you want to turn your skills into a professional experience, Enormayu is the place you can trust.",
  },
  {
    name: "Sri Srinivasan",
    image: storyImage,
    before: "Fresher",
    after: "Junior Developer",
    graduate: "Graduate",
    company: {
      name: "bajaj",
      logo: bajaj,
    },
    quote:
      "Enormayu provides incredible features like one-on-one mentorship sessions and multiple coding problems to prepare you to appear in interviews with big companies.",
  },
  {
    name: "Vaibhav Thorat",
    image: storyImage,
    before: "Fresher",
    after: "Software Developer",
    graduate: "Graduate",
    company: {
      name: "accenture",
      logo: accenture,
    },
    quote:
      "This shows what I have learned at Enormayu is at par with the current industry standards.",
  },
];

export default function SuccessStories() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl space-y-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-black">
          Success{" "}
          <span className="text-red-600 underline decoration-red-600">
            Stories
          </span>
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg lg:text-xl">
          Meet our graduates who have not only secured new and better jobs but
          have also experienced significant salary hikes.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-center">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all overflow-hidden flex flex-col h-full w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[500px] xl:max-w-[550px] mx-auto"
            >
              {/* <div className="relative h-48 w-full ">
                <Image
                  src=""
                  alt={story.name}
                  fill
                  className="object-cover"
                />
              </div> */}

              <div className="p-6 flex flex-col flex-grow">
                {/* Before/After badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm lg:text-base">
                    {story.before}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm lg:text-base">
                    {story.after}
                  </span>
                </div>

                {/* Graduate label */}
                <div className="flex items-center justify-center">
                  <ArrowRight className="w-8 h-7 font-bold text-gray-500" />
                </div>

                {/* Company logo and name */}
                <div className="flex items-center justify-between gap-2 mb-4 text-black">
                  <div>
                    <span className="text-sm lg:text-base font-medium text-blue-600 mb-2">
                      {story.graduate}
                    </span>
                  </div>
                  <div className="flex">
                    <div className="relative h-6 w-6 ">
                      <Image
                        src={story.company.logo}
                        alt={story.company.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm lg:text-base font-medium text-gray-700">
                      {story.company.name}
                    </span>
                  </div>
                </div>

                {/* Name and LinkedIn */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-black">
                    {story.name}
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-2 hover:bg-gray-100"
                  >
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  </Button>
                </div>

                {/* Quote */}
                <p className="text-gray-500 mb-4 flex-grow">
                  {story.quote}
                </p>

                {/* Read More */}
                {/* <Button
                  variant="link"
                  className="p-0 text-red-600 font-semibold self-start hover:no-underline text-base lg:text-lg"
                >
                  Read More
                </Button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
