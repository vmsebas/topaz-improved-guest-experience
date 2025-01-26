import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, ExternalLink, Euro } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TransportOption {
  id: number;
  title: string;
  description: string;
  location: string;
  rating: number;
  price: string;
  schedule: string;
  duration: string;
  category: string;
  features: string[];
  website: string;
  image: string;
  icon: any;
  recommended?: boolean;
  peakHours?: string;
}

interface TransportCardProps {
  option: TransportOption;
}

export const TransportCard = ({ option }: TransportCardProps) => {
  const Icon = option.icon;
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Public":
        return "bg-[#D3E4FD] text-blue-700";
      case "Private":
        return "bg-[#F2FCE2] text-green-700";
      case "Active":
        return "bg-[#FDE1D3] text-orange-700";
      case "Airport":
        return "bg-[#E5DEFF] text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getPriceIndicator = (price: string) => {
    const priceLevel = price.split('€').length - 1;
    return (
      <div className="flex items-center gap-1">
        {[...Array(3)].map((_, index) => (
          <Euro
            key={index}
            className={`h-4 w-4 ${
              index < priceLevel ? 'text-primary' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in-up bg-white transform hover:-translate-y-1">
      <div className="relative h-64">
        <img
          src={option.image}
          alt={option.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm ${getCategoryColor(option.category)}`}>
          {option.category}
        </div>
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm flex items-center">
          <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
          {option.rating}
        </div>
        {option.recommended && (
          <Badge 
            className="absolute bottom-4 right-4 bg-[#FEF7CD] text-yellow-700 border-none"
          >
            Recommended
          </Badge>
        )}
      </div>
      <CardContent className="p-6 bg-gradient-to-b from-white to-gray-50">
        <div className="flex items-center gap-2 mb-2">
          <Icon className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
          <h3 className="text-xl font-semibold text-gray-800">{option.title}</h3>
        </div>
        <p className="text-muted-foreground mb-4 line-clamp-2">{option.description}</p>
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            <span>{option.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-primary" />
            <span>{option.schedule}</span>
          </div>
          {option.peakHours && (
            <Badge variant="outline" className="text-xs">
              Peak Hours: {option.peakHours}
            </Badge>
          )}
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {option.features.map((feature, index) => (
            <Badge 
              key={index} 
              variant="secondary"
              className="bg-[#F1F0FB] text-gray-700 hover:bg-[#E5DEFF] transition-colors duration-200"
            >
              {feature}
            </Badge>
          ))}
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <div className="flex flex-col gap-1">
            <span className="text-sm text-gray-500">Starting from</span>
            {getPriceIndicator(option.price)}
          </div>
          <Button 
            onClick={() => window.open(option.website, '_blank')}
            className="flex items-center gap-2 bg-[#D3E4FD] text-blue-700 hover:bg-blue-100 transition-colors duration-200"
          >
            Learn More
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};