# Website 2.0 HubSpot and Analytics Implementation Plan

## November 23, 2026 three-journey revision

The implementation must support **Sell**, **Build** and **Valuation** as independent entry paths. Valuation visitors are routed to Sell or Build based on timing and objective; Valuation is a source journey, not necessarily a separate long-term deal pipeline.

### Recommended form architecture

- Prefer three tailored form shells backed by shared contact/company properties, or one conditional form with an immutable `journey` value of `sell`, `build` or `valuation`.
- Valuation form asks sale timing/objective early and passes `valuation_next_path = sell|build|undetermined`.
- Keep the first interaction short; collect sensitive profitability or ownership data only when approved and operationally necessary.

### Required attribution and routing fields

- `journey`, `journey_entry_page`, `cta_placement`, `valuation_next_path`.
- Company/contact details, revenue range, industry, geography and intended sale timing.
- First and latest landing page/referrer and complete UTM set.
- `gclid`, `gbraid`, `wbraid` where legally permitted.
- Original lead source and original-source detail, preserving the literal **Legacy** value without overwrite.

### Revised event taxonomy

**Engagement only:** `journey_select`, `valuation_path_select`, `service_cta_click`, `contact_cta_click`, `email_click`, `phone_click`, `form_start`, `form_error`.

**Primary conversions:** `sell_inquiry_submit`, `build_inquiry_submit`, `valuation_inquiry_submit`, and `consultation_scheduled` only after confirmed completion. A generic `generate_lead` may mirror a successful submission; phone, email and CTA clicks must not trigger it.

### CRM flow

1. Capture first-touch attribution in a privacy-compliant first-party mechanism.
2. Pass immutable journey and hidden attribution values to HubSpot.
3. Fire a journey-specific event only from the verified successful form callback.
4. Preserve original source on contact updates and repeat submissions.
5. Route valuation inquiries to Sell or Build after timing/objective review.
6. Create or update deal records/workflows only after pipeline and ownership approval.

### Release 1 test matrix additions

- Organic and paid entries to all three landing paths.
- Valuation → Sell and Valuation → Build routing.
- Legacy referral preservation and returning-visitor attribution.
- One successful submission equals one primary conversion.
- Confirmed appointment versus scheduling click.
- HubSpot submission/contact, GA4 event and CRM record reconcile without duplicate `generate_lead` events.

No live form, workflow, pipeline, GA4 or Ads configuration is changed by this specification.

**Status:** Design only — do not change HubSpot, GA4, Google Ads, or production forms

## Current baseline

- HubSpot portal: `46259123`.
- Current form: `412db353-adac-4559-809d-d4b9572d4ca0`.
- GA4 measurement ID: `G-D29KDZN4XQ`.
- Current events: `email_click`, `phone_click`, `contact_cta_click`, `hubspot_form_submit`, and `generate_lead`.
- Email and phone clicks currently also trigger `generate_lead`; this should be corrected because clicks are not completed leads.

## Inquiry experiences

Use separate Sell and Build forms or one conditional form with an immutable `journey` value. Separate forms are preferred for reporting and tailored questions.

### Shared fields

- First name, last name, email, phone.
- Company name, website, industry.
- Approximate annual revenue range.
- City/state or service location.
- How they heard about TPP.
- Original lead source and original source detail.
- Consent/privacy acknowledgment as legally required.

### Sell-specific fields

- Desired sale timing: now, <12 months, 1–3 years, exploring.
- Owner role and ownership percentage where appropriate.
- Approximate profitability range only if approved.
- Primary reason for considering a sale.
- Confidential message.

### Build-specific fields

- Anticipated sale horizon.
- Primary value concern or constraint.
- Owner dependency/leadership readiness prompt.
- Preferred improvement start timing.

Do not require every qualification field at first contact if it materially reduces completion. Use progressive profiling or follow-up where practical.

## Attribution fields

Persist first-touch and latest-touch values:

- Landing page and referrer.
- `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`.
- `gclid`, `gbraid`, `wbraid` when present and legally permitted.
- Journey and CTA location.
- Legacy/referral source, preserving the literal value **Legacy** where it is an existing business requirement.

Never overwrite original source values on repeat visits or later workflow updates.

## Event taxonomy

### Engagement events — not primary conversions

- `journey_select` (`sell` or `build`).
- `service_cta_click` (journey, page, placement).
- `contact_cta_click`.
- `email_click`.
- `phone_click`.
- `form_start`.
- `form_error`.

### Primary web conversions

- `sell_inquiry_submit`.
- `build_inquiry_submit`.
- `consultation_scheduled` if scheduling is implemented and confirmed.

Only successful form callbacks or scheduling confirmations trigger these events. A generic `generate_lead` may mirror the successful submissions for Google Ads compatibility, but not clicks.

### CRM/offline outcomes

- Marketing inquiry received.
- Fit review completed.
- Qualified Sell opportunity.
- Qualified Build opportunity.
- Introductory meeting held.
- Engagement proposed.
- Engagement signed.
- For Sell: representation/listing active, buyer outreach active, LOI, diligence, closed/lost.
- For Build: assessment active, roadmap approved, implementation active, program completed/paused/lost.

## Proposed pipeline design

Prefer two deal pipelines if ownership, stages, forecasting, and reporting differ materially.

### Sell opportunity stages

New inquiry → Fit review → Introductory meeting → Readiness/valuation discussion → Engagement proposed → Representation active → Buyer outreach → LOI → Diligence → Closed won/lost.

### Build opportunity stages

New inquiry → Fit review → Introductory meeting → Assessment proposed → Assessment active → Roadmap proposed → Implementation active → Completed/converted to Sell → Closed lost.

Stage names and definitions require owner approval; do not create them during planning.

## Technical flow

1. Visitor lands with attribution parameters.
2. First-touch values are stored in a privacy-compliant first-party mechanism.
3. CTA records an engagement event and journey.
4. HubSpot form receives hidden attribution/journey values.
5. Successful `hsFormCallback` is verified against the expected form ID.
6. GA4 receives the journey-specific submit event and optional `generate_lead` mirror.
7. HubSpot creates/updates contact without overwriting original source.
8. Workflow assigns the correct owner/pipeline only after approval.
9. Qualified/closed outcomes are imported to ad platforms when configured.

## Test plan before launch

- Organic Sell, organic Build, Google Ads, referral/Legacy, direct, and returning-visitor scenarios.
- Form loading, required fields, validation, spam handling, success message, workflow email, contact creation, deduplication, and pipeline routing.
- Confirm original source survives repeat submissions.
- Confirm one submission produces one conversion event.
- Confirm clicks do not produce `generate_lead`.
- Reconcile browser event, GA4 DebugView, HubSpot submission/contact, and CRM outcome.
- Test Safari/iOS, Chrome/Android, desktop browsers, keyboard-only use, and blocked third-party cookies.

## Dependencies/approvals

- HubSpot subscription capabilities and pipeline permissions.
- Owner definitions of qualification and routing.
- Legal review of consent and sensitive financial questions.
- Google Ads offline-conversion design.
- Final form IDs and workflow ownership.

