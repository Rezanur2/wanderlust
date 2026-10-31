import React from "react";
import DestinationCard, { Destination } from "@/components/destination/destination-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default async function AllDestinationPage() {
  let destinations: Destination[] = [];

  try {
    const res = await fetch("http://localhost:8000/destinations", {
      cache: "no-store",
    });
    if (res.ok) {
      destinations = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch destinations:", error);
  }

  return (
    <main className="bg-white min-h-screen py-10 md:py-16 px-6 sm:px-10 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Explore All Destinations
          </h1>
          <p className="text-muted-foreground text-xs sm:text-sm mt-2">
            Find your perfect travel experience from our curated collection
          </p>
        </div>

        {/* Filter and Sort Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-border/80 bg-white rounded-md divide-y md:divide-y-0 md:divide-x divide-border/80 mb-4 shadow-2xs">
          <Select defaultValue="all">
            <SelectTrigger className="h-11 w-full border-0 rounded-none shadow-none text-xs font-semibold tracking-wider text-muted-foreground uppercase px-4 focus:ring-0 focus:outline-none">
              <SelectValue placeholder="CATEGORY" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">ALL CATEGORIES</SelectItem>
              <SelectItem value="beach">BEACH</SelectItem>
              <SelectItem value="mountain">MOUNTAIN</SelectItem>
              <SelectItem value="adventure">ADVENTURE</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="h-11 w-full border-0 rounded-none shadow-none text-xs font-semibold tracking-wider text-muted-foreground uppercase px-4 focus:ring-0 focus:outline-none">
              <SelectValue placeholder="PRICE RANGE" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">ALL PRICES</SelectItem>
              <SelectItem value="under-1000">UNDER $1,000</SelectItem>
              <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="featured">
            <SelectTrigger className="h-11 w-full border-0 rounded-none shadow-none text-xs font-semibold tracking-wider text-muted-foreground uppercase px-4 focus:ring-0 focus:outline-none">
              <SelectValue placeholder="SORT BY" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">FEATURED</SelectItem>
              <SelectItem value="price-low">PRICE: LOW TO HIGH</SelectItem>
              <SelectItem value="price-high">PRICE: HIGH TO LOW</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Counter */}
        <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-6">
          Showing {destinations?.length || 0} destinations
        </p>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {destinations?.map((item) => (
            <DestinationCard key={item._id || item.id} destination={item} />
          ))}
        </div>
      </div>
    </main>
  );
}
