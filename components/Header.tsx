"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";


export function Header() {
  return (
    <header className="w-full border-b bg-white sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">

        {/* LOGO */}
        <Link href="/" className="text-xl font-bold text-blue-700">
          CalculateFlash
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/financial" className="hover:text-blue-600 transition">Financial</Link>
          <Link href="/health" className="hover:text-blue-600 transition">Health</Link>
          <Link href="/utility" className="hover:text-blue-600 transition">Utility</Link>
        </nav>

        {/* MOBILE NAV */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6 text-slate-700" />
            </SheetTrigger>

            <SheetContent side="right" className="p-6 w-64">

              {/* REQUIRED FOR ACCESSIBILITY */}
              <SheetTitle className="sr-only">
                Mobile Navigation Menu
              </SheetTitle>

              <div className="flex flex-col gap-6 mt-6 text-lg font-medium">

                <Link href="/financial" className="text-slate-700 hover:text-blue-600">
                  Financial Tools
                </Link>

                <Link href="/health" className="text-slate-700 hover:text-blue-600">
                  Health Tools
                </Link>

                <Link href="/utility" className="text-slate-700 hover:text-blue-600">
                  Utility Tools
                </Link>

                <Link href="/" className="text-slate-700 hover:text-blue-600">
                  Home
                </Link>

              </div>

            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}
