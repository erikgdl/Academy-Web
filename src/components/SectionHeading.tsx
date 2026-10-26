import type { ReactNode } from 'react'

export default function SectionHeading({ eyebrow, title, description, dark = false, children }: { eyebrow: string; title: ReactNode; description?: string; dark?: boolean; children?: ReactNode }) {
  return (
    <div className={`section-heading${dark ? ' section-heading--dark' : ''}`}>
      <div>
        <p className="eyebrow">
          <span className="eyebrow-line" /> {eyebrow}
        </p>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      {children}
    </div>
  )
}
