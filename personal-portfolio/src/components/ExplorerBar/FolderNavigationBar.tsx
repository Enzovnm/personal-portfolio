import { useDirectoryTreeContext } from "../../hooks/useDirectoryTreeContext";
import type { INode } from "../../types/node";
import ChevronDown from "/home/enzo/Programming/personal-portfolio/personal-portfolio/src/assets/chevron-down.svg?react";

export const FolderNavigationBar = () => {
  const { node } = useDirectoryTreeContext();

  function dfsTree(root: INode): { node: INode; level: number }[] | undefined {
    if (!root) return;

    const result: { node: INode; level: number }[] = [];

    const stack = [{ node: root, level: 0 }];

    while (stack.length > 0) {
      const { node, level } = stack.pop()!;

      result.push({ node, level });

      console.log(node?.name);

      if (node?.children) {
        for (let i = node?.children?.length - 1; i >= 0; i--) {
          stack.push({ node: node.children[i], level: level + 1 });
        }
      }
    }
    return result;
  }

  const flatNodes = dfsTree(node);
  return (
    <div className="h-full flex-col">
      {flatNodes &&
        flatNodes.map(({ node, level }) => {
          return (
            <div className={`flex w-full h-7 ${"pl-" + level * 2}`}>
              <button className="cursor-pointer  w-full text-start ">
                {node.type === "folder" ? (
                  <ChevronDown className="inline mr-1.5" />
                ) : (
                  ""
                )}
                {node.name}
              </button>
            </div>
          );
        })}
    </div>
  );
};
