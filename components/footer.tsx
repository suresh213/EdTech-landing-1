import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold text-white">
              <span className="text-red-600">Enormayu</span>
            </Link>

            <div className="space-y-4">
              <div>
                <h4 className="text-white mb-2">Contact Us</h4>
                <p>admissions@aEnormayu.com</p>
                <p>08046008400</p>
              </div>

              <div>
                <h4 className="text-white mb-2">Official Address</h4>
                <p>
                  4th floor, 133/2, Janardhan Towers, Residency Road, Bengaluru,
                  Karnataka, 560025
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
                <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
                <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
                <Youtube className="w-5 h-5 hover:text-white cursor-pointer" />
                <Send className="w-5 h-5 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Hire From Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  Certification in Full Stack Data Science and AI
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Certification in Full Stack Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  MS in Computer Science: Artificial Intelligence and Machine
                  Learning
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  MS in Computer Science: Cloud Computing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Join Links */}
          <div className="grid gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Placement Statistics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Online Compilers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Join AlmaBetter</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Become an Affiliate
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Become A Coach
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Coach Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

