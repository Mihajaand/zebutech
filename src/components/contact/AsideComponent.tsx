import { Mail, MapPin, Phone } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import logoZebutech from "../../assets/logo/zebutech-logo.png";

export default function AsideComponent() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/33685437133", "_blank");
  };

  return (
    <aside className="w-full space-y-8 lg:w-1/2">
      <div className="rounded-3xl border border-indigo-100 bg-white p-6 shadow-xl backdrop-blur-sm sm:p-8">
        <div className="mb-6 flex items-center space-x-3 sm:mb-8">
          <img
            src={logoZebutech}
            alt="Zebutech Logo"
            className="h-10 w-auto sm:h-12"
          />
          <h2 className="ml-8 text-2xl font-bold text-gray-900 sm:text-3xl">
            ZEBUTECH
          </h2>
        </div>

        <div className="space-y-6 text-sm sm:text-base">
          <div className="flex items-center">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 sm:h-14 sm:w-14">
              <Phone className="h-6 w-6 text-indigo-600 sm:h-7 sm:w-7" />
            </div>
            <p className="font-bold text-gray-900">+261 (0)34 23 637 27</p>
          </div>

          <div className="flex items-center">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 sm:h-14 sm:w-14">
              <Mail className="h-6 w-6 text-indigo-600 sm:h-7 sm:w-7" />
            </div>
            <p className="font-semibold text-gray-900">
              zebutech.madagascar@gmail.com
            </p>
          </div>

          <div className="flex items-start">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 sm:h-14 sm:w-14">
              <MapPin className="h-6 w-6 text-indigo-600 sm:h-7 sm:w-7" />
            </div>
            <p className="leading-relaxed text-gray-900">
              Lot IBM 17Bis - 3eme Etage
              <br />
              ISORAKA - Antananarivo
              <br />
              <span className="font-bold">MADAGASCAR</span>
            </p>
          </div>

          <div className="mt-6 text-center sm:mt-8">
            <button
              onClick={handleWhatsApp}
              type="button"
              className="inline-flex cursor-pointer items-center rounded-full bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 sm:px-8 sm:py-4 sm:text-lg"
            >
              <BsWhatsapp className="mr-2 h-5 w-5 sm:mr-3 sm:h-6 sm:w-6" />
              WhatsApp
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-3xl bg-gradient-to-br from-indigo-300 to-indigo-500 p-6 text-white shadow-xl sm:p-8">
        <h3 className="mb-4 text-xl font-bold sm:text-2xl">
          Solutions Professionnelles
        </h3>
        <ul className="space-y-2 text-sm sm:space-y-3 sm:text-base">
          <li className="flex items-center">
            <span className="mr-2 h-2 w-2 rounded-full bg-white" />
            <span className="relative inline-block">
              KESYKELY
              <sup className="mr-1 ml-0.5 text-xs text-white">©</sup>
            </span>{" "}
            PMS - Gestion Hôtelière
          </li>
          <li className="flex items-center">
            <span className="mr-2 h-2 w-2 rounded-full bg-white" />
            <span className="relative inline-block">
              KESYKELY
              <sup className="mr-1 ml-0.5 text-xs text-white">©</sup>
            </span>{" "}
            POS - Point de Vente
          </li>
          <li className="flex items-center">
            <span className="mr-2 h-2 w-2 rounded-full bg-white" />
            170+ établissements nous font confiance
          </li>
        </ul>
      </div>

      <div className="mt-6 w-full text-center">
        <div className="inline-flex items-center rounded-full border border-indigo-100 bg-white px-6 py-3 shadow-lg">
          <div className="mr-3 h-3 w-3 animate-pulse rounded-full bg-indigo-400" />
          <span className="text-sm font-semibold text-gray-800 sm:text-base">
            Plus de 35 ans d'expérience
          </span>
          <div className="mx-3 h-4 w-px bg-indigo-200" />
          <span className="text-sm font-semibold text-gray-800 sm:text-base">
            170+ établissements
          </span>
        </div>
      </div>
    </aside>
  );
}
