import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEO({
    title,
    description,
    keywords,
    image,
    type = 'website',
    canonicalUrl
}) {
    const location = useLocation();
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    const currentUrl = `${baseUrl}${location.pathname}`;
    const finalUrl = canonicalUrl || currentUrl;

    const defaultTitle = 'Dra. Virginia Fonseca - Ginecología y Estética | Managua';
    const defaultDescription = 'Dra. Virginia Fonseca - Especialista en Ginecología y Obstetricia. Servicios ginecológicos y estéticos con tecnología de vanguardia y atención personalizada en Managua.';
    const defaultKeywords = 'Dra. Virginia Fonseca, ginecología, obstetricia, ginecología estética, consulta ginecológica, Managua, ginecólogo Managua, estética facial, botox, ácido hialurónico, depilación láser';
    const defaultImage = `${baseUrl}/images/og-image.jpg`;

    const finalTitle = title ? `${title} | Dra. Virginia Fonseca` : defaultTitle;
    const finalDescription = description || defaultDescription;
    const finalKeywords = keywords || defaultKeywords;
    const finalImage = image || defaultImage;

    useEffect(() => {
        // Update document title
        document.title = finalTitle;

        // Update or create meta tags
        const updateMetaTag = (property, content) => {
            let element = document.querySelector(`meta[property="${property}"]`) ||
                document.querySelector(`meta[name="${property}"]`);

            if (!element) {
                element = document.createElement('meta');
                if (property.startsWith('og:') || property.startsWith('twitter:')) {
                    element.setAttribute('property', property);
                } else {
                    element.setAttribute('name', property);
                }
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Basic meta tags
        updateMetaTag('description', finalDescription);
        updateMetaTag('keywords', finalKeywords);
        updateMetaTag('author', 'Dra. Virginia Fonseca');

        // Open Graph tags
        updateMetaTag('og:type', type);
        updateMetaTag('og:title', finalTitle);
        updateMetaTag('og:description', finalDescription);
        updateMetaTag('og:url', finalUrl);
        updateMetaTag('og:image', finalImage);
        updateMetaTag('og:site_name', 'Dra. Virginia Fonseca - Ginecología y Estética');
        updateMetaTag('og:locale', 'es_MX');

        // Twitter Card tags
        updateMetaTag('twitter:card', 'summary_large_image');
        updateMetaTag('twitter:title', finalTitle);
        updateMetaTag('twitter:description', finalDescription);
        updateMetaTag('twitter:image', finalImage);

        // Canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', finalUrl);

        // Hreflang tags for language support
        const updateHreflang = (lang, url) => {
            let hreflang = document.querySelector(`link[hreflang="${lang}"]`);
            if (!hreflang) {
                hreflang = document.createElement('link');
                hreflang.setAttribute('rel', 'alternate');
                hreflang.setAttribute('hreflang', lang);
                document.head.appendChild(hreflang);
            }
            hreflang.setAttribute('href', url);
        };

        // Add hreflang tags (assuming Spanish and English versions)
        updateHreflang('es', finalUrl);
        updateHreflang('en', finalUrl);
        updateHreflang('x-default', finalUrl);

        // Structured Data (JSON-LD)
        const structuredData = {
            '@context': 'https://schema.org',
            '@type': 'MedicalBusiness',
            name: 'Dra. Virginia Fonseca',
            description: finalDescription,
            url: baseUrl,
            telephone: '+50589565361',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'K. 9.8 Carretera Masaya, Oficentro Metropolitano',
                addressLocality: 'Managua',
                addressRegion: 'Managua',
                addressCountry: 'NI'
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: '19.2433',
                longitude: '-103.7244'
            },
            priceRange: '$$',
            image: finalImage,
            medicalSpecialty: ['Ginecología', 'Obstetricia', 'Ginecología Estética'],
            areaServed: {
                '@type': 'City',
                name: 'Managua'
            }
        };

        // Remove existing structured data
        const existingScript = document.querySelector('script[type="application/ld+json"]');
        if (existingScript) {
            existingScript.remove();
        }

        // Add new structured data
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(structuredData);
        document.head.appendChild(script);

    }, [finalTitle, finalDescription, finalKeywords, finalImage, finalUrl, type]);

    return null;
}

