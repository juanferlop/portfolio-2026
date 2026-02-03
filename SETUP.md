# 📋 Configuración del Portfolio - Juan Fernández López

## 🎯 Guía Paso a Paso

---

## 1. ✅ Subir CV (Currículum)

### Opción A: GitHub Releases (⭐ RECOMENDADO)

**Esto es lo más simple y profesional:**

1. Ve a tu repositorio: `https://github.com/juanferlop/portfolio-2026`
2. Haz clic en **"Releases"** (barra lateral derecha)
3. Haz clic en **"Create a new release"**
4. Completa el formulario:
   - **Tag version**: `cv-v1.0`
   - **Release title**: "CV - Juan Fernández López"
   - **Description**: "Mi currículum profesional"
5. **Adjunta tu archivo** `mi-cv.pdf` (botón "Attach binaries")
6. Haz clic en **"Publish release"**

**Copia el link de descarga:**
- En la página de release que se abre, busca tu PDF en "Assets"
- Haz clic derecho en el archivo → "Copy link address"
- El link será algo como:
  ```
  https://github.com/juanferlop/portfolio-2026/releases/download/cv-v1.0/mi-cv.pdf
  ```

**Actualiza el código en `src/components/Navbar.tsx`:**

Busca la línea con `href="/mi-cv.pdf"` y cámbiala a:
```tsx
<a href="https://github.com/juanferlop/portfolio-2026/releases/download/cv-v1.0/mi-cv.pdf" className="...">CV</a>
```

### Opción B: Google Drive

Si prefieres Google Drive:

1. Sube tu `mi-cv.pdf` a Google Drive
2. Haz clic derecho → **Compartir**
3. Cambia a "Cualquiera con el enlace" → Copiar
4. Copia el **ID del archivo** de la URL:
   ```
   https://drive.google.com/file/d/[ID_AQUI]/view?usp=sharing
   ```
5. Conviértelo en link de descarga directa:
   ```
   https://drive.google.com/uc?id=[ID_AQUI]&export=download
   ```
6. Actualiza en `src/components/Navbar.tsx`

---

## 2. 🎥 Integrar Video de tu App Android (en lugar de APK)

**¡Excelente idea!** Un video es mejor que un APK porque:
- ✅ No necesita descargar 50-100MB
- ✅ Se ve en cualquier dispositivo
- ✅ Muestra la app en acción
- ✅ Es profesional y moderno

### Paso A: Sube tu video a YouTube

1. Ve a `https://www.youtube.com/upload`
2. Sube tu video grabado de la app
3. Completa:
   - **Título**: "App Android - Demo"
   - **Descripción**: "Demostración de funcionamiento de mi aplicación"
   - **Privacidad**: "No listado" (nadie lo encuentra excepto con el enlace)
