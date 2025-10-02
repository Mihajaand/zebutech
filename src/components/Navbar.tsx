import { useState, useEffect } from "react";
import { Link } from "react-router";
import logoZebutech from "../assets/logo/zebutech-logo.png";
import CurrencyTable from "./CurrencyTable";
import { useCurrencyRates } from "../hooks/useCurrencyRates";
import type { Country } from "./CountrySelectorPopup";
import Meteo from "./Meteo";
import { FcSettings } from "react-icons/fc";
import CountrySelectorPopup from "./CountrySelectorPopup";

type NavbarProps = {
  onContactClick?: () => void;
};

export function NavbarComponent({ onContactClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visiblePays, setVisiblePays] = useState<Country[]>([]);
  const { rates } = useCurrencyRates();
  const [openPopup, setOpenPopup] = useState(false);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Première navbar - fixée en haut */}
      <nav className="fixed top-0 left-0 z-50 w-full bg-gray-50 shadow-md">
        <div className=" sm:px-4 lg:px-4">
          {/* Desktop */}
          <div className="hidden lg:flex items-center h-20 w-auto">
            {/* Bloc gauche - Météo */}
            <div className="flex-shrink-0 w-[300px]">
              <Meteo />
            </div>

            {/* Bloc central - Logo + menu */}
            <div className="flex-1 flex justify-center items-center space-x-4">
              <Link to="/">
                <img src={logoZebutech} className="h-12" alt="Zebutech Logo" />
              </Link>
              <div className="flex items-center space-x-4">
                <Link
                  to="/kesykely"
                  className="px-3 py-2 text-blue-900 hover:text-indigo-800"
                >
                  KesyKely
                  <span className="ml-1 align-super text-[0.6rem] font-bold text-red-600">
                    POS
                  </span>
                </Link>
                <a
                  href="https://kesykely-pms.com"
                  target="_blank"
                  className="px-3 py-2 text-blue-900 hover:text-indigo-800"
                >
                  KesyKely <span className="font-bold">PMS</span>
                </a>
                <a
                  href="https://madagascar-madagascar.com"
                  target="_blank"
                  className="px-3 py-2 text-blue-900 hover:text-indigo-800"
                >
                  Site Portail
                </a>
                <Link
                  to="/actualites"
                  className="px-3 py-2 text-blue-900 hover:text-indigo-800"
                >
                  Actualité
                </Link>
              </div>
              <button
                onClick={onContactClick}
                className="ml-4 rounded-md border-2 border-white bg-indigo-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
              >
                Contactez-nous
              </button>
            </div>

            {/* Bloc droit - Date / heure */}
            <div className="flex-shrink-0 ">
              <div className="text-right text-blue-900">
                <p className="text-[12px] font-bold capitalize">{date}</p>
                <p className="text-[14px] font-bold">{time}</p>
              </div>
            </div>
          </div>

          {/* Mobile + tablette portrait */}
          <div className="flex items-center justify-between lg:hidden h-20">
            {/* Logo */}
            <Link to="/">
              <img src={logoZebutech} className="h-16 sm:h-12" alt="Zebutech Logo" />
            </Link>

            {/* Burger */}
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-blue-900 hover:bg-indigo-200 hover:text-indigo-800 focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
            >
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

         {/* Menu mobile */}
<div className={`${isMenuOpen ? "block" : "hidden"} lg:hidden`}>
  <div className="mt-2 mb-4 min-h-screen w-screen rounded-lg bg-indigo-400 px-4 py-4">
    <div className="flex flex-col items-center space-y-3">

      <button
        onClick={() => {
          if (onContactClick) onContactClick();
          closeMenu();
        }}
        className="w-full cursor-pointer rounded-md border border-red-600 bg-indigo-900 px-6 py-3 text-base font-medium text-white hover:bg-gray-800"
      >
        Contactez-nous
      </button>

      <Link
        to="/kesykely"
        onClick={closeMenu}
        className="w-full rounded-md px-4 py-3 text-center text-blue-900 hover:bg-indigo-200 hover:text-indigo-800"
      >
        KesyKely
        <span className="ml-1 align-super text-[0.6rem] font-bold text-red-600">
          POS
        </span>
      </Link>

      <Link
        to="/kesykely-pms"
        onClick={closeMenu}
        className="w-full rounded-md px-4 py-3 text-center text-blue-900 hover:bg-indigo-200 hover:text-indigo-800"
      >
        KesyKely <span className="font-bold">PMS</span>
      </Link>

      <Link
        to="/site-portail"
        onClick={closeMenu}
        className="w-full rounded-md px-4 py-3 text-center text-blue-900 hover:bg-indigo-200 hover:text-indigo-800"
      >
        Site Portail
      </Link>

      <Link
        to="/actualites"
        onClick={closeMenu}
        className="w-full rounded-md px-4 py-3 text-center text-blue-900 hover:bg-indigo-200 hover:text-indigo-800"
      >
        Actualités
      </Link>

      {/* Date/heure mobile */}
      <div className="mt-4 text-center text-blue-900">
        <p className="text-[12px] font-bold capitalize">{date}</p>
        <p className="text-[16px] font-bold">{time}</p>
      </div>

      {/* Settings mobile */}
      <div
        onClick={() => {
          setOpenPopup(true);
          closeMenu();
        }}
        className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-indigo-300 hover:bg-indigo-200"
      >
        <FcSettings size={20} />
      </div>
    </div>
  </div>
</div>

        </div>
      </nav>

      {/* Deuxième navbar - fixée sous la première */}
      <div className="fixed top-20 left-0 z-40 hidden w-full bg-indigo-300 shadow lg:block">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 justify-center">
            <CurrencyTable visiblePays={visiblePays} />
          </div>
          <div onClick={() => setOpenPopup(true)} className="mr-4 cursor-pointer">
            <FcSettings size={18} />
          </div>
        </div>
      </div>

      {/* CurrencyTable + Meteo mobile */}
      <div className={`${isMenuOpen ? "block" : "hidden"} bg-indigo-300 lg:hidden`}>
        <div className="px-4 py-4">
          <div className="flex flex-col items-center space-y-4">
            <CurrencyTable visiblePays={visiblePays} />
            <Meteo />
          </div>
        </div>
      </div>

      <CountrySelectorPopup
        show={openPopup}
        onClose={() => setOpenPopup(false)}
        selected={visiblePays}
        onUpdate={(updated) => setVisiblePays(updated)}
      />
    </>
  );
}
