"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      '"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."',
    name: "Michael Chen",
    location: "Singapore",
    image: "/images/person1.png",
    alt: "Michael Chen portrait",
  },
  {
    quote:
      '"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"',
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/images/person2.png",
    alt: "Sarah Johnson portrait",
  },
  {
    quote:
      '"Tokyo Was Beyond Anything I Could Have Imagined. The Food, The Culture, The People — Every Moment Was Pure Magic. Already Planning My Return Trip!"',
    name: "James Rivera",
    location: "London, UK",
    image: "/images/person1.png",
    alt: "James Rivera portrait",
  },
];

const subscribe = () => () => {};

export default function Testimonials() {
  const isMounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  return (
    <section className="bg-white py-12 md:py-16 px-6 sm:px-10 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header row: title left, nav buttons right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 md:mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-2">
              What Travelers Say
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Real experiences from our happy travelers
            </p>
          </div>
        </div>

        {/* Carousel only mounts on the client to avoid SSR / Embla DOM hydration discrepancies */}
        {isMounted ? (
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            {/* Nav buttons in top right */}
            <div className="flex items-center justify-end gap-3 -mt-16 sm:-mt-20 mb-6">
              <CarouselPrevious className="static inset-auto translate-x-0 translate-y-0 h-9 w-9 sm:h-10 sm:w-10 rounded-full border border-border text-foreground hover:bg-muted" />
              <CarouselNext className="static inset-auto translate-x-0 translate-y-0 h-9 w-9 sm:h-10 sm:w-10 rounded-full border border-border text-foreground hover:bg-muted" />
            </div>

            <CarouselContent className="-ml-4 sm:-ml-5">
              {testimonials.map((t, idx) => (
                <CarouselItem
                  key={`${t.name}-${idx}`}
                  className="pl-4 sm:pl-5 basis-full lg:basis-1/2"
                >
                  {/* Testimonial Card */}
                  <div className="flex flex-col sm:flex-row h-full border border-border rounded-lg overflow-hidden bg-white shadow-sm">
                    {/* Text content */}
                    <div className="flex-1 flex flex-col justify-between p-6 sm:p-8">
                      <p className="text-foreground text-sm sm:text-base leading-relaxed font-medium">
                        {t.quote}
                      </p>
                      <div className="mt-6 sm:mt-8">
                        <p className="text-[#0BBCD6] text-sm font-semibold">
                          — {t.name}
                        </p>
                        <p className="text-muted-foreground text-xs mt-0.5">
                          {t.location}
                        </p>
                      </div>
                    </div>

                    {/* Portrait photo */}
                    <div className="relative w-full h-120 sm:w-40 md:w-44 sm:h-auto shrink-0">
                      <Image
                        src={t.image}
                        alt={t.alt}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : (
          /* Static SSR placeholder with same dimensions */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {testimonials.slice(0, 2).map((t, idx) => (
              <div
                key={`ssr-${t.name}-${idx}`}
                className="flex flex-col sm:flex-row h-full border border-border rounded-lg overflow-hidden bg-white shadow-sm"
              >
                <div className="flex-1 flex flex-col justify-between p-6 sm:p-8">
                  <p className="text-foreground text-sm sm:text-base leading-relaxed font-medium">
                    {t.quote}
                  </p>
                  <div className="mt-6 sm:mt-8">
                    <p className="text-[#0BBCD6] text-sm font-semibold">
                      — {t.name}
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      {t.location}
                    </p>
                  </div>
                </div>
                <div className="relative w-full sm:w-40 md:w-44 h-56 sm:h-auto shrink-0">
                  <Image
                    src={t.image}
                    alt={t.alt}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
