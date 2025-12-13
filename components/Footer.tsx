export function Footer() {
  return (
    <footer className="w-full border-t bg-white mt-12">
      <div className="max-w-6xl mx-auto py-6 px-4 text-center text-sm text-slate-600 space-y-2">

        <p>© {new Date().getFullYear()} CalculateFlash. All Rights Reserved.</p>

        <p>
          For any queries or information, contact us at{" "}
          <a
            href="mailto:calculateflash@.gmailcom"
            className="text-blue-600 hover:underline"
          >
            calculateflash@.gmailcom
          </a>
        </p>
      </div>
    </footer>
  );
}
