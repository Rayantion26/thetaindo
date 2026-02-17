import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Tentang Thetaindo Prima Kencana</h1>

                <div className="mb-12 aspect-video relative rounded-3xl overflow-hidden bg-muted">
                    <img
                        src="/images/about_us.jpg"
                        alt="Professional Welder"
                        className="object-cover w-full h-full"
                        onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80";
                        }}
                    />
                </div>

                <div className="prose prose-lg dark:prose-invert">
                    <p className="lead text-xl text-muted-foreground mb-8">
                        Thetaindo Prima Kencana adalah penyedia utama komponen dan solusi industri berkualitas tinggi.
                        Kami mengkhususkan diri dalam menghadirkan produk unggulan termasuk gemuk (grease), V-belt, bushing nilon, dan elektroda las untuk berbagai industri.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">Misi Kami</h2>
                    <p className="text-muted-foreground mb-8">
                        Untuk memberdayakan industri dengan komponen yang andal dan berkinerja tinggi yang menjamin efisiensi operasional dan umur panjang mesin.
                        Kami berkomitmen pada kualitas, integritas, dan layanan luar biasa dalam setiap kemitraan.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">Komitmen Kami</h2>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
                        <li><strong>Jaminan Kualitas:</strong> Kami hanya menyediakan produk yang memenuhi standar internasional yang ketat.</li>
                        <li><strong>Dukungan Ahli:</strong> Tim kami memberikan panduan teknis untuk membantu Anda memilih solusi yang tepat.</li>
                        <li><strong>Pengiriman Tepat Waktu:</strong> Kami memahami biaya downtime dan berusaha untuk pemenuhan pesanan yang cepat.</li>
                        <li><strong>Kepuasan Pelanggan:</strong> Kesuksesan Anda adalah prioritas kami.</li>
                    </ul>
                </div>
            </motion.div>
        </div>
    );
}
