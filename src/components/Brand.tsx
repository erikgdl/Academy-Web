import { images } from '../data/site'

export default function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      className={`brand${light ? ' brand--light' : ''}`}
      href="#inicio"
      aria-label="D’Sena Academia — ir para o início"
    >
      <img className="brand-logo" src={images.logo} alt="D’Sena Academia" />
    </a>
  )
}
