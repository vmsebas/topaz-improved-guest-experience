import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Users, Shield, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Transformando la gestión de huéspedes con tecnología innovadora
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Equipo Experto</h3>
                <p className="text-muted-foreground">
                  Contamos con profesionales dedicados a mejorar la experiencia de huéspedes
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Máxima Seguridad</h3>
                <p className="text-muted-foreground">
                  Tu información y la de tus huéspedes siempre protegida
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Award className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Calidad Garantizada</h3>
                <p className="text-muted-foreground">
                  Comprometidos con la excelencia en cada aspecto de nuestro servicio
                </p>
              </div>
            </div>
            <div className="bg-secondary/50 p-8 rounded-lg">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Nuestra Historia</h2>
                <p className="text-muted-foreground mb-4">
                  Fundada en 2020, WebGuest nació con la misión de simplificar la gestión de huéspedes para hoteles y alojamientos turísticos. Desde entonces, hemos ayudado a cientos de negocios a mejorar su operativa diaria.
                </p>
                <p className="text-muted-foreground">
                  Nuestra plataforma combina tecnología avanzada con una interfaz intuitiva, permitiendo a nuestros clientes ofrecer una experiencia excepcional a sus huéspedes mientras optimizan sus procesos internos.
                </p>
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