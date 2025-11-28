# 🎯 PASO A PASO: DESPLEGAR LANDING PAGE DESDE CERO

## ✅ CHECKLIST INICIAL

Antes de empezar, asegúrate de tener:
- [ ] Cuenta en GitHub
- [ ] Cuenta en Vercel
- [ ] Codespace abierto con la plantilla
- [ ] Bloques A y B listos en el portapapeles (de Gemini)

---

## 📋 PASO 1: VERIFICAR UBICACIÓN

**Terminal:**
```bash
pwd
```

**Resultado esperado:**
```
/workspaces/nombre-del-repo
```

**Si estás en otra carpeta:**
```bash
cd /workspaces/nombre-del-repo
```

**Verificar que estás en la raíz:**
```bash
ls package.json
```

**✅ Si ves `package.json`, estás listo. Continúa al PASO 2.**

---

## 📝 PASO 2: INYECTAR CONFIGURACIÓN DEL CLIENTE

### 2.1 Abrir archivo de configuración
1. En VS Code, abre: `src/config/site.ts`
2. Selecciona TODO el contenido (`Ctrl+A`)
3. Borra TODO (`Delete`)

### 2.2 Pegar configuración
1. Pega el **Bloque B** (configuración del cliente)
2. Guarda el archivo (`Ctrl+S`)

**✅ Continúa al PASO 3.**

---

## 🎨 PASO 3: INYECTAR LANDING PAGE DEL CLIENTE

### 3.1 Abrir página principal
1. En VS Code, abre: `src/pages/index.astro`
2. Selecciona TODO el contenido (`Ctrl+A`)
3. Borra TODO (`Delete`)

### 3.2 Pegar landing page
1. Pega el **Bloque A** (código de la landing)
2. Guarda el archivo (`Ctrl+S`)

**✅ Continúa al PASO 4.**

---

## 🔍 PASO 4: VERIFICAR BUILD LOCAL (CRÍTICO)

**Terminal:**
```bash
npm run build
```

### ✅ Si sale esto, continúa al PASO 5:
```
✓ Completed in 1234ms.
✓ Built in 5.67s
```

### ❌ Si sale ERROR, sigue estas instrucciones:

#### Error tipo: "Unexpected '>'" o "Unexpected end of file"

1. **Lee el error completo** y busca esta línea:
```
Location:
/vercel/path0/src/pages/index.astro:47:5
```

2. **Anota el número de línea** (ej: línea 47)

3. **Abre el archivo** `src/pages/index.astro` y ve a esa línea

4. **Busca estos errores comunes:**

**Error A: Array sin cerrar**
```jsx
// ❌ INCORRECTO (falta el } al final)
features={[
    "Item 1",
    "Item 2"
]

// ✅ CORRECTO
features={[
    "Item 1",
    "Item 2"
]}
```

**Error B: Prop sin cerrar**
```jsx
// ❌ INCORRECTO (falta } después de ])
features={[
    "Item 1"
]
/>

// ✅ CORRECTO
features={[
    "Item 1"
]}
/>
```

**Error C: Tag sin cerrar**
```jsx
// ❌ INCORRECTO
<Component
    prop="value"

// ✅ CORRECTO
<Component
    prop="value"
/>
```

5. **Corrige el error** y guarda (`Ctrl+S`)

6. **Vuelve a ejecutar:**
```bash
npm run build
```

7. **Repite hasta que compile sin errores**

**✅ Cuando compile sin errores, continúa al PASO 5.**

---

## 💾 PASO 5: GUARDAR CAMBIOS EN GIT

**Terminal:**
```bash
git add .
```

```bash
git commit -m "Deploy: Cliente [Nombre]"
```

**Reemplaza `[Nombre]` con el nombre real del cliente.**

**✅ Continúa al PASO 6.**

---

## 🌐 PASO 6: SUBIR A GITHUB (ANTES DE DESPLEGAR)

**⚠️ IMPORTANTE:** Vercel desplegará el código que esté en GitHub, así que DEBES hacer push ANTES del primer despliegue.

**Terminal:**
```bash
git push origin main
```

### ✅ Si sale esto, continúa al PASO 7:
```
Writing objects: 100% ...
To https://github.com/...
   abc1234..def5678  main -> main
```

### ❌ Si sale "no remote":
```bash
git remote add origin https://github.com/TU-USUARIO/nombre-repo.git
git push -u origin main
```

### ❌ Si sale "rejected":
```bash
git pull origin main --rebase
git push origin main
```

**✅ VERIFICA que el push fue exitoso antes de continuar. Continúa al PASO 7.**

---

## 🚀 PASO 7: LOGIN EN VERCEL (Solo primera vez)

**Terminal:**
```bash
vercel login
```

**Te mostrará algo como:**
```
Visit vercel.com/device and enter KPSZ-RDHS
```

**Acciones:**
1. Copia el código (ej: `KPSZ-RDHS`)
2. Ve a: https://vercel.com/device
3. Pega el código
4. Autoriza con GitHub

**Resultado esperado:**
```
Congratulations! You are now signed in.
```

**✅ Continúa al PASO 8.**

---

## 🎉 PASO 8: DESPLEGAR A PRODUCCIÓN

**Terminal:**
```bash
vercel --prod
```

**La terminal te hará preguntas. Responde EXACTAMENTE así:**

### Pregunta 1:
```
? Set up and deploy "/workspaces/nombre-repo"?
```
**Respuesta:** Escribe `y` y pulsa `Enter`

