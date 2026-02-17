import { motion } from 'framer-motion';
import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
    {
        id: 'niobush-green',
        name: 'Niobush Green',
        subtitle: 'Non-Self-Lubrication Bushing',
        description: 'NIOBUSH GREEN khusus dikembangkan untuk bagian non-self-lubrication, beban berat dan kecepatan putaran rendah, yang secara jelas menghasilkan peningkatan substansial dalam umur bantalan - 5 kali lipat dari bushing umum dan 25 kali lipat dari perunggu fosfor. Tahan terhadap suhu tinggi.',
        brochure: 'https://thetaindo.com/wp-content/uploads/2024/11/NIOBUSH.png',
        features: ['Non-Self-Lubrication', 'Beban Berat', 'Kecepatan Rendah', 'Tahan Suhu Tinggi']
    },
    {
        id: 'niobush-black',
        name: 'Niobush Black',
        subtitle: 'Impact & Fatigue Resistant Bushing',
        description: 'NIOBUSH BLACK dapat mempertahankan ketahanan benturan dan ketahanan kelelahan dari nilon cor, serta meningkatkan kapasitas beban dan ketahanan aus. Memiliki aplikasi luas dalam pembuatan roda gigi, bantalan, roda gigi planet, cincin penyegel dan lain sebagainya.',
        brochure: 'https://thetaindo.com/wp-content/uploads/2024/11/NIOBUSH.png',
        features: ['Tahan Benturan', 'Tahan Kelelahan', 'Kapasitas Beban Tinggi', 'Ketahanan Aus Superior']
    },
];

export default function NiobushProducts() {
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
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Produk Niobush</h1>
                <p className="text-xl text-muted-foreground">
                    Bushing nilon berkualitas tinggi untuk berbagai aplikasi industri.
                </p>
            </motion.div>

            <div className="grid gap-12">
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="rounded-3xl bg-card border border-border shadow-sm overflow-hidden"
                    >
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-1 relative aspect-square bg-gradient-to-br from-green-500/10 to-green-600/5 flex items-center justify-center p-8">
                                <div className="absolute inset-0 opacity-5 bg-green-500" />
                                <span className="text-9xl font-bold text-green-500/20 absolute">N</span>
                                <div className="relative text-center">
                                    <div className="text-6xl font-bold text-green-600 mb-2">{product.name.split(' ')[1]}</div>
                                    <div className="text-sm text-muted-foreground uppercase tracking-wider">Niobush</div>
                                </div>
                            </div>

                            <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                                <div className="mb-3 inline-block w-fit px-3 py-1 rounded-full bg-green-500/10 text-green-700 dark:text-green-400 text-sm font-medium">
                                    {product.subtitle}
                                </div>
                                <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                    {product.description}
                                </p>

                                <div className="mb-6">
                                    <h3 className="font-semibold mb-3">Keunggulan:</h3>
                                    <div className="grid grid-cols-2 gap-2">
                                        {product.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <a
                                    href={product.brochure}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition-colors w-fit"
                                >
                                    <Download className="w-4 h-4" />
                                    Download Brosur
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
