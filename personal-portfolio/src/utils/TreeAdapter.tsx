import type { INodeContextValue } from "../contexts/DirectoryTreeContext";
import type { INode } from "../types/node";

export const treeAdapter = (node: INode): INodeContextValue => {
  const formattedNode: INodeContextValue = {
    id: node.id,
    name: node.name,
    children: node.children?.map(treeAdapter),
    type: node.type,
    iconType: node.iconType,
    fileKey: node.fileKey,
    selected: false,
  };

  return formattedNode;
};
