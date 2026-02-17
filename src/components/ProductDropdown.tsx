import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface ProductDropdownProps {
    isMobile?: boolean;
}

const products = [
    { name: 'Theta', path: '/products/theta', description: 'Grease (Gemuk)' },
    { name: 'Omega', path: '/omega', description: 'V-Belting' },
    { name: 'Niobush', path: '/niobush', description: 'Nylon Bushing' },
    { name: 'Zieta', path: '/zieta', description: 'Welding Electrodes' },
];

export default function ProductDropdown({ isMobile = false }: ProductDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    if (isMobile) {
        return (
            <div className="flex flex-col gap-1">
                <Link
                    to="/#produk"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-semibold hover:bg-accent text-foreground hover:text-accent-foreground"
                >
                    Produk
                </Link>
                <div className="ml-4 flex flex-col gap-1">
                    {products.map((product) => (
                        <Link
                            key={product.path}
                            to={product.path}
                            className="flex flex-col px-4 py-2 rounded-lg transition-all text-sm hover:bg-accent hover:text-accent-foreground"
                        >
                            <span className="font-semibold">{product.name}</span>
                            <span className="text-xs opacity-80">{product.description}</span>
                        </Link>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 hover:text-primary transition-colors font-medium"
            >
                Produk
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute top-full mt-2 left-0 w-56 bg-background border border-border rounded-xl shadow-lg overflow-hidden z-50">
                    <Link
                        to="/#produk"
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 hover:bg-accent hover:text-accent-foreground transition-colors border-b border-border font-semibold"
                    >
                        <span>Lihat Semua Produk</span>
                    </Link>
                    {products.map((product) => (
                        <Link
                            key={product.path}
                            to={product.path}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                            <div className="font-semibold">{product.name}</div>
                            <div className="text-xs opacity-80">{product.description}</div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
