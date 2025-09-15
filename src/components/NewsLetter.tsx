import { Send } from "lucide-react";

export default function NewsLetter() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-3xl font-bold text-black">
          Restez informé de nos actualités
        </h2>
        <p className="mb-8 text-xl text-gray-500">
          Recevez les dernières nouvelles de ZebuTech et du secteur
          technologique malgache
        </p>
        <div className="mx-auto flex max-w-lg flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Votre adresse email"
            className="flex-1 rounded-xl border-2 border-blue-600 px-6 py-4 text-gray-900 placeholder-indigo-700 focus:ring-4 focus:ring-white/20"
          />
          <button className="flex flex-row gap-2 rounded-xl bg-indigo-600 px-8 py-4 font-semibold whitespace-nowrap text-white transition-colors hover:cursor-pointer hover:bg-indigo-700">
            S'abonner <Send size={20} className="mt-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
