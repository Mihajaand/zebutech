import React, { useState } from "react";
import {
  Calendar,
  Clock,
  ChevronRight,
  Search,
  Filter,
  ArrowUp,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";
import Footer from "../components/Footer";
import { NavbarComponent } from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import frenchTech from "./../assets/img/sergio/french-tech.jpg";
import sergio from "./../assets/img/sergio/sergio1.jpeg";
import matreriel from "./../assets/img/kesykely/materiel-kesy-kely.jpg";

const Actualite = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Actualités basées sur le document PDF et le site ZebuTech
  const newsArticles = [
    {
      id: 1,
      title: "ZebuTech au cœur de l'Innovation Technologique dans le Tourisme",
      excerpt:
        "Sergio Fleurys RAKOTOZAFY, CEO de ZebuTech Madagascar, participe à l'Afterwork sur l'Innovation Technologique dans le secteur du Tourisme organisé par la CTM au KudétA Anosy.",
      image: sergio,
      date: "2024-07-04",
      category: "Événements",
      readTime: "4 min",
      featured: true,
      content:
        "L'événement a souligné l'importance des outils technologiques dans les activités touristiques et l'évolution positive qu'ils apportent. La nécessité de renforcer la fiabilité des informations et la digitalisation des opérations a été mise en avant.",
    },
    {
      id: 2,
      title:
        "Salon RSE-IDD 2024 : ZebuTech s'engage pour le Développement Durable",
      excerpt:
        "La Confédération du Tourisme de Madagascar, dont ZebuTech est membre, participe au 9ème Salon RSE et IDD au Novotel Convention and Spa Antananarivo.",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2024-07-11",
      category: "RSE",
      readTime: "3 min",
      featured: true,
      content:
        "L'événement axé sur 'De la prise de conscience à l'action' met l'accent sur l'accélération de l'engagement des organisations dans les initiatives durables.",
    },
    {
      id: 3,
      title:
        "French Tech Roundtable : Renforcer l'écosystème technologique malgache",
      excerpt:
        "ZebuTech participe activement au French Tech Roundtable, consolidant sa position dans l'écosystème tech de Madagascar avec les autres acteurs innovants.",
      image: frenchTech,
      date: "2024-07-15",
      category: "Événements",
      readTime: "3 min",
      featured: false,
    },
    {
      id: 4,
      title:
        "Le Marché Africain du Tourisme : Opportunités pour les Solutions Tech",
      excerpt:
        "Avec un marché touristique africain attendu à 24,42 milliards USD en 2024, les solutions technologiques comme Infhotik trouvent leur place stratégique.",
      image:
        "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2024-06-28",
      category: "Marché",
      readTime: "5 min",
      featured: false,
      content:
        "75% des revenus du tourisme proviendront des ventes en ligne d'ici 2028, confirmant l'importance des solutions digitales dans le secteur.",
    },
    {
      id: 5,
      title: "Infhotik & Kesykely : Partenariat Stratégique Renforcé",
      excerpt:
        "Notre collaboration avec Kesykely révolutionne la gestion hôtelière à Madagascar, apportant des solutions innovantes aux établissements locaux.",
      image: matreriel,
      date: "2024-06-20",
      category: "Partenariats",
      readTime: "4 min",
      featured: false,
    },
    {
      id: 6,
      title:
        "Ethiopian Airlines augmente ses fréquences : Impact sur l'hôtellerie",
      excerpt:
        "L'augmentation à 10 vols hebdomadaires vers Antananarivo stimule le secteur hôtelier, renforçant la pertinence de nos solutions Infhotik.",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2024-07-01",
      category: "Secteur",
      readTime: "3 min",
      featured: false,
    },
    {
      id: 7,
      title: "Grand Café de la Gare : Renaissance Digitale d'un Patrimoine",
      excerpt:
        "La réouverture du Grand Café de la Gare à Soarano illustre parfaitement l'alliance entre patrimoine et innovation technologique dans la restauration.",
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2024-07-08",
      category: "Inspiration",
      readTime: "4 min",
      featured: false,
      content:
        "Un exemple parfait de modernisation où la technologie peut sublimer l'expérience client tout en préservant l'authenticité.",
    },
    {
      id: 8,
      title: "INF Pocket : Solution Mobile Révolutionnaire",
      excerpt:
        "Notre nouvelle application mobile transforme la gestion des restaurants avec des fonctionnalités adaptées aux réalités malgaches.",
      image:
        "https://th.bing.com/th/id/OIP.oUTC9-WlPbZ_TOjc32KZawHaD4?w=340&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
      date: "2024-04-25",
      category: "Produits",
      readTime: "5 min",
      featured: false,
    },
  ];

  const categories = [
    "Toutes",
    "Événements",
    "Partenariats",
    "Produits",
    "RSE",
    "Marché",
    "Secteur",
    "Inspiration",
  ];

  const filteredNews = newsArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Toutes" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredNews = filteredNews.filter((article) => article.featured);
  const regularNews = filteredNews.filter((article) => !article.featured);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatDate = (dateString: any) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
  };

  const stats = [
    { icon: Users, label: "Événements", value: "+15" },
    { icon: Award, label: "Partenariats", value: "+8" },
    { icon: TrendingUp, label: "Années d'expertise", value: "+35" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <NavbarComponent />
      {/* Hero Section */}
      <section className="mt-[100px] bg-gradient-to-br from-indigo-50 via-white to-indigo-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
              Les dernière actualités de{" "}
              <span className="text-indigo-600">ZebuTech</span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600">
              Suivez notre engagement dans l'écosystème technologique malgache
              et nos innovations pour l'hôtellerie et la restauration
            </p>

            {/* Stats */}
            <div className="flex justify-center space-x-8 md:space-x-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 flex justify-center">
                    <stat.icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="border-b border-gray-100 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="relative max-w-lg flex-1">
              <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher dans nos actualités..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-gray-200 py-3 pr-4 pl-10 transition-all focus:border-indigo-300 focus:ring-2 focus:ring-indigo-300"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-indigo-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-600 hover:bg-indigo-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900">À la une</h2>
              <div className="h-1 w-24 rounded bg-indigo-300"></div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              {featuredNews.map((article) => (
                <article
                  key={article.id}
                  className="group cursor-pointer overflow-hidden rounded-3xl border border-gray-100 bg-white transition-all duration-500 hover:border-indigo-200 hover:shadow-2xl"
                >
                  {/* Image en haut pour TOUS les articles */}
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-all duration-500 group-hover:from-black/30"></div>
                    <div className="absolute top-6 left-6">
                      <span className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  {/* Contenu en bas pour TOUS les articles */}
                  <div className="p-8">
                    <div className="mb-4 flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(article.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <h3 className="mb-4 text-2xl leading-tight font-bold text-gray-900 transition-colors group-hover:text-indigo-600">
                      {article.title}
                    </h3>
                    <p className="mb-6 line-clamp-4 text-lg leading-relaxed text-gray-600">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-lg font-semibold text-indigo-600 group-hover:text-indigo-700">
                      <span>Lire l'article complet</span>
                      <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular News Grid */}
      {regularNews.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900">
                Nos dernières actualités
              </h2>
              <div className="h-1 w-24 rounded bg-indigo-300"></div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {regularNews.map((article) => (
                <article
                  key={article.id}
                  className="group cursor-pointer overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-2xl"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent transition-all duration-500 group-hover:from-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-indigo-600 px-3 py-1 text-sm font-semibold text-white shadow-md">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(article.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <h3 className="mb-3 text-xl leading-tight font-bold text-gray-900 transition-colors group-hover:text-indigo-600">
                      {article.title}
                    </h3>
                    <p className="mb-4 line-clamp-4 leading-relaxed text-gray-600">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center font-semibold text-indigo-600 group-hover:text-indigo-700">
                      <span>Découvrir</span>
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <NewsLetter />

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-8 bottom-8 z-50 cursor-pointer rounded-full bg-indigo-300 p-4 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-indigo-400"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default Actualite;
