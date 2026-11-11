# REDSUN layout calibration

Reference: https://ovo-redsun.webflow.io/

The user requested the REDSUN UI and animation structure, then explicitly retained the previously agreed Shonzawa white-and-blue palette. Text, service offerings, contact details, and WhatsApp actions remain Shonzawa-specific. No SaaS metrics, customer logos, prices, or testimonials were imported.

At the same 1280 × 720 browser viewport, the rebuilt hero measures:

| Element                     | Reference                                 | Shonzawa                            |
| --------------------------- | ----------------------------------------- | ----------------------------------- |
| Hero copy top               | 120px                                     | 120px                               |
| Headline top / height       | 180px / 156px                             | 180px / 156px                       |
| Headline type               | Mulish 65px, weight 500, line-height 78px | Plus Jakarta Sans 65px / 500 / 78px |
| Hero copy height            | 357px                                     | 357px                               |
| Supporting text top         | 358px                                     | 358px                               |
| Hero buttons top / height   | 437px / 40px                              | 437px / 40px                        |
| Framed preview top / height | 834px / 690px                             | 834px / 690px                       |
| Feature artwork             | 547 × 649px                               | 547 × 649px                         |
| Feature headings            | Mulish 34px, weight 500                   | Plus Jakarta Sans 34px / 500        |
| Feature paragraphs          | Inter 16px / 22.4px                       | Plus Jakarta Sans 16px / 22.4px     |

The source on-load and scroll action data were inspected to determine timing, movement, easing, and ordering. The implementation is written in React and GSAP; it does not embed the Webflow runtime or the reference stylesheet.

Colors are mapped to white #FFFFFF, soft gray #F8F8F8, navy #1D2A3B, blue #136796, light blue #A4D5E8, and small green #72DB70 status accents.

The framed hero is adapted to a hardware/service overview rather than an analytics dashboard. Services replace the reference's SaaS features. Real contact options replace pricing plans; the CTA previews the hardware overview.

## Artwork

The lighting ring uses a generated palette edit of the referenced decorative artwork. Original downloaded reference files are retained under `design/reference/` for traceability and are not served publicly. The edited PNG is `design/illustrations/blue-ring.png`; the optimized website asset is `public/images/blue-ring.webp`.

Source ring: https://cdn.prod.website-files.com/673c8623b53e085c22dcde7d/673c8790c213543ea74788a0_Red%20Circle%20No%20Glow.png

## Product cutouts

The six service foreground images use transparent cutouts so the circular lighting remains behind the physical hardware. These were edited with the built-in image generation tool from the original generated equipment illustrations, preserving the subjects, composition, colors and geometry.

Original edit results: `design/illustrations/cutouts/{vr,ict,networking,cctv,servers,backup}.png`.
Website assets: `public/images/cutouts/{vr,ict,networking,cctv,servers,backup}.webp`.

Shared edit prompt:

```text
Use case: background-extraction. Precisely remove the white studio backdrop from this hardware illustration. Keep every physical object, its position, size, perspective, details, textures, colors and arrangement unchanged. Preserve opaque white and silver surfaces on the hardware; only the empty background should become fully transparent. Remove the large diffuse floor background and leave only a very soft close contact shadow if needed. Preserve the full original canvas and do not crop, add text, add objects, recolor or redesign the hardware. Output a clean alpha cutout suitable for compositing in front of a blue light ring, with no white rectangular matte and no checkerboard pattern in the pixels.
```

Built-in image generation edit prompt:

```text
Edit this decorative circular lighting asset for a white-and-blue website while preserving its exact geometry, perspective, full circular composition, framing and layered thick arc. Replace all orange/copper areas with polished medium blue #136796 and light blue #A4D5E8. Replace the dark navy interior and dark surfaces with white #FFFFFF and very pale cool gray #F8F8F8, with blue reflections. The surrounding glow must be a delicate pale blue halo, not orange. Keep the thick illuminated band on the upper arc and the thin circular outlines below, all in the same locations and same proportions. Elegant metallic pale blue and white ring. Preserve the transparent exterior around the circular asset; no checkerboard rendered into pixels. No text, no new objects, no cropping. This is a precise palette adaptation of the existing asset, not a new design.
```
