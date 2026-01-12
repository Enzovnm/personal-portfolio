import { useContext } from "react";
import { HamburguerContext } from "../contexts/HamburguerContext";

export const useHamburguerContext = () => {
  const provider = useContext(HamburguerContext);

  if (!provider) {
    throw new Error(
      "useDirectoryTreeContext must be used within an UseDirectoryTreeProvider"
    );
  }

  return provider;
};
