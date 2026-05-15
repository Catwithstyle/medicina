import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { getServices } from '../data/services';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
    const navigate = useNavigate();
    const { t, language } = useLanguage();
    const services = getServices(language);

    const handleServiceClick = (serviceId) => {
        navigate(`/servicios/${serviceId}`);
    };

    return (
        <section id="servicios" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden">
            {/* Enhanced decorative elements */}
            <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ff4081 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-12 md:mb-20 animate-fade-in-up">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-bold tracking-wider uppercase text-xs md:text-sm mb-4">
                        {t('services.title_small')}
                    </span>
                    <h3 className="text-4xl md:text-6xl lg:text-display-2 font-serif font-bold text-gray-900 dark:text-white mb-6 leading-tight text-balance">
                        {t('services.title_main')}
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-base md:text-lg px-4 leading-relaxed">
                        {t('services.description')}
                    </p>
                </div>

                {/* Continuous Carousel */}
                <div className="mb-12 relative">

                    {/* Gradient Edges to avoid abrupt cuts */}
                    <div className="absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-20 pointer-events-none"></div>

                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1.5}
                        loop={true}
                        speed={5000} // Slow speed for continuous effect
                        allowTouchMove={true} // Allow user to grab it
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        breakpoints={{
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 24,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 4.5,
                                spaceBetween: 32,
                            }
                        }}
                        className="services-swiper py-4"
                    >
                        {services.map((service) => (
                            <SwiperSlide key={service.id} className="h-auto">
                                <div
                                    onClick={() => handleServiceClick(service.id)}
                                    className="
                                        group cursor-pointer
                                        rounded-3xl overflow-hidden
                                        bg-white dark:bg-gray-800 
                                        shadow-medium hover:shadow-large hover:-translate-y-3
                                        transition-all duration-500 ease-out
                                        border border-gray-100 dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary/30
                                        h-full flex flex-col
                                        select-none
                                        relative
                                    "
                                >
                                    {/* Hover gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-500 z-0"></div>

                                    {/* Image */}
                                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center z-10">
                                        <img
                                            src={service.image}
                                            alt={`${service.title} - ${service.category === 'estetico' ? 'Tratamiento estético' : 'Servicio ginecológico'} en Managua con Dra. Virginia Fonseca`}
                                            className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110 group-hover:brightness-105"
                                            loading="lazy"
                                        />
                                        {/* Category Badge - Enhanced */}
                                        <div className="absolute top-4 right-4 z-20">
                                            <span className={`
                                                px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wide backdrop-blur-xl shadow-lg
                                                transition-all duration-300 group-hover:scale-110
                                                ${service.category === 'estetico'
                                                    ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white ring-2 ring-pink-500/30'
                                                    : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white ring-2 ring-blue-500/30'
                                                }
                                            `}>
                                                {service.category === 'estetico' ? t('services.esthetic') : t('services.gynecological')}
                                            </span>
                                        </div>
                                        {/* Shine effect on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-10"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-1 flex flex-col justify-between relative z-10">
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                                                {service.title}
                                            </h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                        {/* Arrow indicator */}
                                        <div className="mt-4 flex items-center text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            Ver detalles
                                            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Main CTA - Enhanced */}
                <div className="text-center relative z-20 mt-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <Button
                        onClick={() => navigate('/servicios')}
                        variant="outline"
                        size="lg"
                        className="shadow-lg hover:shadow-xl bg-white dark:bg-gray-800"
                    >
                        {t('services.view_all')}
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Button>
                </div>

            </div>

            <style>{`
                /* Ensure linear timing for continuous loop */
                .services-swiper .swiper-wrapper {
                    transition-timing-function: linear;
                }
            `}</style>
        </section>
    );
}
