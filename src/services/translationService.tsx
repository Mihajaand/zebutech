import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/api/translations?pagination[limit]=10000`;

export const fetchTranslations = async () => {
  return await axios.get(API_URL);
};
