import { Loader2, Send, Shield } from "lucide-react";
import { useState } from "react";
import AsideComponent from "./contact/AsideComponent";
import { countries } from "../data/tel";

// Interface pour les données du formulaire
interface FormData {
  type: string;
  nom: string;
  lieu: string;
  parrain: string;
  civilite: string;
  nomPrenom: string;
  email: string;
  countryCode: string;
  telephone: string;
  message: string;
}

// Interface pour les pays (à ajuster selon votre structure de données)
interface Country {
  iso: string;
  code: string;
  name: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
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

  const [isCaptchaChecked, setIsCaptchaChecked] = useState<boolean>(false);
  const [captchaLoading, setCaptchaLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();

    if (!isCaptchaChecked) {
      alert(
        "Veuillez cocher la case de vérification pour prouver que vous n'êtes pas un robot.",
      );
      return;
    }

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

  const selectedCountry: Country | undefined = countries.find(
    (c: Country) => c.code === formData.countryCode,
  );

  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    if (checked) {
      setCaptchaLoading(true);
      // Simuler la vérification (ex: 2 secondes)
      setTimeout(() => {
        setCaptchaLoading(false);
        setIsCaptchaChecked(true);
      }, 1000);
    } else {
      setIsCaptchaChecked(false);
    }
  };

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
                        {countries.map((country: Country, index: number) => (
                          <>
                            <option
                              key={country.iso}
                              value={country.code}
                              className="text-blue-900"
                            >
                              {country.name} : {country.code}
                            </option>

                            {index === 5 && <hr />}
                          </>
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
                              onError={(
                                e: React.SyntheticEvent<HTMLImageElement>,
                              ) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = "none";
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
                    {formData.telephone && (
                      <label className="flex items-center gap-1 text-xs text-gray-500 italic">
                        <input
                          type="checkbox"
                          name="choix"
                          value="oui"
                          className="form-radio text-md accent-green-500"
                        />
                        Ce numéro à un compte WhatsApp ?
                      </label>
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

            {/* Captcha */}
            <div className="rounded-xl border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      id="captcha"
                      checked={isCaptchaChecked}
                      onChange={handleCaptchaChange}
                      disabled={captchaLoading} // désactiver pendant le spin
                      className="h-6 w-6 rounded border-2 border-gray-300 text-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    />

                    {captchaLoading && (
                      <Loader2 className="absolute top-0 left-0 h-6 w-6 animate-spin text-indigo-600" />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="captcha"
                      className="cursor-pointer text-base font-semibold text-gray-700"
                    >
                      Je ne suis pas un robot
                    </label>
                    <span className="text-sm text-gray-500">
                      Vérification de sécurité requise
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-8 w-8 text-indigo-500" />
                  <div className="text-xs text-gray-400">
                    <div>reCAPTCHA</div>
                    <div className="flex space-x-1">
                      <span>Confidentialité</span>
                      <span>-</span>
                      <span>Conditions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                disabled={!isCaptchaChecked || captchaLoading}
                className={`flex w-full items-center justify-center rounded-xl px-6 py-3 text-base font-bold shadow-lg transition-all duration-200 sm:px-8 sm:py-4 sm:text-lg ${
                  isCaptchaChecked && !captchaLoading
                    ? "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white hover:scale-105 hover:from-indigo-600 hover:to-indigo-700"
                    : "cursor-not-allowed bg-gray-300 text-gray-500"
                }`}
              >
                <Send className="mr-2 h-5 w-5 sm:mr-3" />
                {captchaLoading
                  ? "Vérification en cours..."
                  : isCaptchaChecked
                    ? "Envoyer le message"
                    : "Vérifiez le captcha"}
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
