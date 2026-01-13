import type { INodeContextValue } from "../../contexts/DirectoryTreeContext";
import { useDirectoryTreeContext } from "../../hooks/useDirectoryTreeContext";
import ChevronDown from "/home/enzo/Programming/personal-portfolio/personal-portfolio/src/assets/chevron-down.svg?react";
import { useHamburguerContext } from "../../hooks/useHamburguerContext";
import { useTranslation } from "react-i18next";

export const FolderNavigationBar = () => {
  const { node, toggleFolder, handleFileSelected } = useDirectoryTreeContext();

  const flatNodes = node;

  const { close } = useHamburguerContext();

  const handleClick = (node: INodeContextValue) => {
    if (node.type !== "folder") {
      handleFileSelected(node);
      close();
      return;
    }
    toggleFolder(node.id);
  };

  const { t } = useTranslation("files");

  return (
    <div className="h-full flex-col">
      <ul>
        {flatNodes &&
          flatNodes.map(({ node, level }, id) => {
            return (
              <li
                key={id}
                className={`flex w-full h-7 ${
                  node.isVisible ? "block" : "hidden"
                } ${node.selected === true ? "bg-[#2f3340]" : ""}`}
                style={{ paddingLeft: level + "rem" }}
                onClick={() => handleClick(node)}
              >
                <button className="cursor-pointer  w-full text-start ">
                  {node.type === "folder" ? (
                    <ChevronDown className="inline" />
                  ) : (
                    ""
                  )}
                  <span className="mr-2 h-4">{node.icon}</span>
                  {node.fileKey ? t(`${node.fileKey}`) : node.name}
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
