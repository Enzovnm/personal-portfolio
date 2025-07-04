import { useState, useEffect } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { useCodeContext } from "../../hooks/useCodeContext";

interface ICodeBlockProps {
  onFinish: () => void;
}

export const CodeBlock = ({onFinish} : ICodeBlockProps) => {
  const [displayedCode, setDisplayedCode] = useState<string>("");
  const [currentLine, setCurrentLine] = useState<number>(0);

  const { code } = useCodeContext();

  useEffect(() => {
    let currentIndex = 0;

    if (code?.text) {
      const interval = setInterval(() => {
        currentIndex++;
        setDisplayedCode(
          code.text.slice(0, currentIndex) +
            `${currentIndex < code?.text.length - 1 ? "|" : ""}`
        );

        setCurrentLine(code.text.slice(0, currentIndex).split("\n").length - 1);
        if (currentIndex >= code.text.length) {
          onFinish();
          return;
        }
      }, 45);

      return () => clearInterval(interval);
    }
  }, [code]);

  return (
    <Highlight code={displayedCode} theme={themes.dracula} language="tsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, minHeight: "100px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              <span
                className={`w-16 px-8 ${
                  i === currentLine ? "text-white" : "text-gutter"
                }`}
              >
                {i + 1}
              </span>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
