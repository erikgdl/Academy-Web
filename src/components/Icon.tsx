import type { SVGProps } from 'react'

export type IconName =
  | 'arrow'
  | 'arrowUp'
  | 'check'
  | 'menu'
  | 'close'
  | 'pin'
  | 'clock'
  | 'instagram'
  | 'whatsapp'
  | 'dumbbell'
  | 'bolt'
  | 'heart'
  | 'spark'
  | 'music'
  | 'target'
  | 'plus'
  | 'expand'
  | 'chevronLeft'
  | 'chevronRight'

type Props = SVGProps<SVGSVGElement> & { name: IconName; size?: number }

export default function Icon({ name, size = 20, ...props }: Props) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M4 12h15" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    arrowUp: <><path d="M5 19 19 5M8 5h11v11" /></>,
    check: <path d="m4 12 5 5L20 6" />,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <path d="M5 5 19 19M19 5 5 19" />,
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M20 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.2A8.5 8.5 0 1 1 20 11.5Z" />
        <path d="M9 8.5c.3 2.3 2.2 4.3 4.5 5l1.5-1.2 2 1.1c-.4 1.8-1.6 2.4-3.1 2.1-3.1-.6-5.5-3-6.1-6.1-.3-1.5.4-2.7 2-3.1L11 8Z" />
      </>
    ),
    dumbbell: <><path d="m6 6 12 12M4 8l4-4M2 6l4-4M16 20l4-4M18 22l4-4M4 10l6-6M14 20l6-6" /></>,
    bolt: <path d="m13 2-9 12h7l-1 8 10-13h-7l1-7Z" />,
    heart: (
      <>
        <path d="M20.8 9.2c0 4.5-8.8 10.8-8.8 10.8S3.2 13.7 3.2 9.2a4.7 4.7 0 0 1 8.8-2.1 4.7 4.7 0 0 1 8.8 2.1Z" />
        <path d="M5 12h4l2-3 2 6 2-3h4" />
      </>
    ),
    spark: <><path d="m12 2 1.9 7.1L21 11l-7.1 1.9L12 20l-1.9-7.1L3 11l7.1-1.9L12 2ZM19 18l.5 1.5L21 20l-1.5.5L19 22l-.5-1.5L17 20l1.5-.5L19 18Z" /></>,
    music: (
      <>
        <path d="M9 18V5l11-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="17" cy="16" r="3" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      </>
    ),
    plus: <path d="M12 4v16M4 12h16" />,
    expand: <><path d="M9 4H4v5M15 4h5v5M4 15v5h5M20 15v5h-5" /></>,
    chevronLeft: <path d="m15 18-6-6 6-6" />,
    chevronRight: <path d="m9 18 6-6-6-6" />,
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  )
}
