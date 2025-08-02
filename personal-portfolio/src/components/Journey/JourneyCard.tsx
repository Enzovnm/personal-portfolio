interface IJourneyCardProps {
  logo: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
  arrowDirection: "left" | "right";
  className?: string;
}

export const JourneyCard = ({
  logo,
  title,
  subtitle,
  year,
  description,
  arrowDirection,
  className,
}: IJourneyCardProps) => {
  return (
    <div
      className={`before:content-[''] before:absolute before:top-0 before:h-8 before:-z-0 ${
        arrowDirection === "left"
          ? "before:-left-3.5  before:-rotate-90"
          : "before:-right-3.5 before:rotate-90"
      } before:border-t-transparent before:border-r-transparent before:border-b-slate-blue-explorer before:border-l-transparent before:border-r-[10px] before:border-b-[20px] before:border-l-[10px]  w-132 h-64 bg-slate-blue-explorer flex flex-col justify-evenly p-4 rounded-xl text-white ${className}`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="h-12 w-12">
          <img className="object-cover w-full h-full" src={logo} />
        </div>
        <h1 className="text-xl text-center font-bold">
          {title}
          <span className="text-gray-400 text-center text-sm block">
            {subtitle}
          </span>
        </h1>
        <p className="text-gray-400">{year}</p>
      </div>
      <div className="">
        <p className="text-justify">{description}</p>
      </div>
    </div>
  );
};
