import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { useState, useEffect } from "react";
import { FaMailBulk, FaPhone } from "react-icons/fa";

// Images exotiques claires de Madagascar
const images = [
  {
    src: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?w=1920&h=800&fit=crop&q=80&auto=format",
    alt: "Avenue des Baobabs, Madagascar",
    title: "ZEBUTECH",
    subtitle: "L'île Rouge rencontre l'innovation technologique",
    description: "Zebutech transforme Madagascar en hub digital de référence",
  },
  {
    src: "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?w=1920&h=800&fit=crop&q=80&auto=format",
    alt: "Plages paradisiaques de Madagascar",
    title: "INNOVATION TROPICALE",
    subtitle: "Solutions technologiques sous les tropiques",
    description: "Développement web et mobile adapté au marché malgache",
  },
  {
    src: "https://images.pexels.com/photos/6249424/pexels-photo-6249424.jpeg?w=1920&h=800&fit=crop&q=80&auto=format",
    alt: "Paysages montagneux de Madagascar",
    title: "EXCELLENCE LOCALE",
    subtitle: "Une expertise technique made in Madagascar",
    description:
      "Zebutech, votre partenaire digital de confiance à Antananarivo",
  },
  {
    src: "https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?w=1920&h=800&fit=crop&q=80&auto=format",
    alt: "Rizières en terrasses Madagascar",
    title: "CROISSANCE DURABLE",
    subtitle: "Technologie respectueuse de l'environnement",
    description: "Des solutions digitales éco-responsables pour Madagascar",
  },
  {
    src: "https://images.pexels.com/photos/4417546/pexels-photo-4417546.jpeg?w=1920&h=800&fit=crop&q=80&auto=format",
    alt: "Forêt tropicale Madagascar",
    title: "BIODIVERSITÉ DIGITALE",
    subtitle: "Diversifiez vos projets avec nos services",
    description: "Applications web, e-commerce et solutions sur mesure",
  },
];

