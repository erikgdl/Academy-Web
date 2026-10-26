# D’Sena Academia — proposta de redesign

Protótipo de front-end estático e responsivo para a D’Sena Academia, em Porto Velho (RO), desenvolvido com React, TypeScript e Vite. Este repositório é uma proposta de interface independente, não o site oficial publicado.

## Executar

```bash
npm install
npm run dev
```

Para validar: `npm run build` e `npm run lint`.

## Organização

- `src/pages/HomePage.tsx`: página principal e interações.
- `src/components/`: cabeçalho, rodapé, contato, ícones e galeria.
- `src/data/site.ts`: planos, modalidades, unidades, perguntas, contatos e imagens.
- `src/styles/`: estilos base e personalização visual em `dsena.css`.

## Dados e imagens

Valores, planos, endereços, WhatsApp, links para contratação e fotos dos espaços foram consultados no [site oficial da D’Sena](https://dsenaacademia.com.br/). As fotos de FitDance são ilustrativas; as fotos da galeria são as divulgadas pela academia e não identificam uma unidade específica. Confirme preços, condições, grade de aulas e disponibilidade antes de publicar ou contratar. Os links de download apontam para o App Treino (Pacto) listado no rodapé do site oficial.

As escolhas de planos abrem páginas de contratação no site oficial; o contato abre o WhatsApp com uma mensagem pronta. O front-end não realiza cadastro, pagamento ou agendamento automaticamente.
