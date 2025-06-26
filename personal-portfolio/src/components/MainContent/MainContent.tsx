import { CodeBlock } from "./CodeBlock";
import { ModalMain } from "./ModalMain";

export const MainContent = () => {
  return (
    <>
      <main className="bg-dracula pt-4 h-full relative w-full">
        <CodeBlock />
        <ModalMain />
      </main>
    </>
  );
};
