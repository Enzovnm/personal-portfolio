import { useDirectoryTreeContext } from "../../hooks/useDirectoryTreeContext";
import ChevronDown from "/home/enzo/Programming/personal-portfolio/personal-portfolio/src/assets/chevron-down.svg?react";
import ReactTs from "/home/enzo/Programming/personal-portfolio/personal-portfolio/src/assets/react_ts.svg?react";
import Folder from "/home/enzo/Programming/personal-portfolio/personal-portfolio/src/assets/folder.svg?react";
import ReadMe from "/home/enzo/Programming/personal-portfolio/personal-portfolio/src/assets/readme.svg?react";
import Src from "/home/enzo/Programming/personal-portfolio/personal-portfolio/src/assets/folder-src.svg?react";
import Components from "/home/enzo/Programming/personal-portfolio/personal-portfolio/src/assets/folder-components.svg?react";
import { useState } from "react";
import type { INode } from "../../types/node";

export const FolderNavigationBar = () => {
  const { node, dfsTree } = useDirectoryTreeContext();

  const [flatNodes] = useState(dfsTree(node));

  const [currentExpandLevel, setCurrentExpandLevel] = useState<number | null>(
    null
  );

  const handleOnclick = (node: INode, level: number) => {
    if (node.type != "folder") return;

    if (currentExpandLevel === level) {
      setCurrentExpandLevel(null);
    } else {
      setCurrentExpandLevel(level);
    }
  };

  const icons = {
    tsx: <ReactTs className="h-4 inline items-center mr-2" />,
    folder: <Folder className="h-4 inline items-center mr-2" />,
    readme: <ReadMe className="h-4 inline items-center mr-2" />,
    src: <Src className="h-4 inline items-center mr-2" />,
    components: <Components className="h-4 inline items-center mr-2" />,
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
                onClick={() => handleOnclick(node, level)}
              >
                <button className="cursor-pointer  w-full text-start ">
                  {node.type === "folder" ? (
                    <ChevronDown className="inline" />
                  ) : (
                    ""
                  )}
                  {node.iconType && icons[node.iconType]}
                  {node.name}
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
