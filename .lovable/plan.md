## Plano: Refinar UI e Transições do Website

### Nota sobre os "novos modelos de AI"
Os novos modelos de AI no Lovable (Gemini 3, GPT-5.2) são para gerar/editar conteúdo dinâmico (texto, imagens) através de edge functions. Não afetam diretamente o UI estático. O que vou fazer aqui é **refinar manualmente o UI e transições** para um look mais elegante e fluido — alinhado com a direção estética já existente do projeto.

Se o que pretendes for usar AI para gerar novas imagens do portfolio ou textos automaticamente, diz-me e ajusto o plano.

---

### Áreas a refinar

**1. Sistema de animações global (`src/index.css` + `tailwind.config.ts`)**
- Adicionar keyframes mais ricos: `slide-in-up`, `blur-in`, `shimmer`
- Easing curves mais sofisticadas (cubic-bezier "expressive")
- Utility class `.transition-elegant` (duration 500ms, easing suave)
- Utility `.glass` (backdrop-blur + border subtil) para cards premium
- Reduzir motion respeitando `prefers-reduced-motion`

**2. Página Work — transições entre categorias (`src/pages/Work.tsx`)**
- Adicionar fade/slide animation quando se troca de tab (TabsContent com `animate-fade-in`)
- Stagger animation nas imagens da galeria (cada imagem entra com delay incremental)
- Hover effect mais elegante nas thumbnails: overlay com gradient + caption a aparecer suavemente
- Tabs ativos: indicador animado com transição de cor/sombra mais suave
- Lightbox: transição entre imagens com cross-fade em vez de spinner brusco

**3. Página Home (`src/pages/Home.tsx`)**
- Hero: parallax subtil na imagem ao fazer scroll (CSS `transform` + scroll listener leve)
- Stats section: contador animado dos números (50+, 15, 40+) ao entrar em viewport
- Portfolio teaser: melhorar overlay hover (já tem, mas refinar timing e adicionar zoom mais suave)
- Process cards: entrada escalonada quando visível
- Adicionar `IntersectionObserver` hook reutilizável para animar ao entrar em view (em vez de animar tudo no load)

**4. Página About (`src/pages/About.tsx`)**
- Adicionar animações de entrada (atualmente não tem nenhuma)
- Image com hover lift subtil
- Cards com fade-in escalonado

**5. Header (`src/components/Header.tsx`)**
- Refinar transição do menu mobile (já tem, mas melhorar easing)
- Underline animado no nav link ativo (em vez do dot atual) — opcional, manter dot mas adicionar barra subtil

**6. Botões e interações globais**
- Adicionar leve `scale(0.98)` em `:active` para feedback tátil
- Ripple/shine effect subtil em CTAs primários (via pseudo-element, sem JS)

### Detalhes técnicos

- Criar `src/hooks/use-in-view.ts` — hook que usa `IntersectionObserver` para disparar animações ao entrar em viewport
- Criar `src/hooks/use-count-up.ts` — hook para animar contadores numéricos
- Adicionar utilities em `src/index.css`: `.animate-stagger-children`, `.transition-elegant`, `.glass-card`
- Tabs: usar `data-[state=active]` e `data-[state=inactive]` com `animate-fade-in` no TabsContent
- Tudo respeitando `@media (prefers-reduced-motion: reduce)`

### O que NÃO muda
- Paleta de cores (já está coerente com a marca)
- Tipografia (Playfair Display + Inter)
- Estrutura de layout das páginas
- Conteúdo / textos / traduções

### Resultado esperado
Website com sensação mais "premium" e fluida: animações que aparecem ao fazer scroll (não tudo de uma vez), transições suaves entre tabs do portfolio, contadores que sobem nas stats, hovers mais elegantes — mantendo a estética peachy-beige atual.
