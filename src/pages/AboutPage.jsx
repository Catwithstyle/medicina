import React from 'react';
import About from '../components/About';
import Facilities from '../components/Facilities';
import SEO from '../components/SEO';

export default function AboutPage() {
    return (
        <>
            <SEO
                title="Sobre Nosotros - Dra. Virginia"
                description="Conoce a la Dra. Virginia, especialista en Ginecología y Obstetricia con más de 15 años de experiencia. Atención personalizada y tecnología de vanguardia en Managua."
                keywords="Dra. Virginia, ginecólogo Managua, médico ginecólogo Managua, especialista ginecología Managua, doctora ginecología Managua"
            />
            <main className="flex-grow pt-28 md:pt-32 bg-gray-50 dark:bg-gray-800 min-h-screen relative z-0">
                <About />
                <Facilities />
            </main>
        </>
    );
}
