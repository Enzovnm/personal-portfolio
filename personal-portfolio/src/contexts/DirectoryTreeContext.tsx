import { createContext, useState } from "react";
import type { INode } from "../types/node";
import { fileStructure } from "../data/fileStructure";

interface IDirectoryTreeContext {
  node: INode;
}

export const DirectoryTreeContext = createContext<IDirectoryTreeContext>(
  {} as IDirectoryTreeContext
);

export const DirectoryThreeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [tree] = useState<INode>(fileStructure);

  return (
    <DirectoryTreeContext.Provider value={{ node: tree }}>
      {children}
    </DirectoryTreeContext.Provider>
  );
};
