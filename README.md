# Valma · Tienda de ropa femenina

Cinematic Mediterranean editorial — bodys, blusas y camisetas.

## Stack

- Next.js 15 + App Router · React 19 · TypeScript
- Tailwind CSS v4 (config-en-CSS vía `@theme`)
- Framer Motion · GSAP (reservado para `/edits`)
- Zustand + persist (carrito en localStorage)
- next/font (Fraunces variable + Geist)

## Inicio

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Comandos

| Comando | Acción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Servir build |
| `npm run typecheck` | Validar tipos |

## Estructura

```
src/
├── app/                  # App Router (layout, page, globals.css)
├── components/
│   ├── layout/           # AnnouncementBar, Navigation, Footer
│   ├── home/             # Secciones del homepage
│   ├── product/          # ProductCard
│   └── cart/             # CartDrawer
├── data/products.ts      # Catálogo (placeholder hasta integrar CMS)
├── lib/
│   ├── cart-store.ts     # Zustand
│   ├── currency.ts       # Formato COP
│   ├── whatsapp.ts       # Generador de checkout por WhatsApp
│   └── utils.ts          # cn()
└── types/product.ts
```

## Tokens de marca

Todos en `src/app/globals.css` dentro de `@theme`:

| Token | Valor | Uso |
|---|---|---|
| `--color-ivory` | `#F4EFE8` | Fondo principal |
| `--color-bone` | `#E8DFD3` | Fondos secundarios |
| `--color-champagne` | `#D9C5A7` | Acento cálido |
| `--color-wine` | `#5A1F2A` | Acento de campaña |
| `--color-chocolate` | `#3B2A20` | Texto/acento profundo |
| `--color-espresso` | `#20160F` | Footer / sección oscura |
| `--color-ink` | `#0E0E0D` | CTAs fuertes |

Tipografía:
- `font-display` → Fraunces (variable, opsz dinámico, soft + wonk)
- `font-display-italic` → Fraunces itálica con SOFT 100 / WONK 1
- `font-sans` → Geist

## Imágenes

Las URLs de Unsplash en `data/products.ts` y los componentes home son **placeholders editoriales**. Cuando lleguen las campañas IA reales:
1. Reemplazar URLs en `src/data/products.ts`
2. Reemplazar URLs en `src/components/home/{Hero,FeaturedCategories,EditorialBlock}.tsx`

## Checkout WhatsApp

Sin pasarela. El botón "Finalizar por WhatsApp" en el carrito construye un mensaje con todas las líneas y abre `wa.me/573203903221?text=...`.

Cambiar número en `src/lib/whatsapp.ts` (constante `VALMA_WHATSAPP`).

## Próximos pasos

- [ ] PLP: `/shop` y `/shop/[category]` con filtros
- [ ] PDP: `/product/[slug]` con galería + selector de talla
- [ ] Edit cinematográfico: `/edits/[slug]` con scroll-driven GSAP
- [ ] i18n ES/EN con next-intl
- [ ] Páginas de soporte (envíos, cambios, guía de tallas)
- [ ] Reemplazo de placeholders por campañas IA reales
