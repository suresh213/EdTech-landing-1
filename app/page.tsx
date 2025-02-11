import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Placements from "@/components/placements";
import SuccessStories from "@/components/success-stories";
import Curriculum from "@/components/curriculum";
import Certification from "@/components/certification";
import CareerTrack from "@/components/carrier-track/career-track";
import WhyChoose from "@/components/why-choose";
import FlexibleProgram from "@/components/flexible-program";
import HiringPartners from "@/components/hiring-partners";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Placements />
      <SuccessStories />
      <Curriculum />
      <Certification />
      <CareerTrack />
      <WhyChoose />
      <FlexibleProgram />
      <HiringPartners />
      <Footer />
    </main>
  );
}
