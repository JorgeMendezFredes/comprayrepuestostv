// SEO metadata por página
import { siteData } from './siteData';

export interface PageSEO {
    title: string;
    description: string;
    canonical: string;
    og: {
        title: string;
        description: string;
        url: string;
        type: string;
    };
    twitter: {
        card: string;
        title: string;
        description: string;
    };
    breadcrumbs: { name: string; url: string }[];
    hasFAQ: boolean;
}

const domain = siteData.domain;

export const seoData: Record<string, PageSEO> = {
    "/": {
        title: "Desarmaduría de Televisores | Compra y Repuestos TV en Pudahuel",
        description: "Compramos televisores en cualquier estado y vendemos repuestos multimarcas. +30 años de experiencia. Atención por WhatsApp. Pudahuel, Santiago.",
        canonical: `${domain}/`,
        og: {
            title: "Desarmaduría de Televisores | Compra y Repuestos TV",
            description: "Compramos televisores en cualquier estado y vendemos repuestos multimarcas. +30 años de experiencia en Pudahuel.",
            url: `${domain}/`,
            type: "website"
        },
        twitter: {
            card: "summary",
            title: "Desarmaduría de Televisores | Compra y Repuestos TV",
            description: "Compramos televisores en cualquier estado y vendemos repuestos multimarcas. +30 años de experiencia."
        },
        breadcrumbs: [
            { name: "Inicio", url: `${domain}/` }
        ],
        hasFAQ: true
    },

    "/compra-de-televisores": {
        title: "Compra de Televisores en Santiago | Desarmaduría Pudahuel",
        description: "Compramos televisores quebrados, dañados o en mal estado. Retiro según cercanía. Cotización rápida por WhatsApp. +30 años comprando TVs.",
        canonical: `${domain}/compra-de-televisores`,
        og: {
            title: "Compra de Televisores | Desarmaduría de Televisores",
            description: "Compramos televisores en cualquier estado. Retiro según cercanía. Cotización rápida por WhatsApp.",
            url: `${domain}/compra-de-televisores`,
            type: "website"
        },
        twitter: {
            card: "summary",
            title: "Compra de Televisores | Desarmaduría de Televisores",
            description: "Compramos televisores en cualquier estado. Retiro según cercanía. Cotización rápida."
        },
        breadcrumbs: [
            { name: "Inicio", url: `${domain}/` },
            { name: "Compra de Televisores", url: `${domain}/compra-de-televisores` }
        ],
        hasFAQ: true
    },

    "/repuestos-de-televisores": {
        title: "Repuestos de Televisores en Santiago | Venta Multimarcas",
        description: "Repuestos de TV para LG, Samsung, TCL, Hisense y más. Stock según disponibilidad. Despacho nacional. Cotiza por WhatsApp.",
        canonical: `${domain}/repuestos-de-televisores`,
        og: {
            title: "Repuestos de Televisores | Desarmaduría de Televisores",
            description: "Repuestos de TV multimarcas. Stock según disponibilidad. Despacho nacional previo pago.",
            url: `${domain}/repuestos-de-televisores`,
            type: "website"
        },
        twitter: {
            card: "summary",
            title: "Repuestos de Televisores | Desarmaduría de Televisores",
            description: "Repuestos de TV multimarcas. Stock según disponibilidad. Despacho nacional."
        },
        breadcrumbs: [
            { name: "Inicio", url: `${domain}/` },
            { name: "Repuestos de Televisores", url: `${domain}/repuestos-de-televisores` }
        ],
        hasFAQ: true
    },

    "/reparacion-de-televisores": {
        title: "Reparación de Televisores en Pudahuel | Servicio Técnico TV",
        description: "Reparamos televisores: cambio de pantalla, LEDs, placas, formateo. Evaluación y cotización. Atención en local y por WhatsApp.",
        canonical: `${domain}/reparacion-de-televisores`,
        og: {
            title: "Reparación de Televisores | Desarmaduría de Televisores",
            description: "Servicio técnico de TV: cambio de pantalla, LEDs, placas, formateo. Evaluación y cotización.",
            url: `${domain}/reparacion-de-televisores`,
            type: "website"
        },
        twitter: {
            card: "summary",
            title: "Reparación de Televisores | Desarmaduría de Televisores",
            description: "Servicio técnico de TV: cambio de pantalla, LEDs, placas, formateo."
        },
        breadcrumbs: [
            { name: "Inicio", url: `${domain}/` },
            { name: "Reparación de Televisores", url: `${domain}/reparacion-de-televisores` }
        ],
        hasFAQ: true
    },

    "/productos": {
        title: "Controles Remotos, Bases y Patas para TV | Accesorios TV",
        description: "Controles remotos con pilas incluidas, bases y patas para televisores. Múltiples marcas. Retiro en local o despacho nacional.",
        canonical: `${domain}/productos`,
        og: {
            title: "Productos y Accesorios para TV | Desarmaduría de Televisores",
            description: "Controles remotos, bases y patas para televisores. Múltiples marcas disponibles.",
            url: `${domain}/productos`,
            type: "website"
        },
        twitter: {
            card: "summary",
            title: "Productos y Accesorios para TV | Desarmaduría de Televisores",
            description: "Controles remotos, bases y patas para televisores. Múltiples marcas."
        },
        breadcrumbs: [
            { name: "Inicio", url: `${domain}/` },
            { name: "Productos", url: `${domain}/productos` }
        ],
        hasFAQ: false
    },

    "/contacto": {
        title: "Contacto | Desarmaduría de Televisores en Pudahuel",
        description: "Contáctanos por WhatsApp o teléfono. Dirección: El Lazo 8555 A, Pudahuel. Horario: Lunes a domingo 09:00 a 18:00.",
        canonical: `${domain}/contacto`,
        og: {
            title: "Contacto | Desarmaduría de Televisores",
            description: "WhatsApp, teléfono y dirección. Atención de lunes a domingo en Pudahuel, Santiago.",
            url: `${domain}/contacto`,
            type: "website"
        },
        twitter: {
            card: "summary",
            title: "Contacto | Desarmaduría de Televisores",
            description: "WhatsApp, teléfono y dirección. Atención de lunes a domingo."
        },
        breadcrumbs: [
            { name: "Inicio", url: `${domain}/` },
            { name: "Contacto", url: `${domain}/contacto` }
        ],
        hasFAQ: true
    }
};

// JSON-LD LocalBusiness
export function getLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": siteData.siteName,
        "url": siteData.domain,
        "telephone": siteData.phoneDisplay,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": siteData.addressLine,
            "addressLocality": siteData.comuna,
            "addressRegion": siteData.region,
            "addressCountry": siteData.countryCode
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "09:00",
            "closes": "18:00"
        },
        "areaServed": siteData.country,
        "description": "Compra de televisores en cualquier estado, venta de repuestos multimarcas y servicio técnico de TV. Más de 30 años de experiencia."
    };
}

// JSON-LD WebSite
export function getWebSiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": siteData.siteName,
        "url": siteData.domain
    };
}

// JSON-LD BreadcrumbList
export function getBreadcrumbSchema(breadcrumbs: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };
}

// JSON-LD FAQPage
export function getFAQSchema(faqItems: { question: string; answer: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };
}
