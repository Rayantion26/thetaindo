import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import MobileDrawer from './MobileDrawer';
import { AnimatePresence, motion } from 'framer-motion';

export default function Layout() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const location = useLocation();

    // Close drawer on route change
    useEffect(() => {
        setIsDrawerOpen(false);
    }, [location.pathname]);

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
            <Navbar onMenuClick={() => setIsDrawerOpen(true)} />

            <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

            <main className="flex-grow pt-16">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.25,
                            ease: [0.25, 0.1, 0.25, 1],
                        }}
                        className="w-full"
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>

            <footer className="bg-card border-t border-border mt-auto">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                        {/* Use Link from react-router-dom instead of a tag to prevent reload */}
                        {/* Import Link at top of file first: import { Link } from 'react-router-dom'; */}

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

                        {/* Social & Links - Keeping it simple per user request for Office/Contact mainly */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <div className="flex items-center gap-2 mb-4">
                                <img
                                    src="/images/logo.png"
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
