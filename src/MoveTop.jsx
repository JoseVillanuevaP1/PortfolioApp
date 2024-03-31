import React, { useState, useEffect } from 'react';

export function MoveTop() {
    
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 20) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button onClick={scrollToTop} id="movetop" title="Go to top">
                    <span className="fas fa-level-up-alt" aria-hidden="true"></span>
                </button>
            )}
        </>
    );
}
