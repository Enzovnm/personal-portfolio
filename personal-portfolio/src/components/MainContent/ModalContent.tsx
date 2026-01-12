import type { ReactNode } from "react";

interface ModalContentProps {
  children?: ReactNode;
}

export const ModalContent = ({ children }: ModalContentProps) => {
  return (
    <section className="w-full h-full bg-white overflow-y-auto rounded-xl p-8 lg:p-16">
      {children}
    </section>
  );
};
