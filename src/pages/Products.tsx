import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
    {
        id: 'theta',
        name: 'Theta',
        subtitle: 'Grease Performa Tinggi',
        description: 'Grease pelumas premium yang dirancang untuk kondisi ekstrem. Menjamin umur panjang dan kelancaran operasi mesin.',
        color: 'bg-blue-500',
    },
    {
        id: 'omega',
        name: 'Omega',
        subtitle: 'Solusi V-Belting',
        description: 'V-Belt yang tahan lama dan efisien untuk transmisi daya optimal. Tahan terhadap keausan dan peregangan.',
        color: 'bg-orange-500',
    },
    {
        id: 'niobush',
        name: 'Niobush',
        subtitle: 'Bushing Nilon',
        description: 'Bushing nilon berkualitas tinggi yang menawarkan ketahanan aus superior dan sifat melumasi sendiri.',
        color: 'bg-green-500',
    },
    {
        id: 'zieta',
        name: 'Zieta',
        subtitle: 'Elektroda Las',
        description: 'Elektroda las andal untuk hasil las yang kuat, konsisten, dan bersih di berbagai aplikasi.',
        color: 'bg-purple-500',
    },
];

export default function Products() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mb-16">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Produk Kami</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    Temukan rangkaian solusi industri komprehensif kami, yang direkayasa untuk performa dan keandalan.
                </p>
            </div>

            <div className="grid gap-8">
                {products.map((product, index) => (
                    <motion.div
                        id={product.id}
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative overflow-hidden rounded-3xl bg-card border border-border shadow-sm hover:shadow-md transition-all"
                    >
                        <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                            <div className="order-2 md:order-1">
                                <div className="mb-4 inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                                    {product.subtitle}
                                </div>
                                <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                    {product.description}
                                </p>

                                <Link
                                    to={product.id === 'theta' ? '/products/theta' : `/${product.id}`}
                                    className="inline-flex items-center gap-2 font-medium text-primary hover:text-primary/80 transition-colors"
                                >
                                    Pelajari Lebih Lanjut <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>

                            <div className="order-1 md:order-2 relative aspect-video md:aspect-square rounded-2xl overflow-hidden bg-secondary/50 flex items-center justify-center">
                                {/* Placeholder Visual untuk Produk */}
                                <div className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity ${product.color}`} />
                                <span className="text-6xl font-bold text-muted-foreground/20 uppercase tracking-widest">{product.name[0]}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
