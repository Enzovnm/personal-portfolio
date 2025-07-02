import type { MouseEvent, ReactNode } from "react";

interface ITabProps {
  label: string;
  icon?: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLLIElement>) => void;
}

export const Tab = ({ label, icon, className, onClick }: ITabProps) => {
  return (
    <li className={`${className} cursor-pointer`} onClick={onClick}>
      <button className="leading-36 cursor-pointer pr-8">
        <span className="mr-1">{icon}</span>
        {label}
      </button>
    </li>
  );
};
