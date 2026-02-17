import { useState, useEffect } from 'react';
import { ArrowRight, Star, Shield, Zap, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backgrounds = [
    "/images/carousel_1.jpg",
    "/images/carousel_2.jpg",
    "/images/carousel_3.jpg",
    "/images/carousel_4.jpg"
];

const features = [
    {
        title: "Produk Terbaik",
        description: "Thetaindo Prima Kencana hanya menjual produk terbaik untuk kebutuhan industri Anda.",
        icon: Star,
    },
    {
        title: "Kualitas Terbaik",
        description: "Produk kami diuji secara ketat untuk memastikan standar kualitas tertinggi.",
        icon: Shield,
    },
    {
        title: "Layanan Terbaik",
        description: "Kami memberikan layanan pelanggan yang luar biasa untuk mendukung operasional Anda.",
        icon: Zap,
    },
    {
        title: "Harga Terbaik",
        description: "Harga kompetitif tanpa mengorbankan kualitas atau performa.",
        icon: TrendingUp,
    },
];

const products = [
    { name: "Theta", category: "Grease (Gemuk)", color: "bg-blue-500" },
    { name: "Omega", category: "V-Belting", color: "bg-orange-500" },
    { name: "Niobush", category: "Nylon Bushing", color: "bg-green-500" },
    { name: "Zieta", category: "Welding Electrodes", color: "bg-purple-500" },
];

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 1.1,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        scale: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 1.1,
    }),
};

