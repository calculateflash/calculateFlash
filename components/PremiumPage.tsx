"use client";

import { FadeUp } from "./motion/FadeUp";

export function PremiumPage({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 -z-10" />
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-400/20 blur-3xl rounded-full -z-10" />

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
        <FadeUp>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 text-center tracking-tight">
            {title}
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto text-center">
            {subtitle}
          </p>
        </FadeUp>

        {children}
      </div>
    </section>
  );
}
