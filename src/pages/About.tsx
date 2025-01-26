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
              backgroundImage: "url('https://images.unsplash.com/photo-1513735492246-483525079686')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.6)"
            }}
          />
          <div className="container relative z-10">
            <h1 className="text-5xl font-bold text-white mb-4">
              Sobre Lisbon Tiles
            </h1>
            <p className="text-xl text-gray-200">
              Tu auténtico hogar portugués en el corazón del histórico Alfama
            </p>
          </div>
        </section>

        {/* Location Info */}
        <section className="py-8 bg-gray-50">
          <div className="container">
            <p className="text-gray-600">📍 Alfama, Lisboa, Portugal</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Descubre Lisboa Como un Local</h2>
                <p className="text-gray-600 mb-4">
                  Ubicado en el corazón del histórico Alfama, Lisbon Tiles ofrece una auténtica experiencia portuguesa combinada con el confort y la comodidad moderna.
                </p>
                <p className="text-gray-600">
                  Nuestro alojamiento ha sido cuidadosamente restaurado para preservar su encanto tradicional mientras proporciona todas las comodidades que los viajeros modernos esperan. Desde los tradicionales azulejos que adornan nuestras paredes hasta las impresionantes vistas al río Tajo, cada detalle ha sido meticulosamente seleccionado.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
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
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Experiencia Auténtica</h3>
                <p className="text-gray-600">Vive como un local en el histórico Alfama</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <Star className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Servicio Premium</h3>
                <p className="text-gray-600">Atención 24/7 para todos nuestros huéspedes</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Seguro y Protegido</h3>
                <p className="text-gray-600">Seguridad moderna con encanto tradicional</p>
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