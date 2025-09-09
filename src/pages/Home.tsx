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
import Partenaire from "../components/Partenaire";
import Service from "../components/Service";
import About from "../components/About";

const Home = ({
  contactRef,
}: {
  contactRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div className="min-h-screen bg-white">
      <Carousel />

      {/* About Section */}
      <About />

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
      <Service />

      {/* Partners Section */}
      <Partenaire />
      {/* Contact Section */}
      <div ref={contactRef}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
