import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHash() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            // Remove the # from the hash
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);

            if (element) {
                // Get the navbar height (64px = h-16 in Tailwind)
                const navbarHeight = 64;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location.hash, location.pathname]);

    return null;
}
