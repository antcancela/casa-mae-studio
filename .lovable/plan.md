# Consultoria Online na página de links

## O que muda
- No topo da página de links (antes de "Marcar conversa") aparece um novo botão em destaque: **"Consultoria Online"**.
- Ao tocar, o botão abre duas opções lado a lado: **Português** e **English**.
- Cada opção abre o PDF correspondente diretamente no telemóvel (num novo separador), sem descarregar.
- Os PDFs ficam apenas na página de links — o resto do site não muda.

## Detalhes técnicos
- Carregar os dois PDFs como ficheiros hospedados (Lovable Assets) e guardar os ponteiros em `src/assets/`.
- Em `src/pages/Links.tsx`: botão principal que expande (animação suave) para dois botões PT / EN com `target="_blank"`.
- Atualizar a memória da página de links com esta regra.
