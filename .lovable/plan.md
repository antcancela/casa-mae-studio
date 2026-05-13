## Objetivo

Reforçar visualmente a secção **"Como Trabalhamos"** (Home, dois caminhos: Chave na Mão / Consultoria) com a linguagem arquitetónica de **plantas e alçados**, recuperando o vocabulário gráfico que já tínhamos no `TechnicalArtifacts` mas integrando-o de forma subtil e elegante.

## O que mudar

### 1. Background da secção — planta arquitetónica desenhada
- Adicionar um SVG absoluto, em camada `pointer-events-none`, atrás do conteúdo da `<section>` do processo.
- Linhas finas de planta (paredes, divisórias, portas com arcos), `stroke="currentColor"` com opacidade muito baixa (~6–10% sobre `--foreground`) para ficar como marca-de-água.
- Animação `pathLength: 0 → 1` ao entrar em viewport (uma só vez, easing `[0.22,1,0.36,1]`, ~1.6s, stagger leve).
- Gradiente radial/máscara para esbater bordas e não competir com os cartões.
- Respeitar `useReducedMotion` (sem animação de desenho nesses casos).

### 2. Substituir os ícones lucide por mini-emblemas SVG arquitetónicos
Em vez de `Wrench` e `Lightbulb` no círculo flutuante de cada cartão, usar dois pequenos SVGs custom, animados (draw-in) na entrada:

- **Chave na Mão** → ícone-emblema de **planta** (rectângulo com divisória interna + arco de porta). Sugere "espaço completo e construído".
- **Consultoria** → ícone-emblema de **alçado** (silhueta de fachada com janelas e linha de chão tracejada). Sugere "vista, orientação, leitura".

Características:
- Mantêm o atual contentor circular com gradiente `from-primary/20 to-primary/5`, sombra interna e `animate-float`.
- `stroke="hsl(var(--primary))"`, `strokeWidth` ~1.5–2, `fill="none"` (preenchimentos pontuais com `primary/10`).
- Animação de `pathLength` na entrada do cartão; hover mantém `scale + rotate` já existente.

### 3. Pequenos detalhes de cota / etiqueta mono
- Por baixo do título de cada cartão (ou junto ao emblema), pequena etiqueta `font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground`:
  - Chave na Mão → `Planta · 01`
  - Consultoria → `Alçado · 02`
- Reforça a linguagem técnica sem ruído.

## O que NÃO muda
- Copy, estrutura dos passos, CTA Calendly, layout de duas colunas, Tilt, Magnetic, sombras gerais e cores semânticas.
- Restantes secções da Home.

## Notas técnicas
- Tudo dentro de `src/pages/Home.tsx` (background + substituição dos ícones inline) — sem novos ficheiros, exceto se preferires extrair os 2 emblemas para `src/components/icons/PlanIcon.tsx` e `ElevationIcon.tsx` para limpeza.
- Remover imports não usados de `Wrench` e `Lightbulb` quando substituídos.
- Tokens semânticos em HSL (sem cores hardcoded), conforme design system.
- Performance: SVG estático leve; animações via `framer-motion` `whileInView` com `once: true`.

## Resultado esperado
A secção passa a ler-se como uma "prancha de projeto": fundo discreto com traçado de planta a desenhar-se, e cada caminho identificado por um emblema arquitetónico (planta vs alçado), coerente com a identidade do estúdio.
