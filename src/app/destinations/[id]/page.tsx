import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Star,
  Calendar,
  Check,
  ArrowRight,
} from "lucide-react";
import EditDestinationDialog from "@/components/destination/EditDestinationDialog";
import DeleteDestinationDialog from "@/components/destination/DeleteDestinationDialog";

interface Destination {
  _id?: string;
  id?: string;
  destinationName: string;
  country: string;
  category?: string;
  price: number | string;
  duration: string;
  departureDate?: string;
  imageUrl: string;
  description: string;
}

interface PageProps {
  params: Promise<{ id: string }>;
}

const DestinationDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params;

      const res = await fetch(`http://localhost:8000/destination/${id}`);
      const destination: Destination = await res.json();


  if (!destination) {
    return (
      <main className="min-h-screen bg-white py-12 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          Destination Not Found
        </h1>
        <p className="text-sm text-muted-foreground mb-6">
          Could not load the destination information. Please ensure your backend is running.
        </p>
        <Link
          href="/destinations"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0BBCD6] hover:underline"
        >
          <ArrowLeft className="size-4" />
          Back to Destinations
        </Link>
      </main>
    );
  }

  const highlights = [
    "Luxury beachfront accommodation",
    "Visit Uluwatu Temple at sunset",
    "Traditional Balinese spa treatment",
    "Private beach dinner experience",
    "Sunrise trek to Mount Batur",
  ];

  const perks = [
    "Free cancellation up to 7 days",
    "Travel insurance included",
    "24/7 customer support",
  ];

  return (
    <main className="min-h-screen bg-white py-8 sm:py-10 px-4 sm:px-8 md:px-14">
      <div className="max-w-6xl mx-auto">
        {/* Top Navigation & Action Bar */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/destinations"
            className="flex items-center gap-2 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to Destinations
          </Link>

          <div className="flex items-center gap-3">
            <EditDestinationDialog destination={destination} />
            <DeleteDestinationDialog id={id} />
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-21/9 min-h-65 sm:min-h-90 md:min-h-105 w-full overflow-hidden rounded-md bg-slate-100">
          <Image
            src={
              destination.imageUrl && destination.imageUrl.trim().length > 0
                ? destination.imageUrl
                : "/images/Banner.png"
            }
            alt={destination.destinationName || "Destination"}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Country / Location */}
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="size-3.5 text-muted-foreground" />
              <span className="text-xs font-medium">{destination.country}</span>
            </div>

            {/* Destination Name */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-2 mb-3">
              {destination.destinationName}
            </h1>

            {/* Rating and Duration */}
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <Star className="size-3.5 fill-emerald-600 text-emerald-600" />
                <span className="font-bold text-foreground">4.9</span>
                <span className="text-muted-foreground">(234 reviews)</span>
              </div>
              <div className="flex items-center gap-1.5 text-foreground font-semibold">
                <Calendar className="size-3.5 text-muted-foreground" />
                <span>{destination.duration}</span>
              </div>
            </div>

            {/* Overview */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-foreground mb-3">Overview</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {destination.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-foreground mb-3">
                Highlights
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Discover the magic of {destination.destinationName} with pristine
                beaches, ancient temples, and vibrant culture. Experience luxury
                resorts, tropical landscapes, and unforgettable sunsets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm text-muted-foreground">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="size-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Booking Card) */}
          <div>
            <div className="border border-border/80 rounded-xl p-6 bg-white shadow-xs sticky top-20">
              <p className="text-xs text-muted-foreground">Starting from</p>
              <div className="mt-1">
                <span className="text-3xl font-bold text-[#0BBCD6]">
                  ${destination.price}
                </span>
                <span className="text-xs text-muted-foreground ml-1.5">
                  per person
                </span>
              </div>

              {/* Departure Date Display */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-md px-4 py-3 text-sm font-medium text-foreground my-5">
                {destination.departureDate || "05/15/2026"}
              </div>

              {/* Book Now Button */}
              <button className="w-full bg-[#0BBCD6] hover:bg-[#09a8c0] text-white py-3 rounded-md font-semibold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer">
                Book Now
                <ArrowRight className="size-4" />
              </button>

              {/* Perks */}
              <div className="space-y-2 mt-5 text-xs text-muted-foreground">
                {perks.map((perk, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="size-3.5 text-emerald-500 shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DestinationDetailsPage;
