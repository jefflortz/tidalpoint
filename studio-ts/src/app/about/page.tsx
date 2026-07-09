import { type Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { type MDXEntry, type Article, loadArticles } from '@/lib/mdx'
import { getWebPageSchema } from '../schema'

export const metadata: Metadata = {
  title: 'About Jeff Lortz',
  description:
    'Meet Jeff Lortz: former PE-backed SaaS CEO with 25+ years operating experience and US Navy Surface Warfare Officer background. Your operating partner for Southeastern Massachusetts business growth.',
  openGraph: {
    title: 'About Jeff Lortz - Coastal Growth Advisors',
    description:
      'Learn about Jeff Lortz, founder of Coastal Growth Advisors. Ex-PE CEO with deep operating experience helping owner-led businesses scale.',
    type: 'website',
  },
}

// ─── Section 1: Hero ─────────────────────────────────────────────────────────

const heroStats = [
  { number: '25+', label: 'Years Operating Experience' },
  { number: '2', label: 'PE-Backed CEO Roles' },
  { number: '2', label: 'Nasdaq\nIPOs' },
]

function Hero() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <Container>
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-cga-gold">
            About Jeff Lortz &middot; Founder
          </p>
          <h1 className="mt-4 font-display text-5xl font-extrabold tracking-tight text-cga-navy sm:text-7xl">
            He&rsquo;s actually been{' '}
            <em className="not-italic italic text-cga-gold">in the seat.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-cga-body leading-relaxed">
            PE-backed CEO. COO. CCO. Nuclear-qualified Navy Surface Warfare
            Officer. Member of an IPO leadership team. Jeff has done the work
            most business coaches only read about — and now brings that
            operating experience to Southeastern Massachusetts businesses that
            have earned it.
          </p>
          <dl className="mt-12 grid grid-cols-3 gap-8 border-t border-cga-navy/10 pt-12 sm:max-w-lg">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="whitespace-pre-line text-xs font-semibold uppercase tracking-widest text-cga-gold">
                  {stat.label}
                </dt>
                <dd className="mt-2 font-display text-4xl font-extrabold text-cga-navy">
                  {stat.number}
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </Container>
    </div>
  )
}

// ─── Section 2: The Story ────────────────────────────────────────────────────

function TheStory() {
  return (
    <div className="bg-cga-sand py-24 sm:py-32">
      <Container>
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-cga-gold">
            The Story
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-cga-navy sm:text-5xl">
            From warships to boardrooms to{' '}
            <em className="not-italic italic text-cga-teal">your business.</em>
          </h2>
        </FadeIn>
        <FadeInStagger className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <FadeIn>
            <h3 className="font-display text-xl font-bold text-cga-navy">
              The Navy &amp; Enterprise Years
            </h3>
            <p className="mt-4 text-base leading-relaxed text-cga-body">
              Jeff&rsquo;s operating career started on the bridge of a
              nuclear-powered surface ship — where the cost of a bad decision
              wasn&rsquo;t a missed quarter. Eight years as a US Navy Surface Warfare
              Officer instilled a permanent belief: systems matter, standards
              matter, and leadership means owning outcomes, not just activities.
            </p>
            <p className="mt-4 text-base leading-relaxed text-cga-body">
              After the Navy, he spent over two decades in enterprise technology
              — PTC, BMC, BladeLogic, Pegasystems, Acoustic, TOMIA, and
              Everbridge, where he was part of the leadership team through the
              company&rsquo;s Nasdaq IPO. COO, CCO, Chief of Staff, SVP. He has
              managed P&amp;Ls under PE pressure, rebuilt sales organizations, and
              led teams through acquisitions.
            </p>
          </FadeIn>
          <FadeIn>
            <h3 className="font-display text-xl font-bold text-cga-navy">
              The CEO Chapter &amp; Why Plymouth
            </h3>
            <p className="mt-4 text-base leading-relaxed text-cga-body">
              Jeff&rsquo;s most formative experiences came as PE-backed CEO at
              ProcessMaker and Fastr Corp — where the margin for error was thin,
              the investors had opinions, and every decision was his to make.
              He&rsquo;s made the mistakes. He&rsquo;s also made the right calls. Both
              inform how he works with clients.
            </p>
            <p className="mt-4 text-base leading-relaxed text-cga-body">
              Now he lives in Plymouth with his family — coaching youth sports
              on weekends, eating at the same restaurants, driving the same
              roads as the business leaders he works with. Coastal Growth
              Advisors isn&rsquo;t a remote consultancy. It&rsquo;s a local operating
              partnership built by someone invested in this region.
            </p>
          </FadeIn>
        </FadeInStagger>
      </Container>
    </div>
  )
}

