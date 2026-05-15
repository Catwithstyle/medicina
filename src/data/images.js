// Registro central de imágenes
// Usando imports directos para asegurar que Vite las procese correctamente.

// Hero Images
import heroSlide1 from '../assets/images/inicio/GInecoInicio.webp';
import heroSlide2 from '../assets/images/inicio/GinecoInicioFotos.webp';
import heroSlide3 from '../assets/images/inicio/EsteticaInicio.webp';
import heroSlide4 from '../assets/images/inicio/EsteticaInicioFoto.webp';

// WhatsApp Image
import whatsappImage from '../assets/images/inicio/WhatsApp Image 2026-01-24 at 4.50.19 PM.webp';

// Services Images - Estéticos
import botoxImage from '../assets/images/servicios esteticos/Botox.webp';
import depilacionLaserImage from '../assets/images/servicios esteticos/Depilacion Laser.webp';
import dermaExosomasImage from '../assets/images/servicios esteticos/Derma + Exosomas.webp';
import diagnosticoFacialImage from '../assets/images/servicios esteticos/DIagnostico Facial.webp';
import esteticaCorporalHIFUImage from '../assets/images/servicios esteticos/Estetica Corporal con HIFU.webp';
import hollywoodPeelImage from '../assets/images/servicios esteticos/Hollywood Peel.webp';
import hydraFacialImage from '../assets/images/servicios esteticos/HydraFacial.webp';
import laserCO2Image from '../assets/images/servicios esteticos/Laser CO2.webp';
import limpiezaProfundaImage from '../assets/images/servicios esteticos/Limpieza Profunda.webp';
import mascarillasImage from '../assets/images/servicios esteticos/Mascarillas.webp';
import megaDosisVitCImage from '../assets/images/servicios esteticos/Mega dosis Vit C.webp';
import peelingImage from '../assets/images/servicios esteticos/Peeling.webp';
import rejuvenecimientoFacialHIFUImage from '../assets/images/servicios esteticos/Rejuvenecimiento Facial Con HIFU.webp';

// Services Images - Ginecológicos
import atencionPartosCesareasImage from '../assets/images/servicios_ginecologicos/Atencion de partos y cesareas.webp';
import cauterizacionCondilomasImage from '../assets/images/servicios_ginecologicos/Cauterizacion de condilomas.webp';
import colposcopiaImage from '../assets/images/servicios_ginecologicos/Colposcopia.webp';
import consultaGinecologicaImage from '../assets/images/servicios_ginecologicos/Consulta Ginecologica.webp';
import controlPrenatalImage from '../assets/images/servicios_ginecologicos/Control Prenatal.webp';
import papanicolauImage from '../assets/images/servicios_ginecologicos/Papanicolau.webp';
import ultrasonidoMamasImage from '../assets/images/servicios_ginecologicos/Ultra Sonido de MAMAs.webp';
import ultrasonidoPelvicoImage from '../assets/images/servicios_ginecologicos/Ultra Sonido Pelvico.webp';
import ultrasonidoTransvaginalImage from '../assets/images/servicios_ginecologicos/Ultra Sonido Transvaginal.webp';
import ultrasonidosObstetricosImage from '../assets/images/servicios_ginecologicos/Ultrasonidos Obstetricos.webp';
import vacunaVPHImage from '../assets/images/servicios_ginecologicos/Vacuna VPH.webp';

