# Guía de Migración y Deployment

## ✅ Proyecto Listo para Independencia

Este proyecto ya está completamente configurado para funcionar de forma independiente. Todos los archivos necesarios han sido creados.

## 📋 Archivos de Configuración Creados

- ✅ `tailwind.config.mjs` - Configuración de Tailwind CSS v4
- ✅ `vercel.json` - Configuración para deployment en Vercel
- ✅ `.gitignore` - Archivos a ignorar en Git
- ✅ `.vercelignore` - Archivos a ignorar en Vercel
- ✅ `README.md` - Documentación del proyecto

## 🚀 Pasos para Mover a Repositorio Independiente

### 1. Crear Nuevo Repositorio en GitHub

```bash
# Desde el directorio ejemplo-astro
cd /ruta/a/ejemplo-astro

# Inicializar Git (si no está inicializado)
git init

# Agregar archivos
git add .

# Primer commit
git commit -m "Initial commit - Plantilla Astro Modular"

# Conectar con GitHub (reemplaza con tu URL)
git remote add origin https://github.com/tu-usuario/tu-repo.git

# Push
git branch -M main
git push -u origin main
```

### 2. Deploy en Vercel

#### Opción A: Desde la UI de Vercel (Recomendado)

1. Ve a [vercel.com](https://vercel.com)
2. Click en "New Project"
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente Astro
5. Click en "Deploy"

**Configuración Automática:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

#### Opción B: Desde el CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desde el directorio del proyecto
vercel

# Para producción
vercel --prod
```

## 🔧 Verificación Pre-Deploy

Antes de hacer deploy, verifica que todo funcione:

```bash
# Build local
npm run build

# Preview del build
npm run preview
```

Si el build es exitoso, estás listo para deploy.

## 📊 Resultado del Último Build

```
✓ 11 páginas generadas
✓ Build completado en 804ms
✓ Sin errores
```

## 🎯 Próximos Pasos

1. **Personalizar `src/config/site.ts`** con los datos de tu cliente
2. **Actualizar contenido** en `src/pages/index.astro`
3. **Agregar imágenes** en `public/`
4. **Crear posts de blog** en `src/content/blog/`
5. **Deploy a Vercel**

## 💡 Configuración Avanzada (Opcional)

### Variables de Entorno

Si necesitas integrar servicios externos (Google Analytics, APIs, etc.), puedes usar variables de entorno:

**En Vercel:**
1. Ve a tu proyecto → Settings → Environment Variables
2. Agrega las variables necesarias (ej: `PUBLIC_GA_ID`)

**En tu código:**
```typescript
const gaId = import.meta.env.PUBLIC_GA_ID;
```

**Nota:** Para datos simples como emails o teléfonos, déjalos directamente en `src/config/site.ts`. Las variables de entorno son solo para claves de API o información sensible.

## 🆘 Troubleshooting

### Error: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error en Vercel: "Build failed"
- Verifica que `package.json` tenga las dependencias correctas
- Revisa los logs de Vercel para detalles específicos
- Asegúrate de que el build funcione localmente primero

### Tailwind no aplica estilos
- Verifica que `tailwind.config.mjs` esté en la raíz
- Confirma que `@import "tailwindcss";` esté en `src/styles/global.css`
- Reinicia el servidor de desarrollo

## 📞 Soporte

Para más información, consulta:
- [Documentación de Astro](https://docs.astro.build)
- [Documentación de Vercel](https://vercel.com/docs)
- `LEEME_IA.md` para guía de componentes