4. Espera a que termine el procesamiento
5. Cuando esté listo, copia el **ID del video** desde la URL:
   ```
   https://www.youtube.com/watch?v=[VIDEO_ID_AQUI]
   ```
   (Por ejemplo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ` → ID es `dQw4w9WgXcQ`)

### Paso B: Actualiza el proyecto en `src/data/projects.ts`

Busca la sección del proyecto "App Android" y cambia:

**De:**
```ts
{
    title: "App Android",
    description: "Aplicación nativa con Kotlin e interfaces XML. Patrones arquitectónicos y persistencia.",
    image: "/projects/android-kotlin.svg",
    github: "https://github.com/HovanRojasIgnacio/AndroidDevelopers",
    download: "https://...", // ← Esto ya no es necesario
    stack: ["Kotlin", "XML", "Android", "SQLite"],
    progress: 100
}
```

**A:**
```ts
{
    title: "App Android",
    description: "Aplicación nativa con Kotlin e interfaces XML. Patrones arquitectónicos y persistencia.",
    image: "/projects/android-kotlin.svg",
    github: "https://github.com/HovanRojasIgnacio/AndroidDevelopers",
    demo: "https://www.youtube.com/embed/[VIDEO_ID_AQUI]", // ← AQUÍ va el VIDEO_ID
    stack: ["Kotlin", "XML", "Android", "SQLite"],
    progress: 100
}
```

### Paso C: Actualiza `src/components/sections/ProjectCard.tsx`

Busca donde se muestran los botones de demostración y reemplaza la sección del botón "Demo" con esto:

```tsx
{/* Video Player para YouTube */}
{project.demo?.includes("youtube") ? (
  <div className="w-full mb-4">
    <iframe
      width="100%"
      height="220"
      src={project.demo}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="rounded-lg"
      title="Demo del proyecto"
    />
  </div>
) : (
  /* Botón de demo para otros proyectos */
  project.demo && (
    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm hover:text-[var(--primary)] transition-colors">
      <ExternalLink size={16} /> Demo
    </a>
  )
)}
```

---

## 3. 📸 Actualizar Imágenes de Proyectos

Actualmente son SVGs genéricos. Tienes 3 opciones:

### Opción A: Tus propias capturas (⭐ MEJOR)

1. Toma screenshots de cada proyecto:
   - **PayCarbierzo**: Pantalla desktop del sitio (resuelve responsive)
   - **App Android**: 1-2 pantallas de la app (emulador o dispositivo real)
   - **MotoGP Web**: Pantalla desktop del sitio
   - **JDBC/JPA**: Pantalla de la interfaz gráfica

2. Redimensiona a **1200 x 700px** (relación 16:9)

3. Sube como PNG/JPG a `public/projects/`:
   ```
   /public/projects/paycarbierzo.png
   /public/projects/android-kotlin.png
   /public/projects/motogp.png
   /public/projects/jdbc-jpa.png
   ```

4. Actualiza las rutas en `src/data/projects.ts`:
   ```ts
   image: "/projects/paycarbierzo.png", // cambiar de .svg a .png
   ```

### Opción B: Mockups profesionales (online)

- **Placeit** (https://placeit.net): Mockups de teléfono, laptop, navegador
- **Screenshot.guru**: Captura automática de sitios web
- **Figma**: Diseña mockups personalizados y exporta PNG

### Opción C: Yo te las genero

Adjunta tus capturas en el próximo mensaje y te genero versiones profesionales mejoradas.

---

## 4. ✏️ Actualizar Email de Contacto

En `src/components/Navbar.tsx`, busca:
```tsx
href="mailto:juanfernandez@ejemplo.com"
```

Cámbialo a tu email real:
```tsx
href="mailto:tu.email.real@gmail.com"
```

---

## 5. 🚀 Deploy a Producción

### Vercel (⭐ RECOMENDADO - Gratuito)

Es la forma más fácil:

```bash
# 1. Instala Vercel CLI
npm install -g vercel

# 2. Posiciónate en tu carpeta del proyecto
cd c:\Users\juanf\Desktop\portfolio-2026

# 3. Deploy
vercel
```

Sigue los pasos interactivos. Tu portfolio estará en vivo en algo como:
```
https://portfolio-2026.vercel.app
```

### GitHub Pages

```bash
npm run build
# Luego sigue: GitHub > Settings > Pages > Branch: main/gh-pages
```

### Netlify

```bash
npm run build
# Arrastra la carpeta `.next` a https://netlify.com
```

---

## 📝 Orden Recomendado

1. **Primero**: Sube CV a GitHub Releases ✅
2. **Segundo**: Sube video de app a YouTube ✅
3. **Tercero**: Actualiza código (CV link, video, email) ✅
4. **Cuarto**: Reemplaza imágenes (opcional pero recomendado) ✅
5. **Quinto**: Deploy a Vercel ✅

---

## 🧪 Verificación Local Antes de Deploy

Antes de subir a producción, prueba localmente:

```bash
# Terminal 1: Inicia el servidor
npm run dev

# Abre en navegador: http://localhost:3000

# Verifica:
# ✅ CV descarga correctamente
# ✅ Video de app se ve
# ✅ Email en botón Contacto es correcto
# ✅ Todos los links funcionan
# ✅ Responsive en móvil (F12)
```

---

## ⚡ Checklist Final

- [ ] CV subido a GitHub Releases
- [ ] Video de app en YouTube
- [ ] Links actualizados en código (CV, video, email)
- [ ] Prueba local: `npm run dev` ✅
- [ ] Imágenes de proyectos reemplazadas (opcional)
- [ ] Deploy: `vercel` 🚀
- [ ] Verificar en producción
- [ ] Compartir link en LinkedIn/CV

---

## 🆘 Dudas?

Si algo no funciona:
1. Verifica que los URLs sean correctos (sin espacios)
2. Prueba en modo incógnito (sin caché)
3. Comprueba que los archivos existan en la carpeta correcta
4. Revisa la consola del navegador (F12) para errores

¡Tu portfolio está casi listo! 🎉
