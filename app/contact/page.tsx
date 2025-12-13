import { PremiumPage } from "@/components/PremiumPage";
import { FadeUp } from "@/components/motion/FadeUp";
import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <PremiumPage
      title="Contact Us"
      subtitle="We’d love to hear from you."
    >
      <FadeUp>
        <div className="max-w-xl mx-auto rounded-2xl bg-white/70 backdrop-blur border p-10 shadow-sm text-center">
          <Mail className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <p className="text-lg font-semibold text-slate-800">
            calculateflash@gmail.com
          </p>
          <p className="mt-2 text-slate-600">
            We usually respond within 24–48 hours.
          </p>
        </div>
      </FadeUp>
    </PremiumPage>
  );
}
