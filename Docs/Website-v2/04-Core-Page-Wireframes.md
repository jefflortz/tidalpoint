# Website 2.0 Core Page Wireframes

## November 23, 2026 four-page revision

The four Release 1 page structures below supersede earlier core-page wireframes where they differ.

### Homepage `/`

```text
[HEADER]
Logo | Sell | Build | What Is My Business Worth? | Who We Help | About | Insights | Contact

[HERO]
Descriptor: Business Value Creation & M&A Advisory
H1: Get More From the Business You've Built.
Tagline: Build Value. Realize Value.
Plain-English explanation of brokerage and sale preparation
[Sell My Business] [Build Business Value]

[TWO PRIMARY JOURNEYS]
Sell: business broker + active buyer-search difference
Build: assessment + 12-month value-improvement roadmap

[VALUATION ENTRY]
H2: What is my business worth?
Short value-factor explanation
[Explore Business Value]

[WHO WE HELP]
Owner-operated private businesses; trades/service examples; $2M baseline only if approved

[WHY TPP]
Operator experience and transferable-value perspective; verified proof only

[REGIONAL / INSIGHT / FINAL CTA]
Approved New England scope; relevant Sell/Build resources; confidential conversation
```

### Sell Your Business `/sell-your-business`

```text
[HERO]
H1: We Don't Just List Your Business. We Find the Right Buyers.
Opening includes “business broker” after legal approval
[Let's Talk About Selling Your Business]

[FIRST TWO SCREENS: BUYER-SEARCH DIFFERENCE]
Identify likely buyers | Conduct discreet outreach | Evaluate intent/capacity
No buyer-network, financing or preapproval claims without evidence

[OPERATOR-LED POSITIONING]
Earnings | owner dependence | customers | leadership | systems | risk | growth

[PROCESS]
Prepare and position → Identify and approach → Evaluate interest/capacity → Negotiate/diligence/close

[VALUATION BRIDGE]
Not sure what the business may be worth? Link to valuation resource

[CONFIDENTIALITY / FAQ / FORM]
Process controls, owner decisions, fees/timing/valuation limits, Sell journey fields
```

### Build Business Value `/build-business-value`

```text
[HERO]
H1: Make Your Business Worth More Before You Sell.
Prepare for a future sale; not generic coaching
[Explore the Value Acceleration Program]

[THREE OUTCOMES]
Understand what may drive value
Develop a practical 12-month roadmap
Work with an experienced advisor through implementation

[VALUE DRIVERS]
Financial quality | owner independence | leadership | recurring/reliable revenue
customer concentration | systems | growth durability | risk

[WORKING RHYTHM]
Assessment → priorities → roadmap → cadence → evidence of progress

[VALUATION + SELL BRIDGES]
Learn what drives value; move to Sell when timing is right

[FAQ / BUILD FORM]
Scope, time, participants, deliverables, limitations, Build journey fields
```

### Valuation resource `/resources/what-is-my-business-worth`

```text
[HERO]
H1: What Is My Business Worth?
No single multiple; educational context and next-step choice

[HOW BUYERS EVALUATE]
Earnings/cash flow | owner dependence | customers/revenue
people/systems | risk/growth | market/deal structure

[WHY METHODS DIFFER]
Company, industry, size, earnings quality and transaction context

[BOUNDARY]
Preliminary discussion is not a certified valuation, fairness opinion or formal appraisal

[TWO CONVERSION PATHS]
Ready to sell → confidential business value and sale consultation
Planning ahead → explore opportunities to improve business value

[FAQ / RELATED CONTENT]
Information needed, common approaches, limitations, owner-dependence and preparation links
```

### Mobile acceptance additions

- Each page exposes its H1 and primary action without a long preamble.
- Sell shows the active-search proposition within the first two screens.
- Valuation presents both Sell and Build paths without forcing a form first.
- Header collapses without hiding the three primary journeys.
- No horizontal overflow at 320 px; no interaction depends on hover or carousel behavior.

These are content-first responsive wireframes, not visual designs. They preserve the existing design system and define hierarchy, modules, and conversion paths.

## Homepage `/`

