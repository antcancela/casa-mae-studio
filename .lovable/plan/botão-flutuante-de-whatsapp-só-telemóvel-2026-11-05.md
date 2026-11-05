# Botão flutuante de WhatsApp (só telemóvel)

## O que vai ver
- Um botão redondo com o ícone do WhatsApp, fixo no canto inferior direito, visível apenas em telemóvel (escondido em computador).
- Ao tocar, abre o WhatsApp com conversa para +351 916 692 521 e uma mensagem pré-escrita: "Olá! Gostava de saber mais sobre o Atelier Casa Mãe." (em inglês quando o site está em inglês).
- Entrada suave e pequena animação ao tocar, de acordo com o estilo do site.
- Aparece em todas as páginas, incluindo a página de links do Instagram.

## Detalhes técnicos
- Adicionar `whatsapp: '351916692521'` em `src/config/site.ts`.
- Novo componente `src/components/WhatsAppButton.tsx`: link `https://wa.me/351916692521?text=...`, `fixed bottom-5 right-5 z-40 md:hidden`, cor verde WhatsApp via token semântico novo em `index.css`, SVG do logótipo inline, `aria-label`, animação Framer Motion (fade/scale in, tap scale).
- Montar em `App.tsx` uma vez, fora das rotas, para cobrir todas as páginas.
- Guardar o número na memória do projeto.
