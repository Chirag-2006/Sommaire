import { JSX, RefAttributes } from "react";
import { Card, CardContent } from "../ui/card";

export default function FeatureCard({ icon, title, desc, iconBg }:{
    icon: JSX.Element;
    title: string;
    desc: string;
    iconBg: string;
}) {
  return (
    <Card className="relative overflow-hidden border border-white/10 bg-linear-to-br from-[#0b1220] via-[#0f172a] to-[#111827] backdrop-blur-xl hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-300">
      
      {/* Top Right Glow Circle */}
      <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#C0C1FF]/30 rounded-full blur-2xl" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />

      <CardContent className="px-6 py-3 relative">
        {/* Icon */}
        <div className={`w-15 h-15 rounded-lg flex items-center justify-center mb-4 ${iconBg}`}>
          {icon}
        </div>

        {/* Title */}
        <h2 className="font-semibold mb-2 text-white/80">{title}</h2>

        {/* Description */}
        <p className="text-sm text-primary-foreground/40 ">{desc}</p>
      </CardContent>
    </Card>
  );
}