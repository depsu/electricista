# Documentación de Componentes Astro (Sistema de Diseño)

## 🤖 Protocolo de Inicio para IA

Si eres una IA encargada de configurar este sitio para un nuevo cliente, sigue estos pasos obligatorios:

1.  **Analizar el Negocio:** Entiende qué servicio ofrece el cliente (ej: Abogados, Gasfíter, Mudanzas).
2.  **Configurar `src/config/site.ts`:**
    *   Actualiza `company` con el nombre, teléfono y email del cliente.
    *   Configura `social` con los enlaces a redes sociales.
    *   Elige `navbarVariant` y `footerVariant`:
        *   `'generic'`: Para sitios simples, landing pages o servicios sin cobertura geográfica compleja.
        *   `'service'`: Para servicios de emergencia o con cobertura por comunas (ej: Destapes, Cerrajería).
    *   Elige `font`: `'sans'` (moderna), `'serif'` (elegante), o `'mono'` (técnica).
    *   Define `theme.colors`: Elige una paleta de colores acorde al rubro.
        *   `primary`: Color principal (botones, enlaces).
        *   `secondary`: Color de fondo oscuro o textos secundarios.
        *   `accent`: Color para destacar (usualmente verde WhatsApp o naranja de urgencia).
3.  **Personalizar Contenido:**
    *   Edita `src/pages/index.astro` usando los componentes disponibles (`Hero`, `FeatureSection`, etc.).
    *   Si es necesario, crea nuevas páginas en `src/pages/`.

---

Esta carpeta contiene una biblioteca de componentes reutilizables diseñada para construir sitios web de servicios profesionales (gasfitería, legal, construcción, etc.) de manera rápida y escalable.

## 1. Estructura del Proyecto

```text
/src
  /components        <-- BLOQUES DE CONSTRUCCIÓN (UI)
     /blog           <-- Componentes específicos del blog (BlogCard)
     /pages             <-- Rutas del sitio web
     index.astro     <-- Página de inicio
     faq.astro       <-- Página de preguntas frecuentes
     ejemplo-zona.astro <-- Plantilla de ejemplo para zona geográfica
     ejemplo-servicio.astro <-- Plantilla de ejemplo para servicio específico
     /blog           <-- Índice y detalle del blogn.astro <-- Sección de texto + imagen (alternable)
     StatsGrid.astro <-- Cuadrícula de estadísticas (números grandes)
     PricingTable.astro <-- Tabla de precios (3 columnas)
     CallToAction.astro <-- Llamado a la acción final (CTA)
     FAQ.astro       <-- Preguntas frecuentes con Schema.org
     WhatsAppFloat.astro <-- Botón flotante de contacto

  /layouts           <-- PLANTILLAS MAESTRAS
     Layout.astro    <-- Esqueleto HTML base (Head, Meta tags)
     ZoneLayout.astro <-- Plantilla para Landing Pages de Zonas/Servicios

  /content           <-- BASE DE DATOS (TEXTO)
     /blog           <-- Artículos en Markdown (.md)
```

## 2. Catálogo de Componentes

### A. Hero (`Hero.astro`)
El banner principal de la página.
- **Uso:** Al inicio de cualquier página.
- **Props:** `title` (acepta HTML), `subtitle`, `bgImage`, `badgeText` (etiqueta pequeña).
- **Variantes (`variant`):**
  - `'default'`: Diseño dividido (texto izquierda, imagen fondo).
  - `'centered'`: Texto centrado, ideal para landing pages de alto impacto.
  - `'minimal'`: Solo texto, para páginas internas simples.

### B. FeatureSection (`FeatureSection.astro`)
Bloque clásico de "Imagen a un lado, Texto al otro".
- **Uso:** Para describir servicios o beneficios.
- **Props:**
  - `image`: URL de la foto.
  - `align`: 'left' (imagen izquierda) o 'right' (imagen derecha).
  - `features`: Lista de puntos clave (array de strings).

### C. StatsGrid (`StatsGrid.astro`)
Barra de números para prueba social (ej: "+500 Clientes Felices").
- **Uso:** Después del Hero o antes del Footer.
- **Props:** `stats` (Array de objetos con icon, number, label).

