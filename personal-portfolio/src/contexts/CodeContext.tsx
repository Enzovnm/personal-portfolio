import { createContext, useState, type ReactNode } from "react";
import type { ICode } from "../types/code-type";

interface ICodeContext {
  code: ICode | null;
  setCode: React.Dispatch<React.SetStateAction<ICode | null>>;
}

export const CodeContext = createContext<ICodeContext>({} as ICodeContext);

export const CodeContextProvider = ({ children }: { children: ReactNode }) => {
  const [code, setCode] = useState<ICode | null>(null);
  return (
    <CodeContext.Provider value={{ code: code, setCode: setCode }}>
      {children}
    </CodeContext.Provider>
  );
};
