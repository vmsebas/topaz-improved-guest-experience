import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Cookies = () => {
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
              <BreadcrumbPage>Política de Cookies</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-4xl font-bold mb-8">Política de Cookies</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="lead">Esta Política de Cookies explica como o Lisbon Tiles usa cookies e tecnologias similares em nosso website.</p>

          <h2>1. O que são Cookies?</h2>
          <p>Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você visita nosso site.</p>

          <h2>2. Tipos de Cookies que Usamos</h2>
          <h3>2.1. Cookies Essenciais</h3>
          <p>Necessários para o funcionamento básico do site e não podem ser desativados.</p>
          
          <h3>2.2. Cookies de Desempenho</h3>
          <p>Ajudam-nos a entender como os visitantes interagem com o site, coletando informações anônimas.</p>
          
          <h3>2.3. Cookies Funcionais</h3>
          <p>Permitem que o site lembre suas escolhas para fornecer funcionalidades aprimoradas.</p>
          
          <h3>2.4. Cookies de Marketing</h3>
          <p>Usados para rastrear visitantes em diferentes websites para exibir anúncios relevantes.</p>

          <h2>3. Como Gerenciar Cookies</h2>
          <p>Você pode controlar e/ou excluir cookies conforme desejar:</p>
          <ul>
            <li>Através das configurações do seu navegador</li>
            <li>Usando nosso painel de preferências de cookies</li>
            <li>Visitando www.aboutcookies.org</li>
          </ul>

          <h2>4. Cookies de Terceiros</h2>
          <p>Alguns cookies são definidos por serviços de terceiros que aparecem em nossas páginas:</p>
          <ul>
            <li>Google Analytics - análise de uso do site</li>
            <li>Redes sociais - botões de compartilhamento</li>
            <li>Serviços de pagamento - processamento seguro de pagamentos</li>
          </ul>

          <h2>5. Atualizações à Política</h2>
          <p>Esta política pode ser atualizada periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre quaisquer alterações.</p>

          <h2>6. Contato</h2>
          <p>Se tiver dúvidas sobre nossa política de cookies, entre em contato conosco em cookies@lisbontiles.com</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;