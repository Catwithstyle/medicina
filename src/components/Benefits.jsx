import React from 'react';
import { Shield, Heart, Clock, Users, Award, Sparkles } from 'lucide-react';
import Button from './Button';
import { useLanguage } from '../context/LanguageContext';

export default function Benefits() {
    const { t } = useLanguage();

    const icons = [
        <Heart className="w-8 h-8" />,
        <Shield className="w-8 h-8" />,
        <Clock className="w-8 h-8" />,
        <Award className="w-8 h-8" />,
        <Sparkles className="w-8 h-8" />,
        <Users className="w-8 h-8" />
    ];

    const benefits = t('benefits.items').map((item, index) => ({
        ...item,
        icon: icons[index]
    }));

    const handleWhatsApp = () => {
        const phoneNumber = '50589565361'; // Clínica ginecológica
        const message = encodeURIComponent('Hola, me gustaría agendar una cita');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    return (
        <section className="py-20 md:py-32 lg:py-40 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden">
            {/* Enhanced Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 pointer-events-none animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/8 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/2 pointer-events-none animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16 md:mb-24 animate-fade-in-up">
                    <span className="inline-block py-2 px-5 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary font-bold text-xs md:text-sm tracking-wider uppercase mb-6 shadow-soft">
                        {t('benefits.title_small')}
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-display-2 font-serif font-bold text-gray-900 dark:text-white mb-6 leading-tight text-balance">
                        {t('benefits.title_main')}
                    </h2>
                    <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-blue-500 to-primary mx-auto rounded-full mb-8 shadow-glow"></div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                        {t('benefits.description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-20">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="
                                group p-8 md:p-10 rounded-3xl 
                                bg-white dark:bg-gray-800 
                                border border-gray-100 dark:border-gray-700
                                shadow-soft dark:shadow-none
                                hover:shadow-large hover:border-primary/20 dark:hover:border-primary/20
                                hover:-translate-y-3 
                                transition-all duration-500 ease-out
                                relative overflow-hidden
                                animate-fade-in-up
                            "
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Background gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-blue-500/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-blue-500/5 transition-all duration-500 rounded-3xl"></div>

                            {/* Icon container - Enhanced */}
                            <div className="
                                relative z-10
                                w-20 h-20 rounded-2xl mb-6 
                                flex items-center justify-center 
                                bg-gradient-to-br from-primary/10 via-primary/5 to-blue-500/10 
                                text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500
                                shadow-md group-hover:shadow-glow
                            ">
                                {benefit.icon}
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors duration-300">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                                    {benefit.description}
                                </p>
                            </div>

                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>

                {/* CTA Section - Enhanced */}
                <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    {/* Gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-primary/30 dark:via-blue-600/30 dark:to-primary/30 z-0"></div>
                    {/* Pattern overlay */}
                    <div className="absolute inset-0 opacity-10 z-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-blue-500/20 blur-3xl z-0"></div>

                    <div className="relative z-10 p-10 md:p-16 lg:p-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-2xl">
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight">
                                {t('benefits.cta_title')}
                            </h3>
                            <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
                                {t('benefits.cta_desc')}
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <Button
                                onClick={handleWhatsApp}
                                variant="secondary"
                                size="lg"
                                className="shadow-glow-lg hover:shadow-glow-lg bg-white text-primary border-0"
                            >
                                {t('benefits.cta_button')}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}




