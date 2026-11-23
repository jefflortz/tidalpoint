# Website 2.0 Phased Build Plan

## November 23, 2026 release update

- **Release 1:** Homepage, Sell, Build, What Is My Business Worth, navigation, essential About/Contact/Services/Clients updates, three-journey conversion design, analytics and SEO safeguards.
- **Release 2:** Trades/service-business page, strengthened New England hub, selling guide, supporting articles and internal links.
- **Release 3:** Interactive Business Value Health Check, reporting and integration with the advisor-delivered program.

For the focused Release 1, use the superseding estimate in `Lean-Implementation-Plan.md`: **3.5–6 elapsed weeks / 175–300 hours**. The broader 7–11 week estimate below remains a useful upper-bound plan when full CMS abstraction, extensive supporting content and multi-phase remediation are included.

**Authorization:** This document is a plan only. Implementation begins after review and explicit approval.

## Phase 0 — Decisions, reconciliation, and baselines

**Estimate:** 3–5 working days / 24–40 hours  
**Priority:** P0

- Approve service/legal model, baseline persona, geography, proof boundaries, and terminology.
- Preserve and review the dirty worktree; create the v2 branch/worktree only after approval.
- Export URL, metadata, Search Console, GA4, HubSpot, Google Ads, and production deployment baselines.
- Establish mobile Lighthouse and field-CWV monitoring baseline.
- Set performance budgets and WCAG 2.2 AA acceptance criteria.

**Dependencies:** Owner decisions, legal counsel, analytics/CRM access.  
**Exit:** Signed decision log, preserved work, verified production baseline.

## Phase 1 — SEO, IA, content, and proof approval

**Estimate:** 2–3 weeks / 100–160 hours  
**Priority:** P0

- Validate keyword demand when tool units/access are available.
- Finalize sitemap, page intent, and redirect map.
- Approve wireframes and page specifications.
- Write homepage, Sell, Build, Services, Clients, About, Contact, and regional revisions.
- Complete proof/compliance approvals and disclaimers.
- Finalize CRM stages, fields, attribution, and analytics events.

**Dependencies:** Phase 0, proof sources, legal review.  
**Exit:** Approved copy, evidence register, final design/content requirements.

## Phase 2 — CMS and component foundation

**Estimate:** 1–2 weeks / 60–100 hours  
**Priority:** P0/P1

- Extend Sanity only for reusable service content, FAQs, proof, and CTAs that need editorial control.
- Preserve current design tokens and shared components.
- Update header/footer/navigation patterns.
- Create reusable journey, process, proof, FAQ, CTA, and form-shell components.
- Add skip link, form loading/failure patterns, and accessibility primitives.

**Dependencies:** Approved content model and wireframes.  
**Exit:** Preview foundation with no production changes.

## Phase 3 — Core page implementation

**Estimate:** 2–3 weeks / 120–200 hours  
**Priority:** P0

- Homepage, Sell, Build, Services, Clients, About, Contact.
- Journey-specific forms and confirmation states.
- Metadata, Open Graph, structured data, internal links, and image optimization.
- Responsive implementation and reduced-motion behavior.

**Dependencies:** Phase 2, final assets, approved forms.  
**Exit:** Core preview accepted for content/design review.

## Phase 4 — SEO migration and supporting content

**Estimate:** 1–2 weeks / 60–100 hours  
**Priority:** P0/P1

- Revise article taxonomy/index CTAs and preserve every article URL.
- Revise location hub/pages without changing slugs.
- Implement approved redirects and preserve legacy rules.
- Fix sitemap `lastmod`; update sitemap, robots, canonicals, and `llms.txt`.
- Update automated content prompts/categories only after editorial approval.

**Dependencies:** Final URL map and keyword validation.  
**Exit:** Clean preview crawl and complete URL reconciliation.

## Phase 5 — End-to-end QA and launch approval

**Estimate:** 5–8 working days / 60–100 hours  
**Priority:** P0

- Crawl/status/canonical/redirect/schema/sitemap checks.
- Mobile, browser, keyboard, screen-reader smoke, zoom/reflow, contrast, and form-error testing.
- Lighthouse plus field-monitoring readiness; resolve budget regressions.
- Full Sell and Build submission tests through HubSpot, GA4, CRM, workflows, and Google Ads test attribution.
- Security/privacy/legal final review.
- Document rollback plan and production launch checklist.

**Dependencies:** Feature-complete preview and integration access.  
**Exit:** Explicit owner approval to deploy.

## Phase 6 — Post-launch stabilization

**Estimate:** 4–8 hours/week for 90 days, plus content  
**Priority:** P1/P2

- Daily first-week checks; weekly first-month checks.
- Search Console indexing, errors, rankings, and query mix.
- GA4/HubSpot/Ads reconciliation and qualified-opportunity reporting.
- CWV and error monitoring.
- Publish verified Sell/Build content clusters.
- Refine using qualified inquiry evidence, not short-term low-volume fluctuations.

## Total estimate

- **Focused initial release:** approximately 7–11 weeks.
- **Effort:** approximately 424–700 hours, depending on copy/proof readiness, CMS scope, legal review, and integration complexity.
- **Critical path:** owner/legal decisions → approved content/proof → CMS/components → core pages/forms → migration/QA → launch approval.

## Explicitly out of scope until separately approved

- Production deployment or domain changes.
- HubSpot workflow/pipeline mutations.
- Google Ads, GA4, or Search Console configuration changes.
- New buyer portal, marketplace, valuation calculator, or authenticated experience.
- Publication of claims still marked open in the approval checklist.

