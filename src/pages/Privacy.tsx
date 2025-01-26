import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Shield, Lock, ChevronRight, AlertCircle, Info, CheckCircle2, Settings } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#F1F0FB] to-white">
      <Navbar />
      <main className="flex-1 container py-20">
        <Breadcrumb className="mb-8 animate-fade-in">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="hover:text-primary transition-colors">Início</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Política de Privacidad</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="h-8 w-8 text-[#D3E4FD]" />
            <h1 className="text-4xl font-bold text-primary bg-gradient-to-r from-[#D3E4FD] to-[#F1F0FB] bg-clip-text text-transparent">
              Política de Privacidad
            </h1>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <div className="bg-[#F1F0FB]/30 p-6 rounded-lg transform hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Info className="h-5 w-5 text-[#E5DEFF]" />
                <Badge variant="secondary" className="bg-[#E5DEFF] text-primary">Introducción</Badge>
              </div>
              <p className="lead">
                En Lisbon Tiles, nos tomamos muy en serio la privacidad de nuestros huéspedes. Esta política explica cómo recopilamos, usamos y protegemos su información personal.
              </p>
            </div>

            <div className="bg-[#F1F0FB]/30 p-6 rounded-lg transform hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Lock className="h-5 w-5 text-[#FEC6A1]" />
                <Badge variant="secondary" className="bg-[#FEC6A1]/20 text-primary">Datos Personales</Badge>
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">1. Información que Recopilamos</h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#D3E4FD] mt-1" />
                  <span>Nombre y datos de contacto</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#D3E4FD] mt-1" />
                  <span>Información de reserva y estancia</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#D3E4FD] mt-1" />
                  <span>Preferencias y solicitudes especiales</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F1F0FB]/30 p-6 rounded-lg transform hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Settings className="h-5 w-5 text-[#F2FCE2]" />
                <Badge variant="secondary" className="bg-[#F2FCE2] text-primary">Uso de Datos</Badge>
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">2. Cómo Usamos su Información</h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#F2FCE2] mt-1" />
                  <span>Gestionar su reserva y estancia</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#F2FCE2] mt-1" />
                  <span>Mejorar nuestros servicios</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#F2FCE2] mt-1" />
                  <span>Comunicarnos con usted sobre su reserva</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F1F0FB]/30 p-6 rounded-lg transform hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-5 w-5 text-[#FFDEE2]" />
                <Badge variant="secondary" className="bg-[#FFDEE2] text-primary">Protección</Badge>
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">3. Seguridad de los Datos</h2>
              <p>
                Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra acceso no autorizado, pérdida o alteración.
              </p>
            </div>

            <div className="bg-[#F1F0FB]/30 p-6 rounded-lg transform hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="h-5 w-5 text-[#FEC6A1]" />
                <Badge variant="secondary" className="bg-[#FEC6A1] text-primary">Sus Derechos</Badge>
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">4. Derechos del Usuario</h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#FEC6A1] mt-1" />
                  <span>Acceder a sus datos personales</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#FEC6A1] mt-1" />
                  <span>Solicitar la rectificación o eliminación</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#FEC6A1] mt-1" />
                  <span>Oponerse al procesamiento</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F1F0FB]/30 p-6 rounded-lg transform hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Info className="h-5 w-5 text-[#D3E4FD]" />
                <Badge variant="secondary" className="bg-[#D3E4FD] text-primary">Contacto</Badge>
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">5. Contacto</h2>
              <p>
                Para cualquier consulta sobre nuestra política de privacidad o para ejercer sus derechos, contáctenos en privacy@lisbontiles.com
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;