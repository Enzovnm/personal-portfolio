import { createContext, useState } from "react";
import type { INode } from "../types/node";
import { fileStructure } from "../data/fileStructure";

interface IDirectoryTreeContext {
  node: INode;
  dfsTree: (node: INode) => { node: INode; level: number }[] | undefined;
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

  function dfsTree(root: INode): { node: INode; level: number }[] | undefined {
    if (!root) return;

    const result: { node: INode; level: number }[] = [];

    const stack = [{ node: root, level: 0 }];

    while (stack.length > 0) {
      const { node, level } = stack.pop()!;

      result.push({ node, level });

      if (node?.children) {
        for (let i = node?.children?.length - 1; i >= 0; i--) {
          stack.push({ node: node.children[i], level: level + 1 });
        }
      }
    }
    return result;
  }

  return (
    <DirectoryTreeContext.Provider value={{ node: tree, dfsTree }}>
      {children}
    </DirectoryTreeContext.Provider>
  );
};
