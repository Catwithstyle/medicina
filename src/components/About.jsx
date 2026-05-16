import React from 'react';
import Button from './Button';
import { images } from '../data/images';
import { Award, Heart, Users, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
    const { t } = useLanguage();

    const handleWhatsApp = () => {
        const phoneNumber = '50589565361'; // Clínica ginecológica
        const message = encodeURIComponent('Hola, me gustaría conocer más sobre los servicios');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    const achievements = [
        { icon: <Award />, number: "15+", label: t('about.stats.experience') },
        { icon: <Users />, number: "Miles", label: t('about.stats.patients') },
        { icon: <Heart />, number: "100%", label: t('about.stats.commitment') },
    ];

    const values = t('about.values');

    return (
        <section id="nosotros" className="py-20 md:py-32 lg:py-40 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 overflow-hidden relative z-0">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 z-0"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative order-1 lg:order-1">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl mx-4 lg:mx-0 group">
                            <img
                                src={images.about.doctorProfile}
                                alt="Dra. Virginia Fonseca - Especialista en Ginecología y Estética en Managua"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                            {/* Badge */}
                            <div className="absolute top-6 right-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                                <div className="flex items-center gap-2">
                                    <Award className="w-5 h-5 text-primary" />
                                    <span className="font-bold text-sm text-gray-800 dark:text-white">Especialista Certificada</span>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-primary rounded-full blur-3xl opacity-30 animate-pulse-slow z-0"></div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2 space-y-6 order-2 lg:order-2 text-center lg:text-left">
                        <h2 className="text-primary font-bold tracking-wider uppercase text-xs md:text-sm">{t('about.title_small')}</h2>
                        <h3 className="text-3xl md:text-5xl font-serif font-bold text-gray-800 dark:text-white leading-tight">
                            {t('about.title_main')}
                        </h3>

                        <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                            <p dangerouslySetInnerHTML={{ __html: t('about.bio_p1').replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-800 dark:text-white text-lg">$1</strong>') }} />
                            <p>
                                {t('about.bio_p2')}
                            </p>
                        </div>

                        {/* Values List */}
                        <div className="space-y-3 pt-4">
                            {values.map((value, index) => (
                                <div key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span className="text-sm md:text-base">{value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Mission & Vision */}
                        {t('about.mission_vision') && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                                <div className="p-5 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/10 text-left">
                                    <h4 className="text-primary font-bold text-lg mb-2 flex items-center gap-2">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        {t('about.mission_vision.mission_title')}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {t('about.mission_vision.mission_text')}
                                    </p>
                                </div>
                                <div className="p-5 rounded-2xl bg-purple-500/5 dark:bg-purple-500/10 border border-purple-500/10 text-left">
                                    <h4 className="text-purple-600 dark:text-purple-400 font-bold text-lg mb-2 flex items-center gap-2">
                                        <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                                        {t('about.mission_vision.vision_title')}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {t('about.mission_vision.vision_text')}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Achievements */}
                        <div className="pt-6 grid grid-cols-3 gap-4 md:gap-6">
                            {achievements.map((achievement, index) => (
                                <div key={index} className="text-center lg:text-left bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                    <div className="flex justify-center lg:justify-start text-primary mb-2">
                                        {achievement.icon}
                                    </div>
                                    <span className="text-2xl md:text-3xl font-bold text-primary block">{achievement.number}</span>
                                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">{achievement.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6 flex flex-col sm:flex-row gap-4">
                            <Button
                                onClick={handleWhatsApp}
                                variant="primary"
                                className="w-full sm:w-auto px-8 py-3 text-base font-bold shadow-lg hover:scale-105 transition-transform"
                            >
                                {t('about.cta_book')}
                            </Button>
                            <Button variant="outline" className="w-full sm:w-auto px-8 py-3 bg-white dark:bg-gray-800">
                                {t('about.cta_more')}
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
