import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const { t } = useLanguage();

    const testimonials = t('testimonials.items');

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden">
            {/* Enhanced Decorative Background */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16 animate-fade-in-up">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-bold tracking-wider uppercase text-xs md:text-sm mb-4 shadow-soft">
                        {t('testimonials.title_small')}
                    </span>
                    <h3 className="text-4xl md:text-6xl lg:text-display-2 font-serif font-bold text-gray-900 dark:text-white mb-6 leading-tight text-balance">
                        {t('testimonials.title_main')}
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                        {t('testimonials.subtitle')}
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="relative bg-white dark:bg-gray-800 rounded-3xl md:rounded-[2.5rem] p-10 md:p-16 lg:p-20 shadow-large border border-gray-100 dark:border-gray-700 overflow-hidden animate-fade-in-up">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
                        
                        {/* Quote Icon - Enhanced */}
                        <div className="flex justify-center mb-8 relative z-10">
                            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full flex items-center justify-center text-primary shadow-lg">
                                <Quote className="w-10 h-10 fill-current" />
                            </div>
                        </div>

                        {/* Testimonial Content */}
                        <div className="text-center space-y-8 relative z-10">
                            {/* Stars - Enhanced */}
                            <div className="flex justify-center gap-1 mb-6">
                                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                    <Star key={i} className="w-6 h-6 md:w-7 md:h-7 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                                ))}
                            </div>

                            {/* Quote - Enhanced */}
                            <blockquote className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif font-medium text-gray-900 dark:text-white italic leading-relaxed px-4 md:px-8 text-balance">
                                "{testimonials[currentTestimonial].quote}"
                            </blockquote>

                            {/* Author - Enhanced */}
                            <div className="flex flex-col items-center pt-6">
                                <div className="w-16 h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full mb-6"></div>
                                <h4 className="font-bold text-gray-900 dark:text-white text-xl md:text-2xl mb-2">
                                    {testimonials[currentTestimonial].author}
                                </h4>
                                <p className="text-base md:text-lg text-gray-500 dark:text-gray-400">
                                    {testimonials[currentTestimonial].role}
                                </p>
                            </div>
                        </div>

                        {/* Navigation - Enhanced */}
                        <div className="flex justify-center items-center gap-6 mt-12 relative z-10">
                            <button
                                onClick={prevTestimonial}
                                className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110 active:scale-95 focus-ring"
                                aria-label="Testimonial anterior"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            <div className="flex gap-2.5 items-center px-4 py-2 rounded-full bg-gray-50 dark:bg-gray-700/50">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentTestimonial(index)}
                                        className={`h-2.5 rounded-full transition-all duration-300 focus-ring ${index === currentTestimonial
                                                ? 'w-10 bg-gradient-to-r from-primary to-blue-500 shadow-glow scale-110'
                                                : 'w-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                                            }`}
                                        aria-label={`Ir a testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextTestimonial}
                                className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110 active:scale-95 focus-ring"
                                aria-label="Siguiente testimonial"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
