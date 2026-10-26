import { contact, whatsappUrl } from '../data/site'
import Brand from './Brand'
import Icon from './Icon'

export default function Footer({ onVisit }: { onVisit: () => void }) {
  return (
    <footer className="site-footer" id="contato">
      <div className="container">
        <div className="footer-main">
          <div className="footer-about">
            <Brand light />
            <p>Seu treino tem lugar em Porto Velho. Encontre a unidade D’Sena mais perto de você.</p>
            <div className="footer-social">
              <a href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram da D’Sena">
                <Icon name="instagram" />
              </a>
              <a
                href={whatsappUrl('Olá, D’Sena! Gostaria de saber mais sobre os planos e as unidades.')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conversar pelo WhatsApp"
              >
                <Icon name="whatsapp" />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>
            <a href="#inicio">Início</a>
            <a href="#modalidades">Modalidades</a>
            <a href="#planos">Planos e preços</a>
            <a href="#unidades">Unidades</a>
            <a href="#espaco">Estrutura</a>
            <a href="#app">App de treino</a>
          </div>

          <div className="footer-column">
            <h3>Porto Velho, RO</h3>
            <p><Icon name="pin" size={18} />8 unidades pela cidade</p>
            <a href="#unidades">Encontre uma unidade perto de você</a>
            <a href={whatsappUrl('Olá, D’Sena! Gostaria de saber mais.')} target="_blank" rel="noopener noreferrer">
              (69) 98449-2003
            </a>
            <a href={contact.jobs} target="_blank" rel="noopener noreferrer">Trabalhe conosco</a>
          </div>

          <div className="footer-column footer-visit">
            <h3>Pronto para começar?</h3>
            <p>Tem uma D’Sena pronta para receber você.</p>
            <button className="button button--lime" type="button" onClick={onVisit}>
              Fale com a equipe <Icon name="arrowUp" size={18} />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} D’Sena Academia · SENA ACADEMIA LTDA · CNPJ 17.974.904/0001-10</span>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
      </div>
    </footer>
  )
}
