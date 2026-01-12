import { TechnologiesCard } from "./TechnologiesCard";
import jsLogo from "../../assets/js_logo.png";
import typescriptLogo from "../../assets/typescript_logo.png";
import htmlLogo from "../../assets/html_logo.png";
import cssLogo from "../../assets/css_logo.png";
import reactLogo from "../../assets/react_logo.png";
import bootstrapLogo from "../../assets/bootstrap_logo.png";
import tailwindLogo from "../../assets/Tailwind_CSS_Logo.png";
import saasLogo from "../../assets/saas_logo.png";
import angularLogo from "../../assets/angular_logo.png";
import nodeLogo from "../../assets/node_logo.png";
import expressJsLogo from "../../assets/express_js_logo.png";
import pythonLogo from "../../assets/python_logo.png";
import mySqlLogo from "../../assets/mysql-logo-pure.svg";
import dockerLogo from "../../assets/docker.svg";
import albatoLogo from "../../assets/albato_logo.png";
import n8nLogo from "../../assets/n8n-color.png";
import zapierLogo from "../../assets/zapier-icon.svg";
import makeLogo from "../../assets/make-color.png";
import langchainLogo from "../../assets/langchain_logo.png";
import { BookOpen, CheckCircle } from "lucide-react";

const technologies = [
  {
    logo: htmlLogo,
    title: "HTML",
    learned: true,
    type: "front-end",
  },
  {
    logo: cssLogo,
    title: "CSS",
    learned: true,
    type: "front-end",
  },

  {
    logo: jsLogo,
    title: "JavaScript",
    learned: true,
    type: "front-end",
  },
  {
    logo: typescriptLogo,
    title: "Typescript",
    learned: true,
    type: "front-end",
  },
  {
    logo: reactLogo,
    title: "React.js",
    learned: true,
    type: "front-end",
  },
  {
    logo: tailwindLogo,
    title: "Tailwind CSS",
    learned: true,
    type: "front-end",
  },
  {
    logo: bootstrapLogo,
    title: "Bootstrap",
    learned: true,
    type: "front-end",
  },
  {
    logo: saasLogo,
    title: "SASS",
    learned: true,
    type: "front-end",
  },
  {
    logo: angularLogo,
    title: "Angular",
    learned: false,
    type: "front-end",
  },
  {
    logo: nodeLogo,
    title: "Node",
    learned: true,
    type: "back-end",
  },
  {
    logo: expressJsLogo,
    title: "Express",
    learned: true,
    type: "back-end",
  },
  {
    logo: pythonLogo,
    title: "Python",
    learned: true,
    type: "back-end",
  },
  {
    logo: mySqlLogo,
    title: "MySQL",
    learned: true,
    type: "back-end",
  },
  {
    logo: dockerLogo,
    title: "Docker",
    learned: true,
    type: "dev-ops",
  },
  {
    logo: langchainLogo,
    title: "LangChain",
    learned: true,
    type: "ia",
  },
  {
    logo: albatoLogo,
    title: "Albato",
    learned: true,
    type: "low-code_no-code",
  },
  {
    logo: n8nLogo,
    title: "n8n",
    learned: true,
    type: "low-code_no-code",
  },
  {
    logo: zapierLogo,
    title: "Zapier",
    learned: true,
    type: "low-code_no-code",
  },
  {
    logo: makeLogo,
    title: "Make",
    learned: true,
    type: "low-code_no-code",
  },
];

export const Technologies = () => {
  return (
    <div>
      <h1 className="lg:text-4xl text-2xl text-center">Technologies</h1>
      <div className="flex lg:flex-row flex-col gap-y-4 lg:mt-2  mt-4 lg:gap-y-0 gap-x-2">
        <p>
          <span>
            <CheckCircle className="inline mx-2" />
          </span>
          Proficient
        </p>
        <p>
          <span>
            <BookOpen className="inline mx-2" />
          </span>
          Currently Learning
        </p>
      </div>
      <h2 className="lg:text-3xl text-xl mt-8">Front-end:</h2>
      <div className="mt-8">
        <ul className="flex gap-x-3 gap-y-8 flex-wrap">
          {technologies.map(({ logo, title, learned, type }) => {
            return (
              type === "front-end" && (
                <li>
                  <TechnologiesCard
                    title={title}
                    logo={logo}
                    learned={learned}
                    className="border-2  border-transparent hover:border-pink-500 hover:border-2"
                  />
                </li>
              )
            );
          })}
        </ul>
      </div>
      <h2 className="lg:text-3xl text-xl mt-8">Back-end:</h2>
      <div className="mt-8">
        <ul className="flex gap-x-3 gap-y-8 flex-wrap">
          {technologies.map(({ logo, title, learned, type }) => {
            return (
              type === "back-end" && (
                <li>
                  <TechnologiesCard
                    title={title}
                    logo={logo}
                    learned={learned}
                    className="border-2 border-transparent hover:border-pink-500 hover:border-2"
                  />
                </li>
              )
            );
          })}
        </ul>
      </div>
      <h2 className="lg:text-3xl text-xl mt-8">DevOps:</h2>
      <div className="mt-8">
        <ul className="flex gap-x-3 gap-y-8 flex-wrap">
          {technologies.map(({ logo, title, learned, type }) => {
            return (
              type === "dev-ops" && (
                <li>
                  <TechnologiesCard
                    title={title}
                    logo={logo}
                    learned={learned}
                    className="border-2 border-transparent hover:border-pink-500 hover:border-2"
                  />
                </li>
              )
            );
          })}
        </ul>
      </div>
      <h2 className="lg:text-3xl text-xl mt-8">Artificial Intelligence:</h2>
      <div className="mt-8">
        <ul className="flex gap-x-3 gap-y-8 flex-wrap">
          {technologies.map(({ logo, title, learned, type }) => {
            return (
              type === "ia" && (
                <li>
                  <TechnologiesCard
                    title={title}
                    logo={logo}
                    learned={learned}
                    className="border-2 border-transparent hover:border-pink-500 hover:border-2"
                  />
                </li>
              )
            );
          })}
        </ul>
      </div>
      <h2 className="lg:text-3xl text-xl mt-8">No-code / Low-code</h2>
      <div className="mt-8">
        <ul className="flex gap-x-3 gap-y-8 flex-wrap">
          {technologies.map(({ logo, title, learned, type }) => {
            return (
              type === "low-code_no-code" && (
                <li>
                  <TechnologiesCard
                    title={title}
                    logo={logo}
                    learned={learned}
                    className="border-2 border-transparent hover:border-pink-500 hover:border-2"
                  />
                </li>
              )
            );
          })}
        </ul>
      </div>
    </div>
  );
};
