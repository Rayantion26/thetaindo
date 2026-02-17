import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const productList = [
    {
        name: 'Theta',
        path: '/products/theta',
        description: 'Grease Performa Tinggi',
        items: [
            { name: 'Theta 106', path: '/products/theta#theta-106' },
            { name: 'Theta 107', path: '/products/theta#theta-107' },
            { name: 'Theta 108', path: '/products/theta#theta-108' },
        ]
    },
    {
        name: 'Omega',
        path: '/omega',
        description: 'V-Belting Solusi',
        items: []
    },
    {
        name: 'Niobush',
        path: '/niobush',
        description: 'Bushing Nilon',
        items: [
            { name: 'Niobush Green', path: '/niobush#niobush-green' },
            { name: 'Niobush Black', path: '/niobush#niobush-black' },
        ]
    },
    {
        name: 'Zieta',
        path: '/zieta',
        description: 'Elektroda Las',
        items: [
            { name: 'Zieta 308', path: '/zieta#zieta-308' },
            { name: 'Zieta 309', path: '/zieta#zieta-309' },
            { name: 'Zieta 310', path: '/zieta#zieta-310' },
            { name: 'Zieta 312', path: '/zieta#zieta-312' },
            { name: 'Zieta 316', path: '/zieta#zieta-316' },
        ]
    },
];

export default function ProductDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<number | null>(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 200);
    };

    const handleLinkClick = (path: string) => {
        setIsOpen(false);
        // Handle hash navigation manually if needed, but simple Link with hash usually works.
        // If we stay on the same page, we need to trigger scroll (handled by ScrollToHash component).
        const [pathname, hash] = path.split('#');
        if (window.location.pathname === pathname && hash) {
            // Trigger scroll via hash change or manual scroll
            // The ScrollToHash component listens for hash changes/location changes.
        }
    };

    return (
        <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                className="flex items-center gap-1 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                Produk
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full -left-4 w-64 bg-background border border-border rounded-xl shadow-xl overflow-hidden z-50 p-2"
                    >
                        {productList.map((product) => (
                            <div key={product.path} className="mb-1 last:mb-0">
                                <Link
                                    to={product.path}
                                    onClick={() => handleLinkClick(product.path)}
                                    className="flex flex-col px-3 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors group"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold text-sm">{product.name}</span>
                                        {/* {product.items.length > 0 && <ChevronRight className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />} */}
                                    </div>
                                    <span className="text-xs text-muted-foreground group-hover:text-accent-foreground/80">{product.description}</span>
                                </Link>

                                {product.items.length > 0 && (
                                    <div className="ml-4 pl-4 border-l-2 border-border/50 mt-2 space-y-1">
                                        {product.items.map((item) => (
                                            <Link
                                                key={item.path}
                                                to={item.path}
                                                onClick={() => handleLinkClick(item.path)}
                                                className="block px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
