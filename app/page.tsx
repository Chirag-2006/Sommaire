import CTA from "@/components/home/CTA";
import Features from "@/components/home/Features";
import HeroSection from "@/components/home/HeroSection";
import Pricing from "@/components/home/Pricing";

export default function Home() {
  return (
    <div className=" min-h-screen">
      <HeroSection />
      <Features />
      <Pricing />
      <CTA />
    </div>
   
  );
}
