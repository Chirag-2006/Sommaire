
import { FileUp, Brain, Video } from "lucide-react";
import FeatureCard from "../common/FeatureCard";

export default function Features() {
  return (
    <section className="pt-6 pb-12 relative">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-14">
          <h3 className="mb-3">From Document to Insight in Seconds</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto ">
            Our advanced AI engine parses complex technical language and extracts
            the visual essence of your documents.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<FileUp className="w-5 h-5" />}
            title="1. Upload PDF"
            desc="Drag and drop any document, from scientific papers to business reports, up to 500 pages long."
            iconBg="bg-indigo-500/20 text-indigo-400"
          />

          <FeatureCard
            icon={<Brain className="w-5 h-5" />}
            title="2. AI Synthesis"
            desc="Our LLM identifies core concepts, data trends, and critical arguments within milliseconds."
            iconBg="bg-cyan-500/20 text-cyan-400"
          />

          <FeatureCard
            icon={<Video className="w-5 h-5" />}
            title="3. Visual Reel"
            desc="Consume your summary in a swipable, mobile-optimized format perfect for rapid learning."
            iconBg="bg-orange-500/20 text-orange-400"
          />
        </div>
      </div>
    </section>
  );
}
