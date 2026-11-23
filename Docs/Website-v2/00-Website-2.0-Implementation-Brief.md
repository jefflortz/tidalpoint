# Tidal Point Partners — Website 2.0 Implementation Brief

## Objective

Evolve the existing Tidal Point Partners website to support the company's new positioning as a Business Value Creation & M&A Advisory firm.

Use the November 23, 2026 Website 2.0 Audit as the technical baseline.

Preserve the existing Next.js, React, Tailwind, Vercel, Sanity, HubSpot, and analytics infrastructure. Preserve the existing logo, visual identity, typography, and design system.

Do not perform a ground-up rebuild.

## Approved positioning

**Brand:** Tidal Point Partners

**Descriptor:** Business Value Creation & M&A Advisory

**Tagline:** Build Value. Realize Value.

**Homepage H1:** Get More From the Business You've Built.

**Baseline persona:** Owner-operator of a privately held business with approximately $2M annual revenue. Trades and service businesses are primary examples, but TPP serves privately held businesses more broadly.

**Tone:** Clear, practical, confident, financially focused, and understandable without M&A terminology.

**Differentiation:** Experienced business operators who understand what makes companies valuable, combined with an active search for financially qualified buyers when representing sellers.

## Primary customer journeys

### Sell Your Business

URL: `/sell-your-business`

H1: We Don't Just List Your Business. We Find the Right Buyers.

The page must explain:

- Operator-led business positioning.
- Access to an established buyer network, subject to verification.
- Active buyer identification and outreach.
- Financial and acquisition-interest qualification.
- Confidentiality and sale preparation.
- Negotiation, diligence, and transaction support.

Primary CTA: Let's Talk About Selling Your Business.

### Build Business Value

URL: `/build-business-value`

H1: Make Your Business Worth More Before You Sell.

The page must explain:

- Business Value Assessment.
- Value drivers and potential risks.
- Practical 12-month improvement roadmap.
- Structured advisor-supported implementation.
- Progress measurement and future sale readiness.

Primary CTA: Let's Talk About Building Business Value.

Do not describe the service as generic business coaching or promise guaranteed increases in valuation.

## Homepage

Use the approved H1 and two immediately visible paths.

Supporting copy:

> Ready to sell your business? Or thinking about it down the road?
>
> We help business owners understand what their company may be worth, make it more attractive to buyers, and find the right buyer when it's time to sell.
>
> We bring years of hands-on experience running and growing companies to every engagement.

Primary CTAs: Sell My Business / Build Business Value.

## Information architecture

Primary navigation:

Sell Your Business | Build Business Value | Who We Help | About | Insights | Contact

Retain existing `/services` and `/clients` URLs initially, updating their content appropriately.

Preserve all existing article and regional URLs unless a specific redirect is justified and documented.

## SEO research

Use the existing approved keyword strategy, Google Search Console, and available keyword tools.

Research and prioritize:

1. Business brokerage and selling a business.
2. Selling trades and service businesses.
3. Business valuation and business worth.
4. Preparing a business for sale.
5. Increasing business value.
6. Southeastern New England geographic intent.

Produce a page-level keyword map with available demand, competition, intent, geographic fit, and recommended page assignments.

Do not invent search volume or rankings.

Preserve existing SEO infrastructure, structured data, and internal links. Produce a URL disposition and redirect map.

## Conversion and CRM

Create separate Sell and Build inquiry experiences.

Capture contact information, company, industry, approximate revenue range, location, and sale timing.

Preserve original lead source, including Legacy referrals, as well as campaign attribution.

Separate engagement events from completed lead conversions.

Design CRM stages for listing opportunities and value-creation advisory opportunities.

Test the full form-to-HubSpot-to-analytics process before launch.

## Proof and compliance

Do not publish unverified claims regarding:

- Buyer network size or availability.
- Buyer preapproval or financing.
- Completed brokerage transactions.
- Valuation outcomes.
- Licensing or brokerage authority.
- Client testimonials or transaction results.

Flag each item requiring owner confirmation or legal review.

## Technical requirements

1. Reconcile existing uncommitted worktree changes with the current production branch without overwriting unfinished work.
2. Create a dedicated Website 2.0 development branch.
3. Preserve existing components and design tokens wherever practical.
4. Extend Sanity only where new service content, proof, FAQs, or CTAs require it.
5. Establish baseline mobile performance and Core Web Vitals measurements.
6. Implement accessibility and responsive design checks.
7. Preserve SEO and analytics continuity.
8. Use Vercel preview deployments for review.

## Initial deliverables

Before implementation, produce:

1. Repository/worktree reconciliation plan.
2. Updated SEO keyword and page-intent map.
3. Final sitemap and URL disposition.
4. Homepage, Sell, and Build wireframes.
5. Page-level content specification.
6. HubSpot and analytics implementation plan.
7. Proof/compliance approval checklist.
8. Phased build plan with estimated effort and dependencies.

Save these under `Docs/Website-v2/` using clear filenames.

## Authorization boundary

Planning and documentation only.

Do not modify production content, deploy the site, change HubSpot workflows, or begin substantive implementation until the design and implementation plan have been reviewed and approved.

The objective is a focused Website 2.0 release that preserves the existing technical investment while creating a substantially better conversion experience for business owners.
