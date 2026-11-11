# Code audit and typography update

Reviewed 11 November 2026. Scope: the homepage implementation, typography loading, animation lifecycle, navigation accessibility, contact links and production dependencies.

## Implemented

- Replaced seven explicit Mulish/Inter font-face declarations and scattered family overrides with a single Plus Jakarta Sans variable font. The root layout uses `next/font/local` for preloading, swap loading and an adjusted fallback. All page text inherits the same family.
- Refresh ScrollTrigger after fonts finish loading so animation positions reflect final text measurements. The callback respects component cleanup.
- Quote links retain their visible button wording in their accessible names, including the custom WhatsApp contact button.
- The mobile menu button only references its controlled element while that element exists.
- Darkened inactive navigation text and reduced the light-blue button overlay to improve text contrast within the existing palette.

## Verification

- Production build and its TypeScript check passed.
- `npm audit --omit=dev` reported zero known vulnerabilities.
- Browser confirmed the new family on headings, body and service descriptions, with a locally served font preload.
- No horizontal overflow at 320px, 390px, 768px or 1280px.
- Mobile navigation opens and closes with Escape; the toggle returns to its collapsed state.
- All internal hash links resolve. Six service quote URLs contain their matching service names and the supplied phone number.
- No failed loaded images or captured browser errors during verification. Offscreen images retain lazy loading.

This was a focused source and browser review, not a penetration test. Local preview and static export were updated; no hosted deployment was performed.
