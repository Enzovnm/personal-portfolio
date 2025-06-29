import type { ReactNode } from "react";

interface ModalContentProps {
  children?: ReactNode;
}

export const ModalContent = ({ children }: ModalContentProps) => {
  return <section className="w-full h-full p-7">{children}</section>;
};
