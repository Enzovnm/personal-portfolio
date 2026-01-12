import { createContext, useState, type ReactNode } from "react";

interface IHamburguerContext {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

export const HamburguerContext = createContext<IHamburguerContext>(
  {} as IHamburguerContext
);

export const HamburguerContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HamburguerContext.Provider
      value={{
        isOpen,
        toggle: () => setIsOpen((prev) => !prev),
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </HamburguerContext.Provider>
  );
};
