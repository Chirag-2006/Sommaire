import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import NavLinks from "../common/NavLinks";

export default function HeroSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container text-center">
        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <Badge className="px-4 py-4 text-sm bg-primary/10 text-primary border border-primary/20 animate-pulse">
            <Sparkles className="h-6 w-6 mr-1" />
            AI-Powered Document Intelligence
          </Badge>
        </div>

        {/* Heading */}
        <h1 className="leading-tight tracking-tight">
          Turn Long PDFs into <br />
          <span className="bg-linear-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Visual AI Summaries
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
          Sommaire transforms complex documents into short, visual, reel-style
          summaries so you can learn faster and retain more information through
          high-density visual insights.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <NavLinks href="/sign-up">
            <Button
              variant="glow"
              size={"lg"}
              className="px-6  group transition-all duration-300 "
            >
              Try Sommaire for Free
              <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
            </Button>
          </NavLinks>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 hero-glow" />
    </section>
  );
}
