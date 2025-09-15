import { useState, useEffect } from "react";
import { X, Settings, Shield, Cookie } from "lucide-react";

const ModernCookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
    console.log("Tous les cookies acceptés");
  };

  const handleRejectAll = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
    console.log("Tous les cookies rejetés");
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/20 p-4 backdrop-blur-md">
        {/* Popup principal */}
        <div className="animate-in fade-in relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl duration-300">
          {/* Header avec close button */}
          <div className="flex items-center justify-between border-b border-gray-100 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-100 p-2">
                <Cookie className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Nos cookies. Votre choix.
              </h2>
            </div>
            <button
              onClick={handleClose}
              className="rounded-full p-2 transition-colors hover:bg-gray-100"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Contenu */}
          <div className="space-y-6 p-6">
            {/* Message principal */}
            <div className="space-y-4 leading-relaxed text-gray-700">
              <p>
                <strong className="text-gray-900">Zebutech.com</strong> utilise
                des données, des cookies et d'autres technologies similaires sur
                ce navigateur afin d'optimiser notre site Web, de vous fournir
                des fonctionnalités météorologiques et de vous proposer des{" "}
                <strong className="text-blue-600">
                  publicités personnalisées
                </strong>
                . Nous utilisons également des cookies mis en place par{" "}
                <strong className="text-gray-900">
                  158 autres fournisseurs
                </strong>{" "}
                pour nous aider à fournir des services tels que le contenu, la
                technologie et plus encore.
              </p>
            </div>

            {/* Types de cookies */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-xl border border-green-100 bg-green-50 p-4">
                <Shield className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="mb-1 font-semibold text-green-900">
                    Les cookies essentiels
                  </h3>
                  <p className="text-sm text-green-700">
                    Ne peuvent pas être désactivés car ils sont utilisés pour
                    faire fonctionner notre site web.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4">
                <Settings className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                <div>
                  <h3 className="mb-1 font-semibold text-blue-900">
                    Les cookies facultatifs
                  </h3>
                  <p className="text-sm text-blue-700">
                    Sont sous votre contrôle. Choisissez ceux que vous souhaitez
                    accepter dans la section{" "}
                    <button
                      onClick={() => setShowSettings(!showSettings)}
                      className="cursor-pointer font-medium underline hover:no-underline"
                    >
                      Gérer les paramètres des cookies
                    </button>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Paramètres détaillés (collapsible) */}
            {showSettings && (
              <div className="space-y-3 border-t pt-6">
                <h3 className="mb-4 font-semibold text-gray-900">
                  Paramètres des cookies
                </h3>

                <div className="space-y-3">
                  <label className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                    <div>
                      <div className="font-medium text-gray-900">
                        Cookies analytiques
                      </div>
                      <div className="text-sm text-gray-600">
                        Pour analyser l'utilisation du site
                      </div>
                    </div>
                    <input type="checkbox" className="h-5 w-5 text-blue-600" />
                  </label>

                  <label className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                    <div>
                      <div className="font-medium text-gray-900">
                        Cookies publicitaires
                      </div>
                      <div className="text-sm text-gray-600">
                        Pour des publicités personnalisées
                      </div>
                    </div>
                    <input type="checkbox" className="h-5 w-5 text-blue-600" />
                  </label>

                  <label className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                    <div>
                      <div className="font-medium text-gray-900">
                        Cookies de performance
                      </div>
                      <div className="text-sm text-gray-600">
                        Pour améliorer les performances
                      </div>
                    </div>
                    <input type="checkbox" className="h-5 w-5 text-blue-600" />
                  </label>
                </div>
              </div>
            )}

            {/* Mention légale */}
            <div className="rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
              <p>
                Consultez notre{" "}
                <button className="font-medium text-blue-600 underline hover:no-underline">
                  politique de confidentialité
                </button>{" "}
                pour connaître les types de données personnelles que nous
                collectons, y compris les données relatives à votre navigateur.
                Vous pouvez modifier vos préférences à tout moment en accédant à
                la rubrique{" "}
                <button className="font-medium text-blue-600 underline hover:no-underline">
                  Paramètres des cookies
                </button>{" "}
                au bas de toutes nos pages web.
              </p>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col gap-3 rounded-b-2xl border-t border-gray-100 bg-gray-50 p-6 sm:flex-row">
            <button
              onClick={handleRejectAll}
              className="flex-1 cursor-pointer rounded-xl border-2 border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-gray-100"
            >
              Rejeter tout
            </button>
            <button
              onClick={handleAcceptAll}
              className="flex-1 cursor-pointer rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl"
            >
              Accepter tout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernCookieConsent;
