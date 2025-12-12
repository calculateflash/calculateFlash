export function Footer() {
  return (
    <footer className="w-full border-t bg-white mt-12">
      <div className="max-w-6xl mx-auto py-6 px-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Calculator App. All Rights Reserved.
      </div>
    </footer>
  );
}
