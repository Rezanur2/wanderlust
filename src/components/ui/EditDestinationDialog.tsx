"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2, Save, Pencil } from "lucide-react";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface DestinationData {
  _id?: string;
  id?: string;
  destinationName?: string;
  country?: string;
  category?: string;
  price?: number | string;
  duration?: string;
  departureDate?: string;
  imageUrl?: string;
  description?: string;
}

interface EditDestinationDialogProps {
  destination?: DestinationData;
}

const EditDestinationDialog = ({ destination }: EditDestinationDialogProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(destination);

  const update = (field: string, value: string) =>
    setForm((current) => ({ ...current, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { _id, ...updateData } = form || {};

      const res = await fetch(`http://localhost:8000/destination/${destination?._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Server responded with status: ${res.status}: ${errorText}`);
      }

      const data = await res.json();
      console.log("Success:", data);
      setOpen(false);
      router.refresh();
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="border border-border rounded-md px-3.5 py-1.5 text-xs font-medium text-foreground hover:bg-muted/50 flex items-center gap-1.5 transition-colors cursor-pointer">
        <Pencil className="size-3.5" />
        Edit
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Edit Destination</DialogTitle>
          <DialogDescription>
            Update the travel package information below.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 pt-2">
          {/* Destination Name */}
          <div className="space-y-1.5">
            <Label
              htmlFor="edit-destinationName"
              className="text-xs font-semibold text-foreground"
            >
              Destination Name
            </Label>
            <Input
              id="edit-destinationName"
              name="destinationName"
              value={form?.destinationName || ""}
              onChange={(e) => update("destinationName", e.target.value)}
              placeholder="Bali Paradise"
              className="h-10 bg-slate-50/80 border-slate-200/90 rounded-md text-sm placeholder:text-muted-foreground/60 focus-visible:bg-white focus-visible:border-[#0BBCD6] focus-visible:ring-[#0BBCD6]/30"
            />
          </div>

          {/* Country & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label
                htmlFor="edit-country"
                className="text-xs font-semibold text-foreground"
              >
                Country
              </Label>
              <Input
                id="edit-country"
                name="country"
                value={form?.country || ""}
                onChange={(e) => update("country", e.target.value)}
                placeholder="Indonesia"
                className="h-10 bg-slate-50/80 border-slate-200/90 rounded-md text-sm placeholder:text-muted-foreground/60 focus-visible:bg-white focus-visible:border-[#0BBCD6] focus-visible:ring-[#0BBCD6]/30"
              />
            </div>

            <div className="space-y-1.5">
              <Label
                htmlFor="edit-category"
                className="text-xs font-semibold text-foreground"
              >
                Category
              </Label>
              <Select
                value={form?.category || "Beach"}
                onValueChange={(val) => update("category", val || "")}
              >
                <SelectTrigger
                  id="edit-category"
                  className="h-10 w-full bg-slate-50/80 border-slate-200/90 rounded-md text-sm px-3 focus-visible:bg-white focus-visible:border-[#0BBCD6] focus-visible:ring-[#0BBCD6]/30"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label
                htmlFor="edit-price"
                className="text-xs font-semibold text-foreground"
              >
                Price (USD)
              </Label>
              <Input
                id="edit-price"
                name="price"
                type="number"
                value={form?.price || ""}
                onChange={(e) => update("price", e.target.value)}
                placeholder="e.g., 1299"
                className="h-10 bg-slate-50/80 border-slate-200/90 rounded-md text-sm placeholder:text-muted-foreground/60 focus-visible:bg-white focus-visible:border-[#0BBCD6] focus-visible:ring-[#0BBCD6]/30"
              />
            </div>

            <div className="space-y-1.5">
              <Label
                htmlFor="edit-duration"
                className="text-xs font-semibold text-foreground"
              >
                Duration
              </Label>
              <Input
                id="edit-duration"
                name="duration"
                value={form?.duration || ""}
                onChange={(e) => update("duration", e.target.value)}
                placeholder="e.g., 7 Days/6 Nights"
                className="h-10 bg-slate-50/80 border-slate-200/90 rounded-md text-sm placeholder:text-muted-foreground/60 focus-visible:bg-white focus-visible:border-[#0BBCD6] focus-visible:ring-[#0BBCD6]/30"
              />
            </div>
          </div>

          {/* Departure Date */}
          <div className="space-y-1.5">
            <Label
              htmlFor="edit-departureDate"
              className="text-xs font-semibold text-foreground"
            >
              Departure Date
            </Label>
            <Input
              id="edit-departureDate"
              name="departureDate"
              value={form?.departureDate || ""}
              onChange={(e) => update("departureDate", e.target.value)}
              placeholder="mm/dd/yyyy"
              className="h-10 bg-slate-50/80 border-slate-200/90 rounded-md text-sm placeholder:text-muted-foreground/60 focus-visible:bg-white focus-visible:border-[#0BBCD6] focus-visible:ring-[#0BBCD6]/30"
            />
          </div>

          {/* Image URL */}
          <div className="space-y-1.5">
            <Label
              htmlFor="edit-imageUrl"
              className="text-xs font-semibold text-foreground"
            >
              Image URL
            </Label>
            <Input
              id="edit-imageUrl"
              name="imageUrl"
              value={form?.imageUrl || ""}
              onChange={(e) => update("imageUrl", e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="h-10 bg-slate-50/80 border-slate-200/90 rounded-md text-sm placeholder:text-muted-foreground/60 focus-visible:bg-white focus-visible:border-[#0BBCD6] focus-visible:ring-[#0BBCD6]/30"
            />
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <Label
              htmlFor="edit-description"
              className="text-xs font-semibold text-foreground"
            >
              Description
            </Label>
            <Textarea
              id="edit-description"
              name="description"
              rows={4}
              value={form?.description || ""}
              onChange={(e) => update("description", e.target.value)}
              placeholder="Describe the travel experience..."
              className="min-h-24 resize-y bg-slate-50/80 border-slate-200/90 rounded-md p-3 text-sm placeholder:text-muted-foreground/60 focus-visible:bg-white focus-visible:border-[#0BBCD6] focus-visible:ring-[#0BBCD6]/30"
            />
          </div>

          {/* Bottom Buttons */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="h-9 px-4 text-xs font-medium border border-[#FF5A5F] text-[#FF5A5F] bg-transparent hover:bg-[#FF5A5F]/10 hover:text-[#FF5A5F] rounded-md transition-colors shadow-none cursor-pointer"
            >
              <Trash2 className="size-3.5 mr-1 text-[#FF5A5F]" />
              Cancel
            </Button>
            <Button
              type="submit"
              className="h-9 px-4 text-xs font-medium bg-[#0BBCD6] hover:bg-[#09a8c0] text-white rounded-md transition-colors shadow-xs cursor-pointer"
            >
              <Save className="size-3.5 mr-1" />
              Save Changes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditDestinationDialog;
