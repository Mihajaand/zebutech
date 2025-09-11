import kesykelyLogo from "./../assets/logo/kesykely-logo.png";
import logoZebutech from "../assets/logo/zebutech-logo.png";
import pms from "../assets/logo/first.png";
import pos from "../assets/logo/second.png";
import mada from "../assets/logo/logos-portail-pc.png";

interface Solution {
  id: string;
  logo: string;
  name: string;
}

const solutions: Solution[] = [
  {
    id: "zebutech",
    logo: logoZebutech,
    name: "ZebuTech",
  },
  {
    id: "pms",
    logo: pms,
    name: "PMS",
  },
  {
    id: "kesykely",
    logo: kesykelyLogo,
    name: "Kesykely",
  },
  {
    id: "pos",
    logo: pos,
    name: "POS",
  },
  {
    id: "portail",
    logo: mada,
    name: "Portail",
  },
];

export default function Banner(): JSX.Element {
  // Triple les solutions pour un défilement infini plus fluide
  const duplicatedSolutions = [...solutions, ...solutions, ...solutions];

  return (
    <div className="relative h-96 overflow-hidden bg-white">
      <div className="relative z-10 flex h-full items-center justify-center">
        {/* Infinite Horizontal Scroll */}
        <div className="relative w-full">
          {/* Gradient overlays for smooth edges */}
          <div className="pointer-events-none absolute top-0 left-0 z-20 h-full w-40 bg-gradient-to-r from-white via-white to-transparent"></div>
          <div className="pointer-events-none absolute top-0 right-0 z-20 h-full w-40 bg-gradient-to-l from-white via-white to-transparent"></div>

          <div className="animate-scroll-infinite flex space-x-12">
            {duplicatedSolutions.map((solution, index) => (
              <div
                key={`${solution.id}-${index}`}
                className="group flex-shrink-0 cursor-pointer"
                style={{ animationDelay: `${(index % 5) * 100}ms` }}
              >
                {/* Modern Card - Same style as Partenaire */}
                <div className="group relative min-w-[280px] rounded-2xl border border-white/20 bg-white/70 p-12 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10">
                  {/* Card glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-pink-600/0 transition-all duration-500 group-hover:from-blue-600/5 group-hover:via-purple-600/5 group-hover:to-pink-600/5"></div>

                  {/* Logo container */}
                  <div className="relative flex flex-col items-center">
                    <div className="mb-4 flex h-32 w-full items-center justify-center">
                      <img
                        src={solution.logo}
                        alt={solution.name}
                        className={`object-contain filter transition-all duration-300 group-hover:scale-110 group-hover:brightness-110 ${
                          solution.id === "portail"
                            ? "max-h-20 max-w-full"
                            : "max-h-full max-w-full"
                        }`}
                        loading="lazy"
                      />
                    </div>

                    {/* Partner info - Hidden by default, shown on hover */}
                    <div className="translate-y-2 transform text-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <h3 className="mb-1 text-lg font-semibold text-gray-900">
                        {solution.name}
                      </h3>
                    </div>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute top-3 right-3 h-2 w-2 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for infinite scroll animation */}
      <style>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll-infinite {
          animation: scroll-infinite 25s linear infinite;
        }
        
        @media (max-width: 768px) {
          .animate-scroll-infinite {
            animation: scroll-infinite 20s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}
