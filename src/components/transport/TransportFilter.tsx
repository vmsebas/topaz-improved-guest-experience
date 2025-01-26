import { Button } from "@/components/ui/button";
import { MapPin, Bus, Car, Bike, Plane } from "lucide-react";

interface TransportFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const TransportFilter = ({ selectedCategory, onCategoryChange }: TransportFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      <Button
        variant={selectedCategory === "all" ? "default" : "outline"}
        onClick={() => onCategoryChange("all")}
        className={`${
          selectedCategory === "all"
            ? "bg-[#1A1F2C] text-white hover:bg-[#1A1F2C]/90"
            : "bg-white hover:bg-gray-50 border border-gray-200"
        } rounded-full px-6 shadow-sm`}
      >
        All Options
      </Button>
      <Button
        variant={selectedCategory === "Public" ? "default" : "outline"}
        onClick={() => onCategoryChange("Public")}
        className={`${
          selectedCategory === "Public"
            ? "bg-[#1A1F2C] text-white hover:bg-[#1A1F2C]/90"
            : "bg-white hover:bg-gray-50 border border-gray-200"
        } rounded-full px-6 shadow-sm`}
      >
        <Bus className="mr-2 h-4 w-4" />
        Public Transport
      </Button>
      <Button
        variant={selectedCategory === "Private" ? "default" : "outline"}
        onClick={() => onCategoryChange("Private")}
        className={`${
          selectedCategory === "Private"
            ? "bg-[#1A1F2C] text-white hover:bg-[#1A1F2C]/90"
            : "bg-white hover:bg-gray-50 border border-gray-200"
        } rounded-full px-6 shadow-sm`}
      >
        <Car className="mr-2 h-4 w-4" />
        Private Transport
      </Button>
      <Button
        variant={selectedCategory === "Active" ? "default" : "outline"}
        onClick={() => onCategoryChange("Active")}
        className={`${
          selectedCategory === "Active"
            ? "bg-[#1A1F2C] text-white hover:bg-[#1A1F2C]/90"
            : "bg-white hover:bg-gray-50 border border-gray-200"
        } rounded-full px-6 shadow-sm`}
      >
        <Bike className="mr-2 h-4 w-4" />
        Active Transport
      </Button>
      <Button
        variant={selectedCategory === "Airport" ? "default" : "outline"}
        onClick={() => onCategoryChange("Airport")}
        className={`${
          selectedCategory === "Airport"
            ? "bg-[#1A1F2C] text-white hover:bg-[#1A1F2C]/90"
            : "bg-white hover:bg-gray-50 border border-gray-200"
        } rounded-full px-6 shadow-sm`}
      >
        <Plane className="mr-2 h-4 w-4" />
        Airport
      </Button>
    </div>
  );
};