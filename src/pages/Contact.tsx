import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/351900123456', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf6ee]">
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h1 className="text-4xl font-bold mb-4">Contacta con Nosotros</h1>
                  <p className="text-muted-foreground">
                    Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.
                  </p>
                </div>
                <div className="space-y-6 bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">info@lisbontiles.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold">Teléfono</h3>
                      <p className="text-muted-foreground">+351 900 123 456</p>
                      <p className="text-xs text-muted-foreground">Cost of a call to the national landline network</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold">Dirección</h3>
                      <p className="text-muted-foreground">
                        Travessa da Trindade 18<br />
                        1200-469 Lisboa<br />
                        Portugal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up">
                <form className="space-y-6">
                  <div>
                    <Input 
                      placeholder="Nombre" 
                      className="bg-background/50 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      className="bg-background/50 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Asunto" 
                      className="bg-background/50 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Mensaje" 
                      className="min-h-[150px] bg-background/50 backdrop-blur-sm"
                    />
                  </div>
                  <Button className="w-full">
                    Enviar Mensaje
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2">WhatsApp</span>
        </span>
      </button>
    </div>
  );
};

export default Contact;