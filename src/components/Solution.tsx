import {
  ArrowRight,
  BarChart3,
  Check,
  Monitor,
  Smartphone,
} from "lucide-react";
import kesyMobileTicket from "./../assets/img/kesykely/nobgticket.png";
import kesyBoutik from "./../assets/img/kesykely/nobgboutik.png";
import kesyBar from "./../assets/img/kesykely/nobgbar.png";
import kesyTablette from "./../assets/img/kesykely/nobgtablette.png";
import planning from "./../assets/img/kesykely/planning.png";
import Banner from "./Banner";

export default function Solution() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Nos Solutions
          </h2>
          <p className="text-xl text-gray-600">
            Des outils adaptés à tous vos besoins
          </p>
        </div>
        <Banner />
        {/* Section planning - Image centrée */}
        <div className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="mb-4 flex items-center justify-center text-3xl font-bold text-blue-900">
              <BarChart3 className="mr-4 h-8 w-8 text-blue-600" />
              Planning Professionnel
            </h2>
            <p className="text-lg text-blue-800">
              Hardware optimisé pour les environnements professionnels exigeants
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={planning}
              alt="Matériel KESYKELY"
              className="h-auto w-[1400px] rounded-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Section tablette - Image centrée */}
        <div className="mb-16">
          <div className="mb-0 text-center">
            <h2 className="mb-4 flex items-center justify-center text-3xl font-bold text-blue-900">
              <BarChart3 className="mr-4 h-8 w-8 text-blue-600" />
              Matériel Professionnel
            </h2>
            <p className="text-lg text-blue-800">
              Hardware optimisé pour les environnements professionnels exigeants
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={kesyTablette}
              alt="Matériel KESYKELY"
              className="h-auto w-full max-w-6xl rounded-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Section Applications Mobile - Responsive */}
        <div className="mb-16 rounded-3xl border-2 border-gray-50 bg-white p-6 shadow-xl md:p-12">
          <div className="mb-8 text-center md:mb-2">
            <h2 className="mb-4 flex items-center justify-center text-2xl font-bold text-blue-900 md:mt-[-40px]! md:text-3xl">
              <Smartphone className="mr-4 h-6 w-6 text-blue-600 md:h-8 md:w-8" />
              Applications Mobile
            </h2>
            <p className="text-base text-blue-800 md:text-lg">
              Solutions mobiles adaptées à chaque secteur d'activité
            </p>
          </div>

          {/* Version Desktop - 3 colonnes */}
          <div className="hidden justify-center gap-8 md:flex">
            {/* Ticket Mobile */}
            <div className="group text-center">
              <div className="relative mb-6">
                <img
                  src={kesyMobileTicket}
                  alt="Ticket Mobile"
                  className="mx-auto h-auto w-[350px] transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="mx-2 mb-2 text-xl font-bold text-blue-900">
                Ticketing
              </h3>
              <p className="text-blue-700">
                Gestion des tickets et facturation rapide
              </p>
            </div>

            {/* Boutique Mobile */}
            <div className="group text-center">
              <div className="relative mb-6">
                <img
                  src={kesyBoutik}
                  alt="Boutique Mobile"
                  className="mx-auto h-auto w-[350px] transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-blue-900">
                Point de Vente
              </h3>
              <p className="text-blue-700">
                Interface boutique et gestion stock
              </p>
            </div>

            {/* Bar Mobile */}
            <div className="group text-center">
              <div className="relative mb-6">
                <img
                  src={kesyBar}
                  alt="Bar Mobile"
                  className="mx-auto h-auto w-[350px] transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-blue-900">
                Bar & Restaurant
              </h3>
              <p className="text-blue-700">
                Commandes et réservations simplifiées
              </p>
            </div>
          </div>

          {/* Version Mobile - 2x2 Grid */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {/* Ticket Mobile */}
            <div className="group text-center">
              <div className="relative mb-3">
                <img
                  src={kesyMobileTicket}
                  alt="Ticket Mobile"
                  className="mx-auto h-auto w-full max-w-[180px] transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="mb-1 text-sm font-bold text-blue-900">
                Ticketing
              </h3>
              <p className="text-xs text-blue-700">
                Gestion des tickets et facturation
              </p>
            </div>

            {/* Boutique Mobile */}
            <div className="group text-center">
              <div className="relative mb-3">
                <img
                  src={kesyBoutik}
                  alt="Boutique Mobile"
                  className="mx-auto h-auto w-full max-w-[180px] transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="mb-1 text-sm font-bold text-blue-900">
                Point de Vente
              </h3>
              <p className="text-xs text-blue-700">
                Interface boutique et stock
              </p>
            </div>

            {/* Bar Mobile */}
            <div className="group text-center">
              <div className="relative mb-3">
                <img
                  src={kesyBar}
                  alt="Bar Mobile"
                  className="mx-auto h-auto w-full max-w-[180px] transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="mb-1 text-sm font-bold text-blue-900">
                Bar & Restaurant
              </h3>
              <p className="text-xs text-blue-700">Commandes et réservations</p>
            </div>
          </div>
        </div>

        <div className="mb-16 grid gap-12 lg:grid-cols-2">
          {/* KESYKELY PMS */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 md:p-8">
            <div className="mb-6 flex items-center">
              <Monitor className="mr-4 h-8 w-8 text-blue-600 md:h-10 md:w-10" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 md:text-2xl">
                  <span className="relative inline-block">
                    KESYKELY
                    <sup className="ml-1 text-xs text-gray-500">©</sup>
                  </span>{" "}
                  PMS
                </h3>
                <p className="font-medium text-blue-600">100% FRANÇAIS 🇫🇷</p>
              </div>
            </div>

            <p className="mb-6 text-sm text-gray-700 md:text-base">
              Logiciel complet de réservation et facturation pour
              hôtel-restaurant, conforme à la Législation 2018 & RGPD.
            </p>

            <div className="mb-6 space-y-3">
              <div className="flex items-center">
                <Check className="mr-3 h-4 w-4 text-green-600 md:h-5 md:w-5" />
                <span className="text-sm text-gray-700 md:text-base">
                  Planning graphique avec visibilité 1-30 jours
                </span>
              </div>
              <div className="flex items-center">
                <Check className="mr-3 h-4 w-4 text-green-600 md:h-5 md:w-5" />
                <span className="text-sm text-gray-700 md:text-base">
                  Gestion complète des réservations
                </span>
              </div>
              <div className="flex items-center">
                <Check className="mr-3 h-4 w-4 text-green-600 md:h-5 md:w-5" />
                <span className="text-sm text-gray-700 md:text-base">
                  Interface avec Booking.com
                </span>
              </div>
              <div className="flex items-center">
                <Check className="mr-3 h-4 w-4 text-green-600 md:h-5 md:w-5" />
                <span className="text-sm text-gray-700 md:text-base">
                  Maintenance 7/7 - 24/24h
                </span>
              </div>
            </div>

            <button className="flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition-all duration-300 hover:bg-blue-700 md:px-6 md:py-3 md:text-base">
              En savoir plus
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          {/* KesyKely */}
          <div className="rounded-2xl bg-gradient-to-br from-green-50 to-green-100 p-6 md:p-8">
            <div className="mb-6 flex items-center">
              <Smartphone className="mr-4 h-8 w-8 text-green-600 md:h-10 md:w-10" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 md:text-2xl">
                  <span className="relative inline-block">
                    KESYKELY
                    <sup className="ml-1 text-xs text-gray-500">©</sup>
                  </span>{" "}
                </h3>
                <p className="font-medium text-green-600">100% MALAGASY 🇲🇬</p>
              </div>
            </div>

            <p className="mb-6 text-sm text-gray-700 md:text-base">
              L'outil tout-terrain pour smartphone et tablette. 30 ans
              d'expérience dans l'hôtellerie et la restauration.
            </p>

            <div className="mb-6 space-y-3">
              <div className="flex items-center">
                <Check className="mr-3 h-4 w-4 text-green-600 md:h-5 md:w-5" />
                <span className="text-sm text-gray-700 md:text-base">
                  Facturation et réservation de table
                </span>
              </div>
              <div className="flex items-center">
                <Check className="mr-3 h-4 w-4 text-green-600 md:h-5 md:w-5" />
                <span className="text-sm text-gray-700 md:text-base">
                  Gestion du stock
                </span>
              </div>
              <div className="flex items-center">
                <Check className="mr-3 h-4 w-4 text-green-600 md:h-5 md:w-5" />
                <span className="text-sm text-gray-700 md:text-base">
                  Multi-points de vente
                </span>
              </div>
              <div className="flex items-center">
                <Check className="mr-3 h-4 w-4 text-green-600 md:h-5 md:w-5" />
                <span className="text-sm text-gray-700 md:text-base">
                  Interface tactile
                </span>
              </div>
            </div>

            <button className="flex items-center rounded-lg bg-green-600 px-4 py-2 text-sm text-white transition-all duration-300 hover:bg-green-700 md:px-6 md:py-3 md:text-base">
              Découvrir
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
