import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Heart, Star, Shield, MessageCircle } from "lucide-react";

const About = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/351900123456', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf6ee]">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1513735492246-483525079686')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.6)"
            }}
          />
          <div className="container relative z-10">
            <h1 className="text-5xl font-bold text-white mb-4">
              About Lisbon Tiles
            </h1>
            <p className="text-xl text-gray-200">
              Your authentic Portuguese home in the heart of historic Alfama
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Experience Lisbon Like a Local</h2>
                <p className="text-gray-600 mb-4">
                  Located in the heart of historic Alfama, Lisbon Tiles offers an authentic Portuguese experience combined with modern comfort and convenience.
                </p>
                <p className="text-gray-600">
                  Our accommodation has been carefully restored to preserve its traditional charm while providing all the amenities modern travelers expect. From the traditional tiles adorning our walls to the stunning views of the Tagus River, every detail has been meticulously selected.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1513735492246-483525079686"
                  alt="Traditional Portuguese apartment interior with tiles"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Authentic Experience</h3>
                <p className="text-gray-600">Live like a local in historic Alfama</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <Star className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Premium Service</h3>
                <p className="text-gray-600">24/7 attention for all our guests</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Safe and Secure</h3>
                <p className="text-gray-600">Modern security with traditional charm</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
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

export default About;