import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="container py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h4 className="text-white/80 mb-3 font-semibold">Sommaire</h4>
          <p className="text-muted-foreground text-sm mb-4">
            Precision summarization for the next generation of knowledge workers.
          </p>

          {/* Social Icons */}
          {/* <div className="flex gap-3">
            <SocialIcon><Github size={18} /></SocialIcon>
            <SocialIcon><Twitter size={18} /></SocialIcon>
            <SocialIcon><Linkedin size={18} /></SocialIcon>
            <SocialIcon><Mail size={18} /></SocialIcon>
          </div> */}
        </div>

        {/* Product */}
        <div>
          <h4 className="text-white/80 mb-3 font-semibold">Product</h4>
          <div className="flex flex-col gap-2 text-muted-foreground text-sm">
            <Link href="#" className="text-muted/50 hover:text-muted-foreground">Features</Link>
            <Link href="#" className="text-muted/50 hover:text-muted-foreground">Pricing</Link>
            <Link href="#" className="text-muted/50 hover:text-muted-foreground">API Docs</Link>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white/80 mb-3 font-semibold">Company</h4>
          <div className="flex flex-col gap-2  text-sm">
            <Link href="#" className="text-muted/50 hover:text-muted-foreground">About</Link>
            <Link href="#" className="text-muted/50 hover:text-muted-foreground">Contact</Link>
            <Link href="#" className="text-muted/50 hover:text-muted-foreground">Privacy Policy</Link>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white/80 mb-3 font-semibold">Newsletter</h4>
          <p className="text-muted-foreground text-sm mb-3">
            Weekly AI insights delivered to your inbox.
          </p>

          <div className="flex gap-2">
            <Input
              placeholder="Enter your email"
              className="bg-white/5 border-white/10 focus-visible:ring-primary"
            />
            <Button className="bg-indigo-800 hover:bg-indigo-600">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>© 2026 Sommaire AI. Precision summarization.</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}

/* Social Icon Component */
// function SocialIcon({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="w-9 h-9 flex items-center justify-center rounded-md bg-white/5 border border-white/10 hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-pointer">
//       {children}
//     </div>
//   );
// }