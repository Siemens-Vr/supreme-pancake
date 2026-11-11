# Shonzawa Ventures

Next.js website modeled on Connect IT's page structure, typography and blue, navy and red visual style. All six Shonzawa service areas receive equal emphasis.

## Develop

```sh
npm install
npm run dev
```

Open http://localhost:3002. If this port is occupied, use `npm run dev -- --port 3003`.

## Verify and build

```sh
npm run typecheck
npm run build
```

The production build produces a static website in `out/`. Deploy it to a host that supports clean URLs for `.html` pages and a custom `404.html`. Next.js's `next start` does not serve static exports.

## Content

- `lib/content.ts`: service details, email address, navigation and industry descriptions.
- `components/homepage.tsx`: homepage sections.
- `components/inner-pages.tsx`: About, Services, Industries, Why Shonzawa, Partners, Contact and Quote pages.
- `app/globals.css`: responsive styling and animation.
- `public/fonts`: locally served DM Sans and Space Grotesk fonts.

The logo is a temporary Shonzawa wordmark created for this version. No business address or telephone number has been invented. Project counts, customer testimonials and manufacturer accreditations from the reference website are not attributed to Shonzawa.

## Enquiries

The contact and quote forms validate input and prepare a `mailto:` draft addressed to `info@shonzawaventures.com`. Visitors review and send the draft in their own email app. The site does not send mail or save submissions on a server. File selection is a reminder to attach a specification in the email app, not a server upload. Automatic submission would require an email service and appropriate server endpoint.

## Reference assets

The animated network graphic and infrastructure photo are retained from the reference for visual comparison. The six service illustrations are reused from the existing local Shonzawa project. Fonts are downloaded from Google Fonts. Brand names on the Partners page describe sourcing categories and do not claim manufacturer accreditation.
