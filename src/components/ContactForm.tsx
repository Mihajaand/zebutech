import { ArrowRight, MapPin, Phone } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600">
            Intéressé par nos solutions ? Parlons-en ensemble
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Téléphone</h3>
                <p className="text-gray-600">+261 (0)34 23 637 27</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Adresse</h3>
                <p className="text-gray-600">
                  Lot IBM 17Bis - 3ème Etage
                  <br />
                  ISORAKA - Antananarivo
                  <br />
                  MADAGASCAR
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-green-600 p-8 text-white">
              <h3 className="mb-4 text-2xl font-bold">Prêt à commencer ?</h3>
              <p className="mb-6">
                Demandez une démonstration personnalisée de nos solutions
              </p>
              <button className="rounded-lg bg-white px-6 py-3 font-medium text-blue-600 transition-all duration-300 hover:bg-gray-100">
                Demander une démo
              </button>
            </div>
          </div>

          <div className="rounded-2xl bg-gray-50 p-8">
            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Nom de l'établissement
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  placeholder="Votre établissement"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  placeholder="+261..."
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  placeholder="Décrivez vos besoins..."
                ></textarea>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Parrainage (optionnel)
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  placeholder="Qui vous a conseillé notre solution ?"
                />
              </div>
              <button
                onClick={() =>
                  alert("Message envoyé ! Nous vous contacterons bientôt.")
                }
                className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-blue-700"
              >
                Envoyer le message
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
