# Website 2.0 Lean Implementation Plan

## November 23, 2026 revised estimate

Adding the substantive valuation resource and a third conversion path increases the focused Release 1 estimate to **3.5–6 elapsed weeks and approximately 175–300 combined hours**. The lower end assumes fast owner/legal decisions, one review cycle, code-based core content, reused components and no new live HubSpot automation. The higher end allows two review cycles, limited Sanity modeling, three form experiences, CRM routing complexity and accessibility/performance remediation.

### Revised Release 1 minimum viable implementation

- Global navigation/footer and shared responsive components.
- Homepage, Sell Your Business, Build Business Value and What Is My Business Worth.
- Essential `/services`, `/clients`, About, Jeff profile and Contact updates.
- Three journey-aware HubSpot form experiences or one approved conditional implementation.
- Journey/attribution event taxonomy; successful submissions and confirmed appointments as primary conversions.
- Metadata, internal links, schema, sitemap/`lastmod`, canonical and redirect safeguards.
- Existing article/location URL preservation with targeted links and CTAs.
- Responsive, WCAG 2.2 AA, performance, crawl and end-to-end conversion QA.

### Revised phase estimate

| Phase | Elapsed | Effort | Dependencies |
|---|---:|---:|---|
| Decisions, legal gates and proof | 2–6 days | 10–24 h | Brokerage/valuation/geography/program approvals |
| Final copy, SEO and form design | 4–8 days | 32–56 h | Owner review; HubSpot field/pipeline decisions |
| Shared components and four priority pages | 7–12 days | 76–122 h | Approved copy/assets; code-vs-Sanity choice |
| CRM, analytics and attribution | 3–6 days | 24–44 h | HubSpot/GA4 permissions and workflow design |
| Migration, accessibility, performance and QA | 4–8 days | 28–46 h | Feature-complete preview |
| Launch preparation (not deployment approval) | 1–3 days | 5–8 h | Final acceptance and rollback plan |
| **Total** | **3.5–6 weeks** | **175–300 h** | Review speed is critical |

### Release 2

Trades/service-business page, strengthened New England hub, selling guide and supporting article/internal-link work: **45–90 hours / 1–2.5 additional weeks**, depending on copy and local proof.

### Release 3

Interactive Business Value Health Check, report generation and advisor-program integration: estimate separately after product, methodology, compliance, data and CRM requirements are approved. Do not bundle it into Release 1.

### Safe reductions

- Keep core pages code-based and Sanity focused on current articles/locations.
- Use one approved conditional form if HubSpot reporting remains reliable.
- Launch without testimonials, case studies or network claims if evidence is not ready.
- Make only targeted changes to retained articles and location pages.
- Defer the industry page, selling guide and regional rewrite to Release 2.

### Revised critical path

Brokerage/valuation/geography authority → approved Sell/Valuation wording → form and routing decisions → four-page build → conversion QA → crawl/accessibility/performance review → explicit production approval.

## Executive summary

The core release can be completed in **3–5 elapsed weeks and approximately 150–260 hours**, provided decisions and reviews are returned quickly. This is lower than the original estimate because it reuses the current application, design system, static page patterns, analytics dispatcher, HubSpot embed pattern, structured-data helpers, and Vercel workflow. The estimate does not include a buyer portal, valuation calculator, extensive vertical program, major CMS abstraction, or unresolved legal work.

## Essential launch scope

- Updated global navigation/footer.
- Homepage.
- Sell Your Business.
- Build Business Value.
- Revised `/services` and `/clients`.
- Targeted About, Jeff profile, Contact, article-index, and location copy/link updates.
- Separate Sell/Build form experiences.
- Event taxonomy and attribution continuity.
- Metadata, schema, sitemap, internal links, redirects, accessibility, responsive, and performance QA.
- Vercel preview, launch checklist, and rollback plan.

## Deferred enhancements

- Vertical landing pages.
- Business-worth calculator.
- Buyer portal/listings.
- Case-study library beyond approved proof.
- Broad article rewrites.
- Generic Sanity page builder.
- Separate HubSpot pipelines unless operationally necessary.
- Advanced animation or video.

## Phases

| Phase | Elapsed time | Effort | Codex can complete | Human/external dependency |
|---|---:|---:|---|---|
| Decisions and legal gates | 2–5 days | 8–20 h | Decision log, claim inventory, draft language | Owner/legal answers |
| Final copy and SEO validation | 3–6 days | 24–44 h | Draft copy, metadata, internal-link map, research synthesis | Keyword data access, owner review |
| Core build | 6–10 days | 64–100 h | Components, pages, Sanity-light integration, responsive implementation | Approved copy/assets |
| Forms, CRM, analytics | 2–5 days | 20–40 h | Code/event implementation and test matrix | HubSpot/GA4 permissions and workflow decisions |
| Migration and QA | 3–6 days | 28–44 h | Redirects, crawl, schemas, build, accessibility/performance fixes | Legal/final acceptance |
| Launch and stabilization | 1–3 days + monitoring | 6–12 h launch | Deployment checklist, monitoring | Explicit launch approval |

**Total:** approximately 150–260 hours. The low end assumes one review cycle, code-based core content, one HubSpot pipeline, approved proof, and no major design change. The high end allows two review cycles, modest Sanity schema work, form-routing complexity, and accessibility/performance fixes.

## Critical path

Legal/service terminology → buyer-network/qualification proof → final Sell copy → form/CRM design → core build → end-to-end conversion QA → launch approval.

Parallel work can proceed on the homepage, Build page, shared components, SEO preservation, and image optimization while Sell claims are reviewed.

## What actually drives effort

- The number and speed of owner/legal review cycles.
- Whether proof can be published.
- Whether HubSpot requires one or two pipelines and new workflows.
- Whether service content is code-based or fully modeled in Sanity.
- Final copy depth and number of local/vertical pages.
- Accessibility/performance remediation discovered during QA.
- Ad/CRM offline-conversion requirements.

## Safe scope reductions

- Launch with code-based core pages and Sanity-managed articles/locations; model more content later.
- Use one conditional HubSpot form or two forms without a new automation architecture.
- Keep all existing article and location URLs, making only targeted CTA/internal-link updates.
- Launch without testimonials/transaction proof if unverified.
- Defer vertical pages until keyword and commercial fit are validated.

## Acceptance criteria

- Production build, crawl, redirect, canonical, schema, sitemap, and noindex checks pass.
- 320/390/768/1280+ responsive matrix has no horizontal overflow.
- WCAG 2.2 AA automated checks plus manual keyboard/form review pass.
- Performance meets agreed mobile budgets without new critical regressions.
- Sell and Build submissions reconcile across browser, GA4, HubSpot, CRM, and Google Ads test attribution.
- Owner and legal approvals recorded for every published claim.
- Explicit production deployment approval received.

