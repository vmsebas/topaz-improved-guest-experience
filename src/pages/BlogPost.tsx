import { useParams } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const BlogPost = () => {
  const { id } = useParams();

  const articles = {
    "1": {
      title: "Los Tranvías Históricos de Lisboa",
      description: "Descubre la historia y el encanto de los icónicos tranvías amarillos que recorren las empinadas calles de Lisboa.",
      image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b",
      date: "15 Marzo 2024",
      readTime: "5 min",
      content: `
        Los tranvías de Lisboa son mucho más que un simple medio de transporte; son un símbolo viviente de la rica historia y cultura de la ciudad. Desde 1901, estos icónicos vehículos amarillos han estado navegando por las empinadas y estrechas calles de la capital portuguesa, convirtiéndose en una parte integral del paisaje urbano.

        El famoso Tranvía 28, en particular, es considerado una atracción turística imprescindible. Su ruta serpentea a través de los barrios históricos más pintorescos de Lisboa, incluyendo Alfama, Baixa, y Estrela, ofreciendo a los pasajeros vistas panorámicas incomparables de la ciudad.

        Los tranvías originales, conocidos como "remodelados", fueron construidos en la primera mitad del siglo XX y han sido cuidadosamente restaurados para preservar su encanto vintage mientras se adaptan a los estándares modernos de seguridad y comodidad. Sus interiores de madera pulida y sus característicos asientos reversibles son un testimonio del artesanado tradicional portugués.

        Para los lisboetas, estos tranvías representan un vínculo tangible con el pasado de su ciudad, mientras que para los visitantes, ofrecen una forma única y auténtica de explorar Lisboa. El traqueteo distintivo de las ruedas sobre los rieles y el tintineo de las campanas se han convertido en parte de la banda sonora de la vida cotidiana en Lisboa.
      `
    },
    "2": {
      title: "Barrio de Alfama: El Corazón del Fado",
      description: "Explora el barrio más antiguo de Lisboa, donde el fado resuena en sus estrechas calles empedradas.",
      image: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b",
      date: "14 Marzo 2024",
      readTime: "6 min",
      content: `
        Alfama, el barrio más antiguo de Lisboa, es un laberinto de callejuelas estrechas y empedradas que serpentean entre casas tradicionales y patios escondidos. Este histórico distrito, que sobrevivió al devastador terremoto de 1755, mantiene su carácter medieval y es considerado el corazón espiritual del fado, la música tradicional portuguesa.

        Por las noches, las melancólicas melodías del fado emergen de las numerosas casas de fado del barrio. Esta música, reconocida como Patrimonio Cultural Inmaterial por la UNESCO, cuenta historias de amor, pérdida y la vida cotidiana, capturando la esencia del concepto portugués de "saudade" - un sentimiento profundo de nostalgia y anhelo.

        Los edificios de Alfama están adornados con azulejos tradicionales portugueses, balcones de hierro forjado y ropa tendida entre ventanas, creando una atmósfera auténtica y pintoresca. Las pequeñas plazas (largos) sirven como puntos de encuentro para los vecinos, donde los ancianos juegan a las cartas y los niños juegan al fútbol.

        Los miradores (miradouros) de Alfama ofrecen algunas de las vistas más impresionantes sobre el río Tajo y los tejados de terracota de Lisboa. El Miradouro de Santa Luzia y el Miradouro das Portas do Sol son especialmente populares para contemplar el atardecer sobre la ciudad.
      `
    },
    "3": {
      title: "Pastéis de Belém: El Dulce Secreto de Lisboa",
      description: "La historia detrás del famoso pastel de nata y por qué debes visitar la pastelería original en Belém.",
      image: "https://images.unsplash.com/photo-1577057825455-0c48ccd82b94",
      date: "13 Marzo 2024",
      readTime: "4 min",
      content: `
        Los Pastéis de Belém son mucho más que un simple postre; son un tesoro nacional portugués con una historia que se remonta a 1837. La receta original, creada por los monjes del Monasterio de los Jerónimos, sigue siendo un secreto bien guardado, conocido solo por unos pocos pasteleros de la histórica Fábrica de Pastéis de Belém.

        Estos delicados pasteles de hojaldre rellenos de crema de huevo se distinguen de otros pastéis de nata por su receta única y el ambiente histórico donde se sirven. La fábrica original en Belém produce miles de pasteles cada día, horneados frescos y servidos calientes, espolvoreados con canela y azúcar en polvo.

        La experiencia de degustar un Pastel de Belém en la pastelería histórica, con sus azulejos azules y blancos y salas interconectadas, es un ritual que tanto locales como turistas disfrutan. Las largas filas que se forman fuera del establecimiento son testimonio de su popularidad y excelencia continua.

        A pesar de los numerosos intentos de replicar estos pasteles en todo el mundo, los verdaderos Pastéis de Belém solo se pueden encontrar en esta ubicación histórica, donde la tradición y el sabor se han mantenido intactos durante casi dos siglos.
      `
    },
    "4": {
      title: "Torre de Belém: Guardián del Tajo",
      description: "La historia de este monumento UNESCO y su papel en la Era de los Descubrimientos portugueses.",
      image: "https://images.unsplash.com/photo-1589292533500-13077b9c21a7",
      date: "12 Marzo 2024",
      readTime: "7 min",
      content: `
        La Torre de Belém, construida entre 1514 y 1520, es uno de los monumentos más emblemáticos de Lisboa y un sobresaliente ejemplo de la arquitectura manuelina. Este estilo único combina elementos góticos tardíos con motivos marítimos y descubrimientos, reflejando la era dorada de la exploración portuguesa.

        Originalmente diseñada como parte del sistema de defensa del río Tajo y como puerta ceremonial de Lisboa, la torre ha sido testigo de siglos de historia marítima portuguesa. Sus elaboradas decoraciones incluyen nudos de cuerda esculpidos, esferas armilares, y la cruz de la Orden de Cristo, símbolos que representan el poder marítimo portugués.

        La torre de cinco pisos combina una base cuadrada con una torre cilíndrica, característica de la arquitectura militar medieval. Cada nivel ofrece vistas únicas del río y la ciudad, y el bastión inferior, que sobresale sobre el agua, cuenta con cañoneras en forma de trébol, una innovación en el diseño militar de la época.

        Declarada Patrimonio de la Humanidad por la UNESCO en 1983, la Torre de Belém no solo es un símbolo de la Era de los Descubrimientos portugueses, sino también un recordatorio del rico patrimonio marítimo de Lisboa y su papel histórico como punto de partida para las expediciones que cambiaron el mundo.
      `
    },
    "5": {
      title: "Mercado da Ribeira: Sabores de Lisboa",
      description: "Una guía del famoso mercado Time Out, donde la tradición se encuentra con la innovación culinaria.",
      image: "https://images.unsplash.com/photo-1555881400-891c0617c753",
      date: "11 Marzo 2024",
      readTime: "5 min",
      content: `
        El Mercado da Ribeira, ahora conocido como Time Out Market Lisboa, representa la perfecta fusión entre la tradición culinaria portuguesa y la innovación gastronómica moderna. Este histórico mercado, que ha estado en funcionamiento desde 1892, se reinventó en 2014 cuando Time Out Lisboa transformó parte del espacio en un sofisticado mercado gastronómico.

        El mercado tradicional sigue operando en las mañanas, donde los vendedores locales ofrecen productos frescos, pescados, carnes y flores. Esta sección mantiene viva la esencia del antiguo mercado y proporciona una visión auténtica de la vida cotidiana lisboeta.

        La zona del Time Out Market reúne a algunos de los mejores chefs y restaurantes de Lisboa bajo un mismo techo. Aquí, los visitantes pueden degustar desde platos tradicionales portugueses hasta creaciones contemporáneas innovadoras. Los quioscos cuidadosamente seleccionados representan lo mejor de la gastronomía local.

        El espacio común de comedor, con sus largas mesas comunales, fomenta una experiencia social única donde locales y turistas se mezclan, compartiendo no solo el espacio sino también el amor por la buena comida. El mercado se ha convertido en un punto de encuentro cultural que celebra la rica tradición culinaria de Lisboa mientras mira hacia el futuro.
      `
    }
  };

  const article = articles[id as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Artículo no encontrado</h1>
            <Link to="/blog" className="text-primary hover:underline mt-4 block">
              Volver al blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-8">
        <div className="container max-w-[1000px] px-4 mx-auto">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/" className="text-muted-foreground hover:text-foreground">
                  Inicio
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{article.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <article className="max-w-4xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                {article.title}
              </h1>
              <div className="flex items-center gap-2 text-base text-muted-foreground">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime} de lectura</span>
              </div>
            </div>

            <div className="aspect-[16/9] relative overflow-hidden rounded-lg mt-8">
              <img
                src={article.image}
                alt={article.title}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="mt-8 prose prose-lg max-w-none">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-lg text-muted-foreground leading-relaxed">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;