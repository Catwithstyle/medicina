import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Button from '../components/Button';
import { getPromotions } from '../data/promotions';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

export default function PromotionsPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStartX, setTouchStartX] = useState(null);
    const [isPaused, setIsPaused] = useState(false);
    const pauseTimeoutRef = useRef(null);
    const { t, language } = useLanguage();
    const promotionsList = getPromotions(language) || [];

    // Reset activeIndex if promotionsList changes
    useEffect(() => {
        if (activeIndex >= promotionsList.length && promotionsList.length > 0) {
            setActiveIndex(0);
        }
    }, [promotionsList.length, activeIndex]);

    const nextSlide = useCallback(() => {
        if (promotionsList.length > 0) {
            setActiveIndex((prev) => (prev + 1) % promotionsList.length);
        }
    }, [promotionsList.length]);

    const prevSlide = useCallback(() => {
        if (promotionsList.length > 0) {
            setActiveIndex((prev) => (prev - 1 + promotionsList.length) % promotionsList.length);
        }
    }, [promotionsList.length]);

    const pauseAutoPlay = useCallback(() => {
        setIsPaused(true);
        if (pauseTimeoutRef.current) {
            clearTimeout(pauseTimeoutRef.current);
        }
        pauseTimeoutRef.current = setTimeout(() => {
            setIsPaused(false);
        }, 8000); // reanudar auto-play después de 8s sin interacción
    }, []);

    // limpiar timeout al desmontar
    useEffect(() => {
        return () => {
            if (pauseTimeoutRef.current) {
                clearTimeout(pauseTimeoutRef.current);
            }
        };
    }, []);

    // Auto-play
    useEffect(() => {
        if (promotionsList.length === 0 || isPaused) return;
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide, promotionsList.length, isPaused]);

    // Navegaciones manuales (botones, dots, swipe) -> pausan auto-play un momento
    const goToNext = useCallback(() => {
        pauseAutoPlay();
        nextSlide();
    }, [nextSlide, pauseAutoPlay]);

    const goToPrev = useCallback(() => {
        pauseAutoPlay();
        prevSlide();
    }, [prevSlide, pauseAutoPlay]);

    const goToIndex = useCallback(
        (index) => {
            if (promotionsList.length === 0) return;
            pauseAutoPlay();
            setActiveIndex(index % promotionsList.length);
        },
        [pauseAutoPlay, promotionsList.length]
    );

    const handleWhatsApp = (promo) => {
        const phoneNumber = '50589565361'; // Clínica ginecológica
        const message = encodeURIComponent(`Hola, me interesa la promoción: ${promo.title}`);
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    const handleTouchStart = (e) => {
        if (e.touches && e.touches.length > 0) {
            pauseAutoPlay();
            setTouchStartX(e.touches[0].clientX);
        }
    };

    const handleTouchEnd = (e) => {
        if (touchStartX === null) return;
        if (e.changedTouches && e.changedTouches.length > 0) {
            const endX = e.changedTouches[0].clientX;
            const deltaX = endX - touchStartX;

            // Umbral para considerar un swipe
            if (Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    goToPrev();
                } else {
                    goToNext();
                }
            }
        }
        setTouchStartX(null);
    };

    const activePromo = promotionsList[activeIndex];
    const promoImage = activePromo ? activePromo.image : null;

    return (
        <>
            <SEO
                title="Promociones Especiales - Ginecología y Estética"
                description="Promociones exclusivas en tratamientos estéticos y ginecológicos. Descuentos en botox, ácido hialurónico, depilación láser, HydraFacial, HIFU facial y más. Ofertas limitadas en Managua."
                keywords="promociones estética Managua, ofertas ginecología Managua, descuentos botox Managua, promociones ácido hialurónico Managua, ofertas depilación láser Managua, promociones HydraFacial Managua"
                image={promoImage}
            />
            <main className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 via-pink-50/30 to-purple-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden flex flex-col items-center justify-center relative transition-colors duration-300">

                {/* Background Ambient - More colorful */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100/40 via-purple-100/30 to-blue-100/40 dark:from-purple-950/40 dark:via-pink-950/30 dark:to-blue-950/40 transition-colors duration-300"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,64,129,0.1),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05]"></div>

                {/* Decorative elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10 flex flex-col items-center h-full py-12 md:py-16">

                    <div className="text-center mb-10 md:mb-16 relative">
                        <div className="inline-block mb-4">
                            <span className="px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light rounded-full text-sm font-bold uppercase tracking-wider">
                                {language === 'es' ? 'Ofertas Especiales' : 'Special Offers'}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 dark:from-pink-400 dark:via-purple-400 dark:to-pink-400 mb-6 tracking-tight animate-gradient">
                            {language === 'es' ? 'PROMOCIONES' : 'PROMOTIONS'}
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                            {language === 'es' ? 'Aprovecha nuestras ofertas exclusivas por tiempo limitado.' : 'Take advantage of our limited-time exclusive offers.'}
                        </p>
                        <div className="mt-4 flex items-center justify-center gap-2 text-pink-600 dark:text-pink-400">
                            <Star className="w-5 h-5 fill-current" />
                            <span className="text-sm uppercase tracking-widest font-bold">
                                {language === 'es' ? '¡Tu salud merece lo mejor!' : 'Your health deserves the best!'}
                            </span>
                            <Star className="w-5 h-5 fill-current" />
                        </div>
                    </div>

                    {/* 3D Carousel Container */}
                    {promotionsList.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-gray-600 dark:text-gray-400 text-lg">
                                {language === 'es' ? 'No hay promociones disponibles en este momento.' : 'No promotions available at this time.'}
                            </p>
                        </div>
                    ) : (
                        <div
                            className="relative w-full max-w-5xl h-[450px] md:h-[600px] flex items-center justify-center perspective-1000"
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >
                            {promotionsList.map((promo, index) => {

                                // Calculate position
                                let offset = index - activeIndex;
                                if (offset < 0) offset += promotionsList.length;

                                // normalize for circular buffer thinking if needed, but simple linear offset view usually nicer for limited items
                                // Let's do a centered active approach

                                // Rethink logic for circular centered:
                                const len = promotionsList.length;
                                // Find shortest distance in modular arithmetic
                                let distance = (index - activeIndex + len) % len;
                                if (distance > len / 2) distance -= len;

                                const isActive = distance === 0;
                                const isPrev = distance === -1;
                                const isNext = distance === 1;

                                // Style base
                                let style = "absolute transition-all duration-700 ease-out shadow-2xl rounded-3xl overflow-hidden border border-white/10";
                                // Transforms
                                let transform = "";
                                let zIndex = 0;
                                let opacity = 0;

                                if (isActive) {
                                    transform = "translateX(0) scale(1) rotateY(0deg)";
                                    zIndex = 30;
                                    opacity = 1;
                                } else if (isPrev) {
                                    transform = "translateX(-60%) scale(0.8) rotateY(15deg)";
                                    zIndex = 20;
                                    opacity = 0.6;
                                } else if (isNext) {
                                    transform = "translateX(60%) scale(0.8) rotateY(-15deg)";
                                    zIndex = 20;
                                    opacity = 0.6;
                                } else if (distance === -2) {
                                    transform = "translateX(-100%) scale(0.6) rotateY(25deg)";
                                    zIndex = 10;
                                    opacity = 0.3;
                                } else if (distance === 2) {
                                    transform = "translateX(100%) scale(0.6) rotateY(-25deg)";
                                    zIndex = 10;
                                    opacity = 0.3;
                                } else {
                                    transform = "translateZ(-500px) scale(0)";
                                    zIndex = 0;
                                    opacity = 0;
                                }

                                // Mobile Override: Stack them or just show active?
                                // For simplicity in this advanced view, we rely on transforms.
                                // On very small screens, maybe simple stack.

                                return (
                                    <div
                                        key={promo.id}
                                        className={`${style} bg-white dark:bg-gray-800 w-[300px] md:w-[420px] h-[450px] md:h-[580px] flex flex-col border-2 border-gray-200 dark:border-gray-700 cursor-pointer`}
                                        style={{
                                            transform: transform,
                                            zIndex: zIndex,
                                            opacity: opacity,
                                            pointerEvents: 'auto',
                                            filter: isActive ? 'none' : 'blur(2px) grayscale(50%)'
                                        }}
                                        onClick={() => goToIndex(index)}
                                    >
                                        {/* Image Section - Larger */}
                                        <div className="h-[55%] relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${promo.color} opacity-30 z-10`}></div>
                                            <img
                                                src={promo.image}
                                                alt={`Promoción - ${promo.title} en Managua con Dra. Virginia Fonseca`}
                                                className="w-full h-full object-cover object-center"
                                                loading="lazy"
                                            />
                                            {/* Decorative corner */}
                                            <div className={`absolute top-0 left-0 w-20 h-20 bg-gradient-to-br ${promo.color} opacity-20`}></div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="h-[45%] p-6 md:p-8 flex flex-col justify-between bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 backdrop-blur-sm border-t-2 border-gray-100 dark:border-gray-700">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-1 mb-3">
                                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-yellow-500" />)}
                                                </div>
                                                <h2 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                                                    {promo.title}
                                                </h2>
                                                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                                                    {promo.description}
                                                </p>
                                            </div>

                                            <Button
                                                onClick={() => handleWhatsApp(promo)}
                                                className={`w-full py-4 md:py-5 rounded-xl font-bold text-base md:text-lg bg-gradient-to-r ${promo.color} hover:brightness-110 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all text-white border-2 border-white/20`}
                                            >
                                                {language === 'es' ? 'RECLAMAR OFERTA' : 'CLAIM OFFER'}
                                            </Button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* Controls & Indicators */}
                    {promotionsList.length > 0 && (
                        <div className="mt-10 md:mt-12 z-30 space-y-6">
                            {/* Navigation Buttons */}
                            <div className="flex items-center justify-center gap-4">
                                <button
                                    onClick={goToPrev}
                                    className="p-4 rounded-full bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 text-gray-800 dark:text-white transition-all backdrop-blur-md shadow-xl hover:shadow-2xl border-2 border-gray-200 dark:border-gray-700 hover:scale-110"
                                    aria-label="Anterior"
                                >
                                    <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
                                </button>

                                {/* Slide Indicators */}
                                <div className="flex gap-2 px-4">
                                    {promotionsList.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => goToIndex(idx)}
                                            className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex
                                                ? 'w-8 bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg'
                                                : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                                                }`}
                                            aria-label={`Ir a promoción ${idx + 1}`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={goToNext}
                                    className="p-4 rounded-full bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 text-gray-800 dark:text-white transition-all backdrop-blur-md shadow-xl hover:shadow-2xl border-2 border-gray-200 dark:border-gray-700 hover:scale-110"
                                    aria-label="Siguiente"
                                >
                                    <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
                                </button>
                            </div>

                            {/* Promotion Counter */}
                            <div className="text-center">
                                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
                                    {activeIndex + 1} / {promotionsList.length}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}
