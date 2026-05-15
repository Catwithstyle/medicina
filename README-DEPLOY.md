# 🚀 Guía de Deploy - Dra. Mónica Navarro

## ✅ Build Completado

El proyecto está listo para compartir. La carpeta `dist` contiene todos los archivos optimizados para producción.

## 📦 Contenido del Build

- ✅ HTML optimizado
- ✅ CSS minificado y optimizado
- ✅ JavaScript dividido en chunks para mejor carga
- ✅ Imágenes optimizadas
- ✅ Archivos de configuración para diferentes plataformas

## 🌐 Opciones para Compartir

### Opción 1: Netlify Drop (RECOMENDADO - Más fácil)

1. Ve a: https://app.netlify.com/drop
2. Arrastra toda la carpeta `dist` completa
3. ¡Listo! Obtendrás un link público inmediatamente
4. Ejemplo: `https://tu-sitio-123.netlify.app`
5. Puedes personalizar el nombre después en configuración

**Ventajas:**
- Gratis
- Link público inmediato
- SSL automático (https)
- El archivo `_redirects` ya está configurado

### Opción 2: Vercel

1. Ve a: https://vercel.com
2. Crea cuenta o inicia sesión
3. Click en "Add New" > "Project"
4. Arrastra la carpeta `dist` o conecta tu repositorio
5. El archivo `vercel.json` ya está configurado

**Ventajas:**
- Gratis
- Muy rápido
- SSL automático
- Deploy automático desde GitHub (opcional)

### Opción 3: GitHub Pages

1. Crea un repositorio en GitHub
2. Sube el contenido de la carpeta `dist` al repositorio
3. Ve a Settings > Pages
4. Selecciona la rama `main` y carpeta `/ (root)`
5. El sitio estará en: `https://tu-usuario.github.io/repo-name`

### Opción 4: Servidor Apache (Hosting tradicional)

1. Sube todo el contenido de `dist` a tu servidor vía FTP
2. El archivo `.htaccess` ya está incluido y configurado
3. Asegúrate de que `mod_rewrite` esté habilitado en Apache
4. El sitio funcionará en tu dominio

### Opción 5: Otros Servicios

- **Surge.sh**: `npm install -g surge` luego `surge dist/`
- **Firebase Hosting**: Configura Firebase y usa `firebase deploy`
- **Cloudflare Pages**: Conecta repositorio o sube carpeta `dist`

## 🔧 Comandos Útiles

```bash
# Generar build de producción
npm run build

# Probar el build localmente antes de subir
npm run preview

# Ver el sitio en http://localhost:4173
```

## ✅ Verificaciones Antes de Compartir

Antes de compartir el link, verifica:

1. ✅ Ejecuta `npm run build` sin errores
2. ✅ Prueba con `npm run preview` que todo funcione
3. ✅ Verifica que todas las imágenes se vean
4. ✅ Prueba la navegación entre páginas
5. ✅ Verifica que los botones de WhatsApp funcionen
6. ✅ Prueba en móvil y desktop
7. ✅ Verifica que el modo oscuro funcione

## 📝 Archivos de Configuración Incluidos

El build incluye archivos de configuración para diferentes plataformas:

- **`.htaccess`** - Para servidores Apache
- **`vercel.json`** - Para Vercel
- **`_redirects`** - Para Netlify
- **`robots.txt`** - Para motores de búsqueda
- **`sitemap.xml`** - Mapa del sitio

## 🔗 Compartir el Link

Una vez que tengas el link público:

1. Comparte el link directamente con quien quieras
2. El sitio funcionará completamente con todas sus funcionalidades
3. Todas las rutas funcionarán correctamente (SPA configurado)
4. Las imágenes se cargarán correctamente
5. El modo oscuro funcionará
6. Los botones de WhatsApp funcionarán

## 💡 Tips

- El build está optimizado para producción (minificado, sin console.logs)
- Las rutas están configuradas para funcionar como SPA
- Todas las imágenes están optimizadas
- El sitio es completamente responsive
- Funciona en todos los navegadores modernos

## 🆘 Problemas Comunes

**Problema**: Las rutas no funcionan al recargar la página
**Solución**: Asegúrate de que el archivo de configuración correspondiente esté en el servidor (`.htaccess`, `vercel.json`, o `_redirects`)

**Problema**: Las imágenes no se ven
**Solución**: Verifica que todas las imágenes estén en la carpeta `dist/assets/images/`

**Problema**: El sitio se ve diferente en producción
**Solución**: Limpia la caché del navegador (Ctrl+F5 o Cmd+Shift+R)

## 📞 Soporte

Si tienes problemas con el deploy, verifica:
1. Que todos los archivos de `dist` estén subidos
2. Que el archivo de configuración correspondiente esté presente
3. Que el servidor soporte archivos estáticos
4. Que las rutas estén configuradas para SPA

¡Listo para compartir! 🎉

