import { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { X, ChevronRight, Home, MapPin, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

interface MobileDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    { path: '/', label: 'Beranda', icon: Home },
    { path: '/branch', label: 'Cabang Kami', icon: MapPin },
    { path: '/contact', label: 'Hubungi Kami', icon: Phone },
];

const productItems = [
    {
        name: 'Theta', path: '/products/theta', description: 'Grease (Gemuk)',
        subItems: [
            { name: 'Theta 106', path: '/products/theta#theta-106' },
            { name: 'Theta 107', path: '/products/theta#theta-107' },
            { name: 'Theta 108', path: '/products/theta#theta-108' },
        ]
    },
    {
        name: 'Omega', path: '/omega', description: 'V-Belting',
        subItems: []
    },
    {
        name: 'Niobush', path: '/niobush', description: 'Nylon Bushing',
        subItems: [
            { name: 'Niobush Green', path: '/niobush#niobush-green' },
            { name: 'Niobush Black', path: '/niobush#niobush-black' },
        ]
    },
    {
        name: 'Zieta', path: '/zieta', description: 'Welding Electrodes',
        subItems: []
    },
];

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
    const location = useLocation();
    const navigate = useNavigate();
    const drawerRef = useRef<HTMLDivElement>(null);
    const touchStartX = useRef(0);
    const touchCurrentX = useRef(0);

    // Prevent scrolling when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        touchCurrentX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchCurrentX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const diff = touchStartX.current - touchCurrentX.current;
        // Swipe left by more than 80px = close
        if (diff > 80) {
            onClose();
        }
    };

    const handleProductNav = (path: string) => {
        onClose();
        // Use setTimeout to let drawer close animation start
        setTimeout(() => {
            navigate(path);
        }, 100);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Full-screen touch area wrapper */}
                    <div
                        className="fixed inset-0 z-50 flex"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        />

                        {/* Drawer */}
                        <motion.div
                            ref={drawerRef}
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="relative w-[80%] max-w-sm bg-background border-r border-border shadow-2xl flex flex-col h-full"
                        >
                            <div className="p-4 border-b border-border flex items-center justify-between">
                                <span className="font-bold text-lg">Menu</span>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full hover:bg-accent active:scale-95 transition-all"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto py-4">
                                <nav className="flex flex-col gap-1 px-2">
                                    {menuItems.map((item) => {
                                        const isActive = location.pathname === item.path;
                                        const Icon = item.icon;

                                        return (
                                            <Link
                                                key={item.path}
                                                to={item.path}
                                                onClick={onClose}
                                                className={cn(
                                                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-semibold",
                                                    isActive
                                                        ? "bg-primary text-primary-foreground shadow-sm"
                                                        : "hover:bg-accent text-foreground hover:text-accent-foreground"
                                                )}
                                            >
                                                <Icon className="w-5 h-5" />
                                                <span className="flex-1">{item.label}</span>
                                                {!isActive && <ChevronRight className="w-4 h-4 text-muted-foreground/50" />}
                                            </Link>
                                        );
                                    })}

                                    {/* Product Section */}
                                    <div className="mt-2 pt-2 border-t border-border">
                                        <span className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Produk</span>
                                        {productItems.map((product) => (
                                            <MobileProductItem
                                                key={product.path}
                                                product={product}
                                                onClose={onClose}
                                                onNavigate={handleProductNav}
                                            />
                                        ))}
                                    </div>
                                </nav>
                            </div>

                            <div className="p-4 border-t border-border mt-auto">
                                <p className="text-xs text-muted-foreground text-center">
                                    Thetaindo App v1.0
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}

interface MobileProductItemProps {
    product: typeof productItems[0];
    onClose: () => void;
    onNavigate: (path: string) => void;
}

function MobileProductItem({ product, onClose, onNavigate }: MobileProductItemProps) {
    return (
        <div className="flex flex-col">
            <Link
                to={product.path}
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-semibold hover:bg-accent text-foreground hover:text-accent-foreground"
            >
                <span className="flex-1">{product.name}</span>
                <span className="text-xs text-muted-foreground">{product.description}</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
            </Link>
            {product.subItems.length > 0 && (
                <div className="ml-8 flex flex-col gap-0.5 mb-1">
                    {product.subItems.map((sub) => (
                        <button
                            key={sub.path}
                            onClick={() => onNavigate(sub.path)}
                            className="text-left px-3 py-2 rounded-md text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                        >
                            {sub.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
