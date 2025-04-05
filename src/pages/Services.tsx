import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Star, Phone, Shield, MessageCircle, AlertCircle, PhoneCall } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Service } from "@/types/services";

const Services = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const handlePhoneClick = (phoneNumber: string, serviceName: string) => {
    const cleanNumber = phoneNumber.split('(')[0].trim();
    const formattedNumber = cleanNumber.startsWith('+') ? cleanNumber : `+351${cleanNumber}`;
    const telLink = `tel:${formattedNumber}`;
    
    if (cleanNumber.startsWith('808')) {
      toast({
        title: "Warning - Paid Number",
        description: "This is a special rate number that may have additional costs.",
        duration: 5000,
      });
    }
    
    window.location.href = telLink;
    toast({
      title: "Calling " + serviceName,
      description: formattedNumber,
      duration: 3000,
    });
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+351123456789";
    const message = "Hello, I need information about essential services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleGetDirections = (address: string) => {
    const encodedAddress = encodeURIComponent(address + ", Lisboa, Portugal");
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  const emergencyServices = [
    {
      name: "European Emergency Number",
      number: "112",
      description: "General emergencies - Police, Fire, Ambulance",
      icon: <AlertCircle className="h-10 w-10 text-red-600" />,
      isEmergency: true
    },
    {
      name: "PSP - Public Security Police",
      number: "+351 217 654 242",
      description: "National Police of Portugal",
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      isEmergency: true
    },
    {
      name: "Lisbon Fire Department",
      number: "+351 808 215 215",
      description: "Lisbon Firefighters Emergency Service",
      icon: <PhoneCall className="h-10 w-10 text-orange-600" />,
      isEmergency: true
    }
  ];

  const services: {
    healthcare: Service[];
    pharmacies: Service[];
    embassies: Service[];
    police: Service[];
    firefighters: Service[];
    transport: Service[];
  } = {
    healthcare: [
      {
        name: "Hospital de São José",
        type: "Public Emergency Hospital",
        distance: "15 min walk",
        address: "Rua José António Serrano, 1150-199 Lisboa",
        hours: "24/7",
        contact: "+351 218 841 000",
        rating: 4.2,
        description: "Main public hospital in central Lisbon with full emergency services. English-speaking staff available.",
        isEmergency: true
      },
      {
        name: "Hospital da Luz",
        type: "Private Hospital",
        distance: "20 min by taxi",
        address: "Avenida Lusíada 100, 1500-650 Lisboa",
        hours: "24/7",
        contact: "+351 217 104 400",
        rating: 4.6,
        description: "Modern private hospital with multilingual staff and international patient services.",
        isEmergency: true,
        image: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=1iYUJXnd4vMYxbPpYeiRZg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=60.53379&pitch=0&thumbfov=100"
      },
      {
        name: "CUF Descobertas Hospital",
        type: "Private Hospital",
        distance: "25 min by taxi",
        address: "Rua Mário Botas, 1998-018 Lisboa",
        hours: "24/7",
        contact: "+351 210 025 200",
        rating: 4.5,
        description: "Private hospital specializing in emergency care with English-speaking medical staff.",
        isEmergency: true
      }
    ],
    pharmacies: [
      {
        name: "Farmácia Andrade",
        type: "Pharmacy",
        distance: "5 min walk",
        address: "Rua do Loreto 24, 1200-242 Lisboa",
        hours: "9:00 - 19:00",
        contact: "+351 213 426 743",
        rating: 4.4,
        description: "Historic pharmacy in Chiado with English-speaking staff.",
        isEmergency: false,
        image: "https://lh5.googleusercontent.com/p/AF1QipP2UTEcBr7r1F02LWYoCTjtAjcmkBAN_TmoOr2a=w408-h544-k-no"
      },
      {
        name: "Farmácia Barreto",
        type: "24h Pharmacy",
        distance: "6 min walk",
        address: "Rua do Loreto 59, 1200-241 Lisboa",
        hours: "24/7",
        contact: "+351 213 425 625",
        rating: 4.4,
        description: "24-hour pharmacy with traditional Portuguese architecture.",
        isEmergency: false,
        image: "https://lh5.googleusercontent.com/p/AF1QipOnpCBv4fzLnqCrk5By7ClIEth7l-gArikUyZ0H=w408-h726-k-no"
      },
      {
        name: "Farmácia Estácio",
        type: "Pharmacy",
        distance: "4 min walk",
        address: "Rua da Misericórdia 137, 1200-272 Lisboa",
        hours: "9:00 - 20:00",
        contact: "+351 213 224 842",
        rating: 4.3,
        description: "Modern pharmacy with multilingual staff and wide range of products.",
        isEmergency: false,
        image: "https://lh5.googleusercontent.com/p/AF1QipOo4I-cWmoE_mXoICuGPVe9LBurMqP7L7ec7pOM=w408-h544-k-no"
      }
    ],
    embassies: [
      {
        name: "British Embassy",
        type: "United Kingdom",
        distance: "20 min by taxi",
        address: "Rua de São Bernardo 33, 1249-082 Lisboa",
        hours: "9:00 - 17:00 (Mon-Fri)",
        contact: "+351 213 924 000",
        rating: 0,
        description: "Consular services for British citizens. Emergency assistance available 24/7.",
        isEmergency: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1200px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
      },
      {
        name: "U.S. Embassy",
        type: "United States",
        distance: "25 min by taxi",
        address: "Avenida das Forças Armadas, 1600-081 Lisboa",
        hours: "8:30 - 17:30 (Mon-Fri)",
        contact: "+351 217 273 300",
        rating: 0,
        description: "Full consular services for U.S. citizens. Emergency services available 24/7.",
        isEmergency: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
      },
      {
        name: "German Embassy",
        type: "Germany",
        distance: "15 min by taxi",
        address: "Campo dos Mártires da Pátria 38, 1169-043 Lisboa",
        hours: "9:00 - 17:00 (Mon-Fri)",
        contact: "+351 218 810 210",
        rating: 0,
        description: "German consular services and visa applications. Emergency assistance available.",
        isEmergency: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
      },
      {
        name: "Spanish Embassy",
        type: "Spain",
        distance: "10 min by taxi",
        address: "Rua do Salitre 1, 1269-052 Lisboa",
        hours: "8:00 - 16:00 (Mon-Thu), 8:30 - 14:00 (Fri)",
        contact: "+351 213 472 381",
        rating: 0,
        description: "Consular services for Spanish citizens and visa applications for Spain.",
        isEmergency: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png"
      },
      {
        name: "French Embassy",
        type: "France",
        distance: "12 min by taxi",
        address: "Rua Santos-o-Velho 5, 1249-079 Lisboa",
        hours: "9:00 - 13:00, 14:00 - 17:00 (Mon-Fri)",
        contact: "+351 213 939 100",
        rating: 0,
        description: "French consular services, visa applications and cultural affairs.",
        isEmergency: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png"
      },
      {
        name: "Italian Embassy",
        type: "Italy",
        distance: "15 min by taxi",
        address: "Largo Conde Pombeiro 6, 1150-100 Lisboa",
        hours: "9:00 - 16:30 (Mon-Fri)",
        contact: "+351 213 515 320",
        rating: 0,
        description: "Italian consular services, passport applications and cultural events.",
        isEmergency: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png"
      }
    ],
    police: [
      {
        name: "PSP Baixa-Chiado",
        type: "Police Station",
        distance: "7 min walk",
        address: "Rua do Ouro 140, 1100-065 Lisboa",
        hours: "24/7",
        contact: "112 (Emergency) / +351 213 421 634",
        rating: 4.0,
        description: "Local police station with tourist police service and English-speaking officers.",
        isEmergency: true
      },
      {
        name: "PSP Praça da Alegria",
        type: "Police Station",
        distance: "5 min walk",
        address: "Praça da Alegria 17, 1250-004 Lisboa",
        hours: "24/7",
        contact: "112 (Emergency) / +351 213 421 300",
        rating: 4.1,
        description: "Central police station with specialized tourist assistance and multilingual staff.",
        isEmergency: true
      }
    ],
    firefighters: [
      {
        name: "Quartel do Comando",
        type: "Fire Station",
        distance: "15 min by taxi",
        address: "Avenida Dom Carlos I 126, 1249-071 Lisboa",
        hours: "24 hours",
        contact: "+351 218 171 470",
        rating: 0,
        description: "Main command station of Lisbon's Fire Department (Regimento de Sapadores Bombeiros).",
        isEmergency: true,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Sapadores_de_Lisboa.jpg/1280px-Sapadores_de_Lisboa.jpg"
      },
      {
        name: "Quartel de Alvalade",
        type: "Fire Station",
        distance: "20 min by taxi",
        address: "Avenida Rio de Janeiro 56, 1700-011 Lisboa",
        hours: "24 hours",
        contact: "+351 218 171 431",
        rating: 0,
        description: "Fire station serving the Alvalade area with emergency services and fire prevention.",
        isEmergency: true,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Sapadores_na_Pra%C3%A7a_da_Alegria%2C_Lisboa.jpg/1280px-Sapadores_na_Pra%C3%A7a_da_Alegria%2C_Lisboa.jpg"
      },
      {
        name: "Quartel do Martim Moniz",
        type: "Fire Station",
        distance: "10 min by taxi",
        address: "Rua da Palma 42, 1150-052 Lisboa",
        hours: "24 hours",
        contact: "+351 218 171 400",
        rating: 0,
        description: "Fire station located in the central area of Lisbon, providing emergency response services.",
        isEmergency: true,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Fontan%C3%A1rio_Quartel_da_Avenida_D._Carlos_I_do_RSB_Lisboa.jpg/1280px-Fontan%C3%A1rio_Quartel_da_Avenida_D._Carlos_I_do_RSB_Lisboa.jpg"
      }
    ],
    transport: [
      {
        name: "Metro de Lisboa",
        type: "Public",
        distance: "",
        address: "",
        hours: "06:30 - 01:00",
        contact: "",
        rating: 4.5,
        description: "Modern metro network connecting main areas of Lisbon. Includes 4 lines covering 56 stations across the city.",
        isEmergency: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Metropolitano_de_Lisboa_-_Esta%C3%A7%C3%A3o_Parque_5.jpg/1280px-Metropolitano_de_Lisboa_-_Esta%C3%A7%C3%A3o_Parque_5.jpg",
        category: "Public Transport",
        features: ["Viva Viagem card required (€0.50)", "Free WiFi", "Air conditioning", "Accessible"],
        price: "From €1.30 per journey"
      },
      {
        name: "Tranvía 28",
        type: "Public",
        distance: "",
        address: "",
        hours: "07:00 - 22:30",
        contact: "",
        rating: 4.3,
        description: "Iconic yellow tram that covers the historic parts of Lisbon. A unique experience through the old city center.",
        isEmergency: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Tram_28_Lisbon.JPG/1280px-Tram_28_Lisbon.JPG",
        category: "Public Transport",
        features: ["Viva Viagem card required (€0.50)", "Historic route", "Scenic views"],
        price: "From €3.00 per journey"
      },
      {
        name: "Autobuses Carris",
        type: "Public",
        distance: "",
        address: "",
        hours: "05:30 - 00:00",
        contact: "",
        rating: 4.2,
        description: "Extensive bus network covering all of Lisbon. Includes night services, air conditioning and WiFi on most routes.",
        isEmergency: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Autocarros_no_Rossio%2C_Lisboa.JPG/1280px-Autocarros_no_Rossio%2C_Lisboa.JPG",
        category: "Public Transport",
        features: ["Viva Viagem card required (€0.50)", "Free WiFi", "Air conditioning", "Night service"],
        price: "From €2.00 per journey"
      },
      {
        name: "Uber & Bolt",
        type: "Private",
        distance: "",
        address: "",
        hours: "24 hours",
        contact: "",
        rating: 4.6,
        description: "Ride-hailing services available throughout Lisbon. Convenient and often more comfortable alternative to public transport.",
        isEmergency: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Uber_app.jpg/1280px-Uber_app.jpg",
        category: "Private Transport",
        features: ["App-based", "Credit card payment", "24h service", "Door-to-door"],
        price: "From €5.00 per journey"
      },
      {
        name: "Gira - Bike Sharing",
        type: "Active",
        distance: "",
        address: "",
        hours: "06:00 - 00:00",
        contact: "",
        rating: 4.4,
        description: "Lisbon's public bike sharing system. Includes conventional and electric bikes available at stations around the city.",
        isEmergency: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Edif%C3%ADcio_na_Avenida_24_de_Julho%2C_Lisboa.jpg/1024px-Edif%C3%ADcio_na_Avenida_24_de_Julho%2C_Lisboa.jpg",
        category: "Active Transport",
        features: ["App required", "Electric & regular bikes", "Multiple stations"],
        price: "€2.00 per 45 minutes"
      },
      {
        name: "Airport Metro Connection",
        type: "Airport",
        distance: "",
        address: "Aeroporto Metro Station",
        hours: "06:30 - 01:00",
        contact: "",
        rating: 4.4,
        description: "Direct metro connection from Lisbon Airport to the city center (Red Line). Fast and affordable option for airport transfers.",
        isEmergency: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Aeroporto_Metro_station.jpg/1024px-Aeroporto_Metro_station.jpg",
        category: "Airport",
        features: ["Viva Viagem card required (€0.50)", "Frequent service", "Large luggage space"],
        price: "€1.66 per journey"
      }
    ]
  };

  const filteredServices = selectedCategory === "all"
    ? Object.values(services).flat()
    : services[selectedCategory as keyof typeof services] || [];

  const TransportCardsInfo = () => {
    return (
      <div className="mb-8 p-6 bg-slate-50 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4 text-slate-800">Transport Cards & Passes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Viva Viagem Card */}
          <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-slate-800">Viva Viagem Card</h4>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Required for Public Transport</span>
            </div>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• Base card cost: <span className="font-semibold">€0.50</span> (non-refundable)</li>
              <li>• Valid for: Metro, bus, tram, ferry</li>
              <li>• Zapping option: €3.00 to €40.00 credit</li>
              <li>• Single trip cost with Zapping: <span className="font-semibold">€1.66</span></li>
              <li>• Available at: Metro stations and kiosks</li>
            </ul>
          </div>
          
          {/* Lisboa Card */}
          <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-slate-800">Lisboa Card</h4>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Tourist Pass + Museums</span>
            </div>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• 24h: <span className="font-semibold">€27.00</span> (Adult) / €18.00 (Child)</li>
              <li>• 48h: <span className="font-semibold">€44.00</span> (Adult) / €24.50 (Child)</li>
              <li>• 72h: <span className="font-semibold">€54.00</span> (Adult) / €30.00 (Child)</li>
              <li>• Free entry to 51 museums & attractions</li>
              <li>• Unlimited public transport included</li>
            </ul>
          </div>
          
          {/* Other passes */}
          <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-slate-800">Other Pass Options</h4>
              <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">Longer Stays</span>
            </div>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• 24h Carris/Metro: <span className="font-semibold">€7.00</span></li>
              <li>• 7-day Unlimited: <span className="font-semibold">€27.00</span></li>
              <li>• Navegante Monthly: <span className="font-semibold">€40.00</span></li>
              <li>• Airport Bus (Aerobus): <span className="font-semibold">€4.00</span></li>
              <li>• Available at: Metro stations and tourist offices</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
          <p className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><strong>Pro tip:</strong> The Lisboa Card is the best value if you plan to visit multiple museums. For simple transport, the Viva Viagem with Zapping offers the most flexibility.</span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf6ee]">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="container py-8">
          <div className="bg-red-50 p-6 rounded-lg mb-10 animate-fade-in shadow-md">
            <h2 className="text-3xl font-bold text-red-700 mb-5 text-center">Emergency Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {emergencyServices.map((service) => (
                <button
                  key={service.name}
                  onClick={() => handlePhoneClick(service.number, service.name)}
                  className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center space-x-4 border border-red-200 hover:border-red-400 hover:scale-105"
                >
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-grow text-left">
                    <h3 className="font-bold text-xl text-red-700">{service.number}</h3>
                    <p className="font-medium text-base text-gray-800">{service.name}</p>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Essential Services</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find important services near Travessa da Trindade, including hospitals, pharmacies, embassies, and police stations.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className="animate-fade-in"
            >
              All Services
            </Button>
            <Button
              variant={selectedCategory === "healthcare" ? "default" : "outline"}
              onClick={() => setSelectedCategory("healthcare")}
              className="animate-fade-in"
            >
              Healthcare
            </Button>
            <Button
              variant={selectedCategory === "pharmacies" ? "default" : "outline"}
              onClick={() => setSelectedCategory("pharmacies")}
              className="animate-fade-in"
            >
              Pharmacies
            </Button>
            <Button
              variant={selectedCategory === "embassies" ? "default" : "outline"}
              onClick={() => setSelectedCategory("embassies")}
              className="animate-fade-in"
            >
              Embassies
            </Button>
            <Button
              variant={selectedCategory === "police" ? "default" : "outline"}
              onClick={() => setSelectedCategory("police")}
              className="animate-fade-in"
            >
              Police
            </Button>
            <Button
              variant={selectedCategory === "firefighters" ? "default" : "outline"}
              onClick={() => setSelectedCategory("firefighters")}
              className="animate-fade-in"
            >
              Firefighters
            </Button>
            <Button
              variant={selectedCategory === "transport" ? "default" : "outline"}
              onClick={() => setSelectedCategory("transport")}
              className="animate-fade-in"
            >
              Transport
            </Button>
          </div>

          {selectedCategory === "transport" && <TransportCardsInfo />}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Card key={service.name} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in-up">
                <div className="relative h-48">
                  {service.image && (
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {service.type}
                  </div>
                  {service.rating > 0 && (
                    <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                      {service.rating}
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span className="line-clamp-1">{service.address}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span>{service.hours}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <Button
                      onClick={() => handlePhoneClick(service.contact, service.name)}
                      className="w-full bg-green-500 hover:bg-green-600 text-white"
                      size="lg"
                    >
                      <PhoneCall className="h-5 w-5 mr-2" />
                      <span className="font-medium">{service.contact.split('(')[0].trim()}</span>
                    </Button>
                    <p className="text-xs text-center text-gray-500">
                      {service.contact.includes('(') ? service.contact.split('(')[1].replace(')', '') : ''}
                    </p>
                    <Button
                      onClick={() => handleGetDirections(service.address)}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                      size="lg"
                    >
                      <MapPin className="h-5 w-5 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                  {service.category && (
                    <div className="flex items-center gap-2 mt-4">
                      <span className="text-sm text-slate-500">{service.type}</span>
                      <Badge variant="secondary" className="ml-auto">
                        {service.category}
                      </Badge>
                    </div>
                  )}
                  {service.features && service.features.length > 0 && (
                    <div className="mt-3">
                      <div className="flex flex-wrap gap-1">
                        {service.features.map((feature, index) => (
                          <span key={index} className="text-xs px-2 py-1 bg-slate-100 rounded-full text-slate-700">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {service.price && (
                    <div className="flex items-center mt-2">
                      <svg className="h-4 w-4 text-slate-500 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm font-medium text-slate-700">{service.price}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-24 right-6 z-40 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2">WhatsApp</span>
        </span>
      </button>
    </div>
  );
};

export default Services;
