import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Shield, Info, Cookie, ChevronRight, AlertCircle, CheckCircle2, Settings, Lock } from "lucide-react";

const Cookies = () => {
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
              <BreadcrumbPage>Política de Cookies</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-8">
            <Cookie className="h-8 w-8 text-[#FEC6A1]" />
            <h1 className="text-4xl font-bold text-primary bg-gradient-to-r from-[#D3E4FD] to-[#F1F0FB] bg-clip-text text-transparent">
              Política de Cookies
            </h1>
          </div>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <div className="bg-[#F1F0FB]/30 p-6 rounded-lg transform hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Info className="h-5 w-5 text-[#E5DEFF]" />
                <Badge variant="secondary" className="bg-[#E5DEFF] text-primary">Información General</Badge>
              </div>
              <p className="lead">Esta Política de Cookies explica como el Lisbon Tiles usa cookies y tecnologías similares en nuestro website.</p>
            </div>

            <div className="bg-[#F1F0FB]/30 p-6 rounded-lg transform hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Cookie className="h-5 w-5 text-[#FEC6A1]" />
                <Badge variant="secondary" className="bg-[#FEC6A1]/20 text-primary">Definición</Badge>
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">1. ¿Qué son Cookies?</h2>
              <p>Cookies son pequeños archivos de texto almacenados en su dispositivo cuando visita nuestro sitio.</p>
            </div>

            <div className="bg-[#F1F0FB]/30 p-6 rounded-lg transform hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Settings className="h-5 w-5 text-[#F2FCE2]" />
                <Badge variant="secondary" className="bg-[#F2FCE2] text-primary">Tipos de Cookies</Badge>
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">2. Tipos de Cookies que Usamos</h2>
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-[#D3E4FD]">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-[#D3E4FD]" />
                    <h3 className="text-xl font-semibold text-primary">2.1. Cookies Esenciales</h3>
                  </div>
                  <p>Necesarios para el funcionamiento básico del sitio y no pueden ser desactivados.</p>
                </div>
                
                <div className="pl-4 border-l-2 border-[#F1F0FB]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#F1F0FB]" />
                    <h3 className="text-xl font-semibold text-primary">2.2. Cookies de Desempeño</h3>
                  </div>
                  <p>Ayudan a entender cómo los visitantes interactúan con el sitio, recolectando información anónima.</p>
                </div>
                
                <div className="pl-4 border-l-2 border-[#FEF7CD]">
                  <div className="flex items-center gap-2">
                    <Settings className="h-4 w-4 text-[#FEF7CD]" />
                    <h3 className="text-xl font-semibold text-primary">2.3. Cookies Funcionales</h3>
                  </div>
                  <p>Permiten que el sitio recuerde sus elecciones para proporcionar funcionalidades mejoradas.</p>
                </div>
                
                <div className="pl-4 border-l-2 border-[#FFDEE2]">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-[#FFDEE2]" />
                    <h3 className="text-xl font-semibold text-primary">2.4. Cookies de Marketing</h3>
                  </div>
                  <p>Usados para rastrear visitantes en diferentes websites para mostrar anuncios relevantes.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#F1F0FB]/30 p-6 rounded-lg transform hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Settings className="h-5 w-5 text-[#D3E4FD]" />
                <Badge variant="secondary" className="bg-[#D3E4FD] text-primary">Gestión</Badge>
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">3. Como Gerenciar Cookies</h2>
              <p>Você pode controlar e/ou excluir cookies conforme desejar:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Através das configurações do seu navegador</li>
                <li>Usando nosso painel de preferências de cookies</li>
                <li>Visitando www.aboutcookies.org</li>
              </ul>
            </div>

            <div className="bg-[#F1F0FB]/30 p-6 rounded-lg transform hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Lock className="h-5 w-5 text-[#F2FCE2]" />
                <Badge variant="secondary" className="bg-[#F2FCE2] text-primary">Terceros</Badge>
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">4. Cookies de Terceiros</h2>
              <p>Alguns cookies são definidos por serviços de terceiros que aparecem em nossas páginas:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Google Analytics - análise de uso do site</li>
                <li>Redes sociais - botões de compartilhamento</li>
                <li>Serviços de pagamento - processamento seguro de pagamentos</li>
              </ul>
            </div>

            <div className="bg-[#F1F0FB]/30 p-6 rounded-lg transform hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Info className="h-5 w-5 text-[#FFDEE2]" />
                <Badge variant="secondary" className="bg-[#FFDEE2] text-primary">Actualizaciones</Badge>
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">5. Atualizações à Política</h2>
              <p>Esta política pode ser atualizada periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre quaisquer alterações.</p>
            </div>

            <div className="bg-[#F1F0FB]/30 p-6 rounded-lg transform hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="h-5 w-5 text-[#FEC6A1]" />
                <Badge variant="secondary" className="bg-[#FEC6A1] text-primary">Contacto</Badge>
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">6. Contato</h2>
              <p>Se tiver dúvidas sobre nossa política de cookies, entre em contato conosco em cookies@lisbontiles.com</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;