### D. PricingTable (`PricingTable.astro`)
Tabla de precios de 3 columnas.
- **Uso:** Página de precios o servicios.
- **Props:** `plans` (Array de objetos). Soporta destacar un plan como "Más Popular".

### E. CallToAction (`CallToAction.astro`)
Bloque final para convertir visitas en clientes.
- **Uso:** Al final de todas las páginas antes del footer.
- **Props:** `title`, `subtitle`, `ctaText`, `bgImage`.

### F. FAQ (`FAQ.astro`)
Acordeón de preguntas frecuentes.
- **Importante:** Incluye marcado Schema.org automático para SEO.
- **Uso:** Páginas de servicio o página dedicada de ayuda.

### G. ServiceStatus (`ServiceStatus.astro`)
Tarjeta flotante que muestra el estado operativo del servicio.
- **Uso:** Generalmente dentro del `Hero`, pero puede ir en cualquier parte.
- **Props:**
  - `title`: Título de la tarjeta (ej: "Estado del Servicio").
  - `statusText`: Texto del estado (ej: "Operativo", "Saturado").
  - `statusColor`: Color del indicador ('green', 'yellow', 'red').
  - `items`: Lista de items con icono, título y subtítulo.

### H. Testimonials (`Testimonials.astro`)
Sección de reseñas de clientes con estrellas.
- **Uso:** Prueba social en la página de inicio o servicios.
- **Props:**
  - `title`: Título de la sección.
  - `subtitle`: Subtítulo.
  - `reviews`: Array de objetos `{ name, text, rating, location, image }`.

### I. ContactForm (`ContactForm.astro`)
Formulario de contacto integrado con Formsubmit.co (sin registro).
- **Uso:** Página de contacto o sección de contacto en cualquier página.
- **Props:**
  - `title`: Título del formulario.
  - `subtitle`: Subtítulo.
- **Configuración:** Solo reemplazar `tu-email@ejemplo.com` en el action del form con tu email real.
- **Características:**
  - Sin registro necesario
  - Validación HTML5
  - Protección anti-spam (honeypot)
  - Ilimitado y gratis
  - Primera vez requiere confirmación por email

### J. QuickForm (`QuickForm.astro`)
Formulario compacto tipo widget (solo nombre, email, teléfono).
- **Uso:** En Hero, sidebars, o cualquier sección como widget de captación.
- **Props:**
  - `title`: Título del widget.
  - `buttonText`: Texto del botón.
  - `variant`: 'light' (fondo blanco) o 'dark' (fondo oscuro).
- **Configuración:** Igual que ContactForm, cambiar email en action.
- **Ejemplo de uso en Hero:**
  ```astro
  <Hero showQuickForm={true} showStatus={false} />
  ```

## 3. Cómo Crear una Nueva Página (Ej: Abogados)

1.  **Crear Archivo:** `src/pages/divorcios.astro`
2.  **Importar Layout:**
    ```astro
    ---
    import Layout from '../layouts/Layout.astro';
    import Hero from '../components/Hero.astro';
    import FeatureSection from '../components/FeatureSection.astro';
    import CallToAction from '../components/CallToAction.astro';
    ---
    
    <Layout title="Abogados de Divorcio">
        <Hero 
            title="Divorcios Rápidos" 
            subtitle="Expertos en derecho de familia."
            bgImage="/img/abogados.jpg"
        />
        
        <FeatureSection 
            title="Protegemos tu Patrimonio"
            image="/img/firma.jpg"
            features={["Atención 24/7", "Primera consulta gratis"]}
        />
        
        <CallToAction title="Agenda tu Hora" />
    </Layout>
    ```

## 4. Blog Autoadministrable

Para agregar un artículo:
1.  Ir a `src/content/blog/`
2.  Crear archivo `nuevo-articulo.md`
3.  Llenar los datos (título, fecha, imagen) y escribir el contenido.
4.  ¡Listo! Aparecerá automáticamente en `/blog`.

## 5. Comandos

- `npm run dev`: Ver sitio en local.
- `npm run build`: Construir para subir a internet.
