import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Básico",
      price: "29",
      description: "Perfecto para pequeños negocios",
      features: [
        "Hasta 100 reservas mensuales",
        "Soporte por email",
        "Panel de control básico",
        "Reportes mensuales"
      ]
    },
    {
      name: "Profesional",
      price: "79",
      description: "Para negocios en crecimiento",
      features: [
        "Reservas ilimitadas",
        "Soporte prioritario",
        "Panel de control avanzado",
        "Reportes personalizados",
        "API access",
        "Integraciones premium"
      ]
    },
    {
      name: "Empresarial",
      price: "199",
      description: "Solución completa para grandes empresas",
      features: [
        "Todo lo del plan Profesional",
        "Soporte 24/7",
        "Gestor de cuenta dedicado",
        "Personalización completa",
        "Implementación guiada",
        "SLA garantizado"
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
              <h1 className="text-4xl font-bold mb-4">Planes y Precios</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Elige el plan que mejor se adapte a tus necesidades
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}€</span>
                      <span className="text-muted-foreground">/mes</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6">Seleccionar Plan</Button>
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

export default Pricing;