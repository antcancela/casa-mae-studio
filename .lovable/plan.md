# Consultoria Online como página web (PT + EN)

## O que muda
- Nova página `/consultoria` (PT) e `/consultoria/en` (EN), mobile first, com o conteúdo dos PDFs copiado tal como está (sem reescrever textos).
- No `/links`, os botões "Português" / "English" passam a abrir estas páginas em vez dos PDFs.
- Os PDFs deixam de ser usados (ficam guardados, não visíveis).

## Estrutura da página (secções = páginas do PDF)
1. Capa — "Consultoria · Casa à Medida da Família", subtítulo e frase de abertura.
2. Quem é a Casa Mãe? — 4 cartões: Profissional, Pessoal, Maternidade, O Atelier.
3. Para quem é? — 3 cartões "Nova fase" + 3 "Sinal de alerta".
4. Como funciona — 3 passos (Sessão 1, Sessão 2, Entrega) em linha vertical no telemóvel, horizontal em ecrã grande.
5. O que recebem — listas Incluído / Não incluído + nota sobre projeto completo.
6. Valor e marcação — 190€, 100%, MB Way, ~3 sem. em grelha 2x2.
7. Citação final + assinatura e contactos.
- Botões fixos no fundo: "Marcar por mensagem" (WhatsApp/Instagram DM) e troca PT/EN no topo.
- Estilo do site (coral, cantos arredondados, animações suaves ao fazer scroll).

## Detalhes técnicos
- Conteúdo num ficheiro de dados com `pt` e `en`, extraído diretamente dos dois PDFs; uma única página renderiza consoante o idioma da rota.
- Rotas novas em `App.tsx`; SEO (título/descrição) por idioma; adicionar ao sitemap.
- Página sem header/footer do site, como o `/links`, para foco no telemóvel.
