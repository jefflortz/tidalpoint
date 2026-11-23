# Website 2.0 Pre-Build Review

**Date:** November 23, 2026  
**Status:** Pre-build refinement complete; full implementation not authorized

## Executive summary

The strategic direction is coherent and ready for a focused implementation once five owner/compliance decisions are resolved. The current Next.js/Vercel/Sanity foundation should be retained. The visual prototypes confirm that the existing Tidal Point design system can support the new positioning without a rebrand or ground-up rebuild.

The essential launch can be materially leaner than the original 7–11 week, 424–700 hour estimate. A realistic AI-assisted core release is **3–5 elapsed weeks and approximately 150–260 combined hours**, assuming prompt owner/legal review, no buyer portal or valuation calculator, limited Sanity expansion, and reuse of the existing layout/component system. Human decision latency—not coding—is the main critical-path risk.

## What is ready

- Approved brand promise, descriptor, homepage H1, and two customer journeys.
- Existing technical stack, visual identity, responsive primitives, structured-data utilities, CMS, and deployment workflow.
- Proposed launch sitemap with current URLs preserved.
- Content hierarchy and responsive visual direction for Homepage and Sell Your Business.
- Event/CRM model separating engagement from true inquiry submissions.
- Proof/compliance gate that prevents unverified buyer, financing, transaction, valuation, and licensing claims.
- Isolated prototype branch: `prototype/website-v2-prebuild` at commit `c43219e`.

## Inconsistencies identified and refinements

### Audience scale

Earlier planning described $2M as a “baseline,” but did not always specify annual revenue. The approved brief now does. Use **approximately $2M annual revenue as an orienting persona**, not a published minimum, until the owner confirms fit criteria.

### Operating Partner versus M&A category

Older pages and keyword plans make “Operating Partner” the category. The approved strategy makes it a differentiator. The prototypes therefore lead with Business Value Creation & M&A Advisory and use operating experience as proof.

### Buyer-network language

The strategic direction requires prominence for an established network and active search, while compliance rules prohibit unverified claims. The Sell prototype makes active identification/outreach prominent but labels network and qualification claims for verification. Final copy must define the process before it can claim network access or financially qualified buyers.

### Build program scope

The 12-month roadmap was sometimes treated as a fixed delivery promise. It should remain the expected program structure, subject to confirmation of deliverables, cadence, pricing, and whether the 12 months includes assessment.

### CRM complexity

The earlier plan preferred two HubSpot pipelines. This is not essential for launch. A lean release can use one deal pipeline with a required `journey` property if the same owner and sales process apply. Split pipelines only if forecasting, ownership, stages, or automation truly differ.

### CMS complexity

The prototypes use code-based page content. For launch, Sanity expansion should be limited to content that requires ongoing editorial control: FAQs, proof, reusable CTA settings, and possibly service-page body modules. Do not build a generic page-builder.

### Content automation

The existing RankScore/OpenAI pipeline reflects the old topic strategy. It should not block launch. Freeze new automated Website 2.0 topics until the v2 keyword map and review rules are approved; leave the technical pipeline intact.

## Prototype findings

- Existing typography, navy/warm-white palette, logos, containers, and responsive conventions accommodate the new positioning.
- Authentic owner-operated business imagery makes the target audience materially clearer than the current abstract hero alone.
- The two-path homepage decision can appear above the fold without overwhelming the brand message.
- The Sell page can foreground buyer search immediately after the hero instead of burying it in a generic process.
- A visible “verification placeholder” is useful during review but must be removed or replaced with approved language before launch.
- Mobile requires a compact menu; the current multi-item desktop navigation cannot simply wrap.

## Unnecessary complexity to avoid

- Ground-up rebuild or framework/CMS migration.
- Custom valuation calculator at launch.
- Buyer portal, listings marketplace, or authenticated buyer experience.
- Dozens of vertical/location pages before demand and proof exist.
- Generic block-based page builder in Sanity.
- Separate CRM pipelines unless operationally justified.
- Extensive motion, video hero, or third-party widgets.
- Rewriting all 14 articles before launch.

## Remaining blockers

1. Legal/service-model approval for “broker,” “brokerage,” and “M&A advisory.”
2. Verifiable definition of buyer-network access and financial qualification.
3. Approval of the actual Build program scope and 12-month promise.
4. Final lead qualification, pipeline, and HubSpot routing decisions.
5. Approved proof: transaction history, testimonials, representative outcomes, or a decision to launch without them.

## Recommendation

Approve the visual direction and resolve the five blockers in `Open-Decisions.md`. Then authorize a lean core implementation: global navigation/footer, Homepage, Sell, Build, `/services`, `/clients`, About refinements, Contact/forms, SEO/analytics continuity, and launch QA. Defer vertical pages, advanced tools, and extensive CMS abstraction.

