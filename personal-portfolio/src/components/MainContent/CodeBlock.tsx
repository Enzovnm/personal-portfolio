import React, { useState, useEffect } from "react";
import { Highlight, themes } from "prism-react-renderer";

const fullCode = `export const AboutMe = () => ({
  name: "Enzo Monteiro",
  role: "Software Engineer @Albato",
  techStack: ["React", "Node.js", "Prisma"],
  currentlyLearning: ["Clean Architecture", "AI APIs"],
  funFact: "Soccer",
});

AboutMe();`;

export const CodeBlock = () => {
  const [displayedCode, setDisplayedCode] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex++;
      setDisplayedCode(
        fullCode.slice(0, currentIndex) +
          `${currentIndex < fullCode.length - 1 ? "|" : ""}`
      );
      if (currentIndex >= fullCode.length) {
        return;
      }
    }, 65);

    return () => clearInterval(interval);
  }, []);

  return (
    <Highlight code={displayedCode} theme={themes.dracula} language="tsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, minHeight: "100px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
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
