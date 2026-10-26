import { useCallback, useState } from 'react'
import ContactDialog from '../components/ContactDialog'
import Footer from '../components/Footer'
import GalleryLightbox from '../components/GalleryLightbox'
import Header from '../components/Header'
import Icon from '../components/Icon'
import SectionHeading from '../components/SectionHeading'
import { categories, classes, contact, faqs, gallery, images, mapsUrl, plans, units, whatsappUrl, type Category } from '../data/site'

export default function HomePage() {
  const [category, setCategory] = useState<Category>('Todas')
  const [contactOpen, setContactOpen] = useState(false)
  const [activeImage, setActiveImage] = useState<number | null>(null)
  const closeLightbox = useCallback(() => setActiveImage(null), [])

  return (
    <>
      <div id="inicio" className="top-anchor" />
      <div className="hero-shell">
        <Header onVisit={() => setContactOpen(true)} />
        <section
          className="hero"
          aria-labelledby="hero-title"
          style={{ backgroundImage: `linear-gradient(90deg, rgba(11, 11, 11, .98) 0%, rgba(11, 11, 11, .88) 33%, rgba(11, 11, 11, .24) 70%, rgba(11, 11, 11, .1) 100%), url('${images.hero}')` }}
        >
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="hero-eyebrow"><span className="live-dot" /> D’SENA ACADEMIA · PORTO VELHO, RO</p>
              <h1 id="hero-title">
                SEU TREINO.<br />SUA CIDADE.<br /><span>SUA D’SENA.</span>
              </h1>
              <p className="hero-description">
                Mais do que uma academia. Oito lugares para encontrar sua força, no seu ritmo e perto de você.
              </p>
              <div className="hero-actions">
                <a className="button button--lime button--large" href="#planos">
                  Encontrar meu plano <Icon name="arrowUp" size={20} />
                </a>
                <a className="text-link text-link--light" href="#unidades">
                  Ver as 8 unidades <Icon name="arrow" size={18} />
                </a>
              </div>
              <div className="hero-stats" aria-label="Diferenciais da D’Sena">
                <div><strong>08</strong><span>unidades em<br />Porto Velho</span></div>
                <div><strong>03</strong><span>planos para<br />você escolher</span></div>
                <div><strong>01</strong><span>treino do<br />seu jeito</span></div>
              </div>
            </div>
            <span className="hero-side-label">D’SENA ACADEMIA — PORTO VELHO / RO</span>
          </div>
          <a className="hero-scroll" href="#sobre">
            <span>CONHEÇA A D’SENA</span><span className="scroll-line" />
          </a>
        </section>
      </div>

      <div className="value-strip">
        <div className="container value-strip-inner">
          <span>MAIS PERTO DE VOCÊ</span><span className="value-star">✳</span>
          <span>TREINE EM QUALQUER UNIDADE</span><span className="value-star">✳</span>
          <span>SEU TREINO, SEU RITMO</span><span className="value-star">✳</span>
          <span>MAIS PERTO DE VOCÊ</span>
        </div>
      </div>

      <main>
        <section className="about section-pad" id="sobre">
          <div className="container about-grid">
            <div className="about-visual">
              <img src={images.about} alt="Visão ampla dos equipamentos em uma unidade D’Sena" loading="lazy" />
              <div className="about-badge"><span>✳</span><strong>8 UNIDADES.<br />UM SÓ OBJETIVO.</strong></div>
              <div className="about-image-label">01 / FEITA PARA SEU TREINO</div>
            </div>
            <div className="about-copy">
              <p className="eyebrow"><span className="eyebrow-line" /> ACADEMIA DE PORTO VELHO</p>
              <h2>ESTRUTURA PARA IR <em>MAIS LONGE.</em></h2>
              <p>
                A D’Sena está em diferentes pontos de Porto Velho para o seu treino caber na vida real. Escolha a unidade mais conveniente e aproveite uma estrutura feita para continuar evoluindo.
              </p>
              <p>Com orientação, montagem de treino e o app na palma da mão, você tem mais motivos para não parar.</p>
              <div className="about-points">
                <div><span><Icon name="check" size={18} /></span>Acesso a todas as unidades nos planos divulgados</div>
                <div><span><Icon name="check" size={18} /></span>Montagem de treino gratuita</div>
                <div><span><Icon name="check" size={18} /></span>Parceria com Wellhub (Gympass)</div>
              </div>
              <a className="text-link" href="#unidades">Encontre sua unidade <Icon name="arrowUp" size={19} /></a>
            </div>
          </div>
        </section>

        <section className="modalities section-pad" id="modalidades">
          <div className="container">
            <SectionHeading
              eyebrow="ESCOLHA SEU MOVIMENTO"
              title={<>DO SEU JEITO.<br /><em>NO SEU RITMO.</em></>}
              description="Musculação, treino aeróbico e aulas coletivas para fazer do movimento parte da sua rotina. Consulte a programação da sua unidade."
            />
            <div className="filter-tabs" role="group" aria-label="Filtrar modalidades">
              {categories.map(item => (
                <button
                  key={item}
                  className={`filter-tab${category === item ? ' filter-tab--active' : ''}`}
                  type="button"
                  aria-pressed={category === item}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="modalities-grid">
              {classes.filter(item => category === 'Todas' || category === item.category).map((item, index) => (
                <article
                  className="modality-card"
                  key={item.title}
                  style={{ backgroundImage: `linear-gradient(180deg, rgba(9, 9, 9, .04) 15%, rgba(9, 9, 9, .9) 100%), url('${item.image}')` }}
                >
                  <span className="modality-icon"><Icon name={item.icon} size={24} /></span>
                  <div className="modality-card-content">
                    <span className="card-index">0{index + 1} / {item.category.toUpperCase()}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <a
                      href={whatsappUrl(`Olá, D’Sena! Gostaria de saber mais sobre ${item.title} e os horários disponíveis.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Consultar ${item.title} pelo WhatsApp`}
                      className="card-arrow"
                    >
                      <Icon name="arrowUp" size={20} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <p className="modalities-note">
              FitDance e Jump são aulas coletivas. <a href={whatsappUrl('Olá, D’Sena! Gostaria de consultar a grade de aulas coletivas.')} target="_blank" rel="noopener noreferrer">Consulte horários no WhatsApp <Icon name="arrow" size={16} /></a>
            </p>
          </div>
        </section>

        <section className="plans section-pad" id="planos">
          <div className="container">
            <SectionHeading
              dark
              eyebrow="PLANOS D’SENA"
              title={<>COMEÇAR É SIMPLES.<br /><em>ESCOLHA O SEU.</em></>}
              description="Três opções para diferentes momentos. Compare os valores divulgados e veja as condições de cada plano antes de contratar."
            />
            <div className="plans-grid">
              {plans.map(plan => (
                <article key={plan.name} className={`plan-card${plan.featured ? ' plan-card--featured' : ''}`}>
                  {plan.featured && <span className="plan-popular">MELHOR CUSTO-BENEFÍCIO <span>✳</span></span>}
                  <div className="plan-top">
                    <p className="plan-name">PLANO D’SENA</p>
                    <h3>{plan.name}</h3>
                    <p>{plan.description}</p>
                  </div>
                  <div className="plan-price"><span>R$</span><strong>{plan.price}</strong><span>/mês</span></div>
                  <p className="plan-billing">A partir de · {plan.period}</p>
                  <a className={`button ${plan.featured ? 'button--dark' : 'button--outline'} plan-button`} href={plan.checkout} target="_blank" rel="noopener noreferrer">
                    Conhecer o plano <Icon name="arrowUp" size={18} />
                  </a>
                  <div className="plan-divider" />
                  <p className="plan-includes">O QUE ESTÁ INCLUSO</p>
                  <ul>{plan.features.map(feature => <li key={feature}><Icon name="check" size={17} />{feature}</li>)}</ul>
                  <p className="plan-detail">{plan.billing}</p>
                </article>
              ))}
            </div>
            <p className="plans-footnote">
              Valores “a partir de” publicados no site oficial da D’Sena. Condições, disponibilidade e reajustes devem ser confirmados na contratação. <button className="inline-button" type="button" onClick={() => setContactOpen(true)}>Tire suas dúvidas com a equipe.</button>
            </p>
          </div>
        </section>

        <section className="experience section-pad" id="app">
          <div className="container experience-grid">
            <div className="experience-copy">
              <p className="eyebrow"><span className="eyebrow-line" /> SUA EVOLUÇÃO, SEM COMPLICAÇÃO</p>
              <h2>TREINO NA MÃO.<br /><em>APOIO DE PERTO.</em></h2>
              <p>Professores para orientar seu caminho, montagem de treino gratuita e um aplicativo para acompanhar sua rotina. Você foca no próximo passo.</p>
              <div className="experience-features">
                <div><span>01</span><strong>Montagem de treino</strong><p>Comece com uma orientação pensada para a sua rotina.</p></div>
                <div><span>02</span><strong>App de treino</strong><p>Acompanhe exercícios e evolução pelo celular.</p></div>
                <div><span>03</span><strong>Você em movimento</strong><p>Treine na unidade D’Sena que fizer mais sentido para você.</p></div>
              </div>
              <div className="app-links">
                <a href={contact.appAndroid} target="_blank" rel="noopener noreferrer">Baixar para Android <Icon name="arrowUp" size={16} /></a>
                <a href={contact.appIos} target="_blank" rel="noopener noreferrer">Baixar para iOS <Icon name="arrowUp" size={16} /></a>
              </div>
            </div>
            <div className="experience-visual">
              <span className="experience-visual-label">D’SENA NO SEU DIA A DIA</span>
              <img src={images.app} alt="Imagem de divulgação do aplicativo de treino da D’Sena" loading="lazy" />
              <span className="experience-stamp">VÁ ALÉM <span>✳</span></span>
            </div>
          </div>
        </section>

        <section className="units section-pad" id="unidades">
          <div className="container">
            <SectionHeading
              eyebrow="A D’SENA É DAQUI"
              title={<>TEM UMA D’SENA<br /><em>PERTO DE VOCÊ.</em></>}
              description="Oito unidades em Porto Velho. Escolha a que encaixa melhor no seu dia e abra a rota no mapa."
            />
            <div className="units-grid">
              {units.map((unit, index) => (
                <article className="unit-card" key={unit.name}>
                  <span className="unit-number">UNIDADE {String(index + 1).padStart(2, '0')}</span>
                  <h3>{unit.name}</h3>
                  <p><Icon name="pin" size={16} />{unit.address}</p>
                  <a href={mapsUrl(unit.address)} target="_blank" rel="noopener noreferrer" aria-label={`Ver rota para a unidade ${unit.name}`}>
                    Ver no mapa <Icon name="arrowUp" size={17} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="space section-pad" id="espaco">
          <div className="container">
            <SectionHeading
              eyebrow="CONHEÇA POR DENTRO"
              title={<>ESPAÇO PARA<br /><em>SE SUPERAR.</em></>}
              description="Veja fotos reais da estrutura D’Sena. Quer conhecer pessoalmente? Encontre a unidade mais próxima de você."
            >
              <a className="text-link heading-link" href="#unidades">Ver unidades <Icon name="arrowUp" size={19} /></a>
            </SectionHeading>
            <div className="gallery-grid">
              {gallery.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  className={`gallery-item gallery-item--${index + 1}`}
                  onClick={() => setActiveImage(index)}
                  aria-label={`Ampliar foto: ${item.label}`}
                >
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <span className="gallery-caption">{item.label}<span><Icon name="expand" size={19} /></span></span>
                </button>
              ))}
            </div>
            <p className="gallery-note">Imagens divulgadas pela D’Sena. A estrutura pode variar entre as unidades.</p>
          </div>
        </section>

        <section className="faq section-pad" id="duvidas">
          <div className="container faq-grid">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> A GENTE TE AJUDA</p>
              <h2>FICOU ALGUMA <em>DÚVIDA?</em></h2>
              <p>As respostas para ajudar você a escolher como começar.</p>
              <button className="text-link" type="button" onClick={() => setContactOpen(true)}>
                Fale com a D’Sena <Icon name="arrowUp" size={19} />
              </button>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details key={faq.question}>
                  <summary>
                    <span className="faq-number">0{index + 1}</span>
                    <span>{faq.question}</span>
                    <span className="faq-plus"><Icon name="plus" size={20} /></span>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-cta-inner">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> SEU PRÓXIMO PASSO</p>
              <h2>O SEU LUGAR<br />É <em>AQUI.</em></h2>
              <p>Encontre sua unidade, escolha seu plano e bora treinar com a D’Sena.</p>
              <button className="button button--dark button--large" type="button" onClick={() => setContactOpen(true)}>
                Conversar com a equipe <Icon name="arrowUp" size={20} />
              </button>
            </div>
            <div className="cta-decoration" aria-hidden="true">D<span>✳</span></div>
          </div>
        </section>
      </main>
      <Footer onVisit={() => setContactOpen(true)} />
      <ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} />
      <GalleryLightbox activeIndex={activeImage} onChange={setActiveImage} onClose={closeLightbox} />
    </>
  )
}
