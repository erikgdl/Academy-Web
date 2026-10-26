import { useEffect, useRef } from 'react'
import { gallery } from '../data/site'
import Icon from './Icon'

export default function GalleryLightbox({ activeIndex, onChange, onClose }: { activeIndex: number | null; onChange: (index: number) => void; onClose: () => void }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (activeIndex === null) return
    previousFocusRef.current = document.activeElement as HTMLElement
    closeButtonRef.current?.focus()
    return () => previousFocusRef.current?.focus()
    // Only move focus when the lightbox opens or closes, not when the photo changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex !== null])

  useEffect(() => {
    if (activeIndex === null) return
    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onChange((activeIndex! - 1 + gallery.length) % gallery.length)
      if (event.key === 'ArrowRight') onChange((activeIndex! + 1) % gallery.length)
      if (event.key === 'Tab') {
        const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>('.lightbox button'))
        const position = buttons.indexOf(document.activeElement as HTMLButtonElement)
        if (position === -1 || (event.shiftKey && position === 0) || (!event.shiftKey && position === buttons.length - 1)) {
          event.preventDefault()
          buttons[event.shiftKey ? buttons.length - 1 : 0]?.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = previousOverflow
    }
  }, [activeIndex, onChange, onClose])

  if (activeIndex === null) return null
  const item = gallery[activeIndex]

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Foto do espaço: ${item.label}`}
      onClick={onClose}
    >
      <button
        ref={closeButtonRef}
        className="lightbox-close icon-button"
        type="button"
        aria-label="Fechar galeria"
        onClick={onClose}
      >
        <Icon name="close" size={27} />
      </button>
      <button
        className="lightbox-prev icon-button"
        type="button"
        aria-label="Foto anterior"
        onClick={event => { event.stopPropagation(); onChange((activeIndex - 1 + gallery.length) % gallery.length) }}
      >
        <Icon name="chevronLeft" size={30} />
      </button>
      <figure onClick={event => event.stopPropagation()}>
        <img src={item.image} alt={item.alt} />
        <figcaption>
          {item.label} <span>{String(activeIndex + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}</span>
        </figcaption>
      </figure>
      <button
        className="lightbox-next icon-button"
        type="button"
        aria-label="Próxima foto"
        onClick={event => { event.stopPropagation(); onChange((activeIndex + 1) % gallery.length) }}
      >
        <Icon name="chevronRight" size={30} />
      </button>
    </div>
  )
}
