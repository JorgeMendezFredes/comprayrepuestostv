// Datos centralizados del sitio - NAP y contenido reutilizable
export const siteData = {
    // Información del negocio (NAP)
    siteName: "Desarmaduría de Televisores",
    domain: "https://www.comprayrepuestostv.cl",

    // Contacto
    phoneDisplay: "+56 9 7479 3492",
    phoneDigits: "56974793492",
    phoneTel: "+56974793492",

    // Ubicación
    addressLine: "El Lazo 8555 A, esquina Pasaje Hornillos",
    comuna: "Pudahuel",
    city: "Santiago",
    region: "Región Metropolitana",
    country: "Chile",
    countryCode: "CL",

    // Horario
    openingHoursText: "Lunes a domingo, 09:00 a 18:00",
    openingHoursShort: "L-D 09:00–18:00",

    // Servicios
    services: [
        { slug: "compra-de-televisores", name: "Compra de Televisores", shortDesc: "Compramos televisores en cualquier estado" },
        { slug: "repuestos-de-televisores", name: "Repuestos de Televisores", shortDesc: "Repuestos según disponibilidad" },
        { slug: "reparacion-de-televisores", name: "Reparación de Televisores", shortDesc: "Servicio técnico profesional" },
        { slug: "productos", name: "Productos", shortDesc: "Controles, bases y patas" }
    ],

    // Marcas
    brands: ["LG", "Samsung", "TCL", "Hisense", "Xiaomi", "AOC", "Panasonic", "Philips"],

    // Mensajes WhatsApp prellenados
    whatsappMessages: {
        generic: "Hola, quiero cotizar. ¿Me puedes ayudar?",
        repuestos: "Hola, necesito cotizar un repuesto para mi TV. Marca y modelo: ____. Repuesto que busco: ____.",
        compra: "Hola, quiero vender un televisor. Marca y modelo: ____. Estado: ____. ¿Cuánto ofrecen?",
        reparacion: "Hola, necesito cotizar una reparación para mi TV. Marca y modelo: ____. Problema: ____.",
        productos: "Hola, necesito cotizar un accesorio para mi TV. Marca y modelo: ____. Producto: ____."
    },

    // Bullets de confianza
    trustPoints: [
        { icon: "calendar", text: "Más de 30 años en el rubro" },
        { icon: "check", text: "Compra y repuestos multimarcas" },
        { icon: "phone", text: "Atención directa por WhatsApp y teléfono" },
        { icon: "location", text: "Ubicación clara en Pudahuel" }
    ],

    // FAQ oficiales
    faqItems: [
        {
            question: "¿Cuánto cuesta?",
            answer: "El precio depende del producto o servicio específico. Contáctanos por WhatsApp con los detalles para darte una cotización personalizada."
        },
        {
            question: "¿Tienen stock?",
            answer: "El stock varía según el producto. Consulta por WhatsApp con la marca y modelo para confirmar disponibilidad."
        },
        {
            question: "¿Despachan a domicilio?",
            answer: "Sí, realizamos despachos a nivel nacional previo pago del envío. También puedes retirar en nuestro local."
        },
        {
            question: "¿Retiran televisores a domicilio?",
            answer: "Sí, retiramos televisores según ubicación y cercanía. Coordina por WhatsApp para evaluar tu zona."
        },
        {
            question: "¿Hacen presupuesto a domicilio?",
            answer: "Sí, dependiendo de la ubicación podemos coordinar una visita. Contáctanos para más detalles."
        }
    ]
};

// Helper para construir link de WhatsApp
export function waLink(message: string = siteData.whatsappMessages.generic): string {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${siteData.phoneDigits}?text=${encodedMessage}`;
}

// Helper para link de llamada
export function telLink(): string {
    return `tel:${siteData.phoneTel}`;
}

// Dirección completa formateada
export function fullAddress(): string {
    return `${siteData.addressLine}, ${siteData.comuna}, ${siteData.city}`;
}
