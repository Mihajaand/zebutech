import React, { useState, useEffect, useRef } from "react";
import {
  Award,
  Shield,
  Star,
  Users,
  MapPin,
  Globe,
  Calendar,
  Building2,
  CheckCircle,
  Heart,
  Briefcase,
} from "lucide-react";

// Hook personnalisé pour l'animation du compteur
const useCountUp = (end, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!shouldStart || hasStarted) return;

    setHasStarted(true);
    let startTime;

    // Extraire la valeur numérique du string (ex: "25+" -> 25, "24" -> 24)
    const endValue = parseInt(end.toString().replace(/\D/g, ""));
    const startValue = 0;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        const current = Math.floor(
          startValue + (endValue - startValue) * progress,
        );
        setCount(current);
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, shouldStart, hasStarted]);

  // Reformater le nombre avec le suffixe original
  const formatCount = () => {
    const originalString = end.toString();

    // Cas spécial pour "24" - on ajoute "/7"
    if (originalString === "24") {
      return count + "/7";
    }

    const suffix = originalString.replace(/\d/g, ""); // Extraire les caractères non-numériques
    return count + suffix;
  };

  return formatCount();
};

// Hook pour détecter quand un élément est visible
const useIntersectionObserver = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return [elementRef, isVisible];
};

export default function About() {
  const [statsRef, isStatsVisible] = useIntersectionObserver();

  const stats = [
    {
      number: "25+",
      label: "Années d'expérience",
      icon: Calendar,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      number: "750+",
      label: "Établissements équipés",
      icon: Building2,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      number: "6",
      label: "Pays d'intervention",
      icon: Globe,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      number: "24",
      label: "Support technique",
      icon: Shield,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ];

  const values = [
    {
      icon: Star,
      title: "Simple",
      description: "Interface intuitive et facile à utiliser pour tous",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Users,
      title: "Convivial",
      description: "Conçu pour une expérience utilisateur optimale",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Award,
      title: "Performant",
      description: "Des outils puissants pour votre gestion quotidienne",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: Shield,
      title: "Fiable",
      description: "Conforme RGPD avec maintenance 7/7 et 24h/24h",
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
  ];

  const countries = [
    { name: "France", code: "fr" },
    { name: "Madagascar", code: "mg" },
    { name: "Suisse", code: "ch" },
    { name: "Maroc", code: "ma" },
    { name: "Guyane", code: "gf" },
    { name: "Mayotte", code: "yt" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-gradient-to-br from-blue-200/20 to-purple-200/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-gradient-to-br from-green-200/20 to-blue-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 text-sm font-semibold text-blue-700 ring-1 ring-blue-200/50">
            <Heart className="h-4 w-4" />À caractère familiale depuis 1998
          </div>
          <h2 className="mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-5xl leading-tight font-black text-transparent md:text-6xl">
            Une expertise de plus de 25 ans
          </h2>
          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-600 md:text-2xl">
            ZEBUTECH, société malgache spécialisée dans la distribution du
            logiciel INFHOTIK PMS, au service de plus de 750 établissements à
            travers le monde, de taille moyenne, artisanale et familiale.
          </p>
        </div>

        {/* Stats Section with Animation */}
        <div
          ref={statsRef}
          className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => {
            const animatedNumber = useCountUp(
              stat.number,
              2000 + index * 200,
              isStatsVisible,
            );

            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-white/50 bg-white/80 p-8 text-center backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-50 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div
                  className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${stat.bgColor} transition-transform duration-300 group-hover:scale-110`}
                >
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="relative z-10">
                  <div
                    className={`text-3xl font-black ${stat.color} font-mono transition-all duration-300 md:text-4xl`}
                  >
                    {animatedNumber}
                  </div>
                  <p className="mt-2 font-semibold text-gray-700">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="mb-20 grid gap-12 lg:grid-cols-2">
          {/* Left Column - About */}
          <div className="space-y-8">
            <div className="rounded-2xl border border-white/50 bg-white/80 p-8 backdrop-blur-sm">
              <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-gray-900">
                <img
                  alt="drapeau de madagascar"
                  src="https://flagcdn.com/w40/mg.png"
                  className="h-6 w-8"
                />
                VITA MALAGASY - Made in Madagascar
              </h3>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  KESYKELY PMS évolue depuis 1998 au service de plus de 580
                  établissements installés en France, en Guyane, en Suisse, au
                  Maroc, à Mayotte et maintenant à Madagascar. Une solution
                  pensée par des hôteliers, pour des hôteliers.
                </p>
                <p className="leading-relaxed">
                  Notre approche se distingue par sa simplicité d'utilisation et
                  sa completude, adaptée aux établissements de{" "}
                  <strong>taille moyenne, artisanale et familiale</strong>.
                </p>
              </div>
            </div>

            {/* Founder Section */}
            <div className="rounded-2xl border border-white/50 bg-white/80 p-8 backdrop-blur-sm">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                    <Briefcase className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <div>
                  <a
                    className="text-lg font-bold text-gray-900 transition-colors hover:text-blue-600"
                    href="https://www.linkedin.com/in/sergio-fleurys-rakotozafy-6b472360/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sergio Fleurys Rakotozafy
                  </a>

                  <p className="text-gray-600">
                    Directeur Général & Fondateur de Zebutech
                  </p>
                </div>
              </div>
              <p className="leading-relaxed text-gray-600">
                Avec 30 ans d'expérience dans l'hôtellerie et la restauration,
                notre fondateur a développé une vision claire : proposer des
                outils simples, performants et accessibles pour tous les types
                d'établissements.
              </p>
            </div>
          </div>

          {/* Right Column - Global Presence */}
          <div className="space-y-8">
            <div className="rounded-2xl border border-white/50 bg-white/80 p-8 backdrop-blur-sm">
              <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-gray-900">
                <Globe className="h-6 w-6 text-blue-600" />
                Présence internationale
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {countries.map((country, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50/50 p-3 transition-colors hover:bg-blue-50"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={`https://flagcdn.com/w40/${country.code}.png`}
                        alt={country.name}
                        className="h-4 w-6 rounded-sm object-cover"
                      />
                      <span className="font-medium text-gray-700">
                        {country.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="rounded-2xl border border-white/50 bg-white/80 p-8 backdrop-blur-sm">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                Solution complète
              </h3>
              <div className="space-y-3">
                {[
                  "Conforme RGPD & Législation 2018",
                  "Planning graphique 30 jours",
                  "Interface avec les principales OTA",
                  "Gestion arrhes & acomptes",
                  "Formation incluse",
                  "Maintenance 7/7 - 24h/24h",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-gray-900">
              Nos valeurs fondamentales
            </h3>
            <p className="text-xl text-gray-600">
              Une meilleure façon de gérer votre Hôtel et Restaurant
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative cursor-pointer rounded-2xl border border-white/50 bg-white/80 p-8 text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-50 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div
                  className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full ${value.bgColor} transition-transform duration-300 group-hover:scale-110`}
                >
                  <value.icon className={`h-8 w-8 ${value.color}`} />
                </div>
                <div className="relative z-10">
                  <h4 className="mb-3 text-xl font-semibold text-gray-900">
                    {value.title}
                  </h4>
                  <p className="leading-relaxed text-gray-600">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/25">
            <MapPin className="h-6 w-6" />
            <div className="text-left">
              <div className="font-semibold">ZebuTech Madagascar</div>
              <div className="text-sm opacity-90">
                Lot IBM 17Bis, Isoraka - Antananarivo
              </div>
            </div>
            <div className="h-8 w-px bg-white/30" />
            <div className="text-left">
              <div className="font-semibold">+261 34 23 637 27</div>
              <div className="text-sm opacity-90">Support 24/7</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
