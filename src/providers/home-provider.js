import { createContext, useContext, useState } from "react";

export const HomeContext = createContext();

export const useHome = () => useContext(HomeContext);

export const HomeProvider = ({ children }) => {
  const [selectCategory, setSelectCategory] = useState(0);
  return (
    <HomeContext.Provider value={{ selectCategory, setSelectCategory }}>
      {children}
    </HomeContext.Provider>
  );
};
