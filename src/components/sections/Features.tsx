import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Shield, Zap, MessageSquare } from "lucide-react";

export const Features = () => {
  const features = [
    {
      title: "Gestión de Huéspedes",
      description: "Administra fácilmente los registros y perfiles de tus huéspedes.",
      icon: <Users className="h-8 w-8 text-primary" />,
    },
    {
      title: "Seguridad Avanzada",
      description: "Protección de datos y privacidad garantizada para ti y tus huéspedes.",
      icon: <Shield className="h-8 w-8 text-primary" />,
    },
    {
      title: "Respuesta Rápida",
      description: "Sistema de respuesta inmediata para atender solicitudes de huéspedes.",
      icon: <Zap className="h-8 w-8 text-primary" />,
    },
    {
      title: "Comunicación Efectiva",
      description: "Mantén una comunicación fluida con tus huéspedes en todo momento.",
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <section className="py-16 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Características Principales</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre todas las herramientas que tenemos para hacer tu gestión más eficiente
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mb-4 flex items-center justify-center">{feature.icon}</div>
                <CardTitle className="text-xl text-center">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};