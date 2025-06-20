import React, {
  createContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { INode } from "../types/node";
import { fileStructure } from "../data/fileStructure";
import ReactTs from "/home/enzo/Programming/personal-portfolio/personal-portfolio/src/assets/react_ts.svg?react";
import Folder from "/home/enzo/Programming/personal-portfolio/personal-portfolio/src/assets/folder.svg?react";
import ReadMe from "/home/enzo/Programming/personal-portfolio/personal-portfolio/src/assets/readme.svg?react";
import Src from "/home/enzo/Programming/personal-portfolio/personal-portfolio/src/assets/folder-src.svg?react";
import Components from "/home/enzo/Programming/personal-portfolio/personal-portfolio/src/assets/folder-components.svg?react";
import { treeAdapter } from "../utils/TreeAdapter";
import type { INodeContextValueLevel } from "../types/node-context-value-level";

interface IDirectoryTreeContext {
  node: INodeContextValueLevel[];
  dfsTree: (node: INodeContextValue | undefined) => void;
}

export interface INodeContextValue extends INode {
  isExpanse: boolean;
  isSelected?: boolean;
  level?: number;
  icon?: ReactNode;
  children?: INodeContextValue[];
}

export const DirectoryTreeContext = createContext<IDirectoryTreeContext>(
  {} as IDirectoryTreeContext
);

export const DirectoryThreeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [tree, setTree] = useState<INodeContextValueLevel[]>([]);

  const icons = {
    tsx: <ReactTs className="h-4 inline items-center" />,
    readme: <ReadMe className="h-4 inline items-center" />,
    src: <Src className="h-4 inline items-center" />,
    components: <Components className="h-4 inline items-center" />,
    folder: <Folder className="h-4 inline items-center" />,
  };

  function addIcon(node: INode): ReactNode {
    if (node.iconType) {
      return icons[node.iconType];
    }
    return null;
  }

  function dfsTree(root: INodeContextValue | undefined): void {
    if (!root) return;

    const result: { node: INodeContextValue; level: number }[] = [];
    const stack = [{ node: root, level: 0 }];

    while (stack.length > 0) {
      const { node, level } = stack.pop()!;

      node.icon = addIcon(node);

      result.push({ node, level });

      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({
            node: node.children[i],
            level: level + 1,
          });
        }
      }
    }

    setTree(result);
  }

  useEffect(() => {
    const adapted = treeAdapter(fileStructure);
    dfsTree(adapted);
  }, []);

  console.log(tree);
  return (
    <DirectoryTreeContext.Provider value={{ node: tree, dfsTree }}>
      {children}
    </DirectoryTreeContext.Provider>
  );
};
