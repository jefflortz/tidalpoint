# Website 2.0 Final Sitemap and URL Disposition

## November 23, 2026 revised release architecture

This revision supersedes the provisional launch sitemap below.

### Primary navigation

Sell Your Business | Build Business Value | What Is My Business Worth? | Who We Help | About | Insights | Contact

On narrower viewports, the valuation resource may sit under Insights or a compact Explore menu, but it must remain directly accessible from the homepage and both service pages.

```text
Release 1
/
├── sell-your-business
├── build-business-value
├── resources
│   └── what-is-my-business-worth
├── services                    (retained URL; How We Help)
├── clients                     (retained URL; Who We Help)
├── about
│   └── team/jeff-lortz
├── articles                    (all current slugs preserved)
├── locations                   (all current slugs preserved)
├── contact
├── privacy
└── cookies

Release 2
├── industries/trades-and-service-businesses
├── resources/how-to-prepare-and-sell-your-business
└── strengthened locations/southeastern-new-england

Release 3
└── business-value-health-check (final URL to approve)
```

### Revised disposition

| URL | Action | Release | Notes |
|---|---|---:|---|
| `/` | Revise | 1 | Approved H1; three entry paths |
| `/sell-your-business` | Create | 1 | Business broker/sale intent |
| `/build-business-value` | Create | 1 | Preparation/value intent |
| `/resources/what-is-my-business-worth` | Create | 1 | Valuation education; no calculator |
| `/services` | Revise, preserve | 1 | Comparison hub |
| `/clients` | Revise, preserve | 1 | Who We Help |
| `/about`, `/team/jeff-lortz`, `/contact` | Targeted revisions | 1 | Trust and conversion continuity |
| `/articles` and all existing slugs | Preserve | 1 | Update taxonomy, links and CTAs only after review |
| `/locations` and four current slugs | Preserve | 1/2 | No thin state pages |
| `/industries/trades-and-service-businesses` | Create | 2 | One substantive industry hub |
| `/resources/how-to-prepare-and-sell-your-business` | Create | 2 | Sale-preparation resource |

### Regional decision

Use `/locations/southeastern-new-england` as the principal regional hub with accurate copy describing approved service coverage. Massachusetts and Connecticut account for about 69% of modeled demand, but six formulaic state pages are not justified. Preserve the existing Massachusetts subregional pages and link them to the regional hub.

### Migration additions

- Correct the sitemap `lastmod` implementation during the authorized build.
- Add new URLs to the sitemap only when approved and production-ready.
- Preserve the apex canonical, existing redirects, campaign parameters and every indexed article/location URL.
- Crawl current and proposed URLs before launch and verify status, canonical, indexability, schema and internal links.

**Status:** Proposed for approval; no redirects implemented

## Proposed primary navigation

Sell Your Business | Build Business Value | Who We Help | About | Insights | Contact

## Proposed launch sitemap

```text
/
├── sell-your-business
├── build-business-value
├── services                    (How We Help hub; retained URL)
├── clients                     (Who We Help; retained URL)
├── about
│   └── team/jeff-lortz
├── articles
│   └── [existing article slugs]
├── locations
│   ├── southeastern-new-england
│   ├── plymouth-south-shore
│   ├── cape-cod
│   └── south-coast-massachusetts
├── contact
├── privacy
└── cookies
```

`/llms.txt`, `/sitemap.xml`, and `/robots.txt` remain system endpoints.

## Core URL disposition

| Current URL | Launch URL | Action | Notes |
|---|---|---|---|
| `/` | `/` | Revise | New positioning, two immediate journeys |
| `/services` | `/services` | Revise | “How We Help” hub; keep equity and links |
| `/clients` | `/clients` | Revise | “Who We Help”; replace $5M–$50M emphasis |
| `/about` | `/about` | Revise | Operator-led differentiation and entity clarity |
| `/team/jeff-lortz` | Same | Revise lightly | Preserve biography and proof |
| `/articles` | Same | Revise | New taxonomy and journey CTAs |
| `/locations` | Same | Revise | Regional hub for both services |
| Four current location URLs | Same | Revise | Preserve exact slugs and differentiated local copy |
| `/contact` | Same | Revise | Journey-aware inquiry experience |
| `/privacy` | Same | Legal update if required | Reflect CRM/ads/analytics use |
| `/cookies` | Same | Legal update if required | Reconcile consent behavior |

## Existing article disposition

All 14 production article URLs remain unchanged at launch. No article redirect is justified by current evidence. Update internal links and CTAs only after editorial review. If duplicate growth-diagnosis articles are later consolidated, select the stronger canonical page using Search Console/link evidence and create a one-to-one 301.

## Existing redirects to preserve

| Legacy URL | Destination |
|---|---|
| `/services/revenue-growth` | `/services#growth` initially; reassess final anchor |
| `/services/ceo-coaching` | `/services#team` initially; reassess final anchor |
| `/services/performance-planning` | `/services#operations` initially; reassess final anchor |
| `www.tidalpointpartners.com/*` | Apex equivalent |
| `tidalpoint.vercel.app/*` | Apex equivalent |

Do not remove the legacy service redirects until server logs/Search Console confirm they are no longer used. If the new `/services` structure removes the anchors, redirect to the closest stable section or page instead of leaving fragment targets obsolete.

## Deferred pages

These are not required for the first release and should be added only after demand, proof, and compliance validation:

- `/sell-your-business/process`
- `/sell-your-business/valuation-and-readiness`
- `/build-business-value/program`
- `/resources/business-sale-readiness-checklist`
- `/resources/value-driver-assessment`
- Vertical landing pages for HVAC, plumbing, electrical, landscaping, or other trades
- `/buyer-interest`
- `/transactions` or `/case-studies`

## Redirect rules

- One old URL → one closest successor.
- Use permanent 301/308 only when the destination is final.
- Do not redirect removed pages to the homepage by default.
- Preserve query parameters required for campaign attribution.
- Update internal links, canonicals, sitemap, structured data, and `llms.txt` in the same release.
- Test redirect chains and all known inbound URLs before launch.

