import { createContext, useEffect, useState, type ReactNode } from "react";
import type { ICode } from "../types/code-type";
import { useDirectoryTreeContext } from "../hooks/useDirectoryTreeContext";
import type { INodeContextValue } from "./DirectoryTreeContext";

interface ICodeContext {
  code: ICode | null;
}

export const CodeContext = createContext<ICodeContext>({} as ICodeContext);

export const CodeContextProvider = ({ children }: { children: ReactNode }) => {
  const [code, setCode] = useState<ICode | null>(null);
  const aboutMe = `export const AboutMe = () => ({
    name: "Enzo Monteiro",
    role: "Software Engineer @Albato",
    description: myDescription,
    pictureUrl: "./me.png"
  });

AboutMe();`;

  const journey = `export const Journey = () => ({
    journey: myJourney
  });

Journey();`;

  const technologies = `export const Technologies = () => ({
    technologies: myTechnologies
  });

Technologies();`;

  const projects = `export const Projects = () => ({
    projects: myProjects
  });

Projects();`;

  const { fileSelected } = useDirectoryTreeContext();

  function setCurrentCode(node: INodeContextValue) {
    switch (node.name) {
      case "AboutMe.tsx":
        setCode({ text: aboutMe });
        break;
      case "Journey.tsx":
        setCode({ text: journey });
        break;
      case "Technologies.tsx":
        setCode({ text: technologies });
        break;
      case "Projects.tsx":
        setCode({ text: projects });
        break;
      default:
        setCode({ text: "console.log('hello world')" });
    }
  }

  useEffect(() => {
    if (fileSelected) setCurrentCode(fileSelected);
  }, [fileSelected]);

  return (
    <CodeContext.Provider value={{ code: code }}>
      {children}
    </CodeContext.Provider>
  );
};
