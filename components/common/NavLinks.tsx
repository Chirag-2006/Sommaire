"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLinks({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const pathName = usePathname();
  const isActive =
    pathName === href ||
    (href !== "/" && pathName.startsWith(href));

  return (
    <Link
      href={href}
      className={cn(
        "text-sm transition-colors duration-200 hover:text-primary ",
        isActive && "text-primary ",
        className
      )}
    >
      {children}
    </Link>
  );
}