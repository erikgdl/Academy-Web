import { useState } from 'react'
import Brand from './Brand'
import Icon from './Icon'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Modalidades', href: '#modalidades' },
  { label: 'Planos', href: '#planos' },
  { label: 'Unidades', href: '#unidades' },
  { label: 'Estrutura', href: '#espaco' },
  { label: 'App de treino', href: '#app' },
]

export default function Header({ onVisit }: { onVisit: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="announcement">
        <div className="container announcement-inner">
          <span>
            8 UNIDADES EM PORTO VELHO <span className="announcement-star">✳</span> UMA D’SENA PERTO DE VOCÊ
          </span>
          <span className="announcement-location">
            <Icon name="pin" size={14} /> Porto Velho, RONDÔNIA
          </span>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Brand light />
          <nav
            className={`main-nav${menuOpen ? ' main-nav--open' : ''}`}
            aria-label="Navegação principal"
            id="main-nav"
          >
            {links.map(link => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <button
              className="button button--lime mobile-nav-cta"
              type="button"
              onClick={() => { setMenuOpen(false); onVisit() }}
            >
              Fale com a gente <Icon name="arrowUp" size={17} />
            </button>
          </nav>
          <button className="button button--lime header-cta" type="button" onClick={onVisit}>
            Fale com a gente <Icon name="arrowUp" size={17} />
          </button>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={26} />
          </button>
        </div>
      </header>
    </>
  )
}
