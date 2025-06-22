import { useContext } from "react";
import { CodeContext } from "../contexts/CodeContext";

export const useCodeContext = () => {
  const provider = useContext(CodeContext);

  if (!provider) {
    throw new Error(
      "'UseCodeContext must be used within an CodeContexProvider'"
    );
  }

  return provider;
};
