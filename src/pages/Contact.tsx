import { motion } from 'framer-motion';
import { Phone, MapPin, MessageCircle, ExternalLink } from 'lucide-react';

export default function Contact() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Hubungi Kami</h1>
                <p className="text-xl text-muted-foreground mb-12">
                    Punya pertanyaan atau butuh penawaran? Hubungi tim kami melalui saluran di bawah ini.
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Details */}
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Kunjungi Kami</h3>
                                <p className="text-muted-foreground">
                                    Thetaindo Prima Kencana<br />
                                    Jl. Sei Bengai No.32, Sei Sikambing D<br />
                                    Kec. Medan Petisah, Kota Medan<br />
                                    Sumatera Utara 20111
                                </p>
                                <a
                                    href="https://goo.gl/maps/6A8ou1v5QxBHfZLy9"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1 text-primary text-sm mt-2 hover:underline"
                                >
                                    Lihat di Google Maps <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Telepon</h3>
                                <p className="text-muted-foreground">Kantor Pusat:</p>
                                <a href="tel:+626188814038" className="block text-lg font-medium hover:text-primary transition-colors">(+62) 8881 4038</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10 text-green-600 bg-green-100 dark:bg-green-900/20">
                                <MessageCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                                <p className="text-muted-foreground">Chat Langsung:</p>
                                <a
                                    href="https://wa.me/6285100821663?text=Hallo%20Admin%20thetaindo.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block text-lg font-medium hover:text-green-600 transition-colors"
                                >
                                    +62 851 0082 1663
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Map Embed or Form Placeholder */}
                    <div className="bg-card border border-border rounded-3xl p-8 flex flex-col justify-center h-full min-h-[400px]">
                        <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-1">Nama</label>
                                <input type="text" id="name" className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all" placeholder="Nama Anda" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                                <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all" placeholder="email@anda.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-1">Pesan</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all" placeholder="Bagaimana kami dapat membantu?" />
                            </div>
                            <button className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
                                Kirim Pesan
                            </button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
