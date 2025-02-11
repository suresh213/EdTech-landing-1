import { ChevronRight } from "lucide-react";

export default function CarrierComponentTwo() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Content Container */}
        <div className="relative">
          {/* Number Indicator */}
          <div className="absolute -left-12 top-0">
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
              2
            </div>
            <div className="absolute top-10 left-1/2 w-0.5 h-full bg-red-600 -translate-x-1/2" />
          </div>

          {/* Curriculum Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Enormayu Curriculum</h2>

            <div className="grid md:grid-cols-[2fr,1fr] gap-6">
              {/* Left Column - Curriculum Items */}
              <div className="space-y-4">
                {/* Business Communication */}
                <div className="p-4 rounded-lg bg-zinc-900/50 hover:bg-zinc-900 transition-colors cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-red-500 text-sm">01</span>
                        <h3 className="text-lg font-semibold">
                          Business Communication
                        </h3>
                      </div>
                      <p className="text-sm text-zinc-400 mt-1">
                        Add-On : Optimizing Business Emails with AI
                      </p>
                    </div>
                    <ChevronRight className="text-zinc-400" />
                  </div>
                </div>

                {/* Profile and Resume Building */}
                <div className="p-4 rounded-lg bg-zinc-900/50 hover:bg-zinc-900 transition-colors cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-red-500 text-sm">02</span>
                        <h3 className="text-lg font-semibold">
                          Profile and Resume Building
                        </h3>
                      </div>
                      <p className="text-sm text-zinc-400 mt-1">
                        Add-On : AI-Driven Resume Optimization Techniques
                      </p>
                    </div>
                    <ChevronRight className="text-zinc-400" />
                  </div>
                </div>

                {/* Interview Prep */}
                <div className="p-4 rounded-lg bg-zinc-900/50 hover:bg-zinc-900 transition-colors cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-red-500 text-sm">03</span>
                        <h3 className="text-lg font-semibold">
                          Interview Prep & Mock Interviews
                        </h3>
                      </div>
                      <p className="text-sm text-zinc-400 mt-1">
                        Add-On : Interview preparation assistance with our own
                        AI tool "WiseChat"
                      </p>
                    </div>
                    <ChevronRight className="text-zinc-400" />
                  </div>
                </div>

                {/* Coding & Technical Revision */}
                <div className="p-4 rounded-lg bg-zinc-900/50 hover:bg-zinc-900 transition-colors cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-red-500 text-sm">04</span>
                        <h3 className="text-lg font-semibold">
                          Coding & Technical Revision
                        </h3>
                      </div>
                      <p className="text-sm text-zinc-400 mt-1">
                        Add-On : Automated Coding Challenges with AI
                      </p>
                    </div>
                    <ChevronRight className="text-zinc-400" />
                  </div>
                </div>
              </div>

              {/* Right Column - Topics */}
              <div className="bg-zinc-900/50 rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold">Topic</h3>
                  <span className="text-sm text-zinc-400">
                    Duration: <span className="text-red-500">15 Days</span>
                  </span>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    Build ATS Complaint Resumes and Cover Letters
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    Build your LinkedIn Profile
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    Build your GitHub Portfolio
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    Build your own website
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    Review of your portfolio
                  </li>
                </ul>
              </div>
            </div>

            {/* Explore Button */}
            <div className="flex justify-end mt-8">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors">
                Explore Curriculum
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
