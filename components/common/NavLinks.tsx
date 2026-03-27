"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation";
import React from "react"

export default function NavLinks({ href, children ,className }:{
    href: string,
    children: React.ReactNode,
    className?: string
}){

    const pathName = usePathname();
    const isActive = pathName === href || (href!=="/" && pathName.startsWith(href)); 

    // if(isActive){
    //     return(
    //         <Link href={href} className={cn('transition-colors text-sm duration-200 text-primary hover:text-primary',className)}>{children}</Link>
    //     )
    // }

    return(
        <Link href={href} className={cn('transition-colors text-sm duration-200 text-gray-600 hover:text-primary',className, isActive && 'text-primary')}>{children}</Link>
    )
}
