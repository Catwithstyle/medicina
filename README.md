# Dra. Virginia Fonseca - Sitio Web

Sitio web profesional para la consulta de ginecología y obstetricia de la Dra. Virginia Fonseca.

## 🚀 Desplegar y Compartir la Página

Para que otras personas puedan abrir la página en sus celulares, necesitas desplegarla en internet. Aquí tienes las opciones más fáciles y gratuitas:

### Opción 1: Vercel (Recomendado - Más Fácil) ⭐

1. **Crear cuenta en Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Regístrate con GitHub, Google o email

2. **Instalar Vercel CLI (opcional, también puedes usar la web):**
   ```bash
   npm install -g vercel
   ```

3. **Desplegar desde la terminal:**
   ```bash
   # En la carpeta del proyecto
   vercel
   ```
   
   O simplemente:
   - Ve a [vercel.com/new](https://vercel.com/new)
   - Conecta tu repositorio de GitHub (si lo tienes) o arrastra la carpeta del proyecto
   - Vercel detectará automáticamente que es un proyecto Vite
   - Haz clic en "Deploy"

4. **¡Listo!** Vercel te dará una URL como: `https://tu-proyecto.vercel.app`
   - Esta URL puedes compartirla con cualquiera
   - Funciona perfectamente en celulares

### Opción 2: Netlify

1. **Crear cuenta en Netlify:**
   - Ve a [netlify.com](https://netlify.com)
   - Regístrate gratis

2. **Desplegar:**
   - Ve a [app.netlify.com/drop](https://app.netlify.com/drop)
   - Primero ejecuta: `npm run build`
   - Arrastra la carpeta `dist` que se creó
   - ¡Listo! Obtendrás una URL como: `https://tu-proyecto.netlify.app`

### Opción 3: GitHub Pages

1. **Crear repositorio en GitHub:**
   - Crea una cuenta en [github.com](https://github.com)
   - Crea un nuevo repositorio

2. **Subir el código:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/tu-repo.git
   git push -u origin main
   ```

3. **Configurar GitHub Pages:**
   - Ve a Settings > Pages en tu repositorio
   - Selecciona la rama `main` y carpeta `/dist`
   - Activa GitHub Actions para build automático

### Opción 4: Build Local para Compartir

Si solo quieres probar rápidamente:

1. **Crear el build:**
   ```bash
   npm run build
   ```

2. **Previsualizar localmente:**
   ```bash
   npm run preview
   ```

3. **Para compartir en la misma red:**
   - Encuentra tu IP local (ej: `192.168.1.100`)
   - Accede desde otro dispositivo: `http://192.168.1.100:4173`

## 📱 Características Móviles

- ✅ Diseño completamente responsive
- ✅ Optimizado para celulares y tablets
- ✅ Botón flotante de WhatsApp
- ✅ Navegación táctil optimizada
- ✅ Carga rápida

## 🛠️ Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Crear build de producción
npm run build

# Previsualizar build
npm run preview
```

## 📞 Contacto

- **Ginecología:** +505 8956 5361
- **Estética:** +505 8961 8546
- **Ubicación:** K. 9.8 Carretera Masaya, Oficentro Metropolitano, Managua, Nicaragua.

## 📝 Notas

- El proyecto está configurado para funcionar con React Router
- Todas las rutas se redirigen a `index.html` para SPA (Single Page Application)
- Los archivos de configuración para Vercel y Netlify ya están incluidos

## 🔗 Enlaces Útiles

- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de React](https://react.dev/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/)
