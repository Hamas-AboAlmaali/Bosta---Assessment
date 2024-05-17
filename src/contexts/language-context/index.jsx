import { createContext, useContext } from 'react';
import usePreferedLanuage from './hooks/usePreferedLanuage';

export const LanguageContext = createContext('ar');

export const LanguageProvider = ({children}) => {
    const langSetting = usePreferedLanuage();
    return (
        <LanguageContext.Provider value={{...langSetting}}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('LanguageContext Porvder not provided');
  }
  return context;
}