import type { ReactNode } from "react";

interface ITabProps {
  label: string;
  icon?: ReactNode;
  className?: string;
}

export const Tab = ({ label, icon, className }: ITabProps) => {
  return (
    <li className={className}>
      <button className="leading-36 cursor-pointer pr-8">
        <span className="mr-1">{icon}</span>
        {label}
      </button>
    </li>
  );
};