// Hook personnalisé pour l'effet de frappe
function useTypewriter(text: string, speed = 100, startDelay = 500) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsTyping(false);

    const startTimeout = setTimeout(() => {
      setIsTyping(true);
      let index = 0;

      const typeInterval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.substring(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          clearInterval(typeInterval);
        }
      }, speed);

      return () => clearInterval(typeInterval);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, startDelay]);

  return { displayedText, isTyping };
}

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // Hooks pour les effets de frappe
  const titleTypewriter = useTypewriter(images[current].title, 80, 1000);
  const subtitleTypewriter = useTypewriter(images[current].subtitle, 60, 2200);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      next();
    }, 8000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="group relative mb-16 w-full overflow-hidden rounded-none bg-gray-900 shadow-2xl">
      {/* Container principal - 800px height */}
      <div className="relative h-[800px] w-full">
        {/* Image de fond claire avec luminosité améliorée */}
        <div className="absolute inset-0 transform transition-transform duration-1000 ease-out group-hover:scale-105">
          <img
            src={images[current].src}
            alt={images[current].alt}
            className="h-full w-full object-cover brightness-110 contrast-110 saturate-110 transition-all duration-1000 ease-out"
          />
        </div>

        {/* Overlays de gradient légers pour garder la clarté */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/10 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

        {/* Contrôle play/pause - Position top right */}
        <div className="absolute top-8 right-8 z-20">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="rounded-full border border-white/30 bg-white/20 p-3 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 hover:scale-110 hover:bg-white/30"
          >
            {isPlaying ? (
              <Pause className="h-5 w-5 text-white" />
            ) : (
              <Play className="ml-0.5 h-5 w-5 text-white" />
            )}
          </button>
        </div>

        {/* Effets de particules dorées - thème Madagascar */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 h-2 w-2 animate-ping rounded-full bg-yellow-400"></div>
          <div className="animate-delay-1000 absolute top-1/3 right-1/3 h-1 w-1 animate-ping rounded-full bg-orange-400"></div>
          <div className="animate-delay-2000 absolute bottom-1/3 left-1/5 h-1.5 w-1.5 animate-ping rounded-full bg-red-400"></div>
          <div className="animate-delay-3000 absolute top-2/3 right-1/4 h-1 w-1 animate-ping rounded-full bg-yellow-300"></div>
          <div className="animate-delay-4000 absolute bottom-1/4 left-1/2 h-1 w-1 animate-ping rounded-full bg-orange-300"></div>
        </div>

        {/* Contenu principal centré */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-8 text-center">
          {/* Logo Zebutech - Centré en haut du contenu */}
          <div
            className={`mb-8 transform transition-all delay-200 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}`}
          ></div>

          {/* Section titre principal avec effet de frappe */}
          <div
            className={`mb-8 transform transition-all delay-400 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <h1 className="mb-4 min-h-[4rem] bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 bg-clip-text text-4xl font-black tracking-tight text-transparent md:min-h-[6rem] md:text-6xl lg:min-h-[7rem] lg:text-7xl">
              {titleTypewriter.displayedText}
              {titleTypewriter.isTyping && (
                <span className="animate-pulse text-blue-500">|</span>
              )}
            </h1>
            {/* Ligne décorative aux couleurs de Madagascar */}
            <div className="mx-auto h-1 w-32 animate-pulse rounded-full bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 md:w-40"></div>
          </div>

          {/* Section sous-titre avec effet de frappe */}
          <div
            className={`mb-6 transform transition-all delay-600 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <h2 className="min-h-[2rem] text-xl font-bold tracking-wide text-white drop-shadow-2xl md:min-h-[3rem] md:text-3xl lg:min-h-[4rem] lg:text-4xl">
              {subtitleTypewriter.displayedText}
              {subtitleTypewriter.isTyping && (
                <span className="animate-pulse text-white">|</span>
              )}
            </h2>
          </div>

          {/* Section description */}
          <div
            className={`mb-8 transform transition-all delay-800 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <p className="max-w-4xl text-lg leading-relaxed font-light text-gray-100 md:text-xl lg:text-2xl">
              {images[current].description}
            </p>
          </div>

          {/* Section boutons CTA */}
          <div
            className={`flex transform flex-col gap-6 transition-all delay-1000 duration-1000 md:flex-row ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <button
              onClick={() => {
                const scrollValue = window.innerWidth < 768 ? 500 : 3000; // mobile <768px
                window.scrollBy({ top: scrollValue, behavior: "smooth" });
              }}
              className="group/btn transform cursor-pointer rounded-full bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-300 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-110 hover:rotate-1 hover:shadow-2xl hover:shadow-yellow-500/25"
            >
              <span className="group-hover/btn:animate-pulse">
                Nos Services
              </span>
            </button>
            <button
              onClick={() => {
                const scrollValue = window.innerWidth < 768 ? 500 : 900; // mobile <768px
                window.scrollBy({ top: scrollValue, behavior: "smooth" });
              }}
              className="cursor-pointer rounded-full border-2 border-white/60 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:bg-white hover:text-gray-900"
            >
              Découvrir Zebutech.com
            </button>
          </div>

          {/* Contact info */}
          <div
            className={`mt-8 transform transition-all delay-1200 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <FaMailBulk /> zebutech.madagascar@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <FaPhone /> +261 34 23 637 27
              </span>
              <span className="flex items-center gap-2">
                🌐 www.zebutech.com
              </span>
            </div>
          </div>
        </div>

        {/* Navigation - Bouton précédent avec couleurs indigo */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-6 z-20 -translate-y-1/2 rounded-full border border-indigo-300/30 bg-indigo-300/20 p-4 opacity-0 shadow-2xl backdrop-blur-md transition-all duration-500 group-hover:opacity-100 hover:scale-125 hover:rotate-12 hover:bg-indigo-300/30"
        >
          <ChevronLeft className="h-8 w-8 text-indigo-300 drop-shadow-lg" />
        </button>

        {/* Navigation - Bouton suivant avec couleurs indigo */}
        <button
          onClick={next}
          className="absolute top-1/2 right-6 z-20 -translate-y-1/2 rounded-full border border-indigo-300/30 bg-indigo-300/20 p-4 opacity-0 shadow-2xl backdrop-blur-md transition-all duration-500 group-hover:opacity-100 hover:scale-125 hover:-rotate-12 hover:bg-indigo-300/30"
        >
          <ChevronRight className="h-8 w-8 text-indigo-300 drop-shadow-lg" />
        </button>

        {/* Indicateurs de progression - Couleurs indigo */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`relative overflow-hidden rounded-full transition-all duration-500 ${
                index === current
                  ? "h-3 w-12 bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-500 shadow-lg shadow-indigo-400/50"
                  : "h-3 w-3 bg-indigo-300/40 hover:scale-125 hover:bg-indigo-300/70"
              }`}
            >
              {index === current && (
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-white/0 via-white/40 to-white/0"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
