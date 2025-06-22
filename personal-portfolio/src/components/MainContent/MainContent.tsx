import { CodeBlock } from "./CodeBlock";
import { Gutter } from "./Gutter";

export const MainContent = () => {
  return (
    <>
      <div className="bg-dracula pt-4 flex h-full w-full">
        <Gutter />
        <CodeBlock />
      </div>
    </>
  );
};
