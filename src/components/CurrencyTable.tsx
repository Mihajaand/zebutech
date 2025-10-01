import { useCurrencyRates } from "../hooks/useCurrencyRates";
import { Country } from "./CountrySelectorPopup";

type Props = {
  visiblePays: Country[];
};

export default function CurrencyTable({ visiblePays }: Props) {
  const { rates, loading, error } = useCurrencyRates();
  if (loading)
    return (
      <p className="text-md font-extralight text-gray-500">
        Calcul des taux de change en temps réel...
      </p>
    );
  if (error) return <p>Erreur : {error}</p>;

  // On filtre les rates selon les codes sélectionnés
  // const filteredRates = rates.filter((rate) =>
  //   visiblePays.some((p) => p.code === rate.code)
  // );
  const filteredRates = visiblePays
    .map((p) => rates.find((r) => r.code === p.code))
    .filter((r): r is NonNullable<typeof r> => r !== undefined);

  return (
    <div className="scrollbar-hide relative ml-[-5px] flex items-center justify-start gap-0 overflow-x-auto rounded-l-2xl max-sm:mx-auto max-sm:w-screen max-sm:items-start max-sm:rounded-none sm:bg-indigo-300">
      {filteredRates.map((rate) => (
        <div
          key={rate.code}
          className="ml-2 flex min-w-[180px] items-center gap-2 max-sm:ml-8"
        >
          {rate.flag && (
            <img
              src={rate.flag}
              alt={rate.code}
              width={24}
              height={24}
              className="rounded"
            />
          )}
          <div className="flex items-center gap-2">
            <span className="font-bold">{rate.code}</span>
            <span className="text-sm">
              {rate.amount !== null ? (
                <>
                  {rate.amount.toFixed(2)}
                  <sup className="text-[8px]">&nbsp;MGA</sup>
                </>
              ) : (
                <em className="text-gray-500">non défini</em>
              )}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
