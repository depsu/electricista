# Plantilla Astro - Sistema de Diseño Modular

Plantilla profesional y flexible para crear sitios web de servicios usando Astro + Tailwind CSS v4.

## 🚀 Características

- ✅ **Configuración Centralizada** - Controla todo desde `src/config/site.ts`
- ✅ **Componentes Inteligentes** - Navbar y Footer con variantes (generic/service)
- ✅ **Tipografía Dinámica** - Cambia entre Sans, Serif o Mono
- ✅ **Hero Flexible** - 3 variantes (default, centered, minimal)
- ✅ **SEO Optimizado** - Meta tags y Schema.org incluidos
- ✅ **Blog Integrado** - Sistema de contenido con Markdown
- ✅ **100% TypeScript** - Type-safe desde el inicio

## 📦 Instalación

```bash
npm install
```

## 🛠️ Comandos

| Comando           | Acción                                      |
|-------------------|---------------------------------------------|
| `npm run dev`     | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build`   | Construye el sitio para producción en `./dist/` |
| `npm run preview` | Previsualiza el build localmente            |

## 🎨 Configuración Rápida

Edita `src/config/site.ts` para personalizar:

```typescript
export const siteConfig = {
    company: {
        name: "Tu Empresa",
        logoText: "TU",
        logoTextHighlight: "EMPRESA",
        email: "contacto@tuempresa.com",
        phone: "+56 9 1234 5678",
        whatsapp: "56912345678"
    },
    social: {
        facebook: "https://facebook.com/tuempresa",
        instagram: "https://instagram.com/tuempresa"
    },
    theme: {
        navbarVariant: 'generic', // 'generic' | 'service'
        footerVariant: 'generic', // 'generic' | 'service'
        font: 'sans', // 'sans' | 'serif' | 'mono'
        colors: {
            primary: '#2563eb',
            secondary: '#1e293b',
            accent: '#16a34a'
        }
    }
}
```

## 📖 Documentación

Lee `LEEME_IA.md` para:
- Protocolo de configuración para IA
- Catálogo completo de componentes
- Guías de uso y ejemplos

## 🚢 Deploy en Vercel

### Opción 1: Desde la UI de Vercel
1. Sube tu proyecto a GitHub/GitLab/Bitbucket
2. Ve a [vercel.com](https://vercel.com) y haz clic en "New Project"
3. Importa tu repositorio
4. Vercel detectará automáticamente Astro
5. Haz clic en "Deploy"

### Opción 2: Desde el CLI
```bash
npm i -g vercel
vercel
```

### Configuración Automática
El archivo `vercel.json` ya está configurado con:
- Clean URLs habilitadas
- Optimización automática de assets

**Nota:** Vercel detecta automáticamente Astro y usa el adaptador correcto. No necesitas configuración adicional.

## 📂 Estructura

```
/src
  /components     # Componentes reutilizables (Navbar, Hero, Footer, etc.)
  /config         # Configuración centralizada del sitio
  /content        # Contenido en Markdown (blog posts)
  /layouts        # Layouts base (Layout.astro, ZoneLayout.astro)
  /pages          # Rutas del sitio (index, blog, contacto, etc.)
  /styles         # Estilos globales y variables CSS
```

## 🤖 Para IAs

Si eres una IA configurando este proyecto, lee `LEEME_IA.md` primero. Contiene el protocolo completo de inicialización y ejemplos de uso.

## 🔧 Tecnologías

- **Framework:** Astro 5.x
- **Estilos:** Tailwind CSS v4 (via Vite plugin)
- **Tipado:** TypeScript
- **Deployment:** Vercel (recomendado)

## 📄 Licencia

MIT

