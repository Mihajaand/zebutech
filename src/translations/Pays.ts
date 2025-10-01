export interface PaysOption {
  code: string;
  label: string;
  flag: string;
  coordonnees:{
    lat: number;
    long: number;
  }
  defaultZoom: number;
}

export const paysOptions: PaysOption[] = [
    {
        code: "MG",
        label: "Madagascar",
        flag: "https://flagcdn.com/w40/mg.png",
        coordonnees: {
            lat: -18.766947,
            long: 46.869107,
        },
        defaultZoom: 5
    },
    {
        code: "RE",
        label: "La Réunion",
        flag: "https://flagcdn.com/w40/fr.png",
        coordonnees: {
            lat: -21.115141,
            long: 55.536384,
        },
        defaultZoom: 10
    },
    {
        code: "MU",
        label: "Maurice & Rodrigues",
        flag: "https://flagcdn.com/w40/mu.png",
        coordonnees: {
            lat: -20.348404,
            long: 57.552152,
        },
        defaultZoom: 10
    },
    {
    code: "YT",
    label: "Mayotte",
    flag:  "https://flagcdn.com/w40/fr.png",
    coordonnees: {
        lat: -12.8275,
        long: 45.1662,
    },
    defaultZoom: 10
},
    {
        code: "KM",
        label: "Les Comores",
        flag: "https://flagcdn.com/w40/km.png",
        coordonnees: {
            lat: -11.6455,
            long: 43.3333,
        },
        defaultZoom: 10
    },
{
    code: "SC",
    label: "Les Seychelles",
    flag: "https://flagcdn.com/w40/sc.png",
    coordonnees: {
        lat: -4.6796,
        long: 55.4920,
    },
    defaultZoom: 9
},
    {
        code: "FR",
        label: "France",
        flag: "https://flagcdn.com/w40/fr.png",
        coordonnees: {
            lat: 46.603354,
            long: 1.888334,
        },
        defaultZoom: 5
    }
];