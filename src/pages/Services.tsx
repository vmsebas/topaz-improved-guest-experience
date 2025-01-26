import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { CategoryFilter } from "@/components/common/CategoryFilter";
import { categories } from "@/components/services/ServiceCategories";
import { services } from "@/components/services/ServiceData";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

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