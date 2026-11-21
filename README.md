# A Anatomia do Pecado — página de vendas (MF Publicações)

Página estática para GitHub Pages: `index.html`, `styles.css`, `script.js` e `assets/img/`.

## Como trocar as fotos
Substitua os arquivos em `assets/img/` mantendo os mesmos nomes:
- `hero-livro.webp` (1600×900) / `hero-livro-sm.webp` (800×450) — mockup do topo, 16:9
- `secao-virada.webp` (1024×768) / `secao-virada-sm.webp` (512×384) — seção "A virada", 4:3
- `autor-ilustrado.webp` (800×800) / `autor-ilustrado-sm.webp` (400×400) — "Sobre o autor"
- `divisor.webp` (1024×180) / `divisor-sm.webp` (512×90) — ornamento entre seções
- `capa.webp` (600×900), `capa-300.webp` — capa do livro
- `og-image.jpg` (1200×630) — imagem da prévia no WhatsApp/redes, gerada a partir de `hero-livro.webp`

## Pixels
No `<head>` do `index.html` há blocos comentados do Meta Pixel e do TikTok Pixel. Troque `SEU_PIXEL_ID_META` / `SEU_PIXEL_ID_TIKTOK` e remova os comentários.

## Redes sociais
No rodapé há um bloco comentado para Instagram e WhatsApp.

## Garantia
O texto atual cita o direito de arrependimento de 7 dias do CDC (art. 49). Se o produto tiver garantia configurada na Kiwify, atualize o texto na seção `#oferta` e no FAQ.
