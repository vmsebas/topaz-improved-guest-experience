import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Heart, Star, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "linear-gradient(109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1%)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="container relative z-10 animate-fade-in">
            <h1 className="text-5xl font-bold text-primary mb-4">
              Sobre Lisbon Tiles
            </h1>
            <p className="text-xl text-muted-foreground">
              Tu auténtico hogar portugués en el corazón del histórico Alfama
            </p>
          </div>
        </section>

        {/* Location Info */}
        <section className="py-8 bg-[#F1F0FB]/50">
          <div className="container">
            <p className="text-muted-foreground">📍 Alfama, Lisboa, Portugal</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-gradient-to-b from-[#F1F0FB] to-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6 text-primary">Descubre Lisboa Como un Local</h2>
                <p className="text-muted-foreground mb-4">
                  Ubicado en el corazón del histórico Alfama, Lisbon Tiles ofrece una auténtica experiencia portuguesa combinada con el confort y la comodidad moderna.
                </p>
                <p className="text-muted-foreground">
                  Nuestro alojamiento ha sido cuidadosamente restaurado para preservar su encanto tradicional mientras proporciona todas las comodidades que los viajeros modernos esperan. Desde los tradicionales azulejos que adornan nuestras paredes hasta las impresionantes vistas al río Tajo, cada detalle ha sido meticulosamente seleccionado.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b"
                  alt="Lisbon Tiles interior"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-[#F1F0FB]/50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in">
                <Heart className="w-12 h-12 text-[#FFDEE2] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-primary">Experiencia Auténtica</h3>
                <p className="text-muted-foreground">Vive como un local en el histórico Alfama</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in">
                <Star className="w-12 h-12 text-[#FEF7CD] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-primary">Servicio Premium</h3>
                <p className="text-muted-foreground">Atención 24/7 para todos nuestros huéspedes</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in">
                <Shield className="w-12 h-12 text-[#D3E4FD] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-primary">Seguro y Protegido</h3>
                <p className="text-muted-foreground">Seguridad moderna con encanto tradicional</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;