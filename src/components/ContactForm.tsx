import { Send } from "lucide-react";
import { useState } from "react";
import AsideComponent from "./contact/AsideComponent";
import { countries } from "../data/tel";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    type: "",
    nom: "",
    lieu: "",
    parrain: "",
    civilite: "",
    nomPrenom: "",
    email: "",
    countryCode: "+261",
    telephone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

  const selectedCountry = countries.find(
    (c) => c.code === formData.countryCode,
  );

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
          <div
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
                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition-colors focus:border-indigo-400 focus:outline-none"
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
                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition-colors focus:border-indigo-400 focus:outline-none"
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
                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition-colors focus:border-indigo-400 focus:outline-none"
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
                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition-colors focus:border-indigo-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Colonne droite */}
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
                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition-colors focus:border-indigo-400 focus:outline-none"
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
                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition-colors focus:border-indigo-400 focus:outline-none"
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
                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition-colors focus:border-indigo-400 focus:outline-none"
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
                  <div className="flex items-stretch gap-3">
                    {/* Sélecteur de pays avec drapeau et code */}
                    <div className="relative">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="h-full w-[120px] cursor-pointer appearance-none rounded-xl border-2 border-gray-200 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 py-3 pr-9 pl-14 text-transparent transition-all duration-200 hover:shadow-md focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23374151' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 10px center",
                          backgroundSize: "18px",
                        }}
                      >
                        {countries.map((country) => (
                          <option
                            key={country.iso}
                            value={country.code}
                            className="text-blue-900"
                          >
                            {country.name} :
                            <span className="text-2xl font-bold">
                              {" "}
                              {country.code}
                            </span>
                          </option>
                        ))}
                      </select>

                      {/* Affichage du drapeau et code sélectionné par-dessus le select */}
                      <div className="pointer-events-none absolute top-1/2 left-3 flex -translate-y-1/2 transform items-center gap-2.5">
                        {selectedCountry && (
                          <>
                            <img
                              src={`https://flagcdn.com/24x18/${selectedCountry.iso}.png`}
                              alt={selectedCountry.name}
                              className="h-5 w-7 rounded-sm object-cover"
                              onError={(e) => {
                                e.target.style.display = "none";
                              }}
                            />
                            <span className="text-sm font-bold tracking-wide text-gray-800">
                              {selectedCountry.code}
                            </span>
                          </>
                        )}
                      </div>

                      {/* Indicateur de focus/hover */}
                      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/0 to-blue-500/0 transition-all duration-200 hover:from-indigo-500/5 hover:to-blue-500/5" />
                    </div>

                    {/* Input numéro de téléphone */}
                    <input
                      name="telephone"
                      type="tel"
                      value={formData.telephone}
                      onChange={handleChange}
                      placeholder="034 34 334 34"
                      required
                      className="w-[200px] flex-1 rounded-xl border-2 border-gray-200 px-4 py-3 font-mono text-lg tracking-wider text-gray-900 transition-all duration-200 hover:border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                    />
                  </div>

                  {/* Exemple et validation */}
                  <div className="mt-2 flex items-center justify-between">
                    <label className="flex items-center gap-1 text-xs text-gray-500">
                      <input
                        type="checkbox"
                        name="choix"
                        value="oui"
                        className="form-radio text-md"
                      />
                      Ce téléphone à une compte WhatssApp ?
                    </label>
                    {formData.telephone && (
                      <div className="flex gap-4">
                        <label className="inline-flex items-center gap-1">
                          <input
                            type="radio"
                            name="choix"
                            value="oui"
                            className="form-radio text-xs"
                          />
                          OUI
                        </label>
                        <label className="inline-flex items-center gap-1">
                          <input
                            type="radio"
                            name="choix"
                            value="non"
                            className="form-radio"
                          />
                          NON
                        </label>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
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
                className="w-full resize-none rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition-colors focus:border-indigo-400 focus:outline-none"
              />
            </div>

            {/* Submit */}
            <div>
              <button
                onClick={handleSubmit}
                className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-3 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 sm:px-8 sm:py-4 sm:text-lg"
              >
                <Send className="mr-2 h-5 w-5 sm:mr-3" /> Envoyer le message
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
