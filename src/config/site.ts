export const siteConfig = {
    company: {
        name: "El Rayo Servicios Eléctricos",
        logoText: "EL RAYO",
        logoTextHighlight: "SEC", // Destacamos la certificación en el logo
        email: "contacto@electricopro.cl",
        phone: "+56987654321",
        whatsapp: "56987654321",
        address: "Santiago, Región Metropolitana"
    },
    social: {
        facebook: "https://facebook.com/juan.electricista.stgo",
        // instagram: "..." // Si no tienes, puedes comentarlo o borrarlo
    },
    theme: {
        navbarVariant: 'service',
        footerVariant: 'service',
        font: 'sans',
        colors: {
            primary: '#2563eb',   
            secondary: '#1e293b', 
            accent: '#eab308'     // CAMBIO: Amarillo/Dorado para evocar electricidad y alerta
        }
    },
    features: {
        showServiceStatus: true,
        showBlog: false, // Desactivamos blog por ahora para enfocar en servicios
        showTestimonials: true
    }
};