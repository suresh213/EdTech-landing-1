import Image from "next/image";
import { Button } from "@/components/ui/button";
import shareicon from "../public/certificate/share.png";
import aboveicon from "../public/certificate/icon.png";

export default function Certification() {
  return (
    <section className="py-24 bg-white text-black">
      <div className="container mx-auto px-8 flex flex-col items-center text-center space-y-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">
            Unlock your Web Development{" "}
            <span className="text-red-500 underline decoration-2 decoration-red-500 align-super">
              Certification
            </span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-base">
            Elevate your career with our esteemed certification. Unlock new
            opportunities and demonstrate your mastery in web development.
          </p>
        </div>

        <div className="space-y-10 max-w-3xl">
          <div className="space-y-8">
            <div className="flex items-start gap-6 text-left">
              <Image
                src={aboveicon || "/placeholder.svg"}
                alt="Certificate Icon"
                width={48}
                height={48}
                className="mt-1"
              />
              <div>
                <h3 className="text-lg font-semibold mb-2 text-black">
                  Industry Recognised Certification
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  EnormayuBetter gives you Industry Recognised Certification as
                  per ISO 27001 with verifiable credentials.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 text-left">
              <Image
                src={shareicon || "/placeholder.svg"}
                alt="Share Icon"
                width={48}
                height={48}
                className="mt-1"
              />
              <div>
                <h3 className="text-lg font-semibold mb-2 text-black">
                  Credible & Shareable
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  You can add the EnormayuBetter Certificate on your LinkedIn
                  profile, resume and even share it over Whatsapp or any other
                  social channels.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-base font-medium rounded-[10px]">
              Explore Program
            </Button>
            <Button className="border-2 border-red-500 text-red-500 px-8 py-3 text-base font-medium rounded-[10px] bg-red-100 hover:bg-red-200 transition-all duration-200 hover:shadow-[inset_0_0_0_1px_rgba(239,68,68,0.2)]">
              Download Brochure
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
