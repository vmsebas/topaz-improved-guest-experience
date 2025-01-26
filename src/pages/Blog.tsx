import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Los Tranvías Históricos de Lisboa",
      description: "Descubre la historia y el encanto de los icónicos tranvías amarillos que recorren las empinadas calles de Lisboa.",
      image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b",
      date: "15 Marzo 2024",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Barrio de Alfama: El Corazón del Fado",
      description: "Explora el barrio más antiguo de Lisboa, donde el fado resuena en sus estrechas calles empedradas.",
      image: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b",
      date: "14 Marzo 2024",
      readTime: "6 min"
    },
    {
      id: 3,
      title: "Pastéis de Belém: El Dulce Secreto de Lisboa",
      description: "La historia detrás del famoso pastel de nata y por qué debes visitar la pastelería original en Belém.",
      image: "https://images.unsplash.com/photo-1577057825455-0c48ccd82b94",
      date: "13 Marzo 2024",
      readTime: "4 min"
    },
    {
      id: 4,
      title: "Torre de Belém: Guardián del Tajo",
      description: "La historia de este monumento UNESCO y su papel en la Era de los Descubrimientos portugueses.",
      image: "https://images.unsplash.com/photo-1589292533500-13077b9c21a7",
      date: "12 Marzo 2024",
      readTime: "7 min"
    },
    {
      id: 5,
      title: "Mercado da Ribeira: Sabores de Lisboa",
      description: "Una guía del famoso mercado Time Out, donde la tradición se encuentra con la innovación culinaria.",
      image: "https://images.unsplash.com/photo-1555881400-891c0617c753",
      date: "11 Marzo 2024",
      readTime: "5 min"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F1F0FB]/50">
      <Navbar />
      <div className="container px-4 py-16 mx-auto">
        <div className="space-y-8">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight text-primary">Blog de Lisboa</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre los secretos, la historia y la cultura de una de las ciudades más hermosas de Europa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link key={article.id} to={`/blog/${article.id}`} className="group">
                <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg bg-white border-none animate-fade-in">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription>{article.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;