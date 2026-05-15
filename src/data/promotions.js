import { images } from './images';

const promotionsEs = [
    {
        id: 1,
        title: "Ácido Hialurónico",
        discount: "20% OFF",
        description: "Relleno y hidratación profunda para rejuvenecer y dar volumen natural.",
        image: images.promotions.acidoHialuronico,
        color: "from-pink-500 to-rose-500"
    },
    {
        id: 2,
        title: "Anti-Acné",
        discount: "15% OFF",
        description: "Tratamiento integral para controlar acné y mejorar textura de la piel.",
        image: images.promotions.antiAcne,
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: 3,
        title: "Anti-Manchas",
        discount: "15% OFF",
        description: "Corrección de manchas y tono desigual para una piel más uniforme.",
        image: images.promotions.antiManchas,
        color: "from-amber-500 to-yellow-400"
    },
    {
        id: 4,
        title: "Bioestimulación de Colágeno",
        discount: "25% OFF",
        description: "Estimula la producción de colágeno para una piel más firme y rejuvenecida.",
        image: images.promotions.bioestimulacionColageno,
        color: "from-emerald-500 to-teal-500"
    },
    {
        id: 5,
        title: "Bioestimuladores + Radiesse",
        discount: "30% OFF",
        description: "Combinación avanzada de bioestimuladores y Radiesse para máxima firmeza.",
        image: images.promotions.bioestimuladoresRadiesse,
        color: "from-fuchsia-500 to-purple-500"
    },
    {
        id: 6,
        title: "Bótox + Valoración",
        discount: "20% OFF",
        description: "Aplicación de bótox con valoración personalizada para resultados naturales.",
        image: images.promotions.botoxValoracion,
        color: "from-sky-500 to-indigo-500"
    },
    {
        id: 7,
        title: "Depilación Láser",
        discount: "20% OFF",
        description: "Eliminación prolongada del vello con láser de última generación.",
        image: images.promotions.depilacionLaser,
        color: "from-red-500 to-rose-500"
    },
    {
        id: 8,
        title: "Exosomas + PDRN + Dermapen",
        discount: "30% OFF",
        description: "Regeneración celular avanzada para piel dañada o envejecida.",
        image: images.promotions.exosomasPDRN,
        color: "from-teal-500 to-cyan-500"
    },
    {
        id: 9,
        title: "Exosomas + Valoración",
        discount: "20% OFF",
        description: "Tratamiento con exosomas y valoración médica para personalizar resultados.",
        image: images.promotions.exosomasValoracion,
        color: "from-violet-500 to-purple-500"
    },
    {
        id: 10,
        title: "Hidrolipoclasia",
        discount: "25% OFF",
        description: "Tratamiento corporal para reducción localizada de grasa.",
        image: images.promotions.hidrolipoclasia,
        color: "from-orange-500 to-red-500"
    },
    {
        id: 11,
        title: "HIFU Facial + Hidrafacial + Mascarilla + Escáner",
        discount: "35% OFF",
        description: "Paquete completo para lifting, limpieza e hidratación con diagnóstico avanzado.",
        image: images.promotions.comboHIFUHydra,
        color: "from-indigo-500 to-sky-500"
    },
    {
        id: 12,
        title: "Labios de Ensueño",
        discount: "20% OFF",
        description: "Perfilado y volumen natural para unos labios definidos y armoniosos.",
        image: images.promotions.labiosEnsuenho,
        color: "from-rose-500 to-pink-500"
    },
    {
        id: 13,
        title: "Secuelas de Acné",
        discount: "25% OFF",
        description: "Tratamiento especializado para marcas y cicatrices de acné.",
        image: images.promotions.secuelasAcne,
        color: "from-slate-500 to-gray-600"
    },
];

const promotionsEn = [
    {
        id: 1,
        title: "Hyaluronic Acid",
        discount: "20% OFF",
        description: "Filling and deep hydration to rejuvenate and give natural volume.",
        image: images.promotions.acidoHialuronico,
        color: "from-pink-500 to-rose-500"
    },
    {
        id: 2,
        title: "Anti-Acne",
        discount: "15% OFF",
        description: "Comprehensive treatment to control acne and improve skin texture.",
        image: images.promotions.antiAcne,
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: 3,
        title: "Anti-Spots",
        discount: "15% OFF",
        description: "Correction of spots and uneven tone for more uniform skin.",
        image: images.promotions.antiManchas,
        color: "from-amber-500 to-yellow-400"
    },
    {
        id: 4,
        title: "Collagen Biostimulation",
        discount: "25% OFF",
        description: "Stimulates collagen production for firmer, rejuvenated skin.",
        image: images.promotions.bioestimulacionColageno,
        color: "from-emerald-500 to-teal-500"
    },
    {
        id: 5,
        title: "Biostimulators + Radiesse",
        discount: "30% OFF",
        description: "Advanced combination of biostimulators and Radiesse for maximum firmness.",
        image: images.promotions.bioestimuladoresRadiesse,
        color: "from-fuchsia-500 to-purple-500"
    },
    {
        id: 6,
        title: "Botox + Consultation",
        discount: "20% OFF",
        description: "Botox application with personalized assessment for natural results.",
        image: images.promotions.botoxValoracion,
        color: "from-sky-500 to-indigo-500"
    },
    {
        id: 7,
        title: "Laser Hair Removal",
        discount: "20% OFF",
        description: "Long-lasting hair reduction with state-of-the-art laser.",
        image: images.promotions.depilacionLaser,
        color: "from-red-500 to-rose-500"
    },
    {
        id: 8,
        title: "Exosomes + PDRN + Dermapen",
        discount: "30% OFF",
        description: "Advanced cellular regeneration for damaged or aged skin.",
        image: images.promotions.exosomasPDRN,
        color: "from-teal-500 to-cyan-500"
    },
    {
        id: 9,
        title: "Exosomes + Consultation",
        discount: "20% OFF",
        description: "Exosome treatment with medical consultation to personalize results.",
        image: images.promotions.exosomasValoracion,
        color: "from-violet-500 to-purple-500"
    },
    {
        id: 10,
        title: "Hidrolipoclasia",
        discount: "25% OFF",
        description: "Body treatment for localized fat reduction.",
        image: images.promotions.hidrolipoclasia,
        color: "from-orange-500 to-red-500"
    },
    {
        id: 11,
        title: "Facial HIFU + Hydrafacial + Mask + Scanner",
        discount: "35% OFF",
        description: "Complete package for lifting, cleansing and hydration with advanced diagnosis.",
        image: images.promotions.comboHIFUHydra,
        color: "from-indigo-500 to-sky-500"
    },
    {
        id: 12,
        title: "Dream Lips",
        discount: "20% OFF",
        description: "Shaping and natural volume for defined and harmonious lips.",
        image: images.promotions.labiosEnsuenho,
        color: "from-rose-500 to-pink-500"
    },
    {
        id: 13,
        title: "Acne Scarring",
        discount: "25% OFF",
        description: "Specialized treatment for acne marks and scars.",
        image: images.promotions.secuelasAcne,
        color: "from-slate-500 to-gray-600"
    },
];

export const getPromotions = (lang) => {
    return lang === 'en' ? promotionsEn : promotionsEs;
};

// Default export for backward compatibility
export const promotions = promotionsEs;
