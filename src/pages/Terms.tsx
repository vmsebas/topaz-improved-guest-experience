import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#F1F0FB] to-white">
      <Navbar />
      <main className="flex-1 container py-20">
        <Breadcrumb className="mb-8 animate-fade-in">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Terms & Conditions</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in hover:shadow-xl transition-all duration-300">
          <h1 className="text-4xl font-bold mb-8 text-primary bg-gradient-to-r from-[#D3E4FD] to-[#F1F0FB] bg-clip-text text-transparent">
            Terms & Conditions
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <div className="bg-[#F1F0FB]/30 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-primary">1. Introduction</h2>
              <p>Welcome to Lisbon Tiles. By accessing and using our site, you agree to these terms and conditions of use.</p>
            </div>

            <div className="bg-[#F1F0FB]/30 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-primary">2. Reservations and Payments</h2>
              <p>2.1. All reservations are subject to availability and confirmation.</p>
              <p>2.2. Payment can be made through available methods at the time of booking.</p>
              <p>2.3. Cancellation fees may apply according to the current cancellation policy.</p>
            </div>

            <div className="bg-[#F1F0FB]/30 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-primary">3. House Rules</h2>
              <p>3.1. Check-in is from 3:00 PM and check-out is until 11:00 AM.</p>
              <p>3.2. Guests must respect building rules and maintain a quiet environment.</p>
              <p>3.3. Smoking is not permitted inside the premises.</p>
            </div>

            <div className="bg-[#F1F0FB]/30 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-primary">4. Responsibilities</h2>
              <p>4.1. Lisbon Tiles is not responsible for personal items left in the accommodations.</p>
              <p>4.2. Guests are responsible for any damage caused to the property.</p>
            </div>

            <div className="bg-[#F1F0FB]/30 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-primary">5. Applicable Law</h2>
              <p>These terms are governed by Portuguese and European law. Any disputes will be resolved in the courts of Lisbon, Portugal.</p>
            </div>

            <div className="bg-[#F1F0FB]/30 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-primary">6. Changes to Terms</h2>
              <p>We reserve the right to modify these terms at any time by posting the updated version on this website.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;