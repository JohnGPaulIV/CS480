# CS 480 Digital Archive

A Next.js + React + Tailwind site for CS 480 coursework, styled like a set of
technical drawing sheets (title block header, registration marks, "plate"
framed images, a parts-list table) — a nod to building 3D scenes out of
primitives.

## Structure

- `app/page.js` — homepage ("Sheet 00 — Index"): name, class, description,
  and a link into each project.
- `app/project1/page.js` — HW1 subpage ("Sheet 01 — HW1"): project title,
  the Unity screenshot, a description of the scene, what was learned, and a
  parts list describing how each object was built.
- `components/Sheet.jsx` — shared page shell (title block + corner marks).
- `components/RegMark.jsx` — the corner registration-mark crosshair.
- `public/images/` — headshot and Unity screenshot assets.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Add another project sheet

1. Duplicate `app/project1` to e.g. `app/project2`.
2. Update the content and `sheetNo`/`sheetName` passed to `<Sheet>`.
3. Add an entry to the `projects` array in `app/page.js` so it shows up on
   the index.

## Deploy

This is a standard Next.js app, so it deploys as-is to
[Vercel](https://vercel.com/new) (recommended — just import the repo), or
any host that supports Node. For a static export (e.g. GitHub Pages), add
`output: "export"` to `next.config.js`, run `npm run build`, and publish the
generated `out/` folder.
