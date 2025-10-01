import { Monitor, Shield, CheckCircle, Users, Search } from "lucide-react";
import logoZebutech from "../assets/logo/zebutech-logo.png";
import kesykely from "../assets/logo/kesykely-logo.png";
import madagascar from "../assets/logo/logos-portail-pc.png";

export default function Service() {
  const services = [
    {
      id: "zebutech",
      logo: logoZebutech,
      title: "ZEBUTECH",
      subtitle: "Gestion hôtelière et restauration",
      description:
        "Solution complète pour hôtels et restaurants avec plus de 25 ans d'expérience. Planning graphique, facturation, gestion clients et statistiques.",
      features: [
        "Planning graphique 30 jours",
        "Gestion arrhes & acomptes",
        "Interface OTA",
        "Conforme RGPD",
      ],
      icon: Monitor,
      gradient: "from-blue-500 to-blue-600",
      badge: "🇲🇬 VITA MALAGASY",
    },
    {
      id: "portail-madagascar",
      logo: madagascar,
      title: "PORTAIL MADAGASCAR",
      subtitle: "Annuaire et guide touristique",
      description:
        "Portail de référence pour découvrir les hôtels, restaurants et attractions de Madagascar. Recherche avancée, avis clients et informations pratiques.",
      features: [
        "Recherche multicritères",
        "Géolocalisation précise",
        "Avis et notation",
        "Infos pratiques complètes",
      ],
      icon: Search,
      gradient: "from-green-500 to-emerald-600",
      badge: "🇲🇬 VITA MALAGASY",
    },
    {
      id: "kesykely",
      logo: kesykely,
      title: "KESYKELY",
      subtitle: "Solution PMS-POS",
      description:
        "L'outil tout-terrain conçu à Madagascar. Facturation, réservation de table, gestion stock sur smartphone et tablette.",
      features: [
        "Multi-support mobile",
        "Gestion stock temps réel",
        "Multipaiements",
        "Interface tactile",
      ],
      icon: Users,
      gradient: "from-purple-500 to-pink-600",
      badge: "🇲🇬 VITA MALAGASY",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24">
      {/* Background elements */}
      <div className="bg-grid-slate-100/50 absolute inset-0 opacity-50" />
      <div className="absolute top-10 left-10 h-72 w-72 animate-pulse rounded-full bg-gradient-to-br from-blue-200/30 to-purple-200/30 blur-3xl" />
      <div
        className="absolute right-10 bottom-10 h-96 w-96 animate-pulse rounded-full bg-gradient-to-br from-green-200/30 to-blue-200/30 blur-3xl"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="mb-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 text-sm font-semibold text-blue-700 ring-1 ring-blue-200/50">
            ⚡ Solution 3 en 1
          </div>
          <h2 className="mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-5xl leading-tight font-black text-transparent md:text-6xl">
            Un interlocuteur unique
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600 md:text-2xl">
            Une meilleure façon de gérer votre Hôtel et Restaurant
          </p>

          {/* Key benefits */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {["Simple", "Convivial", "Performant", "Fiable"].map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 rounded-full border border-gray-200/50 bg-white/60 px-4 py-2 backdrop-blur-sm"
              >
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="font-medium text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative flex h-full flex-col rounded-3xl border border-white/50 bg-white/80 p-8 backdrop-blur-sm transition-all duration-700 hover:scale-105 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/20"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-300 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-10" />

              {/* Badge avec drapeaux FlagCDN */}
              <div className="absolute -top-3 left-6 flex items-center gap-1 rounded-full border bg-white px-3 py-1 text-xs font-bold text-gray-700 shadow-md">
                <img
                  src="https://flagcdn.com/w20/mg.png"
                  alt="Madagascar"
                  className="h-3 w-4"
                />
                <span>VITA MALAGASY</span>
              </div>

              {/* Logo */}
              <div className="relative mb-8">
                <div className="mx-auto flex h-32 w-32 items-center justify-center">
                  <img
                    src={service.logo}
                    alt={`Logo ${service.title}`}
                    className={`w-auto object-contain transition-transform duration-300 group-hover:scale-110 ${
                      service.id === "kesykely" ||
                      service.id === "portail-madagascar"
                        ? "h-24"
                        : "h-16"
                    }`}
                  />
                </div>
              </div>

              {/* Content avec flex-grow pour occuper l'espace disponible */}
              <div className="relative z-10 flex flex-grow flex-col text-center">
                <h3 className="mb-2 text-2xl font-black text-gray-900">
                  {service.title}
                </h3>
                <p className="mb-4 text-lg font-semibold text-gray-700">
                  {service.subtitle}
                </p>
                <p className="mb-6 flex-grow leading-relaxed text-gray-600">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-8 space-y-2">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center gap-2 text-sm text-gray-600"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-300" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button - aligné en bas avec couleurs uniformes */}
                <button className="group/btn mt-auto w-full transform rounded-xl border border-indigo-200 bg-indigo-600 bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex items-center justify-center gap-2">
                    Découvrir
                    <service.icon className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </span>
                </button>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-4 right-4 h-3 w-3 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex cursor-pointer items-center gap-4 rounded-2xl bg-indigo-600 px-8 py-4 text-white transition-all duration-300 hover:scale-105 hover:bg-indigo-700 hover:shadow-xl">
            <Shield className="h-6 w-6" />
            <span className="text-lg font-semibold">
              Support 24/7 - Maintenance incluse
            </span>
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
