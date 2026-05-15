import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Facebook, Instagram, CalendarCheck, MessageCircle } from 'lucide-react';
import Button from './Button';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    const handleWhatsApp = () => {
        const phoneNumber = '50589565361'; // Clínica ginecológica
        const message = encodeURIComponent('Hola, me gustaría agendar una cita');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    return (
        <footer className="mt-32 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white pt-32 pb-10 transition-colors duration-300 relative overflow-hidden z-10">
            {/* Enhanced Decorative Elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse-slow z-0"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse-slow z-0" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-2xl z-0"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* CTA Section - Enhanced */}
                <div className="bg-gradient-to-r from-primary via-primary-600 to-primary-dark rounded-3xl md:rounded-[2.5rem] p-10 md:p-16 mb-16 text-center shadow-2xl border border-primary/30 relative overflow-hidden">
                    {/* Pattern overlay */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-primary/30 blur-3xl"></div>

                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-5xl lg:text-display-3 font-serif font-bold mb-6 leading-tight">
                            {t('benefits.cta_title')}
                        </h3>
                        <p className="text-white/95 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                            {t('benefits.cta_desc')}
                        </p>
                        <Button
                            onClick={handleWhatsApp}
                            variant="secondary"
                            size="lg"
                            className="shadow-glow-lg hover:shadow-glow-lg bg-white text-primary border-0"
                        >
                            <CalendarCheck className="w-5 h-5" />
                            {t('benefits.cta_button')}
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16">

                    {/* Brand - Enhanced */}
                    <div className="space-y-5">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-glow-lg">
                            M
                        </div>
                        <h3 className="font-serif font-bold text-2xl">Dra. Virginia Fonseca</h3>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                            {t('footer.about')}
                        </p>
                    </div>

                    {/* Contact - Enhanced */}
                    <div className="space-y-5">
                        <h3 className="font-bold uppercase tracking-wider text-lg md:text-xl">{t('footer.contact')}</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 text-gray-300 text-sm md:text-base group">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <span className="leading-relaxed">
                                    K. 9.8 Carretera Masaya<br />
                                    Oficentro Metropolitano<br />
                                    Managua
                                </span>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4 text-gray-300 text-sm md:text-base group">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                        <Phone className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Ginecología</span>
                                        <a href="tel:+50589565361" className="hover:text-primary transition-colors font-medium">
                                            +505 8956 5361
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300 text-sm md:text-base group">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                        <Phone className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Estética</span>
                                        <a href="tel:+50589618546" className="hover:text-primary transition-colors font-medium">
                                            +505 8961 8546
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300 text-sm md:text-base group">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                    <MessageCircle className="w-5 h-5 text-primary" />
                                </div>
                                <a
                                    href="https://wa.me/50589565361"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary transition-colors font-medium"
                                >
                                    Consulta vía WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Links - Enhanced */}
                    <div className="space-y-5">
                        <h3 className="font-bold uppercase tracking-wider text-lg md:text-xl">{t('footer.links')}</h3>
                        <ul className="space-y-3 text-sm md:text-base">
                            {[
                                { path: '/', label: t('nav.home') },
                                { path: '/nosotros', label: t('nav.about') },
                                { path: '/servicios', label: t('nav.services') },
                                { path: '/testimonios', label: t('nav.testimonials') },
                            ].map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="hover:text-primary transition-all duration-300 flex items-center gap-3 group"
                                    >
                                        <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social & Hours - Enhanced */}
                    <div className="space-y-5">
                        <h3 className="font-bold uppercase tracking-wider text-lg md:text-xl">Agenda por WhatsApp</h3>
                        <div className="flex flex-col gap-3">
                            <a
                                href="https://wa.me/50589565361"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-white/10 hover:bg-[#25D366] rounded-xl shadow-lg hover:scale-105 hover:shadow-glow transition-all duration-300 group flex items-center gap-3"
                                aria-label="WhatsApp Ginecología"
                            >
                                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                <span className="text-sm">WhatsApp Ginecología</span>
                            </a>
                            <a
                                href="https://wa.me/50589618546"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-white/10 hover:bg-[#25D366] rounded-xl shadow-lg hover:scale-105 hover:shadow-glow transition-all duration-300 group flex items-center gap-3"
                                aria-label="WhatsApp Estética"
                            >
                                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                <span className="text-sm">WhatsApp Estética</span>
                            </a>
                            <a
                                href="https://www.instagram.com/gynelaserclinicaestetica/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-white/10 hover:bg-primary rounded-xl shadow-lg hover:scale-105 hover:shadow-glow transition-all duration-300 group flex items-center gap-3"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                                <span className="text-sm">Instagram</span>
                            </a>
                        </div>
                        <div className="pt-6 border-t border-white/10">
                            <p className="text-gray-300 text-sm md:text-base font-semibold mb-3">Horarios de Atención</p>
                            <div className="space-y-2">
                                <p className="text-gray-400 text-xs md:text-sm">Lunes a Viernes: <span className="text-gray-300 font-medium">8:00 AM - 4:00 PM</span></p>
                                <p className="text-gray-400 text-xs md:text-sm">Sábados: <span className="text-gray-300 font-medium">8:00 AM - 12:00 PM</span></p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-10 text-center">
                    <p className="text-gray-400 text-xs md:text-sm mb-3">
                        &copy; {new Date().getFullYear()} Dra. Virginia Fonseca. {t('footer.rights')}
                    </p>
                </div>
            </div>
        </footer>
    );
}
