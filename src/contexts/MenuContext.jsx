import { createContext, useContext } from "react";
import data from "../../data/data.json";

const MenuContext = createContext();

function MenuProvider({ children }) {
  const menu = [
    { label: "Home", to: "/" },
    { label: "Destination", to: "/destination" },
    { label: "Crew", to: "/crew" },
    { label: "Technology", to: "/technology" },
  ];

  return (
    <MenuContext.Provider value={{ menu, data }}>
      {children}
    </MenuContext.Provider>
  );
}

function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined)
    throw new Error("MenuContext was used out of scope of MenuProvider");
  return context;
}

export { MenuProvider, useMenu };
