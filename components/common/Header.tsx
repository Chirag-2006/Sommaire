"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import NavLinks from "./NavLinks";
import { FileText } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const isLogedIn = false;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "mx-6 mt-4 rounded-xl backdrop-blur-xl bg-white/5 border-white/10"
          : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between transition-all duration-300",
          scrolled ? "h-14 px-6" : "h-16 px-8",
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1 lg:gap-2 shrink-0"
        >
          <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-primary hover:rotate-12 transform transition duration-200 ease-in-out " />
          <span className="font-extrabold lg:text-xl text-white">Sommaire</span>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <NavLinks href="/#about" >About</NavLinks>
          <NavLinks href="/#pricing">Pricing</NavLinks>
          {isLogedIn && <Link href="/dashboard">Dashboard</Link>}
        </nav>

        {/* Button */}
        {isLogedIn ? (
          <div className="flex gap-1 lg:gap-2 ">
            <div>PRO</div>
            <div className="">USER</div>
          </div>
        ) : (
          <NavLinks href="/sign-in">
            <Button variant={"glow"}>Get Started</Button>
          </NavLinks>
        )}
      </div>
    </header>
  );
}
