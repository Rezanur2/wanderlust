import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, ArrowUpRight, Star } from "lucide-react";

export interface Destination {
  _id?: string;
  id?: string;
  destinationName: string;
  country: string;
  price: number | string;
  duration: string;
  imageUrl: string;
  rating?: number | string;
}

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  const {
    _id,
    id,
    destinationName,
    country,
    price,
    duration,
    imageUrl,
    rating = "4.5",
  } = destination;

  return (
    <div className="group flex flex-col bg-white overflow-hidden">
      {/* Image & Rating Badge */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-sm flex items-center gap-1 shadow-xs">
          <span className="text-xs font-bold text-foreground">{rating}</span>
          <Star size={11} className="fill-foreground text-foreground" />
        </div>
      </div>

      {/* Card Details */}
      <div className="pt-3.5 pb-2 flex flex-col gap-2">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <MapPin size={13} className="shrink-0" />
          <span className="text-xs font-medium">{country}</span>
        </div>

        {/* Title & Price */}
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-bold text-base sm:text-lg text-foreground truncate">
            {destinationName}
          </h3>
          <div className="text-right shrink-0">
            <span className="font-bold text-base sm:text-lg text-foreground">
              ${price}
            </span>
            <span className="text-xs text-muted-foreground font-normal">
              /Person
            </span>
          </div>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Calendar size={13} className="shrink-0" />
          <span className="text-xs">{duration}</span>
        </div>

        {/* Book Now Link */}
        <div className="pt-1">
          <Link
            href={`/destinations/${_id || id}`}
            className="inline-flex items-center gap-1 text-[#0BBCD6] hover:text-[#09a8c0] text-xs font-bold tracking-wider uppercase transition-colors"
          >
            Book Now
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </div>
  );
}
