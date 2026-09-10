import Image from "next/image";
import Link from "next/link";
import Sheet from "@/components/Sheet";

const parts = [
  {
    name: "Desk",
    count: "5 cubes",
    note: "One cube stretched flat for the tabletop, four cubes scaled tall and thin for the legs.",
  },
  {
    name: "Monitor",
    count: "2 cubes",
    note: "One flattened cube for the screen, one thin cube for the neck and stand beneath it.",
  },
  {
    name: "Computer",
    count: "1 cube",
    note: "A single scaled cube, sitting under the monitor.",
  },
  {
    name: "Mouse pad",
    count: "1 cube",
    note: "A thin, flat cube placed on the desk surface.",
  },
  {
    name: "Mouse",
    count: "1 sphere",
    note: "A single sphere, scaled down and set on the mouse pad.",
  },
];

export default function Project1() {
  return (
    <Sheet sheetNo="01" sheetName="HW 1">
      <Link
        href="/"
        className="font-head text-sm tracking-wide text-blue hover:text-amber"
      >
        ← BACK TO INDEX
      </Link>

      <h1 className="mt-6 font-head text-4xl font-bold leading-tight text-ink sm:text-5xl">
        HW 1 — Unity First Scene
      </h1>
      <p className="mt-3 font-head text-sm tracking-wide text-ink-soft">
        JOHN GILBERT PAUL IV
      </p>

      <div className="mt-10">
        <div className="plate">
          <span className="plate-tick tl" />
          <span className="plate-tick tr" />
          <span className="plate-tick bl" />
          <span className="plate-tick br" />
          <Image
            src="/images/hw1-scene.png"
            alt="Unity scene showing a desk holding a monitor, a computer, a keyboard, and a mouse on a mouse pad"
            width={1351}
            height={970}
            className="block w-full"
          />
        </div>
        <p className="mt-2 font-head text-xs tracking-wide text-ink-soft">
          FIG. 1 — DESK SCENE, PERSPECTIVE VIEW
        </p>
      </div>

      <div className="dim-line my-12" />

      <section className="grid grid-cols-1 gap-12 sm:grid-cols-[1fr_1fr]">
        <div>
          <p className="font-head text-sm tracking-wide text-blue">
            THE SPACE
          </p>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-soft">
            The scene is a small desk setup. A monitor sits on top of a
            computer tower, which rests on the desk. A keyboard sits beside
            the computer, and a mouse sits on a mouse pad next to it. Nothing
            fancy — just the basic pieces of a workstation, viewed from a
            slightly raised angle so all of the objects and their shadows are
            visible at once.
          </p>
        </div>

        <div>
          <p className="font-head text-sm tracking-wide text-blue">
            WHAT I LEARNED
          </p>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-soft">
            I&apos;d used Unity before this assignment, so none of the tools
            themselves were new to me. That said, I still enjoyed the process
            of building out a scene from scratch — there&apos;s something
            satisfying about turning a handful of cubes and a sphere into
            something that reads as a real desk setup once the shadows and
            camera angle come together.
          </p>
        </div>
      </section>

      <div className="dim-line my-12" />

      <section>
        <p className="font-head text-sm tracking-wide text-blue">
          PARTS LIST — HOW EACH OBJECT WAS BUILT
        </p>
        <div className="mt-6 overflow-x-auto border border-paper-line">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-paper-line bg-ink/[0.03]">
                <th className="px-4 py-3 font-head text-xs tracking-wide text-ink-soft">
                  OBJECT
                </th>
                <th className="px-4 py-3 font-head text-xs tracking-wide text-ink-soft">
                  PRIMITIVES
                </th>
                <th className="px-4 py-3 font-head text-xs tracking-wide text-ink-soft">
                  CONSTRUCTION
                </th>
              </tr>
            </thead>
            <tbody>
              {parts.map((part, i) => (
                <tr
                  key={part.name}
                  className={i % 2 === 1 ? "bg-ink/[0.02]" : undefined}
                >
                  <td className="px-4 py-4 align-top font-head font-bold text-ink">
                    {part.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 align-top text-sm text-amber">
                    {part.count}
                  </td>
                  <td className="px-4 py-4 align-top text-sm leading-relaxed text-ink-soft">
                    {part.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Sheet>
  );
}
