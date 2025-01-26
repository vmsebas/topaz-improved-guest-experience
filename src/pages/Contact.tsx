import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
    </div>
  );
};

export default Contact;