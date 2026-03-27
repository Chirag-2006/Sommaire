import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";

export default function PricingCard({
  title,
  price,
  features,
  buttonText,
  popular,
}: {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}) {
  return (
    <Card
      className={`relative overflow-hidden backdrop-blur-xl transition-all duration-300
      ${
        popular
          ? "border border-cyan-400/40 bg-transparent shadow-[0_0_40px_rgba(99,102,241,0.3)]"
          : "border border-white/10 bg-linear-to-br from-[#0b1220] via-[#0f172a] to-[#111827]"
      }`}
    >
      {/* Popular Badge */}
      {popular && (
        <span className="absolute top-4 right-4 text-xs px-2 py-1 rounded-md bg-cyan-400/20 text-cyan-400">
          POPULAR
        </span>
      )}

      {/* Glow */}
      {popular && (
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-400/30 blur-3xl" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />

      <CardContent className="p-6 relative">
        {/* Plan */}
        <p className={`text-sm tracking-widest text-white/80 mb-4 `}>{title}</p>

        {/* Price */}
        <div className="flex items-end gap-1 mb-6">
          <span className="text-4xl font-bold text-white/90">{price}</span>
          <span className="text-white/50 mb-1">/mo</span>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-6">
          {features.map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-white/70 text-sm"
            >
              <Check className="w-4 h-4 text-cyan-400" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Button */}
        <NavLinks href="/checkout-page">
          <Button
            variant={popular ? "glow" : "default"}
            className={`w-full group ${
              popular
                ? " shadow-lg shadow-cyan-400/30"
                : "bg-white/10 hover:bg-white/20 text-white"
            } transition-all`}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 ease-in-out transition-all duration-200 " />
          </Button>
        </NavLinks>
      </CardContent>
    </Card>
  );
}
