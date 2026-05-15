import React from 'react';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';

export default function TestimonialsPage() {
    return (
        <>
            <SEO
                title="Testimonios de Pacientes - Dra. Virginia Fonseca"
                description="Lee las experiencias y testimonios de nuestras pacientes. Opiniones reales sobre nuestros servicios de ginecología y estética en Managua."
                keywords="testimonios ginecología Managua, opiniones pacientes Managua, reseñas Dra. Virginia Fonseca, experiencias ginecología Managua"
            />
            <main className="pt-20 bg-white dark:bg-gray-900 min-h-screen">
                <Testimonials />
            </main>
        </>
    );
}
