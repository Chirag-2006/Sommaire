import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
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
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        "scroll-smooth",
        fontSans.variable,
      )}
    >
      <body className="min-h-full flex flex-col ">
        <div className="relative flex flex-col min-h-screen text-white">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
