import { BookOpen, CheckCircle } from "lucide-react";

interface ITechnologiesCardProps {
  logo: string;
  title: string;
  learned: boolean;
  className?: string;
}

export const TechnologiesCard = ({
  logo,
  title,
  learned,
  className,
}: ITechnologiesCardProps) => {
  return (
    <div
      className={`before:content-[''] before:absolute before:top-0 w-118 h-32 bg-slate-blue-explorer flex flex-col justify-evenly p-4 rounded-xl text-white ${className}`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="h-12 w-12">
          <img className="object-cover w-full h-full" src={logo} />
        </div>
        <h1 className="text-xl text-center font-bold">{title}</h1>
        <span>{learned === true ? <CheckCircle /> : <BookOpen />}</span>
      </div>
    </div>
  );
};
