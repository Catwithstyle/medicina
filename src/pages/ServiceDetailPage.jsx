import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Button from '../components/Button';
import { getServices } from '../data/services';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

export default function ServiceDetailPage() {
    const { serviceId } = useParams();
    const navigate = useNavigate();
    const { t, language } = useLanguage();
    const service = getServices(language).find(s => s.id === serviceId);

    const handleWhatsApp = () => {
        const phoneNumber = '50589565361'; // Clínica ginecológica
        const message = encodeURIComponent(`Hola, me interesa agendar una cita para: ${service?.title || 'servicio'}`);
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    if (!service) {
        return (
            <>
                <SEO
                    title="Servicio no encontrado"
                    description="El servicio solicitado no está disponible."
                />
                <main className="pt-20 bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Servicio no encontrado</h1>
                        <Button onClick={() => navigate('/servicios')} variant="primary">
                            Volver a Servicios
                        </Button>
                    </div>
                </main>
            </>
        );
    }

    const serviceKeywords = `${service.title.toLowerCase()}, ${service.title.toLowerCase()} Managua, ${service.category === 'estetico' ? 'tratamiento estético' : 'servicio ginecológico'} Managua`;

    return (
        <>
            <SEO
                title={service.title}
                description={service.description}
                keywords={serviceKeywords}
                image={service.image}
                type="article"
            />
            <main className="pt-20 bg-white dark:bg-gray-900 min-h-screen">
                <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
                    {/* Back Button */}
                    <button
                        onClick={() => navigate('/servicios')}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary mb-6 md:mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-medium">Volver a Servicios</span>
                    </button>

                    {/* Service Image */}
                    <div className="relative w-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] rounded-2xl md:rounded-3xl overflow-hidden mb-8 md:mb-12 shadow-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <img
                            src={service.image}
                            alt={`${service.title} - Tratamiento de ${service.category === 'estetico' ? 'estética facial' : 'ginecología'} en Managua con Dra. Virginia Fonseca`}
                            className="w-full h-auto max-h-[600px] md:max-h-[700px] object-contain"
                            loading="eager"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                            <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight drop-shadow-lg">
                                {service.title}
                            </h1>
                        </div>
                    </div>

                    {/* Service Content */}
                    <div className="max-w-4xl mx-auto space-y-8">
                        {/* Description Section */}
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-lg">
                            <div className="mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 pb-3 border-b-2 border-primary/30">
                                    Descripción
                                </h2>
                                <p className="text-gray-700 dark:text-gray-200 text-lg md:text-xl leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>

                        {/* Details Section */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 pb-3 border-b-2 border-primary/30">
                                Detalles del Servicio
                            </h2>

                            {/* Parse details to separate description and benefits */}
                            {(() => {
                                const detailsParts = service.details.split('\n\nBeneficios:');
                                const mainDescription = detailsParts[0];
                                const benefitsText = detailsParts[1] || '';
                                const benefits = benefitsText.split('\n').filter(b => b.trim().startsWith('✔️'));

                                return (
                                    <>
                                        <div className="mb-8">
                                            <p className="text-gray-700 dark:text-gray-200 text-base md:text-lg leading-relaxed whitespace-pre-line">
                                                {mainDescription}
                                            </p>
                                        </div>

                                        {benefits.length > 0 && (
                                            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                                                <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-6">
                                                    Beneficios
                                                </h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {benefits.map((benefit, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                                        >
                                                            <span className="text-green-500 text-xl flex-shrink-0 mt-0.5">✔️</span>
                                                            <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed">
                                                                {benefit.replace('✔️', '').trim()}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </>
                                );
                            })()}
                        </div>

                        {/* CTA Button */}
                        <div className="text-center pt-8">
                            <Button
                                onClick={handleWhatsApp}
                                variant="primary"
                                className="px-10 py-5 text-lg md:text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all font-bold"
                            >
                                Agendar Cita para este Servicio
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

