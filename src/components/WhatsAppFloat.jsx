import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function WhatsAppFloat() {
    const [isOpen, setIsOpen] = useState(false);

    const PHONE_GINECOLOGICO = '50589565361';
    const PHONE_ESTETICO = '50589618546';

    const quickMessages = [
        {
            text: "Hola, me gustaría agendar una cita",
            icon: "📅",
            phone: PHONE_GINECOLOGICO
        },
        {
            text: "Quiero información sobre servicios ginecológicos",
            icon: "👩‍⚕️",
            phone: PHONE_GINECOLOGICO
        },
        {
            text: "Necesito información sobre servicios estéticos",
            icon: "✨",
            phone: PHONE_ESTETICO
        },
        {
            text: "¿Cuáles son sus horarios de atención?",
            icon: "🕐",
            phone: PHONE_GINECOLOGICO
        },
        {
            text: "¿Tienen consulta de emergencia?",
            icon: "🚨",
            phone: PHONE_GINECOLOGICO
        },
        {
            text: "Quiero conocer más sobre los tratamientos",
            icon: "💊",
            phone: PHONE_GINECOLOGICO
        }
    ];

    const handleSendMessage = (message, phoneNumber = PHONE_GINECOLOGICO) => {
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
        setIsOpen(false);
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    fixed bottom-6 right-6 z-50
                    w-16 h-16 rounded-full
                    bg-[#25D366] hover:bg-[#20BA5A]
                    shadow-2xl hover:shadow-[#25D366]/50
                    flex items-center justify-center
                    transition-all duration-300
                    transform hover:scale-110
                    ${isOpen ? 'rotate-90' : ''}
                `}
                aria-label="Abrir WhatsApp"
            >
                {isOpen ? (
                    <X className="w-6 h-6 text-white" />
                ) : (
                    <MessageCircle className="w-8 h-8 text-white" />
                )}
                {/* Notification Badge */}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    </span>
                )}
            </button>

            {/* Popup Menu */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                        onClick={() => setIsOpen(false)}
                    ></div>

                    {/* Message Options */}
                    <div className="fixed bottom-28 right-6 z-50 w-80 md:w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
                        {/* Header */}
                        <div className="bg-[#25D366] p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm">¿En qué te podemos ayudar?</h3>
                                    <p className="text-white/90 text-xs">Selecciona un mensaje rápido</p>
                                </div>
                            </div>
                        </div>

                        {/* Messages List */}
                        <div className="max-h-96 overflow-y-auto p-4 space-y-2">
                            {quickMessages.map((msg, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSendMessage(msg.text, msg.phone)}
                                    className="
                                        w-full text-left
                                        p-4 rounded-xl
                                        bg-gray-50 dark:bg-gray-700
                                        hover:bg-[#25D366]/10 dark:hover:bg-[#25D366]/20
                                        border border-gray-200 dark:border-gray-600
                                        hover:border-[#25D366]
                                        transition-all duration-200
                                        group
                                    "
                                >
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl flex-shrink-0">{msg.icon}</span>
                                        <div className="flex-1">
                                            <p className="text-sm text-gray-700 dark:text-gray-200 group-hover:text-[#25D366] transition-colors">
                                                {msg.text}
                                            </p>
                                        </div>
                                        <Send className="w-4 h-4 text-gray-400 group-hover:text-[#25D366] transition-colors flex-shrink-0 mt-1" />
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="p-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                            <button
                                onClick={() => handleSendMessage('Hola, me gustaría más información', PHONE_GINECOLOGICO)}
                                className="
                                    w-full
                                    bg-[#25D366] hover:bg-[#20BA5A]
                                    text-white font-bold
                                    py-3 px-4 rounded-xl
                                    flex items-center justify-center gap-2
                                    transition-all duration-200
                                    shadow-lg hover:shadow-xl
                                "
                            >
                                <MessageCircle className="w-5 h-5" />
                                Escribir mensaje personalizado
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

