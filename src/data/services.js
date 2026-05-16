import { images } from './images';

const servicesEs = [
    // Ginecología (Prioridad: Complejas/Cirugías -> Sencillas)
    {
        id: 'cirugia-laparoscopica',
        category: 'ginecologico',
        image: images.services.atencionPartosCesareas, // Placeholder
        title: "Cirugía Laparoscópica",
        description: "Cirugía de mínima invasión para una recuperación más rápida y menos dolorosa.",
        details: "La cirugía laparoscópica es una técnica avanzada que permite realizar procedimientos ginecológicos complejos a través de pequeñas incisiones. Esto se traduce en menos dolor postoperatorio, menor riesgo de complicaciones y una recuperación mucho más rápida.\n\nProcedimientos comunes:\n• Histerectomía (retiro de útero)\n• Miomectomía (retiro de miomas)\n• Quistes de ovario\n• Diagnóstico de endometriosis\n• Ligadura de trompas"
    },
    {
        id: 'atencion-partos-cesareas',
        category: 'ginecologico',
        image: images.services.atencionPartosCesareas,
        title: "Atención de Parto y Cesárea",
        description: "Atención integral y segura durante el parto y la cesárea, priorizando la salud y el bienestar.",
        details: "Brindamos atención integral y segura durante el parto y la cesárea, priorizando la salud y el bienestar de la madre y el bebé en todo momento. Cada nacimiento es único, por lo que ofrecemos una atención personalizada, humana y basada en criterios médicos.\n\nAcompañamos a la futura mamá desde el inicio del trabajo de parto hasta el nacimiento, garantizando un entorno de confianza, respeto y seguridad.\n\nNuestro enfoque\n• Atención del parto vaginal con monitoreo continuo\n• Cesárea indicada solo cuando es médicamente necesaria\n• Vigilancia materna y fetal permanente\n• Manejo adecuado del dolor\n• Acompañamiento profesional antes, durante y después del nacimiento"
    },
    {
        id: 'control-prenatal',
        category: 'ginecologico',
        image: images.services.controlPrenatal,
        title: "Control Prenatal",
        description: "Seguimiento médico periódico durante el embarazo para cuidar la salud de la madre y del bebé.",
        details: "El control prenatal es el seguimiento médico periódico durante el embarazo que permite cuidar la salud de la madre y del bebé desde las primeras semanas de gestación. A través de evaluaciones clínicas, exámenes y ultrasonidos, se detectan oportunamente posibles riesgos y se asegura un embarazo más seguro.\n\nUn control prenatal adecuado reduce complicaciones y favorece el bienestar durante todo el embarazo.\n\n¿Por qué es importante el control prenatal?\n• Vigilancia del crecimiento y desarrollo del bebé\n• Detección y prevención de complicaciones del embarazo\n• Control de la salud materna\n• Ultrasonidos y exámenes de rutina\n• Orientación y acompañamiento a la futura mamá"
    },
    {
        id: 'ultrasonidos-4d',
        category: 'ginecologico',
        image: images.services.ultrasonidosObstetricos,
        title: "Ultrasonidos 4D",
        description: "Observa a tu bebé en tiempo real con imágenes tridimensionales en movimiento.",
        details: "El ultrasonido 4D permite observar al bebé en tiempo real, con imágenes tridimensionales en movimiento, brindando una experiencia única para los futuros padres. Además de crear un momento especial, este estudio también aporta información médica importante sobre el desarrollo fetal.\n\nSe realiza con tecnología avanzada, es seguro, no invasivo y sin radiación.\n\n¿Para qué se realiza el ultrasonido 4D?\n• Observar al bebé en tiempo real\n• Evaluar rasgos faciales y movimientos fetales\n• Fortalecer el vínculo con el bebé\n• Complementar el control prenatal\n• Vivir una experiencia emocional única durante el embarazo"
    },
    {
        id: 'ultrasonido-transvaginal',
        category: 'ginecologico',
        image: images.services.ultrasonidoTransvaginal,
        title: "Ultrasonido Transvaginal",
        description: "Estudio ginecológico de alta precisión que permite evaluar detalladamente los órganos reproductivos femeninos.",
        details: "El ultrasonido transvaginal es un estudio ginecológico de alta precisión que permite evaluar detalladamente los órganos reproductivos femeninos, como el útero, endometrio, ovarios y cuello uterino. Se realiza mediante una sonda especializada y es seguro, indoloro y sin radiación.\n\nEste examen ofrece imágenes más claras que el ultrasonido pélvico abdominal, especialmente en etapas tempranas o cuando se requiere un diagnóstico más específico.\n\n¿Para qué se utiliza?\n• Evaluar sangrado uterino anormal\n• Diagnosticar miomas, quistes ováricos o pólipos\n• Control del endometrio\n• Detección temprana de embarazo\n• Estudios de fertilidad\n• Evaluación de dolor pélvico\n• Seguimiento ginecológico especializado"
    },
    {
        id: 'ultrasonido-pelvico',
        category: 'ginecologico',
        image: images.services.ultrasonidoPelvico,
        title: "Ultrasonido Pélvico",
        description: "Estudio seguro, indoloro y no invasivo que permite evaluar los órganos de la pelvis femenina.",
        details: "El ultrasonido pélvico es un estudio seguro, indoloro y no invasivo que permite evaluar los órganos de la pelvis femenina, como el útero, ovarios, trompas de Falopio y vejiga. Utiliza ondas de sonido para obtener imágenes en tiempo real, sin radiación.\n\nEste examen es fundamental para el diagnóstico temprano, seguimiento y control de diversas condiciones ginecológicas.\n\n¿Para qué sirve el ultrasonido pélvico?\n• Evaluar dolor pélvico o sangrado uterino anormal\n• Detectar quistes ováricos, miomas o masas pélvicas\n• Controlar el ciclo menstrual y alteraciones hormonales\n• Apoyar estudios de fertilidad\n• Seguimiento de embarazos tempranos\n• Evaluar infecciones o inflamaciones pélvicas"
    },
    {
        id: 'ultrasonido-mamas',
        category: 'ginecologico',
        image: images.services.ultrasonidoMamas,
        title: "Ultrasonido de Mamas",
        description: "Estudio seguro, no invasivo y sin radiación para evaluar el tejido mamario en detalle.",
        details: "El ultrasonido de mamas es un estudio seguro, no invasivo y sin radiación que permite evaluar el tejido mamario en detalle mediante ondas de sonido. Es una herramienta fundamental para la detección temprana, diagnóstico y seguimiento de diversas alteraciones mamarias.\n\nEste estudio es especialmente útil en mujeres con mamas densas, en mujeres jóvenes y como complemento de la mamografía.\n\n¿Para qué se utiliza?\n• Evaluar nódulos o masas mamarias\n• Diferenciar lesiones sólidas y quísticas\n• Estudiar dolor, inflamación o secreción del pezón\n• Complementar la mamografía\n• Seguimiento de hallazgos previos\n• Evaluación preventiva de la salud mamaria"
    },
    {
        id: 'colposcopia',
        category: 'ginecologico',
        image: images.services.colposcopia,
        title: "Colposcopía",
        description: "Procedimiento especializado para evaluar detalladamente el cuello uterino, la vagina y la vulva.",
        details: "La colposcopía es un procedimiento ginecológico especializado que permite evaluar de forma detallada el cuello uterino, la vagina y la vulva, utilizando un equipo de aumento llamado colposcopio. Es un estudio seguro, rápido y ambulatorio, fundamental para la detección temprana de lesiones precancerosas y cáncer cervicouterino.\n\nGeneralmente se realiza cuando el Papanicolaou o la prueba de VPH presentan resultados anormales.\n\n¿Para qué se realiza?\n• Evaluar resultados anormales del Papanicolaou\n• Detectar lesiones causadas por el VPH\n• Diagnóstico temprano de cáncer cervicouterino\n• Seguimiento de lesiones cervicales\n• Identificar infecciones o cambios celulares anormales"
    },
    {
        id: 'vacuna-vph',
        category: 'ginecologico',
        image: images.services.vacunaVPH,
        title: "Vacuna contra el VPH",
        description: "Herramienta efectiva para la prevención del cáncer de cuello uterino y enfermedades asociadas al VPH.",
        details: "La vacuna contra el Virus del Papiloma Humano (VPH) es una de las herramientas más efectivas para la prevención del cáncer de cuello uterino, así como de otras enfermedades asociadas al VPH. Es segura, eficaz y recomendada tanto para niñas, niños, adolescentes y adultos jóvenes.\n\nLa vacunación es más efectiva antes del inicio de la vida sexual, pero también ofrece beneficios en personas sexualmente activas.\n\n¿Para qué sirve la vacuna contra el VPH?\n• Prevenir el cáncer cervicouterino\n• Reducir el riesgo de verrugas genitales\n• Proteger contra los tipos de VPH de alto riesgo\n• Disminuir la transmisión del virus\n• Complementar el cuidado ginecológico preventivo"
    },
    {
        id: 'consulta-ginecologica',
        category: 'ginecologico',
        image: images.services.consultaGinecologica,
        title: "Consulta Ginecológica",
        description: "Atención integral para el cuidado de tu salud femenina en todas las etapas de la vida.",
        details: "Atención integral para el cuidado de tu salud femenina en todas las etapas de la vida. Prevención, diagnóstico y tratamiento con un enfoque profesional, humano y confidencial.\n\nServicios incluidos:\n• Controles ginecológicos de rutina\n• Papanicolaou y detección temprana del cáncer cervicouterino\n• Infecciones vaginales y enfermedades de transmisión sexual\n• Trastornos menstruales\n• Planificación familiar y anticoncepción\n• Atención en embarazo y control prenatal\n• Salud ginecológica en menopausia"
    },
    {
        id: 'papanicolau',
        category: 'ginecologico',
        image: images.services.papanicolau,
        title: "Papanicolaou",
        description: "Examen preventivo fundamental para la detección temprana del cáncer de cuello uterino.",
        details: "El Papanicolaou es un examen ginecológico preventivo fundamental para la detección temprana del cáncer de cuello uterino y de lesiones precancerosas, así como de infecciones vaginales. Es un procedimiento rápido, sencillo y generalmente indoloro que puede salvar vidas cuando se realiza de forma periódica.\n\nEstá recomendado como parte del control ginecológico anual.\n\n¿Para qué sirve?\n• Detectar cambios celulares anormales en el cuello uterino\n• Diagnosticar lesiones precancerosas y cáncer cervicouterino\n• Identificar infecciones vaginales\n• Monitorear la salud ginecológica\n• Apoyar el seguimiento del VPH"
    },
    {
        id: 'cauterizacion-condilomas',
        category: 'ginecologico',
        image: images.services.cauterizacionCondilomas,
        title: "Cauterización de Condilomas",
        description: "Procedimiento médico para eliminar verrugas genitales causadas por el VPH.",
        details: "La cauterización de condilomas es un procedimiento médico utilizado para eliminar verrugas genitales causadas por el Virus del Papiloma Humano (VPH). Se realiza de forma segura, ambulatoria y con anestesia local, permitiendo la eliminación directa de las lesiones y mejorando la salud, comodidad y estética de la zona íntima.\n\nEste tratamiento no solo alivia molestias, sino que también reduce el riesgo de propagación del virus.\n\n¿Cuándo se recomienda?\n• Presencia de verrugas genitales visibles\n• Molestias, picazón o sangrado\n• Aumento del número o tamaño de condilomas\n• Razones médicas, funcionales o estéticas"
    },

    // Estético (Prioridad: Complejos -> Sencillos)
    {
        id: 'bioestimuladores',
        category: 'estetico',
        image: images.services.dermaExosomas, // Placeholder
        title: "Bioestimuladores de Colágeno",
        description: "Restaura la firmeza y juventud de tu piel desde adentro estimulando la producción de colágeno natural.",
        details: "Los bioestimuladores son sustancias inyectables que activan las células de la piel para producir nuevo colágeno. A diferencia de los rellenos tradicionales, los resultados son progresivos y muy naturales, mejorando la densidad y elasticidad cutánea.\n\nBeneficios:\n✔️ Recuperación del volumen facial perdido\n✔️ Mejora notable en la flacidez\n✔️ Resultados naturales y duraderos\n✔️ Reducción de líneas de expresión\n✔️ Piel más firme y radiante"
    },
    {
        id: 'rejuvenecimiento-facial-hifu',
        category: 'estetico',
        image: images.services.rejuvenecimientoFacialHIFU,
        title: "Rejuvenecimiento Facial con HIFU",
        description: "Lifting facial sin cirugía. Tratamiento avanzado no invasivo que utiliza ultrasonido focalizado de alta intensidad (HIFU).",
        details: "Lifting facial sin cirugía. Tratamiento avanzado no invasivo que utiliza ultrasonido focalizado de alta intensidad (HIFU) para estimular la producción natural de colágeno, logrando un efecto tensor, rejuvenecedor y de apariencia natural.\n\nBeneficios:\n✔️ Efecto lifting y reafirmante\n✔️ Mejora la flacidez facial\n✔️ Define el contorno del rostro y cuello\n✔️ Estimula colágeno y elastina\n✔️ Resultados progresivos y duraderos"
    },
    {
        id: 'estetica-corporal-hifu',
        category: 'estetico',
        image: images.services.esteticaCorporalHIFU,
        title: "Estética Corporal con HIFU",
        description: "Reafirmación y remodelación sin cirugía. Tratamiento corporal no invasivo que utiliza ultrasonido focalizado de alta intensidad (HIFU).",
        details: "Reafirmación y remodelación sin cirugía. Tratamiento corporal no invasivo que utiliza ultrasonido focalizado de alta intensidad (HIFU) para mejorar la flacidez, estimular colágeno y redefinir el contorno corporal de forma progresiva y natural.\n\nBeneficios:\n✔️ Tensa y reafirma la piel\n✔️ Mejora la flacidez corporal\n✔️ Estimula colágeno y elastina\n✔️ Ayuda a definir el contorno corporal\n✔️ Procedimiento seguro y sin tiempo de recuperación"
    },
    {
        id: 'laser-co2',
        category: 'estetico',
        image: images.services.laserCO2,
        title: "Láser CO₂",
        description: "Rejuvenecimiento y renovación profunda de la piel. Tratamiento avanzado que utiliza láser de dióxido de carbono (CO₂) para eliminar imperfecciones.",
        details: "Rejuvenecimiento y renovación profunda de la piel. Tratamiento avanzado que utiliza láser de dióxido de carbono (CO₂) para eliminar imperfecciones, estimular colágeno y regenerar la piel desde sus capas profundas, logrando un aspecto más firme, uniforme y rejuvenecido.\n\nBeneficios:\n✔️ Mejora arrugas, líneas finas y textura de la piel\n✔️ Trata cicatrices, manchas y daño solar\n✔️ Estimula producción de colágeno y elastina\n✔️ Renueva y rejuvenece la piel de manera profunda\n✔️ Resultados duraderos con procedimiento seguro"
    },
    {
        id: 'botox',
        category: 'estetico',
        image: images.services.botox,
        title: "Toxina Botulínica",
        description: "Rejuvenecimiento y relajación de líneas de expresión. Tratamiento estético que utiliza toxina botulínica para suavizar arrugas dinámicas.",
        details: "Rejuvenecimiento y relajación de líneas de expresión. Tratamiento estético que utiliza toxina botulínica para suavizar arrugas dinámicas, prevenir su aparición y lograr un rostro más descansado y natural, sin perder expresión.\n\nBeneficios:\n✔️ Reduce líneas de expresión y arrugas\n✔️ Previene nuevas arrugas dinámicas\n✔️ Resultados naturales y armoniosos\n✔️ Procedimiento rápido y mínimamente invasivo\n✔️ Sin tiempo de recuperación significativo"
    },
    {
        id: 'derma-exosomas',
        category: 'estetico',
        image: images.services.dermaExosomas,
        title: "Dermapen + Exosomas",
        description: "Regeneración celular avanzada para una piel renovada. Tratamiento facial de alta tecnología que combina microneedling (Dermapen) con exosomas.",
        details: "Regeneración celular avanzada para una piel renovada. Tratamiento facial de alta tecnología que combina microneedling (Dermapen) con exosomas, potenciando la regeneración celular, la producción de colágeno y la reparación profunda de la piel.\n\nBeneficios:\n✔️ Estimula colágeno y elastina\n✔️ Mejora textura, poros y líneas finas\n✔️ Ayuda a tratar manchas y cicatrices\n✔️ Potencia la regeneración celular\n✔️ Piel más firme, luminosa y rejuvenecida"
    },
    {
        id: 'hollywood-peel',
        category: 'estetico',
        image: images.services.hollywoodPeel,
        title: "Hollywood Peel (Peeling de Carbón)",
        description: "Luminosidad y renovación inmediata. Tratamiento facial con láser y carbón activado que limpia profundamente los poros.",
        details: "Luminosidad y renovación inmediata. Tratamiento facial con láser y carbón activado que limpia profundamente los poros, mejora la textura de la piel y aporta un efecto glow inmediato, ideal para lucir una piel más uniforme, suave y rejuvenecida.\n\nBeneficios:\n✔️ Limpieza profunda de poros\n✔️ Reduce manchas y tamaño del poro\n✔️ Mejora textura y tono de la piel\n✔️ Estimula colágeno\n✔️ Efecto glow inmediato y sin tiempo de recuperación"
    },
    {
        id: 'mega-dosis-vit-c',
        category: 'estetico',
        image: images.services.megaDosisVitC,
        title: "Mega Dosis de Vitamina C",
        description: "Renueva, protege y revitaliza tu piel. Tratamiento antioxidante que potencia la producción de colágeno, ilumina el rostro y protege la piel.",
        details: "Renueva, protege y revitaliza tu piel. Tratamiento antioxidante que potencia la producción de colágeno, ilumina el rostro y protege la piel contra daños ambientales, logrando un efecto rejuvenecedor y saludable desde adentro hacia afuera.\n\nBeneficios:\n✔️ Aporta luminosidad y uniformidad al tono de piel\n✔️ Estimula producción de colágeno\n✔️ Protege contra radicales libres y envejecimiento prematuro\n✔️ Mejora hidratación y firmeza\n✔️ Piel más fresca, revitalizada y saludable"
    },
    {
        id: 'hydrafacial',
        category: 'estetico',
        image: images.services.hydraFacial,
        title: "HydraFacial",
        description: "Limpieza, hidratación y rejuvenecimiento en un solo tratamiento. Tratamiento facial avanzado que combina limpieza profunda, exfoliación, extracción e hidratación intensiva.",
        details: "Limpieza, hidratación y rejuvenecimiento en un solo tratamiento. Tratamiento facial avanzado que combina limpieza profunda, exfoliación, extracción e hidratación intensiva mediante tecnología patentada. Ideal para mejorar la textura, luminosidad y salud de la piel desde la primera sesión.\n\nBeneficios:\n✔️ Limpia y desobstruye poros en profundidad\n✔️ Hidrata intensamente sin irritar\n✔️ Mejora líneas finas, manchas y textura\n✔️ Aporta luminosidad inmediata\n✔️ Procedimiento no invasivo y sin tiempo de recuperación"
    },
    {
        id: 'peeling',
        category: 'estetico',
        image: images.services.peeling,
        title: "Peeling Facial",
        description: "Renovación y revitalización de la piel. Tratamiento que exfolia suavemente las capas superficiales de la piel para eliminar células muertas.",
        details: "Renovación y revitalización de la piel. Tratamiento que exfolia suavemente las capas superficiales de la piel para eliminar células muertas, mejorar la textura, unificar el tono y estimular la regeneración celular, logrando una piel más luminosa y saludable.\n\nBeneficios:\n✔️ Elimina células muertas y suaviza la piel\n✔️ Mejora textura, tono y luminosidad\n✔️ Estimula renovación celular y colágeno\n✔️ Reduce manchas, líneas finas y signos de fatiga\n✔️ Piel más fresca, rejuvenecida y radiante"
    },
    {
        id: 'diagnostico-facial',
        category: 'estetico',
        image: images.services.diagnosticoFacial,
        title: "Diagnóstico Facial Inteligente",
        description: "Análisis avanzado de la piel mediante inteligencia artificial que evalúa poros, manchas, arrugas, textura, hidratación y signos de envejecimiento.",
        details: "Análisis avanzado de la piel mediante inteligencia artificial que evalúa poros, manchas, arrugas, textura, hidratación y signos de envejecimiento. Permite detectar necesidades reales de la piel y personalizar cada tratamiento con máxima precisión.\n\nBeneficios:\n✔️ Diagnóstico preciso y personalizado\n✔️ Tratamientos adaptados a tu tipo y condición de piel\n✔️ Resultados más efectivos y medibles\n✔️ Prevención temprana del envejecimiento y daño cutáneo\n✔️ Tecnología segura, rápida y no invasiva"
    },
    {
        id: 'limpieza-profunda',
        category: 'estetico',
        image: images.services.limpiezaProfunda,
        title: "Limpieza Facial Profunda",
        description: "Purificación y renovación de la piel. Tratamiento especializado que elimina impurezas, células muertas y exceso de grasa.",
        details: "Purificación y renovación de la piel. Tratamiento especializado que elimina impurezas, células muertas y exceso de grasa, limpiando los poros en profundidad y mejorando visiblemente la textura y luminosidad de la piel.\n\nBeneficios:\n✔️ Limpieza profunda de poros\n✔️ Eliminación de puntos negros e impurezas\n✔️ Mejora la oxigenación y luminosidad\n✔️ Ayuda a prevenir acné y obstrucciones\n✔️ Deja la piel fresca, suave y renovada"
    },
    {
        id: 'mascarillas',
        category: 'estetico',
        image: images.services.mascarillas,
        title: "Mascarillas Faciales",
        description: "Nutrición y cuidado personalizado para tu piel. Tratamientos complementarios diseñados para hidratar, calmar, revitalizar y mejorar la apariencia de la piel.",
        details: "Nutrición y cuidado personalizado para tu piel. Tratamientos complementarios diseñados para hidratar, calmar, revitalizar y mejorar la apariencia de la piel según sus necesidades específicas, potenciando los resultados de cada facial.\n\nBeneficios:\n✔️ Hidratación profunda\n✔️ Mejora la luminosidad y suavidad\n✔️ Calma y regenera la piel\n✔️ Ayuda a equilibrar y revitalizar\n✔️ Aporta frescura y bienestar inmediato"
    },
    {
        id: 'depilacion-laser',
        category: 'estetico',
        image: images.services.depilacionLaser,
        title: "Láser Depilación",
        description: "Piel suave y libre de vello de forma duradera. Tratamiento avanzado de depilación con láser que elimina el vello no deseado de manera efectiva.",
        details: "Piel suave y libre de vello de forma duradera. Tratamiento avanzado de depilación con láser que elimina el vello no deseado de manera efectiva, segura y progresiva, dejando la piel suave y libre de irritaciones.\n\nBeneficios:\n✔️ Reducción permanente del vello\n✔️ Procedimiento rápido y seguro\n✔️ Previene irritaciones y foliculitis\n✔️ Apta para distintas áreas del cuerpo\n✔️ Resultados visibles desde las primeras sesiones"
    },
];