```text
[GLOBAL HEADER]
Logo | Sell Your Business | Build Business Value | Who We Help | About | Insights | Contact

[HERO — above fold]
Descriptor: Business Value Creation & M&A Advisory
H1: Get More From the Business You've Built.
Tagline: Build Value. Realize Value.
Approved supporting copy
[Sell My Business] [Build Business Value]
Optional regional trust line

[TWO PATHS]
Card 1: Ready to sell?
Short outcome + buyer-search differentiation
[Explore Sell Your Business]
Card 2: Thinking about it down the road?
Short outcome + 12-month value-improvement program
[Explore Build Business Value]

[WHO WE HELP]
Owner-operated privately held businesses; approximately $2M annual revenue baseline
Trades/services as examples, not an exclusion
Fit signals and geography

[WHY TIDAL POINT]
Experienced operators who understand what creates transferable value
Proof points subject to verification

[HOW VALUE IS BUILT AND REALIZED]
Assess → Improve/Prepare → Position → Find/Qualify → Negotiate/Close
Clearly distinguish optional paths

[PROOF]
Jeff/team credentials, approved testimonials/outcomes, regional presence

[INSIGHT]
One high-fit article + category links

[FINAL CTA]
Choose Sell or Build / confidential conversation

[FOOTER]
Entity, region, contact, policies, social
```

### Mobile priorities

- H1 and both path CTAs visible with minimal scroll.
- Replace crowded multi-line header CTA with compact “Contact” or menu-contained CTA.
- Stack path cards; Sell first, Build second.
- Avoid carousel-only content.

## Sell Your Business `/sell-your-business`

```text
[HERO]
Eyebrow: Sell Your Business
H1: We Don't Just List Your Business. We Find the Right Buyers.
Plain-language support copy
[Let's Talk About Selling Your Business]
Confidentiality reassurance

[IS THIS YOUR MOMENT?]
Trigger situations, fit, revenue/geography caveats

[WHY OPERATOR-LED]
Position the business through an operator/buyer lens
Active search versus passive listing
No unverified network claims

[PROCESS]
1. Understand goals and readiness
2. Prepare and position the business
3. Identify and approach buyers
4. Verify financial capacity and acquisition interest
5. Negotiate, manage diligence, support closing

[WHAT YOU CAN EXPECT]
Confidentiality, owner control, communication cadence, transaction support

[BUYER QUALIFICATION]
Define process only after owner/legal approval

[PROOF]
Verified credentials/outcomes only

[FAQ]
Timing, confidentiality, valuation, buyer outreach, fees/process

[PRIMARY FORM]
Sell-specific qualification fields
[Let's Talk About Selling Your Business]
```

## Build Business Value `/build-business-value`

```text
[HERO]
Eyebrow: Build Business Value
H1: Make Your Business Worth More Before You Sell.
Support copy emphasizing preparation, not guaranteed valuation
[Let's Talk About Building Business Value]

[WHO IT IS FOR]
Owners with a future-sale horizon or desire for a stronger, less dependent company

[BUSINESS VALUE ASSESSMENT]
Current state, value drivers, risks, evidence, priority gaps

[VALUE DRIVERS]
Financial quality | owner independence | leadership | recurring/reliable revenue
customer concentration | operating systems | growth durability | risk

[12-MONTH ROADMAP]
Priorities, owners, milestones, measures

[SUPPORTED IMPLEMENTATION]
Operating cadence, decision support, specialist help where needed

[PROGRESS MEASUREMENT]
Business indicators and readiness evidence; no guaranteed valuation claim

[FUTURE SALE READINESS]
How Build connects to Sell when the owner is ready

[FAQ]
Timing, commitment, deliverables, valuation, who participates

[PRIMARY FORM]
Build-specific qualification fields
[Let's Talk About Building Business Value]
```

## Shared interaction requirements

- Every primary CTA has an unambiguous accessible name and journey identifier.
- Forms include a loading state, success state, error fallback, direct email/phone, and privacy notice.
- Focus order follows visual order; add skip-to-content.
- Motion respects reduced-motion preference.
- Mobile layouts have no horizontal overflow at 320 px and above.
- Proof modules hide unpublished claims rather than showing placeholders.

