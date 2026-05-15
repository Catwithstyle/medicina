import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, className = '', threshold = 0.15, direction = 'up', delay = 0 }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                    // Keep observing for potential re-animation
                }
            },
            {
                threshold: threshold,
                rootMargin: '0px 0px -80px 0px' // Better trigger point
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [threshold, delay]);

    const directionClasses = {
        up: isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
        down: isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12',
        left: isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12',
        right: isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12',
        fade: isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
    };

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${directionClasses[direction]} ${className}`}
        >
            {children}
        </div>
    );
}
