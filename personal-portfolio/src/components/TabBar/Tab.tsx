import type { INodeContextValueLevel } from "../../types/node-context-value-level";

interface ITabProps {
  nodes: INodeContextValueLevel[];
}

export const Tab = ({ nodes }: ITabProps) => {
  return (
    <div className="flex items-center">
      {nodes.map(({ node }) => {
        if (node.type !== "folder")
          return (
            <button>
              {node.icon} {node.name}
            </button>
          );
      })}
    </div>
  );
};
