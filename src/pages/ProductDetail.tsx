import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const products = {
    theta: {
        name: 'Theta',
        subtitle: 'Grease Performa Tinggi',
        description: 'Theta Grease dirancang untuk tekanan ekstrem dan lingkungan bersuhu tinggi. Memberikan perlindungan superior terhadap keausan, karat, dan korosi, memperpanjang umur mesin Anda.',
        features: [
            'Titik Leleh Tinggi',
            'Ketahanan Air yang Sangat Baik',
            'Aditif Tekanan Ekstrem (EP)',
            'Stabilitas Oksidasi'
        ],
        color: 'bg-blue-500'
    },
    omega: {
        name: 'Omega',
        subtitle: 'Solusi V-Belting',
        description: 'V-Belt Omega dirancang untuk efisiensi transmisi daya maksimum. Terbuat dari bahan bermutu tinggi, tahan terhadap peregangan dan degradasi bahkan di bawah beban berat.',
        features: [
            'Anti-Statis',
            'Tahan Minyak & Panas',
            'Kekuatan Tarik Tinggi',
            'Stabilitas Dimensi'
        ],
        color: 'bg-orange-500'
    },
    niobush: {
        name: 'Niobush',
        subtitle: 'Bushing Nilon',
        description: 'Bushing Nilon Niobush menawarkan alternatif ringan dan melumasi sendiri dibandingkan bushing logam tradisional. Mengurangi gesekan dan biaya perawatan secara signifikan.',
        features: [
            'Melumasi Sendiri',
            'Tahan Aus',
            'Reduksi Kebisingan',
            'Bebas Korosi'
        ],
        color: 'bg-green-500'
    },
    zieta: {
        name: 'Zieta',
        subtitle: 'Elektroda Las',
        description: 'Elektroda Las Zieta memberikan busur yang halus, sedikit percikan, dan pembuangan terak yang mudah. Cocok untuk berbagai jenis baja dan posisi pengelasan.',
        features: [
            'Busur Stabil',
            'Sedikit Percikan',
            'Pembuangan Terak Mudah',
            'Pengelasan Segala Posisi'
        ],
        color: 'bg-purple-500'
    }
};

export default function ProductDetail() {
    const { productSlug } = useParams();
    const product = products[productSlug as keyof typeof products];

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-24 text-center">
                <h1 className="text-3xl font-bold mb-4">Produk Tidak Ditemukan</h1>
                <Link to="/products" className="text-primary hover:underline">Kembali ke Produk</Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12 md:py-24">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
            >
                <Link to="/products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Kembali ke Produk
                </Link>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Sisi Visual */}
                    <div className={`aspect-square rounded-3xl ${product.color} bg-opacity-10 dark:bg-opacity-20 flex items-center justify-center relative overflow-hidden`}>
                        <div className={`absolute inset-0 opacity-20 ${product.color}`} />
                        <span className="text-9xl font-bold text-foreground/10">{product.name[0]}</span>
                    </div>

                    {/* Sisi Konten */}
                    <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
                            {product.subtitle}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{product.name}</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            {product.description}
                        </p>

                        <h3 className="text-xl font-bold mb-4">Fitur Utama</h3>
                        <ul className="space-y-3 mb-12">
                            {product.features.map(feature => (
                                <li key={feature} className="flex items-center gap-3">
                                    <div className="p-1 rounded-full bg-green-500/10 text-green-600">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity w-full md:w-auto"
                        >
                            Minta Penawaran
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
