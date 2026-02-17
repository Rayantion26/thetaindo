import { motion } from 'framer-motion';
import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OmegaProducts() {
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
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Produk Omega</h1>
                <p className="text-xl text-muted-foreground">
                    V-Belt performa tinggi untuk transmisi daya optimal.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl bg-card border border-border shadow-sm overflow-hidden"
            >
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1 relative aspect-square bg-gradient-to-br from-orange-500/10 to-orange-600/5 overflow-hidden">
                        <img
                            src="/images/omega_vbelt.png"
                            alt="Omega V-Belt"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                            }}
                        />
                        <div className="hidden absolute inset-0 flex items-center justify-center">
                            <span className="text-9xl font-bold text-orange-500/20">Ω</span>
                        </div>
                    </div>

                    <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                        <div className="mb-3 inline-block w-fit px-3 py-1 rounded-full bg-orange-500/10 text-orange-700 dark:text-orange-400 text-sm font-medium">
                            Enhanced Oil Proof Triangular Belt
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Omega V-Belt</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                            Perusahaan kami memimpin pengembangan sabuk segitiga jenis baru dengan tipe penguatan tahan minyak. Berbeda dari sabuk segitiga teknologi lama, produk ini diproduksi menggunakan teknologi raw edge v-belt. Bagian utamanya terbuat dari karet komposit tahan minyak dan tahan panas terbaik, dan kerangkanya terbuat dari bahan khusus berkualitas tinggi.
                        </p>

                        <div className="mb-6">
                            <h3 className="font-semibold mb-3">Keunggulan:</h3>
                            <div className="grid grid-cols-2 gap-2">
                                {[
                                    'Tahan Minyak',
                                    'Tahan Panas',
                                    'Raw Edge Technology',
                                    'Karet Komposit',
                                    'Kerangka Khusus',
                                    'Daya Tahan Tinggi'
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <a
                            href="https://thetaindo.com/wp-content/uploads/2024/11/BROSUR-V-BELT-OMEGA-FIX.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-600 text-white font-medium hover:bg-orange-700 transition-colors w-fit"
                        >
                            <Download className="w-4 h-4" />
                            Download Brosur
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
