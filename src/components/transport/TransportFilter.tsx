import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface TransportFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const TransportFilter = ({ selectedCategory, onCategoryChange }: TransportFilterProps) => {
  const isMobile = useIsMobile();

  return (
    <Tabs defaultValue={selectedCategory} className="w-full mb-8">
      <ScrollArea className="w-full">
        <TabsList className={`
          inline-flex w-full justify-start bg-[#F1F0FB] p-1
          ${isMobile ? 'overflow-x-auto whitespace-nowrap' : 'justify-center'}
        `}>
          <TabsTrigger 
            value="all" 
            onClick={() => onCategoryChange("all")}
            className="data-[state=active]:bg-white min-w-fit px-4"
          >
            All Options
          </TabsTrigger>
          <TabsTrigger 
            value="Public" 
            onClick={() => onCategoryChange("Public")}
            className="data-[state=active]:bg-white min-w-fit px-4"
          >
            Public Transport
          </TabsTrigger>
          <TabsTrigger 
            value="Private" 
            onClick={() => onCategoryChange("Private")}
            className="data-[state=active]:bg-white min-w-fit px-4"
          >
            Private Transport
          </TabsTrigger>
          <TabsTrigger 
            value="Active" 
            onClick={() => onCategoryChange("Active")}
            className="data-[state=active]:bg-white min-w-fit px-4"
          >
            Active Transport
          </TabsTrigger>
          <TabsTrigger 
            value="Airport" 
            onClick={() => onCategoryChange("Airport")}
            className="data-[state=active]:bg-white min-w-fit px-4"
          >
            Airport
          </TabsTrigger>
        </TabsList>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </Tabs>
  );
};