import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Privacy = () => {
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
              <BreadcrumbPage>Política de Privacidade</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Política de Privacidade</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Esta Política de Privacidade descreve como o Lisbon Tiles coleta, usa e protege suas informações pessoais.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-4 text-primary">1. Dados que Coletamos</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone</li>
              <li>Dados do documento de identificação</li>
              <li>Informações de pagamento</li>
              <li>Dados de reserva</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-4 text-primary">2. Como Usamos seus Dados</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>Processar suas reservas</li>
              <li>Comunicar informações sobre sua estadia</li>
              <li>Cumprir obrigações legais</li>
              <li>Melhorar nossos serviços</li>
              <li>Enviar comunicações de marketing (com seu consentimento)</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-4 text-primary">3. Base Legal para Processamento</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>Execução de contrato</li>
              <li>Obrigações legais</li>
              <li>Interesses legítimos</li>
              <li>Seu consentimento</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-4 text-primary">4. Seus Direitos</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>Acessar seus dados pessoais</li>
              <li>Retificar dados incorretos</li>
              <li>Apagar seus dados</li>
              <li>Restringir o processamento</li>
              <li>Portabilidade dos dados</li>
              <li>Retirar consentimento</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-4 text-primary">5. Segurança dos Dados</h2>
            <p className="text-muted-foreground">
              Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-4 text-primary">6. Contato</h2>
            <p className="text-muted-foreground">
              Para exercer seus direitos ou esclarecer dúvidas, contate nosso DPO em:
              <br />
              <a href="mailto:privacy@lisbontiles.com" className="text-primary hover:underline">
                privacy@lisbontiles.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;