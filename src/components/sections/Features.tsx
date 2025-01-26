import { Building2, MapPin, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      icon: Building2,
      title: "Ubicación Privilegiada",
      description: "En el corazón del histórico barrio de Alfama, a pasos de los principales atractivos."
    },
    {
      icon: MapPin,
      title: "Fácil Acceso",
      description: "Conectado con el transporte público y principales vías de la ciudad."
    },
    {
      icon: Clock,
      title: "Atención 24/7",
      description: "Servicio de conserjería y asistencia disponible las 24 horas."
    },
    {
      icon: Shield,
      title: "Seguridad Garantizada",
      description: "Sistema de seguridad moderno y vigilancia las 24 horas."
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl font-bold mb-4 text-primary">
          Una Experiencia Única en Lisboa
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Disfruta de todas las comodidades y servicios que hacen de Lisbon Tiles tu hogar ideal en Portugal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Card 
            key={index}
            className="border border-[#D3E4FD] shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up"
          >
            <CardContent className="p-6 text-center">
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-[#D3E4FD]" />
              <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};