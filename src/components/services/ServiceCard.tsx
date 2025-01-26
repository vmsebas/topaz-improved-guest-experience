import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, Phone, Shield, ExternalLink } from "lucide-react";
import { Service } from "@/types/services";

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const getDirectionsUrl = (name: string, address: string) => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const destination = encodeURIComponent(`${name}, ${address}`);
    
    if (isIOS) {
      return `maps://maps.apple.com/?daddr=${destination}&dirflg=w`;
    } else {
      return `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=walking`;
    }
  };

  return (
    <Card className={`overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in-up border border-[#D3E4FD] ${
      service.isEmergency ? 'border-l-4 border-l-[#FFDEE2]' : ''
    }`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-primary">{service.name}</h3>
          {service.isEmergency && (
            <Shield className="h-5 w-5 text-[#FFDEE2]" />
          )}
        </div>
        <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-primary/60" />
            <span>{service.address}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-primary/60" />
            <span>{service.hours}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-primary/60" />
            <span>{service.contact}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Star className="h-4 w-4 text-yellow-500" />
            <span>{service.rating} / 5.0</span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <span className="text-sm text-muted-foreground">
            {service.distance}
          </span>
          <Button
            onClick={() => window.open(getDirectionsUrl(service.name, service.address), '_blank')}
            className="bg-[#D3E4FD] hover:bg-[#D3E4FD]/80 text-primary"
          >
            Get Directions
            <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};