// Promotions Images
import promoAcidoHialuronico from '../assets/images/promociones/Acido ialuronico.webp';
import promoAntiAcne from '../assets/images/promociones/Anti-Acne.webp';
import promoAntiManchas from '../assets/images/promociones/Anti-Manchas.webp';
import promoBioestimulacionColageno from '../assets/images/promociones/Bioestimulacion de colageno.webp';
import promoBioestimuladoresRadiesse from '../assets/images/promociones/Bioestimuladores + Radiesse.webp';
import promoBotoxValoracion from '../assets/images/promociones/Botox +Valoracion.webp';
import promoDepilacionLaser from '../assets/images/promociones/Depilacion Laser.webp';
import promoExosomasPDRN from '../assets/images/promociones/Exosomas + PDRN + Dermapen.webp';
import promoExosomasValoracion from '../assets/images/promociones/Exosomas + valoracion.webp';
import promoHidrolipoclasia from '../assets/images/promociones/Hidrolipoclasia.webp';
import promoComboHIFUHydra from "../assets/images/promociones/HIFU FAcial+HIDRA facial+Mascarilla de Colageno+Escaner Facial.webp";
import promoLabiosEnsuenho from '../assets/images/promociones/Labios de ensueno.webp';
import promoSecuelasAcne from '../assets/images/promociones/Secuelas de Acne.webp';

// Logos
import logoLight from '../assets/images/Logos/LogoBGine.webp';
import logoDark from '../assets/images/Logos/LogoNGine.webp';

export const images = {
    // Sección: Hero (Inicio)
    hero: {
        slide1: heroSlide1,
        slide2: heroSlide2,
        slide3: heroSlide3,
        slide4: heroSlide4,
    },

    // Sección: Nosotros (About)
    about: {
        doctorProfile: heroSlide1, // Usando imagen del hero como placeholder
    },

    // Sección: Instalaciones
    facilities: {
        image1: heroSlide2, // Usando imágenes del hero como placeholders
        image2: heroSlide3,
        image3: heroSlide4,
        image4: heroSlide1,
    },

    // Sección: Servicios
    services: {
        botox: botoxImage,
        depilacionLaser: depilacionLaserImage,
        dermaExosomas: dermaExosomasImage,
        diagnosticoFacial: diagnosticoFacialImage,
        esteticaCorporalHIFU: esteticaCorporalHIFUImage,
        hollywoodPeel: hollywoodPeelImage,
        hydraFacial: hydraFacialImage,
        laserCO2: laserCO2Image,
        limpiezaProfunda: limpiezaProfundaImage,
        mascarillas: mascarillasImage,
        megaDosisVitC: megaDosisVitCImage,
        peeling: peelingImage,
        rejuvenecimientoFacialHIFU: rejuvenecimientoFacialHIFUImage,
        // Ginecológicos
        atencionPartosCesareas: atencionPartosCesareasImage,
        cauterizacionCondilomas: cauterizacionCondilomasImage,
        colposcopia: colposcopiaImage,
        consultaGinecologica: consultaGinecologicaImage,
        controlPrenatal: controlPrenatalImage,
        papanicolau: papanicolauImage,
        ultrasonidoMamas: ultrasonidoMamasImage,
        ultrasonidoPelvico: ultrasonidoPelvicoImage,
        ultrasonidoTransvaginal: ultrasonidoTransvaginalImage,
        ultrasonidosObstetricos: ultrasonidosObstetricosImage,
        vacunaVPH: vacunaVPHImage,
    },

    // Sección: Promociones
    promotions: {
        acidoHialuronico: promoAcidoHialuronico,
        antiAcne: promoAntiAcne,
        antiManchas: promoAntiManchas,
        bioestimulacionColageno: promoBioestimulacionColageno,
        bioestimuladoresRadiesse: promoBioestimuladoresRadiesse,
        botoxValoracion: promoBotoxValoracion,
        depilacionLaser: promoDepilacionLaser,
        exosomasPDRN: promoExosomasPDRN,
        exosomasValoracion: promoExosomasValoracion,
        hidrolipoclasia: promoHidrolipoclasia,
        comboHIFUHydra: promoComboHIFUHydra,
        labiosEnsuenho: promoLabiosEnsuenho,
        secuelasAcne: promoSecuelasAcne,
    },

    // Generales
    logoLight: logoLight,
    logoDark: logoDark,
    whatsapp: whatsappImage,
};
