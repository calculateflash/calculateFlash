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

      {/* DEVELOPERS SECTION */}
      {/* DEVELOPERS SECTION */}
<FadeUp>
  <div className="max-w-4xl mx-auto mt-12">
    <h3 className="text-2xl font-semibold text-slate-800 text-center mb-8">
      Developed By
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Developer 1 */}
      <div className="rounded-2xl bg-white/70 backdrop-blur border p-6 shadow-sm text-center hover:shadow-md transition">
        <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
          P
        </div>
        <p className="text-lg font-semibold text-slate-800">
          Pavan Kumar Bhedam
        </p>
        <p className="text-sm text-slate-600 mt-1">
          pavankumarbhedam@gmail.com
        </p>
        <a
          href="https://www.linkedin.com/in/pavan-kumar-bhedam-a0918725b/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-blue-600 font-medium hover:underline"
        >
          View LinkedIn →
        </a>
      </div>

      {/* Developer 2 */}
      <div className="rounded-2xl bg-white/70 backdrop-blur border p-6 shadow-sm text-center hover:shadow-md transition">
        <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xl">
          N
        </div>
        <p className="text-lg font-semibold text-slate-800">
          Nikhil Kumar Kandula
        </p>
        <div className="text-sm text-slate-600 mt-1">
          nikhilkumarkandula648@gmail.com
        </div>
        <a
          href="https://www.linkedin.com/in/nikhil-kumar-kandula-740774254"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-emerald-600 font-medium hover:underline"
        >
          View LinkedIn →
        </a>
      </div>

    </div>
  </div>
</FadeUp>
    </PremiumPage>
  );
}