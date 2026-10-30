"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2, Save } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export default function AddDestinationPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    destinationName: "",
    country: "",
    category: "Beach",
    price: "",
    duration: "",
    departureDate: "",
    imageUrl: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (val: string | null) => {
    if (val) {
      setFormData((prev) => ({ ...prev, category: val }));
    }
  };

  const handleReset = () => {
    setFormData({
      destinationName: "",
      country: "",
      category: "Beach",
      price: "",
      duration: "",
      departureDate: "",
      imageUrl: "",
      description: "",
    });
    router.back();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/add-destination", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`Server responded with status: ${res.status}`);
      }

      const data = await res.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50/50 py-10 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
          Add New Travel Package
        </h1>

        {/* Form Card */}
        <Card className="border border-border/70 shadow-xs bg-white rounded-xl overflow-hidden py-0">
          <CardContent className="p-6 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Destination Name */}
              <div className="space-y-2">
                <Label
                  htmlFor="destinationName"
                  className="text-sm font-semibold text-foreground"
                >
                  Destination Name
                </Label>
                <Input
                  id="destinationName"
                  name="destinationName"
                  value={formData.destinationName}
                  onChange={handleChange}
                  placeholder="Bali Paradise"
                  className="h-11 bg-slate-50/80 border-slate-200/90 rounded-md text-sm placeholder:text-muted-foreground/60 focus-visible:bg-white focus-visible:border-[#0BBCD6] focus-visible:ring-[#0BBCD6]/30"
                />
              </div>

              {/* Country & Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label
                    htmlFor="country"
                    className="text-sm font-semibold text-foreground"
                  >
                    Country
                  </Label>
                  <Input
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Indonesia"
                    className="h-11 bg-slate-50/80 border-slate-200/90 rounded-md text-sm placeholder:text-muted-foreground/60 focus-visible:bg-white focus-visible:border-[#0BBCD6] focus-visible:ring-[#0BBCD6]/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="category"
                    className="text-sm font-semibold text-foreground"
                  >
                    Category
                  </Label>
                  <Select
                    value={formData.category}
                    onValueChange={handleCategoryChange}
                  >
                    <SelectTrigger
                      id="category"
                      className="h-11 w-full bg-slate-50/80 border-slate-200/90 rounded-md text-sm px-3.5 focus-visible:bg-white focus-visible:border-[#0BBCD6] focus-visible:ring-[#0BBCD6]/30"
                    >
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Beach">Beach</SelectItem>
                      <SelectItem value="Mountain">Mountain</SelectItem>
                      <SelectItem value="Adventure">Adventure</SelectItem>
                      <SelectItem value="Cultural">Cultural</SelectItem>
                      <SelectItem value="City">City</SelectItem>
                      <SelectItem value="Wildlife">Wildlife</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Price (USD) & Duration */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label
                    htmlFor="price"
                    className="text-sm font-semibold text-foreground"
                  >
                    Price (USD)
                  </Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="e.g., 1299"
                    className="h-11 bg-slate-50/80 border-slate-200/90 rounded-md text-sm placeholder:text-muted-foreground/60 focus-visible:bg-white focus-visible:border-[#0BBCD6] focus-visible:ring-[#0BBCD6]/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="duration"
                    className="text-sm font-semibold text-foreground"
                  >
                    Duration
                  </Label>
                  <Input
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="e.g., 7 Days/6 Nights"
                    className="h-11 bg-slate-50/80 border-slate-200/90 rounded-md text-sm placeholder:text-muted-foreground/60 focus-visible:bg-white focus-visible:border-[#0BBCD6] focus-visible:ring-[#0BBCD6]/30"
                  />
                </div>
              </div>

              {/* Departure Date */}
              <div className="space-y-2">
                <Label
                  htmlFor="departureDate"
                  className="text-sm font-semibold text-foreground"
                >
                  Departure Date
                </Label>
                <Input
                  id="departureDate"
                  name="departureDate"
                  value={formData.departureDate}
                  onChange={handleChange}
                  placeholder="mm/dd/yyyy"
                  className="h-11 bg-slate-50/80 border-slate-200/90 rounded-md text-sm placeholder:text-muted-foreground/60 focus-visible:bg-white focus-visible:border-[#0BBCD6] focus-visible:ring-[#0BBCD6]/30"
                />
              </div>

              {/* Image URL */}
              <div className="space-y-2">
                <Label
                  htmlFor="imageUrl"
                  className="text-sm font-semibold text-foreground"
                >
                  Image URL
                </Label>
                <Input
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  placeholder="https://example.com/image.jpg"
                  className="h-11 bg-slate-50/80 border-slate-200/90 rounded-md text-sm placeholder:text-muted-foreground/60 focus-visible:bg-white focus-visible:border-[#0BBCD6] focus-visible:ring-[#0BBCD6]/30"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label
                  htmlFor="description"
                  className="text-sm font-semibold text-foreground"
                >
                  Description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  rows={5}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe the travel experience..."
                  className="min-h-32.5 resize-y bg-slate-50/80 border-slate-200/90 rounded-md p-3.5 text-sm placeholder:text-muted-foreground/60 focus-visible:bg-white focus-visible:border-[#0BBCD6] focus-visible:ring-[#0BBCD6]/30"
                />
              </div>

              {/* Bottom Buttons */}
              <div className="flex items-center justify-end gap-3 pt-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleReset}
                  className="h-10 px-5 text-sm font-medium border border-[#FF5A5F] text-[#FF5A5F] bg-transparent hover:bg-[#FF5A5F]/10 hover:text-[#FF5A5F] rounded-md transition-colors shadow-none cursor-pointer"
                >
                  <Trash2 className="size-4 mr-1 text-[#FF5A5F]" />
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="h-10 px-5 text-sm font-medium bg-[#0BBCD6] hover:bg-[#09a8c0] text-white rounded-md transition-colors shadow-xs cursor-pointer"
                >
                  <Save className="size-4 mr-1" />
                  Add Travel Package
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
