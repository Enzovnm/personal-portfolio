import ColapseAll from "/home/enzo/Programming/personal-portfolio/personal-portfolio/src/assets/collapse-all.svg?react";

interface ActivityExplorerBarProps {
  className?: string;
}

export const ActivityExplorerBar = ({
  className = "",
}: ActivityExplorerBarProps) => {
  return (
    <div className={`max-h-9 h-full w-full text-sm text-white ${className}`}>
      <div>
        <h2>EXPLORER: PERSONAL-PORTFOLIO</h2>
      </div>
      <div>
        <ColapseAll />
      </div>
    </div>
  );
};
