import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Gestión de Reservas",
      description: "Sistema completo para manejar reservas y disponibilidad",
      features: [
        "Calendario integrado",
        "Confirmaciones automáticas",
        "Gestión de disponibilidad",
        "Notificaciones en tiempo real"
      ]
    },
    {
      title: "Atención al Cliente",
      description: "Herramientas para mejorar la comunicación con huéspedes",
      features: [
        "Chat en tiempo real",
        "Sistema de tickets",
        "Encuestas de satisfacción",
        "Seguimiento de solicitudes"
      ]
    },
    {
      title: "Análisis y Reportes",
      description: "Información detallada sobre tu negocio",
      features: [
        "Estadísticas en tiempo real",
        "Reportes personalizados",
        "Análisis de tendencias",
        "Exportación de datos"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="py-16 bg-secondary/50">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Nuestros Servicios</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Descubre todas las herramientas que tenemos para hacer tu gestión más eficiente
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;