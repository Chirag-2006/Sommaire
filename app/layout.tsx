import type { Metadata } from "next";
import { Source_Sans_3 as FontSans, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});
const fontSans = FontSans({
  variable: "--font-sans  ",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Sommaire - Ai-Powered PDF Summarization",
  description:
    "Summarize your PDFs with AI and Save hours of reading time. Transform lengthy PDFs into clear, accurate summaries in seconds with our advanced AI technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", inter.variable, fontSans.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
