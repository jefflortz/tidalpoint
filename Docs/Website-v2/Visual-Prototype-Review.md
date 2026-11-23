# Website 2.0 Visual Prototype Review

## November 23, 2026 SEO-integration update

The isolated prototype now covers all four Release 1 priority pages:

- `/prototype` — Homepage with Sell, Build and Valuation entry paths.
- `/prototype/sell-your-business` — revised opening uses recognizable business-broker language and preserves the active-search proposition in the first two screens.
- `/prototype/build-business-value` — assessment, 12-month roadmap and implementation-support story.
- `/prototype/what-is-my-business-worth` — educational valuation resource with Sell and Build routing and explicit formal-appraisal boundary.

The new routes reuse the approved palette, typography, header/footer, responsive spacing and proof-light guardrails. They are noindex prototypes only; no production content or configuration changed.

**Prototype branch:** `prototype/website-v2-prebuild`  
**Commit:** `fcdd45f`  
**Production impact:** None

## Prototype routes

- Homepage: `/prototype`
- Sell Your Business: `/prototype/sell-your-business`

Preview deployment:

- Homepage: `https://tidalpoint-8mqis3pxv-jefflortz-s-projects.vercel.app/prototype`
- Sell page: `https://tidalpoint-8mqis3pxv-jefflortz-s-projects.vercel.app/prototype/sell-your-business`

The Vercel preview may require authentication because non-production project domains are protected. Production aliases and settings were not changed.

## Design decisions

- Retained Tidal Point wordmark, Atlantic Navy, Warm White, Sandstone, Sea Glass, Cormorant Garamond, Inter, generous spacing, and editorial restraint.
- Replaced the abstract-only audience cue with documentary-style owner-operated service-business imagery.
- Kept the homepage hero concise enough to show the two customer paths immediately.
- Used “Operating Partner” as supporting credibility rather than the lead category.
- Placed active identification, outreach, and qualification directly after the Sell hero.
- Used a visible review placeholder for buyer-network/qualification claims that are not approved.
- Avoided stock handshake imagery, fabricated testimonials, transaction counts, network sizes, financing claims, and valuation promises.

## Homepage structure

1. Descriptor, approved H1, tagline, supporting copy, two CTAs.
2. Side-by-side Sell and Build paths.
3. Audience/fit statement.
4. Four business-value drivers.
5. Operator credibility/proof.
6. Confidential conversation CTA.

## Sell page structure

1. Approved H1, plain-language proposition, confidential CTA.
2. Buyer-search difference: Identify, Approach, Qualify.
3. Verification placeholder for network/financing claims.
4. Operator-led value positioning.
5. Four-part process.
6. Owner-centered expectations.
7. FAQs with compliance-safe draft answers.
8. Final confidential CTA.

## Responsive and accessibility review

Validated in the local prototype:

- Desktop viewport: 1440×1000.
- Mobile viewport: 390×844.
- One H1 on each page.
- No horizontal overflow at 390 px.
- All prototype images include alt text.
- All links have accessible names.
- Main landmark and skip link are present.
- Mobile navigation uses native `details`/`summary`; final implementation should add polished focus/close behavior if replaced with a scripted drawer.
- Prototype routes are `noindex, nofollow`.
- Production build passed with both routes statically generated.

Not yet complete:

- Formal WCAG 2.2 AA audit.
- Screen-reader testing across VoiceOver/NVDA.
- 320 px and 200% zoom/reflow matrix.
- Field Core Web Vitals; a preview cannot supply representative field data.
- Final form experience and validation states.

## Performance decisions

- Pages are statically generated.
- Images use `next/image`, responsive `sizes`, and priority only above the fold.
- No new third-party scripts, video, carousel, or animation library usage was added to prototype pages.
- Generated source images are intentionally large visual masters; production implementation should convert/compress them and enforce an image budget before launch.

## Screenshot record

Desktop and mobile viewport screenshots were captured during QA for both routes. The review should focus on:

- Homepage desktop: image and headline balance; both paths visible above the fold.
- Homepage mobile: copy length and CTA stacking.
- Sell desktop: buyer-search differentiation visible within the first two screens.
- Sell mobile: H1 wraps cleanly and primary CTA remains prominent.

## Generated image assets

- `studio-ts/public/images/prototype/owner-operator-hero.png`
- `studio-ts/public/images/prototype/sell-advisory.png`

Built-in image generation was used with documentary-style prompts. The assets are prototypes, not claims about actual TPP clients.

## Recommended revisions before implementation

1. Decide whether the homepage hero should use the owner portrait or a wider active-work scene.
2. Confirm whether “approximately $2M annual revenue” should appear publicly or remain internal targeting guidance.
3. Replace the network verification placeholder with approved language or remove it.
4. Confirm the primary CTA destination and form strategy.
5. Compress final image derivatives and run formal Lighthouse/WCAG QA.

