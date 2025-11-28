# 🚀 PROCESO DE PRODUCCIÓN - LANDING PAGE

## 🚨 FASE 0: PRE-REQUISITOS (Configuración de Fábrica)

### ✅ Verificación Inicial
Antes de empezar cualquier proyecto, tu plantilla en GitHub debe estar así:

**Estructura de `src/pages/`:**
```
src/pages/
├── index.astro          ✅ SIN guion bajo
├── _blog/               ⚠️ CON guion bajo
├── _contacto.astro      ⚠️ CON guion bajo
├── _ejemplo-formulario.astro
├── _ejemplo-servicio.astro
├── _ejemplo-zona.astro
├── _faq.astro
├── _gracias.astro
└── _nosotros.astro
```

**Propósito:** Esto asegura que el sitio arranque limpio sin borrar nada manualmente. Las páginas con `_` sirven como referencia para la IA pero no generan rutas públicas.

---

## 🛠️ FASE 1: LA ORDEN (Input)

### Qué necesitas del Cliente
Después de que Gemini genere el contenido, tendrás en tu portapapeles:

- **Bloque A:** Código completo de `src/pages/index.astro`
- **Bloque B:** Configuración completa de `src/config/site.ts`

---

## 💻 FASE 2: EL MONTAJE (Ejecución en Codespace)

### PASO 2.1: Verificar Ubicación
```bash
pwd
```
**Si el resultado termina en `/src/pages` o cualquier subcarpeta:**
```bash
cd ../..
```
**Verificar que estás en la raíz:**
```bash
ls
```
**Debes ver:** `package.json`, `astro.config.mjs`, `src/`, etc.

---

### PASO 2.2: Inyectar Configuración del Cliente
1. Abre: `src/config/site.ts`
2. **Borra TODO** el contenido existente
3. Pega el **Bloque B** (Configuración del cliente)
4. Guarda: `Ctrl+S`

---

### PASO 2.3: Inyectar Portada del Cliente
1. Abre: `src/pages/index.astro`
2. **Borra TODO** el contenido existente
3. Pega el **Bloque A** (Código de la Landing)
4. Guarda: `Ctrl+S`

---

### PASO 2.4: Limpieza de Emergencia (Solo si es necesario)
Si el cliente NO compró secciones extra, oculta lo que sobre:

```bash
# Ejemplo: ocultar página de zona
mv src/pages/ejemplo-zona.astro src/pages/_ejemplo-zona.astro
```

---

## 🚀 FASE 3: EL LANZAMIENTO (Vercel CLI)

### ⚠️ IMPORTANTE: No improvises estos comandos

### ⚠️ CRÍTICO: Verificar Build Local Primero
**ANTES de desplegar a Vercel, SIEMPRE ejecuta:**
```bash
npm run build
```

**Si hay errores:**
1. Lee el error completo
2. Busca la línea exacta (ej: `src/pages/index.astro:47:5`)
3. Corrige el error de sintaxis
4. Vuelve a ejecutar `npm run build`
5. NO SIGAS hasta que compile sin errores

**Errores comunes:**
- Falta `}` cerrando arrays o props
- Falta `>` cerrando tags JSX
- Comillas sin cerrar en strings

---

### Comando 1: Login (Si no estás logueado)
```bash
vercel login
```
- Selecciona **GitHub** y autoriza
- Copia el código que aparece (ej: `KPSZ-RDHS`)
- Ve a `vercel.com/device` y pégalo

---

### Comando 2: Commit y Push (OBLIGATORIO antes de desplegar)
```bash
git add .
git commit -m "Deploy: [Nombre del Cliente]"
git push origin main
```

**Si sale error "no remote":**
```bash
git remote add origin https://github.com/TU-USUARIO/nombre-repo.git
git push -u origin main
```

**Si sale error "rejected":**
```bash
git pull origin main --rebase
git push origin main
```

---

### Comando 3: Despliegue Inicial ⭐ (EL CRÍTICO)
```bash
vercel --prod
```

**La terminal te hará preguntas. Responde EXACTAMENTE esto:**

| Pregunta | Respuesta |
|----------|-----------|
| `Set up and deploy "/workspaces/nombre-repo"?` | `y` + Enter |
| `Which scope...?` | Enter (cuenta por defecto) |
| `Link to existing project?` | `n` + Enter |
| `What's your project's name?` | `nombre-del-cliente` (sin espacios) + Enter |
| `In which directory is your code located?` | `./` → **¡PULSA ENTER!** (No escribas nada) |
| `Want to modify these settings?` | `n` + Enter |
| `Would you like to pull environment variables?` | `n` + Enter |
| `Detected a repository. Connect it?` | `n` + Enter (lo haremos después) |

**Resultado esperado:**
```
✅ Production: https://nombre-del-cliente-xxx.vercel.app
```

**Si el build falla:**
- Lee el error en la terminal
- Corrige el archivo indicado
- Haz commit y push
- Ejecuta `vercel --prod` de nuevo

