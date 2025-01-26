import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bus, Car, Bike, Plane } from "lucide-react";

interface TransportFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const TransportFilter = ({ selectedCategory, onCategoryChange }: TransportFilterProps) => {
  const categories = [
    { value: "all", label: "All Options", icon: null },
    { value: "Public", label: "Public Transport", icon: Bus },
    { value: "Private", label: "Private Transport", icon: Car },
    { value: "Active", label: "Active Transport", icon: Bike },
    { value: "Airport", label: "Airport", icon: Plane },
  ];

  return (
    <Tabs defaultValue={selectedCategory} className="w-full mb-8">
      <TabsList className="flex justify-center space-x-2 bg-[#F1F0FB] p-1 rounded-full">
        {categories.map(({ value, label, icon: Icon }) => (
          <TabsTrigger 
            key={value}
            value={value} 
            onClick={() => onCategoryChange(value)}
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-2"
          >
            {Icon && <Icon className="h-4 w-4" />}
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};