export interface SiteConfig {
    company: {
        name: string;
        logoText: string;
        logoTextHighlight: string;
        email: string;
        phone: string;
        whatsapp: string;
        address: string;
    };
    social: {
        facebook?: string;
        instagram?: string;
        linkedin?: string;
        twitter?: string;
    };
    theme: {
        navbarVariant: 'generic' | 'service';
        footerVariant: 'generic' | 'service';
        font: 'sans' | 'serif' | 'mono';
        colors: {
            primary: string;
            secondary: string;
            accent: string;
        };
    };
    features: {
        showServiceStatus: boolean;
        showBlog: boolean;
        showTestimonials: boolean;
    };
}

export const siteConfig: SiteConfig = {
    company: {
        name: "NombreEmpresa",
        logoText: "NOMBRE",
        logoTextHighlight: "EMPRESA",
        email: "contacto@ejemplo.com",
        phone: "+56 9 1234 5678",
        whatsapp: "56912345678",
        address: "Región Metropolitana, Chile"
    },
    social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com"
    },
    theme: {
        navbarVariant: 'service',
        footerVariant: 'service',
        font: 'sans', // 'sans' | 'serif' | 'mono'
        colors: {
            primary: '#2563eb',   // blue-600
            secondary: '#1e293b', // slate-800
            accent: '#16a34a'     // green-600 (WhatsApp)
        }
    },
    features: {
        showServiceStatus: true,
        showBlog: true,
        showTestimonials: true
    }
};
