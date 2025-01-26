import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MessageCircle } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Privacy = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/351900123456', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf6ee]">
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
          <p className="text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString('pt-PT')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-6 text-primary">1. Introdução</h2>
            <p className="text-muted-foreground mb-4">
              A Lisbon Tiles ("nós", "nosso" ou "empresa") está comprometida em proteger a sua privacidade. Esta política explica como recolhemos, usamos e protegemos os seus dados pessoais em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) e a Lei n.º 58/2019 de Portugal.
            </p>
            <p className="text-muted-foreground">
              Para questões relacionadas com os seus dados pessoais, contacte nosso Encarregado de Proteção de Dados (DPO) através do email: dpo@lisbontiles.com
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-6 text-primary">2. Dados Pessoais que Recolhemos</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Dados de Identificação</h3>
                <p className="text-muted-foreground">Nome, email, telefone, morada</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Dados de Pagamento</h3>
                <p className="text-muted-foreground">Informações de cartão de crédito (processadas de forma segura)</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Dados de Navegação</h3>
                <p className="text-muted-foreground">Endereço IP, cookies, dados de uso do website</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-6 text-primary">3. Base Legal para o Tratamento</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Consentimento (Art. 6.º, n.º 1, alínea a) do RGPD)</h3>
                <p className="text-muted-foreground">Para envio de newsletters e comunicações de marketing</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Execução de Contrato (Art. 6.º, n.º 1, alínea b) do RGPD)</h3>
                <p className="text-muted-foreground">Para processar suas reservas e pedidos</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Obrigação Legal (Art. 6.º, n.º 1, alínea c) do RGPD)</h3>
                <p className="text-muted-foreground">Para cumprir obrigações fiscais e legais</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Interesses Legítimos (Art. 6.º, n.º 1, alínea f) do RGPD)</h3>
                <p className="text-muted-foreground">Para melhorar nossos serviços e proteger contra fraudes</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-6 text-primary">4. Seus Direitos</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Direito de Acesso (Art. 15.º do RGPD)</h3>
                <p className="text-muted-foreground">Obter confirmação sobre quais dados pessoais seus estamos a tratar</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Direito de Retificação (Art. 16.º do RGPD)</h3>
                <p className="text-muted-foreground">Corrigir dados inexatos ou incompletos</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Direito ao Apagamento (Art. 17.º do RGPD)</h3>
                <p className="text-muted-foreground">Solicitar a eliminação dos seus dados pessoais</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Direito à Portabilidade (Art. 20.º do RGPD)</h3>
                <p className="text-muted-foreground">Receber seus dados num formato estruturado</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-6 text-primary">5. Transferências Internacionais</h2>
            <p className="text-muted-foreground mb-4">
              Alguns dos nossos fornecedores de serviços podem estar localizados fora do Espaço Económico Europeu (EEE). Quando realizamos transferências internacionais, garantimos proteções adequadas através de:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Cláusulas Contratuais-Tipo da UE</li>
              <li>Decisões de Adequação da Comissão Europeia</li>
              <li>Regras Vinculativas para Empresas (BCRs)</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-6 text-primary">6. Segurança dos Dados</h2>
            <p className="text-muted-foreground mb-4">
              Implementamos medidas técnicas e organizativas apropriadas para garantir um nível de segurança adequado ao risco, incluindo:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Encriptação de dados</li>
              <li>Backup regular</li>
              <li>Testes de segurança periódicos</li>
              <li>Controle de acesso rigoroso</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up md:col-span-2">
            <h2 className="text-xl font-semibold mb-6 text-primary">7. Período de Conservação</h2>
            <p className="text-muted-foreground mb-4">
              Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram recolhidos, incluindo:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Dados de Cliente</h3>
                <p className="text-muted-foreground">Até 5 anos após a última interação</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Dados Financeiros</h3>
                <p className="text-muted-foreground">10 anos (requisito legal)</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Dados de Marketing</h3>
                <p className="text-muted-foreground">Até retirada do consentimento</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Cookies</h3>
                <p className="text-muted-foreground">Conforme definido na Política de Cookies</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up md:col-span-2">
            <h2 className="text-xl font-semibold mb-6 text-primary">8. Contacto e Reclamações</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Para exercer seus direitos ou apresentar uma reclamação, contacte:
              </p>
              <div className="space-y-2">
                <p className="text-muted-foreground">Lisbon Tiles</p>
                <p className="text-muted-foreground">Encarregado de Proteção de Dados (DPO)</p>
                <p className="text-muted-foreground">Travessa da Trindade 18</p>
                <p className="text-muted-foreground">1200-469 Lisboa, Portugal</p>
                <p className="text-muted-foreground">Email: dpo@lisbontiles.com</p>
                <p className="text-muted-foreground">Tel: +351 123 456 789</p>
              </div>
              <p className="text-muted-foreground mt-4">
                Tem também o direito de apresentar uma reclamação junto da Comissão Nacional de Proteção de Dados (CNPD):
                <br />
                <a 
                  href="https://www.cnpd.pt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.cnpd.pt
                </a>
              </p>
            </div>
          </div>
        </div>
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

export default Privacy;
