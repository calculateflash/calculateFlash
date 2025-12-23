import { PremiumPage } from "@/components/PremiumPage";
import { FadeUp } from "@/components/motion/FadeUp";
import { ShieldCheck, Zap, HeartPulse } from "lucide-react";

export default function AboutPage() {
  return (
    <PremiumPage
      title="About CalculateFlash"
      subtitle="A modern platform delivering fast, accurate, and beautifully designed calculators for finance, health, and everyday life."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: Zap,
            title: "Lightning Fast",
            desc: "Instant calculations with optimized performance across all devices.",
          },
          {
            icon: ShieldCheck,
            title: "Trusted Accuracy",
            desc: "Industry-standard formulas used by professionals worldwide.",
          },
          {
            icon: HeartPulse,
            title: "Human-Centered",
            desc: "Designed to be simple, clear, and accessible for everyone.",
          },
        ].map((item, i) => (
          <FadeUp key={i} delay={i * 0.1}>
            <div className="rounded-2xl border bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition">
              <item.icon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={0.3}>
        <div className="rounded-2xl linear-gradient-to-r from-blue-600 to-indigo-600 p-10 text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
          <p className="leading-relaxed text-blue-100">
            We believe calculators should be reliable, intuitive, and enjoyable.
            CalculateFlash exists to modernize everyday calculations with clarity
            and confidence.
          </p>
        </div>
      </FadeUp>
    </PremiumPage>
  );
}
