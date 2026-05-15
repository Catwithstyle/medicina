import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-bold text-gray-700 dark:text-gray-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-600"
            aria-label="Toggle Language"
        >
            <Globe className="w-4 h-4" />
            <span className="uppercase">{language}</span>
        </button>
    );
}
