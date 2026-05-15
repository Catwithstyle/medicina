import React, { useState, useEffect } from 'react';
import Button from './Button';
import { images } from '../data/images';
import { CalendarCheck, ArrowRight, Sparkles, ChevronLeft, ChevronRight, Award, Users, Heart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const heroImages = [
    images.hero.slide1, // Ginecología
    images.hero.slide2, // Ginecología
    images.hero.slide3, // Estética
    images.hero.slide4  // Estética
];

export default function Hero() {
    const { t } = useLanguage();
    const navigate = useNavigate();
    const [currentImage, setCurrentImage] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [isAutoPlaying]);

    const nextSlide = () => {
        setIsAutoPlaying(false);
        setCurrentImage((prev) => (prev + 1) % heroImages.length);
    };

    const prevSlide = () => {
        setIsAutoPlaying(false);
        setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    };

    const handleSeeServices = () => {
        navigate('/servicios');
    };

    return (
        <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500 pt-28 md:pt-32">

            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ff4081 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            {/* Floating Gradient Orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl"></div>

            {/* Animated Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${3 + Math.random() * 2}s`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center min-h-[calc(100vh-6rem)] py-12 md:py-16">

                    {/* Left Side - Text Content */}
                    <div className="flex flex-col justify-center space-y-6 md:space-y-8 animate-fade-in-left relative">
                        {/* Badge with Animation */}
                        <div className="inline-block animate-fade-in-down" style={{ animationDelay: '0.1s' }}>
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary dark:text-primary-400 font-medium text-xs md:text-sm uppercase tracking-wider shadow-soft border border-primary/20">
                                <Sparkles className="w-3 h-3 md:w-4 md:h-4 animate-pulse" />
                                Ginecología en Managua
                            </span>
                        </div>

                        {/* Main Title with Gradient Effect */}
                        <div className="relative">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-display-1 font-serif font-bold text-gray-900 dark:text-white leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                Dra. Virginia Fonseca
                            </h1>
                            {/* Decorative underline */}
                            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full animate-slide-right" style={{ animationDelay: '0.4s' }}></div>
                        </div>

                        {/* Subtitle */}
                        <p className="text-xl md:text-2xl lg:text-3xl font-serif text-gray-700 dark:text-gray-300 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            Ginecología y Estética
                        </p>

                        {/* Description */}
                        <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl animate-fade-in-up md:text-left" style={{ animationDelay: '0.4s' }}>
                            Especialista en Ginecología y Obstetricia, Cirugía Laparoscópica / Ultrasonografista / Colposcopista / Gineco Estética Láser, Medicina Estética Facial y Corporal.
                        </p>

                        {/* Quick Stats - Compact */}
                        <div className="flex flex-wrap gap-4 md:gap-6 pt-2 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                            <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl px-3 py-2 border border-gray-200/50 dark:border-gray-700/50 shadow-soft">
                                <Award className="w-4 h-4 text-primary" />
                                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">10+ Años</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl px-3 py-2 border border-gray-200/50 dark:border-gray-700/50 shadow-soft">
                                <Users className="w-4 h-4 text-primary" />
                                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">2k+ Pacientes</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl px-3 py-2 border border-gray-200/50 dark:border-gray-700/50 shadow-soft">
                                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Certificada</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                            <Button
                                onClick={handleSeeServices}
                                variant="primary"
                                size="lg"
                                className="group shadow-lg hover:shadow-xl"
                            >
                                Ver Tratamientos
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                            <Button
                                onClick={() => {
                                    const phoneNumber = '50589565361'; // Clínica ginecológica
                                    const message = encodeURIComponent('Hola, me gustaría agendar una cita');
                                    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                                }}
                                variant="outline"
                                size="lg"
                                className="group"
                            >
                                <CalendarCheck className="w-4 h-4 mr-2" />
                                Agendar Cita
                            </Button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex items-center gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">Excelente atención</span>
                        </div>
                    </div>

                    {/* Right Side - Carousel (Horizontal Format) */}
                    <div className="relative w-full h-full min-h-[350px] md:min-h-[450px] lg:min-h-[550px] flex items-center justify-center animate-fade-in-right">
                        {/* Carousel Container - Wide Horizontal Format */}
                        <div className="relative w-full h-full">
                            {/* Background Blur Effect (for depth) */}
                            {heroImages.map((img, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 overflow-hidden rounded-2xl md:rounded-3xl transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'
                                        }`}
                                >
                                    <img
                                        src={img}
                                        alt=""
                                        className="w-full h-full object-cover blur-3xl scale-125 opacity-40 dark:opacity-30"
                                    />
                                </div>
                            ))}

                            {/* Carousel Images - Horizontal Landscape */}
                            <div className="relative z-10 w-full h-full">
                                <div className="relative w-full h-full aspect-[16/9] md:aspect-[16/8] lg:aspect-[16/7] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                                    {heroImages.map((img, index) => {
                                        const isActive = index === currentImage;
                                        const isPrev = index === (currentImage - 1 + heroImages.length) % heroImages.length;
                                        const isNext = index === (currentImage + 1) % heroImages.length;

                                        return (
                                            <div
                                                key={index}
                                                className={`absolute inset-0 transition-all duration-700 ease-in-out ${isActive
                                                    ? 'opacity-100 z-30 scale-100'
                                                    : isPrev || isNext
                                                        ? 'opacity-0 lg:opacity-20 z-20 scale-95'
                                                        : 'opacity-0 z-10 scale-90'
                                                    }`}
                                            >
                                                <img
                                                    src={img}
                                                    alt={`Dra. Virginia - Ginecología y Estética - Imagen ${index + 1}`}
                                                    className="w-full h-full object-cover object-center"
                                                    loading={index === 0 ? "eager" : "lazy"}
                                                />

                                                {/* Overlay Gradient */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/5"></div>

                                                {/* Decorative Glow */}
                                                {isActive && (
                                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
                                                )}
                                            </div>
                                        );
                                    })}

                                    {/* Navigation Controls */}
                                    <button
                                        onClick={prevSlide}
                                        className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/50 dark:border-white/20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl text-gray-800 dark:text-white/80 hover:bg-white hover:text-primary dark:hover:bg-gray-800 dark:hover:text-primary hover:scale-110 hover:border-primary/50 active:scale-95 items-center justify-center transition-all duration-300 z-40 group shadow-lg hover:shadow-glow"
                                        aria-label="Imagen anterior"
                                    >
                                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform duration-300" />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/50 dark:border-white/20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl text-gray-800 dark:text-white/80 hover:bg-white hover:text-primary dark:hover:bg-gray-800 dark:hover:text-primary hover:scale-110 hover:border-primary/50 active:scale-95 items-center justify-center transition-all duration-300 z-40 group shadow-lg hover:shadow-glow"
                                        aria-label="Siguiente imagen"
                                    >
                                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform duration-300" />
                                    </button>

                                    {/* Progress Indicators */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 flex gap-2">
                                        {heroImages.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => { setIsAutoPlaying(false); setCurrentImage(index); }}
                                                className={`h-1.5 rounded-full transition-all duration-500 ${index === currentImage
                                                    ? 'w-8 bg-white shadow-[0_0_10px_rgba(255,64,129,0.6)]'
                                                    : 'w-1.5 bg-white/50 hover:bg-white/80'
                                                    }`}
                                                aria-label={`Ir a slide ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Decorative Elements - Enhanced */}
                        <div className="absolute top-8 right-8 w-24 h-24 bg-primary/15 rounded-full blur-2xl animate-pulse-slow"></div>
                        <div className="absolute bottom-8 left-8 w-20 h-20 bg-blue-500/15 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                        <div className="absolute top-1/2 right-4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
                    </div>
                </div>

                {/* Bottom Decorative Wave */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/50 dark:from-gray-900/50 to-transparent pointer-events-none"></div>
            </div>
        </section>
    );
}
