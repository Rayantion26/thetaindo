import { motion } from 'framer-motion';
import { ArrowLeft, Download, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
    {
        id: 'theta-106',
        name: 'Theta 106',
        subtitle: 'Aluminium Complex Grease',
        description: 'Theta 106 Aluminium Complex soap based grease; available in NLGI grade 2 formulated with paraffin, highly refined mineral base oil, contains unleaded EP additive and oxidation, rust, and inhibitors, designed for operating condition where operation temperature is high.',
        brochure: 'https://thetaindo.com/wp-content/uploads/2025/10/theta-106.pdf',
        features: ['Tahan Suhu Tinggi', 'Aditif EP', 'Inhibitor Oksidasi & Karat'],
        image: '/images/theta_106.png'
    },
    {
        id: 'theta-107',
        name: 'Theta 107',
        subtitle: 'Lithium Complex Grease',
        description: 'Theta 107 Lithium Complex soap-based grease, available in NLGI grade 2, 2.5 and 3 formulated with Paraffin, highly refined mineral base oil, contains unleaded EP additive and oxidation, rust, and inhibitors; designed for operating condition where operation temperature is high.',
        brochure: 'https://thetaindo.com/wp-content/uploads/2025/10/theta-107-baru.pdf',
        features: ['Grade NLGI Serbaguna', 'Basis Lithium Complex', 'Stabilitas Termal Tinggi'],
        image: '/images/theta_107.png'
    },
    {
        id: 'theta-108',
        name: 'Theta 108',
        subtitle: 'Polyurea Grease',
        description: 'Theta 108 is a highly versatile polyurea grease with exceptional extreme pressure characteristics and excellent water resistance, recommended for use in high speed bearings even at extra heavy duty applications without carbonized.',
        brochure: 'https://thetaindo.com/wp-content/uploads/2024/11/3.png',
        features: ['Basis Polyurea', 'Tekanan Ekstrem', 'Tahan Air', 'Tanpa Karbonisasi'],
        image: '/images/theta_108.png'
    },
];

export default function ThetaProducts() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header Section - Compact */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-b border-border">
                <div className="container mx-auto px-4 py-6">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Kembali ke Beranda
                    </Link>
                    <div className="flex items-end justify-between">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Produk Theta</h1>
                            <p className="text-muted-foreground font-medium">Solusi pelumas grease performa tinggi premium untuk kondisi ekstrem</p>
                        </div>
                        <Link to="/contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                            <Phone className="w-4 h-4" />
                            Hubungi Kami
                        </Link>
                    </div>
                </div>
            </div>

            {/* Products Grid - 3 columns for 3 products */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid md:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all overflow-hidden"
                        >
                            {/* Product Image */}
                            <div className="relative aspect-video bg-gradient-to-br from-blue-500/5 to-blue-600/5 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                    }}
                                />
                                <div className="hidden absolute inset-0 flex items-center justify-center">
                                    <span className="text-6xl font-bold text-blue-500/20">T</span>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-6">
                                <div className="mb-2 inline-block px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-400 text-xs font-semibold">
                                    {product.subtitle}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                                <p className="text-sm text-muted-foreground mb-4 leading-relaxed font-medium">
                                    {product.description}
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {product.features.map((feature, i) => (
                                        <span key={i} className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* Download Button */}
                                <a
                                    href={product.brochure}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                                >
                                    <Download className="w-4 h-4" />
                                    Download Brosur
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
