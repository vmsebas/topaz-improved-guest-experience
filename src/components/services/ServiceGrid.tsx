import { ServiceCard } from "./ServiceCard";
import { Service } from "@/types/services";

interface ServiceGridProps {
  services: Service[];
}

export const ServiceGrid = ({ services }: ServiceGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  );
};