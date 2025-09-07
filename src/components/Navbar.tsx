import { useState, useEffect } from "react";
import { Link } from "react-router";
import logoZebutech from "../assets/logo/zebutech-logo.png";
import CurrencyTable from "./CurrencyTable";
import { useCurrencyRates } from "../hooks/useCurrencyRates";
import type { Country } from "./CountrySelectorPopup";
import Meteo from "./Meteo";
import { FcSettings } from "react-icons/fc";
import CountrySelectorPopup from "./CountrySelectorPopup";
import { LocalizationProvider } from "../contexts/LocalizationProvider";

export function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visiblePays, setVisiblePays] = useState<Country[]>([]);
  const { rates } = useCurrencyRates();
  const [openPopup, setOpenPopup] = useState(false);

  // États pour la date et l'heure
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Initialisation de visiblePays avec des données par défaut
  useEffect(() => {
    if (!visiblePays.length && rates.length > 0) {
      const defaultCodes = ["EUR", "CAD", "CHF", "CNY", "GBP", "JPY", "USD"];
      const defaultCountries = rates
        .filter((r) => defaultCodes.includes(r.code))
        .map((r) => ({
          code: r.code,
          label: r.name || r.code,
          flag: r.flag,
        }))
        .sort((a, b) => {
          const indexA = defaultCodes.indexOf(a.code);
          const indexB = defaultCodes.indexOf(b.code);
          return indexA - indexB;
        });
      setVisiblePays(defaultCountries);
    }
  }, [rates, visiblePays]);

  // Effect pour la date et l'heure
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      const timeFormatter = new Intl.DateTimeFormat("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      setDate(dateFormatter.format(now));
      setTime(timeFormatter.format(now));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Meteo au coin gauche sur desktop */}
            <div className="hidden w-[400px] md:absolute md:left-0 md:flex md:flex-shrink-0">
              <Meteo />
            </div>

            {/* Logo - À gauche sur mobile, centré sur desktop */}
            <div className="flex-shrink-0 md:hidden">
              <Link to="/">
                <img
                  src={logoZebutech}
                  className="h-16 sm:h-12"
                  alt="Zebutech Logo"
                />
              </Link>
            </div>

            {/* Contenu centré sur desktop - Logo, menu et bouton */}
            <div className="hidden md:mx-auto md:flex md:items-center md:gap-8">
              {/* Logo */}
              <Link to="/">
                <img src={logoZebutech} className="h-12" alt="Zebutech Logo" />
              </Link>

              {/* Menu links */}
              <div className="flex items-center space-x-4">
                <Link
                  to="/kesykely"
                  className="relative px-3 py-2 text-blue-900 transition-colors duration-200 hover:text-indigo-800"
                >
                  KesyKely
                  <span className="ml-1 align-super text-[0.6rem] font-bold text-red-600">
                    POS
                  </span>
                </Link>

                <Link
                  to="/kesykely-pms"
                  className="px-3 py-2 text-blue-900 transition-colors duration-200 hover:text-indigo-800"
                >
                  KesyKely <span className="font-bold">PMS</span>
                </Link>

                <Link
                  to="/site-portail"
                  className="px-3 py-2 text-blue-900 transition-colors duration-200 hover:text-indigo-800"
                >
                  Site Portail
                </Link>

                <Link
                  to="/contact"
                  className="px-3 py-2 text-blue-900 transition-colors duration-200 hover:text-indigo-800"
                >
                  Actualité
                </Link>
              </div>

              {/* Bouton contact */}
              <button className="rounded-md border-2 border-white bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-orange-600">
                Contactez-nous
              </button>
            </div>

            {/* Date et heure - En haut à droite sur desktop */}
            <div className="absolute top-4 right-4 hidden md:block">
              <div className="text-right text-blue-900">
                <p className="text-[12px] font-bold capitalize">{date}</p>
                <p className="text-[14px] font-bold">{time}</p>
              </div>
            </div>

            {/* Bouton burger (mobile/tablette) */}
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center rounded-md p-2 text-blue-900 transition-colors duration-200 hover:bg-indigo-200 hover:text-indigo-800 focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
                aria-expanded="false"
              >
                <span className="sr-only">Ouvrir le menu principal</span>
                {/* Icône hamburger */}
                <svg
                  className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Icône fermer */}
                <svg
                  className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Menu mobile/tablette - Centré et pleine largeur */}
          <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
            <div className="mt-2 w-full rounded-lg bg-indigo-400 px-4 pt-4 pb-4">
              <div className="flex flex-col items-center space-y-3">
                <button className="w-full max-w-xs rounded-md border-2 border-white bg-orange-500 px-6 py-3 text-base font-medium text-white transition-colors duration-200 hover:bg-orange-600">
                  Contactez-nous
                </button>

                <Link
                  to="/kesykely"
                  onClick={closeMenu}
                  className="relative w-full max-w-xs rounded-md px-4 py-3 text-center text-blue-900 transition-colors duration-200 hover:bg-indigo-200 hover:text-indigo-800"
                >
                  KesyKely
                  <span className="ml-1 align-super text-[0.6rem] font-bold text-red-600">
                    POS
                  </span>
                </Link>

                <Link
                  to="/kesykely-pms"
                  onClick={closeMenu}
                  className="w-full max-w-xs rounded-md px-4 py-3 text-center text-blue-900 transition-colors duration-200 hover:bg-indigo-200 hover:text-indigo-800"
                >
                  KesyKely <span className="font-bold">PMS</span>
                </Link>

                <Link
                  to="/site-portail"
                  onClick={closeMenu}
                  className="w-full max-w-xs rounded-md px-4 py-3 text-center text-blue-900 transition-colors duration-200 hover:bg-indigo-200 hover:text-indigo-800"
                >
                  Site Portail
                </Link>

                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="w-full max-w-xs rounded-md px-4 py-3 text-center text-blue-900 transition-colors duration-200 hover:bg-indigo-200 hover:text-indigo-800"
                >
                  Contact
                </Link>

                {/* Date/heure pour mobile */}
                <div className="mt-4 text-center text-blue-900">
                  <p className="text-[12px] font-bold capitalize">{date}</p>
                  <p className="text-[16px] font-bold">{time}</p>
                </div>

                {/* Bouton settings pour mobile */}
                <div
                  onClick={() => {
                    setOpenPopup(true);
                    closeMenu();
                  }}
                  className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-indigo-300 pl-0.5 hover:bg-indigo-200"
                >
                  <FcSettings size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Deuxième navbar pour CurrencyTable seulement - visible seulement sur desktop */}
      <div className="hidden bg-red-300 md:block">
        <div className="relative flex h-16 items-center justify-between bg-indigo-300">
          {/* Espace vide à gauche pour équilibrer */}
          <div className="w-4 bg-green-500"></div>

          {/* CurrencyTable centré */}
          <div className="flex flex-1 justify-center">
            <CurrencyTable visiblePays={visiblePays} />
          </div>

          {/* FcSettings complètement à droite */}
          <div
            onClick={() => setOpenPopup(true)}
            className="mr-2 cursor-pointer"
          >
            <FcSettings size={14} />
          </div>
        </div>
      </div>

      {/* CurrencyTable et Meteo pour mobile dans le menu déroulant */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"} bg-indigo-300 md:hidden`}
      >
        <div className="px-4 py-4">
          <div className="flex flex-col items-center space-y-4">
            <CurrencyTable visiblePays={visiblePays} />
            <Meteo />
          </div>
        </div>
      </div>

      <LocalizationProvider>
        <CountrySelectorPopup
          show={openPopup}
          onClose={() => setOpenPopup(false)}
          selected={visiblePays}
          onUpdate={(updated) => setVisiblePays(updated)}
        />
      </LocalizationProvider>
    </>
  );
}
