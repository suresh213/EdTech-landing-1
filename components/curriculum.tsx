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

const dataScienceModules = [
  {
    number: "01",
    title: "Foundations of Data Science",
    subtitle: "Add-On : Advanced Data Analysis with ChatGPT",
    topics: [
      "Introduction to Python Programming",
      "Data Types and Structures",
      "NumPy and Pandas Fundamentals",
      "Data Cleaning and Preprocessing",
      "Exploratory Data Analysis",
      "Statistical Foundations",
      "Probability Theory",
      "Data Visualization with Python",
    ],
    duration: "1.5 months",
  },
  {
    number: "02",
    title: "Machine Learning Fundamentals",
    subtitle: "Add-On : AI-Powered Feature Engineering",
    topics: [
      "Supervised Learning Algorithms",
      "Unsupervised Learning",
      "Model Evaluation Metrics",
      "Cross-Validation Techniques",
      "Feature Selection and Engineering",
      "Ensemble Methods",
      "Hyperparameter Tuning",
    ],
    duration: "2 months",
  },
  {
    number: "03",
    title: "Deep Learning and Neural Networks",
    subtitle: "Add-On : Neural Architecture Search with AI",
    topics: [
      "Neural Network Fundamentals",
      "Deep Learning Frameworks",
      "Convolutional Neural Networks",
      "Recurrent Neural Networks",
      "Transfer Learning",
      "Model Deployment",
      "GPU Acceleration",
    ],
    duration: "2.5 months",
  },
  {
    number: "04",
    title: "Big Data Analytics",
    subtitle: "Add-On : Distributed Computing with AI Optimization",
    topics: [
      "Big Data Fundamentals",
      "Apache Spark",
      "Distributed Computing",
      "Data Warehousing",
      "ETL Pipelines",
      "Data Lakes",
      "Real-time Analytics",
    ],
    duration: "2 months",
  },
  {
    number: "05",
    title: "Applied Data Science and MLOps",
    subtitle: "Add-On : AutoML and Model Optimization",
    topics: [
      "End-to-End ML Projects",
      "Model Deployment Strategies",
      "ML Pipeline Automation",
      "Model Monitoring",
      "A/B Testing",
      "Business Analytics",
      "Ethics in AI",
      "Project Portfolio Development",
    ],
    duration: "3 months",
  },
];

export default function Curriculum() {
  const [selectedCourse, setSelectedCourse] = useState("fullstack");
  const [selectedModule, setSelectedModule] = useState(fullStackModules[0]);

  const modules =
    selectedCourse === "fullstack" ? fullStackModules : dataScienceModules;

  const handleCourseChange = (course: string) => {
    setSelectedCourse(course);
    setSelectedModule(
      course === "fullstack" ? fullStackModules[0] : dataScienceModules[0]
    );
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-black">
      <div className="container mx-auto space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold inline-flex items-center gap-2 justify-center">
            Curriculum and{" "}
            <span className="text-red-600 underline decoration-red-600 relative ">
              Learning Track
            </span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            {selectedCourse === "fullstack"
              ? "Master full-stack development with our comprehensive curriculum designed in collaboration with industry experts. Learn by building real-world projects and gain hands-on experience with the latest technologies."
              : "Become a data science expert with our industry-aligned curriculum. Learn from real-world case studies and gain practical experience in machine learning, deep learning, and big data analytics."}
          </p>

          {/* Course Selection Buttons */}
          <div className="flex justify-center gap-4 pt-4">
            <Button
              onClick={() => handleCourseChange("fullstack")}
              className={`px-8 py-3 rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCourse === "fullstack"
                  ? "bg-red-600 text-white shadow-lg shadow-red-500/30"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Full Stack Development
            </Button>
            <Button
              onClick={() => handleCourseChange("datascience")}
              className={`px-8 py-3 rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCourse === "datascience"
                  ? "bg-red-600 text-white shadow-lg shadow-red-500/30"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Data Science
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
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
          <div className="md:w-5/12 bg-gray-900/50 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-white">Topic</h3>
              {selectedModule.duration && (
                <span className="text-base text-gray-300">
                  Duration:{" "}
                  <span className="text-red-600">
                    {selectedModule.duration}
                  </span>
                </span>
              )}
            </div>
            <div className="space-y-3">
              {selectedModule.topics.map((topic, index) => (
                <p key={index} className="text-gray-300 text-base">
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
