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
        src={invert ? '/logo-monogram-dark.svg' : '/logo-monogram-light.svg'}
        alt="Tidal Point Partners"
        width={113}
        height={100}
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
        src={invert ? '/logo-wordmark-dark.svg' : '/logo-wordmark-light.svg'}
        alt="Tidal Point Partners"
        width={491}
        height={100}
        className="h-12 w-auto translate-y-[27%]"
        unoptimized
      />
    </div>
  )
}
