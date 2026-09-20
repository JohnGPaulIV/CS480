import Link from "next/link";
import Sheet from "@/components/Sheet";

const takeaways = [
  {
    tag: "T01",
    title: "The hardest part: AI navigation",
    body: "The hardest problem for me was getting the enemy's AI navigation working. I was confused when my agent wouldn't move toward the player at all. It turned out the enemy GameObject had been positioned somewhere else in the scene before I made it a child of the parent GameObject, so it wasn't sitting at the origin like I expected — that threw off all of the relative distance calculations. Once I fixed the positioning, the navigation worked correctly.",
  },
  {
    tag: "T02",
    title: "GameObjects, Components, and Scripts",
    body: "GameObjects store Components in order to keep the hierarchy clean and readable. Those Components can then have Scripts attached to them, which is what actually gives them functionality.",
  },
  {
    tag: "T03",
    title: "TAKEAWAY_3_PLACEHOLDER",
    body: "TAKEAWAY_3_BODY_PLACEHOLDER",
  },
];

export default function Project2() {
  return (
    <Sheet sheetNo="02" sheetName="HW 2">
      <Link
        href="/"
        className="font-head text-sm tracking-wide text-blue hover:text-amber"
      >
        ← BACK TO INDEX
      </Link>

      <h1 className="mt-6 font-head text-4xl font-bold leading-tight text-ink sm:text-5xl">
        HW 2 — Unity Roll-a-Ball
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
          <iframe
            className="video-frame"
            allowFullScreen
            allow="autoplay *"
            title="HW 2: Roll-a-Ball"
            src="https://jmu.instructuremedia.com/embed/cf110bec-6acd-4cfe-a7a9-94fd46a0298b"
            frameBorder="0"
          />
        </div>
        <p className="mt-2 font-head text-xs tracking-wide text-ink-soft">
          FIG. 1 — GAMEPLAY RECORDING
        </p>
      </div>

      <div className="dim-line my-12" />

      <section>
        <p className="font-head text-sm tracking-wide text-blue">
          THE MODIFICATION
        </p>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-soft">
          Beyond the base tutorial, I added green cylinder pickups worth 2
          points each, instead of just the standard 1-point yellow cubes.
          It's a small change, but it meant giving each pickup type its own
          point value and making sure the score script correctly added the
          right amount depending on which object the player collided with.
        </p>
      </section>

      <div className="dim-line my-12" />

      <section>
        <p className="font-head text-sm tracking-wide text-blue">
          KEY TAKEAWAYS
        </p>
        <ul className="mt-6 divide-y divide-paper-line border-y border-paper-line">
          {takeaways.map((t) => (
            <li key={t.tag} className="flex flex-col gap-2 py-6 sm:flex-row sm:gap-8">
              <span className="font-head text-sm text-amber sm:w-14 sm:shrink-0">
                {t.tag}
              </span>
              <div>
                <p className="font-head text-lg font-bold text-ink">
                  {t.title}
                </p>
                <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-soft">
                  {t.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className="dim-line my-12" />

      <section>
        <p className="font-head text-sm tracking-wide text-blue">
          CONNECTION TO THE XR DOCUMENTARY
        </p>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-soft">
          A big part of how I see this applying to our XR documentary has to
          do with Unity's Canvas. We could use a Canvas to overlay text that
          the user can look at and read while inside the experience — the
          same underlying system that displayed the score in this project
          could just as easily surface captions, prompts, or context for the
          documentary.
        </p>
      </section>
    </Sheet>
  );
}
