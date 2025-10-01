import { useState, useEffect } from "react";

interface WeatherData {
  name: string;
  main: { temp: number; humidity: number };
  wind: { speed: number };
  weather: { description: string; icon: string }[];
}

const API_KEY = "7c029857079e8059cd70a11d78c33ab5";

export default function Meteo() {
  // Ajout d'une vérification de sécurité pour le contexte

  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>("");
  const [city, setCity] = useState<string>("Antananarivo");
  const [loading, setLoading] = useState(true);

  // Récupération de la géolocalisation avec timeout plus court
  useEffect(() => {
    if (!navigator.geolocation) {
      setLoading(false);
      return;
    }

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 5000); // Timeout de 5 secondes

    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const geoRes = await fetch(
            `https://api.openweathermap.org/geo/1.0/reverse?lat=${coords.latitude}&lon=${coords.longitude}&limit=1&appid=${API_KEY}`,
            {
              signal: AbortSignal.timeout(3000), // Timeout de 3 secondes pour l'API
            },
          );
          const geoData = await geoRes.json();
          const foundCity = geoData?.[0]?.name || "Antananarivo";
          setCity(foundCity);
        } catch (err) {
          console.warn(
            "Géolocalisation échouée, utilisation de la ville par défaut",
          );
        } finally {
          clearTimeout(timeoutId);
          setLoading(false);
        }
      },
      (error) => {
        console.warn("Géolocalisation refusée ou échouée:", error.message);
        clearTimeout(timeoutId);
        setLoading(false);
      },
      {
        timeout: 5000,
        enableHighAccuracy: false, // Plus rapide
      },
    );

    return () => clearTimeout(timeoutId);
  }, []);

  // Récupération de la météo
  useEffect(() => {
    if (!city || loading) return;

    async function fetchMeteo() {
      try {
        setError("");
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=fr`,
          {
            signal: AbortSignal.timeout(5000), // Timeout de 5 secondes
          },
        );

        if (!res.ok) {
          throw new Error(`Erreur HTTP ${res.status}`);
        }

        const data = await res.json();

        // Vérification de la structure des données
        if (!data || !data.weather || !data.main) {
          throw new Error("Données météo invalides");
        }

        setWeather(data);
      } catch (err: any) {
        console.error("Erreur météo:", err);
        setError(err.message || "Erreur inconnue");
      }
    }

    fetchMeteo();
  }, [city, loading]);

  // États de chargement et d'erreur
  if (loading) {
    return (
      <div className="flex w-full items-center justify-center py-2">
        <div className="animate-pulse text-sm text-gray-600">
          Chargement météo...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex w-full items-center justify-center py-2">
        <div className="text-sm text-red-500">Météo indisponible</div>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="flex w-full items-center justify-center py-2">
        <div className="text-sm text-gray-600">Chargement...</div>
      </div>
    );
  }

  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0]?.icon || "01d"}@2x.png`;

  return (
    <div className="flex w-full items-center justify-center">
      {/* Version Desktop */}
      <div className="hidden w-full items-center justify-between gap-4 px-4 py-2 sm:flex">
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-xs font-bold text-gray-800">
            {weather.name}
          </h2>
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-xs text-gray-600 capitalize">
            {weather.weather[0]?.description}
          </p>
          <p className="text-xs text-gray-600">
            Vent {weather.wind?.speed || 0} m/s
          </p>
        </div>

        <div className="flex items-center gap-1">
          <img
            src={iconUrl}
            alt={weather.weather[0]?.description || "météo"}
            className="h-8 w-8"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <span className="text-lg font-bold text-gray-800">
            {Math.round(weather.main?.temp || 0)}°C
          </span>
        </div>
      </div>

      {/* Version Mobile */}
      <div className="flex w-full rounded-lg p-3 sm:hidden">
        {/* Ville */}
        <div className="flex-1 text-left">
          <h2 className="truncate text-sm font-semibold text-gray-800">
            {weather.name}
          </h2>
        </div>

        {/* Description et vent */}
        <div className="flex flex-1 flex-col items-center text-center">
          <p className="truncate text-xs text-gray-600 capitalize">
            {weather.weather[0]?.description}
          </p>
          <p className="text-xs text-gray-600">
            Vent {weather.wind?.speed || 0} m/s
          </p>
        </div>

        {/* Température et icône */}
        <div className="flex flex-1 items-center justify-end gap-1">
          <img
            src={iconUrl}
            alt={weather.weather[0]?.description || "météo"}
            className="h-6 w-6"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <span className="text-sm font-bold text-gray-800">
            {Math.round(weather.main?.temp || 0)}°C
          </span>
        </div>
      </div>
    </div>
  );
}
