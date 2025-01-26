import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Terms = () => {
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
              <BreadcrumbPage>Termos e Condições</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Termos e Condições</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bem-vindo ao Lisbon Tiles. Ao acessar e usar nosso site, você concorda com estes termos e condições de uso.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-4 text-primary">1. Introdução</h2>
            <p className="text-muted-foreground">
              Estes termos e condições regem o uso do nosso site e serviços. Ao utilizar nossos serviços, você concorda em cumprir estes termos.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-4 text-primary">2. Reservas e Pagamentos</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>As reservas estão sujeitas à disponibilidade e confirmação.</li>
              <li>O pagamento pode ser feito através dos métodos disponíveis no momento da reserva.</li>
              <li>Podem ser aplicadas taxas de cancelamento de acordo com a política de cancelamento em vigor.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-4 text-primary">3. Regras de Hospedagem</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>O check-in é realizado a partir das 15:00 e o check-out até às 11:00.</li>
              <li>Os hóspedes devem respeitar as regras do condomínio e manter o ambiente tranquilo.</li>
              <li>É proibido fumar dentro das instalações.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-4 text-primary">4. Responsabilidades</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>O Lisbon Tiles não se responsabiliza por objetos pessoais deixados nas acomodações.</li>
              <li>Os hóspedes são responsáveis por quaisquer danos causados à propriedade.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-4 text-primary">5. Lei Aplicável</h2>
            <p className="text-muted-foreground">
              Estes termos são regidos pela lei portuguesa e europeia. Qualquer disputa será resolvida nos tribunais de Lisboa, Portugal.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-4 text-primary">6. Alterações aos Termos</h2>
            <p className="text-muted-foreground">
              Reservamo-nos o direito de modificar estes termos a qualquer momento, publicando a versão atualizada neste site.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;