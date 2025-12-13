import { PremiumPage } from "@/components/PremiumPage";
import { FadeUp } from "@/components/motion/FadeUp";

export default function PrivacyPolicyPage() {
  return (
    <PremiumPage
      title="Privacy Policy"
      subtitle="We respect your privacy and believe in full transparency."
    >
      <FadeUp>
        <div className="rounded-2xl bg-white/70 backdrop-blur border p-8 shadow-sm space-y-6">

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-2">
              Information Collection
            </h2>
            <p className="text-slate-600">
              CalculateFlash does not collect personal information such as names,
              emails, or phone numbers. All calculations run locally in your browser.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-2">
              Cookies & Analytics
            </h2>
            <p className="text-slate-600">
              We may use cookies and anonymized analytics to improve performance
              and user experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-2">
              Third-Party Ads
            </h2>
            <p className="text-slate-600">
              Third-party advertisers may use cookies in accordance with their
              own privacy policies.
            </p>
          </section>

        </div>
      </FadeUp>
    </PremiumPage>
  );
}
