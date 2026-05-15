import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 transform focus-ring relative overflow-hidden group";

    const sizeStyles = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
        xl: "px-10 py-5 text-xl",
    };

    const variants = {
        primary: "bg-gradient-to-r from-primary to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-lg hover:shadow-glow-lg active:scale-95",
        secondary: "bg-white dark:bg-gray-800 text-primary border-2 border-primary hover:bg-primary/5 dark:hover:bg-primary/10 shadow-md hover:shadow-lg active:scale-95",
        outline: "bg-transparent text-gray-700 dark:text-gray-200 border-2 border-gray-300 dark:border-gray-600 hover:border-primary hover:text-primary dark:hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/10 active:scale-95",
        ghost: "bg-transparent text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95",
    };

    return (
        <button
            id={props.id}
            data-testid={props['data-testid']}
            className={`${baseStyles} ${sizeStyles[size]} ${variants[variant] || variants.primary} ${className}`}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
            {/* Shine effect on hover */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
        </button>
    );
};

export default Button;
