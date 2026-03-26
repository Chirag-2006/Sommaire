import { Button } from "@/components/ui/button";
import { UploadIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground p-10">
      
      <h1 className="mb-6">Sommaire UI Test</h1>

      <div className="grid grid-cols-3 gap-6">
        
        <div className="bg-card p-6 rounded-xl">
          Card 1
        </div>

        <div className="bg-card p-6 rounded-xl">
          Card 2
        </div>

        <div className="bg-card p-6 rounded-xl">
          Card 3
        </div>

      </div>

      <div className="mt-6 space-x-4">
        <button className="bg-primary text-white px-6 py-3 rounded-xl">
          Primary Button
        </button>

        <button className="bg-secondary text-white px-6 py-3 rounded-xl">
          Secondary Button
        </button>
      </div>

    </div>
  );
}
