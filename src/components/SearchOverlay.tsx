import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const searchableItems = [
    { name: 'Beranda', path: '/', keywords: ['home', 'beranda', 'utama'] },
    { name: 'Theta - Grease Performa Tinggi', path: '/products/theta', keywords: ['theta', 'grease', 'pelumas', 'lubricant', '106', '107', '108'] },
    { name: 'Theta 106 - Aluminium Complex Grease', path: '/products/theta', keywords: ['theta 106', 'aluminium', 'complex', 'grease'] },
    { name: 'Theta 107 - Lithium Complex Grease', path: '/products/theta', keywords: ['theta 107', 'lithium', 'complex', 'grease'] },
    { name: 'Theta 108 - Polyurea Grease', path: '/products/theta', keywords: ['theta 108', 'polyurea', 'grease'] },
    { name: 'Omega - V-Belt', path: '/omega', keywords: ['omega', 'v-belt', 'vbelt', 'belt', 'sabuk', 'transmisi'] },
    { name: 'Niobush - Bushing Nilon', path: '/niobush', keywords: ['niobush', 'bushing', 'nilon', 'nylon', 'green', 'black'] },
    { name: 'Zieta - Elektroda Las', path: '/zieta', keywords: ['zieta', 'elektroda', 'las', 'welding', 'electrode', 'stainless', '308', '309', '310', '312', '316'] },
    { name: 'Cabang Kami', path: '/branch', keywords: ['cabang', 'branch', 'lokasi', 'alamat', 'kantor', 'office'] },
    { name: 'Hubungi Kami', path: '/contact', keywords: ['hubungi', 'contact', 'telepon', 'whatsapp', 'kontak'] },
];

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
    const [query, setQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen) {
            setQuery('');
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    const results = query.trim().length > 0
        ? searchableItems.filter(item => {
            const q = query.toLowerCase();
            return item.name.toLowerCase().includes(q) ||
                item.keywords.some(k => k.includes(q));
        })
        : [];

    const handleSelect = (path: string) => {
        navigate(path);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        className="w-full max-w-lg mx-auto mt-20 md:mt-32 px-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="bg-card rounded-2xl border border-border shadow-2xl overflow-hidden">
                            {/* Search Input */}
                            <div className="flex items-center gap-3 px-4 py-4 border-b border-border">
                                <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Cari produk atau halaman..."
                                    className="flex-1 bg-transparent text-foreground text-lg outline-none placeholder:text-muted-foreground/60"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && results.length > 0) {
                                            handleSelect(results[0].path);
                                        }
                                    }}
                                />
                                <button
                                    onClick={onClose}
                                    className="p-1.5 rounded-lg hover:bg-accent transition-colors"
                                >
                                    <X className="w-4 h-4 text-muted-foreground" />
                                </button>
                            </div>

                            {/* Results */}
                            {query.trim().length > 0 && (
                                <div className="max-h-80 overflow-y-auto py-2">
                                    {results.length > 0 ? (
                                        results.map((item) => (
                                            <button
                                                key={item.path + item.name}
                                                onClick={() => handleSelect(item.path)}
                                                className="w-full text-left px-4 py-3 hover:bg-accent transition-colors flex items-center gap-3"
                                            >
                                                <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                                                <span className="text-foreground font-medium">{item.name}</span>
                                            </button>
                                        ))
                                    ) : (
                                        <div className="px-4 py-8 text-center text-muted-foreground">
                                            Tidak ada hasil untuk "{query}"
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Hint */}
                            {query.trim().length === 0 && (
                                <div className="px-4 py-6 text-center text-sm text-muted-foreground">
                                    Ketik untuk mencari produk, halaman, atau informasi...
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
