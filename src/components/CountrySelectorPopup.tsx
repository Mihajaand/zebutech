import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "flowbite-react";
import { useCurrencyRates } from "../hooks/useCurrencyRates";
import { useState } from "react";

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
  const { rates, loading, error } = useCurrencyRates();
  const [search, setSearch] = useState("");

  if (loading) return null;
  if (error) return <p className="p-4 text-red-600">Erreur : {error}</p>;

  const filteredCountries = rates.filter(
    (r) =>
      r.name?.toLowerCase().includes(search.toLowerCase()) ||
      r.code?.toLowerCase().includes(search.toLowerCase()),
  );

  const isSelected = (code: string) => selected.some((c) => c.code === code);

  const toggleCountry = (country: Country) => {
    const already = isSelected(country.code);
    if (already) {
      onUpdate(selected.filter((c) => c.code !== country.code));
    } else {
      onUpdate([...selected, country]);
    }
  };

  return (
    <Modal show={show} onClose={onClose} size="xl" className="max-sm:mt-12">
      <ModalHeader className="flex items-center justify-center sm:text-[8px]!">
        Liste des Pays à afficher
      </ModalHeader>
      <ModalBody>
        <input
          type="text"
          placeholder="RechercherPays"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-4 w-full rounded border border-gray-300 p-2"
        />

        <div className="grid max-h-[400px] grid-cols-2 gap-4 overflow-y-auto">
          {filteredCountries.map((pays) => (
            <div
              key={pays.code}
              className={`flex cursor-pointer items-center gap-2 rounded p-2 ${
                isSelected(pays.code)
                  ? "border border-blue-500 bg-blue-100"
                  : "border border-gray-200 bg-white"
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
                  className="h-4 w-5 rounded"
                />
              )}
              <span>{pays.name || pays.code}</span>
            </div>
          ))}
        </div>
      </ModalBody>
      <ModalFooter className="h-[50px]">
        <Button color="gray cursor-pointer bg-indigo-300!" onClick={onClose}>
          closeButton
        </Button>
      </ModalFooter>
    </Modal>
  );
}
