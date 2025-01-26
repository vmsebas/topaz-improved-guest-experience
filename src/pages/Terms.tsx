import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
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

        <h1 className="text-4xl font-bold mb-8">Termos e Condições</h1>
        
        <div className="prose prose-lg max-w-none">
          <h2>1. Introdução</h2>
          <p>Bem-vindo ao Lisbon Tiles. Ao acessar e usar nosso site, você concorda com estes termos e condições de uso.</p>

          <h2>2. Reservas e Pagamentos</h2>
          <p>2.1. As reservas estão sujeitas à disponibilidade e confirmação.</p>
          <p>2.2. O pagamento pode ser feito através dos métodos disponíveis no momento da reserva.</p>
          <p>2.3. Podem ser aplicadas taxas de cancelamento de acordo com a política de cancelamento em vigor.</p>

          <h2>3. Regras de Hospedagem</h2>
          <p>3.1. O check-in é realizado a partir das 15:00 e o check-out até às 11:00.</p>
          <p>3.2. Os hóspedes devem respeitar as regras do condomínio e manter o ambiente tranquilo.</p>
          <p>3.3. É proibido fumar dentro das instalações.</p>

          <h2>4. Responsabilidades</h2>
          <p>4.1. O Lisbon Tiles não se responsabiliza por objetos pessoais deixados nas acomodações.</p>
          <p>4.2. Os hóspedes são responsáveis por quaisquer danos causados à propriedade.</p>

          <h2>5. Lei Aplicável</h2>
          <p>Estes termos são regidos pela lei portuguesa e europeia. Qualquer disputa será resolvida nos tribunais de Lisboa, Portugal.</p>

          <h2>6. Alterações aos Termos</h2>
          <p>Reservamo-nos o direito de modificar estes termos a qualquer momento, publicando a versão atualizada neste site.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;