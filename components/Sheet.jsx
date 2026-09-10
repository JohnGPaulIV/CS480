import RegMark from "./RegMark";

export default function Sheet({ sheetNo, sheetName, children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex items-center justify-between px-5 pt-5 sm:px-8 sm:pt-8">
        <RegMark delay={0} />
        <RegMark delay={120} />
      </div>

      <header className="px-5 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-ink pb-3 pt-4">
            <p className="font-head text-sm tracking-wide text-blue">
              SHEET {sheetNo} — {sheetName}
            </p>
            <p className="font-head text-sm tracking-wide text-blue">
              CS 480 ARCHIVE
            </p>
          </div>
        </div>
      </header>

      <main className="flex-1 px-5 sm:px-8">
        <div className="mx-auto max-w-5xl py-10 sm:py-14">{children}</div>
      </main>

      <footer className="px-5 pb-5 sm:px-8 sm:pb-8">
        <div className="flex items-center justify-between">
          <RegMark delay={0} />
          <RegMark delay={120} />
        </div>
      </footer>
    </div>
  );
}
