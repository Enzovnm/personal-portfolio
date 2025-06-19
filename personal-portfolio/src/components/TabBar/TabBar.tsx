import { useDirectoryTreeContext } from "../../hooks/useDirectoryTreeContext";
import { Tab } from "./Tab";

export const TabBar = () => {
  const { node } = useDirectoryTreeContext();

  return (
    <nav className="max-h-9 h-full w-full bg-slate-blue-explorer text-sm flex">
      <Tab nodes={node} />
    </nav>
  );
};
