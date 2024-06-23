import React, { useState, useEffect, useRef } from 'react';
import './Header.css'; // Assurez-vous d'ajouter le CSS nécessaire

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollTop = useRef(0);

    const handleScroll = () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop > lastScrollTop.current) {
            // Scrolling down
            setIsVisible(false);
        } else {
            // Scrolling up
            setIsVisible(true);
        }

        lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isVisible ? 'header--visible' : 'header--hidden'}`}>
            <h1>My Header</h1>
        </header>
    );
};

export default Header;
