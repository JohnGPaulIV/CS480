import Image from "next/image";
import Link from "next/link";
import Sheet from "@/components/Sheet";

const projects = [
  {
    sheet: "01",
    href: "/project1",
    title: "HW 1 — Unity First Scene",
    kicker: "A desk, a monitor, a mouse — five cubes and one sphere.",
  },
];

export default function Home() {
  return (
    <Sheet sheetNo="00" sheetName="INDEX">
      <section className="grid grid-cols-1 gap-10 sm:grid-cols-[220px_1fr] sm:gap-14">
        <div>
          <div className="plate mx-auto w-[200px] sm:w-full">
            <span className="plate-tick tl" />
            <span className="plate-tick tr" />
            <span className="plate-tick bl" />
            <span className="plate-tick br" />
            <Image
              src="/images/headshot.jpeg"
              alt="Portrait of John Gilbert Paul IV"
              width={400}
              height={400}
              priority
              className="block w-full grayscale-0"
            />
          </div>
          <p className="mt-2 text-center font-head text-xs tracking-wide text-ink-soft sm:text-left">
            FIG. 00 — PORTRAIT
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <p className="font-head text-sm tracking-wide text-amber">
            DIGITAL ARCHIVE
          </p>
          <h1 className="mt-2 font-head text-4xl font-bold leading-tight text-ink sm:text-5xl">
            John Gilbert Paul IV
          </h1>
          <p className="mt-5 max-w-prose text-base leading-relaxed text-ink-soft sm:text-lg">
            This site is a digital archive of my coursework for{" "}
            <span className="text-ink">CS 480</span> — every homework and
            project gets its own sheet, laid out like a build record: what I
            made, how I made it, and what I noticed while making it.
          </p>
        </div>
      </section>

      <div className="dim-line my-12" />

      <section>
        <p className="font-head text-sm tracking-wide text-blue">PROJECTS</p>
        <ul className="mt-6 divide-y divide-paper-line border-y border-paper-line">
          {projects.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className="group flex flex-col gap-1 py-6 transition-colors hover:bg-ink/[0.03] sm:flex-row sm:items-baseline sm:gap-8"
              >
                <span className="font-head text-sm text-amber">
                  SHEET {p.sheet}
                </span>
                <span className="font-head text-xl font-bold text-ink group-hover:text-blue sm:text-2xl">
                  {p.title}
                </span>
                <span className="text-sm text-ink-soft sm:ml-auto sm:text-right">
                  {p.kicker}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Sheet>
  );
}
