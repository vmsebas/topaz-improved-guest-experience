import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Landmark, Utensils, Bus, Heart, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Features = () => {
  const features = [
    {
      title: "About Lisbon Tiles",
      description: "Learn about our accommodation and location",
      icon: <Building2 className="h-8 w-8 text-primary" />,
      link: "/about"
    },
    {
      title: "Local Attractions",
      description: "Discover Lisbon's must-see spots",
      icon: <Landmark className="h-8 w-8 text-primary" />,
      link: "/attractions"
    },
    {
      title: "Food",
      description: "Local restaurants and grocery stores",
      icon: <Utensils className="h-8 w-8 text-primary" />,
      link: "/restaurants"
    },
    {
      title: "Transport Guide",
      description: "Getting around the city",
      icon: <Bus className="h-8 w-8 text-primary" />,
      link: "/transport"
    },
    {
      title: "Essential Services",
      description: "Healthcare, pharmacies, and more",
      icon: <Heart className="h-8 w-8 text-primary" />,
      link: "/services"
    },
    {
      title: "Contact Us",
      description: "Get in touch with any questions",
      icon: <Phone className="h-8 w-8 text-primary" />,
      link: "/contact"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-[#FEF7CD]">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Guide to Lisboa</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about your stay and the city's treasures
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link to={feature.link} key={index} className="block h-full">
              <Card className="h-full border shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 bg-white">
                <CardHeader>
                  <div className="mb-4 flex items-center justify-center">{feature.icon}</div>
                  <CardTitle className="text-xl text-center">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{feature.description}</CardDescription>
                  <div className="mt-4 text-center">
                    <span className="text-primary hover:underline">Learn More →</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};