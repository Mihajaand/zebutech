import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "flowbite-react";
import { useCurrencyRates } from "../hooks/useCurrencyRates";
import { useState } from "react";
import { useLocalization } from "../contexts/LocalizationProvider";

export type Country = {
  code: string;
  label: string;
  flag?: string;
};

type Props = {
  show: boolean;
  onClose: () => void;
  selected: Country[];
  onUpdate: (updatedList: Country[]) => void;
};

export default function CountrySelectorPopup({
  show,
  onClose,
  selected,
  onUpdate,
}: Props) {
 const { trad } = useLocalization();

  const { rates, loading, error } = useCurrencyRates();
  const [search, setSearch] = useState("");

  if (loading) return null;
  if (error) return <p className="text-red-600 p-4">Erreur : {error}</p>;

  const filteredCountries = rates.filter(
  (r) =>
    r.name?.toLowerCase().includes(search.toLowerCase()) ||
    r.code?.toLowerCase().includes(search.toLowerCase())
);

  const isSelected = (code: string) =>
    selected.some((c) => c.code === code);

  const toggleCountry = (country: Country) => {
    const already = isSelected(country.code);
    if (already) {
      onUpdate(selected.filter((c) => c.code !== country.code));
    } else {
      onUpdate([...selected, country]);
    }
  };

  return (
    <Modal show={show} onClose={onClose} size="xl" className=" max-sm:mt-12">
      <ModalHeader className="sm:text-[8px]! flex items-center justify-center">{trad("affichePays")}</ModalHeader>
      <ModalBody>
        <input
          type="text"
          placeholder={trad("RechercherPays")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <div className="grid grid-cols-2 gap-4 max-h-[400px] overflow-y-auto">
          {filteredCountries.map((pays) => (
            <div
              key={pays.code}
              className={`cursor-pointer flex items-center gap-2 p-2 rounded ${
                isSelected(pays.code)
                  ? "bg-blue-100 border border-blue-500"
                  : "bg-white border border-gray-200"
              }`}
              onClick={() =>
                toggleCountry({
                  code: pays.code,
                  label: pays.name || pays.code,
                  flag: pays.flag,
                })
              }
            >
              {pays.flag && (
                <img
                  src={pays.flag}
                  alt={pays.code}
                  className="w-5 h-4 rounded"
                />
              )}
              <span>{pays.name || pays.code}</span>
            </div>
          ))}
        </div>
      </ModalBody>
      <ModalFooter className="h-[50px]">
        <Button color="gray cursor-pointer bg-indigo-300!" onClick={onClose}>
          {trad("closeButton")}
        </Button>
      </ModalFooter>
    </Modal>
  );
}