---

### Comando 4: Conectar GitHub (DEBE hacerse desde el navegador primero)

**PASO 4.1: Autorizar GitHub en Vercel**
```bash
"$BROWSER" https://vercel.com/account/login-connections
```
- En la página que se abre, busca "GitHub"
- Click en "Connect" o "Add Connection"
- Autoriza el acceso de Vercel a GitHub

**PASO 4.2: Conectar el Repositorio**
```bash
vercel git connect
```

**Si sale error "need to add Login Connection":**
- Ve a: https://vercel.com/account/login-connections
- Conecta GitHub manualmente
- Vuelve a ejecutar `vercel git connect`

**Resultado:** 
```
> Connecting GitHub repository: https://github.com/...
> Connected
```

**Ahora CI/CD está activo.** Cada `git push` desplegará automáticamente a Vercel.

---

## 📦 FLUJO COMPLETO RESUMIDO (Orden Correcto)

```bash
# 1. Verificar ubicación
pwd && ls package.json

# 2. Editar archivos en VS Code
# → src/config/site.ts (Bloque B)
# → src/pages/index.astro (Bloque A)

# 3. ⚠️ VERIFICAR BUILD LOCAL (CRÍTICO)
npm run build
# Si hay errores, corregir y repetir hasta que compile

# 4. Commit y push
git add .
git commit -m "Deploy: Cliente [Nombre]"
git push origin main

# 5. Desplegar a Vercel
vercel --prod
# Responder las preguntas según la tabla de FASE 3

# 6. Autorizar GitHub en Vercel (primera vez)
"$BROWSER" https://vercel.com/account/login-connections
# Conectar GitHub manualmente en el navegador

# 7. Conectar CI/CD
vercel git connect
```

**⚠️ ORDEN CRÍTICO:**
1. Build local exitoso PRIMERO
2. Commit y push SEGUNDO
3. Deploy a Vercel TERCERO
4. Conectar GitHub CUARTO

---

## 🐛 TROUBLESHOOTING

### ❌ Error: "Unexpected '>'" o errores de sintaxis durante `npm run build`
**Causa:** Error de sintaxis en archivos Astro (falta `}`, `>`, comillas, etc.)

**Solución:**
1. Lee el error completo: `Location: /path/to/file.astro:47:5`
2. Abre el archivo en esa línea exacta
3. Busca:
   - Arrays sin cerrar: `features={[ ... ]` ← falta `}`
   - Props sin cerrar: `features={[ ... ]}` ← falta `}`
   - Tags sin cerrar: `<Component` ← falta `>`
4. Corrige y ejecuta `npm run build` de nuevo
5. **NO SIGAS hasta que compile sin errores**

---

### ❌ Error: "The specified token is not valid"
```bash
vercel login
```
Ve a `vercel.com/device` y pega el código que aparece.

---

### ❌ Error: "Updates were rejected because the remote contains work"
**Causa:** El repositorio remoto tiene commits que no tienes localmente.

```bash
git pull origin main --rebase
git push origin main
```

---

### ❌ Error: "Failed to link. You need to add a Login Connection"
**Causa:** GitHub no está conectado a tu cuenta de Vercel.

**Solución:**
1. Abre: https://vercel.com/account/login-connections
2. Busca "GitHub" y click en "Connect"
3. Autoriza el acceso
4. Ejecuta `vercel git connect` de nuevo

---

### ❌ Error: "No such file or directory" o `pwd` muestra `/src/pages`
```bash
# Navega a la raíz del proyecto
cd ../..
pwd
ls package.json
```

---

### ❌ El sitio muestra páginas que no debería (ej: /contacto, /blog)
```bash
# Oculta las páginas con prefijo _
mv src/pages/contacto.astro src/pages/_contacto.astro
mv src/pages/blog src/pages/_blog
```

---

### ❌ El build local funciona pero Vercel falla
**Causa:** Los cambios no están en GitHub.

```bash
git status
git add .
git commit -m "Fix build"
git push origin main
vercel --prod
```

---

## 📝 NOTAS IMPORTANTES

1. **NUNCA** elimines archivos con `_`, solo úsalos como referencia
2. **SIEMPRE** verifica `pwd` antes de editar
3. **SIEMPRE** haz commit antes de desplegar
4. La carpeta correcta para Vercel es `./` (raíz del proyecto)
5. Cada cliente = 1 repositorio nuevo (no reutilices el mismo)

---

## ✅ CHECKLIST FINAL

Antes de entregar al cliente:

- [ ] El sitio carga en la URL de Vercel
- [ ] No hay errores 404 en la navegación
- [ ] El botón de WhatsApp funciona
- [ ] Los formularios envían correctamente
- [ ] El favicon y meta tags están configurados
- [ ] La versión mobile se ve correctamente
- [ ] CI/CD está activo (badge verde en GitHub)

---

**Última actualización:** 28 de Noviembre, 2025
