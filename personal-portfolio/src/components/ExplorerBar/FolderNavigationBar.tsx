import { useDirectoryTreeContext } from "../../hooks/useDirectoryTreeContext";
import ChevronDown from "/home/enzo/Programming/personal-portfolio/personal-portfolio/src/assets/chevron-down.svg?react";

import { useState } from "react";
import type { INode } from "../../types/node";

export const FolderNavigationBar = () => {
  const { node } = useDirectoryTreeContext();

  const flatNodes = node;

  const [currentExpandLevel, setCurrentExpandLevel] = useState<number | null>(
    null
  );

  const handleCurrentExpandLevel = (node: INode, level: number) => {
    if (node.type != "folder") return;

    if (currentExpandLevel === level) {
      setCurrentExpandLevel(null);
    } else {
      setCurrentExpandLevel(level);
    }
  };

  return (
    <div className="h-full flex-col">
      <ul>
        {flatNodes &&
          flatNodes.map(({ node, level }, id) => {
            return (
              <li
                key={id}
                className={`flex w-full h-7 ${
                  currentExpandLevel != null && level > currentExpandLevel
                    ? "hidden"
                    : "block"
                }`}
                style={{ paddingLeft: level + "rem" }}
                onClick={() => handleCurrentExpandLevel(node, level)}
              >
                <button className="cursor-pointer  w-full text-start ">
                  {node.type === "folder" ? (
                    <ChevronDown className="inline" />
                  ) : (
                    ""
                  )}
                  <span className="mr-2">{node.icon}</span>
                  {node.name}
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
