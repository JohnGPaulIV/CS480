import Link from "next/link";
import Sheet from "@/components/Sheet";

// TODO: replace with your gameplay video's embed URL
// (in Canvas Studio: Share > Embed, then copy the src="..." value).
const VIDEO_SRC = "https://jmu.instructuremedia.com/embed/58aa0f1e-80f8-4303-b0dc-f5880df45708";

const triggers = [
    {
        name: "Trailhead",
        location: "Hollow Pines Trail sign",
        effect: "Subtitle introduces the story: a hiker named Sam went up this trail three days ago and never came back.",
    },
    {
        name: "Campsite",
        location: "Tent and campfire clearing",
        effect: "Fire crackling audio plays and a subtitle notes the fire is still warm, so Sam was here recently.",
    },
    {
        name: "Dropped bag",
        location: "Backpack lying on the path",
        effect: "Subtitle suggests Sam left in a hurry, the first sign that something went wrong.",
    },
    {
        name: "Two paths",
        location: "Where the path splits",
        effect: "Subtitle explains that part of the path is blocked so they must continue straight."
    },
    {
        name: "Cabin",
        location: "Wooden cabin at the end of the trail",
        effect: "Final subtitle reveals Sam made it to the cabin safely, ending the story.",
    },
];

const takeaways = [
    {
        tag: "T01",
        title: "Every invisible trigger needs a visible landmark",
        body: "Since the player can't see triggers, I anchored each one to an object that already draws attention: the trail sign, the backpack, the campfire, and the cabin. I also sized each trigger box to cover the full width of the path, so the player can't accidentally walk around a story beat. The landmark tells the player where to go, and the trigger makes sure something happens when they get there.",
    },
    {
        tag: "T02",
        title: "Light and density do the guiding",
        body: "Making the scene nighttime turned out to be the strongest guidance tool I had. Point lights at each stop, especially the warm glow of the campfire, pull the player forward without any arrows or UI. Dense trees along the sides of the path act like walls, while open clearings at each trigger signal that this is a place to stop and look around.",
    },
    {
        tag: "T03",
        title: "Walkable has to match how XR movement actually works",
        body: "A path only works if the player can physically move along it. I painted one continuous, slightly imperfect trail across two terrain tiles and kept it mostly flat, because steep slopes beyond the Character Controller's slope limit block the player. Text also has to work in a headset, so subtitles live on a world-space canvas attached to the camera and disappear after a few seconds instead of blocking the view.",
    },
];

export default function Project3() {
    return (
        <Sheet sheetNo="03" sheetName="HW 3">
            <Link
                href="/"
                className="font-head text-sm tracking-wide text-blue hover:text-amber"
            >
                ← BACK TO INDEX
            </Link>

            <h1 className="mt-6 font-head text-4xl font-bold leading-tight text-ink sm:text-5xl">
                HW 3 — Hollow Pines Trail
            </h1>
            <p className="mt-3 font-head text-sm tracking-wide text-ink-soft">
                YOUR FIRST XR EXPERIENCE · JOHN GILBERT PAUL IV
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
                        title="HW 3: Hollow Pines Trail"
                        src={VIDEO_SRC}
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
                    THE ENVIRONMENT &amp; THE STORY
                </p>
                <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-soft">
                    Hollow Pines Trail is a forest path at night. The player starts at
                    a trailhead sign that reads &ldquo;Missing: Sam. Last seen: 3 days
                    ago,&rdquo; and the goal is to follow the trail and figure out what
                    happened to the missing hiker. I built the space on a Unity Terrain
                    with a winding dirt path painted through it, surrounded by pine
                    trees, rocks, and a dark blue night sky.
                </p>
                <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-soft">
                    As the player walks, the story unfolds through four triggers. Each
                    one shows a subtitle at the center of the player&apos;s view, and
                    together they work like a trail of clues. First the sign sets up
                    the mystery. Then the campsite, the crackling fire and the line
                    &ldquo;the fire&apos;s still warm&rdquo; tell the player Sam was here
                    recently, which builds tension and pushes them forward.
                    Then a dropped backpack on the path hints that Sam was in a hurry. Finally, the
                    trail ends at a cabin where the player learns Sam made it there
                    safely. The goal was for the player to feel a little uneasy walking
                    through the dark woods, and then relieved when the mystery resolves.
                </p>
            </section>

            <div className="dim-line my-12" />

            <section>
                <p className="font-head text-sm tracking-wide text-blue">
                    TRIGGER MAP
                </p>
                <div className="mt-6 overflow-x-auto border border-paper-line">
                    <table className="w-full min-w-[560px] border-collapse text-left">
                        <thead>
                            <tr className="border-b border-paper-line bg-ink/[0.03]">
                                <th className="px-4 py-3 font-head text-xs tracking-wide text-ink-soft">
                                    TRIGGER
                                </th>
                                <th className="px-4 py-3 font-head text-xs tracking-wide text-ink-soft">
                                    LANDMARK
                                </th>
                                <th className="px-4 py-3 font-head text-xs tracking-wide text-ink-soft">
                                    WHAT HAPPENS
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {triggers.map((t, i) => (
                                <tr
                                    key={t.name}
                                    className={i % 2 === 1 ? "bg-ink/[0.02]" : undefined}
                                >
                                    <td className="px-4 py-4 align-top font-head font-bold text-ink">
                                        {t.name}
                                    </td>
                                    <td className="px-4 py-4 align-top text-sm text-amber">
                                        {t.location}
                                    </td>
                                    <td className="px-4 py-4 align-top text-sm leading-relaxed text-ink-soft">
                                        {t.effect}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <div className="dim-line my-12" />

            <section>
                <p className="font-head text-sm tracking-wide text-blue">
                    KEY TAKEAWAYS — DESIGNING WALKABLE, LEGIBLE SPACE
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
                    CHALLENGES
                </p>
                <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-soft">
                    The hardest part was getting the player to actually stand on the
                    ground. Gravity looked like it was set up correctly, but the player
                    kept floating above the terrain. After a lot of testing, I found the
                    cause: I had added a Sphere Collider to the camera so the player
                    could set off triggers, but it wasn&apos;t marked as a trigger. Since
                    the camera is a child of the XR Origin, the Character Controller was
                    colliding with its own head and resting on it. Checking
                    &ldquo;Is Trigger&rdquo; and moving the camera to the Ignore Raycast
                    layer fixed it.
                </p>
                <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-soft">
                    Assets were the other big hurdle. The models I downloaded from
                    poly.pizza came in completely white because the textures
                    weren&apos;t included, so I had to get the full pack and connect
                    each material to its texture by hand. A cabin from the Asset Store
                    showed up pink because it was built for the Built-in render
                    pipeline instead of URP, which I fixed with the Render Pipeline
                    Converter. Trees I painted on the terrain also seemed to disappear
                    until I learned they were being culled past the billboard distance.
                </p>
                <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-soft">
                    I learned a lot about how XRIT handles movement. Locomotion runs
                    through a Locomotion Mediator and XR Body Transformer, with Move
                    and Gravity as separate providers. I also learned that moving the
                    headset in the XR Interaction Simulator is different from moving the
                    player&apos;s body with the joystick, since only the joystick respects
                    collisions and gravity. For my design process, the biggest lesson is
                    to test in small steps and check every checkbox in the Inspector,
                    because most of my problems came down to one setting being off.
                    That habit will save me a lot of time on future assignments.
                </p>
            </section>
        </Sheet>
    );
}