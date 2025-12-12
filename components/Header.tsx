"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function Header() {
  
const pathname = usePathname();

const isActive = (path: string) => pathname.startsWith(path);

  return (
    <header className="w-full border-b bg-white sticky top-0 z-30">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-800">
          CalculateFlash
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link
            href="/financial"
            className={cn(
              "transition-colors",
              isActive("/financial") 
                ? "text-amber-600 font-semibold"       // active
                : "text-slate-600 hover:text-blue-600" // normal
            )}
          >
            Financial
          </Link>


          <Link
            href="/health"
            className={cn(
              "transition-colors",
              isActive("/health")
                ? "text-amber-600 font-semibold"
                : "text-slate-600 hover:text-blue-600"
            )}
          >
            Health
          </Link>

          <Link
            href="/utility"
            className={cn(
              "transition-colors",
              isActive("/student")
                ? "text-amber-600 font-semibold"
                : "text-slate-600 hover:text-blue-600"
            )}
          >
            Utility
          </Link>

        </nav>
        {/* CTA Button */}
        {/* <Button className="hidden md:flex">Get Started</Button> */}

      </div>
    </header>
  );
}
