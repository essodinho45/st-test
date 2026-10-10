import { createContext, useContext, useState } from 'react';

interface AppContextType {
  lang: string;
  setLang: (lang: string) => void;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  t: any;
  popData: any[];
  formatNumber: (num: number) => string;
  handleAddData: (data: any) => void;
  // ... other properties
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within an AppProvider");
  return context;
};

export const AppProvider = ({ children }) => {
  // Your state management here (lang, darkMode, popData, etc.)
  const [lang, setLang] = useState('en');
  const [darkMode, setDarkMode] = useState(false);
  // ... other state
  
  const contextValue = {
    lang, setLang, darkMode, setDarkMode,
    activeTab: 'overview', setActiveTab: () => {},
    t: {},
    popData: [],
    formatNumber: (num: number) => num.toString(),
    handleAddData: (data: any) => console.log(data),
    // ... other values
  };
  
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
