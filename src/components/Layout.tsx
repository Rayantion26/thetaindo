import { useState, useEffect, useRef } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import Navbar from './Navbar';
import MobileDrawer from './MobileDrawer';
import SearchOverlay from './SearchOverlay';
import { AnimatePresence, motion } from 'framer-motion';

export default function Layout() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const location = useLocation();

    // Use useOutlet hook to get the actual element for the current route
    const currentOutlet = useOutlet();
    // frozenOutlet holds the route element that we want to display.
    // We only update this AFTER the whiteboard overlay covers the screen.
    const [frozenOutlet, setFrozenOutlet] = useState(currentOutlet);

    const [showOverlay, setShowOverlay] = useState(false);
    const isFirstRender = useRef(true);

    // Handle route changes and transition
    useEffect(() => {
        setIsDrawerOpen(false);

        if (isFirstRender.current) {
            isFirstRender.current = false;
            setFrozenOutlet(currentOutlet);
            return;
        }

        // 1. Start overlay slide down
        setShowOverlay(true);

        // 2. After overlay fully covers screen (400ms animation), swap the page content behind it
        const swapTimer = setTimeout(() => {
            setFrozenOutlet(currentOutlet);
            window.scrollTo(0, 0);
        }, 450);

        // 3. After content has swapped, slide overlay back up into the ceiling to reveal new page
        const revealTimer = setTimeout(() => {
            setShowOverlay(false);
        }, 650);

        return () => {
            clearTimeout(swapTimer);
            clearTimeout(revealTimer);
        };
    }, [location.pathname, currentOutlet]);

    // Swipe to open drawer logic
    const touchStartX = useRef(0);
    const touchStartY = useRef(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;

        const dist = touchEndX - touchStartX.current;
        const yDist = Math.abs(touchEndY - touchStartY.current);

        // If swipe right > 50px and vertical movement is small (intentional horizontal swipe)
        // AND start point was near the left edge (< 30px)
        if (dist > 50 && yDist < 50 && touchStartX.current < 30) {
            setIsDrawerOpen(true);
        }
    };

    return (
        <div
            className="flex flex-col min-h-screen bg-background text-foreground font-sans overflow-x-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <Navbar onMenuClick={() => setIsDrawerOpen(true)} onSearchClick={() => setIsSearchOpen(true)} />

            <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

            {/* Whiteboard Overlay */}
            <AnimatePresence>
                {showOverlay && (
                    <motion.div
                        key="whiteboard"
                        initial={{ y: '-100%' }}
                        animate={{ y: '0%' }}
                        exit={{ y: '-100%' }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="fixed inset-0 z-50 bg-background flex items-center justify-center"
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}images/logo.png`}
                            alt="Thetaindo"
                            className="h-16 w-auto object-contain opacity-80"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="flex-grow pt-16">
                {frozenOutlet}
            </main>

            <footer className="bg-card border-t border-border mt-auto">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                        {/* Office Section */}
                        <div>
                            <h3 className="font-bold text-lg mb-4">Office</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Cabang Sumatera Utara<br />
                                Jl. Sei Bengai No.32, Sei Sikambing D,<br />
                                Kec. Medan Petisah, Kota Medan,<br />
                                Sumatera Utara 20111
                            </p>
                        </div>

                        {/* Contact Section */}
                        <div>
                            <h3 className="font-bold text-lg mb-4">Contact</h3>
                            <ul className="space-y-2 text-muted-foreground">
                                <li>
                                    <a href="tel:+626188814038" className="hover:text-primary transition-colors">
                                        Telepon: (+62) 8881 4038
                                    </a>
                                </li>
                                <li>
                                    <a href="https://wa.me/6285100821663" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                                        WhatsApp: +62 851 0082 1663
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Brand Section */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <div className="flex items-center gap-2 mb-4">
                                <img
                                    src={`${import.meta.env.BASE_URL}images/logo.png`}
                                    alt="Thetaindo Logo"
                                    className="h-8 w-auto object-contain"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                    }}
                                />
                                <span className="hidden font-bold text-lg">Thetaindo Prima Kencana</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                                Mitra terpercaya Anda untuk solusi industri berkinerja tinggi.
                            </p>
                            <p className="text-xs text-muted-foreground">
                                &copy; {new Date().getFullYear()} All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
