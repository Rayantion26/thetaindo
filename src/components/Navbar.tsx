import { Link } from 'react-router-dom';
import { Menu, Search } from 'lucide-react';
import ProductDropdown from './ProductDropdown';


interface NavbarProps {
    onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border h-16 px-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="p-2 -ml-2 rounded-full hover:bg-accent active:scale-95 transition-all md:hidden"
                    aria-label="Open menu"
                >
                    <Menu className="w-6 h-6" />
                </button>

                <Link to="/" className="flex items-center gap-2">
                    <img
                        src="/images/logo.png"
                        alt="Thetaindo Prima Kencana"
                        className="h-10 w-auto object-contain"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                    />
                    <span className="hidden text-xl font-bold tracking-tight">Thetaindo</span>
                </Link>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                <Link to="/" className="hover:text-primary transition-colors">Beranda</Link>
                <ProductDropdown />
                <Link to="/branch" className="hover:text-primary transition-colors">Cabang Kami</Link>
                <Link to="/contact" className="hover:text-primary transition-colors">Hubungi Kami</Link>
            </div>

            <div className="flex items-center gap-2">
                <button className="p-2 rounded-full hover:bg-accent transition-colors">
                    <Search className="w-5 h-5 text-muted-foreground" />
                </button>
            </div>
        </nav>
    );
}
