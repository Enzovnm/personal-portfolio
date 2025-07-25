import { useDirectoryTreeContext } from "../../hooks/useDirectoryTreeContext";
import ColapseAll from "/home/enzo/Programming/personal-portfolio/personal-portfolio/src/assets/collapse-all.svg?react";
import Refresh from "/home/enzo/Programming/personal-portfolio/personal-portfolio/src/assets/refresh.svg?react";

interface ActivityExplorerBarProps {
  className?: string;
}

export const ActivityExplorerBar = ({
  className = "",
}: ActivityExplorerBarProps) => {
  const { collapseAll } = useDirectoryTreeContext();
  return (
    <div
      className={`max-h-9 h-full w-full text-sm text-white flex justify-between items-center ${className}`}
    >
      <div>
        <h2>EXPLORER: PERSONAL-PORTFOLIO</h2>
      </div>
      <div className="flex gap-2">
        <button
          aria-label="Colapse All"
          onClick={collapseAll}
          className="cursor-pointer"
        >
          <ColapseAll />
        </button>
        <button aria-label="Refresh explorer">
          <Refresh />
        </button>
      </div>
    </div>
  );
};
