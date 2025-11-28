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
        name: "Servicios Eléctricos \"El Rayo\"",
        logoText: "EL",
        logoTextHighlight: "RAYO",
        email: "contacto@eletricistapro.cl",
        phone: "+56 9 8765 4321",
        whatsapp: "56987654321",
        address: "Santiago, Chile"
    },
    social: {
        facebook: "https://facebook.com/juan.electricista.stgo",
    },
    theme: {
        navbarVariant: 'service',
        footerVariant: 'service',
        font: 'sans', // 'sans' | 'serif' | 'mono'
        colors: {
            primary: '#fbbf24',   // amber-400 (Electrician yellow/orange)
            secondary: '#1e293b', // slate-800
            accent: '#16a34a'     // green-600 (WhatsApp)
        }
    },
    features: {
        showServiceStatus: true,
        showBlog: false,
        showTestimonials: true
    }
};
