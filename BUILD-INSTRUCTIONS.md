# Instrucciones para Build y Deploy

## 🚀 Construir el proyecto para producción

### 1. Generar el build
```bash
npm run build
```

Esto creará una carpeta `dist` con todos los archivos optimizados para producción.

### 2. Probar el build localmente
```bash
npm run preview
```

Esto iniciará un servidor local en `http://localhost:4173` para que puedas probar el build antes de subirlo.

## 📤 Opciones para compartir el sitio

### Opción 1: Netlify Drop (Más fácil)
1. Ve a [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Arrastra la carpeta `dist` completa
3. Obtendrás un link público inmediatamente (ej: `https://random-name-123.netlify.app`)
4. Puedes personalizar el nombre después

### Opción 2: Vercel
1. Ve a [https://vercel.com](https://vercel.com)
2. Conecta tu repositorio o arrastra la carpeta `dist`
3. El archivo `vercel.json` ya está configurado

### Opción 3: GitHub Pages
1. Sube la carpeta `dist` a un repositorio de GitHub
2. Ve a Settings > Pages
3. Selecciona la carpeta `dist` como source
4. El sitio estará disponible en `https://tu-usuario.github.io/repo-name`

### Opción 4: Servidor propio (Apache)
1. Sube todo el contenido de la carpeta `dist` a tu servidor
2. El archivo `.htaccess` ya está incluido y configurado
3. Asegúrate de que mod_rewrite esté habilitado

### Opción 5: Otros servicios
- **Surge.sh**: `surge dist/`
- **Firebase Hosting**: Configura Firebase y usa `firebase deploy`
- **Cloudflare Pages**: Conecta tu repositorio o sube la carpeta `dist`

## ✅ Verificaciones antes de compartir

1. ✅ Ejecuta `npm run build` sin errores
2. ✅ Prueba con `npm run preview` que todo funcione
3. ✅ Verifica que todas las imágenes se vean correctamente
4. ✅ Prueba la navegación entre páginas
5. ✅ Verifica que los botones de WhatsApp funcionen
6. ✅ Prueba en móvil y desktop

## 📝 Notas importantes

- El build está optimizado para producción (minificado, sin console.logs)
- Las rutas están configuradas para funcionar como SPA (Single Page Application)
- Los archivos de configuración para diferentes plataformas ya están incluidos:
  - `.htaccess` para Apache
  - `vercel.json` para Vercel
  - `_redirects` para Netlify

## 🔗 Compartir el link

Una vez que tengas el link público, puedes compartirlo directamente. El sitio funcionará completamente con todas sus funcionalidades.

