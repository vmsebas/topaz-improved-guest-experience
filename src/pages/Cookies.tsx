import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MessageCircle } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Cookies = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/351900123456', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F1F0FB]">
      <Navbar />
      <main className="flex-1 container py-20">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Início</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Política de Cookies</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Política de Cookies</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Última atualização: {new Date().toLocaleDateString('pt-PT')}
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-6 text-primary">1. O que são Cookies?</h2>
            <p className="text-muted-foreground mb-4">
              Cookies são pequenos ficheiros de texto que os websites colocam no seu dispositivo durante a navegação. São utilizados para melhorar a sua experiência e fornecer determinadas funcionalidades.
            </p>
            <p className="text-muted-foreground">
              De acordo com o Regulamento Geral sobre a Proteção de Dados (RGPD) e a Lei n.º 58/2019 de Portugal, somos obrigados a obter o seu consentimento para o uso de cookies não essenciais.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-6 text-primary">2. Tipos de Cookies que Utilizamos</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Cookies Essenciais</h3>
                <p className="text-muted-foreground">Necessários para o funcionamento do website. Não podem ser desativados.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Cookies de Desempenho</h3>
                <p className="text-muted-foreground">Ajudam-nos a entender como os visitantes interagem com o website.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Cookies de Funcionalidade</h3>
                <p className="text-muted-foreground">Permitem que o website se lembre das suas escolhas.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Cookies de Marketing</h3>
                <p className="text-muted-foreground">Utilizados para rastrear visitantes entre websites.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-6 text-primary">3. Como Gerir Cookies</h2>
            <p className="text-muted-foreground mb-4">
              Pode controlar e/ou apagar cookies conforme desejar. Pode apagar todos os cookies já existentes no seu dispositivo e pode configurar a maioria dos navegadores para impedir a sua instalação.
            </p>
            <p className="text-muted-foreground">
              Para mais informações sobre como gerir cookies, visite:{" "}
              <a 
                href="https://www.aboutcookies.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.aboutcookies.org
              </a>
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-6 text-primary">4. Os Nossos Cookies</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Google Analytics</h3>
                <p className="text-muted-foreground">Utilizamos para análise de uso do site.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Redes Sociais</h3>
                <p className="text-muted-foreground">Botões de partilha e conteúdo integrado.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Preferências</h3>
                <p className="text-muted-foreground">Guardam as suas configurações do site.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up md:col-span-2">
            <h2 className="text-xl font-semibold mb-6 text-primary">5. Contacto</h2>
            <p className="text-muted-foreground mb-4">
              Se tiver dúvidas sobre a nossa política de cookies, entre em contacto connosco:
            </p>
            <div className="space-y-2">
              <p className="text-muted-foreground">Lisbon Tiles</p>
              <p className="text-muted-foreground">Travessa da Trindade 18</p>
              <p className="text-muted-foreground">1200-469 Lisboa, Portugal</p>
              <p className="text-muted-foreground">Email: privacy@lisbontiles.com</p>
              <p className="text-muted-foreground">Tel: +351 123 456 789</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      {/* Botón flotante de WhatsApp */}
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

export default Cookies;