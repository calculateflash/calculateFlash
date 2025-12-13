import { PremiumPage } from "@/components/PremiumPage";
import { FadeUp } from "@/components/motion/FadeUp";

export default function DisclaimerPage() {
  return (
    <PremiumPage
      title="Disclaimer"
      subtitle="Important information regarding the use of our calculators."
    >
      <FadeUp>
        <div className="rounded-2xl bg-white/70 backdrop-blur border p-8 shadow-sm space-y-6">

          <p className="text-slate-600">
            All calculators on CalculateFlash are provided for informational
            purposes only.
          </p>

          <p className="text-slate-600">
            Results should not be considered professional financial,
            medical, or legal advice.
          </p>

          <p className="text-slate-600">
            Use of this website and its tools is at your own risk.
          </p>

        </div>
      </FadeUp>
    </PremiumPage>
  );
}
