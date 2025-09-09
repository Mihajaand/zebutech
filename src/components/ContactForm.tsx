import { Send } from "lucide-react";
import { useState } from "react";
import AsideComponent from "./contact/AsideComponent";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    type: "",
    nom: "",
    lieu: "",
    parrain: "",
    civilite: "",
    nomPrenom: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu peux remplacer par un appel API ou envoi via email
    alert("Message envoyé ! Nous vous contacterons bientôt.");
    console.log("formData:", formData);
  };

  const typeOptions = [
    "Hotel",
    "Hotel Petit Dejeuner",
    "Restaurant gastronomiques",
    "Restaurant rapides",
    "Maison hôte",
    "Bar",
    "Spa",
    "Boutiques",
    "Vente à emporter",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-indigo-100">
      {/* Header */}
      <div className="relative overflow-hidden bg-white shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-300/20 to-white/50" />
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 md:px-8 md:py-16">
          <div className="text-center">
            <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-6xl">
              Contactez-nous
            </h1>
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 sm:w-24" />
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-center gap-10 px-4 py-10 sm:px-6 md:px-8 md:py-16 lg:flex-row lg:gap-16">
        {/* Left - Contact info */}
        <AsideComponent />

        {/* Right - Form */}
        <main className="w-full rounded-3xl border border-indigo-100 bg-white p-6 shadow-2xl backdrop-blur-sm sm:p-8 md:p-10 lg:w-1/2 lg:w-screen">
          <div className="mb-6 text-sm sm:mb-8 sm:text-base">
            <p className="mb-4 text-gray-700 sm:mb-6">
              Vous êtes interessé(e) par notre solution logicielle ?
              Contactez-nous.
            </p>
            <p className="text-gray-600">
              <span className="font-bold text-indigo-600">Parrainage</span> :
              Indiquez qui vous a conseillé la solution.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 text-sm sm:text-base"
          >
            <div className="grid gap-6 md:grid-cols-2">
              {/* Colonne gauche */}
              <div className="space-y-6">
                {/* Type */}
                <div>
                  <label
                    htmlFor="type"
                    className="mb-2 block font-bold text-gray-700"
                  >
                    Type d'établissement *
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 focus:border-indigo-400"
                  >
                    <option value="">
                      Sélectionnez votre type d'établissement
                    </option>
                    {typeOptions.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Nom établissement */}
                <div>
                  <label
                    htmlFor="nom"
                    className="mb-2 block font-bold text-gray-700"
                  >
                    Nom de l'établissement *
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    value={formData.nom}
                    onChange={handleChange}
                    placeholder="Nom de votre établissement"
                    required
                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 focus:border-indigo-400"
                  />
                </div>

                {/* Lieu */}
                <div>
                  <label
                    htmlFor="lieu"
                    className="mb-2 block font-bold text-gray-700"
                  >
                    Lieu *
                  </label>
                  <input
                    id="lieu"
                    name="lieu"
                    type="text"
                    value={formData.lieu}
                    onChange={handleChange}
                    placeholder="Ville, région..."
                    required
                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 focus:border-indigo-400"
                  />
                </div>

                {/* Parrain */}
                <div>
                  <label
                    htmlFor="parrain"
                    className="mb-2 block font-bold text-gray-700"
                  >
                    Parrain
                  </label>
                  <input
                    id="parrain"
                    name="parrain"
                    type="text"
                    value={formData.parrain}
                    onChange={handleChange}
                    placeholder="Établissement ou personne qui vous a conseillé"
                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 focus:border-indigo-400"
                  />
                </div>
              </div>

              {/* Colonne droite (champs 1 par 1) */}
              <div className="space-y-6">
                {/* Civilité */}
                <div>
                  <label
                    htmlFor="civilite"
                    className="mb-2 block font-bold text-gray-700"
                  >
                    Civilité *
                  </label>
                  <select
                    id="civilite"
                    name="civilite"
                    value={formData.civilite}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 focus:border-indigo-400"
                  >
                    <option value="">--</option>
                    <option value="M.">M.</option>
                    <option value="Mme">Mme</option>
                  </select>
                </div>

                {/* Nom/Prénom */}
                <div>
                  <label
                    htmlFor="nomPrenom"
                    className="mb-2 block font-bold text-gray-700"
                  >
                    Nom/Prénom *
                  </label>
                  <input
                    id="nomPrenom"
                    name="nomPrenom"
                    type="text"
                    value={formData.nomPrenom}
                    onChange={handleChange}
                    placeholder="Votre nom et prénom"
                    required
                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 focus:border-indigo-400"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-bold text-gray-700"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    required
                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 focus:border-indigo-400"
                  />
                </div>

                {/* Téléphone */}
                <div>
                  <label
                    htmlFor="telephone"
                    className="mb-2 block font-bold text-gray-700"
                  >
                    Téléphone *
                  </label>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    value={formData.telephone}
                    onChange={handleChange}
                    placeholder="+261..."
                    required
                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 focus:border-indigo-400"
                  />
                </div>
              </div>
            </div>

            {/* Message (full width) */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-bold text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Décrivez vos besoins spécifiques..."
                className="w-full resize-none rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 focus:border-indigo-400"
              />
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-3 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 sm:px-8 sm:py-4 sm:text-lg"
              >
                <Send className="mr-2 h-5 w-5 sm:mr-3" /> Envoyer le message
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
