import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Train, Bus, Ship, Car, Bike, Plane } from "lucide-react";
import { Link } from "react-router-dom";

const Transport = () => {
  const transportOptions = [
    {
      title: "Metro & Train",
      description: "Lisbon's efficient metro system connects all major areas",
      icon: Train,
      hours: "6:30 AM - 1:00 AM",
      prices: [
        { type: "Single ticket", price: "€1.50" },
        { type: "Day pass", price: "€6.40" }
      ],
      link: "https://www.metrolisboa.pt/en/buy/",
      details: "The nearest station 'Santa Apolónia' is just 5 minutes away."
    },
    {
      title: "Bus Network",
      description: "Extensive bus network operated by Carris",
      icon: Bus,
      hours: "24-hour service on main routes",
      prices: [
        { type: "Single ticket", price: "€2.00" },
        { type: "Tourist card", price: "Varies" }
      ],
      link: "https://www.carris.pt/en/buy-tickets/",
      details: "Bus stop 'Alfama' is right outside your door."
    },
    {
      title: "Ferry Services",
      description: "Cross the Tagus River to visit the south bank",
      icon: Ship,
      hours: "Regular crossings",
      prices: [
        { type: "Single trip", price: "€2.75" }
      ],
      link: "https://ttsl.pt/en/tickets-and-fares/",
      details: "Ferry terminal nearby at Terreiro do Paço."
    },
    {
      title: "Taxi & Ride-Share",
      description: "Convenient taxi services and ride-sharing apps",
      icon: Car,
      hours: "24/7 availability",
      prices: [
        { type: "Uber", link: "https://uber.com" },
        { type: "Bolt", link: "https://bolt.eu" },
        { type: "FreeNow", link: "https://free-now.com" }
      ],
      details: "Safe and regulated services available throughout the city."
    },
    {
      title: "Bike Rental",
      description: "Explore Lisbon on two wheels",
      icon: Bike,
      hours: "Daily rentals available",
      prices: [
        { type: "City bikes", price: "Varies" },
        { type: "E-bikes", price: "Varies" }
      ],
      link: "https://www.gira-bicicletasdelisboa.pt/en/",
      details: "E-bikes available for hilly areas."
    },
    {
      title: "Airport Transfer",
      description: "Easy access to Lisbon Airport (LIS)",
      icon: Plane,
      hours: "25 minutes by car",
      prices: [
        { type: "Metro", price: "€1.50" },
        { type: "Aerobus", price: "€4.00" }
      ],
      link: "https://www.metrolisboa.pt/en/travel/airport-aeroporto/",
      details: "Direct metro line and Aerobus service available."
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-2">Getting Around Lisbon</h1>
      <p className="text-muted-foreground mb-8">Your complete guide to transportation in the city</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {transportOptions.map((option, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <option.icon className="h-6 w-6" />
                <CardTitle>{option.title}</CardTitle>
              </div>
              <CardDescription>{option.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-sm text-muted-foreground">{option.hours}</p>
                  </div>
                  <div>
                    <p className="font-medium">Prices</p>
                    <ul className="text-sm text-muted-foreground">
                      {option.prices.map((price, idx) => (
                        <li key={idx}>
                          {price.link ? (
                            <a 
                              href={price.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              {price.type}
                            </a>
                          ) : (
                            `${price.type}: ${price.price}`
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">Details</p>
                    <p className="text-sm text-muted-foreground">{option.details}</p>
                  </div>
                  {option.link && (
                    <Button asChild className="w-full">
                      <a 
                        href={option.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Book Tickets
                      </a>
                    </Button>
                  )}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 space-y-6">
        <h2 className="text-3xl font-bold">Travel Tips</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Getting from the Airport</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Take the metro (red line) directly from the airport to São Sebastião, then change to the blue line to Santa Apolónia. From there, it's a short walk to your destination.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Local Transport Cards</CardTitle>
          </CardHeader>
          <CardContent>
            <p>We recommend getting a Viva Viagem card for unlimited travel on public transport. Valid for 24h, 48h, or 72h. Available at any metro station or major bus terminal.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Transport;