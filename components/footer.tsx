import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Send,
} from "lucide-react";
import Image from "next/image";
import logo from "./assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src={logo}
                alt="Enormayu"
                width={150}
                height={50}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>

            <div className="space-y-4">
              <div>
                <h4 className="text-white text-lg font-semibold mb-3">
                  Contact Us
                </h4>
                <p className="hover:text-white transition-colors">
                  <a href="mailto:admissions@Enormayu.com">
                    admissions@Enormayu.com
                  </a>
                </p>
                <p className="hover:text-white transition-colors">
                  <a href="tel:+919606334692">+91 9606334692</a>
                </p>
              </div>

              <div>
                <h4 className="text-white text-lg font-semibold mb-3">
                  Official Address
                </h4>
                <p className="hover:text-white transition-colors">
                  Address 76, Hosa Rd, near Sarjapur Main Road, Valliyamma
                  Layout, Kasavanahalli, Bengaluru, Karnataka 560035
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h4 className="text-white text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, link: "https://facebook.com" },
                { icon: Instagram, link: "https://instagram.com" },
                { icon: Linkedin, link: "https://linkedin.com" },
                { icon: Twitter, link: "https://twitter.com" },
                { icon: Youtube, link: "https://youtube.com" },
                { icon: Send, link: "https://telegram.com" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
              </div>
          </div>

          {/* Company Links */}
          {/* <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                { label: "Success Stories", href: "#" },
                { label: "About Us", href: "#" },
                { label: "Hire From Us", href: "#" },
                { label: "Careers", href: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Courses Links */}
          {/* <div>
            <h3 className="text-white text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-3">
              {[
                {
                  label: "Certification in Full Stack Data Science and AI",
                  href: "#",
                },
                {
                  label: "Certification in Full Stack Web Development",
                  href: "#",
                },
                {
                  label:
                    "MS in Computer Science: Artificial Intelligence and Machine Learning",
                  href: "#",
                },
                { label: "MS in Computer Science: Cloud Computing", href: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Enormayu. All rights reserved.
          </p>
          <div className="mt-2 space-x-4">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
