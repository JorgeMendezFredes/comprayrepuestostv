# CHECKLIST — Implementación comprayrepuestostv.cl

Este archivo es el tracker central de todas las tareas basadas en los 6 archivos MD de especificación.

---

## Estado General

| MD | Nombre | Estado |
|----|--------|--------|
| 1 | Contexto y Requisitos | ✅ Completo |
| 2 | Contenidos por Página | ✅ Completo |
| 3 | Meta Descriptions | ✅ Completo |
| 4 | SEO Técnico (JSON-LD) | ✅ Completo |
| 5 | Diseño y UI | ✅ Completo |
| 6 | Implementación Astro | ✅ Completo |


---

## MD #1 — Contexto y Requisitos

### Datos del Negocio (NAP)
- [x] Nombre: Desarmaduría de Televisores
- [x] Dirección: El Lazo 8555 A, esquina Pasaje Hornillos, Pudahuel
- [x] Teléfono/WhatsApp: +56 9 7479 3492
- [x] Horario: Lunes a domingo, 09:00 a 18:00
- [x] Marcas: LG, Samsung, TCL, Hisense, Xiaomi, AOC, Panasonic, Philips

### Servicios
- [x] Compra de televisores
- [x] Venta de repuestos
- [x] Reparación de televisores
- [x] Controles remotos
- [x] Bases y patas

### Arquitectura del Sitio
- [x] `/` (Inicio)
- [x] `/compra-de-televisores`
- [x] `/repuestos-de-televisores`
- [x] `/reparacion-de-televisores`
- [x] `/productos`
- [x] `/contacto`

### Requisitos SEO Técnicos
- [x] Titles únicos por página
- [x] Meta descriptions únicas
- [x] Headings correctos (H1 único por página)
- [x] URL canónica por página
- [x] robots.txt
- [x] sitemap.xml
- [x] Open Graph básico
- [x] JSON-LD LocalBusiness
- [x] JSON-LD FAQPage
- [x] JSON-LD BreadcrumbList
- [x] NAP consistente

### Requisitos de Conversión (CRO)
- [x] Botón flotante WhatsApp
- [x] Botón "Llamar" visible
- [x] Sección "Cómo funciona" (3 pasos)
- [x] Sección "Cobertura y envíos"
- [x] Sección "Confianza" (4 bullets)
- [x] Sección "Marcas"
- [x] FAQ con preguntas reales
- [x] Link WhatsApp con mensaje prellenado

### Restricciones
- [x] Sin reseñas inventadas
- [x] Sin email (no hay)
- [x] Sin redes sociales (no hay)
- [x] Sin políticas legales extensas
- [x] Sin garantías específicas

---

## MD #2 — Contenidos por Página

### Componentes Reutilizables
- [x] CTAs: "Escríbenos por WhatsApp", "Llámanos ahora", "Cómo llegar"
- [x] Mensajes prellenados WhatsApp (repuestos y compra)
- [x] Bloque "Confianza"
- [x] Bloque "Marcas"
- [x] Bloque "Cobertura y envíos"

### Página A: Inicio `/`
- [x] H1 con keywords + ubicación
- [x] Hero (titular + subtítulo + CTAs)
- [x] Servicios (5 cards)
- [x] Cómo funciona compra (3 pasos)
- [x] Cómo funciona repuestos (3 pasos)
- [x] Cobertura y envíos
- [x] Marcas
- [x] Confianza
- [x] FAQ (3-5 preguntas)
- [x] Contacto rápido

### Página B: Compra `/compra-de-televisores`
- [x] H1 + Hero con CTA
- [x] Qué compramos
- [x] Qué NO compramos (plasma, muy antiguos)
- [x] Proceso (3 pasos)
- [x] Modalidades de entrega/retiro
- [x] Información requerida por WhatsApp
- [x] FAQ

### Página C: Repuestos `/repuestos-de-televisores`
- [x] H1 + Hero con CTA
- [x] Qué vendemos
- [x] Cómo cotizar
- [x] Retiro y despacho
- [x] Marcas
- [x] FAQ

