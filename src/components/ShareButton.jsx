import React, { useState } from 'react';
import { Share2, X, Copy, Check, MessageCircle, Facebook, Twitter, Mail } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function ShareButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const location = useLocation();

    const currentUrl = window.location.origin + location.pathname;
    const pageTitle = 'Dra. Mónica Navarro - Ginecología y Estética';
    const shareText = 'Te comparto esta página de la Dra. Mónica Navarro, especialista en ginecología y estética.';

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(currentUrl);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
                setIsOpen(false);
            }, 2000);
        } catch (err) {
            console.error('Error al copiar:', err);
        }
    };

    const handleShareWhatsApp = () => {
        const message = encodeURIComponent(`${shareText}\n\n${currentUrl}`);
        window.open(`https://wa.me/?text=${message}`, '_blank');
        setIsOpen(false);
    };

    const handleShareFacebook = () => {
        const url = encodeURIComponent(currentUrl);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        setIsOpen(false);
    };

    const handleShareTwitter = () => {
        const url = encodeURIComponent(currentUrl);
        const text = encodeURIComponent(shareText);
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
        setIsOpen(false);
    };

    const handleShareEmail = () => {
        const subject = encodeURIComponent(pageTitle);
        const body = encodeURIComponent(`${shareText}\n\n${currentUrl}`);
        window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
        setIsOpen(false);
    };

    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: pageTitle,
                    text: shareText,
                    url: currentUrl,
                });
                setIsOpen(false);
            } catch (err) {
                // Usuario canceló o hubo un error
                console.log('Error al compartir:', err);
            }
        }
    };

    const shareOptions = [
        {
            name: 'WhatsApp',
            icon: MessageCircle,
            color: 'bg-[#25D366] hover:bg-[#20BA5A]',
            onClick: handleShareWhatsApp,
        },
        {
            name: 'Copiar enlace',
            icon: copied ? Check : Copy,
            color: copied ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-600 hover:bg-gray-700',
            onClick: handleCopyLink,
        },
        {
            name: 'Facebook',
            icon: Facebook,
            color: 'bg-[#1877F2] hover:bg-[#166FE5]',
            onClick: handleShareFacebook,
        },
        {
            name: 'Twitter',
            icon: Twitter,
            color: 'bg-[#1DA1F2] hover:bg-[#1A91DA]',
            onClick: handleShareTwitter,
        },
        {
            name: 'Email',
            icon: Mail,
            color: 'bg-gray-700 hover:bg-gray-800',
            onClick: handleShareEmail,
        },
    ];

    // Si el navegador soporta la API nativa de compartir, agregar esa opción
    if (navigator.share) {
        shareOptions.unshift({
            name: 'Compartir',
            icon: Share2,
            color: 'bg-primary hover:bg-primary-dark',
            onClick: handleNativeShare,
        });
    }

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    fixed bottom-24 right-6 z-50
                    w-14 h-14 rounded-full
                    bg-primary hover:bg-primary-dark
                    shadow-2xl hover:shadow-primary/50
                    flex items-center justify-center
                    transition-all duration-300
                    transform hover:scale-110
                    ${isOpen ? 'rotate-45' : ''}
                `}
                aria-label="Compartir página"
            >
                {isOpen ? (
                    <X className="w-6 h-6 text-white" />
                ) : (
                    <Share2 className="w-6 h-6 text-white" />
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

                    {/* Share Options */}
                    <div className="fixed bottom-36 right-6 z-50 w-72 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
                        {/* Header */}
                        <div className="bg-primary p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                    <Share2 className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm">Compartir página</h3>
                                    <p className="text-white/90 text-xs">Elige cómo compartir</p>
                                </div>
                            </div>
                        </div>

                        {/* Options List */}
                        <div className="p-4 space-y-2">
                            {shareOptions.map((option, index) => {
                                const Icon = option.icon;
                                return (
                                    <button
                                        key={index}
                                        onClick={option.onClick}
                                        className={`
                                            w-full text-left
                                            p-4 rounded-xl
                                            ${option.color}
                                            text-white
                                            flex items-center gap-3
                                            transition-all duration-200
                                            transform hover:scale-105
                                            shadow-lg hover:shadow-xl
                                        `}
                                    >
                                        <Icon className="w-5 h-5 flex-shrink-0" />
                                        <span className="font-medium text-sm">{option.name}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* URL Display */}
                        <div className="p-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mb-2 break-all px-2">
                                {currentUrl}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                                {copied ? '✓ Enlace copiado' : 'Comparte con tus contactos'}
                            </p>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

