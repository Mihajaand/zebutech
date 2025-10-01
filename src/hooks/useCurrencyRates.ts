import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

interface Currency {
  code: string;
  name: string;
  country: string;
  countryCode: string;
  flag: string;
}

interface RateInfo {
  amount: number;
  date: string;
}

interface CurrencyRate extends Currency {
  amount: number | null;
  date: string | null;
}

export function useCurrencyRates() {
  const [rates, setRates] = useState<CurrencyRate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch des données avec timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

        const [ratesRes, flagsRes] = await Promise.all([
          fetch(`${API_URL}/api/currency-rate/fresh`, {
            signal: controller.signal,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }),
          fetch("/data/currencies.json"),
        ]);

        clearTimeout(timeoutId);

        if (!ratesRes.ok) {
          throw new Error(
            `API responded with ${ratesRes.status}: ${ratesRes.statusText}`,
          );
        }

        const ratesData = await ratesRes.json();
        const currencies: Currency[] = await flagsRes.json();

        console.log("📊 Structure des données API:", {
          hasData: !!ratesData.data,
          dataLength: ratesData.data?.length || 0,
          firstEntry: ratesData.data?.[0],
          metadata: ratesData.metadata,
        });

        // ✅ Gestion flexible de la structure des données
        const rawRates = ratesData.data || [];

        const rateMap = new Map<string, RateInfo>();

        for (const r of rawRates) {
          // ✅ Support pour Strapi v4 (attributes) et v5 (direct)
          const data = r.attributes || r;

          if (!data.currencyCode) {
            console.warn("⚠️ Entrée sans currencyCode:", r);
            continue;
          }

          const code = data.currencyCode.toUpperCase().trim();
          rateMap.set(code, {
            amount: parseFloat(data.amount) || 0,
            date: data.date || new Date().toISOString().split("T")[0],
          });
        }

        console.log("🗺️ Taux chargés:", {
          totalRates: rateMap.size,
          sampleRates: Array.from(rateMap.entries()).slice(0, 5),
        });

        // Combine avec les infos des devises
        const combined: CurrencyRate[] = currencies.map((currency) => {
          const key = currency.code.toUpperCase().trim();
          const match = rateMap.get(key);

          return {
            ...currency,
            amount: match?.amount ?? null,
            date: match?.date ?? null,
          };
        });

        const validRates = combined.filter((r) => r.amount !== null);
        console.log("✅ Données finales:", {
          totalCurrencies: combined.length,
          withRates: validRates.length,
          withoutRates: combined.length - validRates.length,
        });

        setRates(combined);
      } catch (err) {
        console.error("❌ Erreur complète:", err);

        if (err instanceof Error) {
          if (err.name === "AbortError") {
            setError("Délai d'attente dépassé - Vérifiez votre connexion");
          } else {
            setError(`Erreur de chargement: ${err.message}`);
          }
        } else {
          setError("Erreur inconnue lors du chargement des données");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { rates, loading, error };
}
