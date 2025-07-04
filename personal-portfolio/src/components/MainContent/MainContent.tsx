import { useState } from "react";
import { CodeBlock } from "./CodeBlock";
import { ModalMain } from "./ModalMain";

export const MainContent = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  console.log(showModal);
  console.log("renderizou code MainContent");

  return (
    <>
      <main className="bg-dracula pt-4 h-full relative w-full">
        <CodeBlock
          onStart={() => setShowModal(false)}
          onFinish={() => setShowModal(true)}
        />
        <ModalMain isOpen={showModal} onClose={() => setShowModal(false)} />
      </main>
    </>
  );
};
