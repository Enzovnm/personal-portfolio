import { useDirectoryTreeContext } from "../../hooks/useDirectoryTreeContext";
import { Tab } from "./Tab";

export const TabBar = () => {
  const { node } = useDirectoryTreeContext();


  return (
    <nav className="max-h-9 h-full w-full bg-slate-black text-sm flex">
      <ul className="flex items-center">
        {node.map(({ node }, index) => {
          const className = `pr-8 border-r-1 bg-slate-blue-explorer flex items-center h-full border-r-zinc-900 ${
            index > 0 ? "pl-3" : "pl-0"
          }  ${
            node.selected ? "border-t-1 !border-t-pink-500 !bg-dracula" : ""
          } `;
          if (node.type !== "folder")
            return (
              <Tab
                key={index}
                label={node.name}
                icon={node.icon}
                className={className}
              />
            );
        })}
      </ul>
    </nav>
  );
};
