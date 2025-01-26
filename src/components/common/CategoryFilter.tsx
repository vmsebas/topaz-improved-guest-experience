import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  className?: string;
}

export const CategoryFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
  className
}: CategoryFilterProps) => {
  return (
    <div className={cn("flex flex-wrap justify-center gap-3 mb-8", className)}>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          onClick={() => onCategoryChange(category.id)}
          className={`animate-fade-in transition-all duration-300 ${
            selectedCategory === category.id 
              ? 'bg-[#D3E4FD] hover:bg-[#D3E4FD]/80 text-primary' 
              : 'hover:bg-[#F1F0FB]/50'
          }`}
        >
          {category.icon && <category.icon className="h-4 w-4 mr-2" />}
          {category.name}
        </Button>
      ))}
    </div>
  );
};