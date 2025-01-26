import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Cookies = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#F1F0FB] to-white">
      <Navbar />
      <main className="flex-1 container py-20">
        <Breadcrumb className="mb-8 animate-fade-in">
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

        <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in hover:shadow-xl transition-all duration-300">
          <h1 className="text-4xl font-bold mb-8 text-primary bg-gradient-to-r from-[#D3E4FD] to-[#F1F0FB] bg-clip-text text-transparent">
            Política de Cookies
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <div className="bg-[#F1F0FB]/30 p-6 rounded-lg">
              <p className="lead">Esta Política de Cookies explica como o Lisbon Tiles usa cookies e tecnologias similares em nosso website.</p>
            </div>

            <div className="bg-[#F1F0FB]/30 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-primary">1. O que são Cookies?</h2>
              <p>Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você visita nosso site.</p>
            </div>

            <div className="bg-[#F1F0FB]/30 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-primary">2. Tipos de Cookies que Usamos</h2>
              <h3 className="text-xl font-semibold text-primary">2.1. Cookies Essenciais</h3>
              <p>Necessários para o funcionamento básico do site e não podem ser desativados.</p>
              
              <h3 className="text-xl font-semibold text-primary mt-4">2.2. Cookies de Desempenho</h3>
              <p>Ajudam-nos a entender como os visitantes interagem com o site, coletando informações anônimas.</p>
              
              <h3 className="text-xl font-semibold text-primary mt-4">2.3. Cookies Funcionais</h3>
              <p>Permitem que o site lembre suas escolhas para fornecer funcionalidades aprimoradas.</p>
              
              <h3 className="text-xl font-semibold text-primary mt-4">2.4. Cookies de Marketing</h3>
              <p>Usados para rastrear visitantes em diferentes websites para exibir anúncios relevantes.</p>
            </div>

            <div className="bg-[#F1F0FB]/30 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-primary">3. Como Gerenciar Cookies</h2>
              <p>Você pode controlar e/ou excluir cookies conforme desejar:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Através das configurações do seu navegador</li>
                <li>Usando nosso painel de preferências de cookies</li>
                <li>Visitando www.aboutcookies.org</li>
              </ul>
            </div>

            <div className="bg-[#F1F0FB]/30 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-primary">4. Cookies de Terceiros</h2>
              <p>Alguns cookies são definidos por serviços de terceiros que aparecem em nossas páginas:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Google Analytics - análise de uso do site</li>
                <li>Redes sociais - botões de compartilhamento</li>
                <li>Serviços de pagamento - processamento seguro de pagamentos</li>
              </ul>
            </div>

            <div className="bg-[#F1F0FB]/30 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-primary">5. Atualizações à Política</h2>
              <p>Esta política pode ser atualizada periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre quaisquer alterações.</p>
            </div>

            <div className="bg-[#F1F0FB]/30 p-6 rounded-lg">
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