### Página D: Reparación `/reparacion-de-televisores`
- [x] H1 + Hero con CTA
- [x] Qué reparamos
- [x] Proceso
- [x] Nota de garantía (general)
- [x] FAQ

### Página E: Productos `/productos`
- [x] H1 + Hero con CTA
- [x] Controles remotos
- [x] Bases de TV
- [x] Patas de TV
- [x] Cómo cotizar
- [x] Retiro/despacho

### Página F: Contacto `/contacto`
- [x] H1
- [x] Teléfono/WhatsApp visible
- [x] Dirección + Horario
- [x] Cómo llegar
- [x] Micro FAQ
- [x] CTAs

---

## MD #3 — Meta Descriptions

- [x] Archivo creado (estaba vacío)
- [x] Titles por página definidos
- [x] Descriptions por página definidas
- [x] Keywords principales listadas
- [x] Interlinking recomendado

---

## MD #4 — SEO Técnico

### JSON-LD
- [x] LocalBusiness con NAP completo
- [x] WebSite (en Home)
- [x] BreadcrumbList (en páginas internas)
- [x] FAQPage (donde hay FAQ visible)

### Archivos SEO
- [x] robots.txt (Allow all + sitemap)
- [x] sitemap.xml (6 URLs con HTTPS)

### Meta Tags
- [x] Canonical por página
- [x] Open Graph (title, description, url, type)
- [x] Twitter Cards (summary)

### Validación
- [ ] JSON-LD válido (pendiente validar en Rich Results Test)
- [ ] Lighthouse SEO score (pendiente deploy)

---

## MD #5 — Diseño y UI

### Principios de Diseño
- [x] Mobile-first
- [x] CTAs visibles
- [x] Contraste adecuado
- [x] **Paleta de colores premium (verde WhatsApp + azul corporativo)**
- [x] **Tipografía premium (Inter con weights modernos)**
- [x] **Micro-animaciones (pulse, fadeInUp, hover effects)**
- [x] **Sombras y profundidad premium**
- [x] **Gradientes y efectos glassmorphism**

### Layout Global
- [x] Header con menú + CTA WhatsApp
- [x] Footer con NAP + links
- [x] Menú mobile hamburguesa
- [x] **Header con efecto glassmorphism**


### Componentes UI
- [x] Botones (primario, secundario, outline)
- [x] Cards de servicios
- [x] Bloque "3 pasos"
- [x] Bloque "Confianza"
- [x] Bloque "Marcas" (pills)
- [x] FAQ acordeón
- [x] Contact block
- [x] Image placeholder
- [x] Breadcrumbs

### Responsive
- [x] Mobile: 320-480
- [x] Tablet: 768
- [x] Desktop: 1024-1440

---

## MD #6 — Implementación Astro

### Stack
- [x] Astro instalado
- [x] CSS vanilla
- [x] JS mínimo (FAQ accordion, menú mobile)

### Estructura del Proyecto
- [x] `astro.config.mjs`
- [x] `src/content/siteData.ts`
- [x] `src/content/seo.ts`
- [x] `src/layouts/BaseLayout.astro`
- [x] Todos los componentes
- [x] Todas las páginas
- [x] `src/styles/global.css`
- [x] `public/robots.txt`
- [x] `public/sitemap.xml`
- [x] `public/favicon.svg`

### Placeholders de Imágenes
- [x] Hero: imagen del local
- [x] Servicios: vista de stock
- [x] Confianza: mesón/atención
- [x] Compra: TV en recepción
- [x] Repuestos: estanterías
- [x] Reparación: técnico/banco
- [x] Productos: controles/bases
- [x] Contacto: fachada

### Build y Run
- [x] `npm install` funciona
- [x] `npm run dev` funciona
- [x] `npm run build` funciona

---

## Pendientes Globales

1. [x] **Mejorar CSS para diseño profesional/premium**
2. [ ] Agregar imágenes reales
3. [ ] Deploy a hosting
4. [ ] Validar JSON-LD en Rich Results Test
5. [ ] Lighthouse audit
6. [ ] Google Search Console


---

**Última actualización:** 2026-01-02
