import { createContext, useContext, useState, ReactNode } from 'react';
import { PaysOption, paysOptions } from '../translations/Pays';

interface PaysContextType {
  selectedPays: PaysOption;
  setSelectedPays: (pays: PaysOption) => void;
}

const PaysContext = createContext<PaysContextType | undefined>(undefined);

export const usePays = (): PaysContextType => {
  const context = useContext(PaysContext);
  if (!context) {
    throw new Error('usePays doit être utilisé dans un PaysProvider');
  }
  return context;
};

interface PaysProviderProps {
  children: ReactNode;
}

export const PaysProvider: React.FC<PaysProviderProps> = ({ children }) => {
  const [selectedPays, setSelectedPays] = useState<PaysOption>(paysOptions[0]);
  const value: PaysContextType = {
    selectedPays,
    setSelectedPays,
  };

  return (
    <PaysContext.Provider value={value}>
      {children}
    </PaysContext.Provider>
  );
};