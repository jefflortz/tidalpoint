import Image from 'next/image'
import clsx from 'clsx'

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  invert?: boolean
  filled?: boolean
}) {
  return (
    <div className={clsx('flex items-center', props.className)}>
      <Image
        src="/logo-icon-dark.png"
        alt="Coastal Growth Advisors"
        width={120}
        height={80}
        className="h-10 w-auto"
        unoptimized
      />
    </div>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <div className={clsx('flex items-center', className)} {...props}>
      <Image
        src={invert ? '/logo-dark-cropped.png' : '/logo-light-cropped.png'}
        alt="Coastal Growth Advisors"
        width={400}
        height={100}
        className="h-12 w-auto"
        unoptimized
      />
    </div>
  )
}
