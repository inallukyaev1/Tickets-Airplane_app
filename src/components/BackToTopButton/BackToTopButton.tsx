import React from 'react';
import { useEffect, useState } from 'react';
export function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 350) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {backToTopButton && (
                <div
                    className="btn-up btn-up_hide"
                    onClick={() => scrollUp()}
                ></div>
            )}
        </>
    );
}
