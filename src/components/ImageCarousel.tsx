import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
    images: string[];
    interval?: number;
    aspectRatio?: string;
}

export default function ImageCarousel({ images, interval = 3000, aspectRatio = "aspect-[4/3]" }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className={`relative w-full ${aspectRatio} overflow-hidden rounded-2xl bg-secondary/20 group`}>
            <AnimatePresence mode='wait'>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        // Show placeholder if image fails
                        e.currentTarget.parentElement?.classList.add('bg-secondary/50', 'flex', 'items-center', 'justify-center');
                    }}
                />
            </AnimatePresence>

            {/* Placeholder Text if Image Missing (Hidden if image loads) */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center text-muted-foreground text-sm">
                Image not found: {images[currentIndex]}
            </div>

            {/* Controls */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={(e) => { e.preventDefault(); prevSlide(); }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/40"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={(e) => { e.preventDefault(); nextSlide(); }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/40"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => { e.preventDefault(); setCurrentIndex(idx); }}
                                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/80'
                                    }`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
