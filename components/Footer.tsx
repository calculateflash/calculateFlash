import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t bg-white mt-12">
      <div className="max-w-6xl mx-auto py-6 px-4 text-center text-sm text-slate-600 space-y-3">

        {/* COPYRIGHT */}
        <p>
          © {new Date().getFullYear()} CalculateFlash. All Rights Reserved.
        </p>

        {/* FOOTER LINKS */}
        <div className="flex justify-center flex-wrap gap-4">
          <Link href="/about" className="hover:text-blue-600 hover:underline">
            About
          </Link>

          <span className="text-slate-400">|</span>

          <Link href="/contact" className="hover:text-blue-600 hover:underline">
            Contact
          </Link>

          <span className="text-slate-400">|</span>

          <Link
            href="/privacy-policy"
            className="hover:text-blue-600 hover:underline"
          >
            Privacy Policy
          </Link>

          <span className="text-slate-400">|</span>

          <Link
            href="/disclaimer"
            className="hover:text-blue-600 hover:underline"
          >
            Disclaimer
          </Link>
        </div>

        {/* EMAIL */}
        <p>
          For any queries or information, contact us at{" "}
          <a
            href="mailto:calculateflash@gmail.com"
            className="text-blue-600 hover:underline"
          >
            calculateflash@gmail.com
          </a>
        </p>

      </div>
    </footer>
  );
}
