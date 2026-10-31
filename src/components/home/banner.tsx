import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <section className="relative w-full min-h-160 md:min-h-150 lg:h-[calc(100vh-3.5rem)] overflow-hidden flex flex-col justify-between">
      {/* Background Image */}
      <Image
        src="/images/Banner.png"
        alt="Aerial view of a scenic coastal destination"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content — vertically centered */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-white text-center px-4 sm:px-6 pt-12 pb-8 md:pb-24">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 drop-shadow-md">
          Discover Your
          <br />
          Next Adventure
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-white/85 max-w-lg mb-8 leading-relaxed px-2">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#0BBCD6] hover:bg-[#09a8c0] text-white text-xs font-bold tracking-[0.15em] uppercase px-8 py-3.5 transition-colors">
            Explore Now
            <ArrowRight size={15} strokeWidth={2.5} />
          </button>
          <button className="w-full sm:w-auto text-xs font-bold tracking-[0.15em] uppercase px-8 py-3.5 bg-white/20 border border-white/40 hover:bg-white/30 text-white transition-colors backdrop-blur-sm">
            View Destination
          </button>
        </div>
      </div>

      {/* Search Bar — responsive grid on mobile, row on desktop */}
      <div className="relative md:absolute md:bottom-0 left-0 right-0 z-10 bg-black/60 md:bg-black/50 backdrop-blur-md grid grid-cols-2 md:flex md:items-stretch border-t border-white/10 md:border-t-0 md:divide-x md:divide-white/20 divide-white/15">
        {/* Location */}
        <div className="flex-1 px-4 sm:px-6 py-3.5 sm:py-4 cursor-pointer hover:bg-white/10 transition-colors border-r border-b md:border-r-0 md:border-b-0 border-white/15">
          <p className="text-white text-xs sm:text-sm font-semibold mb-0.5">Location</p>
          <p className="text-white/60 text-[11px] sm:text-xs">Address, City Or Zip</p>
        </div>

        {/* Date / Duration */}
        <div className="flex-1 px-4 sm:px-6 py-3.5 sm:py-4 cursor-pointer hover:bg-white/10 transition-colors border-b md:border-b-0 border-white/15">
          <p className="text-white text-xs sm:text-sm font-semibold mb-0.5">
            Date/Duration
          </p>
          <p className="text-white/60 text-[11px] sm:text-xs">Anytime/3 Days</p>
        </div>

        {/* Budget */}
        <div className="flex-1 px-4 sm:px-6 py-3.5 sm:py-4 cursor-pointer hover:bg-white/10 transition-colors border-r md:border-r-0 border-white/15">
          <p className="text-white text-xs sm:text-sm font-semibold mb-0.5">Budget</p>
          <p className="text-white/60 text-[11px] sm:text-xs">$0-$3000</p>
        </div>

        {/* People */}
        <div className="flex-1 px-4 sm:px-6 py-3.5 sm:py-4 cursor-pointer hover:bg-white/10 transition-colors">
          <p className="text-white text-xs sm:text-sm font-semibold mb-0.5">People</p>
          <p className="text-white/60 text-[11px] sm:text-xs">5-10</p>
        </div>

        {/* Search Button */}
        <button className="col-span-2 md:col-span-1 bg-[#0BBCD6] hover:bg-[#09a8c0] text-white text-xs sm:text-sm font-bold tracking-[0.12em] uppercase py-3.5 md:py-0 px-8 lg:px-12 transition-colors shrink-0">
          Search
        </button>
      </div>
    </section>
  );
}
