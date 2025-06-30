import { createContext, useEffect, useState, type ReactNode } from "react";
import type { ICode } from "../types/code-type";
import { useDirectoryTreeContext } from "../hooks/useDirectoryTreeContext";
import type { INodeContextValue } from "./DirectoryTreeContext";

interface ICodeContext {
  code: ICode | null;
}

export const CodeContext = createContext<ICodeContext>({} as ICodeContext);

export const CodeContextProvider = ({ children }: { children: ReactNode }) => {
  const [code, setCode] = useState<ICode | null>(null);
  const aboutMe = `export const AboutMe = () => ({
    name: "Enzo Monteiro",
    role: "Software Engineer @Albato",
    description: myDescription,
    pictureUrl: "./me.png"
  });

  AboutMe();`;

  const { fileSelected } = useDirectoryTreeContext();

  console.log(code);

  function setCurrentCode(node: INodeContextValue) {
    console.log(node);
    switch (node.name) {
      case "AboutMe.tsx":
        setCode({ text: aboutMe });
        break;
      case "Carrer.tsx":
        setCode({ text: "const carrer = 'write here'" });
        break;
      default:
        setCode({ text: "console.log('hello world')" });
    }
  }

  useEffect(() => {
    if (fileSelected) setCurrentCode(fileSelected);
  }, [fileSelected]);

  return (
    <CodeContext.Provider value={{ code: code }}>
      {children}
    </CodeContext.Provider>
  );
};
