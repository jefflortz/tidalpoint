import Link from 'next/link'
import clsx from 'clsx'

// Dormant — no confirmed real LinkedIn company page URL yet. Re-add to
// socialMediaProfiles below with a real href once available.
function LinkedInIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.064 2.064 0 1 1 0-4.128 2.064 2.064 0 0 1 0 4.128ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"
      />
    </svg>
  )
}

function EmailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.375.383L12 12.148l7.625-6.265a1 1 0 0 0-.125-.008h-15a1 1 0 0 0-.125.008ZM20 7.35l-6.996 5.751a1.75 1.75 0 0 1-2.008 0L4 7.35V18.5A1 1 0 0 0 5 19.5h14a1 1 0 0 0 1-1V7.35Z"
      />
    </svg>
  )
}

// LinkedIn and Facebook are intentionally left out below — neither has a
// confirmed real profile URL. Add an entry only once a real href exists;
// do not link to "#" or a placeholder.
export const socialMediaProfiles: {
  title: string
  href: string
  icon: (props: React.ComponentPropsWithoutRef<'svg'>) => React.JSX.Element
}[] = [
  { title: 'Email Jeff', href: 'mailto:jeff@tidalpointpartners.com', icon: EmailIcon },
]

export function SocialMedia({
  className,
  invert = false,
}: {
  className?: string
  invert?: boolean
}) {
  return (
    <ul role="list" className={clsx('flex items-center gap-x-1', className)}>
      {socialMediaProfiles.map((socialMediaProfile) => (
        <li key={socialMediaProfile.title}>
          <Link
            href={socialMediaProfile.href}
            aria-label={socialMediaProfile.title}
            className={clsx(
              'flex h-11 w-11 items-center justify-center rounded-full transition',
              invert
                ? 'text-white hover:bg-white/10'
                : 'text-neutral-950 hover:bg-neutral-950/5',
            )}
          >
            <socialMediaProfile.icon className="h-5 w-5 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  )
}
