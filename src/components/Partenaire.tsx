export default function Partenaire() {
  const partners = [
    {
      name: "Reservit",
      src: "https://www.reservit.com/zeeptapo/2021/01/logo.png",
      description: "Booking Engine",
    },
    {
      name: "Thaïs PMS",
      src: "https://thais-pms.com/_nuxt/img/7bca891.svg",
      description: "PMS Solution",
    },
    {
      name: "Septeo",
      src: "https://cdn.prod.website-files.com/62f0eecf4db2ed8ccaf46cea/641d757432ef8bbe6de56c80_logo-septeo.svg",
      description: "Hospitality Software",
    },
    {
      name: "Zucchetti",
      src: "https://www.zucchetti.com/worldwide/templates/worldwide/img/logo.png",
      description: "Hotel Management",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 py-24">
      {/* Background decoration */}
      <div className="bg-grid-slate-100 absolute inset-0 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] opacity-60" />
      <div className="absolute top-0 left-1/4 h-96 w-96 animate-pulse rounded-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-30 blur-3xl" />
      <div
        className="absolute right-1/4 bottom-0 h-80 w-80 animate-pulse rounded-full bg-gradient-to-br from-green-100 to-blue-100 opacity-30 blur-3xl"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header with modern styling */}
        <div className="mb-20 text-center">
          <h2 className="mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-5xl leading-tight font-black text-transparent md:text-6xl">
            Nos Partenaires
          </h2>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-600">
            Des collaborations stratégiques qui propulsent l'innovation dans
            l'hôtellerie
          </p>
        </div>

        {/* Partners grid with modern cards */}
        <div className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group relative rounded-2xl border border-white/20 bg-white/70 p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-pink-600/0 transition-all duration-500 group-hover:from-blue-600/5 group-hover:via-purple-600/5 group-hover:to-pink-600/5" />

              {/* Logo container */}
              <div className="relative flex flex-col items-center">
                <div className="mb-4 flex h-16 w-full items-center justify-center">
                  <img
                    src={partner.src}
                    alt={partner.name}
                    className="h-12 w-auto object-contain filter transition-all duration-300 group-hover:brightness-110"
                    loading="lazy"
                  />
                </div>

                {/* Partner info */}
                <div className="translate-y-2 transform text-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="mb-1 font-semibold text-gray-900">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-gray-600">{partner.description}</p>
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-3 right-3 h-2 w-2 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Call to action with modern design */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-center text-white">
            {/* Background pattern */}
            <div className="bg-grid-white/10 absolute inset-0 opacity-50" />
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

            <div className="relative z-10">
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                Rejoignez notre écosystème
              </h3>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
                Développez votre activité en devenant partenaire technologique
                de référence
              </p>
              <button className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-blue-600 transition-all duration-300 hover:scale-105 hover:bg-blue-50 hover:shadow-xl">
                Devenir partenaire
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