// ─── Section 3: Career Timeline ──────────────────────────────────────────────

const timeline = [
  {
    period: '2025 – Present',
    company: 'Coastal Growth Advisors',
    tag: 'Founder',
    tagColor: 'bg-cga-gold text-white',
    role: 'Founder & Principal Advisor',
    description:
      'Business advisory and executive coaching for privately held businesses across the South Shore, South Coast, and Cape Cod.',
  },
  {
    period: '2022 – 2024',
    company: 'Fastr Corp',
    tag: 'PE-Backed CEO',
    tagColor: 'bg-cga-gold text-white',
    role: 'Chief Executive Officer',
    description:
      'Full P&L ownership, board management, GTM strategy, and investor relations at a PE-backed SaaS company.',
  },
  {
    period: '2019 – 2022',
    company: 'ProcessMaker',
    tag: 'PE-Backed CEO',
    tagColor: 'bg-cga-gold text-white',
    role: 'Chief Executive Officer',
    description:
      'Led product repositioning, GTM rebuild, and international expansion at a PE-backed BPM SaaS platform.',
  },
  {
    period: '2016 – 2019',
    company: 'Everbridge',
    tag: 'Nasdaq IPO',
    tagColor: 'bg-cga-teal text-white',
    role: 'Chief Customer Officer / SVP Operations',
    description:
      "Leadership team member through Everbridge's Nasdaq IPO (EVBG). Customer success, professional services, global operations.",
  },
  {
    period: '2014 – 2016',
    company: 'Acoustic / IBM Watson Marketing',
    tag: 'Enterprise',
    tagColor: 'bg-cga-navy text-white',
    role: 'Chief of Staff / VP Operations',
    description:
      'Chief of Staff to the CEO at a major marketing technology platform. Strategic initiatives, operational discipline, cross-functional execution.',
  },
  {
    period: '1998 – 2014',
    company: 'PTC · BMC · Pegasystems · TOMIA · BladeLogic',
    tag: 'Enterprise',
    tagColor: 'bg-cga-navy text-white',
    role: 'Senior Operating Roles — COO, CCO, SVP',
    description:
      '15+ years across enterprise software. Led global teams, rebuilt revenue organizations, managed through acquisitions.',
  },
  {
    period: '1990 – 1998',
    company: 'United States Navy',
    tag: 'Military',
    tagColor: 'bg-slate-700 text-white',
    role: 'Surface Warfare Officer — Nuclear Qualified',
    description:
      'Eight years commissioned service. Nuclear qualified. The foundational leadership experience that shaped everything after.',
  },
]

