import {
  Star,
  Users,
  Award,
  Shield,
  Smartphone,
  Monitor,
  Wifi,
  Phone,
  MapPin,
  Check,
  ArrowRight,
} from "lucide-react";
import Carousel from "../components/Carousel";
import ContactForm from "../components/ContactForm";

const Home = ({
  contactRef,
}: {
  contactRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div className="min-h-screen bg-white">
      <Carousel />

      {/* About Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Une expertise de plus de 25 ans
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              ZEBUTECH, société malgache spécialisée dans la distribution du
              logiciel INFHOTIK PMS, au service de plus de 580 établissements à
              travers le monde.
            </p>
          </div>

          <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Simple</h3>
              <p className="text-gray-600">
                Interface intuitive et facile à utiliser
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Convivial</h3>
              <p className="text-gray-600">
                Conçu pour une expérience utilisateur optimale
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Performant</h3>
              <p className="text-gray-600">
                Des outils puissants pour votre gestion
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Fiable</h3>
              <p className="text-gray-600">
                Conforme RGPD avec maintenance 7/7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Nos Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Des outils adaptés à tous vos besoins
            </p>
          </div>

          <div className="mb-16 grid gap-12 lg:grid-cols-2">
            {/* INFHOTIK PMS */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-8">
              <div className="mb-6 flex items-center">
                <Monitor className="mr-4 h-10 w-10 text-blue-600" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    INFHOTIK PMS V6
                  </h3>
                  <p className="font-medium text-blue-600">100% FRANÇAIS 🇫🇷</p>
                </div>
              </div>

              <p className="mb-6 text-gray-700">
                Logiciel complet de réservation et facturation pour
                hôtel-restaurant, conforme à la Législation 2018 & RGPD.
              </p>

              <div className="mb-6 space-y-3">
                <div className="flex items-center">
                  <Check className="mr-3 h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    Planning graphique avec visibilité 1-30 jours
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-3 h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    Gestion complète des réservations
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-3 h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    Interface avec Booking.com
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-3 h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    Maintenance 7/7 - 24/24h
                  </span>
                </div>
              </div>

              <button className="flex items-center rounded-lg bg-blue-600 px-6 py-3 text-white transition-all duration-300 hover:bg-blue-700">
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            {/* KesyKely */}
            <div className="rounded-2xl bg-gradient-to-br from-green-50 to-green-100 p-8">
              <div className="mb-6 flex items-center">
                <Smartphone className="mr-4 h-10 w-10 text-green-600" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">KesyKely</h3>
                  <p className="font-medium text-green-600">100% MALAGASY 🇲🇬</p>
                </div>
              </div>

              <p className="mb-6 text-gray-700">
                L'outil tout-terrain pour smartphone et tablette. 30 ans
                d'expérience dans l'hôtellerie et la restauration.
              </p>

              <div className="mb-6 space-y-3">
                <div className="flex items-center">
                  <Check className="mr-3 h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    Facturation et réservation de table
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-3 h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Gestion du stock</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-3 h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Multi-points de vente</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-3 h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Interface tactile</span>
                </div>
              </div>

              <button className="flex items-center rounded-lg bg-green-600 px-6 py-3 text-white transition-all duration-300 hover:bg-green-700">
                Découvrir
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              3 en 1 : Un interlocuteur unique
            </h2>
            <p className="text-xl text-gray-600">
              Une meilleure façon de gérer votre Hôtel et Restaurant
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Monitor className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-4 text-center text-xl font-bold">
                Gestion hôtelière et restauration
              </h3>
              <p className="text-center text-gray-600">
                Solution complète pour la gestion quotidienne de votre
                établissement
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Wifi className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-4 text-center text-xl font-bold">
                Réservation en ligne avec RESERVIT
              </h3>
              <p className="text-center text-gray-600">
                Booking engine avec interface vers les principales OTA du marché
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="mb-4 text-center text-xl font-bold">
                Service Maintenance 7/7
              </h3>
              <p className="text-center text-gray-600">
                Support technique disponible 24h/24 avec mises à jour gratuites
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div ref={contactRef}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