---

### Pregunta 2:
```
? Which scope should contain your project?
```
**Respuesta:** Pulsa `Enter` (acepta el default)

---

### Pregunta 3:
```
? Link to existing project?
```
**Respuesta:** Escribe `n` y pulsa `Enter`

---

### Pregunta 4:
```
? What's your project's name?
```
**Respuesta:** Escribe `nombre-del-cliente` (sin espacios, solo minúsculas y guiones) y pulsa `Enter`

**Ejemplo:** `desatascos-santiago`

---

### Pregunta 5:
```
? In which directory is your code located?
```
**Respuesta:** `./` está pre-escrito. **Solo pulsa `Enter`** (NO escribas nada)

---

### Pregunta 6:
```
? Want to modify these settings?
```
**Respuesta:** Escribe `n` y pulsa `Enter`

---

### Pregunta 7:
```
? Would you like to pull environment variables now?
```
**Respuesta:** Escribe `n` y pulsa `Enter`

---

### Pregunta 8:
```
? Detected a repository. Connect it to this project?
```
**Respuesta:** Escribe `y` y pulsa `Enter`

**⚠️ IMPORTANTE:** Como YA hiciste push en el PASO 6, Vercel detectará el repositorio y lo conectará automáticamente.

---

### ✅ Si el despliegue es exitoso, verás:
```
✅ Production: https://nombre-del-cliente-xxx.vercel.app
```

**Copia esa URL y guárdala.**

**🎉 Si viste este mensaje, el sitio ya está desplegado con los cambios del cliente.**

### ❌ Si el build falla:
Verás algo como:
```
[ERROR] [vite] ✗ Build failed
Unexpected ">"
Location: /vercel/path0/src/pages/index.astro:47:5
```

**Solución:**
1. Vuelve al **PASO 4** (verificar build local)
2. Corrige el error
3. Haz commit y push (**PASO 5 y 6**)
4. Vuelve a ejecutar `vercel --prod`

**✅ Si el despliegue fue exitoso, continúa al PASO 9 (verificación final).**

---

## 🔗 PASO 9: VERIFICAR CONEXIÓN GITHUB (Opcional - Solo si algo falla)

**⚠️ NOTA:** Si respondiste `y` en la Pregunta 8 del PASO 8, el repositorio ya está conectado y el CI/CD ya está activo. Este paso es solo si algo salió mal.

### 9.1 Verificar si ya está conectado

Ve al dashboard de Vercel:
```bash
"$BROWSER" https://vercel.com/paginasfasts-projects/nombre-del-cliente
```

**Si en la página ves el logo de GitHub y tu repositorio, ya está conectado. Salta al PASO 10.**

---

### 9.2 Si NO está conectado (solo en caso de error)

**Terminal:**
```bash
vercel git connect
```

### ✅ Si sale esto, ¡ÉXITO!:
```
> Connecting GitHub repository: https://github.com/...
> Connected
```

### ❌ Si sale "need to add Login Connection":

**Autorizar GitHub en Vercel:**
```bash
"$BROWSER" https://vercel.com/account/login-connections
```

1. Busca la sección "GitHub"
2. Click en botón "Connect" (azul)
3. Autoriza el acceso
4. Vuelve a ejecutar `vercel git connect`

**✅ CI/CD ACTIVADO. Continúa al PASO 10.**

---

## ✅ PASO 10: VERIFICAR QUE TODO FUNCIONA

### 10.1 Abrir el sitio
**Terminal:**
```bash
"$BROWSER" https://nombre-del-cliente-xxx.vercel.app
```

**Verifica:**
- [ ] El sitio carga correctamente
- [ ] No hay errores 404
- [ ] El botón de WhatsApp funciona
- [ ] Los formularios funcionan
- [ ] La versión móvil se ve bien

---

### 10.2 Verificar CI/CD automático

**Haz un cambio de prueba:**

1. Edita `src/config/site.ts` (cambia algo pequeño)
2. Guarda (`Ctrl+S`)

**Terminal:**
```bash
git add .
git commit -m "Test: Verificar CI/CD"
git push origin main
```

**Espera 1-2 minutos y refresca el sitio en Vercel.**

**✅ Si el cambio aparece, CI/CD funciona correctamente.**

---

## 🎊 ¡PROYECTO COMPLETADO!

**Resumen de lo que tienes:**
- ✅ Landing page en producción
- ✅ Dominio temporal de Vercel
- ✅ CI/CD automático (cada push despliega)
- ✅ Sincronizado con GitHub

**URL del Proyecto:** https://nombre-del-cliente-xxx.vercel.app

**Próximos pasos (opcional):**
1. Conectar dominio personalizado en Vercel
2. Configurar analytics
3. Agregar certificado SSL (automático en Vercel)

---

## 🆘 AYUDA RÁPIDA

**Si algo sale mal, busca el error en esta tabla:**

| Error | Solución Rápida |
|-------|----------------|
| `Unexpected ">"` | Volver a PASO 4, revisar sintaxis |
| `no remote` | Ejecutar `git remote add origin URL` |
| `rejected` | Ejecutar `git pull origin main --rebase` |
| `token is not valid` | Ejecutar `vercel login` |
| `need Login Connection` | Ir a PASO 9.1 |
| Build local pasa pero Vercel falla | Verificar que hiciste `git push` |

**Para más detalles, consulta:** `PROCESO_PRODUCCION.md`

---

**Última actualización:** 28 de Noviembre, 2025