function CareerTimeline() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <Container>
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-cga-gold">
            Career History
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-cga-navy sm:text-5xl">
            25+ years operating{' '}
            <em className="not-italic italic text-cga-teal">
              at the highest levels.
            </em>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-cga-body">
            The full arc — from naval service to PE-backed CEO — now applied to
            Southeastern Massachusetts businesses.
          </p>
        </FadeIn>
        <FadeInStagger className="mt-16">
          {timeline.map((entry, i) => (
            <FadeIn key={i}>
              <div className="flex gap-6 border-t border-cga-navy/10 py-8">
                <div className="w-32 shrink-0 pt-1 text-sm font-semibold text-cga-light">
                  {entry.period}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-display text-lg font-bold text-cga-navy">
                      {entry.company}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${entry.tagColor}`}
                    >
                      {entry.tag}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-cga-teal">
                    {entry.role}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-cga-body">
                    {entry.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  )
}

// ─── Section 4: Operating Philosophy ─────────────────────────────────────────

const principles = [
  {
    title: 'Systems Over Heroics',
    body: "Great organizations don't depend on heroic effort. They have systems that work consistently — so when a crisis hits, the response is disciplined, not improvised.",
  },
  {
    title: 'Standards Are Binary',
    body: "A standard that isn't enforced isn't a standard. Tolerance for exceptions creates cultures where exceptions become the norm.",
  },
  {
    title: 'Accountability Without Blame',
    body: 'After-action reviews — honest analysis of what happened and why, without witch hunts. Learn from mistakes without destroying people.',
  },
  {
    title: 'Lead Through Others',
    body: "A leader personally executing every critical task isn't leading — they're a single point of failure. Jeff works with leaders to stop being that.",
  },
]

function OperatingPhilosophy() {
  return (
    <div className="bg-cga-navy py-24 sm:py-32">
      <Container>
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-cga-gold">
            What the Navy Taught Him
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            The lessons that{' '}
            <em className="not-italic italic text-cga-gold">
              don&rsquo;t leave you.
            </em>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
            Eight years commanding nuclear-powered ships taught Jeff things about
            leadership and operational discipline that no MBA covers. The same
            principles that applied on the bridge apply in a $20M business in
            New Bedford. Context changes. Fundamentals don&rsquo;t.
          </p>
        </FadeIn>
        <FadeInStagger className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {principles.map((p) => (
            <FadeIn key={p.title}>
              <div className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
                <h3 className="font-display text-xl font-bold text-cga-gold">
                  {p.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/80">
                  {p.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  )
}

// ─── Section 5: Credentials ───────────────────────────────────────────────────

const credentials = [
  {
    title: 'MBA — University of Rhode Island',
    body: 'Graduate business education with a regional focus.',
  },
  {
    title: 'BS Mechanical Engineering — UNH',
    body: "An engineer's mindset: systematic, evidence-based, intolerant of solutions that don't actually work.",
  },
  {
    title: 'Certified Executive Coach — FocalPoint',
    body: "Brian Tracy's FocalPoint methodology — one of the most established frameworks in executive coaching.",
  },
  {
    title: 'Certified Business Coach — FocalPoint',
    body: 'Dual certification covering executive coaching and business performance advisory.',
  },
  {
    title: 'US Navy Surface Warfare Officer — Nuclear',
    body: 'Eight years commissioned service. The foundation of everything that came after.',
  },
  {
    title: 'Plymouth, MA Resident',
    body: 'Not a remote consultant. A neighbor invested in this region and the businesses that define it.',
  },
]

function Credentials() {
  return (
    <div className="bg-cga-sand py-24 sm:py-32">
      <Container>
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-cga-gold">
            Credentials &amp; Roots
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-cga-navy sm:text-5xl">
            South Shore roots.{' '}
            <em className="not-italic italic text-cga-teal">
              Enterprise discipline.
            </em>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-cga-body leading-relaxed">
            Southeastern Massachusetts has an extraordinary concentration of
            privately held businesses that have built real things over real time.
            These businesses deserve enterprise-grade operating discipline. They
            just haven&rsquo;t had access to it. That&rsquo;s the gap Coastal Growth
            Advisors was built to close.
          </p>
        </FadeIn>
        <FadeInStagger className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((cred) => (
            <FadeIn key={cred.title}>
              <div className="rounded-2xl bg-white p-6 ring-1 ring-cga-navy/10">
                <h3 className="font-display text-base font-bold text-cga-navy">
                  {cred.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cga-body">
                  {cred.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  )
}

// ─── Section 6: Pull Quotes ───────────────────────────────────────────────────

function PullQuotes() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <Container>
        <FadeInStagger className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <FadeIn>
            <blockquote className="border-l-4 border-cga-gold pl-6">
              <p className="text-xl italic leading-relaxed text-cga-navy">
                &ldquo;I&rsquo;m not here to impress you with my r&eacute;sum&eacute;. I&rsquo;m here to
                help you solve your actual problems. The r&eacute;sum&eacute; just tells you
                I&rsquo;ve seen enough to know what a real problem looks like.&rdquo;
              </p>
              <footer className="mt-4 text-sm font-semibold text-cga-light">
                — Jeff Lortz
              </footer>
            </blockquote>
          </FadeIn>
          <FadeIn>
            <blockquote className="border-l-4 border-cga-teal pl-6">
              <p className="text-xl italic leading-relaxed text-cga-navy">
                &ldquo;The best thing that can happen at the end of an engagement is
                that you don&rsquo;t need me anymore. That means the system is
                working.&rdquo;
              </p>
              <footer className="mt-4 text-sm font-semibold text-cga-light">
                — Jeff Lortz
              </footer>
            </blockquote>
          </FadeIn>
        </FadeInStagger>
      </Container>
    </div>
  )
}

// ─── Section 7: Recent Articles ───────────────────────────────────────────────

function RecentArticles({ articles }: { articles: Array<MDXEntry<Article>> }) {
  return (
    <div className="bg-cga-sand py-24 sm:py-32">
      <Container>
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-cga-gold">
            From the Articles
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-cga-navy sm:text-5xl">
            Practical thinking for business operators.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-cga-body leading-relaxed">
            Jeff writes about the operational challenges facing owner-led
            businesses in Southeastern Massachusetts — not theory, not
            frameworks for their own sake. Practical thinking from someone
            who&rsquo;s been in the seat.
          </p>
        </FadeIn>
        <FadeInStagger className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {articles.map((article) => (
            <FadeIn key={article.href}>
              <article className="rounded-2xl bg-white p-8 ring-1 ring-cga-navy/10">
                <time className="text-xs font-semibold uppercase tracking-widest text-cga-gold">
                  {article.date}
                </time>
                <h3 className="mt-3 font-display text-xl font-bold text-cga-navy">
                  <Link href={article.href} className="hover:text-cga-teal">
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cga-body">
                  {article.description}
                </p>
                <Link
                  href={article.href}
                  className="mt-6 inline-flex text-sm font-semibold text-cga-teal hover:text-cga-teal/80"
                >
                  Read more &rarr;
                </Link>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
        <FadeIn className="mt-10">
          <Link
            href="/articles"
            className="text-sm font-semibold text-cga-navy hover:text-cga-teal"
          >
            View all articles &rarr;
          </Link>
        </FadeIn>
      </Container>
    </div>
  )
}

// ─── Section 8: CTA ───────────────────────────────────────────────────────────

function CTA() {
  return (
    <div className="bg-cga-teal py-24 sm:py-32">
      <Container>
        <FadeIn className="text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to meet your operating partner?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
            The first conversation is free. No forms, no assessments — just a
            real discussion about your business and whether this is the right
            fit.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white px-8 py-3 text-base font-semibold text-cga-teal shadow transition hover:bg-cga-sand"
            >
              Schedule Your Free Consultation
            </Link>
            <p className="mt-4 text-sm text-white/60">
              Plymouth, MA &middot; Serving the South Shore, South Coast &amp; Cape Cod
            </p>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function About() {
  const articles = (await loadArticles()).slice(0, 2)

  return (
    <RootLayout>
      <Hero />
      <TheStory />
      <CareerTimeline />
      <OperatingPhilosophy />
      <Credentials />
      <PullQuotes />
      <RecentArticles articles={articles} />
      <CTA />
    </RootLayout>
  )
}
