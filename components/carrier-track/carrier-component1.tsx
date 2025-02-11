import Image from "next/image";

export default function CareerComponentOne() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="space-y-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            100% Job Assurance with{" "}
            <span className="text-red-500 border-b-2 border-red-500">
              Enormayu Career Track
            </span>
          </h1>
          <p className="text-zinc-400 max-w-3xl mx-auto">
            We have designed a dedicated career track along with career support
            services to help you become industry-ready and make sure you land
            your dream job!
          </p>
        </div>

        {/* Requirements Section */}
        <div className="relative flex">
          {/* Number Indicator with Vertical Line */}
          <div className="absolute -left-12 top-0 flex flex-col items-center">
            {/* Number Circle */}
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
              1
            </div>
            {/* Vertical Line */}
            <div className="w-[2px] h-full bg-red-500"></div>
          </div>

          <div className="space-y-4 w-full pl-10">
            <h2 className="text-2xl font-bold mb-8">
              <span className="underline ">
                Enormayu Eligibility Requirements
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Graduation Degree Card */}
              <div className="p-6 rounded-lg bg-zinc-900 border border-zinc-800 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-zinc-800">
                  <Image
                    src="https://www.almabetter.com/_next/image?url=https%3A%2F%2Falmablog-media.s3.ap-south-1.amazonaws.com%2FUntitled_design_1_e3f85c0570.png&w=256&q=75"
                    alt="Graduation"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="font-semibold text-lg">Graduation Degree</h3>
                <p className="text-sm text-zinc-400">
                  Must be a graduate at the time of Enormayu enrollment.
                </p>
              </div>

              {/* Foundation Track Card */}
              <div className="p-6 rounded-lg bg-zinc-900 border border-zinc-800 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-zinc-800">
                  <Image
                    src="https://www.almabetter.com/_next/image?url=https%3A%2F%2Falmablog-media.s3.ap-south-1.amazonaws.com%2Fim_2_9ad97692d0.png&w=256&q=75"
                    alt="Foundation Track"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="font-semibold text-lg">
                  Completed the Foundation Track
                </h3>
                <p className="text-sm text-zinc-400">
                  Completed the foundation track of the course.
                </p>
              </div>

              {/* Assessment Test Card */}
              <div className="p-6 rounded-lg bg-zinc-900 border border-zinc-800 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-zinc-800">
                  <Image
                    src="https://www.almabetter.com/_next/image?url=https%3A%2F%2Falmablog-media.s3.ap-south-1.amazonaws.com%2Fim3_6498bef35e.png&w=256&q=75"
                    alt="Foundation Track"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="font-semibold text-lg">
                  AlmaBetter Comprehensibility Assessment Test (AB-CAT)
                </h3>
                <p className="text-sm text-zinc-400">
                  Take entrance exam for Enormayu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
