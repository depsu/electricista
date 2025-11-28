// Ejemplo de configuración para diferentes tipos de servicios
// Copia y pega la configuración que mejor se adapte a tu negocio

// ============================================
// EJEMPLO 1: SERVICIO DE EMERGENCIAS (Gasfitería, Cerrajería, etc.)
// ============================================
export const emergencyServiceConfig = {
    company: {
        name: "Destape Rápido",
        logoText: "DESTAPE",
        logoTextHighlight: "RÁPIDO",
        email: "contacto@destaperapido.cl",
        phone: "+56 9 1234 5678",
        whatsapp: "56912345678",
        address: "Región Metropolitana, Chile"
    },
    social: {
        facebook: "https://facebook.com/destaperapido",
        instagram: "https://instagram.com/destaperapido"
    },
    theme: {
        navbarVariant: 'service', // Navbar completo con zonas
        footerVariant: 'service', // Footer con cobertura
        font: 'sans',
        colors: {
            primary: '#2563eb',   // Azul confianza
            secondary: '#1e293b', // Gris oscuro
            accent: '#16a34a'     // Verde WhatsApp
        }
    },
    features: {
        showServiceStatus: true,
        showBlog: true,
        showTestimonials: true
    }
};

// ============================================
// EJEMPLO 2: SERVICIOS PROFESIONALES (Abogados, Contadores, etc.)
// ============================================
export const professionalServiceConfig = {
    company: {
        name: "Estudio Jurídico Silva",
        logoText: "ESTUDIO",
        logoTextHighlight: "SILVA",
        email: "contacto@estudiosilva.cl",
        phone: "+56 2 2345 6789",
        whatsapp: "56223456789",
        address: "Providencia, Santiago"
    },
    social: {
        linkedin: "https://linkedin.com/company/estudiosilva",
        instagram: "https://instagram.com/estudiosilva"
    },
    theme: {
        navbarVariant: 'generic', // Navbar simple
        footerVariant: 'generic', // Footer minimalista
        font: 'serif', // Fuente elegante
        colors: {
            primary: '#1e40af',   // Azul oscuro profesional
            secondary: '#1e293b',
            accent: '#d97706'     // Dorado/Naranja
        }
    },
    features: {
        showServiceStatus: false,
        showBlog: true,
        showTestimonials: true
    }
};

// ============================================
// EJEMPLO 3: EDUCACIÓN (Clases Particulares, Academia, etc.)
// ============================================
export const educationServiceConfig = {
    company: {
        name: "Academia Pro",
        logoText: "ACADEMIA",
        logoTextHighlight: "PRO",
        email: "info@academiapro.cl",
        phone: "+56 9 8765 4321",
        whatsapp: "56987654321",
        address: "Santiago, Chile"
    },
    social: {
        facebook: "https://facebook.com/academiapro",
        instagram: "https://instagram.com/academiapro",
        youtube: "https://youtube.com/@academiapro"
    },
    theme: {
        navbarVariant: 'generic',
        footerVariant: 'generic',
        font: 'sans',
        colors: {
            primary: '#4f46e5',   // Índigo educativo
            secondary: '#1e1b4b',
            accent: '#f59e0b'     // Amarillo/Naranja energético
        }
    },
    features: {
        showServiceStatus: false,
        showBlog: true,
        showTestimonials: true
    }
};

// ============================================
// EJEMPLO 4: SALUD Y BIENESTAR (Nutrición, Fitness, etc.)
// ============================================
export const healthServiceConfig = {
    company: {
        name: "Vida Sana",
        logoText: "VIDA",
        logoTextHighlight: "SANA",
        email: "hola@vidasana.cl",
        phone: "+56 9 5555 6666",
        whatsapp: "56955556666",
        address: "Las Condes, Santiago"
    },
    social: {
        instagram: "https://instagram.com/vidasana",
        facebook: "https://facebook.com/vidasana"
    },
    theme: {
        navbarVariant: 'generic',
        footerVariant: 'generic',
        font: 'sans',
        colors: {
            primary: '#059669',   // Verde salud
            secondary: '#064e3b',
            accent: '#f59e0b'
        }
    },
    features: {
        showServiceStatus: false,
        showBlog: true,
        showTestimonials: true
    }
};

// ============================================
// EJEMPLO 5: TECNOLOGÍA (Desarrollo, Consultoría, etc.)
// ============================================
export const techServiceConfig = {
    company: {
        name: "DevStudio",
        logoText: "DEV",
        logoTextHighlight: "STUDIO",
        email: "contact@devstudio.dev",
        phone: "+56 9 7777 8888",
        whatsapp: "56977778888",
        address: "Santiago, Chile"
    },
    social: {
        github: "https://github.com/devstudio",
        linkedin: "https://linkedin.com/company/devstudio",
        twitter: "https://twitter.com/devstudio"
    },
    theme: {
        navbarVariant: 'generic',
        footerVariant: 'generic',
        font: 'mono', // Fuente técnica
        colors: {
            primary: '#6366f1',   // Índigo tech
            secondary: '#1e1b4b',
            accent: '#ec4899'     // Rosa vibrante
        }
    },
    features: {
        showServiceStatus: false,
        showBlog: true,
        showTestimonials: false
    }
};

// ============================================
// INSTRUCCIONES DE USO
// ============================================
// 1. Copia la configuración que mejor se adapte a tu negocio
// 2. Pégala en src/config/site.ts
// 3. Personaliza los valores según tu empresa
// 4. Guarda y reinicia el servidor de desarrollo
