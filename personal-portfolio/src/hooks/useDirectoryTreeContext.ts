import { useContext } from "react";
import { DirectoryTreeContext } from "../contexts/DirectoryTreeContext";

export const useDirectoryTreeContext = () => {
  const provider = useContext(DirectoryTreeContext);

  if (!provider) {
    throw new Error(
      "useDirectoryTreeContext must be used within an UseDirectoryTreeProvider"
    );
  }

  return provider;
};
