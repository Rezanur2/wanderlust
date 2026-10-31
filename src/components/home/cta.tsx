import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative w-full min-h-[300px] py-14 sm:py-16 md:py-20 overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/images/CTA.png"
        alt="Aerial view of a tropical island with an airplane"
        fill
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/55" />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 gap-3 sm:gap-4 max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
          Ready To Start Your Journey?
        </h2>
        <p className="text-white/75 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg">
          Join thousands of travelers who have discovered the world with us
        </p>
        <button className="flex items-center justify-center gap-3 bg-white text-foreground text-xs font-bold tracking-[0.15em] uppercase px-7 sm:px-8 py-3.5 mt-2 hover:bg-white/90 transition-colors w-full sm:w-auto shadow-sm">
          Book Your Trip Today
          <ArrowRight size={14} strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
}
