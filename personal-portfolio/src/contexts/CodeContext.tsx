import { createContext, useEffect, useState, type ReactNode } from "react";
import type { ICode } from "../types/code-type";
import { useDirectoryTreeContext } from "../hooks/useDirectoryTreeContext";
import type { INodeContextValue } from "./DirectoryTreeContext";
import type { FileKey } from "../types/node";
import { useTranslation } from "react-i18next";

interface ICodeContext {
  code: ICode | null;
}

export const CodeContext = createContext<ICodeContext>({} as ICodeContext);

export const CodeContextProvider = ({ children }: { children: ReactNode }) => {
  const [code, setCode] = useState<ICode | null>(null);

  const { t } = useTranslation("code");

  const { fileSelected } = useDirectoryTreeContext();

  const codeMap: Record<FileKey, ICode> = {
    about: { text: t("code.about") },
    journey: { text: t("code.journey") },
    technologies: { text: t("code.technologies") },
    projects: { text: t("code.projects") },
    contact: { text: t("code.contact") },
    readme: { text: t("code.readme") },
  };

  function setCurrentCode(node: INodeContextValue) {
    if (!node.fileKey) {
      setCode({ text: "console.log('hello world')" });
      return;
    }

    setCode(codeMap[node.fileKey]);
  }

  useEffect(() => {
    if (fileSelected) setCurrentCode(fileSelected);
  }, [fileSelected, t]);

  return (
    <CodeContext.Provider value={{ code: code }}>
      {children}
    </CodeContext.Provider>
  );
};
