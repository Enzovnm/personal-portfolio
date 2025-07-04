interface ITitleBarProps {
  type: "screen" | "modal";
  onClose?: () => void;
}

export const TitleBar = ({ type, onClose }: ITitleBarProps) => {
  return (
    <header className="bg-slate-black text-center py-1 text-white text-sm font-medium relative">
      <h1>personal-portfolio</h1>
      <div className="absolute top-1 flex gap-2 px-2 right-0">
        {type === "screen" ? (
          <>
            <button className="rounded-full bg-yellow-500 block h-4 w-4"></button>
            <button className="rounded-full bg-green-500 block h-4 w-4"></button>
            <button className="rounded-full bg-red-400 block h-4 w-4 px"></button>
          </>
        ) : (
          <button
            onClick={onClose}
            className="rounded-full cursor-pointer bg-red-400 block h-4 w-4 px"
          ></button>
        )}
      </div>
    </header>
  );
};
