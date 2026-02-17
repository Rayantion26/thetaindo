import { motion } from 'framer-motion';
import { MapPin, ExternalLink, Building2 } from 'lucide-react';

const office = {
    city: "Medan (Head Office)",
    address: "Jl. Sei Bengai No.32, Sei Sikambing D, Kec. Medan Petisah, Kota Medan, Sumatera Utara 20111",
    phone: "(+62) 8881 4038",
    mapLink: "https://goo.gl/maps/6A8ou1v5QxBHfZLy9"
};

const branches = [
    {
        city: "Waringin Timur, Kalimantan Tengah",
        address: "HM. ARSYAD KM 4 RT 17 RW 04 MENTAWA BARU KETAPANG",
        phone: "0561-31457",
        company: "PT. KARYA INTI ABADI"
    },
    {
        city: "Pontianak, Kalimantan Barat",
        address: "JL. MT. HARYONO NO. 21 RT. 004 RW. 014 PARIT TOKAYA PONTIANAK SELATAN",
        phone: "(0561) 737428",
        company: "CV. THETA INDO LESTARI"
    },
    {
        city: "Palembang, Sumatera Selatan",
        address: "JL. BRIGJEN H. HASAN KASIM KOMP. JAYA RAYA GARDEN BLOK C2 CELENTANG",
        phone: "0711- 718858, 814988",
        company: "CV. THETA MITRA LESTARI"
    },
    {
        city: "Jambi, Jambi",
        address: "JL. RB SIAGIAN NO. 06 RT. 021 RW.000 PASIR PUTIH – JAMBI SELATAN",
        phone: "0741-573398",
        company: "CV. THETAINDO KENCANA"
    },
    {
        city: "Pekanbaru, Riau",
        address: "JL. SULTAN SYARIF QASIM NO. 3A PEKAN BARU",
        phone: "0761-7891986",
        company: "CV. Sinar Mas Java"
    },
    {
        city: "Surabaya, Jawa Timur",
        address: "Jl. Kedung Cowek No. 5e, Gading, Kec. Tambaksari, Surabaya, Jawa Timur 60134",
        phone: "(+62)812-6510-0098"
    }
];

export default function Branch() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-6xl mx-auto"
            >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Lokasi Kami</h1>
                <p className="text-xl text-muted-foreground mb-12">
                    Kunjungi kantor pusat atau cabang kami di seluruh Indonesia.
                </p>

                {/* Head Office Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Building2 className="w-6 h-6 text-primary" />
                        Kantor Pusat (Head Office)
                    </h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-8 rounded-3xl bg-primary/5 border border-primary/10 shadow-sm"
                    >
                        <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{office.city}</h3>
                                <p className="text-lg text-muted-foreground mb-4">{office.address}</p>
                                <p className="font-medium text-lg">Telp: {office.phone}</p>
                            </div>
                            <a
                                href={office.mapLink}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
                            >
                                Buka di Maps <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>
                </section>

                {/* Branches Section */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <MapPin className="w-6 h-6 text-primary" />
                        Cabang Kami (Our Branch)
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {branches.map((branch, index) => (
                            <motion.div
                                key={branch.city}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col h-full"
                            >
                                {/* Embedded Map */}
                                <div className="h-56 w-full bg-secondary/30 relative border-b border-border">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        frameBorder="0"
                                        scrolling="no"
                                        marginHeight={0}
                                        marginWidth={0}
                                        title={`Map of ${branch.city}`}
                                        src={`https://maps.google.com/maps?q=${encodeURIComponent(branch.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                                        className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                                        loading="lazy"
                                    ></iframe>
                                    {/* Overlay for interaction handling */}
                                    <div className="absolute inset-0 pointer-events-none group-hover:pointer-events-auto bg-transparent" />
                                </div>

                                <div className="p-5 flex flex-col flex-grow justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold mb-1 leading-tight">{branch.city}</h3>
                                        {branch.company && (
                                            <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">{branch.company}</p>
                                        )}
                                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed line-clamp-3 hover:line-clamp-none transition-all cursor-default" title={branch.address}>
                                            {branch.address}
                                        </p>
                                    </div>

                                    <div className="pt-3 border-t border-border flex flex-wrap gap-2 items-center justify-between">
                                        <p className="font-medium text-xs text-foreground/80">{branch.phone}</p>
                                        <a
                                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-primary/10 text-primary text-xs font-semibold hover:bg-primary/20 transition-colors"
                                        >
                                            View <ExternalLink className="w-3 h-3 ml-1" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </motion.div>
        </div>
    );
}
