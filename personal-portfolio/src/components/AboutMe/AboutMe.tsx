import { FaGithub, FaLinkedin } from "react-icons/fa6";
import imgUrl from "../../assets/me.png";
import { BiLogoGmail } from "react-icons/bi";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export const AboutMe = () => {
  const { t } = useTranslation("about");

  return (
    <div className="flex flex-col justify-center lg:justify-start lg:flex-row lg:h-full pt-12 w-full">
      <div className=" flex flex-col  items-center lg:w-1/2">
        <div className="h-72 w-72 lg:w-96 lg:h-96 rounded-full">
          <img
            className="w-full h-full rounded-full object-cover "
            src={imgUrl}
          />
        </div>
        <h3 className="text-2xl text-center mt-8">{t("sectionTitle")}</h3>
        <div className="flex gap-2 mt-8">
          <a href="https://www.linkedin.com/in/enzovila" target="_blank">
            <FaLinkedin className="w-10 h-10" />
          </a>
          <a href="https://github.com/Enzovnm" target="_blank">
            <FaGithub className="w-10 h-10" />
          </a>
          <a href="mailto:enzovila.monteiro@gmail.com">
            <BiLogoGmail className="w-10 h-10" />
          </a>
        </div>
      </div>
      <div className="mt-8 lg:mt-0 text-2xl text-center lg:text-left lg:text-4xl lg:w-1/2">
        <h1 className="text-2xl lg:text-4xl">
          {t("greeting")}
          <motion.span
            animate={{ rotate: [0, 30, -10, 30, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            👋
          </motion.span>
        </h1>
        <div className="mt-9 ">
          <h2 className="lg:text-3xl text-2xl">{t("aboutTitle")}</h2>
          <ul className="text-xl lg:text-2xl mt-9 space-y-9 text-justify list-disc">
            {t("items", { returnObjects: true }).map(
              (item: string, index: number) => (
                <li key={index}>
                  {item.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
