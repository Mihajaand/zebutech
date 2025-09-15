import { useState, useEffect } from "react";
import {
  Home,
  ArrowLeft,
  Search,
  Zap,
  Sparkles,
  Navigation,
} from "lucide-react";

// Typages pour les particules et éléments flottants
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  duration: number;
}

const NotFound = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>(
    [],
  );

  useEffect(() => {
    // Effet glitch aléatoire
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, 4000);

    // Générer des particules
    const particlesArray: Particle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 2,
    }));
    setParticles(particlesArray);

    // Générer des éléments flottants
    const floatingArray: FloatingElement[] = Array.from(
      { length: 8 },
      (_, i) => ({
        id: i,
        x: Math.random() * 90 + 5,
        y: Math.random() * 90 + 5,
        rotation: Math.random() * 360,
        scale: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 20 + 10,
      }),
    );
    setFloatingElements(floatingArray);

    return () => clearInterval(glitchInterval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <div
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-white via-indigo-50 to-indigo-100"
      onMouseMove={handleMouseMove}
    >
      {/* Formes géométriques d'arrière-plan */}
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className="absolute opacity-10"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            transform: `rotate(${element.rotation}deg) scale(${element.scale})`,
            animation: `float ${element.duration}s ease-in-out infinite`,
          }}
        >
          <div className="h-16 w-16 rotate-45 transform rounded-lg bg-gradient-to-br from-indigo-300 to-blue-400" />
        </div>
      ))}

      {/* Particules minimales */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute h-1 w-1 rounded-full bg-indigo-300/40"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: `pulse ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
            transform: `scale(${particle.size})`,
          }}
        />
      ))}

      {/* Grille subtile */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Orbe lumineux qui suit la souris */}
      <div
        className="bg-gradient-radial pointer-events-none absolute h-80 w-80 rounded-full from-indigo-200/30 to-transparent blur-3xl transition-all duration-1000 ease-out"
        style={{
          left: `${mousePosition.x * 100}%`,
          top: `${mousePosition.y * 100}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Contenu principal */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Logo Zebutech */}
        <div className="mb-12 inline-block">
          <div className="relative">
            <div className="absolute inset-0 scale-110 transform rounded-2xl bg-gradient-to-r from-indigo-300 to-blue-400 opacity-40 blur-xl" />
            <div className="relative rounded-2xl border border-indigo-200 bg-white/80 p-6 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:shadow-indigo-200/50">
              {/* Logo placeholder - remplacez par votre vraie image */}
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400 to-blue-500">
                <span className="text-xl font-bold text-white">Z</span>
              </div>
              {/* Commentez cette ligne et décommentez celle du dessus pour utiliser votre logo */}
              {/* <img src={logoZebutech} alt="Zebutech" className="w-16 h-16 object-contain" /> */}
            </div>
            <Sparkles className="absolute -top-2 -right-2 h-6 w-6 animate-spin text-indigo-400" />
            <Navigation className="absolute -bottom-2 -left-2 h-5 w-5 animate-bounce text-blue-400" />
          </div>
        </div>

        {/* Titre 404 avec effet glitch moderne */}
        <div className="relative mb-8">
          <h1
            className={`relative bg-gradient-to-r from-blue-900 via-indigo-600 to-blue-900 bg-clip-text text-8xl font-black text-transparent transition-all duration-200 md:text-9xl ${
              glitchActive ? "scale-105 transform blur-[1px]" : ""
            }`}
            style={{
              fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
              letterSpacing: "-0.05em",
            }}
          >
            404
          </h1>
          {/* Effet de dédoublement subtil */}
          {glitchActive && (
            <>
              <h1 className="pointer-events-none absolute inset-0 translate-x-1 -translate-y-1 transform text-8xl font-black text-indigo-400 opacity-30 blur-[0.5px] md:text-9xl">
                404
              </h1>
              <h1 className="pointer-events-none absolute inset-0 -translate-x-1 translate-y-1 transform text-8xl font-black text-blue-500 opacity-20 blur-[0.5px] md:text-9xl">
                404
              </h1>
            </>
          )}
        </div>

        {/* Texte principal élégant */}
        <div className="mb-12 space-y-6">
          <h2
            className="mb-6 text-4xl font-bold text-blue-900 md:text-5xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Page Introuvable
          </h2>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed font-medium text-blue-800/80">
            Oops ! La page que vous recherchez semble avoir disparu dans
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text font-bold text-transparent">
              {" "}
              l'espace numérique
            </span>
            .
          </p>
          <p className="mx-auto max-w-xl text-lg text-blue-700/70">
            Ne vous inquiétez pas, nous allons vous aider à retrouver votre
            chemin.
          </p>

          {/* Barre de recherche moderne */}
          <div className="relative mx-auto mt-10 max-w-lg">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-300 to-blue-400 opacity-20 blur-lg"></div>
            <div className="relative flex items-center rounded-full border-2 border-indigo-200 bg-white/90 p-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-indigo-200/50">
              <Search className="ml-4 h-5 w-5 text-indigo-500" />
              <input
                type="text"
                placeholder="Rechercher sur notre site..."
                className="flex-1 bg-transparent px-4 py-3 font-medium text-blue-900 placeholder-blue-500/60 outline-none"
              />
              <button className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 px-8 py-3 font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-indigo-300/40">
                <Zap className="h-4 w-4 transition-transform group-hover:rotate-12" />
                Rechercher
              </button>
            </div>
          </div>
        </div>

        {/* Boutons d'action élégants */}
        <div className="mb-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <button className="group relative flex transform items-center gap-3 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 px-10 py-4 font-bold text-white shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-300/40">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-blue-500 opacity-50 blur-md transition-all duration-500 group-hover:blur-lg"></div>
            <Home className="relative h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            <span className="relative">Retour à l'accueil</span>
          </button>

          <button className="group flex items-center gap-3 rounded-full border-2 border-indigo-300 bg-white/80 px-10 py-4 font-bold text-blue-900 backdrop-blur-sm transition-all duration-300 hover:border-indigo-400 hover:bg-white hover:shadow-lg hover:shadow-indigo-200/30">
            <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-2" />
            Page précédente
          </button>
        </div>

        {/* Cartes statistiques élégantes */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              label: "Solutions Créées",
              value: "1000+",
              icon: "🚀",
              gradient: "from-indigo-400 to-blue-500",
            },
            {
              label: "Clients Satisfaits",
              value: "99.9%",
              icon: "💎",
              gradient: "from-blue-400 to-indigo-500",
            },
            {
              label: "Support 24/7",
              value: "Toujours",
              icon: "⚡",
              gradient: "from-indigo-500 to-blue-600",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="group transform rounded-3xl border-2 border-indigo-200 bg-white/70 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-indigo-300 hover:bg-white/90 hover:shadow-xl hover:shadow-indigo-200/30"
            >
              <div className="mb-4 transform text-4xl transition-transform duration-300 group-hover:scale-110">
                {stat.icon}
              </div>
              <div
                className={`bg-gradient-to-r text-3xl font-black ${stat.gradient} mb-2 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105`}
              >
                {stat.value}
              </div>
              <div className="font-semibold text-blue-800/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Vignette subtile */}
      <div className="bg-gradient-radial pointer-events-none absolute inset-0 from-transparent via-transparent to-indigo-100/30" />

      {/* Styles CSS pour les animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
          50% {
            transform: translateY(-20px) rotate(180deg) scale(1.1);
          }
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default NotFound;