const servicesEn = [
    // Gynecology (Priority: Complex/Surgeries -> Simple)
    {
        id: 'laparoscopic-surgery',
        category: 'ginecologico',
        image: images.services.atencionPartosCesareas, // Placeholder
        title: "Laparoscopic Surgery",
        description: "Minimally invasive surgery for a faster and less painful recovery.",
        details: "Laparoscopic surgery is an advanced technique that allows complex gynecological procedures to be performed through small incisions. This results in less postoperative pain, lower risk of complications, and a much faster recovery.\n\nCommon procedures:\n• Hysterectomy (uterus removal)\n• Myomectomy (fibroid removal)\n• Ovarian cysts\n• Endometriosis diagnosis\n• Tubal ligation"
    },
    {
        id: 'atencion-partos-cesareas',
        category: 'ginecologico',
        image: images.services.atencionPartosCesareas,
        title: "Childbirth and C-Section Care",
        description: "Comprehensive and safe care during childbirth and C-section, prioritizing health and well-being.",
        details: "We provide comprehensive and safe care during childbirth and C-section, prioritizing the health and well-being of mother and baby at all times. Every birth is unique, which is why we offer personalized, humane care based on medical criteria.\n\nWe accompany the mother-to-be from the onset of labor until birth, guaranteeing an environment of trust, respect, and safety.\n\nOur approach\n• Vaginal delivery care with continuous monitoring\n• C-section indicated only when medically necessary\n• Permanent maternal and fetal surveillance\n• Proper pain management\n• Professional accompaniment before, during, and after birth"
    },
    {
        id: 'control-prenatal',
        category: 'ginecologico',
        image: images.services.controlPrenatal,
        title: "Prenatal Care",
        description: "Periodic medical follow-up during pregnancy to care for the health of the mother and baby.",
        details: "Prenatal care is the periodic medical follow-up during pregnancy that allows caring for the health of the mother and baby from the first weeks of gestation. Through clinical evaluations, exams, and ultrasounds, possible risks are detected early and a safer pregnancy is ensured.\n\nProper prenatal care reduces complications and promotes well-being throughout pregnancy.\n\nWhy is prenatal care important?\n• Monitoring the baby's growth and development\n• Detection and prevention of pregnancy complications\n• Control of maternal health\n• Routine ultrasounds and exams\n• Guidance and accompaniment for the mother-to-be"
    },
    {
        id: 'ultrasonidos-4d',
        category: 'ginecologico',
        image: images.services.ultrasonidosObstetricos,
        title: "4D Ultrasounds",
        description: "Watch your baby in real-time with three-dimensional moving images.",
        details: "The 4D ultrasound allows observing the baby in real-time, with three-dimensional moving images, providing a unique experience for future parents. In addition to creating a special moment, this study also provides important medical information about fetal development.\n\nIt is performed with advanced technology, it is safe, non-invasive, and without radiation.\n\nWhat is a 4D ultrasound for?\n• Observing the baby in real-time\n• Evaluating facial features and fetal movements\n• Strengthening the bond with the baby\n• Complementing prenatal care\n• Living a unique emotional experience during pregnancy"
    },
    {
        id: 'ultrasonido-transvaginal',
        category: 'ginecologico',
        image: images.services.ultrasonidoTransvaginal,
        title: "Transvaginal Ultrasound",
        description: "High-precision gynecological study that allows detailed evaluation of female reproductive organs.",
        details: "A transvaginal ultrasound is a high-precision gynecological study that allows detailed evaluation of female reproductive organs, such as the uterus, endometrium, ovaries, and cervix. It is performed using a specialized probe and is safe, painless, and without radiation.\n\nThis exam offers clearer images than a pelvic abdominal ultrasound, especially in early stages or when a more specific diagnosis is required.\n\nWhat is it used for?\n• Evaluating abnormal uterine bleeding\n• Diagnosing fibroids, ovarian cysts, or polyps\n• Endometrial control\n• Early pregnancy detection\n• Fertility studies\n• Pelvic pain evaluation\n• Specialized gynecological follow-up"
    },
    {
        id: 'ultrasonido-pelvico',
        category: 'ginecologico',
        image: images.services.ultrasonidoPelvico,
        title: "Pelvic Ultrasound",
        description: "Safe, painless, and non-invasive study that allows evaluating female pelvic organs.",
        details: "A pelvic ultrasound is a safe, painless, and non-invasive study that allows evaluating female pelvic organs, such as the uterus, ovaries, fallopian tubes, and bladder. It uses sound waves to obtain real-time images, without radiation.\n\nThis exam is fundamental for early diagnosis, follow-up, and control of various gynecological conditions.\n\nWhat is a pelvic ultrasound for?\n• Evaluating pelvic pain or abnormal uterine bleeding\n• Detecting ovarian cysts, fibroids, or pelvic masses\n• Controlling the menstrual cycle and hormonal alterations\n• Supporting fertility studies\n• Follow-up of early pregnancies\n• Evaluating pelvic infections or inflammations"
    },
    {
        id: 'ultrasonido-mamas',
        category: 'ginecologico',
        image: images.services.ultrasonidoMamas,
        title: "Breast Ultrasound",
        description: "Safe, non-invasive, and radiation-free study to evaluate breast tissue in detail.",
        details: "A breast ultrasound is a safe, non-invasive, and radiation-free study that allows evaluating breast tissue in detail using sound waves. It is a fundamental tool for early detection, diagnosis, and follow-up of various breast alterations.\n\nThis study is especially useful in women with dense breasts, young women, and as a complement to mammography.\n\nWhat is it used for?\n• Evaluating breast lumps or masses\n• Differentiating solid and cystic lesions\n• Studying pain, inflammation, or nipple discharge\n• Complementing mammography\n• Follow-up of previous findings\n• Preventive breast health evaluation"
    },
    {
        id: 'colposcopia',
        category: 'ginecologico',
        image: images.services.colposcopia,
        title: "Colposcopy",
        description: "Specialized procedure to evaluate the cervix, vagina, and vulva in detail.",
        details: "Colposcopy is a specialized gynecological procedure that allows for a detailed evaluation of the cervix, vagina, and vulva, using magnifying equipment called a colposcope. It is a safe, fast, and outpatient study, fundamental for the early detection of precancerous lesions and cervical cancer.\n\nIt is generally performed when Pap smear or HPV test results are abnormal.\n\nWhat is it performed for?\n• Evaluating abnormal Pap smear results\n• Detecting lesions caused by HPV\n• Early diagnosis of cervical cancer\n• Follow-up of cervical lesions\n• Identifying infections or abnormal cellular changes"
    },
    {
        id: 'vacuna-vph',
        category: 'ginecologico',
        image: images.services.vacunaVPH,
        title: "HPV Vaccine",
        description: "Effective tool for the prevention of cervical cancer and diseases associated with HPV.",
        details: "The Human Papillomavirus (HPV) vaccine is one of the most effective tools for the prevention of cervical cancer, as well as other diseases associated with HPV. It is safe, effective, and recommended for girls, boys, adolescents, and young adults.\n\nVaccination is most effective before the onset of sexual life, but it also offers benefits in sexually active people.\n\nWhat is the HPV vaccine for?\n• Preventing cervical cancer\n• Reducing the risk of genital warts\n• Protecting against high-risk HPV types\n• Decreasing virus transmission\n• Complementing preventive gynecological care"
    },
    {
        id: 'consulta-ginecologica',
        category: 'ginecologico',
        image: images.services.consultaGinecologica,
        title: "Gynecological Consultation",
        description: "Comprehensive care for your female health at all stages of life.",
        details: "Comprehensive care for your female health at all stages of life. Prevention, diagnosis, and treatment with a professional, humane, and confidential approach.\n\nIncluded services:\n• Routine gynecological check-ups\n• Pap smear and early detection of cervical cancer\n• Vaginal infections and sexually transmitted diseases\n• Menstrual disorders\n• Family planning and contraception\n• Pregnancy care and prenatal control\n• Gynecological health in menopause"
    },
    {
        id: 'papanicolau',
        category: 'ginecologico',
        image: images.services.papanicolau,
        title: "Pap Smear",
        description: "Fundamental preventive exam for the early detection of cervical cancer.",
        details: "A Pap smear is a fundamental preventive gynecological exam for the early detection of cervical cancer and precancerous lesions, as well as vaginal infections. It is a fast, simple, and generally painless procedure that can save lives when performed periodically.\n\nIt is recommended as part of the annual gynecological check-up.\n\nWhat is it for?\n• Detecting abnormal cellular changes in the cervix\n• Diagnosing precancerous lesions and cervical cancer\n• Identifying vaginal infections\n• Monitoring gynecological health\n• Supporting HPV follow-up"
    },
    {
        id: 'cauterizacion-condilomas',
        category: 'ginecologico',
        image: images.services.cauterizacionCondilomas,
        title: "Wart Cauterization",
        description: "Medical procedure to remove genital warts caused by HPV.",
        details: "Wart cauterization is a medical procedure used to remove genital warts caused by the Human Papillomavirus (HPV). It is performed safely, as an outpatient, and with local anesthesia, allowing direct removal of lesions and improving the health, comfort, and aesthetics of the intimate area.\n\nThis treatment not only relieves discomfort but also reduces the risk of virus spread.\n\nWhen is it recommended?\n• Presence of visible genital warts\n• Discomfort, itching, or bleeding\n• Increase in the number or size of warts\n• Medical, functional, or aesthetic reasons"
    },

    // Aesthetic (Priority: Complex -> Simple)
    {
        id: 'biostimulators',
        category: 'estetico',
        image: images.services.dermaExosomas, // Placeholder
        title: "Collagen Biostimulators",
        description: "Restore your skin's firmness and youth from within by stimulating natural collagen production.",
        details: "Biostimulators are injectable substances that activate skin cells to produce new collagen. Unlike traditional fillers, results are progressive and very natural, improving skin density and elasticity.\n\nBenefits:\n✔️ Recovery of lost facial volume\n✔️ Notable improvement in sagging\n✔️ Natural and long-lasting results\n✔️ Reduction of expression lines\n✔️ Firmer and more radiant skin"
    },
    {
        id: 'rejuvenecimiento-facial-hifu',
        category: 'estetico',
        image: images.services.rejuvenecimientoFacialHIFU,
        title: "Facial Rejuvenation with HIFU",
        description: "Facelift without surgery. Advanced non-invasive treatment that uses high-intensity focused ultrasound (HIFU).",
        details: "Facelift without surgery. Advanced non-invasive treatment that uses high-intensity focused ultrasound (HIFU) to stimulate the natural production of collagen, achieving a tightening, rejuvenating effect and a natural appearance.\n\nBenefits:\n✔️ Lifting and firming effect\n✔️ Improves facial sagging\n✔️ Defines the contour of the face and neck\n✔️ Stimulates collagen and elastin\n✔️ Progressive and long-lasting results"
    },
    {
        id: 'estetica-corporal-hifu',
        category: 'estetico',
        image: images.services.esteticaCorporalHIFU,
        title: "Body Aesthetics with HIFU",
        description: "Firming and remodeling without surgery. Non-invasive body treatment that uses high-intensity focused ultrasound (HIFU).",
        details: "Firming and remodeling without surgery. Non-invasive body treatment that uses high-intensity focused ultrasound (HIFU) to improve sagging, stimulate collagen, and redefine body contours progressively and naturally.\n\nBenefits:\n✔️ Tightens and firms the skin\n✔️ Improves body sagging\n✔️ Stimulates collagen and elastin\n✔️ Helps define body contours\n✔️ Safe procedure with no recovery time"
    },
    {
        id: 'laser-co2',
        category: 'estetico',
        image: images.services.laserCO2,
        title: "CO₂ Laser",
        description: "Deep skin rejuvenation and renewal. Advanced treatment that uses carbon dioxide (CO₂) laser to eliminate imperfections.",
        details: "Deep skin rejuvenation and renewal. Advanced treatment that uses carbon dioxide (CO₂) laser to eliminate imperfections, stimulate collagen, and regenerate the skin from its deep layers, achieving a firmer, uniform, and rejuvenated appearance.\n\nBenefits:\n✔️ Improves wrinkles, fine lines, and skin texture\n✔️ Treats scars, spots, and sun damage\n✔️ Stimulates production of collagen and elastin\n✔️ Renews and rejuvenates the skin deeply\n✔️ Long-lasting results with a safe procedure"
    },
    {
        id: 'botox',
        category: 'estetico',
        image: images.services.botox,
        title: "Toxina Botulínica",
        description: "Rejuvenation and relaxation of expression lines. Aesthetic treatment that uses botulinum toxin to smooth dynamic wrinkles.",
        details: "Rejuvenation and relaxation of expression lines. Aesthetic treatment that uses botulinum toxin to smooth dynamic wrinkles, prevent their appearance, and achieve a more rested and natural face, without losing expression.\n\nBenefits:\n✔️ Reduces expression lines and wrinkles\n✔️ Prevents new dynamic wrinkles\n✔️ Natural and harmonious results\n✔️ Fast and minimally invasive procedure\n✔️ No significant recovery time"
    },
    {
        id: 'derma-exosomas',
        category: 'estetico',
        image: images.services.dermaExosomas,
        title: "Dermapen + Exosomes",
        description: "Advanced cellular regeneration for renewed skin. High-tech facial treatment that combines microneedling (Dermapen) with exosomes.",
        details: "Advanced cellular regeneration for renewed skin. High-tech facial treatment that combines microneedling (Dermapen) with exosomes, enhancing cellular regeneration, collagen production, and deep skin repair.\n\nBenefits:\n✔️ Stimulates collagen and elastin\n✔️ Improves texture, pores, and fine lines\n✔️ Helps treat spots and scars\n✔️ Boosts cellular regeneration\n✔️ Firmer, more luminous, and rejuvenated skin"
    },
    {
        id: 'hollywood-peel',
        category: 'estetico',
        image: images.services.hollywoodPeel,
        title: "Hollywood Peel (Carbon Peeling)",
        description: "Immediate luminosity and renewal. Facial treatment with laser and activated carbon that deeply cleanses pores.",
        details: "Immediate luminosity and renewal. Facial treatment with laser and activated carbon that deeply cleanses pores, improves skin texture, and provides an immediate glow effect, ideal for looking more uniform, smooth, and rejuvenated.\n\nBenefits:\n✔️ Deep pore cleansing\n✔️ Reduces spots and pore size\n✔️ Improves skin texture and tone\n✔️ Stimulates collagen\n✔️ Immediate glow effect and no recovery time"
    },
    {
        id: 'mega-dosis-vit-c',
        category: 'estetico',
        image: images.services.megaDosisVitC,
        title: "Mega Dose Vitamin C",
        description: "Renews, protects, and revitalizes your skin. Antioxidant treatment that boosts collagen production, illuminates the face, and protects skin.",
        details: "Renews, protects, and revitalizes your skin. Antioxidant treatment that boosts collagen production, illuminates the face, and protects skin against environmental damage, achieving a rejuvenating and healthy effect from the inside out.\n\nBenefits:\n✔️ Provides luminosity and uniformity to skin tone\n✔️ Stimulates collagen production\n✔️ Protects against free radicals and premature aging\n✔️ Improves hydration and firmness\n✔️ Fresher, revitalized, and healthy skin"
    },
    {
        id: 'hydrafacial',
        category: 'estetico',
        image: images.services.hydraFacial,
        title: "HydraFacial",
        description: "Cleansing, hydration, and rejuvenation in a single treatment. Advanced facial treatment that combines deep cleansing, exfoliation, extraction, and intensive hydration.",
        details: "Cleansing, hydration, and rejuvenation in a single treatment. Advanced facial treatment that combines deep cleansing, exfoliation, extraction, and intensive hydration through patented technology. Ideal for improving skin texture, luminosity, and health from the first session.\n\nBenefits:\n✔️ Deep cleans and unclogs pores\n✔️ Intensely hydrates without irritating\n✔️ Improves fine lines, spots, and texture\n✔️ Provides immediate luminosity\n✔️ Non-invasive procedure and no recovery time"
    },
    {
        id: 'peeling',
        category: 'estetico',
        image: images.services.peeling,
        title: "Facial Peeling",
        description: "Skin renewal and revitalization. Treatment that gently exfoliates the surface layers of the skin to remove dead cells.",
        details: "Skin renewal and revitalization. Treatment that gently exfoliates the surface layers of the skin to remove dead cells, improve texture, unify tone, and stimulate cell regeneration, achieving more luminous and healthy skin.\n\nBenefits:\n✔️ Removes dead cells and smooths skin\n✔️ Improves texture, tone, and luminosity\n✔️ Stimulates cell renewal and collagen\n✔️ Reduces spots, fine lines, and signs of fatigue\n✔️ Fresher, rejuvenated, and radiant skin"
    },
    {
        id: 'diagnostico-facial',
        category: 'estetico',
        image: images.services.diagnosticoFacial,
        title: "Intelligent Facial Diagnosis",
        description: "Advanced skin analysis using artificial intelligence that evaluates pores, spots, wrinkles, texture, hydration, and signs of aging.",
        details: "Advanced skin analysis using artificial intelligence that evaluates pores, spots, wrinkles, texture, hydration, and signs of aging. It allows for detecting actual skin needs and personalizing each treatment with maximum precision.\n\nBenefits:\n✔️ Precise and personalized diagnosis\n✔️ Treatments adapted to your skin type and condition\n✔️ More effective and measurable results\n✔️ Early prevention of aging and skin damage\n✔️ Safe, fast, and non-invasive technology"
    },
    {
        id: 'limpieza-profunda',
        category: 'estetico',
        image: images.services.limpiezaProfunda,
        title: "Deep Facial Cleansing",
        description: "Purification and renewal of the skin. Specialized treatment that removes impurities, dead cells, and excess oil.",
        details: "Purification and renewal of the skin. Specialized treatment that removes impurities, dead cells, and excess oil, deeply cleansing pores and visibly improving skin texture and luminosity.\n\nBenefits:\n✔️ Deep pore cleansing\n✔️ Removal of blackheads and impurities\n✔️ Improves oxygenation and luminosity\n✔️ Helps prevent acne and clogs\n✔️ Leaves skin fresh, smooth, and renewed"
    },
    {
        id: 'mascarillas',
        category: 'estetico',
        image: images.services.mascarillas,
        title: "Facial Masks",
        description: "Nutriton and personalized care for your skin. Complementary treatments designed to hydrate, soothe, revitalize, and improve skin appearance.",
        details: "Nutrition and personalized care for your skin. Complementary treatments designed to hydrate, soothe, revitalize, and improve skin appearance according to its specific needs, enhancing the results of each facial.\n\nBenefits:\n✔️ Deep hydration\n✔️ Improves luminosity and smoothness\n✔️ Soothes and regenerates skin\n✔️ Helps balance and revitalize\n✔️ Provides immediate freshness and well-being"
    },
    {
        id: 'depilacion-laser',
        category: 'estetico',
        image: images.services.depilacionLaser,
        title: "Laser Hair Removal",
        description: "Smooth and hair-free skin for a long time. Advanced laser hair removal treatment that effectively removes unwanted hair.",
        details: "Smooth and hair-free skin for a long time. Advanced laser hair removal treatment that effectively removes unwanted hair safely and progressively, leaving the skin smooth and irritation-free.\n\nBenefits:\n✔️ Permanent hair reduction\n✔️ Fast and safe procedure\n✔️ Prevents irritation and folliculitis\n✔️ Suitable for different areas of the body\n✔️ Visible results from the first sessions"
    },
];

export const getServices = (lang) => {
    return lang === 'en' ? servicesEn : servicesEs;
};

// Default export for backward compatibility if needed, though we should switch to getServices
export const allServices = servicesEs;
