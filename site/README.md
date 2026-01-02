# comprayrepuestostv.cl

Sitio web para **Desarmaduría de Televisores** — Compra y venta de repuestos de TV en Pudahuel, Santiago.

## 🚀 Quick Start

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📁 Estructura del Proyecto

```
site/
├── CHECKLIST.md              # ← Tracker central de tareas (ver este archivo)
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── favicon.svg
└── src/
    ├── content/
    │   ├── siteData.ts       # Datos NAP, servicios, marcas
    │   └── seo.ts            # Metadata SEO por página
    ├── layouts/
    │   └── BaseLayout.astro
    ├── components/           # 12 componentes reutilizables
    ├── pages/                # 6 páginas
    └── styles/
        └── global.css
```

## 📋 Documentación

| Archivo | Descripción |
|---------|-------------|
| `CHECKLIST.md` | **Tracker central** con todas las tareas de los 6 MD |
| `1.md` | Contexto del negocio y requisitos |
| `2.md` | Contenidos por página (copy) |
| `3.md` | Meta descriptions y titles SEO |
| `4.md` | SEO técnico (JSON-LD, robots, sitemap) |
| `5.md` | Guía de diseño y UI |
| `6.md` | Especificación de implementación Astro |

## 🔧 Stack

- **Framework:** Astro 5.x (SSG)
- **Estilos:** CSS vanilla (sin frameworks)
- **JS:** Mínimo (menú mobile, FAQ accordion)
- **Fonts:** Inter (Google Fonts)

## 📱 Páginas

1. `/` — Inicio
2. `/compra-de-televisores` — Compra de TVs
3. `/repuestos-de-televisores` — Venta de repuestos
4. `/reparacion-de-televisores` — Servicio técnico
5. `/productos` — Controles, bases, patas
6. `/contacto` — Información de contacto

## ✅ SEO Implementado

- Titles y meta descriptions únicos
- Open Graph y Twitter Cards
- JSON-LD: LocalBusiness, WebSite, BreadcrumbList, FAQPage
- robots.txt y sitemap.xml
- URLs canónicas

## 📞 Contacto del Negocio

- **Teléfono/WhatsApp:** +56 9 7479 3492
- **Dirección:** El Lazo 8555 A, esquina Pasaje Hornillos, Pudahuel
- **Horario:** Lunes a domingo, 09:00 a 18:00

---

Desarrollado con Astro 🚀
