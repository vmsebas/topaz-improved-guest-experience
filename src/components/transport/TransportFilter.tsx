import { Bus, Car, Bike, Plane } from "lucide-react";
import { CategoryFilter } from "@/components/common/CategoryFilter";

interface TransportFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const TransportFilter = ({ selectedCategory, onCategoryChange }: TransportFilterProps) => {
  const categories = [
    { id: "all", name: "All Options" },
    { id: "Public", name: "Public Transport", icon: Bus },
    { id: "Private", name: "Private Transport", icon: Car },
    { id: "Active", name: "Active Transport", icon: Bike },
    { id: "Airport", name: "Airport", icon: Plane },
  ];

  return (
    <CategoryFilter
      categories={categories}
      selectedCategory={selectedCategory}
      onCategoryChange={onCategoryChange}
      className="mb-8"
    />
  );
};