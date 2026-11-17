# Buzzvel Front-End Challenge — Luma landing page

A responsive landing page for **Luma** (an online-courses brand), built from the supplied Figma design
(*Buzzvel FE – Test 2026*) with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS**.

**Live preview:** https://buzzvel-test-jade.vercel.app/

All sections from both the desktop (1280px) and mobile (402px) frames are implemented:
header, hero, categories, featured course, how it works, testimonial + stats, "the people" collage,
contact (form), final call to action and footer.

## Getting started

Requirements: Node.js 20+ and npm.

```bash
npm install        # install dependencies
npm run dev        # development server on http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint
```

No environment variables are required. `NEXT_PUBLIC_SITE_URL` is optional and only sets the base URL used for
Open Graph image URLs.

## Project structure

```
src/
  app/                 layout (fonts, metadata, viewport), page, global styles + design tokens
  components/
    layout/            Header (client: mobile menu), Footer
    sections/          one component per page section (+ ContactForm, a client component)
    ui/                Button / ButtonLink, Container, Eyebrow
  data/content.ts      typed local/mock content
public/
  images/              photos exported from Figma
  icons/               SVGs exported from Figma
```

## Key decisions

- **Design tokens in Tailwind.** Colours, fonts and type sizes come straight from the Figma variables and text
  styles and live in `globals.css` (`@theme`), so components use names like `bg-brand`, `text-muted`, `font-display`.
- **Breakpoints.** Mobile first. The desktop two-column layouts start at `xl` (1280px, the design width);
  below that the page uses the stacked layouts from the mobile design, with a 2-column categories grid from `md`
  and the desktop navigation from `lg`. This gives a sensible tablet layout the design does not specify.
- **Server components by default.** Only the header (mobile menu state) and the contact form are client components.
- **Reusable, typed components.** Sections receive their content from `src/data/content.ts`; shared UI
  (`ButtonLink`, `Container`, `Eyebrow`) has typed props.
- **Performance.** `next/image` for every image (hero is `priority`, others lazy, `sizes` set), fonts via
  `next/font` (Inter + Plus Jakarta Sans, only the weights used, `display: swap`), no client-side JS beyond the
  two interactive components.
- **Accessibility.** Semantic landmarks and heading order, skip link, labelled navigation regions, visible focus
  styles, descriptive `alt` text (decorative images use `alt=""`), mobile menu with `aria-expanded` /
  `aria-controls` that closes on Escape, form with real labels, inline errors (`aria-invalid`,
  `aria-describedby`), focus moved to the first invalid field and a polite live region for the result.
- **Reduced motion.** Smooth anchor scrolling and hover transitions are only applied when the user has not asked
  for reduced motion.
- **Metadata.** Title, description, Open Graph / Twitter tags, theme colour and viewport.

## Interactions

- Mobile menu toggle (open / close, Escape, closes after choosing a link).
- Anchor navigation from the header, footer and CTAs to the matching sections.
- Hover / focus states on links, buttons and category cards.
- Contact form with client-side validation and a **mocked** submission (no backend).

## Decisions where the design was unclear, and known gaps

- **Navigation targets.** The design has no destinations, so links scroll to related sections
  (Courses → categories, For Teams → how it works, Community → people, About → testimonial). Items without a
  page (Careers, Journal, Terms, Privacy) use `#`.
- **"Log in" / "Start learning" / "View course" / "Join Luma"** also point to on-page anchors because there are no
  other pages.
- **Mobile contact form copy** is in Portuguese in the Figma file while the rest of the page is English. I used the
  English copy from the desktop frame everywhere for consistency.
- **Step labels.** The desktop frame labels all three steps "Step 01"; the mobile frame uses 01/02/03. I used 01/02/03.
  Step 2 copy differs slightly between frames; the desktop wording is used.
- **Mobile menu content** is not shown in the design; it lists the same links and the two header actions.
- **Final CTA decoration** (floating shapes) is rendered only from `xl`, matching the mobile frame, which has none.
- **Collage / people photos** have generic alt text because the design gives no names.
- Colours were matched to the Figma variables; I did not do a pixel-by-pixel diff, so small sub-pixel differences
  may exist. Not tested in Safari or on physical devices.
- No Storybook or automated tests were added (optional in the brief).

## AI tools

I used **Claude Code (Claude Sonnet)** to read the Figma file through the Figma MCP server and to generate the
first version of the components and this README. I reviewed the generated code, then checked the result by running
`npm run lint`, `tsc --noEmit` and `npm run build`, and by inspecting the built page in a browser at 1280px and 402px
width (no horizontal overflow, mobile menu, form validation) against the Figma frames.

## Approximate time spent

_To be filled in by the author before submitting._
