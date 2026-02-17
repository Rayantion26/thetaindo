import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search } from 'lucide-react';
import ProductDropdown from './ProductDropdown';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

interface NavbarProps {
    onMenuClick: () => void;
    onSearchClick: () => void;
}

export default function Navbar({ onMenuClick, onSearchClick }: NavbarProps) {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 80) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            animate={{ y: hidden ? -80 : 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border h-16 px-4 flex items-center justify-between"
        >
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="p-2 -ml-2 rounded-full hover:bg-accent active:scale-95 transition-all md:hidden"
                    aria-label="Open menu"
                >
                    <Menu className="w-6 h-6" />
                </button>

                <Link
                    to="/"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-2"
                >
                    <img
                        src={`${import.meta.env.BASE_URL}images/logo.png`}
                        alt="Thetaindo Prima Kencana"
                        className="h-10 w-auto object-contain"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                    />
                    <span className="hidden text-xl font-bold tracking-tight">Thetaindo Prima Kencana</span>
                </Link>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                <Link to="/" className="hover:text-primary transition-colors">Beranda</Link>
                <div className="relative group">
                    <ProductDropdown />
                </div>
                <Link to="/branch" className="hover:text-primary transition-colors">Cabang Kami</Link>
                <Link to="/contact" className="hover:text-primary transition-colors">Hubungi Kami</Link>
            </div>

            <div className="flex items-center gap-2">
                <button
                    onClick={onSearchClick}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 hover:bg-secondary border border-border transition-all group"
                    aria-label="Search"
                >
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">Search</span>
                    <Search className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </button>
            </div>
        </motion.nav>
    );
}
