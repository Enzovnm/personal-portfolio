import basilidesLogo from "../../assets/basilides_logo.png";
import giordanoLogo from "../../assets/giordano_logo.png";
import wiseupLogo from "../../assets/wiseup_logo.png";
import unipLogo from "../../assets/unip_logo.png";
import albatoLogo from "../../assets/albato_logo.png";
import { JourneyCard } from "./JourneyCard";
import { motion } from "motion/react";

const journey = [
  {
    title: "ETEC Prof° Basilides de Godoy",
    logo: basilidesLogo,
    description:
      "I completed a technical course in Systems Analysis and Development, gaining experience in programming logic, Java/Android, .NET MVC, and database modeling with SQL Server. I was awarded best front-end developer in the course.",
    subtitle: "Technical school",
    year: "2020 ~ 2021",
  },
  {
    title: "Giordano",
    logo: giordanoLogo,
    description:
      "I completed high school at Colégio Giordano, where I acquired the fundamental knowledge of basic education.",
    subtitle: "School",
    year: "2021",
  },
  {
    title: "Wiseup",
    logo: wiseupLogo,
    description:
      "I completed the advanced English course at WiseUp, mastering writing, comprehension, and fluent communication—key skills for thriving in international professional environments.",
    subtitle: "English language school",
    year: "2019 ~ 2022",
  },
  {
    title: "Universidade Paulista",
    logo: unipLogo,
    description:
      "I am currently pursuing a Bachelor's degree in Computer Science at UNIP, gaining a comprehensive and solid foundation in core computing principles, covering everything from algorithms and data structures to software development and complex systems.",
    subtitle: "College",
    year: "2022 ~ Present",
  },
  {
    title: "Albato",
    logo: albatoLogo,
    description:
      "I work at Albato handling APIs and webhooks, developing integrations using the no-code Builder tool, and performing tests with Postman and other tools to ensure efficient automation.",
    subtitle: "Builder engineer",
    year: "2022 ~ Present",
  },
];

export const Journey = () => {
  return (
    <>
      <h1 className="text-4xl text-center">Journey</h1>
      <div className="w-full h-[150vh] flex justify-center mt-8">
        <div className="w-10/12 flex justify-center ">
          <ul className="before:content-[''] before:h-full before:w-1 relative before:absolute before:bg-pink-500">
            {journey.map(
              ({ title, logo, description, subtitle, year }, index) => {
                const topValue = 18 * index + "rem";
                return (
                  <li
                    key={index}
                    style={{
                      position: "absolute",
                      top: topValue,
                      ...(index % 2 === 0
                        ? { right: "0.875rem" }
                        : { left: "0.875rem" }),
                    }}
                  >
                    <motion.div
                      initial={{
                        x: index % 2 === 0 ? -200 : 200,
                        opacity: 0,
                      }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <JourneyCard
                        title={title}
                        logo={logo}
                        description={description}
                        subtitle={subtitle}
                        year={year}
                        arrowDirection={`${index % 2 === 0 ? "right" : "left"}`}
                        className="border-2 border-transparent hover:border-pink-500 hover:border-2"
                      />
                    </motion.div>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
