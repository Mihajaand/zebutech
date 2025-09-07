import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { fetchTranslations } from "../services/translationService";
import LoadingSpinner from "../components/LoadingSpinner";

interface LocalizationContextType {
  translations: { [key: string]: { [lang: string]: string } };
  currentLanguage: string;
  setCurrentLanguage: (lang: string) => void;
  trad: (key: string) => string;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(
  undefined,
);

interface LocalizationProviderProps {
  children: ReactNode;
}

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({
  children,
}) => {
  const [translations, setTranslations] = useState<{
    [key: string]: { [lang: string]: string };
  }>({});
  const [currentLanguage, setCurrentLanguage] = useState("fr");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTranslationData = async () => {
      try {
        const response = await fetchTranslations();
        const data = response.data.data;

        const translationsMap = data
          .filter((item: any) => item.identification)
          .map((item: any) => ({
            [item.identification]: {
              fr: item.fr || "",
              en: item.en || "",
              zh: item.zh || "",
              ja: item.ja || "",
            },
          }));

        const merged = Object.assign({}, ...translationsMap);
        setTranslations(merged);
      } catch (error) {
        console.error("❌ Error fetching translations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTranslationData();
  }, []);

  const trad = (key: string): string => {
    return translations[key]?.[currentLanguage] || key;
  };

  if (loading) return <LoadingSpinner />;

  return (
    <LocalizationContext.Provider
      value={{ translations, currentLanguage, setCurrentLanguage, trad }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error(
      "useLocalization must be used within a LocalizationProvider",
    );
  }
  return context;
};
