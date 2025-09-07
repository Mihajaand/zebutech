// translations/languages.ts
// Liste des langues pour le Dropdown de Navbar

export interface LanguageOption {
  code: string;
  label: string;
  flag: string;
}

export const languageOptions: LanguageOption[] = [
  {
    code: "fr",
    label: "Français",
    flag: "https://flagcdn.com/w40/fr.png",
  },
  {
    code: "en",
    label: "English",
    flag: "https://flagcdn.com/w40/us.png",
  },
  {
    code: "zh",
    label: "中文",
    flag: "https://flagcdn.com/w40/cn.png",
  },
  {
    code: "ja",
    label: "日本語",
    flag: "https://flagcdn.com/w40/jp.png",
  },
];
