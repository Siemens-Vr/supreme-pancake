# Shonzawa Ventures Limited

A statically generated Next.js homepage for Shonzawa Ventures Limited. Built with TypeScript, CSS, GSAP ScrollTrigger, and Lucide icons. The current design follows the REDSUN reference layout and motion with the explicitly retained Shonzawa white-and-blue palette.

## Develop

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Use the Local URL printed by Next.js; it chooses another port if 3000 is occupied.

```bash
npm run typecheck
npm run build
```

The production export is in `out/`. Serve that folder with any static web host. This application has no database, server actions, or enquiry form backend.

## Agreed scope

- Text wordmark: Shonzawa Ventures Limited.
- Six offerings: VR headsets, ICT equipment supply, networking, CCTV installation, server supply, and backup solutions.
- Colors: white `#FFFFFF`, soft gray `#F8F8F8`, dark navy `#1D2A3B`, blue `#136796`, light blue `#A4D5E8`, and small green `#72DB70` accents.
- REDSUN composition: a circular illuminated hero, a framed hardware overview, inset-lit overview cards, and alternating tall service artwork.
- Reference-matched load timings: 30px rises, 1.4-second exponential entrances, a 2.5-second ring rotation, and staged lighting. Scroll drives the hero copy, ring and preview; service artwork uses 100px side entrances over 1 second. Cursor lighting follows fine pointers. Native scrolling is retained. Reduced-motion preferences disable decorative animation and smooth scrolling.
- Fixed glass navigation, in-page service links, responsive mobile menu, keyboard focus styles, and a skip link.
- No invented clients, projects, testimonials, product models, prices, performance statistics, or certifications.

## Contact and quote links

All quote buttons open WhatsApp with an editable message. Nothing is sent automatically. Each service button includes its service name in the message.

- WhatsApp/phone: +254 728 778476
- Email: info@shonzawaventures.com
- Postal address: P.O. Box 61896-00200, Nairobi, Kenya

Confirm that the supplied number is the company's active WhatsApp account before public launch. Change the `PHONE` constant and displayed phone in `components/homepage.tsx` if necessary.

## Assets

Seven original hardware illustrations were created with the built-in image generation tool. A further generated edit adapts the reference circular lighting artwork to the white-and-blue palette. They represent service categories, not specific stocked products. The full prompt set and file locations are in `design/illustration-prompts.md`. WebP assets are locally served; original renders remain in `design/illustrations/`.

Plus Jakarta Sans is used throughout the page. Its variable font is self-hosted through `next/font/local`, with preload, swap loading and an adjusted fallback. The source file is `app/plus-jakarta-sans-variable.ttf`; its SIL Open Font License is in `public/fonts/plus-jakarta-sans-OFL.txt`. Font completion refreshes scroll animation measurements. Earlier Mulish, Inter and Manrope files remain as unused design assets.

## Hosting status

A Sites registration attempt failed at the service connection and returned no project ID. A subsequent owner-site listing returned no Sites. No hosted deployment or DNS changes have been made. Local preview and static export are available. Reconcile any registration before attempting future publication.

Next.js is configured to use its supported TypeScript compiler API because this execution host returned empty output from Next.js's CLI config checker. Production type checking remains enabled.

## Reference calibration

See `design/reference-calibration.md` for measured reference dimensions and the current adaptation. The first iteration is preserved in `design/iterations/first-pass/` as source snapshots. Current preview captures use the `redsun-layout-` prefix in `design/previews/`.
