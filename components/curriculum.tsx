"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SkillsGrid from "./skills";

const fullStackModules = [
  {
    number: "01",
    title: "Introduction to Computer Programming",
    subtitle: "Add-On : Pro Programming using GitHub AI CoPilot",
    topics: [
      "Getting Started with Programming",
      "Introduction to JavaScript",
      "JavaScript Operators",
      "JavaScript Decision Statements",
      "JavaScript Loops & Control Statements",
      "JavaScript Arrays and Strings",
      "JavaScript Objects and JSON",
      "Functions in JavaScript - Basics",
      "Functions in JavaScript - Advanced",
    ],
    duration: "1 month",
  },
  {
    number: "02",
    title: "Design and Analysis of Algorithms",
    subtitle: "Add-On : Coding mastery with ChatGPT",
    topics: [
      "Algorithm Complexity",
      "Sorting Algorithms",
      "Searching Algorithms",
      "Graph Algorithms",
      "Dynamic Programming",
      "Greedy Algorithms",
    ],
    duration: "2 months",
  },
  {
    number: "03",
    title: "Front-end Development",
    subtitle:
      "Add-On : Creating Intelligent Frontend Solutions with AI Technologies",
    topics: [
      "HTML5 & CSS3",
      "JavaScript ES6+",
      "React Fundamentals",
      "State Management",
      "API Integration",
      "Responsive Design",
      "Performance Optimization",
    ],
    duration: "3 months",
  },
  {
    number: "04",
    title: "Backend Development",
    subtitle: "Add-On : Developing applications with LangChain.js",
    topics: [
      "Node.js Fundamentals",
      "Express.js Framework",
      "Database Design",
      "RESTful APIs",
      "Authentication & Authorization",
      "Server Deployment",
      "Performance & Security",
    ],
    duration: "2 months",
  },
  {
    number: "05",
    title:
      "Practical Software Engineering and Cloud Computing with Microsoft Azure",
    subtitle: "Add-On : Automate CI/CD processes using ChatGPT",
    topics: [
      "Full Stack Project Lifecycle",
      "Cloud Computing Fundamentals with Azure | Architecture & Services",
      "Web App Deployment using Azure App Service",
      "Azure Management & Governance",
      "Design of Scalable Systems",
      "Federated Login/Register",
      "Integration of E-Commerce Tools",
      "UI/UX Design Principles",
    ],
    duration: "3 months",
  },
];

const digitalMarketingModules = [
  {
    number: "01",
    title: "Introduction to Digital Marketing",
    subtitle: "Add-On : AI-Powered Marketing Strategies",
    topics: [
      "Overview of Digital Marketing",
      "Digital Marketing Channels",
      "Customer Journey Mapping",
      "Marketing Funnels",
      "Content Marketing Basics",
      "SEO Fundamentals",
      "Social Media Marketing Overview",
    ],
    duration: "1 month",
  },
  {
    number: "02",
    title: "Search Engine Optimization (SEO)",
    subtitle: "Add-On : Advanced SEO Techniques with AI",
    topics: [
      "Keyword Research and Analysis",
      "On-Page SEO",
      "Off-Page SEO",
      "Technical SEO",
      "Local SEO",
      "SEO Analytics and Reporting",
      "SEO Tools and Software",
    ],
    duration: "2 months",
  },
  {
    number: "03",
    title: "Social Media Marketing",
    subtitle: "Add-On : AI-Driven Social Media Campaigns",
    topics: [
      "Social Media Strategy Development",
      "Content Creation for Social Media",
      "Paid Social Media Advertising",
      "Social Media Analytics",
      "Influencer Marketing",
      "Community Management",
      "Social Media Tools and Automation",
    ],
    duration: "2 months",
  },
  {
    number: "04",
    title: "Pay-Per-Click (PPC) Advertising",
    subtitle: "Add-On : AI-Optimized PPC Campaigns",
    topics: [
      "Introduction to PPC",
      "Google Ads Fundamentals",
      "Facebook Ads",
      "LinkedIn Ads",
      "PPC Campaign Management",
      "Ad Copywriting",
      "PPC Analytics and Optimization",
    ],
    duration: "2 months",
  },
  {
    number: "05",
    title: "Email Marketing and Automation",
    subtitle: "Add-On : AI-Powered Email Campaigns",
    topics: [
      "Email Marketing Strategy",
      "Email List Building",
      "Email Copywriting",
      "Email Design and Templates",
      "Email Automation Tools",
      "A/B Testing in Email Marketing",
      "Email Analytics and Reporting",
    ],
    duration: "1.5 months",
  },
  {
    number: "06",
    title: "Digital Marketing Analytics",
    subtitle: "Add-On : AI-Driven Marketing Insights",
    topics: [
      "Introduction to Marketing Analytics",
      "Google Analytics",
      "Data-Driven Decision Making",
      "Conversion Rate Optimization",
      "Customer Lifetime Value Analysis",
      "Attribution Models",
      "Marketing Dashboards and Reporting",
    ],
    duration: "2 months",
  },
];