export default function Home() {
    const [[page, direction], setPage] = useState([0, 0]);

    // We calculate the index based on the page state
    const currentBgIndex = Math.abs(page % backgrounds.length);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 5000);
        return () => clearInterval(timer);
    }, [page]);

    return (
        <div className="flex flex-col gap-24 pb-24">
            {/* Hero Section with Slideshow */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-background group">
                {/* Background Slideshow */}
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={page}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.5 },
                            scale: { duration: 0.5 }
                        }}
                        className="absolute inset-0 z-0"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${backgrounds[currentBgIndex]})` }}
                        />
                        {/* Overlay for readability */}
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
                    </motion.div>
                </AnimatePresence>

                {/* Manually Navigation Controls */}
                <button
                    className="absolute left-4 z-20 p-3 rounded-full bg-black/20 text-white hover:bg-black/40 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                    onClick={() => paginate(-1)}
                    aria-label="Previous Slide"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    className="absolute right-4 z-20 p-3 rounded-full bg-black/20 text-white hover:bg-black/40 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                    onClick={() => paginate(1)}
                    aria-label="Next Slide"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                <div className="container relative z-10 px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white drop-shadow-lg">
                            Thetaindo <br className="md:hidden" /> Prima Kencana
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                            Mitra terpercaya Anda untuk solusi industri berkinerja tinggi.
                            Memberikan keunggulan dalam setiap komponen.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/products"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-medium text-lg hover:bg-gray-100 transition-colors shadow-lg"
                            >
                                Lihat Produk
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary/80 backdrop-blur-sm text-primary-foreground font-medium text-lg hover:bg-primary/60 transition-colors border border-white/20"
                            >
                                Hubungi Kami
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Mengapa Memilih Kami?</h2>
                    <p className="text-muted-foreground">Berkomitmen pada keunggulan dalam setiap aspek bisnis kami.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Best Products Section (User Requested) */}
            <section className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-muted-foreground mb-2">Best Products</p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">Products Thetaindo Prima Kencana</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Theta */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-card rounded-3xl p-6 shadow-sm border border-border flex flex-col md:flex-row items-center gap-6"
                    >
                        <div className="w-full md:w-1/2 aspect-square relative rounded-xl overflow-hidden bg-white flex items-center justify-center">
                            <img
                                src="/images/theta_grease.jpg"
                                alt="Theta Grease"
                                className="object-contain w-full h-full"
                                onError={(e) => {
                                    e.currentTarget.src = "https://placehold.co/400x400/fbbf24/000000?text=Theta+Grease";
                                }}
                            />
                        </div>
                        <div className="flex-1 text-left">
                            <h3 className="text-2xl font-bold mb-2">Theta ( Grease )</h3>
                            <p className="text-muted-foreground mb-6">Thetaindo Prima Kencana Product Theta</p>
                            <Link
                                to="/products#theta"
                                className="inline-block px-6 py-2 rounded-full bg-yellow-400 text-black font-bold hover:bg-yellow-500 transition-colors"
                            >
                                Read More
                            </Link>
                        </div>
                    </motion.div>

                    {/* Omega */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-card rounded-3xl p-6 shadow-sm border border-border flex flex-col md:flex-row items-center gap-6"
                    >
                        <div className="w-full md:w-1/2 aspect-square relative rounded-xl overflow-hidden bg-white flex items-center justify-center">
                            <img
                                src="/images/omega_belt.jpg"
                                alt="Omega V-Belting"
                                className="object-contain w-full h-full"
                                onError={(e) => {
                                    e.currentTarget.src = "https://placehold.co/400x400/3b82f6/ffffff?text=Omega+Belt";
                                }}
                            />
                        </div>
                        <div className="flex-1 text-left">
                            <h3 className="text-2xl font-bold mb-2">Omega ( V-Belting )</h3>
                            <p className="text-muted-foreground mb-6">Thetaindo Prima Kencana Product Omega</p>
                            <Link
                                to="/products#omega"
                                className="inline-block px-6 py-2 rounded-full bg-yellow-400 text-black font-bold hover:bg-yellow-500 transition-colors"
                            >
                                Read More
                            </Link>
                        </div>
                    </motion.div>

                    {/* Niobush */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-card rounded-3xl p-6 shadow-sm border border-border flex flex-col md:flex-row items-center gap-6"
                    >
                        <div className="w-full md:w-1/2 aspect-square relative rounded-xl overflow-hidden bg-white flex items-center justify-center">
                            <img
                                src="/images/niobush.jpg"
                                alt="Niobush Nylon Bushing"
                                className="object-contain w-full h-full"
                                onError={(e) => {
                                    e.currentTarget.src = "https://placehold.co/400x400/22c55e/ffffff?text=Niobush";
                                }}
                            />
                        </div>
                        <div className="flex-1 text-left">
                            <h3 className="text-2xl font-bold mb-2">Niobush ( Nylon Bushing )</h3>
                            <p className="text-muted-foreground mb-6">Thetaindo Prima Kencana Product Niobush</p>
                            <Link
                                to="/products#niobush"
                                className="inline-block px-6 py-2 rounded-full bg-yellow-400 text-black font-bold hover:bg-yellow-500 transition-colors"
                            >
                                Read More
                            </Link>
                        </div>
                    </motion.div>

                    {/* Zieta */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-card rounded-3xl p-6 shadow-sm border border-border flex flex-col md:flex-row items-center gap-6"
                    >
                        <div className="w-full md:w-1/2 aspect-square relative rounded-xl overflow-hidden bg-white flex items-center justify-center">
                            <img
                                src="/images/zieta.jpg"
                                alt="Zieta Welding Electrodes"
                                className="object-contain w-full h-full"
                                onError={(e) => {
                                    e.currentTarget.src = "https://placehold.co/400x400/a855f7/ffffff?text=Zieta";
                                }}
                            />
                        </div>
                        <div className="flex-1 text-left">
                            <h3 className="text-2xl font-bold mb-2">Zieta ( Welding Electrodes )</h3>
                            <p className="text-muted-foreground mb-6">Thetaindo Prima Kencana Product Zieta</p>
                            <Link
                                to="/products#zieta"
                                className="inline-block px-6 py-2 rounded-full bg-yellow-400 text-black font-bold hover:bg-yellow-500 transition-colors"
                            >
                                Read More
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Product Highlights */}
            <section className="container px-4 mx-auto">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Produk Kami</h2>
                    <Link to="/products" className="group flex items-center gap-2 text-primary font-medium">
                        Lihat Semua <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <Link
                            key={product.name}
                            to={`/products`}
                            className="group relative overflow-hidden rounded-2xl aspect-square flex items-end p-6 bg-secondary/50 hover:bg-secondary transition-colors"
                        >
                            <div className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity ${product.color}`} />

                            <div className="relative z-10">
                                <p className="text-sm font-medium text-muted-foreground mb-1">{product.category}</p>
                                <h3 className="text-2xl font-bold tracking-tight">{product.name}</h3>
                            </div>

                            <div className="absolute top-4 right-4 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                                <div className="p-2 rounded-full bg-background shadow-sm">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="container px-4 mx-auto">
                <div className="relative rounded-3xl overflow-hidden bg-primary text-primary-foreground px-6 py-16 md:py-24 text-center">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Siap meningkatkan operasional Anda?</h2>
                        <p className="text-primary-foreground/80 text-lg mb-8">
                            Hubungi kami hari ini untuk mendiskusikan kebutuhan Anda dan bagaimana kami dapat mendukung bisnis Anda.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-background text-foreground font-medium text-lg hover:bg-background/90 transition-colors"
                        >
                            Hubungi Kami
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
