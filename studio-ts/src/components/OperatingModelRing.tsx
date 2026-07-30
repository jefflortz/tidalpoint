import { GrowthIcon, AlignmentIcon, MaturityIcon } from '@/components/OutcomeIcons'

function SeatIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 4h10v7H7z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7 11v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 17v3M15 17v3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

const CX = 200
const CY = 200
const OUTER_R = 185
const INNER_R = 130
const HUB_R = 120
const GUIDE_R = 197
const GAP_DEG = 3.5

const segments = [
  { id: 'growth', startAngle: 0, endAngle: 120, fill: 'fill-tidal-teal', icon: GrowthIcon },
  { id: 'operations', startAngle: 120, endAngle: 240, fill: 'fill-tidal-sand', icon: MaturityIcon },
  { id: 'team', startAngle: 240, endAngle: 360, fill: 'fill-tidal-navy', icon: AlignmentIcon },
]

function toXY(radius: number, angleDeg: number) {
  let rad = ((angleDeg - 90) * Math.PI) / 180
  return { x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad) }
}

function donutSegmentPath(startAngle: number, endAngle: number) {
  let start = startAngle + GAP_DEG / 2
  let end = endAngle - GAP_DEG / 2
  let largeArc = end - start > 180 ? 1 : 0

  let outerStart = toXY(OUTER_R, end)
  let outerEnd = toXY(OUTER_R, start)
  let innerStart = toXY(INNER_R, start)
  let innerEnd = toXY(INNER_R, end)

  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${OUTER_R} ${OUTER_R} 0 ${largeArc} 0 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerStart.x} ${innerStart.y}`,
    `A ${INNER_R} ${INNER_R} 0 ${largeArc} 1 ${innerEnd.x} ${innerEnd.y}`,
    'Z',
  ].join(' ')
}

export function OperatingModelRing() {
  let markerAngles = Array.from({ length: 12 }, (_, i) => i * 30)
  let hubDiameterPct = ((HUB_R * 2) / 400) * 100

  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <svg viewBox="0 0 400 400" aria-hidden="true" className="h-full w-full">
        {/* Dotted guide circle */}
        <circle
          cx={CX}
          cy={CY}
          r={GUIDE_R}
          fill="none"
          className="stroke-tidal-navy/20"
          strokeWidth="1"
          strokeDasharray="1 7"
        />

        {/* Marker dots around the guide circle, larger at top/bottom */}
        {markerAngles.map((angle) => {
          let isPrimary = angle === 0 || angle === 180
          let pos = toXY(GUIDE_R, angle)
          return (
            <circle
              key={angle}
              cx={pos.x}
              cy={pos.y}
              r={isPrimary ? 5 : 3}
              className={isPrimary ? 'fill-tidal-navy' : 'fill-tidal-navy/40'}
            />
          )
        })}

        {/* Tick lines connecting the top/bottom markers to the ring */}
        {[0, 180].map((angle) => {
          let outer = toXY(GUIDE_R - 6, angle)
          let inner = toXY(OUTER_R + 4, angle)
          return (
            <line
              key={angle}
              x1={outer.x}
              y1={outer.y}
              x2={inner.x}
              y2={inner.y}
              className="stroke-tidal-navy/30"
              strokeWidth="1"
            />
          )
        })}

        {/* Ring segments */}
        {segments.map((segment) => {
          let midAngle = (segment.startAngle + segment.endAngle) / 2
          let iconPos = toXY((INNER_R + OUTER_R) / 2, midAngle)
          let Icon = segment.icon
          return (
            <g key={segment.id}>
              <path
                d={donutSegmentPath(segment.startAngle, segment.endAngle)}
                className={segment.fill}
              />
              <Icon
                x={iconPos.x - 14}
                y={iconPos.y - 14}
                width={28}
                height={28}
                className="text-white"
              />
            </g>
          )
        })}
      </svg>

      {/* Hub — real HTML text, not baked into the SVG */}
      <div
        style={{ width: `${hubDiameterPct}%`, height: `${hubDiameterPct}%` }}
        className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-tidal-navy px-6 text-center shadow-xl ring-1 ring-white/10"
      >
        <SeatIcon className="h-5 w-5 text-white/60" />
        <p className="mt-2 text-[10px] font-semibold tracking-widest text-white/60 uppercase">
          The Seat
        </p>
        <h3 className="mt-1 font-display text-lg leading-tight font-bold text-white sm:text-xl">
          Operating Partner
        </h3>
        <span aria-hidden="true" className="mt-2.5 h-px w-8 bg-white/25" />
        <p className="mt-2.5 text-xs leading-snug text-white/70">
          Strategic judgment. Accountability. Results.
        </p>
      </div>
    </div>
  )
}
