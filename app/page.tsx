import { Button } from "@/components/ui/button";
import { UploadIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col">
    <h1 className="text-4xl font-bold">Hello World</h1>
    <Button size={"default"}>
      <UploadIcon className="w-4 h-4" />
      Upload PDF
    </Button>
    </div>
  );
}
