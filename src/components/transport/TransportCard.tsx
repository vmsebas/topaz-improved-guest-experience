import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, ExternalLink } from "lucide-react";
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

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in-up bg-white">
      <div className="relative h-64">
        <img
          src={option.image}
          alt={option.title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm ${getCategoryColor(option.category)}`}>
          {option.category}
        </div>
        <div className="absolute top-4 left-4 bg-white/90 text-primary px-3 py-1 rounded-full text-sm flex items-center">
          <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
          {option.rating}
        </div>
      </div>
      <CardContent className="p-6 bg-gradient-to-b from-white to-gray-50">
        <div className="flex items-center gap-2 mb-2">
          <Icon className="h-5 w-5 text-primary" />
          <h3 className="text-xl font-semibold text-gray-800">{option.title}</h3>
        </div>
        <p className="text-muted-foreground mb-4 line-clamp-2">{option.description}</p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            <span>{option.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-primary" />
            <span>{option.schedule}</span>
          </div>
        </div>
        <div className="space-y-2 mb-4">
          {option.features.map((feature, index) => (
            <Badge 
              key={index} 
              variant="secondary"
              className="mr-2 mb-2 bg-[#F1F0FB] text-gray-700 hover:bg-[#E5DEFF]"
            >
              {feature}
            </Badge>
          ))}
        </div>
        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
          <span className="font-semibold text-lg text-primary">{option.price}</span>
          <Button 
            onClick={() => window.open(option.website, '_blank')}
            className="flex items-center gap-2 bg-[#D3E4FD] text-blue-700 hover:bg-blue-100"
          >
            Learn More
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};