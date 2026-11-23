# Tidal Point Partners Website 2.0 — Release 1 Staging Implementation

**Status:** Implemented on isolated staging branch; production unchanged  
**Branch:** `feature/website-v2-release1-staging`  
**Date:** November 23, 2026

## Executive summary

Release 1 converts the approved Website 2.0 prototype into production-intent Next.js routes while preserving the current application, Sanity content model, Vercel deployment architecture, indexed articles and location pages. The new experience establishes the positioning “Build Value. Realize Value.” and gives owners three clear entry points: sell a business, build business value, or understand how buyers assess value.

The staging build is intentionally isolated from production. It does not submit to HubSpot, create contacts, run workflows, load production Google Analytics, alter Sanity, change DNS, or modify advertising. Preview responses include `noindex, nofollow, noarchive`; the preview robots file disallows crawling. Production behavior is conditional and remains inactive until an approved production release.

## Implemented scope

### Primary journeys

- `/` — new homepage with approved H1, descriptor, brand promise and journey routing.
- `/sell-your-business` — operator-led brokerage, active buyer search, buyer qualification language, transaction support and compliance-safe disclaimer.
- `/build-business-value` — Business Value Assessment, value-driver priorities, 12-month roadmap and practical trades/service-business examples.
- `/resources/what-is-my-business-worth` — educational value page that routes owners toward Sell or Build without presenting a formal valuation.

### Supporting experience

- Revised `/about`, `/services`, `/clients` and `/contact` to align with Website 2.0 positioning.
- Updated global desktop/mobile navigation and footer.
- Preserved existing article, location, legal and team routes.
- Preserved the approved legacy service redirects:
  - `/services/revenue-growth` → `/services#growth`
  - `/services/ceo-coaching` → `/services#team`
  - `/services/performance-planning` → `/services#operations`

## Lead capture and HubSpot status

The staging contact form includes name, email, phone, company, industry, revenue range, geography, intended journey, sale timing, message and consent. It also retains first-touch UTM parameters, `gclid`, referral source and legacy referral data in the browser session.

For staging safety, submission performs browser-side validation and displays a success state only. It does **not** call HubSpot, create or update CRM records, enroll workflows, send emails, or invoke a production endpoint. A complete dummy submission was tested successfully.

Before production launch, the form must be connected to approved HubSpot form IDs and field mappings, consent language must be confirmed, workflows and notifications must be tested with controlled records, and duplicate/contact attribution behavior must be verified.

## Analytics and conversion behavior

- Production GA4 loads only on the canonical production hostname.
- Preview and local builds do not load production GA4.
- A completed HubSpot form remains the intended primary `generate_lead` event.
- Phone and email clicks remain secondary interaction events and do not emit `generate_lead`.
- Final production QA must verify GA4, Google Ads attribution, consent behavior and HubSpot outcomes from one controlled ad-click test.

## SEO implementation

- Unique metadata and canonical URLs were added for all four priority pages.
- WebPage schema was added to priority pages; the Sell page also includes FAQPage schema.
- Organization and homepage structured data were aligned to the approved positioning and New England service area.
- The XML sitemap includes the new production-intent routes and uses a stable release date for code-owned pages while preserving Sanity modification dates for CMS content.
- Preview builds return `X-Robots-Tag: noindex, nofollow, noarchive` and a disallow-all robots response.
- Production robots behavior is conditional and is not active on staging.
- Existing indexed article and location URLs were not renamed or removed.

## Verification results

| Check | Result |
|---|---|
| ESLint | Pass |
| Next.js production build | Pass (51 generated routes/pages) |
| Core-route status, metadata and canonical checks | Pass |
| Structured data on priority routes | Pass |
| Internal links/resources | Pass — 43 unique resources checked |
| Legacy redirects | Pass |
| Preview robots and response headers | Pass |
| XML sitemap entries | Pass |
| Staging-safe form submission | Pass — no CRM record created |
| Desktop/mobile screenshots | Complete for all four priority pages |

### Lighthouse — mobile homepage, production-mode local build

| Category | Score |
|---|---:|
| Performance | 100 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 69 on staging only |

Measured lab metrics: FCP 0.8 s, LCP 0.8 s, CLS 0, TBT 30 ms. The staging SEO score is intentionally reduced by the required noindex/crawl block; metadata, canonical, schema, sitemap and redirect checks passed independently. Production SEO should be rerun only after the approved production deployment is crawlable.

## Changes by area

- Converted approved prototype pages into actual production-intent routes.
- Added journey-aware, staging-safe lead capture and attribution fields.
- Updated positioning, navigation, footer, supporting-page copy and CTAs.
- Added preview-safe analytics, robots and response-header behavior.
- Added metadata, schema and sitemap support for Release 1 routes.
- Improved mobile spacing and corrected light-background accent-text contrast.

## Remaining blockers and decisions

1. Approve final legal/compliance language for brokerage authority, licensing/entity disclosures, geographic scope, confidentiality and the boundary between educational value guidance and a formal valuation.
2. Confirm approved HubSpot form, field/property mapping, consent text, owner routing, notifications, workflows and pipeline behavior.
3. Confirm final proof statements, including years of operating experience and buyer qualification wording.
4. Approve final photography and confirm licensing/usage rights for every image.
5. Run controlled end-to-end conversion attribution in production-safe conditions before enabling paid traffic to new pages.
6. Obtain explicit launch approval before merging or deploying to production.

## Production launch checklist

- [ ] Stakeholder acceptance of desktop and mobile priority pages.
- [ ] Legal/compliance approval recorded.
- [ ] Final images and usage rights approved.
- [ ] HubSpot integration completed in a controlled test environment.
- [ ] Form submissions, notifications, workflows, deduplication and CRM attribution verified.
- [ ] GA4 and Google Ads conversion events verified without duplicate `generate_lead` events.
- [ ] Production environment variables reviewed; no secrets exposed to the browser.
- [ ] Redirect, canonical, sitemap, schema, robots and response-header checks rerun on the release candidate.
- [ ] Full production crawl and broken-link/image check passes.
- [ ] Lighthouse and mobile device QA rerun against the release candidate.
- [ ] Rollback deployment identified and launch monitoring owner assigned.
- [ ] Explicit production deployment approval received.

## Evidence

- Final production-mode build and lint output from November 23, 2026.
- Automated local crawl covering 12 core routes and 43 unique internal resources.
- Lighthouse JSON: `/private/tmp/tpp-lighthouse-home-mobile-final.json` (local ephemeral evidence).
- Desktop/mobile screenshot package in the user Downloads folder.
- Source specifications and research in `Docs/Website-v2/`.

