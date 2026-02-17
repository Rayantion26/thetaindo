import { motion } from 'framer-motion';
import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { asset } from '../../utils/asset';

const categories = [
    {
        name: 'Stainless Steel',
        items: [
            { name: 'Zieta 308', brochure: 'https://thetaindo.com/wp-content/uploads/2024/11/308-ENG.pdf' },
            { name: 'Zieta 309', brochure: 'https://thetaindo.com/wp-content/uploads/2024/11/309-ENG.pdf' },
            { name: 'Zieta 310', brochure: 'https://thetaindo.com/wp-content/uploads/2024/11/310-ENG.pdf' },
            { name: 'Zieta 312', brochure: 'https://thetaindo.com/wp-content/uploads/2024/11/312-ENG.pdf' },
            { name: 'Zieta 316', brochure: 'https://thetaindo.com/wp-content/uploads/2024/11/316-ENG.pdf' },
        ]
    },
    {
        name: 'Hard Facing',
        items: [
            { name: 'Zieta 30', brochure: 'https://thetaindo.com/wp-content/uploads/2024/11/30-ENG.pdf' },
            { name: 'Zieta 60 W', brochure: 'https://thetaindo.com/wp-content/uploads/2024/11/60-W-ENG.pdf' },
            { name: 'Zieta 60 H Cr', brochure: 'https://thetaindo.com/wp-content/uploads/2024/11/60-HCR-ENG.pdf' },
            { name: 'Zieta 60 Cr', brochure: 'https://thetaindo.com/wp-content/uploads/2024/11/60-CR-ENG.pdf' },
        ]
    },
    {
        name: 'Cast Iron',
        items: [
            { name: 'Zieta 99', brochure: 'https://thetaindo.com/wp-content/uploads/2024/11/99-ENG.pdf' },
        ]
    },
];

export default function ZietaProducts() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24">
            <Link
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
                <ArrowLeft className="w-4 h-4" />
                Kembali ke Beranda
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Produk Zieta</h1>
                <p className="text-xl text-muted-foreground">
                    Elektroda las berkualitas tinggi untuk berbagai aplikasi.
                </p>
            </motion.div>

            {/* Main Product Description */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl bg-card border border-border shadow-sm overflow-hidden mb-12"
            >
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1 relative aspect-square bg-gradient-to-br from-purple-500/10 to-purple-600/5 overflow-hidden">
                        <img
                            src={asset('images/zieta_general.png')}
                            alt="Zieta Welding Electrodes"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                            }}
                        />
                        <div className="hidden absolute inset-0 flex items-center justify-center">
                            <span className="text-9xl font-bold text-purple-500/20">Z</span>
                        </div>
                    </div>

                    <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                        <div className="mb-3 inline-block w-fit px-3 py-1 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-400 text-sm font-medium">
                            Lime Titania Type Stainless Electrode
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Zieta Welding Electrodes</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                            Elektroda stainless tipe lime titania dengan kemampuan las yang sangat baik, memberikan deposit las austenitic dengan kandungan karbon rendah 20% Cr dan 10% Ni. Banyak digunakan untuk pengelasan dan pelapis tangki, pipa dan peralatan lain yang digunakan dalam farmasi. (Tersedia dalam 308-L)
                        </p>

                        <div className="mb-6">
                            <h3 className="font-semibold mb-3">Keunggulan:</h3>
                            <div className="grid grid-cols-2 gap-2">
                                {[
                                    'Kemampuan Las Sangat Baik',
                                    'Karbon Rendah',
                                    '20% Cr & 10% Ni',
                                    'Deposit Austenitic',
                                    'Cocok untuk Farmasi',
                                    'Berbagai Tipe Tersedia'
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <a
                            href="https://thetaindo.com/wp-content/uploads/2024/11/ZIETA-PEMBAGIAN-ENG.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors w-fit"
                        >
                            <Download className="w-4 h-4" />
                            Download Katalog Umum
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Product Categories */}
            <div className="grid gap-8">
                {categories.map((category, categoryIndex) => (
                    <motion.div
                        key={category.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + categoryIndex * 0.1 }}
                        className="rounded-2xl bg-card border border-border p-6 md:p-8"
                    >
                        <h3 className="text-2xl font-bold mb-6">{category.name}</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {category.items.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.brochure}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex items-center justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors border border-border hover:border-purple-500/50"
                                >
                                    <span className="font-medium">{item.name}</span>
                                    <Download className="w-4 h-4 text-muted-foreground group-hover:text-purple-600 transition-colors" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
