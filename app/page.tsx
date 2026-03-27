import Features from "@/components/home/Features";
import HeroSection from "@/components/home/HeroSection";
import { Button } from "@/components/ui/button";
import { UploadIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#020617] min-h-screen">
      <HeroSection />
      <Features />
    </div>
   
  );
}
