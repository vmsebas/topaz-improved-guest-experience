import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { CategoryFilter } from "@/components/common/CategoryFilter";
import { Hospital, Stethoscope, Flag, Shield } from "lucide-react";
import { Service } from "@/types/services";

const services: Record<string, Service[]> = {
  healthcare: [
    {
      name: "Hospital de São José",
      type: "Emergency Hospital",
      distance: "10 min walk",
      address: "R. José António Serrano, 1150-199 Lisboa",
      hours: "24/7",
      contact: "+351 218 841 000",
      rating: 4.2,
      description: "Main public hospital with full emergency services.",
      isEmergency: true
    },
    {
      name: "CUF Descobertas Hospital",
      type: "Private Hospital",
      distance: "15 min by taxi",
      address: "R. Mário Botas, 1998-018 Lisboa",
      hours: "24/7",
      contact: "+351 210 025 200",
      rating: 4.5,
      description: "Private hospital with English-speaking staff.",
      isEmergency: true
    },
    {
      name: "Hospital da Luz",
      type: "Private Hospital",
      distance: "12 min by taxi",
      address: "Av. Lusíada 100, 1500-650 Lisboa",
      hours: "24/7",
      contact: "+351 217 104 400",
      rating: 4.6,
      description: "Modern private hospital with multilingual staff.",
      isEmergency: true
    }
  ],
  pharmacies: [
    {
      name: "Farmácia Andrade",
      type: "Pharmacy",
      distance: "5 min walk",
      address: "R. do Loreto 24, 1200-242 Lisboa",
      hours: "9:00 - 19:00",
      contact: "+351 213 426 743",
      rating: 4.4,
      description: "Local pharmacy with English-speaking staff.",
      isEmergency: false,
      image: "https://lh5.googleusercontent.com/p/AF1QipP2UTEcBr7r1F02LWYoCTjtAjcmkBAN_TmoOr2a=w408-h544-k-no"
    },
    {
      name: "Farmácia Barreto",
      type: "Historic Pharmacy",
      distance: "6 min walk",
      address: "R. do Loreto 59, 1200-241 Lisboa",
      hours: "9:00 - 19:30",
      contact: "+351 213 425 625",
      rating: 4.4,
      description: "Historic pharmacy with traditional Portuguese architecture.",
      isEmergency: false,
      image: "https://lh5.googleusercontent.com/p/AF1QipOnpCBv4fzLnqCrk5By7ClIEth7l-gArikUyZ0H=w408-h726-k-no"
    },
    {
      name: "Farmácia Sacoor do Chiado",
      type: "Pharmacy",
      distance: "4 min walk",
      address: "R. do Carmo 51A, 1200-093 Lisboa",
      hours: "9:00 - 20:00",
      contact: "+351 213 460 271",
      rating: 4.3,
      description: "Modern pharmacy in the heart of Chiado with multilingual staff.",
      isEmergency: false,
      image: "https://lh5.googleusercontent.com/p/AF1QipOo4I-cWmoE_mXoICuGPVe9LBurMqP7L7ec7pOM=w408-h544-k-no"
    }
  ],
  embassies: [
    {
      name: "British Embassy",
      type: "Embassy",
      distance: "20 min walk",
      address: "R. de São Bernardo 33, 1249-082 Lisboa",
      hours: "9:00 - 17:00",
      contact: "+351 213 924 000",
      rating: 4.1,
      description: "Consular services for British citizens.",
      isEmergency: false
    },
    {
      name: "U.S. Embassy",
      type: "Embassy",
      distance: "25 min by taxi",
      address: "Av. das Forças Armadas, 1600-081 Lisboa",
      hours: "8:30 - 17:30",
      contact: "+351 217 273 300",
      rating: 4.0,
      description: "Full consular services for U.S. citizens.",
      isEmergency: false
    },
    {
      name: "German Embassy",
      type: "Embassy",
      distance: "15 min walk",
      address: "Campo dos Mártires da Pátria 38, 1169-043 Lisboa",
      hours: "9:00 - 17:00",
      contact: "+351 218 810 210",
      rating: 4.2,
      description: "German consular services and visa applications.",
      isEmergency: false
    },
    {
      name: "French Embassy",
      type: "Embassy",
      distance: "18 min walk",
      address: "R. Santos-o-Velho 5, 1200-811 Lisboa",
      hours: "9:00 - 16:30",
      contact: "+351 213 939 100",
      rating: 4.1,
      description: "French consular services and cultural center.",
      isEmergency: false
    }
  ],
  police: [
    {
      name: "PSP Baixa-Chiado",
      type: "Police Station",
      distance: "7 min walk",
      address: "R. do Ouro 140, 1100-065 Lisboa",
      hours: "24/7",
      contact: "112 (Emergency) / +351 213 421 634",
      rating: 4.0,
      description: "Local police station with tourist police service.",
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
      description: "Central police station with English-speaking officers.",
      isEmergency: true
    }
  ]
};

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Services" },
    { id: "healthcare", name: "Hospitals", icon: Hospital },
    { id: "pharmacies", name: "Pharmacies", icon: Stethoscope },
    { id: "embassies", name: "Embassies", icon: Flag },
    { id: "police", name: "Police", icon: Shield }
  ];

  const filteredServices = selectedCategory === "all"
    ? Object.values(services).flat()
    : services[selectedCategory as keyof typeof services] || [];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#F1F0FB] to-white">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="container px-4 py-16">
          <Breadcrumb className="mb-8 animate-fade-in">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-primary hover:text-primary/80">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Essential Services</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <ServiceHeader 
            title="Essential Services"
            description="Find important services near Travessa da Trindade, including hospitals, pharmacies, embassies, and police stations."
          />

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            className="mb-8"
          />

          <ServiceGrid services={filteredServices} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
