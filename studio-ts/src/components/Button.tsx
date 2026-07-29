import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps = {
  invert?: boolean
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
)

export function Button({
  invert = false,
  className,
  children,
  ...props
}: ButtonProps) {
  className = clsx(
    className,
    'inline-flex items-center justify-center rounded-md px-4 py-2 text-xs font-semibold tracking-wide uppercase shadow transition',
    invert
      ? 'bg-white text-tidal-navy hover:bg-tidal-sand'
      : 'bg-tidal-navy text-white hover:bg-tidal-navy/90',
  )

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {children}
      </button>
    )
  }

  return (
    <Link className={className} {...props}>
      {children}
    </Link>
  )
}
