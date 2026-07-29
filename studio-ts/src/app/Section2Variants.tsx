import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

// EXPERIMENTAL — homepage narrative-flow review. Not final copy or design.
// Three alternative takes on "Section 2" (what replaces the old stats banner),
// switchable via ?variant=a|b|c. See chat for context.

type Situation = { label: string; body: string }

function SituationRow({ items }: { items: Array<Situation> }) {
  return (
    <FadeInStagger className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
      {items.map((item) => (
        <FadeIn key={item.label}>
          <div className="border-t border-tidal-navy/10 pt-8">
            <h3 className="font-display text-lg font-medium text-tidal-navy">
              {item.label}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-tidal-body">
              {item.body}
            </p>
          </div>
        </FadeIn>
      ))}
    </FadeInStagger>
  )
}

function Section2Shell({
  headline,
  intro,
  children,
}: {
  headline: string
  intro: string
  children: React.ReactNode
}) {
  return (
    <div className="bg-tidal-warm-white py-32 sm:py-40">
      <Container>
        <FadeIn className="max-w-2xl">
          <h2 className="font-display text-4xl font-medium tracking-tight text-tidal-navy sm:text-5xl">
            {headline}
          </h2>
          <p className="mt-6 text-lg text-tidal-body leading-relaxed">
            {intro}
          </p>
        </FadeIn>
        {children}
      </Container>
    </div>
  )
}

// ─── Variant A — "When business gets more complicated." ─────────────────────

export function Section2VariantA() {
  return (
    <Section2Shell
      headline="When business gets more complicated."
      intro="Successful businesses eventually reach a point where experience, leadership, and execution become just as important as ambition."
    >
      <SituationRow
        items={[
          {
            label: 'Growth',
            body: 'Your business has reached a size where yesterday’s operating model is no longer enough.',
          },
          {
            label: 'Leadership',
            body: 'The leadership team that got you here may not be the team that gets you there.',
          },
          {
            label: 'Transition',
            body: 'Growth, acquisition, succession, or new ownership all require a different level of leadership.',
          },
          {
            label: 'Perspective',
            body: 'Sometimes the most valuable person in the room is someone who has already been there.',
          },
        ]}
      />
    </Section2Shell>
  )
}

// ─── Variant B — "Built for pivotal moments." ────────────────────────────────
// Card body copy below is drafted by Claude — only the headline and the four
// situation labels were specified; see chat for the exact brief.

export function Section2VariantB() {
  return (
    <Section2Shell
      headline="Built for pivotal moments."
      intro="Some seasons in a business matter more than others. These are the moments Tidal Point Partners is built for."
    >
      <SituationRow
        items={[
          {
            label: 'Preparing for Growth',
            body: 'You can see the next stage coming — the question is whether the business is ready to meet it.',
          },
          {
            label: 'Leadership Evolution',
            body: 'The people and structure that got you this far may need to evolve for what comes next.',
          },
          {
            label: 'Ownership Transition',
            body: 'A sale, a succession, or new ownership changes what leadership needs to look like.',
          },
          {
            label: 'Improving Execution',
            body: 'Good strategy still depends on the discipline to execute it consistently.',
          },
        ]}
      />
    </Section2Shell>
  )
}

// ─── Variant C — "You don't have to build the next chapter alone." ──────────
// Card body copy below is drafted by Claude — only the headline and the four
// relationship-oriented themes were specified; see chat for the exact brief.

export function Section2VariantC() {
  return (
    <Section2Shell
      headline="You don’t have to build the next chapter alone."
      intro="Tidal Point Partners works alongside owners and leadership teams — not as an outside consultant, but as a partner in the work."
    >
      <SituationRow
        items={[
          {
            label: 'Working Alongside Leadership',
            body: 'Not a report and a recommendation — an ongoing partner in the decisions that matter.',
          },
          {
            label: 'Strengthening the Business',
            body: 'Building the operating foundation that lets good decisions turn into real results.',
          },
          {
            label: 'Building Capability',
            body: 'Leaving the team stronger and more capable than we found it — not dependent on us.',
          },
          {
            label: 'Preparing for the Future',
            body: 'Whatever comes next — growth, transition, or succession — the business is ready for it.',
          },
        ]}
      />
    </Section2Shell>
  )
}
