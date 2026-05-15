import React from 'react';
import Hero from '../components/Hero';
import ScrollReveal from '../components/ScrollReveal';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';

export default function Home() {
    return (
        <>
            <SEO
                title="Dra. Virginia Fonseca - Ginecología y Estética en Managua"
                description="Dra. Virginia Fonseca - Especialista en Ginecología y Obstetricia. Servicios ginecológicos y estéticos con tecnología de vanguardia. Consulta en Managua. Botox, ácido hialurónico, depilación láser, HydraFacial y más."
                keywords="ginecología Managua, ginecólogo Managua, obstetricia Managua, ginecología estética, botox Managua, ácido hialurónico Managua, depilación láser Managua, HydraFacial Managua, HIFU facial, consulta ginecológica Managua"
            />
            <main className="flex-grow">
                <Hero />
                <ScrollReveal>
                    <Services />
                </ScrollReveal>
                <ScrollReveal>
                    <Benefits />
                </ScrollReveal>
                <ScrollReveal>
                    <Testimonials />
                </ScrollReveal>
            </main>
        </>
    );
}
