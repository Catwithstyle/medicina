import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    // Check localStorage or default to 'es'
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('language');
        return saved || 'es'; // Default to Spanish
    });

    useEffect(() => {
        localStorage.setItem('language', language);
        // Optional: Update html lang attribute
        document.documentElement.lang = language;
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
    };

    // Helper to get nested translation keys 'section.key'
    const t = (path) => {
        const keys = path.split('.');
        let current = translations[language];

        for (const key of keys) {
            if (current[key] === undefined) {
                console.warn(`Translation missing for key: ${path} in language: ${language}`);
                return path; // Fallback to key
            }
            current = current[key];
        }
        return current;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
