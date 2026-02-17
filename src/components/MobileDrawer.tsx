import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ChevronRight, Home, Info, Package, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

interface MobileDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    { path: '/', label: 'Beranda', icon: Home },
    { path: '/about-us', label: 'Tentang Kami', icon: Info },
    { path: '/products', label: 'Produk', icon: Package },
    { path: '/branch', label: 'Cabang Kami', icon: MapPin },
    { path: '/contact', label: 'Hubungi Kami', icon: Phone },
];

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
    const location = useLocation();
    const drawerRef = useRef<HTMLDivElement>(null);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        ref={drawerRef}
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        drag="x"
                        dragConstraints={{ left: -300, right: 0 }}
                        dragElastic={0.1}
                        onDragEnd={(_, { offset, velocity }) => {
                            if (offset.x < -100 || velocity.x < -500) {
                                onClose();
                            }
                        }}
                        className="fixed top-0 left-0 bottom-0 z-50 w-[80%] max-w-sm bg-background border-r border-border shadow-2xl flex flex-col"
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
                                                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium",
                                                isActive
                                                    ? "bg-primary text-primary-foreground shadow-sm"
                                                    : "hover:bg-accent text-muted-foreground hover:text-foreground"
                                            )}
                                        >
                                            <Icon className="w-5 h-5" />
                                            <span className="flex-1">{item.label}</span>
                                            {!isActive && <ChevronRight className="w-4 h-4 text-muted-foreground/50" />}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>

                        <div className="p-4 border-t border-border mt-auto">
                            <p className="text-xs text-muted-foreground text-center">
                                Thetaindo App v1.0
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
