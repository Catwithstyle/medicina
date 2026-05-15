# Implementación SEO - Dra. Virginia Fonseca

## Mejoras SEO Implementadas

### 1. Componente SEO Dinámico (`src/components/SEO.jsx`)
- Componente reutilizable que actualiza meta tags dinámicamente por página
- Soporte para títulos, descripciones, keywords, imágenes y URLs canónicas
- Structured Data (JSON-LD) con Schema.org para MedicalBusiness
- Tags Open Graph y Twitter Card para redes sociales
- Hreflang tags para soporte multiidioma

### 2. Meta Tags Mejorados (`index.html`)
- Meta tags primarios optimizados
- Geo-localización (Managua, Nicaragua)
- Open Graph completo para Facebook
- Twitter Card para Twitter
- Tags de tema y PWA

### 3. SEO por Página
Cada página tiene SEO específico:
- **Home**: Título y descripción principal con keywords de servicios
- **Servicios**: Listado de servicios con keywords específicos
- **Detalle de Servicio**: SEO individual por servicio con imagen
- **Promociones**: SEO para ofertas y descuentos
- **Nosotros**: SEO sobre la doctora y experiencia
- **Testimonios**: SEO para opiniones y reseñas

### 4. Optimización de Imágenes
- Alt texts descriptivos y SEO-friendly en todas las imágenes
- Lazy loading para mejorar rendimiento
- Eager loading para imágenes críticas (hero, primera imagen)

### 5. Archivos SEO Estáticos
- **robots.txt**: Configuración para motores de búsqueda
- **sitemap.xml**: Mapa del sitio con todas las páginas importantes

### 6. Structured Data (Schema.org)
- Tipo: MedicalBusiness
- Información de contacto y ubicación
- Especialidades médicas
- Coordenadas geográficas
- Área de servicio (Managua)

## URLs SEO-Friendly

Las rutas ya están optimizadas:
- `/` - Homepage
- `/nosotros` - Sobre nosotros
- `/servicios` - Listado de servicios
- `/servicios/:serviceId` - Detalle de servicio (ej: `/servicios/botox`)
- `/promociones` - Promociones
- `/testimonios` - Testimonios

## Keywords Principales

- ginecología Managua
- ginecólogo Managua
- obstetricia Managua
- ginecología estética Managua
- botox Managua
- ácido hialurónico Managua
- depilación láser Managua
- HydraFacial Managua
- HIFU facial Managua
- Dra. Virginia Fonseca

## Próximos Pasos Recomendados

1. **Crear imagen OG**: Crear `/public/images/og-image.jpg` (1200x630px) para compartir en redes sociales
2. **Google Search Console**: Registrar el sitio y verificar propiedad
3. **Google My Business**: Crear/actualizar perfil de negocio
4. **Analytics**: Implementar Google Analytics 4
5. **Performance**: Optimizar imágenes (WebP, compresión)
6. **Mobile**: Verificar que todo esté optimizado para móviles (ya está implementado)

## Notas Importantes

- El dominio `dramonicanavarro.com` está hardcodeado en algunos lugares. Actualizar cuando tengas el dominio real.
- Las coordenadas geográficas están configuradas para Managua, Nicaragua
- El sitemap.xml incluye todos los servicios actuales. Actualizar cuando agregues nuevos servicios.

