import { ArrowRight } from "lucide-react";
import NavLinks from "../common/NavLinks";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-24 relative">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-primary/20 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-[#0b1220] via-[#0f172a] to-[#111827] backdrop-blur-xl px-8 py-16 text-center">
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />

          <div className="relative">
            {/* Heading */}
            <h3 className="text-white/80 mb-4">
              Ready to supercharge your learning?
            </h3>

            {/* Subtitle */}
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Join 10,000+ researchers, students, and professionals who use
              Sommaire to master complex topics in minutes.
            </p>

            {/* Button */}
            <NavLinks href="/sign-up">
              <Button
                variant={'glow'}
                size="lg"
                className=" group px-4 py-6 shadow-lg shadow-cyan-400/30 transition-all duration-300"
              >
                Get Sommaire AI Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 ease-in-out transition-all duration-200 " />
              </Button>
            </NavLinks>
          </div>
        </div>
      </div>
    </section>
  );
}