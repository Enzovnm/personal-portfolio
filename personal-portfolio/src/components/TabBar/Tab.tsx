import type { INodeContextValueLevel } from "../../types/node-context-value-level";

interface ITabProps {
  nodes: INodeContextValueLevel[];
}

export const Tab = ({ nodes }: ITabProps) => {
  return (
    <div className="flex items-center">
      {nodes.map(({ node }, index) => {
        if (node.type !== "folder")
          return (
            <button
              className={`pr-8 border-r-1  h-full border-r-zinc-900 ${
                index > 0 ? "pl-3" : "pl-0"
              }`}
            >
              <span className="mr-0.5">{node.icon}</span> {node.name}
            </button>
          );
      })}
    </div>
  );
};
