import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Sobre WebGuest</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Somos una plataforma innovadora diseñada para transformar la manera en que gestionas la experiencia de tus huéspedes.
              </p>
              <div className="grid gap-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Nuestra Misión</h2>
                  <p className="text-muted-foreground">
                    Facilitar la gestión de huéspedes proporcionando herramientas intuitivas y eficientes que mejoren la experiencia tanto para administradores como para visitantes.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Nuestra Visión</h2>
                  <p className="text-muted-foreground">
                    Ser la plataforma líder en gestión de experiencias de huéspedes, estableciendo nuevos estándares en la industria de la hospitalidad.
                  </p>
                </div>
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