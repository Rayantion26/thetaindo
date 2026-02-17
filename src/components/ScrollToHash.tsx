import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHash() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');

            // Delay to wait for whiteboard transition to finish
            const timer = setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    const navbarHeight = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Brief highlight
                    element.classList.add('ring-2', 'ring-primary', 'ring-offset-2');
                    setTimeout(() => element.classList.remove('ring-2', 'ring-primary', 'ring-offset-2'), 2000);
                }
            }, 800);

            return () => clearTimeout(timer);
        }
    }, [location.hash, location.pathname]);

    return null;
}
