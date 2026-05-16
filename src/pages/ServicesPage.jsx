import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getServices } from '../data/services';
import Button from '../components/Button';
import { Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

export default function ServicesPage() {
    const navigate = useNavigate();
    const { t, language } = useLanguage();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('todos');

    const services = getServices(language);

    const filteredServices = services.filter(service => {
        const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'todos' || service.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const handleServiceClick = (serviceId) => {
        navigate(`/servicios/${serviceId}`);
    };

    return (
        <>
            <SEO
                title="Servicios de Ginecología y Estética"
                description="Servicios especializados en ginecología y estética facial. Toxina botulínica, ácido hialurónico, depilación láser, HydraFacial, HIFU facial, diagnóstico facial con IA, limpieza profunda y más tratamientos estéticos en Managua."
                keywords="servicios ginecología Managua, tratamientos estéticos Managua, toxina botulínica Managua, depilación láser Managua, HydraFacial Managua, HIFU facial Managua, diagnóstico facial Managua, limpieza facial Managua"
            />
            <div className="pt-28 md:pt-32 pb-12 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6">

                    {/* Header Section */}
                    <div className="text-center mb-10">
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-800 dark:text-white mb-4">
                            {t('services.title_main')}
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            {t('services.description')}
                        </p>
                    </div>

                    {/* Controls Section (Search & Filter) */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-10 border border-gray-100 dark:border-gray-700">
                        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">

                            {/* Search Bar */}
                            <div className="relative w-full md:w-1/3">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Buscar servicio..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 pr-4 py-3 w-full rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                />
                            </div>

                            {/* Category Pills */}
                            <div className="flex flex-wrap justify-center gap-2 md:gap-3 w-full md:w-auto">
                                {[
                                    { id: 'todos', label: t('services.view_all').replace('Ver todos los servicios', 'Todos').replace('View all services', 'All') }, // Quick hack or add to dictionary
                                    { id: 'ginecologico', label: t('services.gynecological') + 's' },
                                    { id: 'estetico', label: t('services.esthetic') + 's' }
                                ].map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setSelectedCategory(cat.id)}
                                        className={`
                                        px-5 py-2 rounded-full font-medium text-sm transition-all duration-300
                                        ${selectedCategory === cat.id
                                                ? 'bg-primary text-white shadow-md'
                                                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                            }
                                    `}
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Services Grid */}
                    {filteredServices.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredServices.map((service, index) => (
                                <div
                                    key={service.id}
                                    onClick={() => handleServiceClick(service.id)}
                                    className="
                                    group cursor-pointer
                                    rounded-2xl overflow-hidden
                                    bg-white dark:bg-gray-800 
                                    shadow-lg hover:shadow-2xl hover:-translate-y-2
                                    transition-all duration-300
                                    border border-gray-100 dark:border-gray-700
                                    animate-fade-in
                                "
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    {/* Image */}
                                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                                        <img
                                            src={service.image}
                                            alt={`${service.title} - ${service.category === 'estetico' ? 'Tratamiento estético' : 'Servicio ginecológico'} en Managua`}
                                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        {/* Badge */}
                                        <div className="absolute top-3 right-3">
                                            <span className={`
                                            px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide backdrop-blur-md
                                            ${service.category === 'estetico'
                                                    ? 'bg-pink-500/90 text-white'
                                                    : 'bg-blue-500/90 text-white'
                                                }
                                        `}>
                                                {service.category === 'estetico' ? 'Estético' : 'Ginecológico'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-primary transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                                            {service.description}
                                        </p>
                                        <div className="mt-4 flex items-center text-primary text-sm font-bold">
                                            Ver detalles
                                            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 dashed">
                            <div className="mb-4">
                                <Search className="h-12 w-12 text-gray-300 mx-auto" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                {t('services.no_results')}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                {language === 'es' ? 'Intenta ajustar tu búsqueda o filtros.' : 'Try adjusting your search or filters.'}
                            </p>
                            <button
                                onClick={() => { setSearchTerm(''); setSelectedCategory('todos'); }}
                                className="mt-6 text-primary font-bold hover:underline"
                            >
                                {language === 'es' ? 'Limpiar filtros' : 'Clear filters'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
