import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TransportFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const TransportFilter = ({ selectedCategory, onCategoryChange }: TransportFilterProps) => {
  return (
    <Tabs defaultValue={selectedCategory} className="w-full mb-8">
      <TabsList className="flex justify-center space-x-2 bg-[#F1F0FB] p-1">
        <TabsTrigger 
          value="all" 
          onClick={() => onCategoryChange("all")}
          className="data-[state=active]:bg-white"
        >
          All Options
        </TabsTrigger>
        <TabsTrigger 
          value="Public" 
          onClick={() => onCategoryChange("Public")}
          className="data-[state=active]:bg-white"
        >
          Public Transport
        </TabsTrigger>
        <TabsTrigger 
          value="Private" 
          onClick={() => onCategoryChange("Private")}
          className="data-[state=active]:bg-white"
        >
          Private Transport
        </TabsTrigger>
        <TabsTrigger 
          value="Active" 
          onClick={() => onCategoryChange("Active")}
          className="data-[state=active]:bg-white"
        >
          Active Transport
        </TabsTrigger>
        <TabsTrigger 
          value="Airport" 
          onClick={() => onCategoryChange("Airport")}
          className="data-[state=active]:bg-white"
        >
          Airport
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};