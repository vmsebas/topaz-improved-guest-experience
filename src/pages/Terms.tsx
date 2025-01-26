import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Terms = () => {
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
              <BreadcrumbPage>Termos e Condições</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Termos e Condições</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Última atualização: {new Date().toLocaleDateString('pt-PT')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-4 text-primary">1. Informações Gerais</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>Lisbon Tiles, sociedade comercial com sede em Lisboa, Portugal, NIPC [Número], com sede em [Morada], doravante designada como "Lisbon Tiles" ou "nós".</p>
              <p>Estes Termos e Condições regem o uso do nosso website e serviços, em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) e a Lei n.º 58/2019 de 8 de agosto.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-4 text-primary">2. Aceitação dos Termos</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>Ao utilizar nosso website e serviços, você concorda expressamente com estes Termos e Condições.</p>
              <p>Se não concordar com qualquer parte destes termos, solicitamos que não utilize nossos serviços.</p>
              <p>Reservamo-nos o direito de modificar estes termos a qualquer momento, sendo as alterações válidas após sua publicação no website.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-4 text-primary">3. Serviços e Reservas</h2>
            <div className="space-y-2 text-muted-foreground">
              <h3 className="font-medium text-gray-700">3.1. Processo de Reserva</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>As reservas estão sujeitas à disponibilidade e confirmação.</li>
                <li>Preços incluem IVA à taxa legal em vigor.</li>
                <li>Pagamentos processados de acordo com o Decreto-Lei n.º 91/2018.</li>
              </ul>
              <h3 className="font-medium text-gray-700 mt-4">3.2. Cancelamentos</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Cancelamento gratuito até 48 horas antes do check-in.</li>
                <li>Cancelamentos posteriores sujeitos a cobrança conforme política vigente.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-4 text-primary">4. Direitos e Obrigações</h2>
            <div className="space-y-2 text-muted-foreground">
              <h3 className="font-medium text-gray-700">4.1. Nossos Direitos</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Modificar ou descontinuar serviços com aviso prévio.</li>
                <li>Recusar serviço a qualquer momento.</li>
                <li>Atualizar preços e condições.</li>
              </ul>
              <h3 className="font-medium text-gray-700 mt-4">4.2. Suas Obrigações</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Fornecer informações verdadeiras e atualizadas.</li>
                <li>Cumprir regras de utilização e conduta.</li>
                <li>Respeitar direitos de propriedade intelectual.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-4 text-primary">5. Proteção de Dados</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>Em conformidade com o RGPD (Regulamento UE 2016/679) e a Lei n.º 58/2019:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Dados pessoais tratados conforme nossa Política de Privacidade.</li>
                <li>Direito de acesso, retificação e eliminação de dados.</li>
                <li>Transferências de dados seguem normas do RGPD.</li>
                <li>Medidas técnicas e organizativas de proteção implementadas.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-4 text-primary">6. Responsabilidade e Limitações</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>De acordo com a legislação portuguesa e europeia:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Responsabilidade limitada conforme Lei n.º 24/96.</li>
                <li>Exclusão de responsabilidade por força maior.</li>
                <li>Danos limitados ao valor do serviço contratado.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-4 text-primary">7. Resolução de Conflitos</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>Para resolução de litígios:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Tribunal competente: Comarca de Lisboa.</li>
                <li>Lei aplicável: Lei portuguesa.</li>
                <li>Resolução alternativa de litígios disponível através do Centro de Arbitragem de Conflitos de Consumo de Lisboa.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-4 text-primary">8. Disposições Finais</h2>
            <div className="space-y-2 text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                <li>Invalidade parcial não afeta restantes disposições.</li>
                <li>Versão portuguesa prevalece em caso de discrepância.</li>
                <li>Comunicações devem ser feitas por escrito.</li>
              </ul>
              <p className="mt-4">Para questões ou esclarecimentos:</p>
              <p>Email: legal@lisbontiles.com</p>
              <p>Telefone: [Número]</p>
              <p>Morada: [Endereço completo]</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
