import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F1F0FB]/50">
      <Navbar />
      <main className="flex-1 container py-20">
        <Breadcrumb className="mb-8 animate-fade-in">
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

        <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in">
          <h1 className="text-4xl font-bold mb-8 text-primary">Política de Privacidade</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="lead">Esta Política de Privacidade descreve como o Lisbon Tiles coleta, usa e protege suas informações pessoais em conformidade com o RGPD (Regulamento Geral de Proteção de Dados - UE 2016/679).</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">1. Dados que Coletamos</h2>
            <p>Coletamos os seguintes tipos de informações:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone</li>
              <li>Dados do documento de identificação</li>
              <li>Informações de pagamento</li>
              <li>Dados de reserva</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">2. Como Usamos seus Dados</h2>
            <p>Utilizamos seus dados pessoais para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Processar suas reservas</li>
              <li>Comunicar informações sobre sua estadia</li>
              <li>Cumprir obrigações legais</li>
              <li>Melhorar nossos serviços</li>
              <li>Enviar comunicações de marketing (com seu consentimento)</li>
            </ul>

          <h2>3. Base Legal para Processamento</h2>
          <p>Processamos seus dados com base em:</p>
          <ul>
            <li>Execução de contrato</li>
            <li>Obrigações legais</li>
            <li>Interesses legítimos</li>
            <li>Seu consentimento</li>
          </ul>

          <h2>4. Seus Direitos</h2>
          <p>Sob o RGPD, você tem direito a:</p>
          <ul>
            <li>Acessar seus dados pessoais</li>
            <li>Retificar dados incorretos</li>
            <li>Apagar seus dados</li>
            <li>Restringir o processamento</li>
            <li>Portabilidade dos dados</li>
            <li>Retirar consentimento</li>
          </ul>

          <h2>5. Segurança dos Dados</h2>
          <p>Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados pessoais.</p>

          <h2>6. Contato</h2>
          <p>Para exercer seus direitos ou esclarecer dúvidas, contate nosso DPO em privacy@lisbontiles.com</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
