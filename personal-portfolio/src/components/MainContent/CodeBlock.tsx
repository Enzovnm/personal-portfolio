import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-typescript.js";
import "dracula-prism/dist/css/dracula-prism.css";

export const CodeBlock = () => {
  const code = "const teste : string = 'Testee'; \nlet age = 18;";

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div className="w-full font-fira-code">
      <pre className="language-typescript !m-0 !p-0">
        <code className="language-typescript">{code}</code>
      </pre>
    </div>
  );
};
