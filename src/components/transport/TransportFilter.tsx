import { Button } from "@/components/ui/button";
import { MapPin, Bus, Car, Bike, Plane } from "lucide-react";

interface TransportFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const TransportFilter = ({ selectedCategory, onCategoryChange }: TransportFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      <Button
        variant={selectedCategory === "all" ? "default" : "outline"}
        onClick={() => onCategoryChange("all")}
        className="bg-white hover:bg-gray-100"
      >
        All Options
      </Button>
      <Button
        variant={selectedCategory === "Public" ? "default" : "outline"}
        onClick={() => onCategoryChange("Public")}
        className="bg-white hover:bg-gray-100"
      >
        <Bus className="mr-2 h-4 w-4" />
        Public Transport
      </Button>
      <Button
        variant={selectedCategory === "Private" ? "default" : "outline"}
        onClick={() => onCategoryChange("Private")}
        className="bg-white hover:bg-gray-100"
      >
        <Car className="mr-2 h-4 w-4" />
        Private Transport
      </Button>
      <Button
        variant={selectedCategory === "Active" ? "default" : "outline"}
        onClick={() => onCategoryChange("Active")}
        className="bg-white hover:bg-gray-100"
      >
        <Bike className="mr-2 h-4 w-4" />
        Active Transport
      </Button>
      <Button
        variant={selectedCategory === "Airport" ? "default" : "outline"}
        onClick={() => onCategoryChange("Airport")}
        className="bg-white hover:bg-gray-100"
      >
        <Plane className="mr-2 h-4 w-4" />
        Airport
      </Button>
    </div>
  );
};