import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Cookies = () => {
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
            Esta Política de Cookies explica como o Lisbon Tiles usa cookies e tecnologias similares em nosso website.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-4 text-primary">1. O que são Cookies?</h2>
            <p className="text-muted-foreground">
              Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você visita nosso site.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-4 text-primary">2. Tipos de Cookies</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700">Cookies Essenciais</h3>
                <p className="text-muted-foreground">Necessários para o funcionamento básico do site.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Cookies de Desempenho</h3>
                <p className="text-muted-foreground">Ajudam a entender como os visitantes interagem com o site.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Cookies Funcionais</h3>
                <p className="text-muted-foreground">Permitem que o site lembre suas escolhas.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Cookies de Marketing</h3>
                <p className="text-muted-foreground">Usados para rastrear visitantes em diferentes websites.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-4 text-primary">3. Como Gerenciar Cookies</h2>
            <p className="text-muted-foreground mb-4">Você pode controlar e/ou excluir cookies conforme desejar:</p>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Através das configurações do seu navegador</li>
              <li>Usando nosso painel de preferências de cookies</li>
              <li>Visitando www.aboutcookies.org</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-4 text-primary">4. Cookies de Terceiros</h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Google Analytics - análise de uso do site</li>
              <li>Redes sociais - botões de compartilhamento</li>
              <li>Serviços de pagamento - processamento seguro</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-4 text-primary">5. Atualizações à Política</h2>
            <p className="text-muted-foreground">
              Esta política pode ser atualizada periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre quaisquer alterações.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h2 className="text-xl font-semibold mb-4 text-primary">6. Contato</h2>
            <p className="text-muted-foreground">
              Se tiver dúvidas sobre nossa política de cookies, entre em contato conosco em:
              <br />
              <a href="mailto:cookies@lisbontiles.com" className="text-primary hover:underline">
                cookies@lisbontiles.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;