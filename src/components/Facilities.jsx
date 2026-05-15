import React from 'react';
import { images as assets } from '../data/images';
import { Shield, Sparkles, Heart, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Facilities() {
    const { t } = useLanguage();

    const facilityImages = [
        assets.facilities.image1,
        assets.facilities.image2,
        assets.facilities.image3,
        assets.facilities.image4
    ];

    const featuresText = t('facilities.features');

    const features = [
        { icon: <Shield />, text: featuresText[0] },
        { icon: <Sparkles />, text: featuresText[1] },
        { icon: <Heart />, text: featuresText[2] },
        { icon: <CheckCircle />, text: featuresText[3] }
    ];

    const labels = t('facilities.labels');

    return (
        <section className="pt-20 pb-64 md:pt-32 md:pb-80 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 relative z-10">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-primary font-bold tracking-wider uppercase text-xs md:text-sm mb-2">{t('facilities.title_small')}</h2>
                    <h3 className="text-3xl md:text-5xl font-serif font-bold text-gray-800 dark:text-white mb-4 md:mb-6">
                        {t('facilities.title_main')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                        {t('facilities.description')}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
                    {/* Text and Features */}
                    <div className="lg:w-1/3 space-y-6 text-center lg:text-left">
                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                                        {feature.icon}
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-200 font-medium">{feature.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gallery Grid */}
                    <div className="lg:w-2/3 grid grid-cols-2 gap-4 md:gap-6 w-full">
                        <div className="relative h-80 md:h-[400px] group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                            <img
                                src={facilityImages[0]}
                                alt="Consultorio moderno - Dra. Virginia Fonseca"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="absolute bottom-4 left-4 text-white font-bold">{labels.consulting_room}</div>
                            </div>
                        </div>
                        <div className="grid grid-rows-2 gap-4 md:gap-6">
                            <div className="relative h-40 md:h-[188px] group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                                <img
                                    src={facilityImages[1]}
                                    alt="Sala de espera - Dra. Virginia Fonseca"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="absolute bottom-4 left-4 text-white font-bold text-sm">{labels.waiting_room}</div>
                                </div>
                            </div>
                            <div className="relative h-40 md:h-[188px] group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                                <img
                                    src={facilityImages[2]}
                                    alt="Equipo médico - Dra. Virginia Fonseca"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="absolute bottom-4 left-4 text-white font-bold text-sm">{labels.technology}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