export default function Curriculum() {
  const [selectedCourse, setSelectedCourse] = useState("fullstack");
  const [selectedModule, setSelectedModule] = useState(fullStackModules[0]);

  const modules =
    selectedCourse === "fullstack" ? fullStackModules : digitalMarketingModules;

  const handleCourseChange = (course: string) => {
    setSelectedCourse(course);
    setSelectedModule(
      course === "fullstack" ? fullStackModules[0] : digitalMarketingModules[0]
    );
  };

  return (
    <section className="py-12 px-4 md:px-12 bg-black">
      <div className="container mx-auto space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold inline-flex items-center gap-2 justify-center">
            Curriculum and{" "}
            <span className="text-red-600 underline decoration-red-600 relative">
              Learning Track
            </span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg">
            {selectedCourse === "fullstack"
              ? "Master full-stack development with our comprehensive curriculum designed in collaboration with industry experts. Learn by building real-world projects and gain hands-on experience with the latest technologies."
              : "Become a digital marketing expert with our industry-aligned curriculum. Learn from real-world case studies and gain practical experience in SEO, social media marketing, PPC, and more."}
          </p>

          {/* Course Selection Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
            <Button
              onClick={() => handleCourseChange("fullstack")}
              className={`px-6 py-2 sm:px-8 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCourse === "fullstack"
                  ? "bg-red-600 text-white shadow-lg shadow-red-500/30"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Full Stack Development
            </Button>
            <Button
              onClick={() => handleCourseChange("digitalmarketing")}
              className={`px-6 py-2 sm:px-8 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCourse === "digitalmarketing"
                  ? "bg-red-600 text-white shadow-lg shadow-red-500/30"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Digital Marketing
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column - Modules List */}
          <div className="md:w-7/12 space-y-4">
            {modules.map((module, index) => (
              <div
                key={index}
                onClick={() => setSelectedModule(module)}
                className={`p-4 border border-gray-800 rounded-lg hover:bg-gray-900/50 transition-colors cursor-pointer group ${
                  selectedModule.number === module.number
                    ? "bg-gray-900/50"
                    : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-red-600 font-mono text-lg">
                    {module.number}
                  </span>
                  <div className="flex-1">
                    <h3
                      className={`text-base font-medium transition-colors group-hover:text-white ${
                        selectedModule.number === module.number
                          ? "text-white"
                          : "text-gray-300"
                      }`}
                    >
                      {module.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {module.subtitle}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Selected Module Details */}
          <div className="md:w-5/12 bg-gray-900/50 rounded-lg p-4 sm:p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                Topic
              </h3>
              {selectedModule.duration && (
                <span className="text-sm sm:text-base text-gray-300">
                  Duration:{" "}
                  <span className="text-red-600">
                    {selectedModule.duration}
                  </span>
                </span>
              )}
            </div>
            <div className="space-y-3 max-h-[300px] overflow-y-auto">
              {selectedModule.topics.map((topic, index) => (
                <p key={index} className="text-gray-300 text-sm sm:text-base">
                  {topic}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SkillsGrid selectedCourse={selectedCourse} />
    </section>
  );
}
