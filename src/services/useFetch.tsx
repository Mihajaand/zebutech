import { useEffect, useState } from "react";

export default function useFetch(url: string) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
  setLoading(true);
  setError(null);

  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("Erreur lors du chargement");
      return res.json();
    })
    .then((data) => {
      console.log("Données récupérées :", data);
      setData(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Erreur fetch :", err);
      setError(err.message);
      setLoading(false);
    });
}, [url]);

  return { data, loading, error };
}