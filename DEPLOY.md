# 🚀 Guía Rápida de Despliegue

## Método Más Rápido: Vercel (5 minutos)

### Paso 1: Preparar el proyecto
```bash
# Asegúrate de estar en la carpeta del proyecto
cd Medicina
```

### Paso 2: Opción A - Usar Vercel Web (Sin instalar nada)

1. Ve a [vercel.com](https://vercel.com) y crea una cuenta (puedes usar GitHub, Google o email)

2. Haz clic en "Add New" > "Project"

3. Si tienes el código en GitHub:
   - Conecta tu repositorio
   - Vercel detectará automáticamente que es Vite
   - Haz clic en "Deploy"

4. Si NO tienes GitHub:
   - Instala Vercel CLI:
     ```bash
     npm install -g vercel
     ```
   - Luego ejecuta:
     ```bash
     vercel
     ```
   - Sigue las instrucciones en pantalla

### Paso 3: ¡Listo!
Vercel te dará una URL como: `https://medicina-web.vercel.app`

**Esta URL puedes compartirla con cualquiera y funcionará en celulares, tablets y computadoras.**

---

## Método Alternativo: Netlify

### Paso 1: Crear build
```bash
npm run build
```

### Paso 2: Subir a Netlify
1. Ve a [netlify.com](https://netlify.com) y crea cuenta
2. Ve a [app.netlify.com/drop](https://app.netlify.com/drop)
3. Arrastra la carpeta `dist` que se creó
4. ¡Listo! Obtendrás una URL

---

## Compartir la URL

Una vez que tengas la URL (ejemplo: `https://medicina-web.vercel.app`):

✅ Puedes compartirla por:
- WhatsApp
- Email
- Redes sociales
- Código QR
- Mensaje de texto

✅ Funciona en:
- 📱 Celulares (Android e iPhone)
- 💻 Computadoras
- 📱 Tablets

---

## Actualizar la Página

Si haces cambios:

1. **Con Vercel/GitHub:** Solo haz `git push` y se actualiza automáticamente
2. **Con Netlify:** Vuelve a arrastrar la carpeta `dist` actualizada
3. **Con Vercel CLI:** Ejecuta `vercel --prod` de nuevo

---

## ¿Problemas?

- **La página no carga:** Verifica que el build se completó sin errores
- **Las imágenes no se ven:** Asegúrate de que las rutas de imágenes sean correctas
- **No funciona en móvil:** Verifica que el `viewport` esté configurado en `index.html`

---

## Recomendación

**Usa Vercel** - Es el más fácil, rápido y gratuito. Además, si conectas GitHub, cada vez que hagas cambios y los subas, la página se actualiza automáticamente.





