import { useEffect, useRef, useState } from 'react'
import { units, whatsappUrl } from '../data/site'
import Icon from './Icon'

export default function ContactDialog({ open, onClose, plan }: { open: boolean; onClose: () => void; plan?: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [name, setName] = useState('')
  const [unit, setUnit] = useState('')

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  const message = `Olá, D’Sena! ${name.trim() ? `Meu nome é ${name.trim()}. ` : ''}${plan ? `Tenho interesse no plano ${plan}. ` : 'Gostaria de saber mais sobre os planos e as aulas. '}${unit ? `Tenho interesse na unidade ${unit}.` : 'Podem me ajudar?'}`

  return (
    <dialog
      ref={dialogRef}
      className="contact-dialog"
      onClose={onClose}
      onClick={event => { if (event.target === dialogRef.current) onClose() }}
      aria-labelledby="contact-title"
    >
      <div className="dialog-content">
        <button className="dialog-close icon-button" type="button" aria-label="Fechar janela" onClick={onClose}>
          <Icon name="close" />
        </button>
        <p className="eyebrow">
          <span className="eyebrow-line" /> VAMOS CONVERSAR
        </p>
        <h2 id="contact-title">BORA <em>TREINAR?</em></h2>
        <p>
          Escolha a unidade que combina com você e fale diretamente com a equipe D’Sena pelo WhatsApp.
        </p>
        <label htmlFor="visitor-name">Como podemos chamar você?</label>
        <input
          id="visitor-name"
          type="text"
          autoComplete="name"
          placeholder="Seu nome (opcional)"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <label htmlFor="visitor-unit">Qual unidade fica melhor para você?</label>
        <select id="visitor-unit" value={unit} onChange={event => setUnit(event.target.value)}>
          <option value="">Ainda não sei</option>
          {units.map(item => <option key={item.name} value={item.name}>{item.name}</option>)}
        </select>
        <a
          className="button button--dark dialog-action"
          href={whatsappUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
        >
          <Icon name="whatsapp" size={19} /> Continuar no WhatsApp <Icon name="arrowUp" size={18} />
        </a>
        <span className="dialog-note">
          Você será direcionado para o WhatsApp com a mensagem pronta para enviar.
        </span>
      </div>
    </dialog>
  )
}
