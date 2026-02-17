import { useState, useEffect } from 'react';
import { ArrowRight, Star, Shield, Zap, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backgrounds = [
    "/images/landing_hero_theta.png", // Theta Lubricants (Buckets)
    "/images/landing_hero_omega.png", // Omega Belts
    "/images/landing_hero_zieta.png", // Zieta Electrodes
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


const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 1,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? '100%' : '-100%',
        opacity: 1,
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
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background group">
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
                            x: { type: "tween", duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                            opacity: { duration: 0.3 }
                        }}
                        className="absolute inset-0 z-0"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${backgrounds[currentBgIndex]})` }}
                        />
                        {/* Subtle overlay for readability */}
                        <div className="absolute inset-0 bg-black/50" />
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/80 to-transparent" />
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

            {/* About Us Section */}
            <section id="tentang-kami" className="container px-4 mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Tentang Thetaindo Prima Kencana</h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            Thetaindo Prima Kencana adalah penyedia utama komponen dan solusi industri berkinerja tinggi.
                            Kami mengkhususkan diri dalam menghadirkan produk unggulan termasuk gemuk (grease), V-belt, bushing nilon, dan elektroda las untuk berbagai industri.
                        </p>
                        <h3 className="text-xl font-bold mb-3">Misi Kami</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Untuk memberdayakan industri dengan komponen yang andal dan berkinerja tinggi yang menjamin efisiensi operasional dan umur panjang mesin.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-card border border-border">
                                <h4 className="font-bold mb-1">Jaminan Kualitas</h4>
                                <p className="text-sm text-muted-foreground">Standar internasional</p>
                            </div>
                            <div className="p-4 rounded-xl bg-card border border-border">
                                <h4 className="font-bold mb-1">Dukungan Ahli</h4>
                                <p className="text-sm text-muted-foreground">Panduan teknis</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="aspect-video rounded-3xl overflow-hidden bg-muted"
                    >
                        <img
                            src="/images/about_us.png"
                            alt="Professional Welder"
                            className="object-cover w-full h-full"
                            onError={(e) => {
                                e.currentTarget.src = "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80";
                            }}
                        />
                    </motion.div>
                </div>
            </section>




            {/* Products Section */}
            <section id="produk" className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Produk Kami</h2>
                    <p className="text-xl text-muted-foreground">
                        Temukan rangkaian solusi industri komprehensif kami, yang direkayasa untuk performa dan keandalan.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        {
                            id: 'theta',
                            name: 'Theta',
                            subtitle: 'Grease Performa Tinggi',
                            description: 'Grease pelumas premium yang dirancang untuk kondisi ekstrem. Menjamin umur panjang dan kelancaran operasi mesin.',
                            color: 'bg-blue-500',
                            image: '/images/product_theta.png'
                        },
                        {
                            id: 'omega',
                            name: 'Omega',
                            subtitle: 'Solusi V-Belting',
                            description: 'V-Belt yang tahan lama dan efisien untuk transmisi daya optimal. Tahan terhadap keausan dan peregangan.',
                            color: 'bg-orange-500',
                            image: '/images/product_omega.png'
                        },
                        {
                            id: 'niobush',
                            name: 'Niobush',
                            subtitle: 'Bushing Nilon',
                            description: 'Bushing nilon berkualitas tinggi yang menawarkan ketahanan aus superior dan sifat melumasi sendiri.',
                            color: 'bg-green-500',
                            image: '/images/product_niobush.png'
                        },
                        {
                            id: 'zieta',
                            name: 'Zieta',
                            subtitle: 'Elektroda Las',
                            description: 'Elektroda las andal untuk hasil las yang kuat, konsisten, dan bersih di berbagai aplikasi.',
                            color: 'bg-purple-500',
                            image: '/images/product_zieta.png'
                        },
                    ].map((product, index) => (
                        <motion.div
                            id={product.id}
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-3xl bg-card border border-border shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8 items-center">
                                <div className="w-full md:w-2/5 aspect-square relative rounded-2xl overflow-hidden bg-secondary/50 flex-shrink-0">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                    <div className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity ${product.color}`} />
                                    <span className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-muted-foreground/20 uppercase tracking-widest">{product.name[0]}</span>
                                </div>
                                <div className="flex-1">
                                    <div className="mb-3 inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                                        {product.subtitle}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{product.name}</h3>
                                    <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed">
                                        {product.description}
                                    </p>
                                    <Link
                                        to={product.id === 'theta' ? '/products/theta' : `/${product.id}`}
                                        className="inline-flex items-center gap-2 font-medium text-primary hover:text-primary/80 transition-colors"
                                    >
                                        Pelajari Lebih Lanjut <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
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
