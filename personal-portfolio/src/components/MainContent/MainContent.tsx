import { useState } from "react";
import { CodeBlock } from "./CodeBlock";
import { ModalMain } from "./ModalMain";

export const MainContent = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <main className="bg-dracula pt-4 h-full relative w-full">
        <CodeBlock onFinish={() => setShowModal(true)} />
        <ModalMain isOpen={showModal} />
      </main>
    </>
  );
};
