import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Button from './Button';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';
import { images } from '../data/images';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const { t } = useLanguage();

    const navItems = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.about'), path: '/nosotros' },
        { name: t('nav.services'), path: '/servicios' },
        { name: t('nav.promotions'), path: '/promociones' },
        { name: t('nav.testimonials'), path: '/testimonios' },
    ];

    return (
        <header
            className="fixed w-full top-0 z-50 transition-all duration-300 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-100/50 dark:border-white/10 shadow-soft dark:shadow-lg py-3 md:py-4"
        >
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    {/* Logo */}
                    {/* Logo Section - Flexible width with truncation */}
                    <Link to="/" className="flex items-center gap-3 min-w-0 flex-1 mr-2" onClick={() => setIsMenuOpen(false)}>
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-56 md:h-20 flex items-center justify-start shrink-0">
                            {/* Mobile Logo (Icon only) */}
                            <div className="md:hidden w-full h-full relative">
                                <img
                                    src={images.logoLight}
                                    alt="Logo"
                                    className="absolute inset-0 w-full h-full object-contain dark:hidden mix-blend-multiply"
                                />
                                <img
                                    src={images.logoDark}
                                    alt="Logo"
                                    className="absolute inset-0 w-full h-full object-contain hidden dark:block mix-blend-screen"
                                />
                            </div>

                            {/* Desktop Logo */}
                            <div className="hidden md:block w-full h-full relative">
                                <img
                                    src={images.logoLight}
                                    alt="Dra. Virginia Fonseca - Logo Ginecología y Estética Managua"
                                    className="absolute inset-0 w-full h-full object-contain dark:hidden transform transition-transform active:scale-95 mix-blend-multiply"
                                />
                                <img
                                    src={images.logoDark}
                                    alt="Dra. Virginia - Logo Ginecología y Estética Managua"
                                    className="absolute inset-0 w-full h-full object-contain hidden dark:block transform transition-transform active:scale-95 mix-blend-screen"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col justify-center min-w-0">
                            <span className="font-serif font-bold leading-tight text-gray-900 dark:text-white text-sm sm:text-base truncate block w-full">
                                Dra. Virginia Fonseca
                            </span>
                            <span className="text-[10px] tracking-wider uppercase text-gray-500 dark:text-gray-300 truncate block w-full">
                                Ginecología y Obstetricia
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation - Enhanced */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`
                                    relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300
                                    text-gray-700 dark:text-gray-300
                                    hover:text-primary dark:hover:text-white
                                    hover:bg-primary/5 dark:hover:bg-primary/10
                                    ${location.pathname === item.path
                                        ? 'text-primary dark:text-primary font-semibold bg-primary/10 dark:bg-primary/20'
                                        : ''
                                    }
                                    group
                                `}
                            >
                                {item.name}
                                {location.pathname === item.path && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></span>
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        <LanguageToggle />
                        <ThemeToggle />
                        {/* Button: Primary in Light, Secondary/White in Dark to stand out? Or consistent? Let's use Primary global styled button. */}
                        <Button
                            onClick={() => {
                                const phoneNumber = '50589565361'; // Clínica ginecológica
                                const message = encodeURIComponent('Hola, me gustaría agendar una cita');
                                window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                            }}
                            variant="primary"
                            className="text-sm px-5 py-2 shadow-lg"
                        >
                            AGENDA TU CITA
                        </Button>
                    </div>

                    {/* Mobile Menu Actions - Fixed width, never shrinks */}
                    <div className="lg:hidden flex items-center gap-2 shrink-0 ml-auto">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-full transition-colors text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-white/10"
                            aria-label="Menu"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 top-[73px]"
                        onClick={() => setIsMenuOpen(false)}
                    />
                    <div className="lg:hidden fixed top-[73px] left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-2xl z-50 max-h-[calc(100vh-73px)] overflow-y-auto">
                        <div className="flex flex-col p-4">
                            {/* Navigation Items - Compact */}
                            <nav className="flex flex-col space-y-1 mb-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className="text-base font-medium text-gray-800 dark:text-gray-100 px-4 py-3 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-primary transition-all flex items-center justify-between group active:bg-primary/20"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <span>{item.name}</span>
                                        <span className="text-gray-400 group-hover:text-primary transition-colors">›</span>
                                    </Link>
                                ))}
                            </nav>

                            {/* Divider */}
                            <div className="h-px bg-gray-200 dark:bg-gray-700 my-3" />

                            {/* Language Toggle */}
                            <div className="px-4 py-2 mb-2">
                                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Idioma</span>
                                    <LanguageToggle />
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="px-4 mb-3">
                                <Button
                                    onClick={() => {
                                        const phoneNumber = '50589565361'; // Clínica ginecológica
                                        const message = encodeURIComponent('Hola, me gustaría agendar una cita');
                                        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                                        setIsMenuOpen(false);
                                    }}
                                    variant="primary"
                                    className="w-full justify-center py-3.5 text-base font-bold shadow-lg"
                                >
                                    AGENDA TU CITA
                                </Button>
                            </div>

                            {/* Phone Number - Compact */}
                            <div className="flex items-center justify-center gap-2 px-4 py-2 text-gray-500 dark:text-gray-400 text-sm">
                                <Phone className="w-4 h-4" />
                                <a href="tel:+50589565361" className="hover:text-primary transition-colors">
                                    +505 8956 5361
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}
