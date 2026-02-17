import { motion } from 'framer-motion';
import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
    {
        id: 'theta-106',
        name: 'Theta 106',
        subtitle: 'Aluminium Complex Grease',
        description: 'Theta 106 adalah gemuk (grease) berbasis sabun Aluminium Complex yang tersedia dalam NLGI grade 2. Diformulasikan dengan parafin dan minyak dasar mineral yang sangat halus, mengandung aditif EP tanpa timbal, serta inhibitor oksidasi dan karat. Dirancang khusus untuk kondisi operasi dengan suhu tinggi.',
        brochure: 'https://thetaindo.com/wp-content/uploads/2025/10/theta-106.pdf',
        features: ['Tahan Suhu Tinggi', 'Aditif EP', 'Inhibitor Oksidasi & Karat']
    },
    {
        id: 'theta-107',
        name: 'Theta 107',
        subtitle: 'Lithium Complex Grease',
        description: 'Theta 107 adalah gemuk berbasis sabun Lithium Complex, tersedia dalam NLGI grade 2, 2.5, dan 3. Diformulasikan dengan Parafin dan minyak dasar mineral halus, mengandung aditif EP tanpa timbal, serta inhibitor oksidasi dan karat. Dirancang untuk kondisi operasi suhu tinggi.',
        brochure: 'https://thetaindo.com/wp-content/uploads/2025/10/theta-107-baru.pdf',
        features: ['Grade NLGI Serbaguna', 'Basis Lithium Complex', 'Stabilitas Termal Tinggi']
    },
    {
        id: 'theta-108',
        name: 'Theta 108',
        subtitle: 'Polyurea Grease',
        description: 'Theta 108 adalah gemuk polyurea yang sangat serbaguna dengan karakteristik tekanan ekstrem (EP) luar biasa dan ketahanan air yang sangat baik. Direkomendasikan untuk bantalan (bearing) kecepatan tinggi bahkan pada aplikasi tugas berat tanpa karbonisasi.',
        brochure: 'https://thetaindo.com/wp-content/uploads/2024/11/3.jpg',
        features: ['Basis Polyurea', 'Karakteristik Tekanan Ekstrem', 'Tahan Air Sangat Baik', 'Tanpa Karbonisasi']
    }
];

export default function ThetaProducts() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8"
            >
                <Link to="/products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Kembali ke Produk
                </Link>
            </motion.div>

            <div className="max-w-3xl mb-16">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Produk Theta</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    Solusi pelumas grease performa tinggi premium yang dirancang untuk kondisi ekstrem.
                </p>
            </div>

            <div className="grid gap-12">
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="rounded-3xl bg-card border border-border shadow-sm overflow-hidden"
                    >
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-1 bg-secondary/30 p-8 flex items-center justify-center relative min-h-[200px] md:min-h-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
                                <h2 className="text-4xl font-bold text-foreground/10 uppercase tracking-widest relative z-10 text-center">
                                    {product.name.split(' ')[1]}
                                </h2>
                                {/* Placeholder for product image if user adds them later */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/5">
                                    <span className="text-xs text-muted-foreground">Add image: {product.name.toLowerCase().replace(' ', '_')}.jpg</span>
                                </div>
                            </div>

                            <div className="md:col-span-2 p-8 md:pl-0 flex flex-col justify-center">
                                <div className="mb-2 inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium w-fit">
                                    {product.subtitle}
                                </div>
                                <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                                    {product.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {product.features.map((feature, i) => (
                                        <span key={i} className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={product.brochure}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                                    >
                                        <Download className="w-4 h-4" />
                                        Unduh Brosur
                                    </a>
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors"
                                    >
                                        Hubungi Kami
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
