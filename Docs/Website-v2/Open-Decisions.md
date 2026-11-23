# Website 2.0 Open Decisions

## November 23, 2026 consolidated approval list

The keyword research and four-page prototype resolve the architecture question. The remaining owner decisions are narrower and should be answered before full implementation.

### P0 — required before copy/build approval

1. **Brokerage authority:** approve the entity, jurisdictions, licenses/registrations, disclosures and exact permitted uses of `business broker`, `brokerage`, `M&A advisor` and `sell-side advisor`.
2. **New England coverage:** identify which of MA, CT, RI, NH, ME and VT can be named for transaction services and which are only relationship/in-person markets.
3. **Buyer-search promise:** approve the documented identification/outreach process and confidentiality controls.
4. **Buyer qualification:** approve the checks and responsible party behind any `financially qualified` wording; otherwise use the bounded fallback language.
5. **Valuation boundary:** define business-value discussion, broker opinion, estimate, formal appraisal and referral scope; approve the Release 1 disclaimer.
6. **Build program:** approve the `Value Acceleration Program` name, assessment, 12-month roadmap, cadence, deliverables and measurement approach.
7. **Audience statement:** decide whether approximately `$2M annual revenue` appears publicly or remains an internal persona.
8. **Proof:** approve career facts, testimonials, case examples and any transaction/value claims—or approve a proof-light launch.
9. **Forms:** choose three tailored forms versus one conditional form and approve required revenue, industry, geography and timing questions.
10. **CRM routing:** approve one versus two deal pipelines, Valuation-to-Sell/Build routing, ownership, stage definitions, SLAs and automated emails.

### P1 — required before final design acceptance

11. Approve the four prototype structures and documentary owner-operated imagery direction.
12. Confirm whether `What Is My Business Worth?` appears in desktop primary navigation or under Insights/Explore.
13. Approve code-based core pages with limited Sanity extension.
14. Approve the revised Release 1 estimate of 3.5–6 weeks / 175–300 hours.
15. Confirm Release 2 order: trades/service-business page, New England hub, then selling guide.
16. Approve mobile performance budgets and WCAG 2.2 AA acceptance criteria.

### Decisions already reflected

- Keep the approved descriptor, tagline and four approved H1s.
- Preserve Next.js, Vercel, Sanity, HubSpot, analytics and current brand identity.
- Preserve existing article and location URLs.
- Add the valuation resource to Release 1.
- Do not build a valuation calculator in Release 1.
- Use one substantive trades/service-business page rather than thin vertical pages.
- Stop before production deployment or live workflow/configuration changes.

Resolve P0 items before full implementation is authorized. P1 items can be decided during core build if they do not alter legal scope.

## P0 — owner and legal decisions

1. **Service terminology and authority**  
   May TPP publicly use “business broker,” “brokerage,” “sell-side M&A advisory,” and “valuation”? Identify the responsible legal entity, jurisdictions, licenses/registrations, referral relationships, and required disclosures.

2. **Buyer network claim**  
   What constitutes the established network, how current is it, and what exact wording can be supported? If unverified, approve launch language limited to active buyer identification and outreach.

3. **Financial qualification**  
   Define the checks used to describe a prospective buyer as financially qualified and acquisition-ready. Who performs them and what can be stated publicly?

4. **Build program promise**  
   Confirm the Business Value Assessment, 12-month roadmap, implementation cadence, deliverables, pricing model, and progress measures.

5. **Public audience statement**  
   Should “approximately $2M annual revenue” appear on the site, or remain internal persona guidance? Confirm lower/upper fit boundaries and priority industries.

6. **Geography**  
   Confirm in-person region, transaction-service region, and whether New England or national coverage may be claimed.

7. **Proof for launch**  
   Approve verified career facts, testimonials, transaction history, value-creation outcomes, case examples, and permissions—or approve a proof-light launch.

## P0 — conversion/operations decisions

8. **Forms**  
   Separate Sell/Build forms or one conditional form? Confirm required fields and whether revenue/profit questions are appropriate at first contact.

9. **HubSpot pipeline**  
   One pipeline with journey-specific stages or separate Sell and Build pipelines? Confirm owners, SLAs, workflow emails, and Legacy-source handling.

10. **Primary CTA behavior**  
    Embedded form, dedicated contact page, or scheduler after qualification? Confirm confidentiality and response-time language.

## P1 — design and content decisions

11. Approve the documentary owner-operated imagery direction; confirm whether generated prototype imagery may be used or should be replaced by commissioned photography.
12. Approve the Homepage and Sell prototype structure.
13. Confirm whether the homepage should show the audience/revenue statement above or below the two paths.
14. Confirm final navigation label: “Who We Help” while retaining `/clients`.
15. Confirm final `/services` label: “How We Help.”
16. Select first Sell content topics and priority trades verticals.

## P1 — technical decisions

17. Approve code-based core pages with limited Sanity extension versus fully CMS-managed service pages.
18. Approve the lean scope and 3–5 week / 150–260 hour working estimate.
19. Approve whether the prototype branch may be merged only after prototype review or remain disposable.
20. Approve formal Lighthouse/WCAG budgets for launch.

## Recommended approval response

The fastest path is to answer items 1–10 and approve or reject the two prototypes as a direction. Items 11–20 can then be finalized during the first implementation sprint.

